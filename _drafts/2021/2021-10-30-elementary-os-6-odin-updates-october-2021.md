---
title: elementary OS 6 Updates for October, 2021
description: All the small things
author: danrabbit
image: /images/elementary-os-6-odin-updates-october-2021/card.jpg
tags:
  - odin
  - updates
---

<figure class="on-screen" markdown="1">
![Screenshot]({{ page.image }})
</figure>

New OS 6 updates just dropped! This month features a heavy round of creature comforts, healed paper cuts, and paid off technical debt. Plus, a big win for cross-desktop compatibility.

## AppCenter

The most noticeable change this month in AppCenter is the new progress indicator when installing, removing, or updating apps. Instead of a separate progress bar, progress is now indicated in a compact way over the cancel button. This greatly improves AppCenter with smaller window sizes and fixes layout issues in views that show a lot of apps like the home page and when showing other apps by an author on the app info page.

<figure>
  <picture>
    <source srcset="/images/{{ page.slug }}/appcenter-dark.png" media="(prefers-color-scheme: dark)">
    <img alt="AppCenter" src="/images/{{ page.slug }}/appcenter-light.png" width="1020" height="667" />
  </picture>
<figcaption>Progress is now shown in a small progressbar seen top right</figcaption>
</figure>

We also fixed a couple of small regressions introduced recently: apps which contain illicit substances now display the correct icon for this content warning, we no longer show a "Multiplayer" badge for apps with online functionality that aren't games, and we make sure not to show plugins on the home page. We also fixed an issue where $0 app installs were being recorded as paid, ensuring that AppCenter can properly suggest payment the next time you get an update from an app developer you haven't supported yet. And finally, we addressed an issue where unstable versions of already installed apps were appearing in the homepage banner.

## Web

This month we've made the leap from Web 3.38 to 40.3 which brings quite a number of improvements including a redesigned tab bar, several performance and stability fixes, and of course rounded window corners!

The preferences dialog itself has been redesigned and now includes search. Managing search engines and passwords have been completely redesigned. A setting to disallow local storage is now included, and there's a new optional Google search suggestions feature that is off by default. Appearance settings now include the ability to add custom JavaScript. Fans of Firefox sync should note that this feature has moved from the preferences dialog to the "Import and Export" menu.

