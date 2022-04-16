---
title: "Secure by Default"
description: "Easy Security UX Improvements to Modern OSes"
author: cassidyjames
date: 2016-12-21T16:02:43.715Z
image: /assets/images/secure-by-default/1tYEdjk26OO5zkSXxWztBiQ.png
tags:
  - "privacy"
  - "security"
  - "open-source"
  - "elementary-os"
  - "secure-by-default"
---

I’m a UX architect at [elementary](https://elementary.io) (developers of the Open Source elementary OS) and a front-end web developer at [System76](https://system76.com) (manufacturers of powerful computers running Ubuntu and built for creators, makers, and builders). I spend a lot of time talking to, working alongside of, and solving problems with incredibly smart people from around the world. One of those problems I’d love to see solved next is our computer operating systems being more secure by default.

elementary OS has always been committed to providing the best user experience out of the box. More recently — totally unrelated to American politics, I’m sure — I have also noticed a focus within the tech community on using UX decisions to help positively influence security and privacy decisions made by users.

In that vein, I’d like to double down on pointing users to more secure decisions out of the box in elementary OS — and really any other modern OS. A core idea behind this is *Secure by Default*.

As developers of an operating system, I feel that elementary — and Microsoft, Apple, Canonical, Red Hat, etc. — have a responsibility to encourage more safe, secure, and privacy-conscious decisions when possible. The following are some concepts that I’ve been thinking about and will be investigating more over the coming months.

## Sandboxed Apps & Portals

<figure markdown="1">
![Flatpak, a sandboxed app format.](/assets/images/secure-by-default/0psp5yAl8MY9TBmCl.png)
<figcaption markdown="1">
Flatpak, a sandboxed app format.
</figcaption>
</figure>

The most obvious step that I can see being taken is sandboxing of apps. This has already become industry standard with mobile platforms, and desktop platforms like Windows and macOS feature sandboxing for apps downloaded via their stores. Linux-based desktops are moving in that direction as well with efforts such as [Flatpak](http://flatpak.org/) and [Snappy](https://www.ubuntu.com/desktop/snappy).

[Portals](https://blogs.gnome.org/alexl/2017/01/24/the-flatpak-security-model-part-3-the-long-game/) (in Flatpak parlance), then, offer a strict API where the OS can provide functionality to apps without the apps having to (or being able to) know much else about the system. This, again, is similar to on-demand permissions of mobile OSes like camera, file, location, and contacts access.

This is one that is fairly obvious and happening (albeit perhaps more slowly than I’d like), but I know I’d get yelled at if I didn’t include it. ;) elementary OS specifically has been following Flatpak and Snap development; while we’ve not officially adopted one or the other yet, we’re excited that sandboxes are coming.

## Don’t Automatically Reconnect to Insecure WiFi

Unsecured WiFi access points (ones not using a password and strong encryption) are [inherently, well, insecure](http://www.pcworld.com/article/2043095/heres-what-an-eavesdropper-sees-when-you-use-an-unsecured-wi-fi-hotspot.html). Connecting to one in public is already not a security- or privacy-conscious decision. However, I don’t suggest an OS should actively prevent users from connecting to these networks — that’s user-hostile in the name of “We know better than you” security.

What an OS *can* do, however, is never connect to these insecure networks *without the user’s interaction*. By not automatically reconnecting to known insecure WiFi networks, an OS can prevent a number of simple and easily-demonstrable “man in the middle” attacks from being automatically exploited. While users can still manually connect to a malicious network, their device won’t auto-connect and potentially open a captive portal login that could be exploited.

This is a feature I’ve [reported as a bug](https://bugs.launchpad.net/elementaryos/+bug/1651605) against elementary OS, and hope to see considered there as well as by other operating systems.

## Mark Insecure WiFi

Most modern operating systems display unsecured WiFi networks as the “default” while adding a lock or other security symbol next to encrypted connections. While it’s good that they do distinguish between the two, I feel the setup here is backwards.

<figure markdown="1">
![Unsecured becomes insecure. Secure becomes standard.](/assets/images/secure-by-default/1tYEdjk26OO5zkSXxWztBiQ.png)
<figcaption markdown="1">
Unsecured becomes insecure. Secure becomes standard.
</figcaption>
</figure>

Instead, modern OSes should display secure, encrypted networks as the default while clearly and strongly denoting unsecured (and possibly “secured” but using outdated/easily-cracked encryption) as insecure. This helps users get used to the *Secure by Default *mentality, marking insecure WiFi the exception rather than the rule.

This echoes the approaches to HTTPS from the major browser vendors, including both [Firefox](https://blog.mozilla.org/security/2015/04/30/deprecating-non-secure-http/) and [Google Chrome](https://security.googleblog.com/2016/09/moving-towards-more-secure-web.html); I applaud them for this approach to HTTP vs. HTTPS. This is also a feature I’ve [reported as a bug](https://bugs.launchpad.net/wingpanel-indicator-network/+bug/1651848) against elementary OS, but would love to see adopted more widely.

<figure markdown="1">
![elementary OS now shows encrypted networks as default, and unencrypted networks as insecure](/assets/images/secure-by-default/1OaRjz_XfzUkbM3jxdnbXKg.jpeg)
<figcaption markdown="1">
elementary OS now shows encrypted networks as default, and unencrypted networks as insecure
</figcaption>
</figure>

**Update**: This has been [implemented in elementary OS](https://github.com/elementary/wingpanel-indicator-network/pull/34). I hope to see other platforms follow!

## Tattletale More

Some mobile devices and OSes already “tattletale” when apps are using location services, but I think this is a feature that could be expanded even more. For starters, why restrict it to location?

Microphones on our devices, for example, are within earshot of some of our most private conversations; why shouldn’t our OS tattle when an app is accessing and possibly recording us over the mic? This is a feature that was recently released to users of elementary OS, and it’s a great move.

This could be expanded to cameras in the same way, and each of these could make it more clear which app specifically is using the feature. It could even be expanded to include historical data to give users more confidence even if they were not facing the display at the time.

<figure markdown="1">
![Our OS already knows when these services are being used. It could let users know, too.](/assets/images/secure-by-default/1I3s_8EVor7RXbwPOLpU__w.png)
<figcaption markdown="1">
Our OS already knows when these services are being used. It could let users know, too.
</figcaption>
</figure>

Some of these features require sandboxes and “portal” like APIs (which are coming), but many could be implemented with what the OS already knows (like the microphone feature in elementary OS).

<figure markdown="1">
![](/assets/images/secure-by-default/1jW0sgQPivOWSstkEGpxrXw.jpeg)
</figure>

<figure markdown="1">
![](/assets/images/secure-by-default/05S9Ufr3oDwNR65nm.png)
</figure>

<figure markdown="1">
![Android tattletales on apps using the camera or microphone. Image from [AndroidPolice.com](https://www.androidpolice.com/2018/05/09/android-p-notifications-apps-running-background-show-theyre-using-camera-microphone/#ap-lightbox).](/assets/images/secure-by-default/1jW0sgQPivOWSstkEGpxrXw.jpeg)
<figcaption markdown="1">
Android tattletales on apps using the camera or microphone. Image from [AndroidPolice.com](https://www.androidpolice.com/2018/05/09/android-p-notifications-apps-running-background-show-theyre-using-camera-microphone/#ap-lightbox).
</figcaption>
</figure>

**Update**: The Developer Preview of Android P seems to have taken this advice, and now [tattletales when background apps use the camera or microphone](https://www.androidpolice.com/2018/05/09/android-p-notifications-apps-running-background-show-theyre-using-camera-microphone/#ap-lightbox). Nice!

These are just a few ways modern OSes could be more secure. What are your thoughts, or did I miss something important? Leave me a response to let me know!