---
title: Desktop Linux Part 2
description: My general thoughts of Desktop Linux 
updated: 2021-11-21
---

> I would suggest reading Part 1 before reading this post.

## The Need to Evolve

I now understand the pain points of the ground falling apart under your feet and I'm excited about the technology being used to start that from happening. These technologies include [Flatpak](https://flatpak.org/) and [OSTree](https://github.com/ostreedev/ostree) as we can combine them together to avoid issues that where highlighted in Linus Tech Tips [YouTube video](https://youtu.be/0506yDSgU7M). These technologies are being used in some systems like [Fedora Silverblue](https://silverblue.fedoraproject.org/) and [Fedora Kinoite](https://kinoite.fedoraproject.org/) but not other distros (yet).

The core idea is being used in the other distros with [BTRFS](https://btrfs.wiki.kernel.org/index.php/Main_Page) with the tool called [snapper](http://snapper.io/faq.html) though some folks use [Timeshift](https://github.com/teejee2008/timeshift) since it has a GUI and you can set a schedule and forget about it for the most part. The main distros that I know of that are pushing for the user to make backups of their data and snapshots of their systems are [Garuda Linux](https://garudalinux.org/) and [Linux Mint](https://linuxmint.com/). Garuda is using Timeshift and BTRFS to take snapshots after each update and Linux Mint is recommending the user to take backups (Ubuntu does this as well). 

## The Rule of Two

Well in this case it's three but I had to make a Star Wars joke :). The general rule is to have three copies of your data (two different media types and one offsite), this [article](https://www.acronyms.co.uk/blog/backup-rule-of-three/) goes into more depth. Even if we solve the update issue where the user can easily go back to an older snapshot if that update breaks we should still backup the data which is not as easy to save. I personally try to keep my data backed up on another drive in my system and my ssh keys in my Pi and my Nextcloud. I believe it's important to help users and encourge backing up their files. This solves two issues when it comes to snapshots:

1. They can restore the newer versions of their files
2. They can restore files that didn't exist in the older snapshot

### Stay tuned for one last part!

We'll be covering applications! Please do let me know what you think of this post and your thoughts on my social media!