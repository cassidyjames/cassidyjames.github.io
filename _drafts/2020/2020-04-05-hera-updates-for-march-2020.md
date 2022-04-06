---
title: Hera Updates for March, 2020
description: OS 5.1.3 brings improvements and fixes across the board
author: cassidyjames
image: /images/hera-updates-for-march-2020/card@2x.png
tags:
 - hera
 - updates

facebook: https://www.facebook.com/elementaryos/posts/3161954863836321
mastodon: https://mastodon.social/@elementary/103947123460667968
reddit: https://www.reddit.com/r/elementaryos/comments/fvkn2x/hera_updates_for_march_2020_elementary_blog/
twitter: https://twitter.com/elementary/status/1246850051411935233
---

Fresh on the heels of the [AppCenter for Everyone Remote Sprint](/appcenter-for-everyone-remote-sprint), we still managed to push out a good amount of updates over the course of March (and early April), bundled up in an OS 5.1.3 update. Let's dive into what's new.

## Code

We continued our quest to make Code the best editor for elementary OS this month. A file's Git status now shows in its tooltip in the project sidebar, making it easier to understand what the status icons mean—especially if you're colorblind or just don't remember. We also added an option for explicit case-sensitive find/replace for those times when you want to find or replace the word `foo` but _not_ `Foo`.

<figure>
  <picture>
    <source srcset="/images/hera-updates-for-march-2020/code-dark@2x.png" media="(prefers-color-scheme: dark)">
    <img alt="Code" src="/images/hera-updates-for-march-2020/code-light@2x.png" width="1102" height="759" />
  </picture>
</figure>

A couple of fixes round out the release, including fixing a switch alignment issue in the Font settings and correctly showing the Toggle Comment context menu item whether or not any text is selected.

## Files

We landed several fixes for Files this month. We corrected a "New Folder" shortcut label, fixed navigation with back/forward context menu items, ensured the path bar shows the correct path when closing a tab and at startup, fixed several small issues when renaming a file, and omitted `file://` in certain user-facing places. We also fixed a few rare freezes and crashes.

## Panel & Indicators

We spent some time this month pushing out updates to Panel itself along with many of the indicators. Importantly, we fixed the panel interfering with certain display setups, like when a secondary display is above the primary display—multi-display users rejoice!

We fixed an issue with disappearing notifications in the Notifications indicator, corrected "Unknown Title" to "Unknown Artist" when we don't receive artist data in the Sound indicator, and improved performance in the Session indicator.

Over all, we've been focusing on improving performance and reducing memory usage of the Panel and indicators. We're happy for those improvements to start making their way to users this month.

## System Settings

We updated the Universal Access settings to deduplicate some settings found elsewhere as part of our [Curb Cuts effort](/accessibility-features-are-just-features). For example, dwell clicking is now in the Mouse & Touchpad settings, and transparency and text size are now in Desktop settings. If you're ever unsure where a setting might be, System Settings has great search for individual settings from both the Search entry inside the app and from the Applications Menu.

We also added a new "Workspaces" icon and fixed how the Space key works with shortcuts in Keyboard settings, fixed an issue with canceling installing languages in Language & Region settings, and fixed a translation bug for Portuguese in the System Settings app itself.

<figure markdown="1">![Wireless Network settings](/images/hera-updates-for-march-2020/wireless.png){: srcset="/images/hera-updates-for-march-2020/wireless@2x.png 2x" width="989" height="685"}
<figcaption>Refreshed design for the Wireless Network settings</figcaption>
</figure>

Lastly, we released an improved design for the Wireless page in Network settings, which should make it more reliable and clear to join and manage networks.

## Desktop

We released an update for Gala—the component that displays multitasking and manages windows—that includes keyboard shortcuts in the secondary-click context menu for title/header bars. This is a part of our ongoing [Keyboard Shortcut Discoverability project](https://github.com/orgs/elementary/projects/32) which aims to make keyboard usage more contextually-learnable in elementary OS.

<figure markdown="1">![Wireless Network settings](/images/hera-updates-for-march-2020/gala-menu.png){: srcset="/images/hera-updates-for-march-2020/gala-menu@2x.png 2x" width="580" height="462"}
<figcaption>Keyboard shortcuts in the window menu</figcaption>
</figure>

We also fixed media keys not working in certain situations, and fixed displaying a "Gala Background Services" item in the dock when logging in.

An under-the-hood change this month was the retiring of an old desktop component called [Cerbere](https://github.com/elementary/cerbere). Without getting too into the weeds, our desktop now works more closely with upstream components to ensure the session and required desktop components are launched properly and remain running. Importantly, this also resolves issues with long shutdown times on elementary OS.

## …and more!

Saving event reminders should be more reliable in Calendar, plus event participant details will be ellipsized if too long, and events should no longer be accidentally rescheduled when editing their title.

We fixed removing items from the queue in Music, and we made the sensitivity of the equalizer sliders more reliable. We released a fix for inserting multi-byte characters in Calculator. A small update to Terminal adds a new `-t` command-line option to open a new tab, plus fixes accidental URL clicks.

<figure markdown="1">![Wireless Network settings](/images/hera-updates-for-march-2020/sideload.png){: srcset="/images/hera-updates-for-march-2020/sideload@2x.png 2x" width="543" height="378"}
<figcaption>App name in Sideload</figcaption>
</figure>

Sideload now shows the name of the app once its data has loaded, making it easier to see and remember what you're about to install. And we added a new distinct app icon for Onboarding, instead of just using the OS icon.

Finally, we released [an update](https://github.com/elementary/granite/releases/tag/5.3.1) to Granite, our library for developers, that better aligns labels in settings sidebars and makes keyboard shortcut labels settable.

### New Releases Tool

To help us (and downstream projects) better track releases, we built out a little [releases tool](https://releases.elementary.io/) this week. It's just a start, but it's already super handy with a clear design, responsive layout, and automatic light/dark styles based on your browser. Try it out at [releases.elementary.io](https://releases.elementary.io/). Want to see how it works or adapt it to your own uses? Check out the [source code on GitHub](https://github.com/elementary/releases).

## Get It

As always, you can get these updates on elementary OS 5.1 Hera alongside updated translations, bug fixes, and performance improvements by opening AppCenter and hitting **Update All**.

If you're new to elementary OS or would just like a fresh ISO, these updates are included in a new elementary OS 5.1.3 Hera download on [our homepage](https://elementary.io).
