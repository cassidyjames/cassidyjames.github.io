---
title: "More Loki Updates"
description: "It’s time for another rundown of recent updates to Loki! We’re always working to address any issues reported to us and we’ve released several fixes over the month of November. So pop open AppCenter and click “Update All” to receive the following fixes and new features:"
author: DanielFore
date: 2016-12-09T18:26:54.172Z
image: /assets/images/more-loki-updates/0IhR6NIM3MLyZRnOC
tags:
  - "linux"
  - "elementary-os"
  - "open-source"
  - "updates"
---

Thanks to Corentin, you can now search System Settings for “Firewall”, “Locking”, or “Privacy” and be taken directly to the correct tab in Security & Privacy settings. He also submitted a fix to ensure that Proxy settings are properly stored and shown in Network settings.

<figure markdown="1">
![](/assets/images/more-loki-updates/0IhR6NIM3MLyZRnOC)
</figure>

If you’re using multiple keyboard layouts, you’ll notice that the keyboard settings menu item in the keyboard indicator now goes directly to the layout tab, thanks to [Matt Spaulding](https://launchpad.net/~madsa).

For those folks who have a lot of local users, I made a small fix so that the session menu will scroll when the list would otherwise be too long and possibly go off screen.

Felipe made sure that saving a screenshot won’t overwrite another screenshot with the same name and Artem added a handy “Copy to Clipboard” feature.

<figure markdown="1">
![](/assets/images/more-loki-updates/0uTqzpsXksejg0ZyK)
</figure>

Jeremy fixed a whole host of reported issues in Files like a crash when used in Hungarian, ensuring that keyboard shortcuts work with other layouts like Russian, writing files to FTP shares, showing the local server type like SMB or FTP, and a few other bite size issues.

We’ve also been doing a lot of code cleaning, making sure that everything compiles without warnings with the latest development version of Vala, improving stability and performance, and resolving issues related to Pantheon’s portability to other distros. In fact, we’ve heard several reports of successful Pantheon sessions running on Fedora 25, with [Fabio’s COPR](https://copr.fedorainfracloud.org/coprs/decathorpe/elementary-stable/).

As always, new releases come with translation updates for a more fully and accurately translated system. Thanks again to our translations teams for bringing elementary OS to more people around the world.

If you’re still running the unstable daily image, you may have noticed a new bluetooth settings pane is in the works! If you encounter any issues with this new pane, make sure to [report issues on Launchpad](https://bugs.launchpad.net/switchboard-plug-bluetooth/+filebug) so we can investigate and resolve them.

*We’d like to say thanks again to our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*