---
title: "Loki Updates for September"
description: "Celebrating a year of elementary OS 0.4"
author: DanielFore
date: 2017-10-02T14:01:48.700Z
image: /assets/images/loki-updates-for-september/1_KCjbWrnSOukTtlogphzIQ.png
tags:
  - "elementary-os"
  - "updates"
  - "linux"
  - "open-source"
---

This month marks a full year of elementary OS 0.4 Loki. If you’d like a bit of a throwback, check out [our release blog post on Tumblr](http://blog.elementary.io/post/147637979911/loki-04-stable-release). Loki brought a brand new set of indicators in the panel (including the notifications indicator), many refreshed or redesigned settings panes, parental controls and DLNA sharing, and new features across all of our apps.

<figure markdown="1">
![Loki, day 1](/assets/images/loki-updates-for-september/1gBHrZtd_uIshaztegrv2pQ.png)
<figcaption markdown="1">
Loki, day 1
</figcaption>
</figure>

8 months later, in May, we released [a major update](https://medium.com/elementaryos/new-release-elementary-os-loki-0-4-1-2a756549ee76) that included new, curated apps powered by AppCenter Dashboard, a new hardware enablement stack, and plenty of other feature updates.

<figure markdown="1">
![AppCenter in the 0.4.1 update](/assets/images/loki-updates-for-september/1Z2Pv6bIY5-_wFhYLvNp1ug.png)
<figcaption markdown="1">
AppCenter in the 0.4.1 update
</figcaption>
</figure>

We’ve made it a point to regularly push updates to Loki and this month is no exception! Here is the Loki updates roundup for September:

## Networking

You may have noticed a rather big change to the way we display password protected and open networks in the menu. Following up on Cassidy’s “[Secure by Default](https://medium.com/elementaryos/secure-by-default-689abcac6c66)” post, we now show a slashed lock icon next to open access points instead of a lock icon next to password protected access points. You’ll also notice a new tooltip when hovering the name of an access point that will display more information about the security level of the access point.

<figure markdown="1">
![New network indicator with a secure-by-default UX](/assets/images/loki-updates-for-september/1_KCjbWrnSOukTtlogphzIQ.png)
<figcaption markdown="1">
New network indicator with a secure-by-default UX
</figcaption>
</figure>

The icon in the panel should now always prioritize active network connections. Configured VPNs will now show in the menu. An issue was resolved that caused duplicated menu separators at the greeter screen.

The network settings page gets a little smarter this month and now ignores network interfaces from virtual machines and containers like Docker. We also resolved an issue that prevented SOCKS proxies from working properly and added an explantion for the HotSpot feature.

## AppCenter

It wouldn’t be a Loki updates post without new features and fixes for AppCenter! This update brings the much requested feature to show release descriptions (i.e. changelogs) in both the updates view and the app info page. For the time being, release descriptions are optional for developers to provide but you may notice your favorite apps using them already.

<figure markdown="1">
![](/assets/images/loki-updates-for-september/1cmQGtURvk03aGFkkTT-lkA.png)
</figure>

<figure markdown="1">
![Example of release descriptions in AppCenter. They display at the bottom of an app’s info page and in the Updates view in an expander.](/assets/images/loki-updates-for-september/1gGsXsUB8xiLY51De6E--wA.png)
<figcaption markdown="1">
Example of release descriptions in AppCenter. They display at the bottom of an app’s info page and in the Updates view in an expander.
</figcaption>
</figure>

We also resolved an issue that caused the badge in the dock to get out of sync with the amount of available updates, made some memory usage optimizations in list views, and squashed a couple of other minor bugs.

## And More!

Badges in the applications menu are now drawn with a Gtk widget instead of directly with Cairo Code, fixing their appearance for HiDPI users. We fixed an issue for apps which refer to their icon using absolute path; they now appear correctly. You can now also switch between indicators in the panel using the keyboard shortcut `Ctrl + Tab`

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest. While you’re at it, be sure to check out some of the new apps that were published this month!

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*