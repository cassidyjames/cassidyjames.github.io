---
title: "Goodbye Sourceforge"
description: "Sourceforge has helped us serve millions of downloads at no charge and provided us with great analytics, but our time with them has come to a close."
author: DanielFore
date: 2016-11-14T18:25:07.848Z
image: /assets/images/goodbye-sourceforge/0-GRIKNtHWy_-OW6L.png
tags:
  - "web-hosting"
  - "open-source"
  - "elementary-os"
  - "linux"
  - "devops"
---

The recent news* of [adware being bundled with Windows installers](http://t.umblr.com/redirect?z=http%3A%2F%2Farstechnica.com%2Finformation-technology%2F2015%2F05%2Fsourceforge-grabs-gimp-for-windows-account-wraps-installer-in-bundle-pushing-adware%2F&t=MTRkYzlkNmJmNGMzMzU1ZmZkZjJlYzJkZWYxNjRkODg1OWI3OWU4NyxzaXVsb1VIZg%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0) of popular open source apps was unfortunate to hear. Nobody likes it when financial incentives supersede the user experience of a product or service that is doing great things, but the reality is that we’ve been part of the problem here. We haven’t paid Sourceforge a dime for the petabytes of bandwidth that we’ve consumed over the years. We’re the teenager that rages against their parents, screaming “no fair” while freeloading. Finally, we’ve woken up and decided to put on the grown-up pants.

Our web team has been working hard over the last couple of days on “[moving out](http://t.umblr.com/redirect?z=https%3A%2F%2Fgithub.com%2Felementary%2Fmvp%2Fpull%2F697&t=NmRkM2JkNGJiMjZkZTNiNTM2NWQzZTFiN2E4NjUzMjE1N2RiM2VkMCxzaXVsb1VIZg%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0)”. We’ve looked at our budget, done our homework, and found a new hosting solution. As of now, we’ll be serving our own downloads from 6 localized servers: 1 in Asia, 3 in Europe, and another 2 in North America. That’s one at all of the locations currently offered by our host!

<figure markdown="1">
![](/assets/images/goodbye-sourceforge/0-GRIKNtHWy_-OW6L.png)
</figure>

Our shiny new servers reside at [Digital Ocean](http://t.umblr.com/redirect?z=https%3A%2F%2Fwww.digitalocean.com%2F%3Frefcode%3Deca8f5e3972c&t=N2UwYjM3M2UxYjIwODdlNjdkYzEyODg0MWFhMDdkOWE2NTg2NzI2MSxzaXVsb1VIZg%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0), who were kind enough to grandfather Lewis’ account and give us the a-okay to use a few terabytes of bandwidth every month (Thanks guys!). The new systems run with SSL at an “[A-](http://t.umblr.com/redirect?z=https%3A%2F%2Fwww.ssllabs.com%2Fssltest%2Fanalyze.html%3Fd%3Dnyc3.dl.elementary.io&t=ZDA4MTJhNjYyNzE1ZTg2NWVkZGU5OTVkNGM0YWMwNTVkMjA1NmRlNCxzaXVsb1VIZg%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0)” standard, but for browsers that don’t support it you can still download over HTTP. We also run [Transmission](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.transmissionbt.com%2F&t=MDI3OWRmNjcyOGZiMWEwZDljYWI5YjIyNDI0NzIyY2IxZDY3MmE0YyxzaXVsb1VIZg%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0) on the very same servers for improved torrenting speeds. You’ll now be able to download elementary OS directly from us, ad free.

We want to thank Sourceforge for the time that they provided hosting for us. We wouldn’t have been able to grow to this size without their support. Hopefully this is only a small bump in the road for them and they are able to get their monetization issues worked out. In the meantime, we’re optimistic that our download experience should be just a little bit nicer.

Lastly, another big thanks for all of the folks who have helped fund us. We wouldn’t be able to afford this move without your constant support! If you’d like to help get involved with funding (or anything else!) don’t forget to head over to the [“Get Involved”](http://t.umblr.com/redirect?z=https%3A%2F%2Felementary.io%2Fget-involved&t=NWQyNzdlNDJiYmNkZWRmMDAwNTg2Y2NmZDkzOTA4Njg2NGZiMTI2NSxzaXVsb1VIZg%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0) page on our website.

** Edited November 2016: We’re happy to hear that [Sourceforge is now under new management](http://arstechnica.com/information-technology/2016/06/under-new-management-sourceforge-moves-to-put-badness-in-past/) and the practice of bundling adware with downloads has been ended*