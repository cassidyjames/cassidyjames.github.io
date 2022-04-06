---
title: elementary OS on Raspberry Pi
description: Continuing our experimental Early Access builds
image: /images/elementary-os-on-raspberry-pi/desktop.jpg
author: cassidyjames
tags:
  - ARM
  - devices
  - early-access
  - odin

mastodon: https://mastodon.social/@elementary/105323756503375482
reddit: https://www.reddit.com/r/elementaryos/comments/k6s1sz/elementary_os_on_raspberry_pielementary_blog/
twitter: https://twitter.com/elementary/status/1334954577909723136
---

Following our [efforts to bring elementary OS to the ARM-based Pinebook Pro][pbp], we've added experimental builds for the ARM-based Raspberry Pi 4 series—including the recently-launched Raspberry Pi 400—to our [Early Access][builds] program. Like Pinebook Pro builds, Raspberry Pi support is considered an experiment and is not something we have committed to officially support indefinitely. However, if you're one of the many folks with a Raspberry Pi 4 sitting around and wanted to see how a full, modern desktop operating system runs, elementary OS is now an option!

<figure markdown="1">
![Raspberry Pi 4 running elementary OS]({{ page.image }})
<figcaption>My current desktop, powered by a Raspberry Pi 4 running elementary OS</figcaption>
</figure>

Personally, I typically use Raspberry Pi 4 as a network device, e.g. a DNS server and for network-attached storage. However, I've been using elementary OS builds on it for the past week, and I'm impressed. While it won't compete experience-wise with a high end desktop, it is a real option for casual computing, development, and writing. In fact, this blog post was written entirely on my Raspberry Pi 4 running elementary OS. It would even be possible to run the same network services on the hardware from within elementary OS just so you get a nice modern GUI when doing any local management.

Like with [Pinebook Pro][pbp], there are some things you should know if you plan to use elementary OS Early Access builds on Raspberry Pi:

## Kernel

Since Ubuntu has released Raspberry Pi images, we are able to rely on that work to ship a supported and updated kernel. Thanks to all of the folks at Canonical and in the Ubuntu community who have worked to make that happen!

## Performance

elementary OS on Raspberry Pi 4 is not going to match the polished experience of a full modern desktop computer, largely due to our current software stack. GTK3 does not offer GPU-accelerated animations, so animations within apps are less smooth than we would like. Still, for a computer coming in at under $100, it's impressive and perfectly usable for several tasks.

There are also some things you can do to improve performance. We would definitely recommend using some sort of cooling with your Raspberry Pi, whether that's a a heatsink and fan (like the recently-announced [Raspberry Pi 4 Case Fan](https://www.raspberrypi.org/blog/new-raspberry-pi-4-case-fan/)), or a passive case like one from [Flirc](https://flirc.tv/)—my favorite for its looks and silence. Since Raspberry Pi 4 tends to throttle due to heat under desktop loads, cooling will help it stay more responsive. We also recommend trying USB3 storage as your boot drive, as it should be faster than a microSD card. Using a 1080p (or lower) resolution also works a fair bit better than trying to push a 1440p or 4K display, but your mileage may vary based on your use case.

## Supported Raspberry Pi Models

We recommend Raspberry Pi 4 or Raspberry Pi 400 with 4 GB RAM at a minimum—but the more, the better. (We don't even recommend less than 8 GB for computers with much faster CPUs, graphics, and storage.)

Older models of Raspberry Pi (like the original, Raspberry Pi Zero, Raspberry Pi 2 series, and Raspberry Pi 3 series) are not supported; elementary OS requires the faster processor, additional RAM, and 64-bit architecture of the Raspberry Pi 4 series. For older models, we recommend sticking to Raspberry Pi OS or a "headless" OS like Ubuntu Server.

## Run elementary OS on Raspberry Pi

In its current state, we would not consider elementary OS on Raspberry Pi as polished of an experience as running on well-supported AMD- or Intel-based hardware.

That said, the audience for Raspberry Pi leans toward tinkerers and experimenters; as such, we've decided to publish our builds under our [Early Access builds][builds] program. This means dedicated [sponsors] of elementary OS who wish to run elementary OS on Raspberry Pi can download it from the same place as Early Access builds of elementary OS. As a note, all of this work has been focused on bringing the **pre-release of elementary OS 6** to Raspberry Pi, so all the usual disclaimers about pre-release builds apply here as well.

<div style="text-align: center;" markdown="1">
[Raspberry Pi on the elementary OS Wiki][wiki]{: .button}
</div>

Once you have access to Early Access builds, head over to the [elementary OS wiki][wiki] to get it installed on your own hardware. If you find and file any issues, please remember to specify the build of the OS you downloaded as well as that you are running on Raspberry Pi—it will help us validate and triage issues much more quickly.

## Thanks to Andrew, David Hewitt, and Marius Meisenzahl

Bringing elementary OS to Raspberry Pi was a collaborative effort. [Andrew](https://github.com/andrewc910), [David Hewitt](https://github.com/davidmhewitt), and [Marius Meisenzahl](https://github.com/meisenzahl) specifically worked to prototype, improve, and ultimately ship these builds. And of course countless folks across the Raspberry Pi Foundation, Debian, Canonical, Ubuntu, and more have worked for years on making the underlying system work well for us to build on.

[pbp]: /elementary-os-on-pinebook-pro
[builds]: https://builds.elementary.io
[sponsors]: https://github.com/sponsors/elementary
[wiki]: https://github.com/elementary/os/wiki/Raspberry-Pi
