---
title: Review of the PinePhone (postmarketOS 3GB version)
description: Kinda of a current state article of the device as well
updated: 2021-09-06
---

> *NOTE:* I've had the PinePhone for about 1 year though it has never been my daily driver. It has been running [Arch Linux ARM (ALARM)](https://github.com/dreemurrs-embedded/Pine64-Arch) most of that time though I have used [postmarketOS](https://wiki.postmarketos.org/wiki/PINE64_PinePhone_(pine64-pinephone)), [Mobian](https://wiki.mobian-project.org/doku.php?id=pinephone) and [Manjaro](https://forum.manjaro.org/t/manjaro-arm-beta13-with-phosh-pinephone/79665) a few different times.

I took the screenshots in this post using `grim` like this `sleep 5; grim` this gave me the time to move to the application that I wanted to take a screenshot of since `grim` takes a screenshot right away. I then used `scp` to move the screenshots to my desktop computer to post them on this blog post.

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
        - [Gtkeddit (Gtk4 and libadwaita)](https://gitlab.com/caveman250/Gtkeddit) [2]
        - [Giara (Gtk3 and libhandy)](https://gitlab.gnome.org/World/giara) [2]
    - Twitter client
        - [Cawbird (Gtk3)](https://github.com/IBBoard/cawbird) [2]
- Music
    - Spotify
        - [Spot (Gtk4 and libadwaita)](https://github.com/xou816/spot)[3]
    - Local Music 
        - [Lollypop (Gtk3 and libhandy)](https://gitlab.gnome.org/World/lollypop)[4]

[1] Basic email like Fastmail and Gmail will work just fine using this [article](https://support.system76.com/articles/using-geary) though ProtonMail will need the ProtonMail Bridge running on the device which I haven't tried since the [AUR package](https://aur.archlinux.org/packages/protonmail-bridge/) doesn't target aarch64.

[2] Opens a Firefox window to login using the official site and allows the application to access your account. This works pretty well! 

<img src="/images/{{ page.url }}/Gtkeddit-Working.png" alt="drawing" width="200"/>

Gtkeddit working with my personal Reddit account.

| Setup 1 | Setup 2 | Setup 3b | 
| ------- | ------- | -------- | 
| ![Cawbird Setup 1](/images/{{ page.url }}/Cawbird-Setup1.png) | ![Cawbird Setup 2](/images/{{ page.url }}/Cawbird-Setup2.png) | ![Cawbird Setup 3b](/images/{{ page.url }}/Cawbird-Setup3b.png) |

| Setup 4 | Working |
| ------- | ------- | 
| ![Cawbird Setup 2](/images/{{ page.url }}/Cawbird-Setup4.png) | ![Cawbird Working](/images/{{ page.url }}/Cawbird-Working.png) |

Cawbird working with my personal Twitter account.

[3] Open a window on the device to sign into the service that it is providing.

<img src="/images/{{ page.url }}/Spot-Working.png" alt="drawing" width="200"/>

[4] Loads local audio files in the Music folder (tested with MP3 files) though I did have to use `scp` to copy the files over since this is connected to the File Management missing feature.

<img src="/images/{{ page.url }}/Lollypop-Working.png" alt="drawing" width="200"/>

### Almost There Features

- Social Media applications
    - Tootle (Mastodon client) [1]

<img src="/images/{{ page.url }}/Tootle-Not_Working.png" alt="drawing" width="200"/>

As you can see the window doesn't fit the screen size so you can't click the button once you enter the server's URL.

[1] Application doesn't work well on this device's screen to allow me to sign in without using a different device with a larger screen.

### Missing Features

- Navigation [1]
- Slack [2]
- File Management [3]

[1] There is recent work on fixing GPS issues but I haven't found a good application to use [OpenStreetMap](openstreetmap.org/) since GNOME Maps doesn't fit the device screen correctly yet.

<img src="/images/{{ page.url }}/GNOME-Maps-Not_Working.png" alt="drawing" width="200"/>

You can see that GPS is not working since it believes I am in Oregon not Colorado.

[2] There is a Flatpak version of Slack and it is in the [AUR](https://aur.archlinux.org/packages/slack-desktop/) though neither have an aarch64 build to install on the PinePhone.

[3] The Portfolio application does this very well though when you connect the phone to a computer it doesn't show up in the File Manager so you can't just copy and paste files between the devices which is why I used `scp` to get the screenshots for this blog.

## Issues

The main issues with the device at least for my use case are the above 'Amost There Features' and 'Missing Features'. 

## Should you get this?

If your needs fit inline with the current limitations and missing or not working yet features and love Open Source on a Smart Phone with no Google or Apple then *MAYBE*. There is a lot working on this and I think depending on the person this can be a daily driver but I don't think it can be a normal user phone as there is some setup missing. With that said if you know what you are doing, can work around the limitations and want to get your hands dirty then there is *A Lot* to love about this device.
