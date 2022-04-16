---
title: "How Long Until Loki?"
description: "With the recent release of Ubuntu 16.04, the inevitable flood of “When is Loki coming?” posts have begun pouring in. So here we are to help answer the question that some of you know the answer to already, “When it’s ready ;)”. But what exactly does that mean? How do we (and you) know when the 4th major release of elementary OS, code named Loki, will be ready to use?"
author: DanielFore
date: 2016-11-16T19:24:14.558Z
image: /assets/images/how-long-until-loki/1l8sxYe0XDfFsNcMqVh9KPw.png
tags:
  - "elementary-os"
  - "linux"
  - "how-it-works"
  - "open-source"
  - "software-development"
---

<figure markdown="1">
![](/assets/images/how-long-until-loki/1l8sxYe0XDfFsNcMqVh9KPw.png)
</figure>

### How It’s Made

If this is your first time following along with elementary OS development then it’s very important for us to note that we work a little bit differently. Instead of basing our releases on how much time has passed, we base them on how much work we can get done. We want every new release of elementary OS to be significantly better than the last release. We don’t hold back updates from previous releases unless it’s necessary on a technical level. That’s why our last release, Freya, had several updates throughout the past year. Major releases happen when large technical changes happen. For developers, you’ll know these changes as “API breaks”.

Currently, elementary OS releases are built using the Ubuntu package repositories (repos). At the beginning of the cycle, we choose a target repo to work from. For Loki, that repo is Ubuntu 16.04. We set up a daily repo where we build our source code against that Ubuntu repo. Sometimes things build straight away and sometimes builds fail because of things like API breaks. We find the causes of the build failures and update our source code until everything compiles.

### Alpha

