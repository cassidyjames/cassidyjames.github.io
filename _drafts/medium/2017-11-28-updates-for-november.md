---
title: "Updates for November"
description: "On the desktop and in the cloud!"
author: DanielFore
date: 2017-11-28T18:24:04.988Z
image: /assets/images/updates-for-november/1cr4IiPcI2M1pwwd3S-kR1w.png
tags:
  - "elementary-os"
  - "linux"
  - "open-source"
  - "updates"
  - "appcenter"
---

This month’s updates include both new app releases and improvements to our web service: AppCenter Dashboard.

## Calendar

A new version of Calendar is out that closes [**28](https://github.com/elementary/calendar/issues?q=is%3Aclosed+milestone%3A0.4.1)** reported issues! This includes a long standing issue that caused events synced from some online calendars to appear on the wrong day. It also includes fixes for importing and exporting, repeated events, stability improvements, and a decent amount of UI polish in the events dialog.

<figure markdown="1">
![](/assets/images/updates-for-november/1cr4IiPcI2M1pwwd3S-kR1w.png)
</figure>

## Music

An update to Music has landed that now updates the library with new or removed music files on startup. Several issues related to shuffle and the queue were resolved. We also landed a few minor visual fixes a bunch of code clean up to prepare for some future updates.

## AppCenter

This release of AppCenter comes with an under-the-hood change to make it easier for re-distributors (like Pop!_OS) to ship their own custom CSS styles. We resolved an issue that caused the window to be resized when an app’s release description is very long. You can now also right click AppCenter’s icon in the applications menu or the dock to jump directly to “Check for Updates”. Last but not least, you can now find additional apps by an author when scrolling to bottom of any app info page.

<figure markdown="1">
![](/assets/images/updates-for-november/1eb-N6oYzie9LlOOCsS4jpQ.png)
</figure>

## AppCenter Dashboard

Lots of improvements have landed this month in the backend that powers app submissions for AppCenter. We now clone git submodules recursively when building your app. Developers may have noticed that you can now see download counts for your apps in the dashboard.

<figure markdown="1">
![](/assets/images/updates-for-november/1qGayucgmWU-MBxB8dUqqXQ.png)
</figure>

Several new automated tests were added as well including:

* Validating the `screenshot` tag in AppData

* Making sure an app’s icon and ID matches their RDNN

* Warning if AppData is missing the `license` or `releases` tags

* Checking for a missing `developer_name` tag in AppData

* Ensure that the app places their executable in `/usr/bin`

All of this means even faster reviews for developers publishing their apps in AppCenter and ensures higher quality for our users.

## Stats for Nerds

We’ve been getting requests to include some more stats in our monthly updates post, so here’s a few! This month:

* elementary OS was downloaded over 61,000 times with about 77% of those downloads coming from closed platforms

* There were over 70,000 downloads from AppCenter with $132 paid out to developers

* Developers published over 70 app releases this month, which includes a mix of new apps and updates

## And More!

The session menu now more explicitly hides reserved/system users.

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest. While you’re at it, be sure to check out some of the apps that were published or updated this month, like November’s [AppCenter Spotlight: Sequeler](https://medium.com/elementaryos/appcenter-spotlight-sequeler-637b882edd6b)!

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*