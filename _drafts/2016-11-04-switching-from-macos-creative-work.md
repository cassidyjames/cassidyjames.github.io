---
title: 'Switching from macOS: Creative Work'
description: What it’s like to do creative work or work alongside a designer on elementary OS
author: cassidyjames
image: https://cdn-images-1.medium.com/max/2000/0*bfVV1MpSSLDvNQeI.jpg
tags:
  - switching-from-macos
  - design
  - evergreen
---

> In the previous piece I wrote about elementary OS as a [Developer Environment]({{ site.baseurl }}{% post_url 2016/2016-11-03-switching-from-macos-developer-environment %}).

Apple has historically targeted creatives with its “Pro” line, and many of you might be looking at elementary OS for your new daily setup. There are really two categories of people here: those who do new, original creative work, and those who are doing development but working alongside a designer.

## Doing Creative Work

![](https://cdn-images-1.medium.com/max/2000/0*bfVV1MpSSLDvNQeI.jpg)

First, if you’re doing photo manipulation, vector design, or page layout, Gimp (photo editor), Inkscape (vector design tool), and Scribus (page layout/publishing) are all very capable tools. They’ve improved leaps and bounds in the past few years, so if you’ve used them in the past and weren’t a fan, they may be worth trying again. They’re all available right from AppCenter.

Many high end commercial applications are also available for elementary OS, like [Bitwig Studio](http://www.bitwig.com/en/home.html) for audio production and [Lightworks](https://www.lwks.com/) for video editing.

There are also several apps available in AppCenter that cater to more specific use cases, like Krita or MyPaint for digital painting. It’s always worth checking out what’s available.

However, if you absolutely, 100%, definitely require Adobe or Mac-only software for your process, I have some blunt news: you’re not going to be able to use those apps in elementary OS for the time being. If Adobe or the developers of those Mac apps built elementary OS versions, you’d have a chance, but that’s not the case right now.

There are definitely compatible apps and formats, though. Gimp can open and export to PSD while Inkscape can open AI files and export to Illustrator-compatible PDF or SVG formats. Cross-platform apps like LibreOffice can open and save to Microsoft Office formats.

And you can still definitely dual-boot with macOS or Windows, or install a VM like VirtualBox and run those other OSes, but that’s a bit outside of the scope of this series. :)

## Working with a Designer

If you’re simply working alongside a designer, I have some great news! I work with two Adobe-using designers almost daily: Kate at System76 and my wife. I never have to worry about using the same tools as them, and I believe it makes for higher quality, more reusable work.

Most of the time the designer simply exports her assets (or layers of asset, depending on the end result) as extremely high resolution PNGs, and I can assemble the web page assets from there. For resizing/“making web safe”, I either use a script as part of the asset pipeline, or just open in Gimp and save out the necessary sizes. PNG saves losslessly, so I know I’m starting from the highest quality and can save out to a smaller PNG or JPG depending on which is a better fit.

Occasionally I need to get exact values from a design file, in which case I open the PSD or AI file in Gimp or Inkscape respectively. Not every filter, gradient, or blend mode always works exactly the same, but it does allow me to get a general look at the design and extract colors, sizes, and dimensions if needed.

I’ve been doing this for over two years at System76 and even longer at home (for random side projects), and it’s a really great workflow. We are constantly complimented on the design and implementation of the System76 site, and I think a lot of that is due to the workflow we established with me, the developer, on elementary OS.

