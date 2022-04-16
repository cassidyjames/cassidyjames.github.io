---
title: Hardware Improvements Coming to elementary OS
description: Working with device makers shows how a rising tide lifts all boats
author: cassidyjames
image: /images/hardware-improvements-coming-to-elementary-os/card.png
tags:
  - devices
  - early-access
  - odin

facebook: https://www.facebook.com/elementaryos/posts/4044601975571601
mastodon: https://mastodon.social/@elementary/105669195948108847
reddit: https://www.reddit.com/r/elementaryos/comments/lbxfuu/hardware_improvements_coming_to_elementary_os/
twitter: https://twitter.com/elementary/status/1357062747847032832
---

We've been on a bit of a device enablement kick lately: from [Pinebook Pro](/elementary-os-on-pinebook-pro) and [Raspberry Pi](/elementary-os-on-raspberry-pi) to [Slimbook](/devices-slimbook), [Laptop With Linux](/now-shipping-elementary-os#laptop-with-linux), and [Star Labs](/now-shipping-elementary-os#star-labs), we've been working with specific devices and device makers more than ever. We covered these efforts—and why they're so important—in [our 2020 in review](/our-2020-in-review#hardware).

There's another angle, though, that we're starting to see come into play: when elementary is more directly involved, the improvements made for these specific devices benefit _everyone_—not just one specific device or OEM. Here are some areas in elementary OS that are seeing improvements directly due to recent hardware enablement efforts:

## Boot Experience

We've been working on the first-run experience of elementary OS for a few years now, including a [new login and lock screen greeter](/say-hello-to-the-new-greeter), a [new "welcome" onboarding experience](/get-settled-into-elementary-os-with-onboarding), and the [new Installer][installer] coming with elementary OS 6. An area we've also been working on for elementary OS 6 is the boot screen itself: what you see while your device is turning on, but before the operating system is fully booted.

