---
title: Look & Feel Changes for Juno
description: >-
  While we’re scrambling to put the finishing touches on the impending Juno
  Public Beta, for this month’s progress post I’d like to talk a…
date: '2018-05-31T18:05:55.821Z'
categories: []
keywords: []
slug: /@DanielFore/look-feel-changes-for-juno-2df28f220734
---

While we’re scrambling to put the finishing touches on the impending Juno Public Beta, for this month’s progress post I’d like to talk a bit about some of the look and feel changes you can expect in elementary OS 5.

### Expanded & Refined Color Palette

One of the largest foundational changes we made this cycle was to dial in our [official color palette](https://elementary.io/docs/human-interface-guidelines#color) and expand it to include 5 shades per color.

![](https://cdn-images-1.medium.com/max/800/1*hoTB3GjrZSko6jyBKgOkwA@2x.png)

This new expanded palette means greater consistently between our iconography and our stylesheet and gives our third-party app developer community a much better framework for making their apps feel native to elementary OS.

As of Juno, the elementary palette will be pre-installed by default as a .gpl file and ready to use in Inkscape and GIMP. We’re also adding color variables to our stylesheet so that you can use constants like `@LIME_500` or `@GRAPE_700` in your app’s custom styling.

### Icon Changes

There has been an incredible amount of work done on icons this cycle. So far we’ve already changed over 850 icon files. This includes redesigns, new icons, updating icons to take advantage of the new palette and hinting icons to more sizes.

![The new palette really shines in green icons like the epub file icon](https://cdn-images-1.medium.com/max/800/1*WJlsHEu1AltXpOuDsQdpKg.png)
The new palette really shines in green icons like the epub file icon

File type icons have especially seen some big changes recently. You can see that we’ve gone from a variety of styles with inconsistent colors to a more unified look with symbols that scale better to small sizes.

![New development-related file type icons](https://cdn-images-1.medium.com/max/800/1*zslqGz3bZx6IbCOKfKpz3A.png)
New development-related file type icons

We’ve also introduced some new, development-related file type icons for things like translation files and programming languages.

![Many icons are now fully-hinted in 6 sizes](https://cdn-images-1.medium.com/max/800/1*4LB_WUDX9QfL4cBYG01Mwg@2x.png)
Many icons are now fully-hinted in 6 sizes

There’s been a lot of work on increasing the consistency between icons at their various sizes and many icons are now fully-hinted in 6 sizes.

Updating all of these icons and filling in the gaps has been a huge effort and I’d like to give special thanks to [Micah Ilbery](https://micahilbery.com/), [Sam Hewitt](https://samuelhewitt.com/), [Simon Steinbeiß](https://github.com/ochosi), and [many others](https://github.com/elementary/icons/graphs/contributors) for all of their hard work.

You can see the full diff of icon changes [here on GitHub](https://github.com/elementary/icons/compare/4.3.1...master).

### Stylesheet Changes

This cycle we made the massive leap from Gtk+ 3.18 to Gtk+ 3.22. For those not aware, this entailed what was nearly a full rewrite of the stylesheet. So a lot of work this cycle has gone into making sure that things look at least as good as they did in the previous release. However, we have taken time to put in a number of improvements.

One thing many users were asking us for was higher contrast. We’ve heard your feedback and you’ll see darker text and icons as well as more subtle gradients throughout the UI in the new version of elementary OS.

![](https://cdn-images-1.medium.com/max/1200/1*pA4W7uhXOteJSNlHKBqpoQ@2x.png)

We’re always looking to add new features for developers so we’ve added a few new style classes: `.terminal`, `.accent`, and `.mode-switch`. The terminal class can be used for monospace terminal-like output, i.e. for logs in a developer-oriented app. The accent class allows you to easily and quickly color labels or images with your app’s accent color. The mode switch class reduces the size of the switch to match 16px icons, and removes the accent color highlight when the switch is toggled—this is great for when your switch reflects a change between two equal states (like light and dark mode) instead of enabling or disabling a feature. All of these new style classes will be available as [Granite style class constants](https://valadoc.org/granite/Granite.html).

![](https://cdn-images-1.medium.com/max/800/1*ArKxl8Dxv2_OcbQLTCyOOA@2x.png)

Speaking of accent colors, checkboxes and radio buttons are now drawn with CSS instead of images, so they’ll respect your apps’ accent color as well. This lets app developers weave a more consistent look and feel through their app without having to design completely custom widgets or assets.

![Colored scales are now easier to style](https://cdn-images-1.medium.com/max/800/1*pdWSTKH9duSt9xqEGScs-g@2x.png)
Colored scales are now easier to style

We’ve also made it easier to add a colored background to scales, as seen in the new Night Light feature. You can now simply apply a gradient to the `trough` element like so:

![](https://cdn-images-1.medium.com/max/800/1*KkVT8Mlj4fOER96N5_cvbA@2x.png)

Another minor change is that Gtk.InfoBars now include an icon that reflects their message type. We hope this change makes these messages more accessible for our users with color blindness.

![](https://cdn-images-1.medium.com/max/800/1*R-prGxcFL00gctxmYgMqOg@2x.png)

We’ve also spent a lot of time on the dark style, fixing a number of issues reported and improving contrast. For example, you might notice that Scale widgets in particular are much more contrast-y and easier to see.

You can see the full [list of commits and a diff on GitHub](https://github.com/elementary/stylesheet/compare/5696951d8ec9dde2d4cfd9f964d8daf3dd391967...master).

### Wallpapers

Of course our selection of default wallpapers has also been updated with a few new backgrounds we think you’re really going to enjoy. Special thanks to [Unsplash](https://unsplash.com/) and the photographers who upload their photos there!

![](https://cdn-images-1.medium.com/max/400/1*hVlAQApqH9zn6fB1LCxMKQ.jpeg)
![](https://cdn-images-1.medium.com/max/400/1*mCgMNJcFwaVNKbaAW0gPvA.jpeg)
![](https://cdn-images-1.medium.com/max/400/1*veyhZ3Uvmll_yheOiFVbrQ.jpeg)

![](https://cdn-images-1.medium.com/max/400/1*Ysv5Uqndvb5iovHUaM9Cwg.jpeg)
![](https://cdn-images-1.medium.com/max/400/1*ATrYnQ19FOA1Lcc2FSSBjA.jpeg)
![A few new wallpapers coming to Juno](https://cdn-images-1.medium.com/max/400/1*LjHTYMbr_p3fOsUNa38QqA.jpeg)
A few new wallpapers coming to Juno

### And Many Other Changes

This month we spent a lot of time on under-the-hood changes and optimizations as well as bug fixing, API fiddling, and performance tuning. We hope you enjoyed some pretty pictures while we take care of the boring stuff! We’re now up to over [650 closed issues](https://github.com/search?q=org:elementary+is:closed+is:issue+milestone:%22juno-beta1%22) associated with the Juno Beta milestone.

Juno is still under active development and we’re expecting to land even more fixes and optimizations before its big debut. Stay tuned to this blog for more highlights and announcements as we move toward the next major version of elementary OS. If you missed them, be sure to check out our previous posts about Juno:

*   [Juno Progress for April](https://medium.com/elementaryos/juno-progress-for-april-91babaf6ee92)
*   [Building The Next Generation of Apps](https://medium.com/elementaryos/building-the-next-generation-of-apps-81234cc21a8a)
*   [Juno Progress for March](https://medium.com/elementaryos/juno-progress-for-march-6fd2d553c237)
*   [Juno Progress for January & February](https://medium.com/elementaryos/juno-progress-for-january-february-9b276042716e)
*   [Let’s Talk About elementary OS 5 Juno](https://medium.com/elementaryos/lets-talk-about-elementary-os-5-0-juno-a3a65b97ee7e)

_Thank you to everyone who’s bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_