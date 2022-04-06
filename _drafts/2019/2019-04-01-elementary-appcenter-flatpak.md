---
title: elementary AppCenter + Flatpak
description: Preparing for the future
date: '2019-04-01T18:44:05.974Z'
author: cassidyjames
image: /images/elementary-appcenter-flatpak/flatpak.png
tags:
  - appcenter
  - flatpak
---

<figure markdown="1">
![Flatpak](/images/elementary-appcenter-flatpak/flatpak.png){: width="1080" height="720"}
<figcaption markdown="1">
Image from [Flatpak.org](https://flatpak.org)
</figcaption>
</figure>

After [several](http://blog.elementary.io/post/122973077471/gnome-west-coast-summit) [years](http://blog.elementary.io/post/148100271141/were-back-from-the-snappy-sprint)(!) of observing, exploring, and engaging with various newer packaging formats, we’re excited to announce that elementary will be joining the larger independent open source movement and adopting Flatpak for AppCenter and our third-party developer ecosystem.

> elementary will be adopting Flatpak for AppCenter

We actually first started engaging with Flatpak when it was called “XDG-App” back in June of 2015; [we attended the GNOME West Coast Summit](http://blog.elementary.io/post/122973077471/gnome-west-coast-summit) and learned about OSTree, XDG-App, SDKs, etc. while simultaneously working on our launch of AppCenter Dashboard and the third-party, pay-what-you-want app experience. We’ve also met back up regularly at events like [GUADEC](https://medium.com/elementaryos/things-we-learned-at-guadec-2018-bb7924b8bfe3), the [Libre Application Summit](https://medium.com/elementaryos/were-back-from-libre-application-summit-2018-2242308c4570), and the [Parental Controls and Metered Data hackfest](https://medium.com/elementaryos/parental-controls-metered-data-hackfest-774f557c6825) where we would check in, learn more, try things out, and further engage with the developers and community.

Flatpak has certainly grown and matured a lot since mid-2015, and we’re excited to be working together with the community behind it even more.

## Flatpak, _not_ Flathub

Before we get too far into it, we want to make sure there’s a clear distinction that we’ll be moving towards Flatpak (the packaging format) and _not_ Flathub (a single Flatpak-powered app repository). While Flathub is a great place to get popular cross-platform apps, we still want AppCenter to be the best place to get apps that are specially developed for elementary OS.

Moving to Flatpak doesn’t mean moving away from our focus on native apps, from enabling developers to get paid with pay-what-you-want downloads, or from the online AppCenter Dashboard where each app is carefully tested, reviewed, and curated before being published to users in AppCenter. We’ll be providing our own hosted and curated Flatpak repo for AppCenter, much like we provide our own hosted and curated Debian repo today.

## The Rub with Debs

Classic Debian packaging has served us pretty well for quite some time, but it comes with some security concerns and modern packaging formats have features that we want like parallel downloads and delta updates which make installing and updating apps faster and more reliable.

The headlining feature that these modern formats offer is sandboxing: the idea of limiting an app’s access to your operating system. Sandboxing apps is essential for improving security and privacy in elementary OS and it’s much less straightforward to do with Debian packaging. On the other hand, modern packaging formats are built with sandboxing in mind from the start, and enforcing a sandbox on these apps is something we can more easily do at a platform level. As we mentioned [in a previous blog post](https://medium.com/elementaryos/a-new-native-file-chooser-196acf9b06f0), we’re already making steps to prepare for a sandboxed app future.

## Why Not… (insert format here)?

Ah the age-old technology debate—especially on display in open source communities like ours: “Why use X, and not Y? Y has serious advantages, including but not limited to…” In our case, the most common question will probably be, “But why not Snaps?”

If you’re not aware, Snap is a newer packaging format and centralized app repository from Canonical, the company behind Ubuntu. They made quite a bit of noise with [an announcement](https://blog.ubuntu.com/2016/06/14/universal-snap-packages-launch-on-multiple-linux-distros) in June, 2016. We’ve actually been working with folks from Canonical since around then to investigate and better understand Snaps, and even [joined the Snap Technical Oversight Board](http://blog.elementary.io/post/151395260651/weve-joined-the-snap-format-tob?is_related_post=1). While we have great respect for Canonical and their work on Snap, we’ve decided as both a community and organization that Flatpak better aligns with our goals in a few ways:

1.  **Decentralized by design.** This is critically important to us. The entire design of Flatpak enables an organization like elementary to host, curate, and maintain our own repository. We decide exactly what gets in to _our_ Flatpak repository; similar to our Debian repository today, but with all of the modern packaging advantages. We’re not sending user data—even just a simple user counter ping or IP address—off to a third party, and we can ensure the entire infrastructure is built and maintained with user privacy at the forefront. At the same time, if users, OEMs, or organizations so choose, they could add a separate Flatpak repository for their specific needs.

2.  **More closely aligned with our stack.** Underlying pieces of the elementary stack like GTK and AppStream are very in sync with Flatpak development. For example, modern GTK features are being built for a Flatpak future, and Flatpak is developed with GTK in mind from the start. We’re already very engaged with many of the same folks working on where the technologies overlap and interface with one another.

3.  **Consensus from indie app developers.** We always engage and work with our community of indie developers writing apps for AppCenter and elementary OS. While some have tried both Snap and Flatpak, the consensus is that Flatpak has been easier to work with, and is what they had more experience with.

Still other formats like AppImage don’t handle the sandboxing, repository, rollbacks, SDKs, and more that both Snap and Flatpak do, so they were never really a consideration for us to use by default for AppCenter and elementary OS.

All of these factors combined have made Flatpak the clear right choice for AppCenter and elementary OS. It’s important to remember, however, that this decision is about **the future of AppCenter and the out-of-the-box experience** of elementary OS. Users are _always_ free to use whatever formats they choose, though we’d always recommend they aim to learn and understand the risks of sideloading apps or using non-sandboxed formats.

## How Will This Affect Users?

Because we already have strict [publishing requirements](https://github.com/elementary/houston/wiki/Before-You-Publish) and thoroughly test, review, and curate app submissions to AppCenter, the transition to Flatpak will ideally be transparent to users. They will still see the quality apps made for elementary OS in AppCenter, they’ll be able to pay what they want for them, and they’ll download and install in an apparently similar way. There are some advantages we anticipate for users, though, like much faster downloads and updates (thanks to diff-based downloads).

App download and storage sizes should not be substantially different than today; we will provide a common SDK with libraries that are available to all apps out of the box, meaning apps don’t need to worry about bundling these themselves. Even when apps bundle some components, thanks to the diff-based nature of Flatpak these resources are shared on disk and do not duplicate storage space.

[AppCenter publishing requirements](https://github.com/elementary/houston/wiki/Before-You-Publish) and curation will be effectively the same as they are today: apps submitted to AppCenter will still be required to be native GTK apps that use and respect system-wide settings like the stylesheet, fonts, icons, display density, etc.

As previously mentioned, something new will be the use of sandboxing and Portals. While we’ll likely start with very loose or no sandboxing requirement, over time we’ll be tightening app permissions to resemble something more like the Android and iOS permission models where apps will be required to ask before accessing things like files, location, microphone & camera, and more. This means that over time apps will be required to better respect your privacy and your operating system will become more resistant to attack.

While GNOME Software now offers auto updates, this is not a feature of Flatpak itself and adopting Flatpak doesn’t imply implementing auto updates. That doesn’t mean that future versions of AppCenter couldn’t offer this feature, but it also doesn’t mean that you should expect to lose control of when you’d like to run updates as a result of this transition.

## How Will This Affect Developers?

First, we want to reiterate that there’s no change to the AppCenter submission process today; we’re still accepting and reviewing apps in the same way we’ve done since the beginning.

> There’s no change to the AppCenter submission process today

In the future, we’ll begin testing a Flatpak-based submission and distribution process with our third-party developer community. Stay tuned to this blog for more info when that happens. In the meantime, be sure your app is following best practices as published at [developer.elementary.io](https://developer.elementary.io/) and the [AppCenter Submission Requirements](https://github.com/elementary/houston/wiki/Before-You-Publish) for the most seamless transition. If you’re extra ambitious, you _can_ start looking into Flatpaking your app—however, know that we plan to ease and standardize this process for AppCenter as much as possible, much like we’ve simplified the process of building and packaging for AppCenter today.

Something else new and interesting to consider for the future is the use of “beta” or “edge” Flatpak update channels where we may be able to assist developers in shipping test versions of future updates. We’ve seen plenty of interesting work happening with regards to providing Flatpaks as part of the CI process as well. Overall, it would be safe to assume that our developer community will likely benefit from easier and safer ways to preview in-development software.

## Roadmap

For now, two basic things need to happen for elementary OS to support Flatpak:

1.  **AppCenter itself needs to support Flatpak** as a back end. This means a good deal of refactoring since the current back end (packagekit) doesn’t support using both Flatpak and Debian packages at the same time (for app and system updates respectively). We’re happy to say that David Hewitt has already [begun work here](https://github.com/elementary/appcenter/pull/971) and made a lot of progress! AppCenter should support Flatpak repositories relatively soon.

2.  **AppCenter Dashboard needs to be able to build Flatpak apps** and manage Flatpak repositories. Work on this hasn’t yet begun, but we expect tools like [Flat-manager](https://blogs.gnome.org/alexl/2019/03/19/introducing-flat-manager/) will do most of the heavy lifting here.

Once these two things are in place, we’ll be reaching out to members of our developer community to help us beta test and start fleshing out an AppCenter repository powered by Flatpak.

We are also discussing shipping a more up-to-date version of Flatpak than what the underlying Ubuntu repositories contain, as new features and CVE fixes will come through more quickly from upstream than from Ubuntu.

It’s unclear whether we expect to make Flatpak the default for AppCenter in future updates to Juno, but be sure to stay tuned to our blog here for further updates on our progress!

