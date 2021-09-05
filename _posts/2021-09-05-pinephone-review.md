---
title: Review of the PinePhone (postmarketOS 3GB version)
description: My review of the PineTime
updated: 2021-09-10
---

> *NOTE:* I've had the PinePhone for about 1 year though it has never been my daily driver. It has been running [Arch Linux ARM (ALARM)](https://github.com/dreemurrs-embedded/Pine64-Arch) most of that time though I have used [postmarketOS](https://wiki.postmarketos.org/wiki/PINE64_PinePhone_(pine64-pinephone)), [Mobian](https://wiki.mobian-project.org/doku.php?id=pinephone) and [Manjaro](https://forum.manjaro.org/t/manjaro-arm-beta13-with-phosh-pinephone/79665) a few different times.

## What I use my current Smart Phone for

- Calls (very limited)
- Texts (with photos and other information)
- Messaging applications like
    - Slack (work)
    - Telegram
    - Discord
- Navigation
- Internet browsing
    - YouTube
    - Search terms
- Taking photos and videos
- Listing to music using Spotify

### What it needs

- USB Type-C

### Bonus Features

- Open Source (big big bonus!)
- Linux kernel (won't have to worry about updates as long as the community works on it)
- USB Type-C (with video out)
- Siglo (native PineTime client)

### Fully Working Features

- Calls
- Texts
- Messsaging
    - Telegram
- Reddit clients
    - [Giara (Gtk3 and libhandy based)](https://gitlab.gnome.org/World/giara) [1]
    - [Giara (Gtk3 and libhandy based)](https://gitlab.gnome.org/World/giara) [2]

[1] [2] These clients opens a Firefox window to login using the official Reddit site and allows the application to access your account. This works really well! 

### Almost There Features

- Social Media applications
    - Tootle (Mastodon client) [1]
    - Cawbird (Twitter client) [2]

[1] [2] Neither application work well on this device's screen to allow me to sign in without using a different device with a larger screen.

### Missing Feature

- Navigation [1]
- Slack [2]

[1] There is recent work on fixing GPS issues but I haven't found a good application to use [OpenStreetMap](openstreetmap.org/) since GNOME Maps doesn't fit the device screen correctly yet.

[2] There is a Flatpak version of Slack and it is in the [AUR](https://aur.archlinux.org/packages/slack-desktop/) though neither have an aarch64 build to install on the PinePhone.