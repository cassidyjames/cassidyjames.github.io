---
title: "Loki Updates for July"
description: "Summer is in full force and that means more time to enjoy updates to your favorite Open Source operating system! Check out our updates for July, starting with…"
author: DanielFore
date: 2017-07-28T23:10:05.477Z
image: /assets/images/loki-updates-for-july/1uFB1pkX6QmU-EukR1wLI-g.png
tags:
  - "elementary-os"
  - "open-source"
  - "linux"
  - "updates"
---

## AppCenter

We kicked off July with a new release of AppCenter. The most obvious change you may have noticed is the new “Trending” carousel on the home page. This represents apps with the most downloads over the last 24 hours. You may also notice that we now show a spinner in the headerbar when AppCenter is working on something, whether that’s fetching updates or installing a new app. Speaking of apps, all of our default apps now appear alongside AppCenter Dashboard apps instead of in the “Uncurated” section.

<figure markdown="1">
![](/assets/images/loki-updates-for-july/1uFB1pkX6QmU-EukR1wLI-g.png)
</figure>

If you read [our previous blog post](https://medium.com/elementaryos/peace-out-about-dialogs-8efa956c0562), you’ll already know that we redesigned the app info page footer and added a new “Share” menu. This comes coupled with a bit of server magic and now you can share AppCenter URLs to your favorite apps on social media. Developers will also be happy to know that we’ve made some nifty [markdown badges](https://github.com/elementary/houston/wiki/Markdown-Badges) for their GitHub README’s.

<figure markdown="1">
![The new app info page footer and “Share” menu in AppCenter](/assets/images/loki-updates-for-july/170m4CQiM-MjN0eyQrKzqdw.png)
<figcaption markdown="1">
The new app info page footer and “Share” menu in AppCenter
</figcaption>
</figure>

And of course, we took the time to do some code cleaning, including introducing a new UpdateManager class that will be useful for features to come. We also solved a couple of potential crashers while we were at it.

## System Settings

Those who use their notebook with an external display will be happy to know that a fix was committed that caused lid closed settings to behave incorrectly in languages other than English. A minor issue was addressed where the back button in the headerbar could become labeled incorrectly. We also updated the GNOME Control Center compatibility layer, so that 3rd party apps trying to launch system settings panes will be properly redirected. Developers should note that we still recommend using [settings urls](https://medium.com/elementaryos/making-system-settings-access-a-cross-desktop-feature-c98eadcaea30) instead of hard coding calls to specific settings apps.

## Icons

It’s been long overdue, but this release marks the return of color media icons for all sizes. Developers should note that symbolic icons are still available when appending `-symbolic` to icon names.

<figure markdown="1">
![Color is back for media icons!](/assets/images/loki-updates-for-july/1iWoqse6ShGvd_TVi9Z3WTQ.png)
<figcaption markdown="1">
Color is back for media icons!
</figcaption>
</figure>

Many new file type icons including, make files, change logs, audio files, torrent files, and improved contrast for symbols on certain file type icons.

<figure markdown="1">
![A few of the improved file type icons](/assets/images/loki-updates-for-july/1r5YRy_AaAqlHiWi_ycNo6A.png)
<figcaption markdown="1">
A few of the improved file type icons
</figcaption>
</figure>

[Sam Hewitt](https://snwh.org/donate) took the time to draw some beautiful new speaker and microphone device icons:

<figure markdown="1">
![](/assets/images/loki-updates-for-july/1do1wRlDIU9GlXAzVmhIJ5A.png)
</figure>

You may also notice more comprehensive scaling and improved consistency between sizes as well as fixes for right-to-left languages. For the curious, you can see a full, visual diff [here](https://github.com/elementary/icons/compare/4.1.0...4.2.0).

## Screenshot Tool

While there were a couple of small bug fixes in Screenshot Tool, notably remember the window position for the save dialog and getting the right cursor position for selection screenshots, a bigger behavioral change was defaulting to a new “Screenshots” subfolder instead of dumping screenshots into the Photos folder. We’re hopeful that this change will help keep your computer just a little bit tidier. Also, those with HiDPI displays will notice much crisper previews in the save dialog.

## Terminal

A couple of quality of life features landed in this release of Terminal. Now, when issuing commands from folders with the same name, Terminal will disambiguate by appending part of the file path to the tab name.

<figure markdown="1">
![](/assets/images/loki-updates-for-july/1Q1IBng637dvAUCRPKix2Tg.png)
</figure>

Another handy new feature is the ability to right click anywhere and “Show in File Browser” for the current view. Users of more complicated Terminal apps like Midnight Commander will be happy to know that we’ve resolved an issue that caused `Fn` keys not to work properly with these apps.

## And More

As a follow up to [our previous post](https://medium.com/elementaryos/peace-out-about-dialogs-8efa956c0562), you’ll notice the “About” dialogs have been removed from many of our apps and their pages in AppCenter have been updated.

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest. While you’re at it, be sure to check out some of the new apps that were published this month!

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on[ Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of[ elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*