---
title: Hera Updates for February, 2020
description: Improvements to AppCenter, Files, Code, and more
author: cassidyjames
image: /images/blog/elementary/hera-updates-for-february-2020/code@2x.png
legacy: elementary
canonical: https://blog.elementary.io/hera-updates-for-february-2020/
sitemap: false
updated: 2020-03-01
tags:
  - elementary

facebook: https://www.facebook.com/elementaryos/posts/3082039618494513
mastodon: https://mastodon.social/@elementary/103754936101433262
reddit: https://www.reddit.com/r/elementaryos/comments/fcfsvb/hera_updates_for_february_elementary_blog/

permalink: /blog/elementary/hera-updates-for-february-2020/
redirect_from:
  - /blog/hera-updates-for-february-2020/
---

This month we launched our [AppCenter for Everyone campaign](https://www.indiegogo.com/projects/appcenter-for-everyone), smashed through the goal in just a few days, and launched a [stretch goal for an additional sprint](https://www.indiegogo.com/projects/appcenter-for-everyone/updates/14). But we've also been hard at work releasing updates to elementary OS 5.1 Hera.

## AppCenter

We released AppCenter 3.2.2 with a ton of small but meaningful updates and fixes.

{% picture blog/elementary/hera-updates-for-february-2020/screenshot.png --alt AppCenter %}

The release includes more accurate download size estimates, faster loading for the Installed view, more consistent inclusion and sorting of apps in list views—especially for Flatpaks that weren't showing before, fixes for HTML entities (like `&amp;`) showing in app names, the ability to remove externally-installed Flatpaks from the Applications Menu, less bandwidth use (and faster loading) by downloading smaller screenshots when needed, a fixed "restart required" notification and infobar, and no more "Open" button on system components that aren't apps.

## Files

We also released Files 4.4 in February.

{% picture blog/elementary/hera-updates-for-february-2020/screenshot-grid.png --alt Files %}

This release includes keyboard shortcuts in context menus, fixes an issue with the breadcrumbs in the file chooser, shows a warning when ejecting an in-use drive, and new red destructive styling on some trash dialog buttons. It also includes some minor fixes for the cursor and folder-open icon in the column view.

## Code

We brought new features and minor updates to Code 3.3.

<figure class="card">
  {% picture blog/elementary/hera-updates-for-february-2020/code@2x.png dark: blog/elementary/hera-updates-for-february-2020/code-dark@2x.png --alt Code %}
</figure>

A new "Close Other Folders" menu item helps clean up the project sidebar, the cyclic search setting in find/replace is now remembered between sessions, we added keyboard shortcuts to menu items, top-level project folders are no longer selectable (since it didn't do anything), and new windows now open up centered on your display.

## …and more

We released a minor update to the login and lock screen Greeter that ensures manual login is available when users are hidden. Similar to AppCenter, we improved the performance and accuracy of the download size calculation for Sideload 1.0.1. A minor 5.4.2 update to the system stylesheet ensures text in dialog buttons remains vertically aligned.

## Get It

As always, you can get these updates on elementary OS 5.1 Hera alongside updated translations, bug fixes, and performance updates by popping open AppCenter and hitting **Update All**.
