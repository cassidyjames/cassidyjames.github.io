---
title: My elementary Wishlist x2
date: 2015-04-29 19:42

legacy: true
redirect_from: /post/elementary-wishlist-2
---

About a year ago [I posted a list of four random apps or utilities](http://cassidyjames.com/post/my-elementary-wishlist) that I'd love to be able to use on elementary OS. While one of those apps was started (Taxi, the FTP client), I've thought up a few more.

As last time, I'm imagining each solution as a beautiful, elementary-native, GTK3 utility; so good it feels like it's a first-party elementary tool.

### Icon Inspiration

Oftentimes while designing something, I get stuck on an icon or symbol metaphor. Whether it's an app icon or an action in a toolbar, sometimes designers need some inspiration. Aside from Google searching or using some website, it's difficult to get a comprehensive list of icon metaphors based on key terms. And even when you _do_ go Googling, the results are pretty poor. Iconfinder.com realized this and created a whole service around the idea. The problem there? I don't always want to launch my web browser, plus using the site can be slow.

![Rough sketch of an Icon Finder app](https://lh5.googleusercontent.com/-rGKvXw0EM8c/VUGYRTx-ckI/AAAAAAABGEI/e3NwMmHiOWw/w956-h717-no/IMG_20150429_203826-01.jpeg)

My solution? A native Icon Inspiration app. Iconfinder has [an API](https://developer.iconfinder.com/), so it should be possible to piggyback on their awesome work. I envision it as a very visual app with some pre-defined categories or terms, but the major interaction would be with via search. Searching terms would return icons that match, appropriately caching them to cut down on load times in the future. A "favorites" mechanism could be especially handy if someone is searching several different terms and wants to come back to the ones that worked best.

### Photo Filters

This one may not seem original, but it's something that's lacking on the general Linux desktop, let alone elementary OS. :)

Sometimes I have a photo and just want to give it some sort of look before sending it off elsewhere. On my phone I'd use something like Instagram, VSCO Cam, Aviary, or Snapseed. But there's nothing that simple for elementary.

I picture a very minimal UI: give me the photo big, front, and center and have a nice dark overlaid UI (similar to Audience/Videos in elementary OS). At the bottom could be a handful of carefully-tuned "looks" from which to choose, and the headerbar at the top could have undo/redo and share (powered by Contractor). That's it.

![Rough sketch of a Photo Filters app](https://lh5.googleusercontent.com/-zqJuwk-0lhY/VUGWmIjTX1I/AAAAAAABGDc/LLv21nBBzTU/w956-h717-no/IMG_20150429_202814-01.jpeg)

It's [deceptively simple](https://plus.google.com/+CassidyJames/posts/GC7NYvgvRdU). The real work comes in the algorithms/presets. While there are many image manipulation libraries and complex tools like GIMP available for elementary OS, the key is finding and tuning the preset algorithms to work well on a variety of photos and just look good.

That'd be a minumum viable product. Additional features once the basics are nailed could include slight tweaking of the effect (strength, blur, etc.). But again, it's more about choosing smart defaults than letting the user make their photos look bad.

### Nest

I have a [Nest thermostat](https://nest.com/thermostat/). It'd be rad if I could control it from my computer. That's all. :) They also have [an API](https://developer.nest.com/documentation/api-reference).


### Libraries

In addition to apps this time, I've thought up a few useful libraries that would make developing all sorts of apps easier.

#### Dropbox Wrapper

Wrapping the Dropbox API up into something any elementary app developer could plug into would be awesome; while there are [a number of API wrappers](https://www.dropbox.com/developers/core/sdks/other) out there, none are simple to get started with on nor targeted toward elementary OS.

A LibDropbox (if you will) would let a developer drop in their app name and API key and have an easy way to sync data with Dropbox as a backend. This could then potentially be used for a full-featured plugin to the Files app, for syncing in the Photos app, etc.

#### Chromecast Wrapper

Similar to the above, but for Chromecast! I know there's been [some work](https://github.com/xat/castnow) to be able to control Chromecast from the command line, but a full-on library for elementary OS could allow other developers to put a cast icon right in their apps and send video or audio to it. It could even be added as a sound or video output device in System Settings. It could also be made into a contract for Contractor so developers don't even have to code specifically for Chromecast; any audio, video, or photo app could get Chromecast support for free.

#### Smarter Email

This one's kinda complex, so stick with me.

One reason I use Google services is because with all that data, I get some useful utility. For example, if an airline emails me info about a flight, my flight info shows up on my phone homescreen (via Google Now) when I'm getting close to that date/time. If I'm in Inbox and there's an email about a package, it shows me a picture and its status without even requiring me to drop into the email itself. If I get invited to an event, Inbox gives me an actionable summary with details pulled from the email.

In each of these instances, information was pulled from my email and presented to me in a nicer way. It's data I already had access to. There's no new information being given. But it still makes using Gmail worth it to me. But not everyone is happy with the automated data collection going on behind the scenes. I'm not toting a tinfoil hat, but I'm not sure I'm thrilled with it, either.

So let's make a library that does the same sort of thing, but that is open, works offline, and is native to elementary OS. We could pull data from certain types of emails like flight info, hotel reservations, shipping info, calendar events, and even important reminders/to-dos. We'd need to seed it with some anonymized emails, which could be provided by the developers or by users on an opt-in basis.

If this LibSmarterMail (as I've named it in my head) was created, it would enable developers of apps like Geary to expose more relevant information and actions than just email subjects. It would enable Google-Now-like predictive computing without the downsides of a central company aggregating all of your data. And it'd make it easier to ween myself off of Google products. ;)

### List from last time

Here's a link to the previous wishlist in case you missed it last time: [http://cassidyjames.com/post/my-elementary-wishlist](http://cassidyjames.com/post/my-elementary-wishlist)

--------

I'm sure I've thought of or will think of more ideas like these. I'll follow up this post with more once they're fleshed out a bit!

If you have any questions for me or want to start work on one of these ideas, feel free to contact me at [+Cassidy James](http://google.com/+CassidyJames).
