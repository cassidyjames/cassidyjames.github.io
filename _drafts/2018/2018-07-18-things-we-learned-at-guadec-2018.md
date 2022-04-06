---
title: Things We Learned at GUADEC 2018
description: You can drink on the beach in Almería
date: '2018-07-18T18:47:13.074Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/1600/1*TE_HSe-JDQNjDOx9pwyHTA.jpeg
tags:
  - guadec
  - gnome
  - event

mastodon: https://mastodon.social/@elementary/102583483140370484
twitter: https://twitter.com/elementary/status/1159576769713909760
---

<figure class="full-bleed" markdown="1">
![One of many sunsets we saw on the beaches of Almería, Spain](https://cdn-images-1.medium.com/max/2560/1*qksNfZck_0nTwtVo3n18mg.jpeg)
<figcaption>One of many sunsets we saw on the beaches of Almería, Spain</figcaption>
</figure>


This last week, for the first time, Cassidy, Corentin Noël, and I took time away from the Juno cycle to attend [GUADEC: the GNOME Users & Developers European Conference](https://2018.guadec.org/). Each year, GUADEC brings together developers, designers, users, and other experts and enthusiasts for a week of talks, workshops, round tables, team building and more. This time, the conference was in the coastal city of Almería, Spain at the University of Almería.

Just a heads up, due to the nature of GUADEC, this post might get a bit technical. There’s not much that’s user-facing in the near future, but a lot of future-looking bits. That aside, let’s dive in.

## What is GNOME?

If you’re not already aware, a large part of the technology stack in elementary OS is built by the GNOME community. GLib, GTK, Mutter, GNOME settings daemon, Vala, and many more libraries and services that make our Pantheon desktop possible were all originally developed for the GNOME desktop environment. The same goes for other desktops like XFCE, MATE, and Budgie. And branded and modified versions of GNOME are currently being shipped in Ubuntu and Pop!\_OS. So they’re an important and influential community to engage with since the things they do impact a very large portion of Open Source desktop users.

What many people may not know is that, aside from the GNOME Foundation itself, GNOME is more of a movement than an organization. Its members represent a multitude of organizations and corporations (as well as just individuals) building a diverse range of sometimes competing products. So to say things like, “GNOME thinks foo” or “GNOME wants bar” is to misunderstand that there is no GNOME hive mind. It’s a bit of a chaotic do-ocracy where the direction of the project is shaped by whoever does the work of planning, rallying, and building.

What I was surprised to learn is that the Foundation isn’t all that different in size from elementary. Though the GNOME community encompasses a multitude of full-time paid developers, the Foundation itself has a payroll of only 3. The Foundation’s purpose is currently strictly administrative: they manage funds, take care of legal responsibilities, and organize events. Though there is an advisory board, the Foundation exercises very little authority when it comes to product management or platform goals. This is probably the starkest contrast between elementary and GNOME.

## Interesting Talks

The first three days were talks in the morning and afternoon.

### GTK4

Friday morning we kicked off the talks by attending one about the progress of GTK4. Developer Benjamin Otte walked through lots of little things that are on their way. Overall, it looks like there are lots of good low-level improvements coming to GTK. Better consistency, easier input handling, easier animations, new widgets, and a path for porting from GTK3 to GTK4 were all touched on. We’re excited about the future here and while it’s not released yet, we look forward to adopting GTK4 as soon as it makes sense.

### Product Management in Open Source

[Nick Richards](https://www.nedrichards.com/) from Endless gave a great talk about product management and the other various “non-coding roles” in open source projects. This was super validating for Cassidy and me, as much of our day-to-day roles revolve around non-coding tasks. It’s something I think we do well in elementary, but it was great for Nick to share this knowledge in a well-formed way to the greater open source community.

### Flathub

We attended a talk about Flathub, which dove into what it is and how it works. For those who don’t know, Flatpak is a newer containerized packaging format that is decentralized in nature. But Flathub is a centralized remote server built on several open source technologies.

Afterwards (and throughout the week) we chatted with several people involved with Flathub. One thing that was particularly interesting was the potential ability to spin up a Flathub instance as a curated remote, similar to how we have an AppCenter Debian repository today. This could, in theory, allow us to continue to curate the apps and experience in AppCenter while moving to a potentially more sandboxed format.

We continue to research and observe these new packaging formats like Snap and Flatpak (and the ecosystems of tech around them), but we don’t have anything to announce quite yet.

## Lightning Talks

Both Cassidy and I gave some super impromptu lighting talks; Cassidy talked about “Not Everything’s Technical,” diving into a case study of how we solved social issues (not just technical ones) with AppCenter, while I gave a miniature version of my “The User is Your Romantic Partner” talk, comparing relationship advice to how you should treat your users.

They were both short and perhaps a bit underpracticed, but it was fun to get up in front of a few hundred people and give them a peek into the thought processes of elementary designers.

### Five or More

[Ruxandra Simion](https://github.com/ruxandraS) gave a great talk about modernizing the GNOME game “Five or More.” She walked through her process of splitting it up, rewriting the separate pieces in Vala, and eventually adding new features. It was awesome to see someone doing great work using Vala, and we hope her work can serve as an example to others in the GNOME community. You can read more about the process and Ruxandra’s experience at GUADEC over on [her blog](https://ruxandras.github.io/recent_blogposts/).

## BoFs

GUADEC has scheduled roundtable-style sessions called “Birds of a Feather” or BoFs where people can come together to discussion solutions to common problems, do release planning, and share their perspectives.

### GTK BoF

We attended the GTK BoF where we discussed the upcoming GTK 3.24 release, progress on the GTK 4 release, and lots of low-level internals of GTK itself.

It was great to be in the room with many of the core developers and stakeholders of such an integral part of our stack, and we’re excited about the future of GTK itself. For more details on this BoF, check out [Matthias Clasen’s blog post](https://blog.gtk.org/2018/07/12/a-report-from-the-guadec-gtk-bof/).

### Flatpak BoF

Cassidy attended the Flatpak BoF where Alexander Larsson gave a brief presentation aimed at newcomers, then led a workshop for Flatpaking apps. We walked through the steps for Flatpaking a simple app like Calculator, which was relatively easy, and got to ask some questions during the face-to-face time.

And the usual disclaimer: we continue to research and observe these new packaging formats like Snap and Flatpak, but we don’t have anything to announce quite yet. For more info on the Flatpak BoF, check out [Matthias’s blog post](https://blogs.gnome.org/mclasen/2018/07/14/the-flatpak-bof-at-guadec/).

### Theming & Ecosystem BoF

GNOME designers wanted to get people from various perspectives and operating systems into a room to talk about the current experience with “theming” GNOME or GTK based desktops, i.e. setting the system stylesheet (like the elementary one, which gives developers lots of tools and expressiveness to use in their apps). It was pretty solidly focused on GNOME itself and didn’t seem to affect elementary (as we are not a strictly GNOME-compatible desktop), but it was great to be in the room and help share our unique perspectives. And we’re confident that GNOME’s path forward should be good for them while not negatively affecting us in any way.

For more details on this BoF, check out the [entry on the GNOME Wiki](https://wiki.gnome.org/GUADEC/2018/Hacking%20days/ThemingEcosystemBoF).

## AppCenter Web

In between talks, BoFs, and socializing, Cassidy set out to make the experience of [sharing AppCenter apps on the web](https://appcenter.elementary.io) a bit better. Throughout the week he improved app listings and the logic for opening AppCenter from the website.

While this wasn’t strictly related to anything happening at GUADEC, the collaborative environment and general excitement helped spur it on and put the last pieces together. And it was fun showing the in-progress work to lots of GNOME people, who didn’t realize AppCenter has nearly 100 native, GTK3 apps built for the platform. That really drove home the need for more discoverability and validated the work being done there.

## The Beach BoF

Nearly every night, after the regularly scheduled sessions, there was an unscheduled and unofficial session that lasted for hours: The Beach BoF.

<figure markdown="1">
![An after-hours Beach BoF including Carl from System76, Tobias from Purism, and others](https://cdn-images-1.medium.com/max/1600/1*TE_HSe-JDQNjDOx9pwyHTA.jpeg)
<figcaption>An after-hours Beach BoF including Carl from System76, Tobias from Purism, and others</figcaption>
</figure>

For me, this was one of the more interesting parts of the conference. With the mics and cameras off, the laptops away, and formalities left on the university campus the attendees all broke off to mingle and discuss their passion projects, long term goals, and more. The Beach BoF was a chance to let ideas flow freely, make new friends, and catch up with old ones. It was here that “competitors” shared drinks and congratulated each other and made it clear that we were all a part of something bigger than ourselves.

## And After

But the best part about GUADEC happens later. After the end of the conference, we’ve come home with new friends, new connections, and new ideas. The future looks bright and there’s lots of interesting work happening to take advantage of in elementary OS. But for now, with fresh eyes, it’s time to dig back into elementary OS 5 Juno!

