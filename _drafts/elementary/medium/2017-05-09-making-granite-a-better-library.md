---
title: "Making Granite a Better Library"
description: "Strap on your dev helmets, squeeze down into a dev cannon, and fire off into dev land!"
author: DanielFore
date: 2017-05-09T18:41:45.075Z
image: /assets/images/making-granite-a-better-library/0p5wCx3g0_sacJvBQ
tags:
  - "granite"
  - "elementary-os"
  - "open-source"
  - "development"
  - "api"
---

We recently released [Granite](https://github.com/elementary/granite) 0.4.1, the first step of many in a journey towards making Granite much, much better. I’d like to take this time to not only talk about the work that went into this release, but also address some issues that were discovered and the work we’re doing to resolve these issues.

If you’re not already familiar with it, Granite is a library that provides several widgets and convenience functions that build on what is already provided by [Gtk+](https://www.gtk.org/). It is not meant to be a replacement for Gtk+, but rather an extension with elements that adhere to elementary and Pantheon-specific design patterns.

## Toasts

<figure markdown="1">
![A Granite Toast in the presentations app Spice-Up](/assets/images/making-granite-a-better-library/0GaSmQnxJPW0Svr05)
<figcaption markdown="1">
A Granite Toast in the presentations app Spice-Up
</figcaption>
</figure>

One of the largest visible changes in Granite 0.4.1 is the addition of the new `Granite.Widgets.Toast`. Toasts are small, unobtrusive, in-app notifications. They notify the user inside the context of the app, without trying to distract them from tasks they are doing outside of it. One of the most common cases for Toasts is as an “undo” pattern as commonly seen in web apps like Gmail. This new widget makes that popular design pattern available to developers on elementary OS.

The API for Granite Toasts has been designed to mimic `[GLib.Notification`](https://valadoc.org/gio-2.0/GLib.Notification.html) so it should feel familiar to create and send new toasts.

## Granite Demo

<figure markdown="1">
![The redesigned SourceList demo in Granite 0.4.1](/assets/images/making-granite-a-better-library/1tHaaD1_ae9Vrljxu4wL-Dg.png)
<figcaption markdown="1">
The redesigned SourceList demo in Granite 0.4.1
</figcaption>
</figure>

Our demo app has been updated with new examples and several of the existing examples have been rewritten to better reflect real-world usage. The new code uses [GObject-style](https://chebizarro.gitbooks.io/the-vala-tutorial/content/gobject-style-construction.html) and adheres to elementary best practices. Granite Demo serves not only as a sort of test to ensure that widgets in Granite are working properly and don’t break API unexpectedly, but it also needs to provide clean code samples for developers looking to make use of the library.

<figure markdown="1">
![](/assets/images/making-granite-a-better-library/0p5wCx3g0_sacJvBQ)
</figure>

<figure markdown="1">
![New navigation and views in Granite’s development master](/assets/images/making-granite-a-better-library/0nkHoz7n_J5k6F3pV)
<figcaption markdown="1">
New navigation and views in Granite’s development master
</figcaption>
</figure>

To this end, the next release of Granite will include an almost entirely re-written Granite Demo with better navigation and comprehensive examples for every non-deprecated widget available in the library. A decent amount of work has already been done to this end with new views like a CSS demo.

## Avatar

<figure markdown="1">
![](/assets/images/making-granite-a-better-library/1BFKx3RCYMSBgaCclepRL_A.png)
</figure>

Our avatar widget now renders images at a higher resolution on HiDPI displays and a new view has been added to Granite Demo showing the widget at common icon sizes. Adding this new view has demonstrated that the avatar widget is rendered at a different size than its icon equivalents, so in the next release of Granite steps will be taken to make sure these match.

## API Changes

When we started writing Granite, Gtk+ 3.x was still in its early days. It’s seen a great deal of improvement and many of the things we wrote for Granite now have better equivalents in Gtk+. Granite 0.4.1 doesn’t break API, but it does bring a deprecation: `Granite.Widgets.AppMenu` has now been deprecated in favor of `[Gtk.MenuButton`](https://valadoc.org/gtk+-3.0/Gtk.MenuButton.html).

The next version of Granite will include many more deprecations including some old style class constants. But more importantly, it will finally see the removal of some very old and buggy widgets like `Granite.Widgets.Popover` as well as some widgets that have made it into Gtk+ like `Granite.Widgets.ThinPaned` and widgets that have good Gtk+ replacements like `Granite.Widgets.StatusBar`.

Rewriting Granite Demo also revealed that in many cases API could be much better. Granite should feel like a natural extension of Gtk+ and so properties like `OverlayBar.status` will be superseded by `OverlayBar.label`. In the future, we’ll strive to make sure that Granite widgets adhere to conventions established by Gtk+ and work to rewrite old widgets to match this standard.

## Onward!

With AppCenter, we’re entering a new major evolution in elementary’s role as a development platform. We’re happy to continue making improvements to that platform and in the future we’ll be taking a good hard look at projects like Granite to make sure we’re meeting developer’s needs and helping them to build the great apps that their users want to see. Granite began as a way to make it easier to ship consistent, feature full apps and we’re confident that we can continue to deliver on that promise.

*We’d like to say thanks again to our supporters on[ Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), those who’ve purchased a copy of[ elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*