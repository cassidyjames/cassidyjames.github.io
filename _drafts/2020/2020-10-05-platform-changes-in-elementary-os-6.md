---
title: "Platform Changes in elementary OS 6"
description: "New technology that improves your experience"
author: danrabbit
image: /images/updates-for-july-2020/card.png
tags:
  - early-access
  - odin

mastodon: https://mastodon.social/@elementary/104984913842294972
reddit: https://www.reddit.com/r/elementaryos/comments/j5uuej/platform_changes_in_elementary_os_6_elementary/
twitter: https://twitter.com/elementary/status/1313264240648687618
---

Since elementary makes regular updates to elementary OS throughout its lifecycle, you may be asking yourself why development focus has shifted to elementary OS 6 and why these updates can't be shipped to elementary OS 5. In short, the answer is big, breaking changes in technology. While our updates to elementary OS 5 have been largely incremental improvements, elementary OS 6 rips up old plumbing and reconsiders how things work under-the hood in order to enable new features, make your experience more stable and reliable, improve compatibility with third-party apps, and make our desktop more portable to other open source operating systems. Here is a slightly technical look at some of the changes that you'll see in the next big version of elementary OS.

## A New (S)CSS-based System Stylesheet

<figure>
  <picture>
    <source srcset="/images/platform-changes-in-elementary-os-6/widget-factory-dark@2x.png" media="(prefers-color-scheme: dark)">
    <img alt="GTK Widget Factory" src="/images/platform-changes-in-elementary-os-6/widget-factory@2x.png" width="1249" height="743" />
  </picture>
<figcaption>A selection of widget styles using the new work-in-progress Sass stylesheet</figcaption>
</figure>

