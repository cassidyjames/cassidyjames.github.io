---
title: "Juno Progress for March"
description: "You get more features, and you get more features, and you get more features!"
author: DanielFore
date: 2018-03-17T17:42:31.773Z
image: /assets/images/juno-progress-for-march/1eE-aOnevYP5GOvwRpYANZw@2x.png
tags:
  - "juno"
  - "elementary-os"
  - "development"
  - "open-source"
  - "preview"
---

As we steadily *march* towards Juno’s release (Ha! See what I did there?) new features are landing in our unstable daily builds on a regular basis. Juno is shaping up to be a great release for developers and other heavy keyboard users with the introduction of a few new tricks:

## Shortcut Overlay

Similar to the popular feature from Ubuntu’s Unity desktop, you’ll now see a keyboard shortcuts cheat sheet when you tap [the ⌘ key](https://medium.com/@cassidyjames/why-the-looped-square-symbol-809a3de71bea) in Juno.

<figure markdown="1">
![Tap ⌘ to see a list of system keyboard shortcuts](/assets/images/juno-progress-for-march/1eE-aOnevYP5GOvwRpYANZw@2x.png)
<figcaption markdown="1">
Tap ⌘ to see a list of system keyboard shortcuts
</figcaption>
</figure>

The shortcut overlay will automatically close when you use one of these shortcuts or switch to another window, and you can easily get to shortcut settings by clicking the gear icon in the top right of the window.

## System Settings

If you’d prefer to use your ⌘ key for something else, you’ll be able to choose between showing the Shortcut Overlay, the Applications Menu, or doing nothing in the Keyboard Layout settings:

<figure markdown="1">
![Choose your ⌘ key behavior in Layout settings](/assets/images/juno-progress-for-march/1HTI993V-e8N_si2MYMwneA@2x.png)
<figcaption markdown="1">
Choose your ⌘ key behavior in Layout settings
</figcaption>
</figure>

You might also notice a new setting for Compose key in the screenshot above: Menu! This is the little [context menu key on some keyboards](https://en.wikipedia.org/wiki/Menu_key). In Juno, you’ll be able to choose between it and Caps Lock, Right Alt, Right Ctrl, or Right ⌘ for [typing special characters](https://en.wikipedia.org/wiki/Compose_key).

<figure markdown="1">
![New mouse pointer acceleration settings, including “None”](/assets/images/juno-progress-for-march/1Zfin7WuQbSRYLusrLrpwfg@2x.png)
<figcaption markdown="1">
New mouse pointer acceleration settings, including “None”
</figcaption>
</figure>

In the Mouse & Touchpad settings, we’ve added a new pointer acceleration setting with hardware default, none, and adaptive options.

Over in Bluetooth settings, we’ve reworked quite a bit. Discovering new devices now happens directly in this view, without the aid of the old GNOME Bluetooth wizard.

<figure markdown="1">
![Discover nearby Bluetooth devices directly in System Settings](/assets/images/juno-progress-for-march/1cCBuukzGxYC5XTcvldbAvw@2x.png)
<figcaption markdown="1">
Discover nearby Bluetooth devices directly in System Settings
</figcaption>
</figure>

The layout of this page uses the new Granite [SimpleSettingsPage](https://valadoc.org/granite/Granite.SimpleSettingsPage.html) to match with other settings pages, with an obvious switch in the header to quickly toggle Bluetooth and description text reminding you the name that other devices list this device as.

## Location Services & Privacy Improvements

The GeoClue API has been available to developers in elementary OS for quite some time now, but there’ve been a few problems. Developers had to ship a custom VAPI file to use it. There was no documentation on Valadoc. There was no real incentive for developers to use this API over other location APIs. There was no way for elementary OS users to interact with the API to manage their privacy. All that is changing in Juno.

<figure markdown="1">
![Apps now ask for permission before using location services](/assets/images/juno-progress-for-march/17Wx2U9zdugDp8_xrQ03uug@2x.png)
<figcaption markdown="1">
Apps now ask for permission before using location services
</figcaption>
</figure>

In Juno, when an app tries to request location info through GeoClue, you’ll see a dialog asking for permission and showing the accuracy level that an app is requesting. There’s also a handy link that will take you directly to location settings.

<figure markdown="1">
![Location settings can be found in System Settings → Security & Privacy](/assets/images/juno-progress-for-march/1LGiVLQbNEQFCdMdvsvcsBw@2x.png)
<figcaption markdown="1">
Location settings can be found in System Settings → Security & Privacy
</figcaption>
</figure>

At any time, you’ll be able to change which apps have permission to access location services or completely disable location services in System Settings.

Developers who want to use the Location Services API in their apps can find [documentation on Valadoc.org](https://valadoc.org/libgeoclue-2.0/GClue.html) and the GeoClue VAPI will ship with Vala 0.40. **As a heads up to developers**, we’ll be getting more strict about location services in AppCenter submissions: we’ll expect apps to use this location API so our users can feel confident that they have control over when their location is shared with apps.

## Code

[According to a recent poll](https://plus.google.com/+FrederikFeichtmeier/posts/evf757Bux1y) in the Vala Google+ community, more people are using elementary Code to write Vala apps than Gedit and GNOME Builder combined. We’ve definitely noticed, as the number and quality of contributions has picked up quite a bit.

The most obvious visual update is a new “quick style switcher” like in Terminal: quicker access to options for text scale, and three built-in color schemes: High Contrast, Solarized Light, and Solarized Dark. Like in Terminal, the color schemes change both the code view and the app UI, meaning you can now switch to a completely dark Code style with just a couple of clicks.

<figure markdown="1">
![New quick style options including a new dark mode](/assets/images/juno-progress-for-march/1rVFtkMg5Y0-4tjPqjUecVQ@2x.png)
<figcaption markdown="1">
New quick style options including a new dark mode
</figcaption>
</figure>

We’ve also added a super handy Toggle Comment shortcut: tap `Ctrl`+`M` to toggle commenting out the currently selected line or lines.

Under the hood, we’ve moved the folder manager plugin into the core of the app to allow for deeper project-focused integration. As a part of this change, the sidebar selection now updates more reliably when you change between different tabs and files. There’s also now a handy “Open In” menu you can use to open files in another app.

<figure markdown="1">
![Easily open files in external apps from the folder manager](/assets/images/juno-progress-for-march/1hWu8Lg8XZj8WUUSInsbPdA@2x.png)
<figcaption markdown="1">
Easily open files in external apps from the folder manager
</figcaption>
</figure>

We’ve also rounded up some fixes for the Pastebin and Strip Trailing Whitespace plugins. You can now cut an entire line by pressing `ctrl` + `x` when your cursor is on a line and there is no selection. And one more thing, Code now ships with a plugin to read [EditorConfig](http://editorconfig.org/) files.

## AppCenter

We’ve been working on more updates to AppCenter in Juno. The big visual change here is that the “Updates” tab has been renamed to “Installed,” and now shows a little red badge when updates are available. This makes it more clear you can access your currently-installed apps there even when there are no pending updates, and more clearly shows you there’s something to act on when there are updates.

<figure markdown="1">
![](/assets/images/juno-progress-for-march/1RkPZ6ptWqwZL_IzvCJwVNQ@2x.png)
</figure>

<figure markdown="1">
![](/assets/images/juno-progress-for-march/1zS9cuxUHKkfqxjPcicBTkw@2x.png)
</figure>

On each app’s listing, we also now show the total download size of the app — including any dependencies — right below the install button. This is great for bandwidth- and storage-conscious users.

<figure markdown="1">
![An updated payment dialog (with dummy information)](/assets/images/juno-progress-for-march/1BkzqqVP_Zk6LqiTO5U_UBQ@2x.png)
<figcaption markdown="1">
An updated payment dialog (with dummy information)
</figcaption>
</figure>

When paying for an app in Juno, you’ll also notice some small but meaningful quality of life improvements. We now auto-format card numbers (including whitespace and a card type symbol), which should help cut down on typos when entering payment details. We also hide the card number and card verification code (CVC) when the respective entries aren’t focused to help protect from shoulder-surfing.

## And More

Screenshot Tool now appends “@2x” to screenshots taken on a HiDPI display so that other apps and websites (like Medium!) properly scale them automatically.

In Gala, our window manager, dragging a window to the side or top of a display now shows a quick feedback animation to let you know that the window can be tiled or maximized.

In the volume indicator, clicking the large speaker or microphone icons in the popover now toggles mute and unmute. Speaking of sound, we have some new sound effects: a cheery little bell sound for new notifications and a somewhat wooden “thunk” sound for feedback about actions that can’t be carried out (such as attempting to `alt`+ `tab` window switch with only one window).

In additional to all of the above, you can always count on a healthy dose of code cleaning and general bug fixing. We’re now up to [over 450 closed issues](https://github.com/search?q=org:elementary+is:open+is:issue+milestone:%22juno-beta1%22) associated with the Juno Beta milestone. Some notable improvements include porting several old C classes in Files to shiny new Vala classes, significant simplifications to the code in Network settings, and further progress migrating all of our build systems to [Meson](https://medium.com/elementaryos/all-aboard-the-meson-future-hype-train-2b6c478b6b9e).

Juno is still under active development and we’re expecting to land even more features, fixes, optimizations, etc. before its big debut. Stay tuned to this blog for more highlights and announcements as we move toward the next major version of elementary OS. If you missed them, be sure to check out our previous posts about Juno:

* [Juno Progress for January & February](https://medium.com/elementaryos/juno-progress-for-january-february-9b276042716e)

* [Let’s Talk About elementary OS 5 Juno](https://medium.com/elementaryos/lets-talk-about-elementary-os-5-0-juno-a3a65b97ee7e)

*Thank you to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*