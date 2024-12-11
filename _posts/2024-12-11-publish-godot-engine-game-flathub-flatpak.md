---
title: Publish Your Godot Engine Game to Flathub
description: Reach millions of users on the Linux app store with Flatpak
updated: 2024-12-11
image: /images/blog/publish-godot-engine-game-flathub-flatpak/card.png
comments:
  id: 113633538720015413
---

If you follow me on the fediverse ([{{ site.mastodon.handle }}]({{ site.mastodon.url }})), you may have seen me recently [gushing about ROTA](https://mastodon.blaede.family/@cassidy/113604784700813257), a video game I recently discovered. Besides the absolutely charming design and ridiculously satisfying gameplay, the game itself is _open source_, meaning the developer has published [the game's underlying code](https://github.com/HarmonyHoney/ROTA) out to the world for anyone to see, learn from, and adapt.

![Screenshot of ROTA, a colorful 2D platformer](https://github.com/HarmonyHoney/ROTA/raw/branch5/media/image/assets/screens/thumb/1.png?raw=1){: .card }

As someone passionate about the Linux desktop ecosystem broadly and Flathub as an app store specifically, I was excited by the possibility of helping to get ROTA onto Flathub so more people could play it—plus, such a high-quality game being on Flathub helps the reputation and image of Flathub itself. So I kicked off a personal project (with the support of my employer¹) to get it [onto Flathub](https://flathub.org/apps/net.hhoney.rota)—and I learned _a lot_—especially what steps were confusing or unclear. 

As a result, here's how I recommend publishing your Godot Engine game to Flathub. Oh, and don't be too scared; despite the monumental size of this blog post, I promise it's actually pretty easy! 😇

* Table of Contents
{:toc}

### Overview

Let's take a look at what we're going to achieve at a high level. This post assumes you have source code for a game built with a relatively recent version of Godot Engine (e.g. Godot Engine 3 or 4), access to a Linux computer or VM for testing, and a GitHub account. If you're missing one of those, get that sorted before continuing! You can also check the list of [definitions at the bottom of this page](#definitions) for reference if you need to better understand something, and be sure to check out the [Flathub documentation](https://docs.flathub.org/docs/category/for-app-authors) for a lot more details on Flatpak publishing in general.

![Illustration with the Godot Engine logo, then an arrow pointing to the Flathub logo]({{ page.image }}){: .card }

To build a Flatpak of a Godot Engine game, we only need three things:

1. Exported PCK file
2. Desktop Entry, icon, and MetaInfo files
3. Flatpak manifest to put it all together

The trick is knowing how and where to provide each of these for the best experience publishing your game (and especially updates) to Flathub. There are a bunch of ways you _can_ do it, but I **strongly** recommend:

1. Upload your PCK file to a public, versioned URL, e.g. as a source code release artifact.

2. Include the Desktop Entry, icon, and MetaInfo files in the repo with your game's source code if it's open source, or provide them via a dedicated repo, versioned URL, or source code release artifact.

   You can alternatively upload these directly to the Flatpak Manifest repository created by Flathub, but it's better to keep them with your game's other files if possible.

3. Your manifest will live in a dedicated GitHub repo owned by the Flathub org. It's nice (but not required) to also include a version of your manifest with your game's source code for easier development and testing.

Let's get into each of those steps in more detail.

### 1. Handling Your PCK File

When you export a Godot Engine game for PC, you're actually creating a platform-agnostic PCK file that contains all of your game's code and assets, plus any plugins and libraries. The export also provides a copy of the platform-specific binary for your game which—despite its name—is actually just the Godot Engine runtime. The runtime simply looks for a PCK file of the same name sitting on disk next to it, and runs it. If you're familiar with emulating retro games, you can think of the binary file as the Godot "emulator", and the PCK file as your game's "ROM."

To publish to Flathub, we'll first need your game's exported PCK file accessible somewhere on the web via a public, versioned URL. We'll include that URL in the Flatpak manifest later so Flatpak Builder knows where to get the PCK file to bundle it with the Godot Engine binary into a Flatpak. Technically any publicly-accessible URL works here, but if your game is open source, **I highly recommend you attach the PCK file as a release artifact** wherever your source code is hosted (e.g. GitHub). This is the most similar to how open source software is typically released and distributed, and will be the most familiar to Flathub reviewers as well as potential contributors to your game.

**No matter where you publish your PCK file, the URL needs to be public, versioned, and stable**: Flatpak Builder should always get the exact same file when hitting that URL for that release, and if you make a new release of your game, that version's PCK file needs to be accessible at a new URL. **I highly recommend [semantic versioning](https://semver.org/)** for this, but it at least needs to be incrementally versioned so it's always obvious to Flathub reviewers which version is newest, and so it matches to the version in the MetaInfo (more on that later). Match your game's regular versioning scheme if possible.

#### Bonus Points: Export in CI

Since Godot Engine is open source and has command-line tools that run on Linux, you can use a source code platform's continuous integration (CI) feature to automatically export and upload your PCK file. This differs a bit depending on your source code hosting platform and Godot Engine version, but triggered by a release, you run a job to:

1. Grab the correct version of the Godot Engine tools binary from their GitHub release
2. Export the PCK file from the command line ([Godot Docs](https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html#doc-command-line-tutorial-exporting))
3. Upload that PCK file to the release itself

This is advantageous because it ensures the PCK file attached to the release is exported from the exact code from in the release, increasing transparency and reducing the possibility of human error. Here is [one example](https://github.com/cassidyjames/ROTA/blob/717602441fe9dd4607802388ba7047b08bd4621b/.github/workflows/godot.yml) of such a CI workflow.

#### About That Binary…

Since the exported binary file is specific to the platform and Godot Engine version but _not_ to your game, you do not need to provide it when publishing to Flathub; instead, Flathub builds Godot Engine runtime binaries from the Godot Engine source code for each supported version and processor architecture automatically. This means you just provide the PCK file and specify the Godot Engine version; Flathub will build and publish your Flatpak for 64-bit Intel/AMD PCs, 64-bit ARM computers, and any supported architectures in the future.

### 2. Desktop Entry, Icon, and MetaInfo Files

Desktop Entry and MetaInfo are FreeDesktop.org specifications that ensure Linux-based OSes interoperate; for our purposes, you just need to know that a [Desktop Entry](https://specifications.freedesktop.org/desktop-entry-spec/latest/) is what makes your game integrate on Linux (e.g. show in the dock, app menus, etc.), while [MetaInfo](https://www.freedesktop.org/software/appstream/docs/chap-Quickstart.html) provides everything needed to represent an app or game in an app store, like Flathub.

Writing them is simple enough, especially given an example to start with. FreeDesktop.org has a [MetaInfo Creator](https://www.freedesktop.org/software/appstream/metainfocreator/) web app that can even generate a starting point for you for both, but note that for Flathub:

- The icon name given must match the app ID, which the site lists as a "Unique Software Identifier"; don't worry about icon filenames yet, as this can be handled later in the manifest

- The "Executable Name" will be `godot-runner` for Godot Engine games

If included in your source code repository, I recommend storing these files in a `flatpak/` directory as `launcher.desktop`, `metainfo.xml`, and, if it doesn't exist in a suitable format somewhere else in the repo, `icon.png`. The exported names will need to match the app ID, but that can be handled later in the manifest.

If your game is not open source or these files are not to be stored in the source code repository, I recommend storing and serving these files from the same versioned web location as your game's PCK file.

Here are some specifics and simple examples to give you a better idea:

#### Desktop Entry

You'll only ever need to set Name, Comment, Categories, and Icon. See the [Additional Categories spec](https://specifications.freedesktop.org/menu-spec/latest/additional-category-registry.html) for what you can include in addition to the `Game` category. Note the trailing semicolon!

```ini
[Desktop Entry]
Name=ROTA
Comment=Gravity bends beneath your feet
Categories=Game;KidsGame;
Icon=net.hhoney.rota
Exec=godot-runner
Type=Application
Terminal=false
```
<figcaption>flatpak/launcher.desktop</figcaption>

#### Icon

This is pretty straightforward; you need an icon for your game! This icon is used to represent your game both for app stores like Flathub.org and the native app store clients on players' computers, plus as the launcher icon e.g. on the player's desktop or dock.

<figure markdown=1>
![Screenshot of ROTA, a colorful 2D platformer](/images/{{ page.url }}/dash.png){: .card }
<figcaption>ROTA's icon in the GNOME Dash</figcaption>
</figure>

If your game is open source, it's easy enough to point to the same icon you use for other platform exports. If you must provide a unique icon for Flathub (e.g. for size or style reasons), you can include that version in the same place as your Desktop Entry and MetaInfo files. The icon must be a square aspect ratio as an SVG or 256×256 pixel (or larger) PNG.

#### MetaInfo

I won't cover absolutely everything here (see the Flathub docs covering [MetaInfo Guidelines](https://docs.flathub.org/docs/for-app-authors/metainfo-guidelines/) for that), you should understand a few things about MetaInfo for your game.

The top-most `id` must be in valid RDNN format for a domain or code hosting account associated with the game. For example, if your website is `example.com`, the ID should begin with `com.example.`. You should also use this prefix for the developer `id` to ensure all of your apps/games are associated with one another. I strongly recommend using your own domain name rather than an `io.itch.` or `io.github.` prefix here, but ultimately it is up to you. Note that as of writing, **Itch.io-based IDs cannot be verified on Flathub**.

Screenshots should be at stable URLs; e.g. if pointing to a source code hosting service, make sure you're using a tag (like `1.0.0`) or commit (like `6c7dafea0993700258f77a2412eef7fca5fa559c`) in the URL rather than a branch name (like `main`). This way the right screenshots will be included for the right versions, and won't get incorrectly cached with an old version.

You can provide various URLs to link people from your game's app store listing to your website, an issue tracker, a donation link, etc. In the case of the donation link, the Flathub website displays this prominently as a button next to the download button.

Branding colors and screenshots are some of your post powerful branding elements! Choose colors that compliment (but aren't too close to) your game's icon. For screenshots, include a caption related to the image to be shown below it, but **do not include marketing copy or other graphics in the screenshots themselves** as they may be rejected.

Releases must be present, and are required to have a version number; **this must be an incrementing version number** as Flatpak Builder will use the latest version here to tag the build. I strongly recommend the simple [Semantic Versioning](https://semver.org/) format, but you may prefer to use a date-based `2024.12.10` format. These release notes show on your game's listing in app stores and when players get updates, so be descriptive—and fun!

Content ratings are developer-submitted, but may be reviewed by Flathub for accuracy—so please, be honest with them. Flathub uses the [Open Age Ratings Service](https://hughsie.github.io/oars/generate.html) for the relevant metadata; it's a free, open source, and straightforward survey that spits out the proper markup at the end.

This example is pretty verbose, taking advantage of most features available:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<component type="desktop-application">
  <id>net.hhoney.rota</id>
  
  <name>ROTA</name>
  <summary>Gravity bends beneath your feet</summary>

  <developer id="net.hhoney">
    <name translatable="no">HHoney Software</name>
  </developer>

  <description>
    <p>Move blocks and twist gravity to solve puzzles. Collect all 50 gems and explore 8 vibrant worlds.</p>
  </description>

  <content_rating type="oars-1.1">
    <content_attribute id="violence-cartoon">mild</content_attribute>
  </content_rating>
  
  <url type="homepage">https://hhoney.net</url>
  <url type="bugtracker">https://github.com/HarmonyHoney/ROTA/issues</url>
  <url type="donation">https://ko-fi.com/hhoney</url>

  <branding>
    <color type="primary" scheme_preference="light">#ff99ff</color>
    <color type="primary" scheme_preference="dark">#850087</color>
  </branding>

  <screenshots>
    <screenshot type="default">
      <image>https://raw.githubusercontent.com/HarmonyHoney/ROTA/6c7dafea0993700258f77a2412eef7fca5fa559c/media/image/assets/screens/1.png</image>
      <caption>Rotate gravity as you walk over the edge!</caption>
    </screenshot>
    <screenshot>
      <image>https://raw.githubusercontent.com/HarmonyHoney/ROTA/6c7dafea0993700258f77a2412eef7fca5fa559c/media/image/assets/screens/2.png</image>
      <caption>Push, pull and rotate gravity-blocks to traverse the stage and solve puzzles</caption>
    </screenshot>
    <screenshot>
      <image>https://raw.githubusercontent.com/HarmonyHoney/ROTA/6c7dafea0993700258f77a2412eef7fca5fa559c/media/image/assets/screens/3.png</image>
      <caption>Collect all 50 gems to unlock doors and explore 8 vibrant worlds!</caption>
    </screenshot>
  </screenshots>

  <releases>
    <release version="1.0" date="2022-05-07T22:18:44Z">
      <description>
        <p>Launch Day!!</p>
      </description>
    </release>
  </releases>

  <launchable type="desktop-id">net.hhoney.rota.desktop</launchable>
  <metadata_license>CC0-1.0</metadata_license>
  <project_license>Unlicense</project_license>
</component>
```
<figcaption>flatpak/metainfo.xml</figcaption>

#### Bonus Points: Flathub Quality Guidelines

Beyond Flathub's base requirements for publishing games are their [Quality Guidelines](https://docs.flathub.org/docs/for-app-authors/metainfo-guidelines/quality-guidelines). These are slightly more opinionated human-judged guidelines that, if met, **make your game eligible to be featured** in the banners on the Flathub.org home page, as a daily-featured app, and in other places like in some native app store clients. You should strive to meet these guidelines if at all possible!

One common snag is the icon: generally Flathub reviewers are more lenient with games, but if you need help meeting the guidelines for your Flathub listing, be sure to reach out on the Flathub [Matrix chat](https://matrix.to/#/#flathub:matrix.org) or [Discourse forum](https://discourse.flathub.org/).

### 3. Flatpak manifest

Finally, **the piece that puts it all together**: your manifest! This can be a JSON or YAML file, but is named the same as your game's app ID.

The important bits that you'll need to set here are the `id` (again matching the app ID), `base-version` for the Godot Engine version, the `sources` for where to get your PCK, Desktop Entry, MetaInfo, and icon files (in the below example, a source code repository and a GitHub release artifact), and the specific `build-commands` that describe where in the Flatpak those files get installed.

For the supported Godot Engine versions, check the [available branches of the Godot Engine BaseApp](https://github.com/flathub/org.godotengine.godot.BaseApp/branches/all).

For git sources, be sure to point to a specific commit hash; I also prefer to point to the release tag as well (e.g. with `tag: v1.2.3`) for clarity, but it's not strictly necessary. For file sources, be sure to include a hash of the file itself, e.g. `sha256: a89741f…`). For a file called `export.pck`, you can generate this on Linux with `sha256sum export.pck`; on Windows with `CertUtil -hashfile export.pck sha256`.

```yaml
id: net.hhoney.rota
runtime: org.freedesktop.Platform
runtime-version: '24.08'
base: org.godotengine.godot.BaseApp
base-version: '3.6'
sdk: org.freedesktop.Sdk
command: godot-runner

finish-args:
  - --share=ipc
  - --socket=x11
  - --socket=pulseaudio
  - --device=all

modules:
  - name: rota
    buildsystem: simple

    sources:
      - type: git
        url: https://github.com/HarmonyHoney/ROTA.git
        commit: be542fa2444774fe952ecb22d5056a048399bc25

      - type: file
        url: https://github.com/HarmonyHoney/ROTA/releases/download/something/ROTA.pck
        sha256: a89741f56eb6282d703f81f907617f6cb86caf66a78fce94d48fb5ddfd65305c

    build-commands:
      - install -Dm644 ROTA.pck ${FLATPAK_DEST}/bin/godot-runner.pck
      - install -Dm644 flatpak/launcher.desktop ${FLATPAK_DEST}/share/applications/${FLATPAK_ID}.desktop
      - install -Dm644 flatpak/metainfo.xml ${FLATPAK_DEST}/share/metainfo/${FLATPAK_ID}.metainfo.xml
      - install -Dm644 media/image/icon/icon256.png ${FLATPAK_DEST}/share/icons/hicolor/256x256/apps/${FLATPAK_ID}.png

```
<figcaption>net.hhoney.rota.yml</figcaption>

Once you have your manifest file, you're ready to test it and [submit your game to Flathub](https://docs.flathub.org/docs/for-app-authors/submission). To test it, follow the instructions at that link on a Linux computer (or VM); you should be able to point Flatpak Builder to your manifest file for it to grab everything and build a Flatpak of your game.

The Flathub [Submission PR](https://docs.flathub.org/docs/for-app-authors/submission#submission-pr) process is a bit confusing; you're just opening a pull request against a specific `new-pr` branch on GitHub that adds your manifest file; Flathub will then human-review it and run automated tests on it to make sure it all looks good. They'll provide feedback on the PR if needed, and then if it's accepted, a bot will create a _new_ repo on the Flathub org just for your game's manifest. You'll automatically have the correct permissions on this repo to be able to propose PRs to update the manifest, and merge them once they pass automated testing.

_Please_ be sure to test your manifest before submitting so you don't end up wasting reviewers' time. 🙏

### You Did It!

You published your game to Flathub! Or at least you made it this far in the blog post; either way, that's a win.

I know this was quite the slog to read through; my hope is that it can serve as a reference for game developers out there. I'm also interested in adapting it into documentation for Flatpak, Flathub, and/or Godot Engine—but I wasn't sure where it would fit and in what format. If _you'd_ like to adapt any of this post into proper documentation, please feel free to do so!

If you spot something wrong or just want to reach out, hit me up using any of the links in the footer.

#### Bonus Points: Publishing Updates

When I wrapped this blog post up, I realized I missed mentioning how to handle publishing updates to your game on Flathub. While I won't go into great detail here, the gist is:

1. Update your MetaInfo file with the new release version number, timestamp, and release notes; publish this either in your source code repo or alongside the PCK file; if you have new screenshots, be sure to update those URLs in the MetaInfo file, too!

2. Export a new PCK file of your release, uploading it to a public, stable URL containing the new version number (e.g. a GitHub release)

3. Submit a pull request against your Flatpak manifest's GitHub repo, pointing the manifest at new versioned locations of your files; be sure to update the file hashes as well!

After passing automated tests, a bot will comment on the PR with command to test your Flatpak. _Do this_ as the resulting Flatpak is what will be published to players after the PR is merged. If it all looks good, merge it, and you're set! If not, repeat the above steps until everything is as expected. :)

---

<!-- idk where to stick this -->

<aside markdown=1>
¹At [Endless](https://www.endlessos.org/), we run [game-making programs](https://www.endlessos.org/game-making) to help underrepresented learners develop and practice soft skills like communication, problem decomposition, and collaboration—as well as technical skills—through an immersive journey of video game development.

Godot Engine is an important tool for these programs, and we are constantly looking for examples of open source games built with Godot Engine to use as examples or even real-world projects for learners. This is how I came across ROTA, but getting ROTA onto Flathub in and of itself was a great learning opportunity for me to better understand open source game development, Godot Engine, building Flatpaks, and publishing to Flathub.
</aside>

---

### Definitions

There are a lot of terms and technologies involved on both the Godot Engine and Flathub side, so let's start with some definitions. Don't worry if you don't fully understand each piece of these, but you can use this as a cheat sheet to refer back to.

<dl>

<dt>Godot Engine</dt>
<dd markdown=1>
Open source game engine that includes the _editor_ (the actual app you use to create a game), _tools_ (command-line tools for exporting a game), and _runtime_ (platform-specific binary distributed with your game which actually runs it)
</dd>

<dt>Export</dt>
<dd markdown=1>
Prepare your game for distribution; Godot Engine's export workflow packages up your game's code, assets, libraries, etc. and turns it into a playable game.
</dd>

<dt>PCK File</dt>
<dd markdown=1>
The platform-agnostic result of a Godot Engine export to use along with the platform-specific runtime. Contains all of your game's code, assets, etc. packed up with a `.pck` extension.
</dd>

<dt>Flatpak</dt>
<dd markdown=1>
App/game packaging format for Linux that works across nearly every different Linux distribution. An important design of Flatpak is that it is _sandboxed_, which keeps each app or game from interfering with one another and helps protect players' privacy.
</dd>

<dt>Flathub</dt>
<dd markdown=1>
The de facto Linux app store with thousands of apps and games, [millions of active users](https://docs.flathub.org/blog/2-billion-downloads-2024), and a helpful community of open source people like me! It uses Flatpak and other open standards to build, distribute, and update apps and games.
</dd>

<dt>Flatpak Manifest</dt>
<dd markdown=1>
A structured file (in JSON or YAML format) that tells Flatpak how to package your game, including where to get the game itself from. Flathub hosts the manifest files for apps and games on their GitHub organization, regardless of where your game is developed or hosted.
</dd>

<dt>Flatpak Builder</dt>
<dd markdown=1>
Command-line tool that takes a Flatpak manifest and uses it to create an actual Flatpak. Used for local testing, CI workflows, and Flathub itself.
</dd>

<dt>Flatpak BaseApp</dt>
<dd markdown=1>
Shared base for building a Flatpak; i.e. all Godot 3.6 games can use the same BaseApp to simplify the game's manifest, and Flatpak Builder will take care of the common Godot 3.6-specific bits.
</dd>

<dt>Desktop Entry</dt>
<dd markdown=1>
A simple INI-like file that determines how your game shows up on Linux, i.e. its name, icon, and categories.
</dd>

<dt>MetaInfo</dt>
<dd markdown=1>
Open standard for describing apps and games to be displayed in app stores; used by Flathub and Linux app store clients to build your game's listing page.
</dd>

<dt>App ID</dt>
<dd markdown=1>
A unique ID for your game in reverse domain name notation (RDNN), based on a valid web domain or source code hosting account you control. Required by Flatpak and validated by Flathub to ensure an app or game is what it claims to be.
</dd>

<dt>Flathub Verification</dt>
<dd markdown=1>
Optional (but highly recommended!) process to verify that your game on Flathub is published by you. Uses your game's app ID to verify ownership of your domain or source code hosting account.
</dd>

</dl>
