---
title: 'Developer Tips: Shipping Application Icons'
description: 'How to ship crisp, legible icons with your app'
date: '2017-09-21T17:29:39.384Z'
categories: []
keywords: []
slug: /@DanielFore/developer-tips-shipping-application-icons-ad024666f207
---

AppCenter is nearing 50 apps, and all of them are amazing, but it’s time for a bit of an intervention: your app icons could be much better by following just a few simple tips.

### Follow The Style Guide

There’s an [HIG section on iconography](https://elementary.io/docs/human-interface-guidelines#iconography) with tons of detailed information on how to style your icon so that it fits in and looks native to elementary OS. Here’s a few quick highlights:

![A generic tile icon in elementary style](https://cdn-images-1.medium.com/max/800/1*UfrfhbhfeeA-lPvhy0s7QQ.png)
A generic tile icon in elementary style

*   All elementary OS icons have a thin outline (stroke). The width of this stroke is **one** pixel for all icons, at every size. Strokes are also semi-transparent. This ensures that icons appear sharp against a variety of backgrounds.
*   Since the edges of an object tends to reflect more light due to your position relative to it and to the light source, they will have a highlight. To apply the edge highlight effect to your icon, draw a subtle, **1 pixel**, inner stroke as a highlight. This stroke is slightly brighter at the top and the bottom than it is at the edges.
*   Your icon should not simply be a full-frame image or a completely flat pictogram. Where you can, distinguish your icon with subtle yet appealing visuals.

### Scale (Not Stretch) to Appropriate Sizes

Shipping a single icon at a large size or stretching a single icon to many sizes will not keep your icon legible. You should have 6 icons in total that have been individually tailored to be displayed at each of the following sizes:

![16px, 24px, 32px, 48px 64px, 128px](https://cdn-images-1.medium.com/max/800/1*HzeBMpd9KwMsLjhxgUAkfQ.png)
16px, 24px, 32px, 48px 64px, 128px

At each size, remember to align elements as closely as possible to the pixel grid. Misaligned elements will appear fuzzy due to anti-aliasing. Reduce detail as necessary at small sizes and exaggerate important elements.

### Support HiDPI

If you’re shipping SVG icons, this is as simple as installing your icons to both 1x and 2x directories in HiColor. For example, for a 48px icon you would install your SVG icon file to both `/usr/share/icons/hicolor/48x48/apps` and `/usr/share/icons/hicolor/48x48@2/apps`. If you’re not shipping SVG icons, you’ll need to export your icons at their normal resolution as well as at twice that resolution (so 96px for a 48px icon).

![An app icon at 48x48 and 48x48@2](https://cdn-images-1.medium.com/max/800/1*r_hnyynzNumXSan7RZDVsQ.png)
An app icon at 48x48 and 48x48@2

For more details on HiDPI icons, see [our previous post](https://medium.com/elementaryos/whats-up-with-hidpi-icons-6a26b421725f) on the matter. This post is aimed at icon theme designers on the wider Open Source desktop, but it should still be helpful for app developers on elementary OS.

_We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_