Believe it or not, the CSS-based system stylesheet shipped in elementary OS 5 has been in development for 7 years already. It has gone through many iterations and breaking changes in GTK which have resulted in a bit of cruft over time. And after these many years of refinement it has become clear that it contains some fundamental shortcomings that have manifested as various small UI bugs. In elementary OS 6, we have completely rewritten our Gtk.CSS system stylesheet using [Sass](https://sass-lang.com), a CSS extension language that compiles down into GTK-compatible CSS. This enables a major new feature—customizable accent colors—and makes it much easier to properly maintain the dark style. We've also greatly improved compatibility with apps built for the GNOME "Adwaita" stylesheet. You'll notice a much more uniform appearance thanks to the use of Sass features like inheritance and functions, all while maintainability is made much easier by nesting.

The overall visual style retains much of our iconic look, but features improved use of light and shadow and increases contrast for better legibility as well as making button styles much more prominent. All of this to say that while things are still a work in progress, elementary OS 6 already looks really, really good. We'll have a more in-depth post later comparing the major differences in appearance between elementary OS 5 and 6, including changes to iconography.

## Settings Daemon

We already make use of GNOME Settings daemon to provide a simple configuration interface for many system functions, but in elementary OS 6 we're also introducing our own settings daemon to provide additional features. One of the major functions of elementary settings daemon is to keep your settings in sync with the login and lock screen. This has already brought keyboard layout switching to the login and lock screen and will eventually support keeping many more configuration options in sync. elementary settings daemon also handles an automatic dark style schedule, and we're investigating other ways this new settings daemon can streamline system components, improve reliability, and provide better compatibility with third-party apps.

## Screen Shield

In elementary OS 5, you may have encountered issues with automatic screen locking while watching videos or performing other long-running tasks that shouldn't be interrupted or cases where your automatic screen locking settings weren't being respected. In elementary OS 6, we've replaced Light Locker with our own "screen shield" implementation. This implementation leans more heavily on features provided by GNOME Settings Daemon and brings greater compatibility with third-party apps. This new screen shield reliably respects the [`Gtk.Application.Inhibit`](https://valadoc.org/gtk+-3.0/Gtk.Application.inhibit.html) API which makes it much easier for developers to request that your device doesn't automatically lock or sleep. It also introduces a nice fade out animation right before sleep, and it makes use of "late locking" which means you can continue to play music in the background until you wake the device up.

This new screen shield also replaces an old component called DPMS Helper and provides better portability for those who like to run Pantheon on other operating systems like Fedora and NixOS. Overall, your screen locking and sleep experience should be much more reliable and predictable in elementary OS 6.

## Improved Accessibility Features

You may already be familiar with the Reveal Pointer and Dwell Click features present in elementary OS 5. While Reveal Pointer makes it easy to locate the pointer on your display, Dwell Click provides assistance to people who may have trouble clicking mouse buttons such as those suffering from RSI, Arthritis, or even temporary disability like a broken finger. In elementary OS 5 these feature were provided by plugins to the GNOME Settings Daemon, but in elementary OS 6 they are now provided directly by our window manager. The primary motivation for this change is the eventual move to Wayland (a protocol that will make your device faster and safer), but this also gives us more creative control over these features. For example, Dwell Click settings are now available from a system indicator in the panel instead of using an awkward floating window.

## Screenshot Interface

Another step towards preparing for Wayland is the implementation of the screenshot interface in the window manager. In short, this now means that screenshots are captured by the window manager, whether taken from the Screenshot app or with a keyboard shortcut. This vastly simplifies the functionality of the Screenshot app and ensures feature parity between the two interfaces. In a future release of elementary OS that makes use of Wayland, this will eventually provide the ability to require that apps ask your permission before capturing the screen, improving your privacy.

## Improved Notifications

<figure>
  <picture>
    <source srcset="/images/platform-changes-in-elementary-os-6/notification-dark@2x.png" media="(prefers-color-scheme: dark)">
    <img alt="Notification Bubble" src="/images/platform-changes-in-elementary-os-6/notification@2x.png" width="416" height="176" />
  </picture>
<figcaption>New notification bubbles support full-color Emoji</figcaption>
</figure>

In elementary OS 5, the component which draws notification bubbles on screen is part of the window manager. When the feature was first introduced, this gave us a lot of control over drawing and animations and made sense since these bubbles are placed and interacted with differently from app windows. However, we soon encountered major drawbacks with regards to making notifications more expressive and interactive. In elementary OS 6, notifications are drawn using Gtk, the same toolkit we use for apps. We've been able to retain the general look and feel of the old notifications while making them more consistent with the rest of the system. Plus, we can now support the system dark style preference, support for images in notifications is improved, we can display full-color emoji, and soon we will be able to support notifications with buttons so you can take action quickly without having to navigate away from the things you're focused on.

The notifications indicator is also receiving a face lift to better mirror the capabilities of notification bubbles. You can look forward to the same improved handling of images and actions as well as features like the ability for apps to replace old notifications with up-to-date ones. This will keep your list of missed notifications lean and relevant.

## Multi-touch Gestures

<figure>
  <picture>
    <source srcset="/images/platform-changes-in-elementary-os-6/notification-swipe-dark@2x.png" media="(prefers-color-scheme: dark)">
    <img alt="Notification Center" src="/images/platform-changes-in-elementary-os-6/notification-swipe@2x.png" width="393" height="666" />
  </picture>
<figcaption>A notification bubble being swiped away in the new Notification Center</figcaption>
</figure>

In elementary OS 6, we're shipping the latest version of [Handy](https://valadoc.org/libhandy-1/Hdy.html), a development library originally meant to make it easier to develop apps for Open Source mobile operating systems like PureOS. Handy provides navigation widgets that react to multi-touch gestures with 1:1 finger tracking. You may have already experienced this in elementary OS 5 in the applications menu and during onboarding. We now provide these 1:1 swipe navigation gestures in many other places like the Date & Time indicator, during multi-step configuration such as in the Installer and Keyboard Input Settings, and when navigating inside apps like Feedback. We're also working on gestures for things like dismissing bubbles in the notifications indicator, and the latest versions of both WebKit and the Epiphany web browser support these multi-touch gestures. We still have some work to do, but our goal is to make navigation as easy as a swipe system-wide.


## System-wide Flatpak Support

You may be aware that we already support sideloading Flatpak apps in elementary OS 5, and that AppCenter will help you keep those apps up to date. And when you side load an app, the installation is local to your account so you can install as many apps as you like without cluttering up others' accounts. In elementary OS 6, we also support sharing Flatpak apps system wide. This is essential for our plan to ship apps in elementary OS as Flatpaks out of the box. The first app we plan to ship as a Flatpak is our web browser Epiphany.

We want to start with Epiphany for two main reasons. The first reason is that as your primary portal to the web, confining web pages opened in Epiphany is a big step up for security. The second reason is that the web is constantly changing and evolving, so it's important for us to be able to ship the very latest in web rendering technology. At the moment, we ship updates to WebKit (the rendering engine used by Epiphany and other popular web browsers like Safari) when Canonical does. This means that WebKit gets frequent security updates, but sometimes lags behind on features and compatibility. With the Epiphany Flatpak, we'll be able to ship the latest WebKit in a confined manner to make sure you can browser the web in a secure, fast, Open Source, and widely compatible web browser.

## Not Wayland (Yet)

Since I mentioned Wayland a couple of times, I want to make it clear that we aren't quite ready to make that transition just yet. While making steps towards Wayland-readiness we're able to improve our architecture and prepare for features that increase security and privacy, but there's still a lot to do before we can run elementary OS with Wayland. Since Ubuntu—our immediate upstream—has also made the decision to stick with X11 for their 20.04 LTS release, we feel like it's reasonable to take our time and make sure we get it right.

## Get Early Access

If you're excited by what you read here and want to get your hands on the developer preview of elementary OS 6, you can! GitHub sponsors at the $10/mo or above tier get access to our daily builds server where you can test the latest and greatest experimental builds, including builds for Pinebook Pro. Subscribing helps us fund the development of elementary OS and brings us that much closer to delivering the final product.

<div style="text-align: center" markdown="1">
[Get Early Access Builds][builds]{: .button}
</div>

[builds]: https://builds.elementary.io
