---
title: Goodbye Sourceforge
description: Our time with them has come to a close
date: '2015-06-17T07:00:00.000Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/2000/0*-GRIKNtHWy_-OW6L.png
---

Sourceforge has helped us serve millions of downloads at no charge and provided us with great analytics, but our time with them has come to a close.

The recent news\* of [adware being bundled with Windows installers](https://arstechnica.com/information-technology/2015/05/sourceforge-grabs-gimp-for-windows-account-wraps-installer-in-bundle-pushing-adware/) of popular open source apps was unfortunate to hear. Nobody likes it when financial incentives supersede the user experience of a product or service that is doing great things, but the reality is that we’ve been part of the problem here. We haven’t paid Sourceforge a dime for the petabytes of bandwidth that we’ve consumed over the years. We’re the teenager that rages against their parents, screaming “no fair” while freeloading. Finally, we’ve woken up and decided to put on the grown-up pants.

Our web team has been working hard over the last couple of days on “[moving out](https://github.com/elementary/website/pull/697)”. We’ve looked at our budget, done our homework, and found a new hosting solution. As of now, we’ll be serving our own downloads from 6 localized servers: 1 in Asia, 3 in Europe, and another 2 in North America. That’s one at all of the locations currently offered by our host!

<figure markdown="1">
![](https://cdn-images-1.medium.com/max/2000/0*-GRIKNtHWy_-OW6L.png)
</figure>

Our shiny new servers reside at [Digital Ocean](https://do.co), who were kind enough to grandfather Lewis’ account and give us the a-okay to use a few terabytes of bandwidth every month (Thanks guys!). The new systems run with SSL at an “[A+](https://www.ssllabs.com/ssltest/analyze.html?d=nyc3.dl.elementary.io)” standard, but for browsers that don’t support it you can still download over HTTP. We also run [Transmission](http://www.transmissionbt.com) on the very same servers for improved torrenting speeds. You’ll now be able to download elementary OS directly from us, ad free.

We want to thank Sourceforge for the time that they provided hosting for us. We wouldn’t have been able to grow to this size without their support. Hopefully this is only a small bump in the road for them and they are able to get their monetization issues worked out. In the meantime, we’re optimistic that our download experience should be just a little bit nicer.

Lastly, another big thanks for all of the folks who have helped fund us. We wouldn’t be able to afford this move without your constant support! If you’d like to help get involved with funding (or anything else!) don’t forget to head over to the [“Get Involved”](https://elementary.io/get-involved) page on our website.

_\* Edited November 2016: We’re happy to hear that_ [_Sourceforge is now under new management_](http://arstechnica.com/information-technology/2016/06/under-new-management-sourceforge-moves-to-put-badness-in-past/) _and the practice of bundling adware with downloads has been ended_