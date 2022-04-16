---
title: 'Loki Security Updates for January, 2018'
description: It’s dangerous to go alone! Take this.
date: '2018-02-01T07:23:58.703Z'
categories: []
keywords: []
slug: /@DanielFore/security-updates-for-january-f968e7539159
---

Although Loki is now officially in maintenance mode, we’re still pushing out security and stability updates to Loki users and tying up loose ends as we focus in on Juno development.

### AppCenter

This release fixes an issue that caused release descriptions to overlap buttons in the updates view in some cases. We’ve made the way card information is sent to be processed even more secure. It also adds support for back and forward navigation buttons on certain mice. AppCenter now remembers which apps you’ve purchased and won’t ask you to pay again if you uninstall an app and then later re-install it. This information is all saved locally and isn’t sent to any server at this time. Last but not least, thanks to [Jeremy Soller](https://github.com/jackpot51) at [System76](https://system76.com/), AppCenter now shows details about what packages make up the Operating System Updates item.

![](https://cdn-images-1.medium.com/max/1200/1*F4GQjclmNqpjwuQ_O0dA-w.png)

### Meltdown and Spectre Mitigations

![](https://cdn-images-1.medium.com/max/800/1*9GkNbOLGOQKKglNzmf3QVQ.jpeg)

By now you’ve probably heard about some major security issues that affect a wide range of processors. We’re happy to say that thanks to the hard work of the Ubuntu security team, Loki users have received the initial mitigations for these issues. For a complete timeline of the security notices associated with Meltdown and Spectre, see [this page](https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown#Timeline).

To make sure that the fewest number of users possible are exposed to these security issues, we’ve published a refreshed download [on our home page](https://elementary.io) that includes these mitigations plus all of the updates that we’ve released since Loki 0.4.1 was released [in May](https://medium.com/elementaryos/new-release-elementary-os-loki-0-4-1-2a756549ee76). This iso also contains the latest stable Ubuntu hardware enablement stack with Linux 4.13.

If you’re already running elementary OS Loki, make sure to pop open AppCenter and hit “Update All” to get these important security updates!

### Stats for Nerds

For the curious, here’s a few stats from the month of January:

*   elementary OS was downloaded over 76,000 times with about 79% of those downloads coming from closed platforms.
*   2.2% of downloaders purchased elementary OS with the most common payment being $1.
*   There was $197 paid out to 3rd party developers in AppCenter.

_We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you. If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_