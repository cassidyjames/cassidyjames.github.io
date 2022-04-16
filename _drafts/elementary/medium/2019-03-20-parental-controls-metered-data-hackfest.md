---
title: "Parental Controls & Metered Data Hackfest"
description: "Working with GNOME on shared features"
author: cassidyjames
date: 2019-03-20T14:22:47.410Z
image: /assets/images/parental-controls-metered-data-hackfest/11RRs1e_qsZVBgvddOEUElw.jpeg
tags:
  - "elementary-os"
  - "gnome"
  - "parental-control"
  - "digital-wellbeing"
  - "open-source"
---

This week I’ve been in London, UK to attend the [Parental Controls & Metered Data hackfest](https://wiki.gnome.org/Hackfests/ParentalAndMetered2019) and work alongside folks from GNOME, Endless, Red Hat, Canonical, and more on designing and implementing Parental Controls in GNOME and related parts of the stack.

<figure markdown="1">
![River Thames, Southwark Bridge, and the Blackfriars One building visible from London Bridge](/assets/images/parental-controls-metered-data-hackfest/11RRs1e_qsZVBgvddOEUElw.jpeg)
<figcaption markdown="1">
River Thames, Southwark Bridge, and the Blackfriars One building visible from London Bridge
</figcaption>
</figure>

elementary OS has shipped Parental Controls for several years; we believe sharing our design thinking, experiences, and code with the GNOME project can lead to a better implementation in the lower-level parts of our shared technologies while ensuring we can continue to support and innovate in this area in elementary OS. [Adam Bieńkowski (donadigo)](https://medium.com/@donadigo), the primary developer behind elementary Parental Controls, also joined us via video chat to help share further details and insight.

We’re also interested in how better integrating with Metered Data networks—like those from mobile devices as well as some people’s home Internet in certain areas of the world—could be done in elementary OS.

We’ve been hard at work alongside several talented designers and developers, iterating on how these features could be brought to or improved in GNOME, Endless OS, and elementary OS.

## Parental Controls + Digital Wellbeing

The hackfest focused on Parental Controls for the first two days. We started by looking at the [Endless OS implementation](https://cloud.gnome.org/s/EAHzDL7Gc24abTk) and the elementary OS implementation, and then dove into discussing the elementary plans for some sort of “digital wellbeing” concept which overlaps with parental controls.

This duality led the discussion for much of these two days where we talked about the design and implementation from both perspectives: first, a parent, teacher, guardian, or other supervisor setting restrictions for a child, student, or other supervised person; and second, any user setting limits for themselves to help them focus, feel happier, or be more productive.

<figure markdown="1">
![Some of my super early sketches of digital wellbeing features](/assets/images/parental-controls-metered-data-hackfest/1h_XUEFC-Ctrz381r-hxH3g.jpeg)
<figcaption markdown="1">
Some of my super early sketches of digital wellbeing features
</figcaption>
</figure>

After working through a lot of the scope and problems we were trying to solve on the first day, [Allan Day](https://medium.com/@allanday) presented some initial mockups of how he would envision the feature(s) being presented in GNOME. We talked through the designs and found any potential implementation issues, and started to form a good idea of how it could be done. At the same time, I worked on some initial design updates and prototypes for our parental controls in elementary OS that could support more of the digital wellbeing perspective — I’m not quite ready to share these in detail as we’re still working out some issues, but stay tuned!

We also spent a *lot *of time going back and forth on the user-facing terminology for digital wellbeing features. Google calls the overarching concept as well as the features themselves “Digital Wellbeing,” while Apple calls the concept “Digital Wellness” but calls the feature “Screen Time.” A few common terms that came up in conversation I liked were “mindfulness” and “health.” At one point something like “wellness & productivity” was raised. On Twitter, we heard feedback about “balance” and “equilibrium” which are interesting. I think we’re still up in the air—both in GNOME and elementary—about the terminology.

<figure markdown="1">
![](/assets/images/parental-controls-metered-data-hackfest/1gbYF4-4mNVRVzMTmwSZF9Q.jpeg)
</figure>

<figure markdown="1">
![**Left:** Richard Hughes and Philip Withnall working through app restrictions and a list of technical features. **Right:** Florian Müllner and Georges Stavracas discussing how and where to track app usage to enable time-based Parental Controls and digital wellbeing features.](/assets/images/parental-controls-metered-data-hackfest/15tbfmMC7CKqBjkk_J8OQ3Q.jpeg)
<figcaption markdown="1">
**Left:** Richard Hughes and Philip Withnall working through app restrictions and a list of technical features. **Right:** Florian Müllner and Georges Stavracas discussing how and where to track app usage to enable time-based Parental Controls and digital wellbeing features.
</figcaption>
</figure>

The second day was largely technical, deciding how to enforce app usage restrictions at a sufficiently low enough level, how to tackle website allow/deny lists, etc. We got into the weeds a bit, but it sounds like we’ve come out the other side with a relatively clear path forward with work being proposed for logind, libaccountservice, and other low-level components. If you’re interested in slightly more detail, [Iain Lane](https://medium.com/@iain.lane) has a great [blog post](https://blogs.gnome.org/laney/2019/03/19/parental-controls-metered-data-hackfest-days-1-2/) about these first two days, and Philip Withnall has a slightly more brief [blog post](https://tecnocode.co.uk/2019/03/20/parental-controls-hackfest/) as well for another perspective.

We’ll have more to talk about in this space for elementary OS soon, so stay tuned.

## Metered Data

The last two days of the hackfest were dedicated to metered data, i.e. being smarter about when data connections are not unlimited—especially around the idea of automatic updates and background downloads. There was not a *ton *of work to do here; mostly seeing what Endless had so far, discussing prior art, and laying out a way forward.

<figure markdown="1">
![Iain Lane, Florian Müllner, Rob McQueen, and Philip Withnall](/assets/images/parental-controls-metered-data-hackfest/1YMG_ZnTQQmgZ3b7ly4sNeg.jpeg)
<figcaption markdown="1">
Iain Lane, Florian Müllner, Rob McQueen, and Philip Withnall
</figcaption>
</figure>

We spent a lot of time diving into the different types of metered data and limits around the world such as hard data caps, per-data billing, time-of-day limits, time-per-day limits, data-per-day, etc. There are a lot of combinations here, making designing a general purpose data restriction feature difficult if it’s more than on/off. Philip Withnall’s [blog post](https://tecnocode.co.uk/2019/03/21/metered-data-hackfest/) goes into some detail here, and he’s put together [a survey](https://www.surveymonkey.co.uk/r/D7BDYBH) to try and get some more real-world data to help inform our designs. Please fill it out!

Since the underlying Network Manager does already have a concept of a metered network (including auto-detecting Android Wi-Fi hotspots!), there are already several things we could do better around metered connections. We plan to do so in elementary OS, and we’re tracking Metered Data related issues on the organization-wide [Metered Data project](https://github.com/orgs/elementary/projects/48) over on GitHub.

There is the larger ongoing discussion still happening around visualization, more robust system controls, background download scheduling—i.e. using [Mogwai](https://gitlab.freedesktop.org/pwithnall/mogwai)—and app-specific limits for metered data in GNOME. These are really interesting features and I look forward to seeing them progress in GNOME and become usable to us in elementary OS.

## More

Whenever you get folks from various projects across GNOME and open source into a room, other conversations and ideas inevitably spawn.

<figure markdown="1">
![*Georges Stavracas, Florian Müllner, Kalev Lember, and Richard Hughes*](/assets/images/parental-controls-metered-data-hackfest/1c3b6-ItcxCxlqM7a5l_gzQ.jpeg)
<figcaption markdown="1">
*Georges Stavracas, Florian Müllner, Kalev Lember, and Richard Hughes*
</figcaption>
</figure>

There was a lot of talk and work around more sane and strict defaults for libappstream-glib regarding developer AppData validation to help ensure apps look great in app stores by default. We talked about [flat-manager](https://blogs.gnome.org/alexl/2019/03/19/introducing-flat-manager/), a new backend service for managing Flatpak repositories. Some folks worked on how to better display multiple package sources in app stores like GNOME Software. We discussed [how to properly support](https://gitlab.freedesktop.org/accountsservice/accountsservice/issues/70) changing clock formats on login screen depending on user preferences. We discussed the differences between projects like Zeitgeist and Tracker. Georges worked on some really interesting Shell performance profiling. We also discussed OSTree and immutable systems, plus how Endless moved from a deb-based system to an OSTree based system — and how it positively disrupted their entire development and release process.

For all of our notes, reports, and other blog posts from the hackfest, see the [GNOME Wiki page](https://wiki.gnome.org/Hackfests/ParentalAndMetered2019#reports).

## Social

As per usual, this hackfest was peppered with great food and socializing in between all of the design, discussion, and development.

<figure markdown="1">
![Trying to fit the whole (cramped) Wahaca dinner table into one photo. **Clockwise from left:** Philip Withnall, Florian Müllner, Kalev Lember, Allan Day, Cassidy Blaede, Iain Lane, Nathan Willis, Georges Stavracas, Nick Richards.](/assets/images/parental-controls-metered-data-hackfest/1ngAiu3zkrphoQMklmzfUBQ.jpeg)
<figcaption markdown="1">
Trying to fit the whole (cramped) Wahaca dinner table into one photo. **Clockwise from left:** Philip Withnall, Florian Müllner, Kalev Lember, Allan Day, Cassidy Blaede, Iain Lane, Nathan Willis, Georges Stavracas, Nick Richards.
</figcaption>
</figure>

We walked several miles around central London, the River Thames, London Bridge, Borough Market, and more. We enjoyed Mexican-inspired food at Wahaca, Indian food at Anokha, and modern European food at The Folly. Several of us had traditional British pies and enjoyed a few beers at pubs. We had a great time bonding and chatting about everything from history to parenting.

## Thanks!

<figure markdown="1">
![The Red Hat room we used for the majority of the hackfest](/assets/images/parental-controls-metered-data-hackfest/1FEGJtggT-EhA9Tbc3Wx07Q.jpeg)
<figcaption markdown="1">
The Red Hat room we used for the majority of the hackfest
</figcaption>
</figure>

Thanks to GNOME for hosting the GNOME Beers meetup at The Ship and Anokha, and Endless for sponsoring the hackfest dinner at The Folly. Thanks to all of the contributors for the great conversations and collaboration, Philip Withnall and Rob McQueen for organizing the hackfest, Allan Day for being a great UX mentor, and Redhat for hosting at their London offices. I had a great time, made great connections, and was happy to work alongside other GNOME folks to make the open desktop better.

I’d also like to thank everyone who’s [supported GNOME](https://www.gnome.org/support-gnome/), those who have bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). You all make organizing and attending these sorts of hackfests possible!

*All photos in this post were taken by me (Cassidy James Blaede). To the extent possible under law, I have waived all copyright and related or neighboring rights to these photos — i.e. they’re released to the public domain.*