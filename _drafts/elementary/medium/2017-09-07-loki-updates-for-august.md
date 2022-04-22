---
title: "Loki Updates for August"
description: "You may have heard that we’ve been very busy working on a brand new Installer for elementary OS, but fear not! We’ve still had plenty of time to issue a number of Loki updates during August. Here’s our monthly recap:"
author: DanielFore
date: 2017-09-07T17:37:03.659Z
image: /assets/images/loki-updates-for-august/1rfyrlHUMnKMmIBi97URFpQ.png
tags:
  - "elementary-os"
  - "linux"
  - "open-source"
  - "updates"
---

## AppCenter

Thanks to some work from Cassidy, the payment dialog now includes a better title and description:

<figure markdown="1">
![](/assets/images/loki-updates-for-august/1rfyrlHUMnKMmIBi97URFpQ.png)
</figure>

In the interest of cleaning up the kinds of things that get shown in AppCenter, we now ship a blacklist. This blacklist includes things like system components and utilities inherited from Ubuntu, but don’t work on elementary OS. You can see the current version of the full list [here](https://bazaar.launchpad.net/~elementary-os/elementaryos/default-settings-loki/view/head:/appcenter.blacklist).

We’ve also resolved an issue with opening `appstream://` urls that could cause you to get stuck on the updates view.

## Look & Feel

Thanks to some feedback [on GitHub](https://github.com/elementary/stylesheet/issues) we’ve increased the color contrast in application sidebars to pass the WCAG standard. Our stylesheet also now implements the style class `.monospace` for requesting monospaced fonts on a widget. You may also notice that maximized windows now remain rounded instead of becoming squared at the edges.

<figure markdown="1">
![Rounded corners on maximized windows!](/assets/images/loki-updates-for-august/1cKDV9y59PETAV8VCAd2GeQ.png)
<figcaption markdown="1">
Rounded corners on maximized windows!
</figcaption>
</figure>

If you’re curiously following elementary OS development from a different Open Source operating system, you might be happy to know that the latest release of our stylesheet includes tons of compatibility fixes for Gtk+ ≥ 3.20. We’re already hard at work on the next major version of elementary OS and these fixes represent some of that work. This includes changing many CSS selectors to new element names (`actionbar`instead of `.action-bar` or `GtkActionBar`) and supporting new classes like `keycap`.

## Panel

We’ve released a fix for an issue that caused bluetooth devices to become duplicated in the Bluetooth indicator. We also fixed an issue that caused the menu separator to scroll with the list of devices.

In the Notifications indicator, long notification text in the menu is now wrapped. We also released a possible fix for certain app windows not being raised when clicking on a notification.

The session indicator received some minor visual fixes for alignment and spacing along with a bit of code cleaning.

## Mail

There’s now a toolbar button in the composer to add inline images to your emails! We also addressed a really annoying issue that caused clicking a link in an email to scroll the message list to the top.

## And More!

[FastMail](https://www.fastmail.com) moved their servers recently and so we’ve updated Online Accounts settings to point at the new server address. We’ve resolved an issue in Videos which sometimes made spacebar act as if it had been double tapped. We’ve improved the decimal precision of Calculator and prevented results of `-0` .

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest. While you’re at it, be sure to check out some of the new apps that were published this month!

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of[ elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*