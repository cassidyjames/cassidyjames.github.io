---
title: "AppCenter Spotlight&#58; Torrential"
description: "Download in style with this torrent client from David Hewitt"
author: cassidyjames
date: 2017-09-30T18:51:45.699Z
image: /assets/images/appcenter-spotlight-torrential/0H5knAgTDAGdp6haw.png
tags:
  - "torrent"
  - "appcenter-spotlight"
  - "elementary-os"
  - "open-source"
  - "linux"
---

<figure markdown="1">
![On elementary OS? Hit the button to get Torrential.](/assets/images/appcenter-spotlight-torrential/1ADgWkM_oUORFN3JKmogp1g.png)
<figcaption markdown="1">
On elementary OS? Hit the button to get Torrential.
</figcaption>
</figure>

Torrents are an incredibly powerful file transfer tool, commonly used for large downloads (like most Linux-based OSes, including elementary OS itself!) and the sharing of openly-licensed media. They work via peer-to-peer networking, which reduces or eliminates the need for a slower, centralized server for downloads — in fact, well-seeded torrents are almost always faster than a regular download would be!

Assuming you come across a torrent file for a totally-legitimate purpose on the Internet, how do you actually get that to download on elementary OS? Enter Torrential by David Hewitt.

<figure markdown="1">
![Straightforward and designed for elementary OS](/assets/images/appcenter-spotlight-torrential/0H5knAgTDAGdp6haw.png)
<figcaption markdown="1">
Straightforward and designed for elementary OS
</figcaption>
</figure>

Torrential is a speedy and straightforward torrent client. It’s built on the open source LibTransmission library (which powers several cross-platform builds of the Transmission client), but it opts for sane defaults and a notable lack of overwhelmingly-fiddly knobs. That’s not to say it’s completely featureless, though; it does have a handful of options in its Preferences dialog. While most users shouldn’t need to dive in, long-time torrenters or those who have specific networking needs will be happy to know they can.

<figure markdown="1">
![](/assets/images/appcenter-spotlight-torrential/1XY1TdekYlNyQACyuo9NsMw.png)
</figure>

<figure markdown="1">
![](/assets/images/appcenter-spotlight-torrential/1DDMDBVYEGYuP2KlSajcNQQ.png)
</figure>

## The Story of Torrential

David’s inspiration for making torrential is pretty entertaining: before we shipped a blacklist in AppCenter (to weed out completely broken apps from the Ubuntu repositories), there were some… less than desirable search results for the phrase “torrent,” and yet no torrent apps. Since we added the blacklist, there were still no torrent apps (popular apps from the Ubuntu repositories tend to include “BitTorrent,” but not “torrent” in their descriptions). So David set out to solve that.
> I just had a feeling that it would be something a lot of people would use, and it made good business sense to capitalize on the lack of decent search results. I think that’s worked out quite well, as sales have exceeded my expectations for open source software and it’s nice to have that little bit of extra money trickling in every month.

Torrential stands out among its peers due to its simplicity. But how does David decide when to opt for simplicity or functionality? It’s not always straightforward.
> Balancing simplicity with features has been pretty difficult actually. There have been a few feature requests that I’m still on the fence as to whether I’ll implement them. I don’t consider them to be necessary features, and I’m sure it would be a minority of users that would use them. So I may end up avoiding the bloat in the menus etc. That said, I do feel as though the preferences window is already starting to get a bit untidy. So that’s already on my list to smarten up when I get chance. I’ve opted for a sensible set of defaults so that people who just want to download stuff can open up the app and use it right away. People who download torrents more frequently have just enough to tinker with.

Given that Torrential accomplishes its main goal now, I asked David if he considers it to be feature-complete. He still has at least one major feature to add: selective file downloading.
> With selective file downloading, you don’t have to download a torrent in its entirety if you don’t want to. I know it’s an important feature for the users, so I’d like to get that in there. I just keep getting caught up hunting down and fixing bugs and feature requests in the core elementary applications! I may implement some of the smaller feature requests in that pass too if I can find an unobtrusive way to do so.

## Building on the Shoulders of Giants

Torrential is built on *LibTransmission*, the open source library built for the popular cross-platform Transmission torrent client. It wasn’t available out of the box in the elementary repositories, so David had planned to use *libtorrent-rasterbar* (used by apps like Deluge and qBittorrent) from the repositories, but his initial testing wasn’t promising.
> There’s nothing particularly difficult about my home network, so I decided that if it was possible for me to have those issues, then other people may have issues too. That led to the switch to LibTransmission which seems to have been much more reliable. It’s not a readily packaged library so I had to do some magic of writing bindings for Vala and getting it set up to build as a dependency of Torrential when packaging for AppCenter, but it seems to have been worth it in the end.

The beauty of this work is that other torrent apps — for elementary OS or any other GTK+ based platform — can take advantage of those Vala bindings for its own front-end.

## The Experience of AppCenter

I asked David to share any other thoughts about Torrential, and he started gushing about AppCenter. :)
> The overall experience of publishing to AppCenter has been absolutely brilliant. As I mentioned earlier, more of my time seems to be spent contributing to the elementary core experience through bug fixes and feature requests. But I see my applications on AppCenter as another way of contributing to my favourite open source project. It helps elementary both financially and hopefully goes some way to attracting users. There is an ever growing number of fantastic applications on AppCenter now and I have a long list of ones I want to add to that if I ever get the time.

I know I’ve been thrilled to have Torrential available in AppCenter for myself and the users of elementary OS, and we look forward to future apps from David!

## Get Torrential

Torrential is [available on AppCenter](https://appcenter.elementary.io/com.github.davidmhewitt.torrential.desktop) today for the recommended price of **just $1**. Its source code is also openly licensed and [available on GitHub](https://github.com/davidmhewitt/torrential/).

<figure markdown="1">
![On elementary OS? Hit the button to get Torrential.](/assets/images/appcenter-spotlight-torrential/1ADgWkM_oUORFN3JKmogp1g.png)
<figcaption markdown="1">
On elementary OS? Hit the button to get Torrential.
</figcaption>
</figure>

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*