---
title: "AppCenter & The Future of The Universe"
description: "How elementary OS can “cross the chasm”"
author: DanielFore
date: 2017-08-20T20:14:55.635Z
image: /assets/images/appcenter-the-future-of-the-universe/1yICO56gjmJFC-WDCALeGIw.png
tags:
  - "linux"
  - "elementary-os"
  - "appcenter"
  - "open-source"
  - "software-development"
---

<figure markdown="1">
![Photo by [Nathan Anderson](https://unsplash.com/photos/njDePTtXMyU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](/assets/images/appcenter-the-future-of-the-universe/15m10fYSknus5L0AAMgCDvg.jpeg)
<figcaption markdown="1">
Photo by [Nathan Anderson](https://unsplash.com/photos/njDePTtXMyU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
</figcaption>
</figure>

Nearly 7 years ago, [Matthew Paul Thomas](https://twitter.com/mpt) (MPT for short), a designer at Canonical, [gave a talk](https://www.youtube.com/watch?v=GT5fUcMUfYg) about developing the Ubuntu app ecosystem. In this talk, he explained that in order for an operating system to succeed with regular people it would need to be four things:

* Useful: an operating system needs to be able to do all of the things that people expect to be able to do with their computer.

* Desirable: an operating system needs to be able to do those things in such a way that it is preferable to do them there.

* Get-able: an operating system needs to be easy to get and install on your computer.

* Keep-able: an operating system needs to be able to be used on your computer for months or years without incident.

Just as in his talk, in this blog post I’d like to concentrate on the first point: usefulness. As MPT explains, the desktop environment provides a foundation for an operating system’s usefulness, but it is most useful when it fades into the background and people can hardly tell they’re using it. Pantheon (the code name for our desktop environment) makes elementary OS useful with features like an intelligently hiding dock that maximizes screen real estate, a fast search that enables you to perform actions and find apps quickly, and a set of full-featured system indicators that help you keep an eye on the state of your device. But chances are you have never heard of the name Pantheon, and when you turn on your computer you don’t set out to use it. What makes an operating system truly useful is apps.

### How are we doing on apps?

About 3 months ago, we launched a new version of elementary OS and a new service that we call AppCenter Dashboard. In that time, we’ve helped developers publish nearly 40 new apps.

<figure markdown="1">
![](/assets/images/appcenter-the-future-of-the-universe/1yICO56gjmJFC-WDCALeGIw.png)
</figure>

What’s special about these apps isn’t just that they are fast and native apps instead of glorified web apps, that they are all Open Source on GitHub, or that they are custom-tailored for elementary OS instead of being cross-platform ports. What’s really great about them is that there are several, high quality productivity apps for designers, developers, students, and more. The developers publishing their apps through AppCenter Dashboard continue to make elementary OS more useful to more people each day.

### But, how do we get from 40 to 100s of thousands of apps?

As Matthew explained in his talk, mainstream operating systems like Android, iOS, macOS, and Windows have not just a handful of useful apps, but 100’s of thousands. In order to build a platform that can grow to that scale, he presents 5 challenges:

**An initial user base to give developers their appreciation and money**. Since elementary [doesn’t collect data on our users](https://medium.com/elementaryos/you-are-not-the-product-1d28c485175f), it’s a bit of a challenge to convince developers that there is a significant audience available to support the development of their apps. Development is costly and developers need to be able to afford to make a living. We’re relying on our users to prove to the developers that have taken a chance so far that their trust will be rewarded and that those developers will be vocal about the support they’ve received.

**A Great developer platform**. Building a great developer platform starts with an [enticing website](https://developer.elementary.io/) and [thorough documentation](https://elementary.io/docs/code/getting-started#getting-started). elementary also provides [a comprehensive API reference](https://valadoc.org/) and [human interface guidelines](https://elementary.io/docs/human-interface-guidelines#human-interface-guidelines). We’ve always aimed to cut through the confusion of developing apps on Linux and instead we provide a “One True Development Path” with Gtk+3 and Vala. Features like Gtk.CSS make developing sexy apps easy and familiar, while platform libraries like [Granite](https://valadoc.org/granite/Granite.html) provide drop-in solutions for common design patterns and complex widgets.

**Scaling packaging**. In MPT’s talk, he explains that traditionally a Linux distribution has a community of 100’s of people packaging apps and asks how that could be scaled. But elementary OS isn’t a traditional Linux distribution. We’ve provided a simple [packaging template](https://github.com/elementary/debian-template) and [documentation](https://elementary.io/docs/code/getting-started#packaging) that has already made it standard for developers to package their own apps when publishing through AppCenter Dashboard.

**Publishing time**. Traditional Linux distributions tend to suffer from having either stale, outdated software or an unstable, rolling platform. elementary OS strikes a balance between the two with a stable platform and an [easy way for developers to publish their apps](https://developer.elementary.io/dashboard) in a timely manner. New apps and updates for existing ones are usually reviewed in just a few days instead of the months it may take to get your app into a traditional Linux distribution.

**Easy installation and payments**. We finally get to AppCenter itself, but I’ll add a third requirement here: discovery. AppCenter isn’t just a fast and easy way to get and pay for apps your already know about. It’s been designed from the beginning to help you discover new apps and connect with indie developers that you haven’t heard of before. We have a home page that regularly changes and always features the newest apps, plus features like link sharing to make it easy to tell your friends about your favorites. More discovery features are planned or in development like an easy way to find more apps built by a developer you like.

## So, is elementary OS useful?

Our developers and our users have a symbiotic relationship. Each relies on the other to grow elementary OS and make it more useful. In our first few months, we’ve published some really great apps to help people work and learn. We’re looking forward to the future where we’ll hopefully see developers build more of these kinds of apps, plus new ones to help us play and connect with each other. We’re incredibly grateful to the developers who’ve already decided to take a chance on a new platform and to our users who have compensated them for their hard work.

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS and AppCenter, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*