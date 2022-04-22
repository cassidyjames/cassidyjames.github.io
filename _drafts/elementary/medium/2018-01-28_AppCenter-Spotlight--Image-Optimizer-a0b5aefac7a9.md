---
title: 'AppCenter Spotlight: Image Optimizer'
description: Lossless compression couldn’t be simpler.
date: '2018-01-28T04:50:28.356Z'
categories: []
keywords: []
slug: /@cassidyjames/appcenter-spotlight-image-optimizer-a0b5aefac7a9
---

Sometimes you want a simple utility that just does one thing really well. For lossless image compression, Image Optimizer by Gijs Goudzwaard delivers in an easy-to-understand and lightweight app.

[!On elementary OS? Hit the button to get Image Optimizer.[](https://cdn-images-1.medium.com/max/800/1*WiUJQ_8zAzeHWVpwLhc_3w@2x.png)](https://appcenter.elementary.io/com.github.gijsgoudzwaard.image-optimizer.desktop)
On elementary OS? Hit the button to get Image Optimizer.

Gijs is a developer from the Netherlands who is working on his bachelor in embedded systems and automation. He wanted to make a simple but useful app to test the waters of elementary OS and AppCenter; since he already manually optimized images for web development, he figured he could write an app to do it for him.

> I didn’t know how many people used elementary OS, and I didn’t want to spend months on an app that would only be downloaded a couple of times.

His experiences, however, have shown him that there is indeed a market for quality native apps made for elementary OS.

Coming from web development, Gijs didn’t have experience with Vala or GTK, but it ended up not being a major issue.

> I was able to get a working prototype pretty quickly with Vala, even though I had never used it before. Creating apps with Vala has been much quicker than I thought, it’s also great that it compiles to C so you get the benefits of a native app.

His web experience even came in handy when it came to styling the app:

> Whilst creating this app I wanted to see how much I could do with Gtk CSS. Turns out a lot.

In the end, Gijs was able to strike a nice balance between an attractively styled app while still being completely native.

### How It Works

Image Optimizer always operates losslessly, meaning you shouldn’t be afraid to throw anything at it. Instead of visibly compressing and reducing the quality of images, it simply uses existing libraries like Jpegoptim and OptiPNG to perform significant optimization without altering the end result.

You might not think you can eek much more out of an image, but you might be surprised by the results. I often see over 20% filesize reduction on relatively simple images, even ones that were already set to be compressed.

![](https://cdn-images-1.medium.com/max/600/1*ELAgrpYHFQWcUUCylUBogA.png)
![](https://cdn-images-1.medium.com/max/600/1*ICpLsahnKS-LyCrPt-U2ng.png)

Image Optimizer opens to a straightforward drop target with a handy browse button, then gets to work immediately after dropping or opening up one or more images. You can keep dropping more images onto the window and it will queue them up and show you the results. Since it’s lossless, it replaces the files in place which is great for just dumping in a whole folder before uploading or sending them off somewhere.

### Get It

Image Optimizer is [available on AppCenter](https://appcenter.elementary.io/com.github.gijsgoudzwaard.image-optimizer.desktop) today for the recommended price of just $2. As with all apps on AppCenter, its source code is openly available [on GitHub](https://github.com/gijsgoudzwaard/image-optimizer).

[!On elementary OS? Hit the button to get Image Optimizer.[](https://cdn-images-1.medium.com/max/800/1*WiUJQ_8zAzeHWVpwLhc_3w@2x.png)](https://appcenter.elementary.io/com.github.gijsgoudzwaard.image-optimizer.desktop)
On elementary OS? Hit the button to get Image Optimizer.

Gijs doesn’t have any immediate plans for other apps on AppCenter, but he is thinking about future apps. We look forward to seeing what he comes up with next!

_We’d like to say thanks again to everyone who’s bought an app like Image Optimizer on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you. If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_