---
title: Publish Your Godot Engine Game to Flathub
description: Reach millions of users on the Linux app store with Flatpak
updated: 2024-12-10

image: /images/blog/publish-godot-engine-game-flathub-flatpak/card.png
---

If you follow me on the fediverse ([{{ site.mastodon.handle }}]({{ site.mastodon.url }})), you may have seen me recently [gushing about ROTA](https://mastodon.blaede.family/@cassidy/113604784700813257), a video game I recently discovered. Besides the absolutely charming design and ridiculously satisfying gameplay, the game itself is _open source_, meaning the developer has published the game's underlying code out to the world for anyone to see, learn from, and adapt.

As someone passionate about the Linux desktop ecosystem broadly and Flathub as an app store specifically, I was excited by the possibility of helping to get ROTA onto Flathub so more people could play it—plus, such a high-quality game being on Flathub helps the reputation and image of Flathub itself. So I kicked off a personal project (with the support of my employer¹) to get it onto Flathub—and I learned _a lot_. As a result, here's how I recommend publishing your Godot Engine game to Flathub.

### Overview

Let's take a look at what we're going to achieve at a high level. This post assumes you have source code for a game built with a relatively recent version of Godot Engine (e.g. Godot Engine 3 or 4), access to a Linux computer or VM for testing, and a GitHub account. If you're missing one of those, get that sorted before continuing! You can also check the list of [definitions at the bottom of this page](#definitions) for reference if you need to better understand something.

To build a Flatpak of a Godot Engine game, we only need three things:

1. PCK file
2. Launcher and MetaInfo files
4. Flatpak manifest

The trick is knowing how and where to provide each of these for the best experience publishing your game (and especially updates) to Flathub. There are a bunch of ways you _can_ do it, but I **strongly** recommend:

1. Upload your PCK file to a public, versioned URL, e.g. as a source code release artifact.

2. Include the Launcher and MetaInfo in the repo with your game's source code if it's open source, or provide them via a dedicated repo, versioned URL, or source code release artifact.

   You can alternatively upload these directly to the Flatpak Manifest repository created by Flathub, but it's better to keep them with your game's other files if possible.

3. Your manifest will live in a dedicated GitHub repo owned by the Flathub org. It's nice (but not required) to also include a version of your manifest with your game's source code for easier development and testing.

Let's get into each of those steps in more detail.

### Handling Your PCK File

When you export a Godot Engine game for PC, you're actually creating a platform-agnostic PCK file that contains all of your game's code and assets, plus any plugins and libraries. The export also provides a copy of the platform-specific binary for your game which—despite its name—is actually just the Godot Engine runtime. The runtime simply looks for a PCK file of the same name sitting on disk next to it, and runs it. If you're familiar with emulating retro games, you can think of the binary file as the Godot "emulator", and the PCK file as your game's "ROM."

To publish to Flathub, we'll first need your game's exported PCK file accessible somewhere on the web via a public, versioned URL. We'll include that URL in the Flatpak manifest later so Flatpak Builder knows where to get the PCK file to bundle it with the Godot Engine binary into a Flatpak. Technically any publicly-accessible URL works here, but if your game is open source, **I highly recommend you attach the PCK file as a release artifact** wherever your source code is hosted (e.g. GitHub). This is the most similar to how open source software is typically released and distributed, and will be the most familiar to Flathub reviewers as well as potential contributors to your game.

No matter where you publish your PCK file, the URL needs to be versioned and stable: Flatpak Builder should always get the exact same file when hitting that URL for that release, and if you make a new release of your game, that version's PCK file needs to be accessible at a new URL. **I highly recommend [semantic versioning](https://semver.org/)** for this so it's always obvious to Flathub reviewers which version is newest, and so it matches to the version in the MetaInfo (more on that later).

### Bonus Points: Export in CI

Since Godot Engine is open source and has command-line tools that run on Linux, you can use a source code platform's continuous integration (CI) feature to automatically export and upload your PCK file. This differs a bit depending on your source code hosting platform and Godot Engine version, but triggered by a release, you run a job to:

1. Grab the correct version of the Godot Engine tools binary from their GitHub release
2. Run it headless to export the PCK file
3. Upload that PCK file to the release itself

You could even go as far as to build a test Flatpak in CI, but that's beyond the scope of this post.

#### About that binary…

Since the exported binary file is specific to the platform and Godot Engine  version but _not_ to your game, you do not need to provide it when publishing to Flathub; instead, Flathub builds Godot Engine runtime binaries from the Godot Engine source code for each supported version and processor architecture automatically. This means you just provide the PCK file and specify the Godot Engine version; Flathub will build and publish your Flatpak for 64-bit Intel/AMD PCs, 64-bit ARM computers, and any supported architectures in the future.

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

<dt>Launcher</dt>
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

<style>
  dt { font-weight: bold; }
</style>
