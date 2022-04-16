---
title: "We’re back from the Snappy Sprint!"
author: DanielFore
date: 2016-11-16T19:25:59.309Z
image: /assets/images/were-back-from-the-snappy-sprint/1a0NUDI4L4DQGbuRoSHBkqg.png
tags:
  - "linux"
  - "elementary-os"
  - "open-source"
  - "snappy"
  - "ubuntu"
---

Shoutouts to Canonical for sponsoring us to attend the Snappy Sprint in Heidelberg, Germany. We spent the week there learning about Snap packaging and participating in intense discussions to shape its future development. We’re very excited to have learned more about Snap packages, their security model, and the features that they could bring to elementary OS users.

In short form, Cody, Corentin, and I (Daniel) were all able to attend the sprint with a brief appearance by Fabian. We spent a week in sessions with folks from Canonical, Fedora, Arch, Debian, Ubuntu Mate, OpenSuse, supporting projects like AppStream and more. The diversity of experience and ideas present was incredible. We spent time learning about the snap format itself, how to snap apps, how snaps may interact with AppCenter, and discussed how a world with snaps could look.

### What are Snaps and what do they mean to us?

Snap is a new software package format developed by Canonical and designed to solve some of the major issues that distributors encounter with app security and updates. The major feature is confinement: the concept that an app is not installed to the system in the traditional sense but is instead [sandboxed](http://t.umblr.com/redirect?z=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSandbox_%28computer_security%29&t=MmM1YzQ3OWZhMjNhYmQ4NGI1Mzk2N2U3YzFlYTc5NWU4MDE3ZmM0YixwRFNTQ3N2dQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0) and given limited access to the base system. This means that we could stop apps on a technical level from doing a lot of potentially harmful things without the user’s permission. It doesn’t make the world perfectly safe or stable, but it does provide a foundation for more securely distributing apps and preventing a host of issues that elementary OS users currently encounter. A byproduct of app confinement is that app updates from different sources and authors become much less likely to break each other. No more adding multiple PPAs that result in an unusable system.

We mentioned in our [Loki Beta announcement](http://blog.elementary.io/post/145881464631/loki-beta) that elementary’s stance going forward is that software should come from either secure sources or in sandboxed packages. Snaps are one of two major sandboxed package formats that make that stance possible and we’re excited that they already run on Loki.

### What’s the plan?

At this time, elementary hasn’t made a formal decision about changing the package format that we distribute our software with, but it’s generally understood that sandboxing is a good thing and we need to make sure that our apps work in a world where sandboxing exists. Both of the available major sandboxed formats (Snap and FlatPak) are just getting started and there are some unanswered questions and work to do before they’re ready for primetime. At the sprint, we discussed the gaps and how to fill them and we’re confident that these concerns will be addressed in the near future.

Michael Hall from Canonical has spent some time working on a snap for Mail and this brought to light a number of things in our codebase that could be done better. The process of making sure our apps work in confinement should lead to a more stable and robust elementary OS, no matter which way we go with packaging. For now, we’ll remain agnostic of package formats and focus on getting our apps and our platform prepared for the world of confinement.

### Anything else?

We could write a novel just about snaps and the sprint and everything that happened there. If you want to read more about the format of the sprint itself, [Martin Wimpress has a great write up here](https://plus.google.com/+MartinWimpress/posts/HKkAETn3Rkh) and the Snapcraft page on Google+ has been sharing [blog posts from various participants here](https://plus.google.com/+SnapcraftIo/posts). There are a lot of different perspectives and experiences and we highly recommend reading through a few. If you want to see a more expanded version of our thoughts with some more technical details, be sure to check out [this google doc](https://docs.google.com/document/d/18jeanyNyQI6jYJarGIFfU-8JpWln0SaD-QRDfEsDiEo) that we put together while at the sprint.

Again, we want to extend our thanks to Canonical for inviting us to participate and covering our travel expenses. They made us feel like first-class citizens of the snappy world, took our thoughts into careful consideration, and provided us with help and information as we explored the format. We’re really interested to see Snap evolve and grow and participate more in its development and design.