Our approach to the new boot screen was informed heavily by our work with Star Labs; they ship elementary OS on their laptops, and several system components are updatable via the [Linux Vendor Firmware Service using fwupd](https://fwupd.org/). When installing a system firmware update via fwupd, part of the process requires a reboot so the update can happen "offline" (e.g. when the operating system itself is not fully running). This offline update can show feedback and progress on the boot screen, if the boot screen supports it. In elementary OS 5.1, that just gives you a slowly pulsing elementary "e" logomark, so Star Labs installs their own OEM boot screen—which works, and is the kind of work OEMs often do for better integration.

<figure markdown="1">
![Boot Screen: loading spinner](/images/{{ page.slug }}/boot-loading.jpg)
<figcaption>The elementary OS 6 boot screen on a Star LabTop Mk IV</figcaption>
</figure>

We've been working on something even better out of the box: a minimalist, seamless boot screen that also supports modern features like firmware updates and encrypted disk unlocking. This boot screen builds on the work of the [FreeDesktop.org Plymouth project](https://www.freedesktop.org/wiki/Software/Plymouth/), delivering flicker-free boot on many systems. Our design approach was to let the OEM branding—if provided—shine while offering minimal supplemental information. If an OEM sets a boot logo in their system firmware, our boot screen will load that and display it. While the operating system is loading, we add a small, minimal spinner in the same style as loading spinners in elementary OS. If an encrypted disk needs to be unlocked, there's a minimalist password entry provided. And finally, when installing firmware updates, we provide straightforward messaging using the same typography as in elementary OS 6.

<figure class="half" markdown="1">
![Boot Screen: unlocking an encrypted drive](/images/{{ page.slug }}/boot-password.jpg)
![Boot Screen: installing firmware](/images/{{ page.slug }}/boot-firmware.png)
<figcaption markdown="1">
**Left:** Unlocking an encrypted drive | **Right:** Installing a firmware update
</figcaption>
</figure>

The end result is that elementary OS 6 is an even more seamless experience from powering on your device through logging in, while also supporting features OEMs care about. For a fallback—e.g. on platforms that don't support boot logos, like Raspberry Pi or Pinebook Pro—we show the elementary "e" logomark, similar to today. This fallback feature was [contributed to Plymouth upstream](https://gitlab.freedesktop.org/plymouth/plymouth/-/merge_requests/125). This boot screen work was tackled largely by [Marius Meisenzahl], so be sure to consider [sponsoring him on GitHub Sponsors][Marius Meisenzahl] for all his contributions.

## Installer & Initial Setup

The new installer for elementary OS 6 has been [in the works][installer] for quite some time. From the beginning, it was designed to handle very little: getting the OS onto your device. While designing and developing the installer, we realized how we could also cater to OEMs without needing an entirely separate OEM installation flow: _every_ install is treated like an OEM install.

<aside markdown="1">
>Every install is treated like an OEM install.
</aside>
We've worked with [System76](https://system76.com) to create this new installer, designing the front-end while building on their distinst back-end. Their perspective as an OEM helped inform some design decisions, as has working with our OEM retailers. The new installer essentially handles the following tasks:

1. Select a language and keyboard layout to use in the installer
2. Choose to try a live "Demo Mode" or to install the OS
3. Select a drive to install to
4. Reboot to continue, or shut down to set up later

This last step is the key to the OEM-friendly approach; since the installer explicitly does not handle creating or setting up a user account, the next step is identical whether you're installing the OS for yourself, you're installing the OS for a friend or family member, or an OEM has pre-installed the OS on a device: the end-user boots the device and is handed off to Initial Setup to create their account.

<figure markdown="1">
![Initial Setup](/images/{{ page.slug }}/initial-setup.png){: width="916" height="666"}
<figcaption>Initial Setup creates the first user account, regardless of how the OS was installed</figcaption>
</figure>

This Initial Setup flow means a system administrator or lower-volume OEM can manually step through the couple of steps to install the OS each time, and be confident that the user will unbox the device and be able to set it up as expected. It also means larger OEMs can create an installation image from this installed state and image it directly to their devices' storage without manual steps. It even means that builds for specific hardware—like the ARM-based Pinebook Pro and Raspberry Pi—have you flash an "installed" image onto the storage medium, and you get the exact same Initial Setup experience as any other installation. Regardless of how you get elementary OS, the Installation and Initial Setup process is always a tested, first-class experience.

## Firmware Updates & System Information

As mentioned in the Boot Experience section, updatable firmware—specifically using LVFS and fwupd—is an emerging feature among our OEM retailers. In addition to the boot screen work here, we've been hard at work adding this capability right into System Settings. Much of this front-end work was again handled by [Marius Meisenzahl], building on the excellent work of [Richard Hughes](https://blogs.gnome.org/hughsie/) and fwupd.

<figure class="half" markdown="1">
![Firmware updates](/images/{{ page.slug }}/system-firmware.png)
![Firmware update details](/images/{{ page.slug }}/system-firmware-details.png)
<figcaption markdown="1">
Firmware updates in _System Settings_
</figcaption>
</figure>

While we were working on enabling firmware updates, we redesigned the _System Settings_ → _System_ area—formerly _System Settings_ → _About_—with a new tabbed layout and refreshed typography. The Operating System tab shows off a dynamic OS logo using the user's accent color and the default release wallpaper, with a better layout for OS links and actions. The Hardware tab pulls information from the system hardware as well as `/etc/oem.conf`, enabling OEMs to provide a high-resolution logo or product image, model-specific branding, and a link for their own website. We also improved the detection and display of certain hardware, especially GPUs and ARM processors.

<figure class="half" markdown="1">
![OS info](/images/{{ page.slug }}/system-os.png){: width="856" height="556"}
![Hardware info](/images/{{ page.slug }}/system-hardware.png){: width="856" height="556"}
<figcaption markdown="1">
Newly-designed OS and hardware information in _System Settings_
</figcaption>
</figure>

All of these improvements will be shipping to users of elementary OS 6. Firmware updates require the firmware be uploaded to the LVFS, but we're seeing manufacturers large and small—from Star Labs and 8bitdo to Logitech, Dell, and Lenovo—adopt it, so there's a good chance at least some of your hardware will be updatable in this way.

## Num Lock & Caps Lock Indicators

Some keyboards and devices don't have built-in Num Lock or Caps Lock indicators—whether it's a minimalist mechanical keyboard or a laptop. Star Labs laptops have this quirk, and so on GNOME-based OSes, they install an extension to add these indicators to the top panel. In parallel, we have received user requests to support such indicators in elementary OS for people who have this sort of hardware.

<figure markdown="1">
![Keyboard indicator settings](/images/{{ page.slug }}/indicators.png){: width="856" height="556"}
<figcaption markdown="1">
Enable Num Lock and Caps Lock indicators in _System Settings_
</figcaption>
</figure>

We've now added this capability to the top panel in elementary OS 5.1 and newer, bringing it to OEMs like Star Labs as well as any end user who wants it; just head to _System Settings_ → _Keyboard_ → _Layout_ and turn on the "Show in Panel" switch for whichever indicator you'd like.

## Multi-touch Gestures

We've written more extensively about [our work with multi-touch gestures in elementary OS 6](/multitouch-gestures-in-elementary-os-6), but it is important to give some of the credit to our work with OEMs; some retailers like Slimbook currently include third-party software for trackpad gestures in their images of elementary OS 5.1, but it's not as integrated as it could be. Our goal is for it to be built into the operating system and not require configuring anything out of the box—while also offering sensible preferences where users expect in _System Settings_ → _Mouse & Touchpad_ → _Gestures_.

<figure markdown="1">
![Gestures settings](/images/{{ page.slug }}/gestures.png){: width="856" height="556"}
<figcaption markdown="1">
Enable and configure multi-touch gestures in _System Settings_
</figcaption>
</figure>

Now all multi-touch-capable trackpads and touchscreens will benefit from this gesture work, instead of it being different depending on the OEM or requiring extra third-party tools.

## Performance

Lastly, a significant amount of performance work has been going into elementary OS 6 thanks to our work on Pinebook Pro and Raspberry Pi builds; this class of hardware is lower-powered than our typical target hardware, so every little bit helps. We've largely been reducing and asynchronizing inter-process communication between desktop components, removing unused code, and reducing disk I/O—especially important on lower-clocked processors and slower storage mediums like SD cards.

And of course, any performance improvements on the lower end also benefit higher-end devices as well. Most of this work has been handled by [David Hewitt]; you can [sponsor him on GitHub Sponsors][David Hewitt] to encourage him to keep it up!

[Marius Meisenzahl]: https://github.com/sponsors/meisenzahl
[installer]: /meet-the-upcoming-installer
[David Hewitt]: https://github.com/sponsors/davidmhewitt

## Get Early Access

If you're excited by what you read here and want to get your hands on the developer preview of elementary OS 6, you can! GitHub sponsors at the $10/mo or above tier get access to our [daily builds server][builds] where you can test the latest and greatest experimental builds, including builds for Pinebook Pro. Subscribing helps us fund the development of elementary OS and brings us that much closer to delivering the final product.

<div style="text-align: center" markdown="1">
[Get Early Access Builds][builds]{: .button}
</div>

[builds]: https://builds.elementary.io
