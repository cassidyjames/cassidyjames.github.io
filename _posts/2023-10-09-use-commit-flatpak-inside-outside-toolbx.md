---
title: Use Commit from Flatpak Both Inside and Outside of Toolbx
description: Is this terrible? Probably. But it works!

updated: 2023-10-10
comments:
  id: 111207382044106242
---

This one's gonna be a short one, and is mostly for my own notes. :)

I like to use the [Commit] app as a visual editor when committing changes to a git repo; it's a simple dialog that gives some niceties over using the CLI, like spell check, a visual indication of line length, graying out comments, etc. It's nice!

Here are the instructions provided by Commit to edit your git config:

```sh
git config --global core.editor "flatpak run re.sonny.Commit"
```

Since I'm often in a [toolbx] container when developing, ~~I can't directly access my host's Flatpaks (which makes sense!), and thus the provided instructions don't work in this context~~.

---

### Update: Just Install Flatpak in the Toolbx Container!

Thanks to Felipe and Sebastian in the comments, I learned Flatpak inside a toolbx container is actually smart, and will launch host Flatpaks on the host! So all you actually need to do is:

```sh
sudo dnf install flatpak
```

...or your toolbx container distro's equivalent, then the instructions provided by Commit should Just Work™️.

If you get an error about `unpacking rpm package flatpak`, you may be on an older version of toolbx and need to work around a bug; just `sudo umount /var/lib/flatpak`, then install Flatpak, then restart your container `exit` it, then `podman stop fedora-toolbox-39` (or your container name), then `toolbox enter fedora-toolbox-39` (or your container name) again.

---

### Edit the Git Config (Outdated!)

<aside class="card" markdown="1">
**Note:** The above update should be all you need; the previous contents of this post are included here for posterity and to show the learning process, in case that's still useful to anyone.
</aside>

I _could_ modify my git config to work in the container by using `flatpak-spawn` (which, despite its name, you can use to spawn things outside of toolbx containers as well as outside of flatpaks), but then it won't work on the host, which I also need! So I have to dynamically handle both cases...

After a bit of trial and error, I came up with this kludge:

```sh
git config --global core.editor 'if [ -f /run/.toolboxenv ]; then prefix="flatpak-spawn --host"; fi && $prefix flatpak run re.sonny.Commit'
```

If all you wanted was for this to work for you, copy the above and you're done. :)

#### How it works

Let's step through it to better understand what's going on. I'm going to break it into lines to make it easier to read; I know this can't be parsed as-is by bash, but just bear with the visual:

```sh
git config --global core.editor '
  if [ -f /run/.toolboxenv ]; then 
    prefix="
      flatpak-spawn --host
    ";
  fi 
  && 
  $prefix flatpak run re.sonny.Commit
'
```

So the outer-most part is that we're setting the `core.editor` variable globally with `git config`, just as Commit's original instructions say. We're using single-quotes (`'`) here because we don't want our `$prefix` to be interpreted as string replacement _at the time we set the variable_, which double-quotes (`"`) would do; we just want to include that in the literal string (to be replaced when git runs it).

Next we have an `if` to check if the file `/run/.toolboxenv` exists; this exists in all toolbx containers, so it's an easy way to know if we're running in toolbx.

If we're in toolbx, we set a new variable `prefix` to `flatpak-spawn --host` since we need to run the actual editor on the host, not in our container. We use double-quotes (`"`) here since we're inside of the single-quoted (`'`) string.

After we successfully do the toolbx check and optionally set the prefix, `&&` will tell the shell that's calling the commit program to execute the next bit.

We include the actual original `flatpak run re.sonny.Commit`, this time prefixed by `$prefix`, which will either be string-replaced by a harmless empty string, or by our `flatpak-spawn --host` if we're in a toolbx container. 

**We have to leave the command for the end of our kludged string because git will append the temporary filename** of the commit message to the end of the whole `core.editor` string; if we included `flatpak-span --host flatpak run re.sonny.Commit` inside the `if` statement, it would never get the name of the file to edit, and wouldn't work (ask me how I know...).

So there we are. It's _super_ ugly, but hey, it works. How would you solve this in a better way? Let me know on social media. :)

[commit]: https://flathub.org/apps/re.sonny.Commit
[toolbx]: https://containertoolbx.org/
