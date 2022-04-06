---
title: elementary OS 6 Updates for September, 2021
description: Big updates to AppCenter
author: cassidyjames
image: /images/elementary-os-6-odin-updates-september-2021/card.jpg
tags:
  - odin
  - updates
---

<figure class="on-screen" markdown="1">
![Screenshot]({{ page.image }})
</figure>

We're back with your monthly report on updates to elementary OS 6! It was another incredibly eventful month as we continued fixing reported issues and focused in especially on improvements to AppCenter and Online Accounts apps like Mail. But before we get to all the goodies, we're proud to report that OS 6 has been downloaded from our website [over 137,000 times](https://plausible.io/elementary.io?period=custom&goal=Download&from=2021-08-10&to=2021-10-04&props=%7B%22Version%22%3A%226%22%7D)—and as always, that's not including downloads from third parties or direct downloads via torrent that bypass our download page.

## AppCenter

Over the past month, we've been improving AppCenter from the inside out. Our shift from Debian packages to Flatpak for both curated and non-curated apps means we're able to lean more on Flatpak features; in addition to continued code cleaning and improvements, we've been using this as an opportunity to make AppCenter much more engaging and informative right from the start.

<figure markdown="1">
![AppCenter Home Page](/images/{{ page.slug }}/appcenter-home.png){: width="1408" height="895"}
<figcaption>The refreshed home page</figcaption>
</figure>

For example, we've largely reworked the home page with banners featuring the most recently released and updated curated apps in a multi-touch swipable carousel. We've also added up to twelve more of the most recently-updated apps directly below. Rather than just showing the app's icon and name, we now also show each app's summary and an install button—including the developer's recommended price if it's a monetized app. Since we enforce accurate update information for curated apps, this data is populated locally from the apps' AppStream data rather than from a remote API as before. The result of this work is a faster home page with over three times the apps displayed, as well as the ability to purchase or install several apps with far fewer clicks. The categories remain below if you prefer that route for browsing.

<figure class="half" markdown="1">
![AppCenter Non-curated App Info Page](/images/{{ page.slug }}/appcenter-report-card.png){: width="1408" height="895"}
![AppCenter Related Apps](/images/{{ page.slug }}/appcenter-related.png){: width="1033" height="607"}
<figcaption markdown="1">
**Left:** A non-curated app info page and its "report card" | **Right:** Other Flatpak apps from the same developer as the selected app
</figcaption>
</figure>

We've also spent significant time improving individual apps' info pages. Rather than displaying a generic "explicit" warning dialog when installing an app with certain content warnings, we show this information ahead of time at the top of the page. We differentiate between and inform about several content warnings including things like violence, language, and nudity as well as privacy-related topics like online interactions and data collection. And since we validate this information for curated apps but can't make any guarantees about non-curated apps, we also more clearly inform ahead of time when an app is not curated with an additional badge. This new section works like a content and privacy "report card" you can use to learn more about apps and make informed choices while also reducing the road blocks to installing the apps you want. We also now show apps from the same developer at the bottom of app info pages regardless of packaging technology used, meaning it works equally well for first-party, curated, and non-curated apps.

<aside markdown="1">
>This new section works like a content and privacy “report card”
</aside>

Several more improvements permeate throughout AppCenter: fallback colors for apps that don't provide their own brand colors—including non-curated apps—now get a pleasant and more subtle look based on your selected system-wide accent color including better support for the dark style. As we continue to work on AppCenter for Everyone, we've reworked the Install button to ease into the future flow that will use a Flatpak authenticator to handle purchases; rather than having a dropdown arrow with a popover to change the price, we're now more clear about how "Pay What You Can" works and include changing the amount to pay in the payment dialog itself—and validated entries now show a green check and invalid ones show a red error so it's much clearer when card info has been entered incorrectly. And since we use this same widget on the home page, on app info pages, and in lists of apps, it's consistent everywhere.

<figure markdown="1">
![AppCenter payment dialog](/images/{{ page.slug }}/stripe-dialog.png){: width="568" height="379"}
<figcaption>Redesigned payment dialog</figcaption>
</figure>

We've also worked with downstreams like Fedora and Pop!_OS to test these updates using the same build flags they use, including adding automated testing to ensure things continue to build using the non-default options when we change the code for elementary OS. And since the redesigned home page relies on local data rather than a remote API, we no longer disable it on builds targeting Fedora or other non-elementary platforms; as a result, AppCenter is much more engaging and useful for any downstream.

Developers of third-party apps have also continued releasing their apps on [AppCenter for elementary OS 6](https://appcenter.elementary.io), with 68 curated apps now available on OS 6—and several more are in the queue being reviewed. We're also happy to report that many developers have been pushing out rapid and frequent updates to existing apps with new features and bug fixes, as they're in control of their own update schedule. Third-party apps on elementary OS continue to get better with time—and as a reminder, these apps will now carry forward to future versions of elementary OS and be made available on any modern Linux-based OS thanks to our continued AppCenter for Everyone work.

## Online Accounts

Our improvements to Online Accounts and related apps continued this month. In System Settings, we make sure you can always navigate next when adding an account by pressing <kbd>Enter</kbd> and that you can close dialogs as expected with <kbd>Esc</kbd>. We also ensure the refresh interval for an IMAP account is set (which will let apps like Mail change this in the future), we fixed adding, editing, and removing lists in CalDAV apps like Tasks, and we use a more complete list of authentication methods for IMAP to improve compatibility with online accounts providers.

### Mail

Now that we have a fresh new codebase with Mail on OS 6, improvements are starting to flood in. The big one this month is notifications: Mail will once again automatically notify when new messages arrive, even when the window is closed. We've also improved the list of messages with a new inline toolbar with a "refresh" button to manually fetch new messages and togglable filters for unread or starred conversations. And when you delete a message, the next one in the list will now be selected automatically.

Mail also now provides the email portal for apps that support it (replacing the previous Contractor contract on elementary OS), making it easier for sandboxed apps to prompt you to start composing a message. We've also shipped a few performance improvements and fixes: you'll notice much better search performance, we fixed an issue with double drafts for Outlook.com accounts, and we fixed a potential crash when changing folders.

### Tasks

We shipped a number of improvements to Tasks: to prevent accidental task deletion, we've replaced the Delete shortcut key with <kbd>Ctrl</kbd><kbd>Backspace</kbd> and added a confirmation dialog when deleting a task list; we've improved performance in lists with lots of completed tasks; we prevent account name headers from being displayed multiple times in the sidebar; we now truncate long descriptions at the end instead of the beginning; we ensure tasks are saved when the description is removed; and finally, we improved cursor placement in descriptions when editing.

As a note, if you were having issues adding, editing, or removing lists, try removing and re-adding your CalDAV account in _System Settings_ → _Online Accounts_ to take advantage of the improvements made there.

### Calendar

We've also shipped a number of fixes for Calendar: we now ensure correct notification icons in Notification Center, we better ensure Calendar is opened when selecting a notification, and we fixed an issue where event timezones could be overwritten.

## Files

We've released a handful of fixes to Files this month. You can now open bookmarks in a new tab with <kbd>Ctrl</kbd> Click, we fixed dropping paths onto storage devices and network locations in the sidebar, we fixed restoring tabs after a system restart, we ensure Files doesn't deselect a file or folder when secondary clicking the blank space around it, an we now show the folder context menu when secondary clicking outside of a selection.

## Code

We released a small update to Code this month with an improvement for those who tile windows, especially on smaller displays: we now hide the project chooser button when hiding the sidebar, allowing a smaller minimum window width. We also better ensure files created from the sidebar are automatically opened, and fixed a potential crash when creating new window by dragging and dropping a tab.

## Other Fixes & Updates

We've released many smaller fixes and improvements throughout elementary OS 6 and its apps. In no particular order:

ARM builds have been enabled for Flatpak. This means we can start building first-party and AppCenter apps for 64-bit ARM platforms like Pinebook Pro and Raspberry Pi 4 again. Stay tuned for more info on this as we continue the work.

<aside markdown="1">
>We can start building apps for platforms like Pinebook Pro and Raspberry Pi 4
</aside>

In the login/lockscreen greeter, we now hide the clock during Initial Setup since it often was covered. We also use the user's selected accent color for the logged-in checkmark for an additional splash of accent color. You can now stash the picture-in-picture window by pushing it off screen—and we fixed a potential crash while changing wallpapers. Notification Center will now use an app's name when a notification title isn't provided, bringing it in line with notification bubbles. We fixed "rubberband" selection styling and titles when previewing images in Photos. And we fixed a blurry Sideload icon in the Multitasking View.

There was a decent amount of work in System Settings as well: we added a new toggle for “Double-tap and move to drag” in the Mouse & Touchpad settings; we fixed a crash in the Network settings for some hardware; we fixed an issue in Applications settings with setting the incorrect app for certain files types, and don't overwrite custom permissions overrides when unnecessary; and for those of you using advanced keyboard input methods, we now ensure IBus automatically starts on login.

Finally, we added support for launching apps on dedicated graphics on hybrid graphics systems (e.g. NVIDIA Optimus) from the Applications Menu. And as always, there are translation updates, code cleanups, and other under-the-hood improvements included with these updates across the OS and apps.

<aside markdown="1">
>We prioritize our work based directly off of the feedback we receive
</aside>

If you're experiencing an issue that wasn't fixed in this month's updates—or if you have an idea for a new feature—we'd love to hear from you. You can send your feedback on elementary OS 6 by searching for "Feedback" in the Applications Menu or by navigating to _System Settings_ → _System_ and selecting "Send Feedback". We prioritize our work based directly off of the feedback we receive. Also be sure to check out our [improved issue reporting guide](https://docs.elementary.io/contributor-guide/feedback/reporting-issues) for tips and more info.

If you'd like to follow along with development and see what we're working on and prioritizing for the next monthly updates, check out the [OS 6.1 project board on GitHub](https://github.com/orgs/elementary/projects/90).

## Get These Updates

As always, if you're running elementary OS 6 you can get all of these updates directly from AppCenter by opening up the "Installed" tab and selecting "Update All", and previous OS 6 purchase links from email receipts will be upgraded to the newest version.

If you're not yet running OS 6, we'll be publishing a new 6.0.2 download for a pay-what-you-can price that includes all of these updates [on our homepage](https://elementary.io) soon.

## Special Thanks

We'd like to give a special thanks yet again this month to Marco for his work on apps using Online Accounts like Mail and Calendar. Check out his [dedicated blog post about his work](https://www.marco.betschart.name/blog/2021-09-28-elementary-os-office-productivity-improvements), and be sure to hit up his [GitHub Sponsors page](https://github.com/sponsors/marbetschar) to help him expand his open source software work.
