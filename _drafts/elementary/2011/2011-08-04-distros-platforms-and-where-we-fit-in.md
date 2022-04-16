---
title:  "Distros, Platforms, and Where We Fit In"
author: danrabbit
tags:
  - platform
  - meta
  - evergreen
---

We often get asked to distribute software like LibreOffice, Firefox, Google Chrome, WINE, applications that use Qt, etc. And for the traditional Linux distribution this is a perfectly reasonable request. The typical distro make up for home users consists of a kind of software Top 40 where the distributors pick out their favorite existing apps and bundle them together along with their favorite existing theme. Then they usually have some sort of branded default wallpaper. Maybe they'll go the extra mile to replace splash screens (Yes some apps do still have splash screens) with branded ones. Sometimes a distributor will even contribute "upstream" in order to lobby certain changes. And very rarely a distributor will create their own software as a little special something.

## I like to refer to this as quilt work.

If you've ever seen a quilt before, the first thing you'll notice is that it's almost always comprised of separate little squares. You can very clearly see where one square ends and where another square begins. And there's an interesting point to this in that (speaking purely about look and feel) it's very possible to look at one piece of the quilt and say "ooh I like this very much" and yet look at another piece of the quilt and say "This is rather ugly, isn't it?" Another interesting thing about quilts is that quilt makers spend a good amount of time trying to position the pieces so that they work well together. What I mean is that they're taking existing completed work and trying (in vain) to make a coherent looking product. And, you know, at the end of the day the important thing is that it's going to keep you warm at night, right? It's fully functional. It does it's job just fine. It's interesting and unique and all that stuff. However...

## Designer bedrooms don't feature quilts.

What is this crazy person getting at talking about quilts and nonsense? Well let's go back to where we started about distributions. If elementary OS were simply a distribution (a quilt, so to speak), there would be absolutely no problem in shipping applications that don't necessarily follow our HIG or use the same toolkit, or the same libraries. It'd be okay to ship applications that don't share data with one another. And it'd probably even be okay for our team to internally create apps that don't behave in similar ways because, well, none of the other apps we ship do. And we could happily call ourselves yet another Linux distribution.

## I assert that elementary OS is not a Linux distribution.

Or at least that we don't aim to be. No, we'd rather be a software platform. A unified computer operating system. That means having a commitment to a particular toolkit (GTK) and supporting a preferred programming language (Vala). It means [deciding how our apps will behave](https://elementary.io/docs/human-interface-guidelines). It means taking control and shaping the out-of-the-box experience as much as we possibly can by creating our own apps. It means creating an application development framework like Granite and other developer tools that are designed to help developers build apps specifically for our platform. We will absolutely not be just another compilation album.


