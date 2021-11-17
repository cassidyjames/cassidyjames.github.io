---
title: 5 Myths About elementary
date: 2014-03-31 02:30

legacy: true
redirect_from: /post/5-myths-about-elementary
---

Whether I'm browsing Google+, responding to tweets from @elementary, or telling friends about elementary in the flesh, I'm bound to hear some random myth about elementary that is just plain false. I've noticed a few (five, to be exact) that seem to keep cropping up. Rather than copy-pasta my response to each and every comment out there, I decided it'd be more worth my time to lay them out and tackle them one-by-one here.

### elementary is just a theme on top of Ubuntu

Most people have seen what elementary is now, but some are stuck in 2010 and think it's all about the icon and GTK themes. While these are distinct and important aspects of elementary as a whole, we've grown far beyond just themes. elementary includes an entire operating system (elementary OS) built from an Ubuntu core, a desktop environment (Pantheon) and all of its components, several apps (Files, Noise, Audience, Maya, Terminal, Scratch, Snap, and Switchboard to name a few), a developer toolkit (Granite), a design style, and a set of Human Interface Guidelines. There's so much more to it than "just" a theme.

### elementary OS uses GNOME Shell

![GNOME Shell Screenshot](http://elementaryos.org/uploads/content/journal/116--533a5b3ae3424.png "GNOME Shell")

The first ever release of elementary OS in 2011, Jupiter, was built from Ubuntu 10.10 and subsequently included the core GNOME 2 stack. This included the GNOME session itself along with some of the GNOME apps. After Jupiter, we realized we could only improve the user experience so much by building from an existing desktop environment, and we started work on Pantheon, a modern DE. We stripped back the GNOME components that we didn't want or need, built replacements where appropriate, and started to nail the UX between WingPanel, Plank, Slingshot, and the other components. Around the same time, GNOME was hard at work with GNOME Shell, another modern DE.

elementary has never used GNOME Shell, and the user experience between the two is quite different. Because work on Pantheon was happening around the same time that GNOME was developing GNOME Shell, many people seem to think that Pantheon is actually a fork of or built from GNOME Shell.

Also, the panels are the same color (black), at least in Luna.

### elementary Forked GNOME Shell or Mutter

Related to the previous misconception, many people seem to think that we've forked GNOME Shell and/or Mutter for our DE Pantheon or window manager Gala. Neither is true, but something more exciting is true.

Gala, a core component of our Pantheon desktop environment is built using LibMutter, the same core that GNOME Shell is built on for its window management. This means we can completely control our user experience while also benefiting from improvements and new developer-facing features under the hood.

### Installing Pantheon on \_\_\_\_ is the same as using elementary OS

elementary develops Pantheon, our desktop environment, for elementary OS. Conveniently for many users out there, elementary OS itself is built from the same core as Ubuntu LTS versions. This means Pantheon tends to work on these versions of Ubuntu. However, Pantheon isn't all there is to elementary OS; we also have several changes under the hood that make the OS run better, and in some instances (like with the upcoming Isis release) we include newer libraries than Ubuntu, making it more difficult to use Pantheon on Ubuntu. In addition, we develop and test on elementary OS itself, and we can't always predict the conflicts users will run into when using Pantheon on other platforms.

We don't discourage users from installing Pantheon on their favorite compatible OS, we just don't officially support it and won't be surprised if they run into issues.

### Luna is outdated

![Ancient photo of Luna](http://elementaryos.org/uploads/content/journal/116--533a5bbc67b99.jpg)

Here's one I hear mostly on Google+: "Luna is so old and outdated, why don't you guys release a new version already?" This is crazy and probably attributable to the relatively fast pace of other open source releases. But look out into the greater pool of operating systems. Is an operating system considered ancient after a short six months? Especially if that operating system has received constant minor updates during that time frame with new versions of apps, fixes, and tweaks? Of course not; our current OS version is Luna and we're pushing out improvements to it all the time.

Further, thanks to the folks over at Canonical, we even have a new hardware enablement stack available to users that includes new drivers and a new kernel for hardware that came out after Luna was released. This is installable in Luna already, but we're also working on a new download image that has it (along with all updates to Luna) included, making installs on new hardware even easier.
