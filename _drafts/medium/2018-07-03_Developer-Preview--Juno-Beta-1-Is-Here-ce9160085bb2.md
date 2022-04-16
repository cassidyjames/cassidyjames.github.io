---
title: 'Developer Preview: Juno Beta 1 Is Here'
description: with plenty of fine print
date: '2018-07-03T16:57:24.739Z'
categories: []
keywords: []
slug: /@DanielFore/developer-preview-juno-beta-1-is-here-ce9160085bb2
---

![](https://cdn-images-1.medium.com/max/2560/1*aJQX1xvTVJePorgF-mcGoQ.png)

Before we dive in to the post, I want to make it very clear why we do beta releases. Beta is a special release intended for our 3rd party developers and highly technical users. Developers need a pre-release in order to test and take advantage of new platform features and to publish their apps so that we don’t release with an empty store. We also invite highly technical users to test Beta in non-production environments to find major regressions and show-stopping issues. In other words:

> AppCenter is empty in this release and it is not safe to use in production environments. **This is not a release.** This is a pre-release.

### For 3rd-Party App Developers

If you have an app published in AppCenter for Loki or would like to publish an app for Juno, this pre-release is for you!

If you haven’t already, we highly recommend you read about [Houston CI](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726) and enable this for your repo. Houston CI builds and tests your app against Juno and will let you know about issues even if you’re not running the Beta.

We’ll have a follow-up post shortly detailing the major changes you should know about when updating your apps, but until then you can always join the [Community Slack](https://join.slack.com/t/elementarycommunity/shared_invite/enQtMzU1NDU4OTE1MjY2LWUyOTBkZGNkZGM4MDgzZjE2ZjRiZDgwMDQ1ZTA0MzcxYjI0MDUyNGRlNDI5ZWViNDkwMzMwYzczMDY2ZjA0MTc) to get help with app development.

For now, the most important changes to worry about are those to Gtk+ and Gtk.CSS in particular. If your app uses custom CSS, you’ll want to run it in the Beta to make sure it still looks as it should.

### For Translators

If you’re a translator, Beta is a great time to let us know about any localization issues you’ve encountered. We’ve now officially entered a period of “string freeze,” which means that we won’t change any text in any of our apps from now until the final release of Juno. If you encounter out-of-date translation templates or strings that cannot be translated, please let us know by filing an issue against the correct repo.

As a reminder to potential translators, we do moderate translation suggestions due to past instances of vandalism. If you’ve submitted translation suggestions for a language that doesn’t appear to have a moderator, please [join our Translator’s Slack](https://ele-l10n.slack.com/join/shared_invite/enQtMjkwMjI2Mzk5ODQxLWM3NWZlMjMxMTUyNzg0MjdiNTdkYTM5ZDA3NzE5YTIwMzZmZjhmZjg0MzQwMGE5MjVhMGU2Yjk2MDU1MGZiYTU) and reach out to Leonardo Lemos about this.

If you’re new to translating for elementary OS, be sure to check out our [Translation Guide](https://elementary.io/docs/translation-guide#translation-guide).

### Known Bugs and Regressions

Being that this is a pre-release of Beta quality, **there are plenty of** [**known regressions**](https://github.com/orgs/elementary/projects/8) **and** [**major issues**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+org%3Aelementary+milestone%3A%22juno-beta2%22&type=) **left to solve before the final release.** Before reporting any issues, please be aware that we are already tracking several high profile ones.

If you’re unfamiliar with filing issues against elementary OS, please review our [Bug Reporting Guide](https://elementary.io/docs/code/reference#reporting-bugs). The highlights are:

*   You can use the new, fancy **“Report a Problem” dialog in System Settings → About** to help you find the correct repo on GitHub to report against.
*   Please **search the issues list before reporting** to make sure that the issue hasn’t already been reported.
*   If the issue has been reported, please **don’t make comments like “I have this issue too”.** Instead, use the 👍 reaction.
*   Please also **avoid making comments like “Hurry up and fix this!”** We’re a very small team with super limited resources, and we have tracked and prioritized issues as best we can. If an issue is super important to you and you want it fixed right away, consider [placing a Bounty](https://github.com/bountysource/core/wiki/Frequently-Asked-Questions).

### HUGE DISCLAIMER

I want to re-iterate that if you are not an app developer or a highly technical user that you **_should not_** download and run this pre-release image. It has known-regressions and bugs. It is potentially dangerous. It is not for production environments. And while we do our best to make the update process smooth, **you will likely not have as good of an experience updating from Beta as installing the final release**.

If you are press or a reviewer, please do not “review” this pre-release. When you publicize buggy, unstable, or unfinished pre-release images it can damage our brand and hurt adoption and sales of the final production-ready release. We have also not detailed the full list of changes, both under-the-hood and visual, so any reviews at this point would be missing significant context. **If you would like to be first to review**, shoot us an email at press@elementary.io and we will contact you with a full embargoed press kit — including high resolution imagery and a full rundown of both technical and user-facing changes — before the final release.

Inevitably, many many people will ignore all of the above and download this image anyways instead of downloading the final release. If you’re one of those people, please consider taking a trip to [our funding page](https://elementary.io/get-involved#funding). We rely on the Pay-What-You-Want download system to pay people to work on elementary OS, to build AppCenter and Houston-CI, and to pay for the servers that host these downloads.

All that being said, we’re extremely excited and proud to reach this milestone! elementary OS 5 is right around the corner. Let’s get that store filled back up, squash some bugs, localize all the things, and release an operating system!

[Download elementary OS 5 Juno Beta1](https://developer.elementary.io/#beta)  
SHA256Sum:`6074806c242a8d916c2e46c6adaffede4863b9cf3040e4099dda22d7732e639f`

Juno is still under active development and we’re expecting to land even more fixes and optimizations before its big debut. Stay tuned to this blog for more highlights and announcements as we move toward the next major version of elementary OS. If you missed them, be sure to check out our previous posts about Juno:

*   [Building The Next Generation of Apps](https://medium.com/elementaryos/building-the-next-generation-of-apps-81234cc21a8a)
*   [Look & Feel Changes for Juno](https://medium.com/elementaryos/look-feel-changes-for-juno-2df28f220734)
*   [Juno Progress for April](https://medium.com/elementaryos/juno-progress-for-april-91babaf6ee92)
*   [Juno Progress for March](https://medium.com/elementaryos/juno-progress-for-march-6fd2d553c237)
*   [Juno Progress for January & February](https://medium.com/elementaryos/juno-progress-for-january-february-9b276042716e)
*   [Let’s Talk About elementary OS 5 Juno](https://medium.com/elementaryos/lets-talk-about-elementary-os-5-0-juno-a3a65b97ee7e)

_Thank you to everyone who’s bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_