---
title: "Den Haag Sprint"
description: "Last month I (Cody Garver) had the pleasure of being sponsored by Canonical to attend the Ubuntu Snappy Sprint in Den Haag, Netherlands."
author: codygarver
date: 2016-11-17T19:21:52.513Z
image: /assets/images/last-month-i-cody-garver-had-the-pleasure-of-being-sponsored-by-canonical-to-attend-the-ubuntu/0DtwdMG9tAQ8XQFJt
tags:
  - "linux"
  - "iot"
  - "elementary-os"
  - "open-source"
  - "snappy"
---

<figure markdown="1">
![](/assets/images/last-month-i-cody-garver-had-the-pleasure-of-being-sponsored-by-canonical-to-attend-the-ubuntu/0DtwdMG9tAQ8XQFJt)
</figure>

## During the Sprint

As a member of the [Snappy Format Technical Board](https://medium.com/elementaryos/weve-joined-the-snap-format-tob-e1e46968faef), one of my objectives is to make sure Snaps fit well into as many environments as possible.

In Den Haag, the board sought the adoption of both Appstream as the primary metadata format for Snaps as well as support for Core Snaps built from non-Ubuntu based distributions. I am pleased to say that both proposals, after intense deliberation, were accepted by Ubuntu’s Snappy team.

## After the Sprint

Following the Snappy Sprint, I took the opportunity to meet up with one of elementary’s strongest European contributors, Corentin Noël, to hack on and explore various subjects.

Among the things we worked on were

* [Adding a CMake build system for our icons](https://github.com/elementary/icons/pull/144). In addition to other advantages, this gives us futureproof HiDPI scaling support and is a much requested feature from other distributions that want the icons readily available for themselves.

* [Pantheon Installer](https://github.com/elementary/pantheon-installer). Ubuntu’s ‘ubiquity’ has served us well for a long time but we’ve started to outgrow it. We have lots of ideas about how to create a great OS installation experience and we’ve taken some small steps towards creating a new installer.

* Launchpad-to-Github translations sync. In our ongoing experimentation with Github as a home for our code, we identified the localization process as a major blocker for the desktop apps. As a short term solution, we developed a daemon that automatically grabs translations submitted on Launchpad and pushes them to the respective Github project counterpart.

* Evolution Data Server. The backend service we already use in Maya also has email capabilities that are far more robust than the current implementation in Mail. However, at this time the email portion of the service (called Camel) is not accessible to our native programming language, Vala. Luckily, using a technique called GObject Introspection, we’ve been working to make Camel available to Vala programmers as well as programmers using other languages like Python and C++.

* A number of new stable releases for elementary OS Loki.

## Thanks

This post-sprint hackfest was partly made possible using leftover funds from the previous [European hackfest](https://igg.me/at/elementary-paris/x). Thank you, backers.

I’d also like to thank Ubuntu’s Mark Shuttleworth, Zygmunt Krynicki and Thomas Voss for challenging and mentoring myself and the other members of the board and just being cool dudes in general.

The fellow board members that attended were also very pleasant and offered much help and advice to elementary. Thanks Aleix Pol, Matthias Klummp and Neal Gompa.

And as always we’d like to take the time to thank our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary), [Patreon](https://www.patreon.com/elementary), PayPal, and everyone who’s purchased a copy of elementary OS or merch from [our store](https://elementary.io/store/)! Your contributions are what makes it possible for us to participate in events like these and to continue making elementary OS better. If you’ve ever thought about getting involved with elementary, definitely make sure to [check out this page](https://elementary.io/get-involved) on our website.