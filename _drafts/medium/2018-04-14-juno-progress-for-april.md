---
title: "Juno Progress for April"
description: "Get hyped! Juno is coming!"
author: DanielFore
date: 2018-04-14T03:53:07.002Z
image: /assets/images/juno-progress-for-april/1SU7X1RKtzZeh_j1d87EAOw@2x.png
tags:
  - "elementary-os"
  - "juno"
  - "open-source"
  - "linux"
  - "preview"
---

With only a handful of issues left before we’re ready for public beta, I present to you our progress for the month of April! At this point, the vast majority of new features have landed in Juno and we’re focusing on bug fixing, polish, and general quality control and testing. Get hyped because we’re almost there!

## Notifications

As part of our effort to make sure users have full control over apps that send notifications and how those are displayed, we’ve opted to make some changes to the way the Notifications indicator works. Right now, developers can identify their apps to the notifications server using [GLib.Notification](https://elementary.io/docs/code/getting-started#notifications). However, we previously also had a heuristic that tried to guess the correct app for notifications that didn’t include an ID. This often resulted in notifications being grouped incorrectly, especially with Electron-based notifications. In order to fix this, we’ve done two things:

1. We’ve removed the heuristic that tries to guess which app a notification was sent from. All notifications sent without an ID will be categorized as “Other” from now on.

1. We’ve submitted patches upstream to [Electron](https://github.com/electron/electron/pull/11913#issuecomment-365423133), [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1438051), and [LibNotify](https://bugzilla.gnome.org/show_bug.cgi?id=793474) to help developers identify their apps properly to the notifications server. This should benefit not just elementary OS but also GNOME and other Open Source desktops. We’re happy to say that the Electron patch [was committed](https://github.com/electron/electron/blob/master/brightray/browser/linux/libnotify_notification.cc#L127) and we hope to see Electron apps identifying themselves correctly soon.

We’ve made one more change that we’re interested in getting feedback on: By default, we’ve disabled notifications from “Other” apps. This means that apps that don’t correctly identify themselves to the notification server, and thus can’t be individually controlled, won’t be able to send notifications at all out of the box. You can always re-enable notifications for “Other” apps in System Settings → Notifications, but we’d encourage you to put pressure on the developers of your favorite apps to make sure they’re sending their app ID to the notifications server.

## Files

As one of our most mature apps, Files predates our standardization on Vala as a programming language. It was historically written in C and still carries many C classes. I’m excited to say that a lot of hard work has gone into porting many of these old C classes to new, shiny Vala classes that are many hundreds of lines shorter. This means a much cleaner and more maintainable code base and has already led to a number of stability and performance improvements. We’ve also been able to drop several internal functions and instead use the functions of upstream libraries like Gtk+, GIO, etc.

<figure markdown="1">
![Oh yeah and also Files now fully supports HiDPI](/assets/images/juno-progress-for-april/1SU7X1RKtzZeh_j1d87EAOw@2x.png)
<figcaption markdown="1">
Oh yeah and also Files now fully supports HiDPI
</figcaption>
</figure>

As a bit of a cherry on top, Files now fully supports HiDPI and renders the icons and thumbnails in its views in crystal clarity.

## System Settings

As part of our effort to make absolutely everything in elementary OS better, we’ve spent a lot of time in System Settings this cycle. This month, Printers got a lot of special attention and a significant redesign.

<figure markdown="1">
![Printer settings has received a decent amount of design attention](/assets/images/juno-progress-for-april/1N4FdB-U5T3PAlJqXl8SOxA@2x.png)
<figcaption markdown="1">
Printer settings has received a decent amount of design attention
</figcaption>
</figure>

Navigation between different types of settings is much clearer since moving the contents of the menu in the header to a dedicated tab. The “Print Test Page” button is now always visible in an obvious bottom-right position. Completed jobs are now always shown in the Print Queue and sorted separately from pending jobs regardless of their start time. We also make use of the [RelativeDateTime](https://valadoc.org/granite/Granite.DateTime.get_relative_datetime.html) utility in Granite to give you more human-readable times like “5m ago” or “Yesterday”. Last, but not least, the popovers for adding and removing printers are now dialogs and have simpler and clearer navigation as well.

<figure markdown="1">
![Language & Region settings got a slight design update; plus, infobars now have icons](/assets/images/juno-progress-for-april/1L8AHf304Qa-Fc9q1PSG_-w@2x.png)
<figcaption markdown="1">
Language & Region settings got a slight design update; plus, infobars now have icons
</figcaption>
</figure>

Language & Region settings saw a bit of a design update as it was ported to the new Granite SimpleSettingsPage. The link to Keyboard Settings is now a more-obvious labeled button and actions for the selected language now float to the bottom right of the window. The label for the currently selected language now also uses a larger font and is accompanied by the locale settings icon. This brings things more in line with many other settings pages you’ll see. You might also notice that InfoBars now come with a little icon on the left side that relates to their message type.

<figure markdown="1">
![](/assets/images/juno-progress-for-april/1v2AgWi18Zo-AWLZwy1cz6Q@2x.png)
</figure>

<figure markdown="1">
![New Report a Problem dialog in System Settings → About](/assets/images/juno-progress-for-april/1wjC2umnQzXkRF4E784qIvQ@2x.png)
<figcaption markdown="1">
New Report a Problem dialog in System Settings → About
</figcaption>
</figure>

If you weren’t already aware, you can find a link to report a problem with elementary OS in System Settings → About. Now, instead of going to a web page on Launchpad to select a component to file an issue against, we provide a dialog with categories and icons to help you filter down and find the correct GitHub repository to file an issue against.

<figure markdown="1">
![You can now manually set your display’s scaling factor in System Settings → Displays](/assets/images/juno-progress-for-april/1bVy0uG_BuJLmh39Ck6i0nA@2x.png)
<figcaption markdown="1">
You can now manually set your display’s scaling factor in System Settings → Displays
</figcaption>
</figure>

Two more small features landed in System Settings this month as well: you can now delete wallpapers from System Settings → Desktop → Wallpaper with a convenient secondary click menu and you can manually set your display’s scaling factor in System Settings → Displays.

## Code

We spent some more time this month improving [Code](https://medium.com/elementaryos/scratch-is-now-code-2838e03134c7) to make it even better as your daily code editor.

<figure markdown="1">
![](/assets/images/juno-progress-for-april/1PEpq4xBKkJUKt1r6QZh2OQ@2x.png)
</figure>

Code now comes with new smart backspace and home key behaviors, meaning it more often does what you’d expect when you hit those keys and cuts down on repeat presses. It also now accepts colons in addition to periods in the Line Number entry, meaning you can hit “123:45” to jump to the 45th character on line 123. We’ve added an “Open Folder” item on the welcome screen, making it that much faster and obvious to get started from a blank slate. And as a nice little touch, we added a little animation to the sidebar when switching between your project folders and symbols.

<figure markdown="1">
![Cute rendition of our icon by EditorConfig’s [Amon Keishima](https://github.com/editorconfig/editorconfig.github.com/pull/88)](/assets/images/juno-progress-for-april/1NXwxa4BMhRCrOcwoB0VWXw@2x.png)
<figcaption markdown="1">
Cute rendition of our icon by EditorConfig’s [Amon Keishima](https://github.com/editorconfig/editorconfig.github.com/pull/88)
</figcaption>
</figure>

And lastly, while [last month](https://medium.com/elementaryos/juno-progress-for-march-6fd2d553c237) we added EditorConfig support to Code, this month we turned it on by default, and Code was added to the front page of [EditorConfig.org](http://editorconfig.org/#download)!

## And More

Many first party apps are now testing with [Houston CI](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726), meeting the same strict publishing standards that we use for 3rd party apps in AppCenter. Plus, we’ve been working on a set of performance improvements for the panel that should make the desktop load more smoothly for users with slow, spinning hard disks.

In additional to all of the above, you can always count on a healthy dose of code cleaning and general bug fixing. We’re now up to over [490 closed issues](https://github.com/search?q=org:elementary+is:closed+is:issue+milestone:%22juno-beta1%22) associated with the Juno Beta milestone.

Juno is still under active development and we’re expecting to land even more fixes and optimizations before its big debut. Stay tuned to this blog for more highlights and announcements as we move toward the next major version of elementary OS. If you missed them, be sure to check out our previous posts about Juno:

* [Building The Next Generation of Apps](https://medium.com/elementaryos/building-the-next-generation-of-apps-81234cc21a8a)

* [Juno Progress for March](https://medium.com/elementaryos/juno-progress-for-march-6fd2d553c237)

* [Juno Progress for January & February](https://medium.com/elementaryos/juno-progress-for-january-february-9b276042716e)

* [Let’s Talk About elementary OS 5.0 Juno](https://medium.com/elementaryos/lets-talk-about-elementary-os-5-0-juno-a3a65b97ee7e)

*Thank you to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*