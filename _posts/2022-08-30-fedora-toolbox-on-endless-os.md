title: Using Fedora Toolbox on Endless OS
description: Another note-to-self I hope may be useful to someone out there on the web
updated: 2022-08-30
---

Today I was trying to spin up a `toolbox` (or more recently rebranded to `toolbx`) container with Fedora 36 for some development/CLI tools on my work Endless OS install. By default, `toolbox enter` is supposed to offer to create a container that matches your host OS version, but for whatever reason, the default in Endless OS is to create a Fedora 32 container. I wanted to create a Fedora 36 container because I'm using Fedora Silverblue 36 on my personal machine, so I passed that in:

```sh
toolbox create --distro fedora --release 36
```

To my annoyance, I got this in response:

```
Image required to create toolbox container.
Download registry.fedoraproject.org/f35/fedora-toolbox:36 (500MB)? [y/N]: y
Error: failed to pull image registry.fedoraproject.org/f36/fedora-toolbox:36
```

It turns out the between Endless OS packaging up Toolbox and the Fedora 36 release, Fedora changed the URL structure of their registry—they removed the `/f36/` bit in the middle, but the toolbox CLI is trying to look there! Fortunately, this is an easy fix; instead of the magic `--distro` and `--release` flags, you can point directly to the version on the registry:

```
toolbox create --image registry.fedoraproject.org/fedora-toolbox:36
```

After that, you'll get a fresh Fedora 36 install in your toolbox for all your CLI needs.
