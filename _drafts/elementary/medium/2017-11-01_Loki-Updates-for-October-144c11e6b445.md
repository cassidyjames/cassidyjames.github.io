---
title: Loki Updates for October
description: >-
  While work on the next major version of elementary OS is already underway,
  we’re still pushing out updates to Loki! Here’s a roundup of…
date: '2017-11-01T17:41:07.251Z'
categories: []
keywords: []
slug: /@DanielFore/loki-updates-for-october-144c11e6b445
---

While work on the next major version of elementary OS is already underway, we’re still pushing out updates to Loki! Here’s a roundup of this months updates:

### Look & Feel

Developers may be happy to know that a new version of our stylesheet is out that supports adding the `flat` class to `Gtk.HeaderBar`. This saves quite a bit of custom CSS if you’d like to make your app have a flat style like the notes app Notejot:

![Get the notes app Notejot [on AppCenter](https://appcenter.elementary.io/com.github.lainsce.notejot.desktop)](https://cdn-images-1.medium.com/max/800/1*Y5ykcrRorvR__mtGeAeOeg.png)
Get the notes app Notejot [on AppCenter](https://appcenter.elementary.io/com.github.lainsce.notejot.desktop)

If you’re not familiar with adding style classes to your widgets, you can try it (for a `Gtk.HeaderBar` called `headerbar`) with this easy one-liner:

`headerbar.get_style_context ().add_class (Gtk.STYLE_CLASS_FLAT);`

There’s also a new minor release of our icon set which contains fit and finish fixes for various icons in different sizes. [Check out the details here](https://github.com/elementary/icons/issues?q=is%3Aclosed+milestone%3A4.3.0).

### System Settings

We’ve made a few updates to various parts of System Settings. When creating a new user, we now take special characters (like “é” or “ç”) into account when automatically generating a username. We also fixed a major issue that caused new user accounts to be created without a password.

Printer settings saw a number of fixes to things like cancelling halted jobs, renaming a printer location, and ensuring that jobs remain visible in the queue.

### And More!

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest. While you’re at it, be sure to check out some of the new apps that were published this month!

_We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_