The next step is to generate daily disk images with our repository and the target (Ubuntu 16.04) repository. We do this using a system called metapackage “Seeds”. It’s the same way Ubuntu is built and it’s documented in pretty fine detail [here.](http://t.umblr.com/redirect?z=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1RPPF14h1Sw2gQjGTuZjUIlNHnGrafS8ekhFjJM9MT00%2Fedit&t=YWY4YTVhZTQ5ZmI4YjVhMWQ0YjIwYmQzYjM1YWNlNjA3NGMzNThhZCx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0) This is the first step to making a new release and we usually refer to it as “Pre-Alpha”. After this step, we have a testing platform that developers can use to make sure all of our code compiles before sending it to the build servers. This isn’t a release that’s ready for regular people to try to run, so we don’t usually publish Alpha releases to the public.

Then, we talk about the projects we’re most interested in doing for the next release: big new features that our users are asking for, places where we can make our code faster and more reliable, and things we can work on with the wider open source community. To track all the changes we want to implement, we use a system called “Milestones” on Launchpad. The first milestone we create is called “[Alpha 1](http://t.umblr.com/redirect?z=https%3A%2F%2Fbugs.launchpad.net%2Felementary%2F%2Bmilestone%2Floki-alpha1&t=NTM5ZjRiMjQwMzAxZDExNmY2MWNmNzFhODRkNWIwMmZkYTEzOWMxMyx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0)”. A completed Alpha represents a barely working version of the next release. It’s a daily built disk image that has many of the new features we talked about and shouldn’t contain any massive show-stopping issues, but are generally considered to still be unstable.

Depending on how many new things we want to do, we could have multiple alphas during this phase. There were some pretty big API breaks between Freya and Loki and we made it a goal to reduce the time that this cycle would last since we got a lot of feedback that users wanted faster OS releases. So instead of having multiple Alpha milestones this cycle, we had just one with the most important things.

### Beta

We then create a milestone “[Beta 1](http://t.umblr.com/redirect?z=https%3A%2F%2Fbugs.launchpad.net%2Felementary%2F%2Bmilestone%2Floki-beta1&t=ODFhMzAyMTllNjU4Zjk5YmVlOTEwYzE4ZTk0MjI1ZmE0MWY2ZjAzOSx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0)” which would be the first public testing release of elementary OS. This release needs to represent a somewhat stable and feature complete product, so it needs to contain fixes for any serious known regressions or important new features. When we release Beta 1, it is for developers and testers to help us find any major regressions before we release the stable version of Loki (called GM or Grand Master). The Beta1 milestone represents a kind of “home stretch” where we wrap up big features and get the OS ready for translations, screenshots, and documentation. This is what we’re working on [right now](http://t.umblr.com/redirect?z=https%3A%2F%2Felementary.io%2Fget-involved%23desktop-development&t=MmNkZGJhOTkzOTYzZDI3Njc3Y2VlYmIwNjBjN2VjMjE1NDEzZTljNSx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0). Depending on how Beta1 goes, there may or may not be additional beta releases.

As you probably know, most of the people who work on elementary OS are either completely unpaid volunteers or bounty hunters. As of this writing, there are just 3 people regularly employed to work at elementary. We rely on bounties to attract developers who will help us get releases out as soon as we possibly can. So if you’re interested in getting Loki out the door and you have a few dollars to spare, we’d love your help funding work on Loki. Consider picking one of [these issues](http://t.umblr.com/redirect?z=https%3A%2F%2Fbugs.launchpad.net%2Felementary%2F%2Bmilestone%2Floki-beta1&t=ODFhMzAyMTllNjU4Zjk5YmVlOTEwYzE4ZTk0MjI1ZmE0MWY2ZjAzOSx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0) and copy/pasting the URL into [Bountysource](http://t.umblr.com/redirect?z=https%3A%2F%2Fbountysource.com%2F&t=OTA3Y2VmMTFmZjM3ZTM0NGEzMWY2Yjc0MDhhM2M1OTQ5ZDM1NDc1ZSx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0). Multiple people can back a single issue at once, so every little bit counts!

### Release Time

Once we’re confident we have a shippable product, there’s one last milestone series: Release Candidate or “RC”. This milestone is often very small, containing only a handful of minor cosmetic issues. It includes things like preparing our release notes and changing the wallpaper to the new default as well as switching from our unstable daily repo to our stable repo that only contains stable released software that is ready to be used by regular folks.

RC’s often come out just days apart and are the last chance to find any last-minute show-stopping issues. Once an RC is released that the team is happy with, that ISO file gets promoted to “GM”. We upload it to our CDN, make copies available to press, and set the final release date for Loki. So watch out for the Beta announcement and soon after for the final release of elementary OS 0.4 Loki!

### A Big Thanks to Everyone!

We want to say thanks again to everyone who has helped us with funding Loki development so far. We’re very excited to continue to grow elementary and help people make a living writing open source software.

If you’re interested in helping fund bounties, but don’t particularly care which issues get backed check out [this page](http://t.umblr.com/redirect?z=https%3A%2F%2Fsalt.bountysource.com%2Fteams%2Felementary&t=Zjg4OTVmMTM2ZWZiZDE2YTg0ZWVmM2ViMjc3NTM3NDQzM2RjODRjYSx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0). If you want to help us with funding, but aren’t particularly interesting in Bountysource specifically, please consider going to [this page](http://t.umblr.com/redirect?z=https%3A%2F%2Felementary.io%2Fget-involved%23funding&t=MTJkMTY4YzZlZDdkYzczYzg5ZmI1MThjMzI2MjVmMDE2NDdhOGQ1OCx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0).

If you’re a developer, there’s money to be had helping us get this Beta out! If nothing on [this list](http://t.umblr.com/redirect?z=https%3A%2F%2Fbugs.launchpad.net%2Felementary%2F%2Bmilestone%2Floki-beta1&t=ODFhMzAyMTllNjU4Zjk5YmVlOTEwYzE4ZTk0MjI1ZmE0MWY2ZjAzOSx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0) interests you, you can find [a more complete list of bountied issues here](http://t.umblr.com/redirect?z=http%3A%2F%2Ftinyurl.com%2Fh9bdq2f&t=NTJiNGI4Y2RlNzU0NTIzZmU5MGQzODQ0MmNhY2I2ZTNjOWRmZmY4MCx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0). If you’ve never developed for elementary OS before and you’re interested in learning more about that, check out our [Getting Started developer guide.](http://t.umblr.com/redirect?z=https%3A%2F%2Felementary.io%2Fdocs%2Fcode%2Fgetting-started%23getting-started&t=ZTViNDBiN2UxNWZkZjhiODE5NzI4Y2E0MzVhZWQzYWEzYWY1MTgwMSx6Z1VvN3N1QQ%3D%3D&b=t%3AibgnuWZACL4bF6AGZWyLrg&m=0)

Edit: It seems like there might be a problem with redirecting to launchpad. If you get a 404, try replacing “%20″ with “+” in the URL in your browser.