---
title: "Let’s Talk elementary OS 6"
description: "Updates for July, plus early access to the next major version"
author: cassidyjames
image: /images/updates-for-july-2020/card.png
tags:
  - early-access
  - hera
  - odin
  - updates

mastodon: https://mastodon.social/@elementary/104650184883180100
reddit: https://www.reddit.com/r/elementaryos/comments/i5mk54/lets_talk_elementary_os_6_elementary_blog/
twitter: https://twitter.com/elementary/status/1291845759592271872
---

<figure class="constrained" markdown="1">
![Teaser](/images/{{ page.slug}}/card.png){: width="1600" height="900"}
</figure>

Unlike many operating systems—especially in the open source desktop space—elementary OS gets frequent feature updates _between_ major versions. This means throughout the elementary OS 5 lifecycle, we released [updates every month](/tags/#updates), including both fixes and oftentimes major new features like a brand new first-run experience including a [new login/lock screen greeter](/say-hello-to-the-new-greeter/), initial setup, and [welcome](/get-settled-into-elementary-os-with-onboarding/); [Flatpak support](/updates-for-october-2019/) with Sideload and AppCenter; exposing keyboard shortcuts across the system; broad [accessible settings updates](/accessibility-features-are-just-features/); and much more. At the same time, curated apps designed for elementary OS are constantly released and updated by their developers on AppCenter.

This semi- "rolling release" cycle means elementary OS users get the latest features, fixes, and updates to their favorite operating system and apps very rapidly, without having to wait around for a new major release. However, there comes a time in the release cycle when we need to shift our resources and priorities to major updates that will bring a newer Ubuntu core and repositories, plus major technological improvements under the hood. And as we [mentioned last month](/updates-for-june-2020/), that shift has begun.

## Updates to elementary OS 5.1 Hera

Hera will continue to receive security and stability updates to its underlying libraries from the Ubuntu LTS repositories until April of 2028, courtesy of Canonical. But our primary focus at elementary has now fully shifted to OS 6. That said, we still released a handful of updates to OS 5.1 throughout July and early August:

In Keyboard Settings, we've added a new Input Methods view. This helps users of [Ibus](https://en.wikipedia.org/wiki/Intelligent_Input_Bus) set up and manage their input methods—especially useful for those typing Chinese, Japanese, Korean, Vietnamese, and other characters and scripts.

<figure markdown="1">
![Input Method settings](/images/{{ page.slug }}/input-method.png){: srcset="/images/{{ page.slug }}/input-method@2x.png 2x" width="914" height="679"}
<figcaption markdown="1">
New Input Method settings in _System Settings_ → _Keyboard_
</figcaption>
</figure>

We also released an update to the the Music Indicator in the top Panel that ensures your default music player (as set in _System Settings_ → _Applications_ → _Default_) is shown when there is no music playing. This makes it even faster to get back into your tunes no matter your preferred music player.

<figure class="card" markdown="1">
![Music indicator](/images/{{ page.slug }}/music-indicator.png){: srcset="/images/{{ page.slug }}/music-indicator@2x.png 2x" width="419" height="221"}
<figcaption>Music Indicator with an alternate default music player</figcaption>
</figure>

A minor update to AppCenter ensures its window position is saved and restored correctly, plus lets you click on the little update number badge in the header bar to get to the updates page.

Thanks to the quick work of Ubuntu and Canonical, elementary OS 5.1 Hera has also been updated to mitigate the ["boothole" vulnerability](https://eclypsium.com/2020/07/29/theres-a-hole-in-the-boot/).

You can get these updates plus other bug fixes and updated translations by opening AppCenter and hitting "Update All." New installs can also use the updated elementary OS 5.1.7 downloads, available soon at [elementary.io].

## AppCenter for Everyone

In February, we launched the [AppCenter for Everyone](/appcenter-for-everyone/) crowdfunding campaign to take the indie, open source app store to the next level. Little did we know that the global COVID-19 pandemic would hit right when we planned to have our in-person sprint. We [smashed our goal](/appcenter-for-everyone-campaign-results/), but had to postpone the in-person sprint in favor of a smaller [remote sprint](/appcenter-for-everyone-remote-sprint/). We accomplished some work remotely, but were not able to meet all of the AppCenter for Everyone goals—we have still set aside the funds for an in-person AppCenter for Everyone sprint once it is safe to gather again.

One of the major backer rewards was "early access to elementary OS 6," which we've been hard at work to deliver. Which leads us to…

## Early Access Builds of elementary OS 6

Over the past week, we quietly launched [builds.elementary.io][builds]. This new website hosts Early Access Builds of elementary OS as a way to ensure OEMs, developers, testers, supporters, and excited fans can get their hands on up-to-date pre-release builds. Now that elementary OS 6 is in an installable and bootable state, we've [begun adding](https://www.indiegogo.com/projects/appcenter-for-everyone/#/updates/21) $25+ AppCenter for Everyone backers to the allowlist, and any $10/month and higher [GitHub Sponsors](https://github.com/sponsors/elementary) get access automatically. If you're curious about or want to get your hands on Early Access Builds, check out the site:

<div style="text-align: center" markdown="1">
[Early Access Builds][builds]{: .button}
</div>

Early Access Builds are a great way to get exclusive access before anyone else, support the sustained development of elementary OS, _and_ provide feedback while things are still early and in flux. And to be perfectly clear, the pricing and distribution model of elementary OS has not changed—the latest stable version will continue to be available from [elementary.io] as a pay-what-you-want download, and all of our source code is openly-developed and available on [GitHub](https://github.com/elementary).

### Coming in elementary OS 6

While we now have Early Access Builds, there is still _a lot_ of work to do on elementary OS 6 before even a beta release. Without going into a ton of detail, here are a few planned features that are still undergoing work:

- **Refreshed look and feel** including typography and the system stylesheet—which affects everything from the panel and system apps to curated apps in AppCenter. Expect improved contrast and a more refined design system while retaining the signature depth and shadows of elementary OS. Plus, neat little things like rounded bottom corners in apps like Terminal and System Settings thanks to Libhandy's HdyWindow.

  - **Dark style for system components** like the Dock, Panel indicators, Keyboard Shortcuts overlay, system dialogs, etc. We are still working out all of the details here, but work is progressing well.

  - **User-chosen default accent color** across apps. Apps can still override this if they choose, but previous default Blueberry accent color can be swapped out for a range of playful palette colors including Strawberry, Orange, Banana, Lime, Mint, Grape, and Bubblegum.

- **Major updates to communication and organization apps** by leaning on the Evolution data server back-end. This is still early and currently requires setting up an account in Evolution until the Online Accounts component is completed, but is thanks in large part to work done upstream by Corentin Noël. These updates enable syncing of mail, calendar events, tasks, etc. in relevant apps with a wider variety of account providers.

  - **A major rewrite of Mail**, leaning on Evolution data server instead of the custom Geary mail engine. The look and feel will be largely the same, but it has not reached feature parity yet.

  - **New Tasks app** that handles local tasks as well as any task lists synced with the Evolution data server.

- **New installer and initial setup** to round out that first-run experience. Installing should be much faster and more streamlined, only asking for the essentials to get the OS onto your device. This is also great for OEMs, as they can use the new installer itself to image devices, or—like with some experimental Pinebook Pro images we've been playing with—just flash an image without a user to run through initial setup on first boot.

- **More multi-touch support** for navigation in apps, utilizing the Libhandy library. These gestures work on touch screens, trackpads, and mouse scroll wheels. On touch devices, swipes track 1:1 with your fingers on the screen or trackpad. Epiphany will also support similar touch gestures for going back and forward.

- **And more…** this is just what we're comfortable sharing now. :)

We'll share more updates on elementary OS 6 development along the way, but that's a quick peek behind the curtain for now. If you want to learn more, you can find the [OS 6.0 release project](https://github.com/orgs/elementary/projects/55) on GitHub—plus you're always welcome to [get involved](https://elementary.io/get-involved) and help shape the future.

[elementary.io]: https://elementary.io
[builds]: https://builds.elementary.io
