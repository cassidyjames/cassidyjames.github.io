---
title: "AppCenter Spotlight: Transporter"
description: Hassle-free file sharing
author: cassidyjames
date: 2018-05-15T06:58:11.749Z
image: /images/appcenter-spotlight-transporter/0myyKEqITLTW1Y2JC.png
tags:
  - appcenter-spotlight
  - interview
---

{% include appcenter.html rdnn="com.github.bleakgrey.transporter" %}

Transporter by Bleak Grey is pure magic. Based on a technology called Magic Wormhole (yes, [really](https://github.com/warner/magic-wormhole#magic-wormhole)), it makes sharing a file across the room or _across the globe_ stupid easy. This is seriously my new favorite app.

## Meet Bleak Grey

Before we dive into Transporter, let’s meet Bleak Grey and hear his development story.

While Bleak Grey’s not his real name—he wishes to remain anonymous—Bleak _is_ willing to share a little about himself and his interests: he’s a linguistics student who dabbles in photography, drawing, and learning German. He also aspires to learn to play the violin, and ponders about releasing a game some day (please, I’d love to see more games in AppCenter!).

Bleak started developing apps for elementary OS due to his drive of trying new things, and his falling in love with the community.

> One day I found out about elementary OS. It was beautiful, fast, and easy to use, so I decided to install it on my laptop. In fact, I liked it so much I wanted to be a part of this community. When I realized AppCenter could use some native apps from developers, I decided to write an app.

So he did.

## Getting into Development

He had never developed for Linux before, so he was truly trying something new! He followed the [elementary Developer Guide,](https://elementary.io/docs/code/getting-started) Googled for help, and spent the next couple of weeks building Transporter.

> There were some ups and downs (I mean [the “aaaaagh” commits](https://github.com/bleakgrey/Transporter/commit/3b7d960153bdb33aebccdc78ddd5ab053c6908b8)), but I think it’s relatable to the programming as a whole. I feel like the entire experience with elementary was so enjoyable it makes me want more.

He spent the next week getting it packaged up, built, and tested in AppCenter Dashboard. After figuring out the Debian packaging, it was smooth sailing.

> The publishing process is smooth and really simple. You connect your GitHub account, release a version and submit it to AppCenter. Honestly, I was shocked at how easy it was. The time gap between writing and publishing Transporter was so short it’s amazing.

## The Result: Transporter

So how did Bleak do? Like I mentioned at the start, really well: this is my new favorite app! Let’s take a closer look.

<figure markdown="1">
![Welcome](/images/appcenter-spotlight-transporter/0myyKEqITLTW1Y2JC.png)
</figure>

When you pop Transporter open, you’re greeted with a familiar welcome screen (like the ones you may have seen in stock elementary OS apps like Music, Videos, Scratch/Code, etc.). You can do three things: Send files, receive files, or show your downloads folder.

<figure class="half" markdown="1">
![Drag target](/images/appcenter-spotlight-transporter/0gfFHs-pDJ9znG8IS.png)
![Transfer ID](/images/appcenter-spotlight-transporter/1naiYQjZTUN1fQVXCSHspsw.png)
<figcaption>Sending files: dead simple</figcaption>
</figure>

Opting to send files shows you a nice big drop target for files. If you drop a single file, it’ll send directly. Otherwise, it’ll zip the files or folder you share up so it’s still just one transfer.

Once you drop some files, you’re given a “transfer ID.” This ID comes from that Magic Wormhole backend, and is a combination of a number and a few words. The idea: you can easily remember this combination or speak it out loud across the room or over a call, then the recipient can punch it in to start a peer-to-peer, end-to-end encrypted transfer. You can read more about the backend and concept over at [the Magic Wormhole site](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#motivation)—I recommend you do, as it’s some fascinating work.

The ID is only usable as long as your Transporter window is open and someone hasn’t downloaded the file: as soon as it’s closed or used, it’s invalidated. This means there’s little risk for anyone but the intended recipient getting the file, since it’s one-time use and only open for a short time. Plus, with tons of possible number and word combinations, guessing an ID while it’s briefly open is nearly impossible.

<figure markdown="1">
![Receiving files](/images/appcenter-spotlight-transporter/0qvN09pFysPwBN0fk.png)
<figcaption>Receiving files: just as simple!</figcaption>
</figure>

On the other end, receiving files is just as simple as you’d expect. You punch in the sender’s transfer ID, hit Enter, and start transferring the file. Boom, easy.

I’ve started using this for my own file transfers at home and work since it’s so simple, and I highly recommend anyone on elementary OS to grab it! It has come in handy to transfer a large file when a flash drive wasn’t handy, to transfer a small file from home to work, and to send goofy demo pics back and forth with friends.

I’m even considering doing some goofy first-come-first-served social media promotions with it, since the one-time-use aspect could lead to some competition… so stay tuned for that. But regardless, it’s a super useful app built on a really interesting backend. I recommend you download it and give it a try!

## Get It

Transporter is [available on AppCenter](https://appcenter.elementary.io/com.github.bleakgrey.transporter.desktop) today **for free.** Its source code is also openly-licensed and [available on GitHub](https://github.com/bleakgrey/transporter/).

{% include appcenter.html rdnn="com.github.bleakgrey.transporter" %}

Bleak also encourages people who want to help out to get involved! Issues, ideas, feature requests, and pull requests are all welcome. Check the details on [GitHub](https://github.com/bleakgrey/transporter/#contributing).

## The Future

Bleak considers Transporter more or less functionally complete, but he’s not done developing for AppCenter.

> I’m pretty proud for this app, since it’s my first one ever written for Linux. It was an interesting experience and I loved it. But I don’t think it was enough for me. That’s why I’m writing another one, [a Mastodon client for elementary OS](https://github.com/bleakgrey/tootle).

I’m unreasonably excited about this, as I’ve started using the indie open source social network Mastodon more day-to-day, and an indie open source client on the indie open source app store just seems… right. Plus it’s called Tootle. What’s not to love?

Be sure to follow along with development and musings by following Bleak Grey on [GitHub](https://github.com/bleakgrey), [Twitter](https://twitter.com/bleak_grey), and of course, [Mastodon](https://mastodon.social/@bleakgrey).

As for parting words, Bleak had this to say:

<aside markdown="1">
>“Starting small and celebrating the little things can be both enjoyable and beneficial for community.”
</aside>
