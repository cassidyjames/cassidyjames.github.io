---
title: "Let’s talk about elementary OS 5 Juno"
description: ""
date: '2018-02-12T17:01:02.129Z'
author: cassidyjames
image: https://cdn-images-1.medium.com/max/1200/1*6Fjtm3yS70hXx7cWa_0lAg.png
tags:
  - juno
---

![](https://cdn-images-1.medium.com/max/1200/1*6Fjtm3yS70hXx7cWa_0lAg.png)

We’ve avoided talking too much about Juno until recently because frankly, we’d been focused on pushing constant updates out to Loki. We’ve pushed out the [substantial 0.4.1 release](https://medium.com/elementaryos/new-release-elementary-os-loki-0-4-1-2a756549ee76) as well as a steady stream of feature, bugfix, security, and quality of life [updates that we’ve detailed monthly](/tags/#updates). Further, we released the [major update to AppCenter](/tags/#appcenter) that brings quality pay-what-you-want apps built for elementary OS right to your desktop, and we’ve been enjoying the [incredible apps](/tags/#appcenter-spotlight) that are being released.

But we’re finally ready to start (cautiously!) talking about Juno, the next major release of elementary OS.

First, a disclaimer: **we generally avoid publicly committing to release dates and exact feature sets**. This is in part due to past disappointments when we didn’t quite deliver something when we initially thought we could, but also to afford us — a completely open source organization — a bit of surprise and showmanship. It also allows us to focus on shipping the best product versus constantly chasing down lofty goals and tight deadlines at the expense of all else. That said, I think it’s time to start a conversation around elementary OS Juno.

### When will it be released?

This is the number one question people ask, and the hardest to answer this early. Of course, “When it’s ready” is our go-to (and often self-parodying) line. But realistically, I can say, “Not before April, 2018.” elementary OS is built with an Ubuntu LTS core, the next release of which is scheduled for April. We’ve never released before the respective LTS, and we’ve also historically released several months after it. With a significant rebase of GTK+ and other core parts of the underlying stack, it could take some time. When it’s ready, we’ll release. When it’s _almost_ ready, we’ll announce a beta release and more information.

### A Bit of Version History

We’ve released four versions of elementary OS so far: Jupiter, Luna, Freya, and Loki. We gave Jupiter a 0.1 version number to represent how we felt about it at the time: it was a complete product, but an incomplete _vision_.

#### elementary OS Jupiter (0.1)

![](https://cdn-images-1.medium.com/max/800/1*twqqqQGCzuiBIxjA9woOog.jpeg)

elementary OS Jupiter’s user interface was built with GTK2 and GNOME 2 components, customized and rearranged to fit our vision of the desktop. The dock was the popular Docky, written in Mono. We shipped our stylesheet, icons, and first apps (written in Python), but also shipped a large amount of upstream software that didn’t quite fit the elementary vision. Notably, we shipped the Ubuntu Software Center full of repository apps that were not made for or curated by elementary OS.

#### elementary OS Luna (0.2)

![](https://cdn-images-1.medium.com/max/800/1*uchAuKu9YQDii34IhAzUeQ.png)

We made significant progress with elementary OS 0.2 Luna; of note, our apps were updated to use the newly-released GTK3, and we were one of the first OSes to jump onto the toolkit feet-first. We shipped the first version of our GTK3-based Pantheon desktop environment, including WingPanel, Plank, Switchboard, and Gala. We still shipped parts of Ubuntu like the Software Center, but overall it was a step in the direction of our vision.

#### elementary OS Freya (0.3)

![](https://cdn-images-1.medium.com/max/800/1*nSNzA6mZbVIsITw7oImIQA.jpeg)

With elementary OS 0.3 Freya, we focused on adopting a lot of the new features of GTK3 like headerbars, improved CSS support, and animations. We also refined our visual style, revamping our stylesheet and icons to drop a lot of the extra gloss while retaining a sense of depth with light and shadow. We significantly improved our application launcher, debuted several new settings panes, added a bunch of features to our apps, and introduced our notifications with Do Not Disturb. Overall, Freya was a refinement and polish release.

#### elementary OS Loki (0.4)

![](https://cdn-images-1.medium.com/max/800/1*gBHrZtd_uIshaztegrv2pQ.png)

When we released elementary OS 0.4 Loki, it was a huge step forward for elementary OS not just as an operating system, but as a _platform_. We debuted our all-new indicators, the notification center, a huge number of new settings panes, significant improvements to all of our apps, new stylesheet APIs for third-party app developers, and of course the brand new AppCenter. The application launcher picked up notification badges (like in the dock) and support for launching application _actions_ in addition to apps themselves. And with the 0.4.1 release, we debuted the massive update to AppCenter, opening up an official channel for third party app developers for the first time.

### Next Up: 5

![](https://cdn-images-1.medium.com/max/800/1*6Fjtm3yS70hXx7cWa_0lAg.png)

elementary OS Juno will be our fifth major release. We’ve realized that just version bumping to 0.5 is not indicative of the platform itself at this point; elementary OS is now a stable, used-in-production operating system with its own developer ecosystem. But rather than bump to 1.0, we decided it would make sense that the fifth release would, in fact, be version 5.

What does this mean for end users? Not much of anything, really, aside from hopefully less confusion in the long run. It also aligns us more closely to [semver](http://semver.org/), where major releases (with API breaks) carry a new top-level version number.

#### What’s the Roadmap?

We don’t yet have a locked-in, guaranteed public roadmap for Juno (recall the disclaimer from earlier!). We are, however, tracking the _juno-beta1_ milestone in [our GitHub repos](https://github.com/elementary/). It’s important to remember that just because something is currently targeting Juno Beta 1 doesn’t guarantee it will be part of that release: it might come earlier or be retargeted down the road.

There are also a number of things we always have to do for a new release: migrate to (and test with) the latest versions of GTK+, Mutter, and other components of the stack. And of course a new release will contain a newer version of the Linux kernel and hardware stack along with new and improved hardware support.

With the new version of GTK+ we’ll be able to start both exploring using new widgets where appropriate and taking advantage of new features in Gtk.CSS. We’re also aiming to continue to improve the HiDPI experience in Juno since several underlying components have received HiDPI fixes. We’ve also started to explore new capabilities in the settings daemon like Night Light, and plan to make some changes around [AppCenter payments](/about-appcenter-payments). We’ll share more when we have more to share!

### What About Loki?

We’ve continued to push out updates to elementary OS Loki while we’ve prepared for Juno, and app developers are continuing to publish new apps and updates to existing apps on AppCenter to all of our Loki users. However, as we mentioned in our [2017 Year in Review](https://medium.com/elementaryos/our-2017-in-review-866e0a9d0114), Loki will be going into maintenance mode. New major features will be built for Juno, while Loki will mostly only receive stability and security updates going forward.

Once we release a Juno beta, app developers will be able to begin testing their apps on the new release and preparing for the new stack and features. We’ll have more information to share closer to the beta!
