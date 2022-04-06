---
title: elementary OS 6 Updates for August, 2021
description: Just three weeks since the release, and we already have more goodies
author: danrabbit
image: /images/elementary-os-6-odin-updates-august-2021/card.jpg
tags:
  - odin
  - updates

facebook: https://www.facebook.com/elementaryos/posts/4674257375939388
reddit: https://reddit.com/r/elementaryos/comments/pfk2ec/elementary_os_6_updates_for_august_2021/
twitter: https://twitter.com/elementary/status/1432843655648366593
---

<figure class="on-screen" markdown="1">
![Screenshot]({{ page.image }})
</figure>

Earlier this month [we released elementary OS 6 Odin](/elementary-os-6-odin-released) and we've been thrilled with the overwhelming amount of feedback we've received. So far OS 6 has been downloaded from our website [over 75,000 times](https://plausible.io/elementary.io?period=custom&goal=Download&from=2021-08-10&to=2021-08-31&props=%7B%22Version%22%3A%226%22%7D)! Over the last three weeks we've been gathering up all of your feedback and jumping right into delivering the first batch of free fix and feature updates for OS 6.

## AppCenter & Sideload

If you found AppCenter a little sparse on release day, you might want to take another look! App developers have continued releasing compatible versions of their apps and we're currently up to [51 curated apps now available](https://appcenter.elementary.io/) in OS 6. We've been in touch with developers and there's quite a few more in the queue, so hang tight if a favorite hasn't made its way in yet.

If you're not running elementary OS but still want to get these AppCenter apps, we've made it much easier with a recent update to our [AppCenter website](https://appcenter.elementary.io/): Free apps now include a "Download as Flatpak" button that will give you a Flatpak reference file which you can sideload on your operating system of choice. Enjoy!

<figure>
  <picture>
    <source srcset="/images/{{ page.slug }}/badger-dark.png" media="(prefers-color-scheme: dark)">
    <img alt="Badger on AppCenter" src="/images/{{ page.slug }}/badger-light.png"/>
  </picture>
<figcaption>Free apps like Badger now show a button "Download as Flatpak"</figcaption>
</figure>

We've been putting a lot of work into the first run experience, especially with regards to apps from third-party stores like Flathub since we know many of you are sideloading. For example, apps from freshly-added remotes now show in AppCenter without needing to restart your device. We've also added a reminder about Sideload when searching returns no results with the same language that is used in the Welcome app. We now ensure that apps predictably default to installing per-user when selected from the home page, and both AppCenter and Sideload can now use system-wide installed app runtimes for per-user app installs; as a result, the first time you install a new app should now be an even faster, smaller download.

<figure>
  <picture>
    <source srcset="/images/{{ page.slug }}/appcenter-dark.png" media="(prefers-color-scheme: dark)">
    <img alt="AppCenter showing no results found" src="/images/{{ page.slug }}/appcenter-light.png" width="1169" height="729" />
  </picture>
<figcaption>AppCenter now reminds of Sideload when a search has no results</figcaption>
</figure>


We've also addressed an issue with apps not opening from in-app notifications, and there is a less abrupt transition when choosing which source to download an app from. Lastly, we've reworked the way the Applications Menu watches for changes in installed apps, so it should be more responsive about showing freshly installed-apps without a restart.

## Online Accounts, Tasks, Mail, and Calendar

Our brand new Online Accounts system has seen a little love around IMAP accounts: we now do a better job of detecting the correct authentication method for accounts and you can edit existing accounts by selecting the pencil icon in its row.

<figure>
  <picture>
    <source srcset="/images/{{ page.slug }}/onlineaccounts-dark.png" media="(prefers-color-scheme: dark)">
    <img alt="System Settings → Online Accounts" src="/images/{{ page.slug }}/onlineaccounts-light.png" width="1044" height="740" />
  </picture>
<figcaption>IMAP accounts can now be edited in System Settings → Online Accounts</figcaption>
</figure>

We've updated Mail with a fix for a crash that some people have been experiencing on startup as well as a fix for some messages failing to render completely. We better ensure the correct "From" address on replies when multiple accounts are set up, and Mail will no longer ask you to save empty drafts. We've also moved the in-app notification for "Undo" to be less intrusive.

The latest release of Calendar includes a fix for an issue with some all-day events displaying incorrectly, and we do a better job of getting calendar colors from online accounts.

We've heard reports of some folks having issues with online accounts and Tasks and have narrowed it down to restrictions with app sandboxing. For now we've decided to ship Tasks as a traditional deb package by default to work around these issues while we work toward a more long-term solution. When updating be aware that if you previously had Tasks in your Dock, this change will remove it. You can re-add it like any other app from the Applications Menu. Apologies for the inconvenience!

## Hardware Compatibility

Thanks to upstream developers working on Ubuntu, we're now shipping a fix for an issue that prevented some computers from being able to boot, including Dell devices with UEFI and some other models. If you weren't able to boot the initial release of OS 6, give it another shot! If you were able to get OS 6 installed, you're not affected by this issue and you don't need to re-install. This latest build inherits all the other great hardware compatibility improvements included in Ubuntu 20.04.3 release as well. Thanks Ubuntu!

If you've had trouble with device drivers that rely on DKMS, AppCenter will now automatically pull in the required Linux kernel headers when installing them. We've also fixed an issue that was preventing our bootloader GRUB from correctly updating to use newer kernels, and you should see less of GRUB in general when starting your computer normally.

If you're here looking for an update on builds for Pinebook Pro and Raspberry Pi, hang tight! We've recently had some code merged upstream to the Flatpak Builder GitHub action that will enable us to start building Flatpak apps for ARM. We're hoping to start using this in production soon and produce new ARM images in Early Access. Watch this blog for more information.

## Installer & Initial Setup

A couple of nice fixes landed in the Installer and Initial Setup that make it easier to set the name of your device. We now double check at install time that the default generated hostname is valid and you can change it to something you like more during initial setup. A formatted name like "Cassidy's StarBook" will be shown when possible—like in System Settings—and will automatically fall back to something more machine friendly like "Cassidys-StarBook" in places like Terminal.

<figure>
  <picture>
    <img alt="Initial Setup" src="/images/{{ page.slug }}/initial-setup.png" width="916" height="666" />
  </picture>
<figcaption>Initial Setup now helps you name your device</figcaption>
</figure>

We've also fixed a styling issue with "Unused" disk partitions in the custom install mode, added two-finger swipe to go back during Initial Setup, and changed the source of locale names to avoid some politically-charged naming of certain locales.

## System Settings

We've fixed an issue in Power settings that could sometimes cause problems with resuming from sleep, and we've added a switch to show or hide the battery percentage in the Panel. In Display settings, we've fixed an issue that caused the "Use this display" switch to fail in certain multi-display setups. We also improved the way we remember Bluetooth state on restart and when resuming from suspend. And in the System page, we now display more information for certain graphics chipsets, including Intel® Xe Graphics.

## Other Fixes & Updates

Files includes a fix for issues regarding renaming bookmarks in the sidebar as well as with the bookmark shortcut <kbd>Ctrl</kbd><kbd>D</kbd>. We've also resolved an issue where secondary-click context menus on the pathbar were sometimes too small for their contents, and an issue where color tags were missing when thumbnails are hidden.

For apps that use legacy server-side window decorations, we've fixed an issue that prevented the window border and shadow from being included in screenshots. The Power indicator includes a number of improvements such as showing the screen brightness level when scrolled, better matching the scroll behavior of other indicators, automatically showing the battery percentage when it's low, and showing "Fully Charged" when at 100% and plugged in. And of course there a number of translation updates, code cleanups, and other under-the-hood improvements included with these updates!

<aside markdown="1">
>You can send your feedback to the team using the Feedback utility on elementary OS 6
</aside>

If you're experiencing an issue that wasn't fixed in this round of updates or you have an idea for a new feature, we'd love to hear from you! You can send your feedback to the team using the Feedback utility on elementary OS 6 by searching for "Feedback" in the Applications Menu or by navigating to _System Settings_ → _System_ and selecting "Send Feedback" at the bottom of the window. Alternatively, you can file issue reports or start discussions [on GitHub](https://github.com/elementary). The team prioritizes our work based directly off of the feedback we receive through GitHub, so it's the best way to make sure your voice is heard.

If you'd like to follow along with development and see what new features and fixes we're prioritizing over the coming months, check out the [OS 6.1 project board on GitHub](https://github.com/orgs/elementary/projects/90).

## Get These Updates

As always, if you're running elementary OS 6 you can get all of these updates directly from AppCenter by opening up the "Installed" tab and selecting "Update All", and previous purchase links from your email receipt will be upgraded to the newest version.

If you're not yet running OS 6, we've published a new 6.0.1 download for a pay-what-you-can price that includes all of these updates [on our homepage](https://elementary.io).

## Special Thanks

I'd like to give special thanks this month to Marco for his work on Online Accounts and associated apps. You can read more [on his blog](https://www.marco.betschart.name/blog/2021-08-30-elementary-os-6-post-release-bugfixing) about the specific fixes and features that he worked on as well as a link to his [GitHub Sponsors page](https://github.com/sponsors/marbetschar). He's currently looking to expand his Open Source software work and could really use your help with funding!

David also deserves a shoutout for diving into the big under-the-hood issues and delivering this month's big AppCenter and Flatpak-related fixes as well tracking down the source of issues related to suspend and resume. You can also [sponsor his work on GitHub](https://github.com/sponsors/davidmhewitt).

You can thank Marius for his work on hostnames, fixing the "Open" button in AppCenter, and many other bug fixes! Check out his [GitHub sponsors page](https://github.com/sponsors/meisenzahl) too.
