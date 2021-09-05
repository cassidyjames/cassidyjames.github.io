---
title: Review of the PinePhone (postmarketOS 3GB version)
description: My review of the PineTime
updated: 2021-09-10
---

> *NOTE:* I've had the PinePhone for about 1 year though it has never been my daily driver. It has been running [Arch Linux ARM (ALARM)](https://github.com/dreemurrs-embedded/Pine64-Arch) most of that time though I have used [postmarketOS](https://wiki.postmarketos.org/wiki/PINE64_PinePhone_(pine64-pinephone)), [Mobian](https://wiki.mobian-project.org/doku.php?id=pinephone) and [Manjaro](https://forum.manjaro.org/t/manjaro-arm-beta13-with-phosh-pinephone/79665) a few different times.

## What I use my current Smart Phone for

- Calls (very limited)
- Texts (with photos and other information)
- Email (using Fastmail for work and ProtonMail for personal)
- Bluetooth (for the PineTime and my car)
- Messaging applications like
    - Slack (work)
    - Telegram
    - Discord
- Navigation
- Internet browsing
    - YouTube
    - Search
- Taking photos and videos
- Listing to music using Spotify

### What it needs

- USB Type-C
- Decent Hardware

### Bonus Features

- Open Source (big bonus!)
- Linux kernel (won't have to worry about updates as long as the community works on it)
- USB Type-C (with video out)
- Hardware Switches to turn off the following devices
    - Microphone
    - Camera(s)
    - Headphone port (this is a bonus as well!)
- Removeable battery (very big bonus!)
- MicroSD card slot (big bonus!)

### Fully Working Features (these were tested on Arch Linux ARM)

- Calls
- Texts
- Bluetooth
- Email [1]
- Messsaging
    - Telegram
- Social Media applications
    - Reddit clients
        - [Gtkeddit (Gtk4 and libadwaita based)](https://gitlab.com/caveman250/Gtkeddit) [2]
        - [Giara (Gtk3 and libhandy based)](https://gitlab.gnome.org/World/giara) [2]
- Spotify
    - [Spot (Gtk4 and libadwaita based)](https://github.com/xou816/spot)[3]

[1] Basic email like Fastmail and Gmail will work just fine using this [article](https://support.system76.com/articles/using-geary) though ProtonMail will need the ProtonMail Bridge running on the device which I haven't tried since the [AUR package](https://aur.archlinux.org/packages/protonmail-bridge/) doesn't target aarch64.

[2] Opens a Firefox window to login using the official site and allows the application to access your account. This works really well! 

[3] Open a window on the device to sign into the service that it is providing.

### Almost There Features

- Social Media applications
    - Tootle (Mastodon client) [1]
    - Cawbird (Twitter client) [1]

[1] Application doesn't work well on this device's screen to allow me to sign in without using a different device with a larger screen.

### Missing Features

- Navigation [1]
- Slack [2]

[1] There is recent work on fixing GPS issues but I haven't found a good application to use [OpenStreetMap](openstreetmap.org/) since GNOME Maps doesn't fit the device screen correctly yet.

[2] There is a Flatpak version of Slack and it is in the [AUR](https://aur.archlinux.org/packages/slack-desktop/) though neither have an aarch64 build to install on the PinePhone.

## Issues

The main issues with the device at least for my use case are the above 'Amost There Features' and 'Missing Features'. 

## Should you get this?

If your needs fit inline with the current limitations and missing or not working yet features and love Open Source on a Smart Phone with no Google or Apple then *MAYBE*. There is a lot working on this and I think depending on the person this can be a daily driver but I don't think it can be a normal user phone as there is some setup missing. With that said if you know what you are doing and want to get your hands dirty then there is *A Lot* to love about this device.
