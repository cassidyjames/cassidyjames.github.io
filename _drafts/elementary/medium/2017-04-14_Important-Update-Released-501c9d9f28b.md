---
title: Important Update Released
description: '*Rolls Dice*… Critical Fix!'
date: '2017-04-14T21:12:52.228Z'
categories: []
keywords: []
slug: /@DanielFore/important-update-released-501c9d9f28b
---

\*Rolls Dice\*… Critical Fix!

![](https://cdn-images-1.medium.com/max/800/0*qe1PmM6ZGND-GJLC.)

You may have experienced a recent issue that caused updates in AppCenter to stop showing completely. You’ll be happy to know that we’ve been hunting down this issue with laser focus and have now issued a fix.

### How To Install The Fix

Since this issue causes the updates view to break, you’ll have to open up Terminal to perform the update. Don’t worry though, the procedure is quick and relatively painless! When you have a Terminal window open, issue the following command:

`sudo apt update`

You’ll be asked for your administrative password to complete this command. This is totally normal and safe. This command will reach out to our servers and grab a list of all the latest updates available. When it completes, issue the next command:

`sudo apt install packagekit`

This command will grab the latest version of a program called packagekit, where the issue was occurring. It may ask you to install some related things that have packagekit in their name. Again, this is normal and safe.

Press `enter` to accept the new packages and proceed.

After the operation is complete, you can close Terminal and restart your computer to complete the update. After the restart, things should go back to working as normal.

### What Went Wrong

If you’re curious about what happened and what this fix is, read on! AppCenter uses a software library called [PackageKit](https://www.freedesktop.org/software/PackageKit/) to do most of the important bits of fetching and installing software. The particular version of packagekit in our repos happened to have a patch designed to remove an unused function called `get-distro-upgrades`. However it seems like the patch was a bit incomplete and there were still references to this function in the code. We think this dormant issue may have been triggered by the recent release of Ubuntu 17.04. This function was triggered, PackageKit attempted to find a new Ubuntu release and then got stuck and crashed. Thanks to some quick work by David and Rico, a version of PackageKit without this issue was backported and released as an update.

More technical information (and a neat little history of us tracking down the issue), can be found on [this issue report](https://github.com/elementary/appcenter/issues/215).

_We’d like to say thanks again to our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_