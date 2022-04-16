---
title: "HiDPI is More Important than 4K"
description: "What’s the difference, and why does it matter?"
author: cassidyjames
date: 2017-02-13T21:18:06.595Z
image: /assets/images/hidpi-is-more-important-than-4k/1lOK2LImlJ58TtlPa802lOA.gif
tags:
  - "design"
  - "ui"
  - "hidpi"
  - "elementary-os"
---

In my [first post on HiDPI](https://medium.com/elementaryos/what-is-hidpi-and-why-does-it-matter-b024eabea20d#.fxmpxuum3), I touched on the problem with marketing buzzwords surrounding the concept:
> HiDPI is a great idea, but it’s a hard concept to explain to customers (and some manufacturers don’t even seem to get the benefits…). So the industry has come up with several different buzzwords in an effort to pitch it it customers, with varying success.

But what, specifically, is the reason that HiDPI is a more important term than 4K?

## 4K means nothing.

4K is a (not sanely standardized) description of a number of physical pixels. It’s an approximation of the number of pixels *wide *something is (as opposed to the previous convention of how many pixels *tall* as in 480p, 720p, 1080p, etc.). Something with *somewhere around 4000 pixels wide* will be called 4K. So you have a variety starting from 3840 pixels up to at least 5120 pixels on “ultrawide 4K” displays, broadcasts, or video.

This ends up with a variation of around **4 million pixels** between definitions of 4K. This is not an effective term.

## It’s all about density.

As my coworker Ben pointed out to me, this is a bit of a dead horse I’m beating. But it’s not quite dead yet, so let me carry on.

<figure markdown="1">
![It’s totally not dead yet!](/assets/images/hidpi-is-more-important-than-4k/1lOK2LImlJ58TtlPa802lOA.gif)
<figcaption markdown="1">
It’s totally not dead yet!
</figcaption>
</figure>

If I have **a display with 3840×2160 pixels**, that fits into the definition of 4K. Neat! But is it HiDPI?

Most would say “of course!” since that’s a lot of pixels. **But if it’s a 36" display** designed to be viewed from only a few feet away, it’s probably actually going to be used at 1× scaling, or “lodpi” in software. Each physical pixel will correlate to a single virtual pixel, maximizing the real estate for windows, text, etc.

**What if it’s a 15" display?** Then 1× scaling would make everything physically *tiny *and unreadable, so we use pixel doubling, or HiDPI. Each physical pixel on the display correlates to four virtual pixels, ensuring for crisper curves and text. You can think of this as halving half the virtual resolution, or 1920×1080 (hey, that’s a familiar resolution!).

**Now think about a 13" display.** 3840×2160 pixels on that display obviously makes everything tiny at 1× (like with 15"), so you’d try to pixel-double and run at HiDPI. But things are *still *physically too small, but not small enough that you can pixel-triple (scale to 3×). So what do we do?

We choose a different physical resolution, obviously! For a 13" display, a virtual resolution of 1600×900 is more usable than 1920×1080. So rather than 3840×2160, a manufacturer should choose 3200×1800 pixels (1600×900 pixel-doubled). This isn’t a *huge *difference in the number of pixels (just a few hundred in each direction), but it makes a big difference in the physical size of objects on the display. But wait! This is no longer somewhat close to the arbitrary 4K pixels wide! So **this resolution would not be considered 4K **even though it *is* HiDPI. Madness.

## Physically Smaller = Fewer Pixels

The takeaway should be that at a certain point, a physically smaller display requires physically fewer pixels to remain usable at HiDPI (assuming similar view distances). Cramming “4K” pixels into that small of a space is worse than just using fewer pixels, even if you don’t get the marketing-friendly 4K term.

On the opposite end of the spectrum, if I were purchasing a 27" HiDPI display, I would buy “5K” or 5120×2880 pixel display, since I am used to the real estate of my 27" 2560×1440 displays. 4K at that size would actually make everything *too big* for my tastes.

## HiDPI for Marketing, Resolution for Tech Specs

In the end, HiDPI is what *really *makes a difference to users. It’s what describes the pixel density and extra crispness that a user will get from choosing that display. This is what should be used to market to customers, assuming you’re not Apple and don’t have your own “Retina” moniker that means the same thing.

1920×1080, 3840×2160, 2560×1440, or 5120×2880 are all important specifications of a display, but they should be relegated to the technical specifications section. Geeks will want to know, but most people won’t be able to see that number (or the estimation like “4K”) and know what it really *means* to them or their experience.

This is the third piece in my (apparently ever-expanding) series covering HiDPI. Check out the two previous articles I’ve written on the subject:

* [**What is HiDPI?** and Why Does it Matter?](https://medium.com/elementaryos/what-is-hidpi-and-why-does-it-matter-b024eabea20d#.fxmpxuum3)

* [**Top 3 Misconceptions about HiDPI** Or, HiDPI Part II](https://medium.com/elementaryos/top-3-misconceptions-about-hidpi-f5ef493d7bf8#.xitth4sax)