The new tab bar includes slick animations when opening, closing, and reordering tabs. Drag and Drop is much improved. When there are many open tabs, they can now be scrolled through quickly instead of individually paged with arrows. Closing tabs waits to resize like elementary apps. And the new tab bar fully supports touch screens. For a deep dive into the new tab bar, check out [Alex's blog post](https://blogs.gnome.org/alexm/2021/03/13/reinventing-tabs/)

## Mail

Yet another release of Mail landed this month thanks to [David Howell](https://github.com/dbhowell), [Justin](https://github.com/sponsors/jhaygood86), and [Marco](https://github.com/sponsors/marbetschar). Be sure to sponsor them on GitHub if you appreciate their work!

Conversations in the list now have a handy secondary-click menu, the next conversation in the list is automatically selected after archiving, messages use your local time in their headers, and unread messages now use your accent color for their titles to stand out a bit more.

A handful of issues were also addressed including fixing the sender selection when opening `mailto:` links, sent messages will not be marked as "unread", and Mail will no longer hang when deleting the last message in a mailbox. Plus, we resolved an issue where Mail would sometimes fail to delete messages from your mail server, and we make sure that conversations get resorted by time and date when new messages are received.

## Photos

One of our oldest code bases got some nice updates this month as well. Now when you open a photo in the previewer, we focus the photo itself instead of the save button; this enables navigating with the left and right arrow keys right away. The actions for "Toggle Sidebar" and "Toggle Photo Info" have been moved from the secondary-click menu of certain views to the main menu button, hopefully making these customization options more discoverable. We also fixed a potential crash when importing photos with invalid date and time info.

## Calendar

The seemingly never ending battle against time zones continues this month with fixes for Windows-style time zones in synced events. We also plugged a memory leak when fetching timezone information, and we fixed a regression that prevented Calendar from running in the background and notifying of upcoming events.

## Calculator

When Calculator starts up, we now focus the main text entry so that entering numbers with the keyboard works right away. We've also improved the experience with multiple windows: there's now a "New Window" action when secondary-clicking Calculator in the Applications Menu or Dock, and we fixed an issue with showing advanced controls so that it only affects the currently focused window. Lastly, we now show the correct window title in the Multitasking View.

## Files

We fixed an issue where some audio files would have a thumbnail placeholder forever instead of falling back to the audio file type icon when they have no album art. We also made sure the overlay bar in the bottom right doesn't briefly appear when switching between bookmarks. The names of bookmarked folders will now properly update if your language was changed. And we removed the message about reporting issues when running Files from Terminal.

## Videos

Videos now supports the two-finger-swipe to go back gesture and navigation code has been cleaned up a ton. Window titles should be more accurate when navigating. Also, we're now shipping Videos as a Flatpak which should resolve some reported issues with certain video codecs.

Note that as a result to the switch to Flatpak, you may need to manually re-add Videos to your Dock.

## System Settings

This month [David Hewitt](https://github.com/sponsors/davidmhewitt) spent some time resolving cross-platform issues in System Settings, which should make our desktop environment more easily portable to distros like Fedora and Nix OS. This also resulted in better support for locales that use 3-letter language codes and more reliable sidebar updates in User Accounts settings as well as some minor performance improvements.

<figure>
  <picture>
    <source srcset="/images/{{ page.slug }}/displays-dark.png" media="(prefers-color-scheme: dark)">
    <img alt="Displays Settings" src="/images/{{ page.slug }}/displays-light.png" width="995" height="691" />
  </picture>
<figcaption>Resolutions with a different aspect ratio are now shown in a sub-menu</figcaption>
</figure>


Changing display resolution should be quite a bit more convenient now since we now show resolutions with a different aspect ratio in a separate sub-menu. We've also tweaked the style of Displays settings to be slightly lower contrast in the dark style, and we fixed an issue that prevented display name tags from appearing on all workspaces.

## Portals

You may recall that Cassidy [started the discussion](https://blog.elementary.io/the-need-for-a-freedesktop-dark-style-preference/) around the need for a FreeDesktop standard for the dark style a little over two years ago. We shipped the first iteration of an opt-in dark style preference in elementary OS 6 in August, and this month we're excited to ship the shiny new cross-desktop dark style preference as part of our regular updates.

<figure class="half card" markdown="1">
![Apps in light style](/images/{{ page.slug }}/fdo-color-light.png)
![Apps in dark style](/images/{{ page.slug }}/fdo-color-dark.png)
<figcaption markdown="1">
The dark style preference is now respected across desktops for GNOME and elementary OS apps
</figcaption>
</figure>

As before, this dark style preference is still opt-in for developers, which means it won't break apps that weren't tested against it. However, we're now using an agreed upon desktop-agnostic namespace in the Settings portal which works across application toolkits and desktop environments. What that means for you is that very soon GNOME apps will begin respecting the dark style preference on OS 6 and we hope to see this compatibility spread to KDE apps and more in the future. It also means that those running AppCenter apps on GNOME 42 will have their dark style preference automatically respected on day one.

<figure>
  <picture>
    <source srcset="/images/{{ page.slug }}/appchooser-dark.png" media="(prefers-color-scheme: dark)">
    <img alt="AppChooser Portal" src="/images/{{ page.slug }}/appchooser-light.png" width="468" height="518" />
  </picture>
<figcaption>The new AppChooser portal</figcaption>
</figure>

In other exciting portal news, we're shipping the first version of our elementary desktop portals which includes a new AppChooser. You'll notice Flatpak apps which launch files in another app using the new design.

## Developer Platform

In tandem with our work on portals is a new version of our Flatpak platform. This update includes a new version of Granite which automatically supports the FreeDesktop dark style preference; there's no additional work needed from developers to support the new standard. We do advise developers who added a sandbox hole for AccountsService to their Flatpak manifest to remove this line as it is no longer needed.

<aside markdown="1">
>Developers don't need to do any additional work to support the new FreeDesktop dark style preference
</aside>

The new version of Granite also automatically uses the Settings portal for a couple other things like date and time settings. This fixes an issue with time picker widgets not respecting AM/PM vs 24-hour time format preferences, for example. Finally, we also released a small update to the system stylesheet to support the Hdy.Tabbar widget and with a fix that makes sure `.titlebar` with the `.flat` style class automatically inherit the background color of their containers.

## Other Fixes & Updates

Along with all of the headlining features and fixes above, there are a few more minor updates. Previously, Camera's resolution had been reduced for performance reasons; in the latest version Camera will continue to use a more performant resolution in the preview, but will save full-resolution pictures. We also fixed saving and restoring the window size. Shortcut Overlay will no longer crash if a keyboard shortcut has been set to blank. The archive manager File Roller has been updated to version 3.40, supports the dark style preference, and is now shipped as a Flatpak.

The Applications Menu now shows a secondary-click menu on search result items. We fixed an issue with the network indicator that caused unwanted launches of the captive network assistant. The assistant also gained a new icon and is now shipped as a Flatpak for greater security. The Notifications indicator should now work on Fedora. The Date & Time indicator now correctly updates the current day upon opening, and we fixed an issue with numbers becoming illegible when switching between the dark and light styles.

And as always, there are translation updates, code cleanups, and other under-the-hood improvements included with these updates across the OS and apps.

<aside markdown="1">
>We prioritize our work based directly off of the feedback we receive
</aside>

If you're experiencing an issue that wasn't fixed in this month's updates—or if you have an idea for a new feature—we'd love to hear from you. We prioritize our work based directly off of the feedback we receive. Be sure to check out our [issue reporting guide](https://docs.elementary.io/contributor-guide/feedback/reporting-issues) for tips and more info.

If you'd like to follow along with development and see what we're working on and prioritizing for the next monthly updates, check out the [OS 6.1 project board on GitHub](https://github.com/orgs/elementary/projects/90).

## Get These Updates

As always, if you're running elementary OS 6 you can get all of these updates directly from AppCenter by opening up the "Installed" tab and selecting "Update All", and previous OS 6 purchase links from email receipts will be upgraded to the newest version.

If you're not yet running OS 6, we'll be publishing a new 6.0.3 download for a pay-what-you-can price that includes all of these updates [on our homepage](https://elementary.io) soon.

## Special Thanks

Major shoutouts this month to the entire GNOME community for their assistance in implementing the color scheme preference, and especially [Alexander Mikhaylenko](https://github.com/Exalm) for being out point of contact on a number of things including LibHandy, GNOME Web, the FreeDesktop dark style, and more.
