---
title: "Top 3 Misconceptions about HiDPI"
description: "Or, HiDPI Part II"
author: cassidyjames
date: 2016-12-02T17:38:16.295Z
image: /assets/images/top-3-misconceptions-about-hidpi/1lF0rrTapFFHUxvWr_LRMeA.png
tags:
  - "design"
  - "ui"
  - "elementary-os"
  - "retina"
  - "hidpi"
---

I recently wrote [an article](https://medium.com/elementaryos/what-is-hidpi-and-why-does-it-matter-b024eabea20d#.iz85r9761.) to introduce HiDPI and help explain what it’s all about. I got a lot of feedback across Medium, Twitter, and Reddit, and wanted to directly address the three most common misconceptions I heard in response to the article. This piece gets a bit more specific to elementary OS, but should still be relevant to other platforms as well.

<figure markdown="1">
![](/assets/images/top-3-misconceptions-about-hidpi/1lF0rrTapFFHUxvWr_LRMeA.png)
</figure>

## 3. “Vectors Mean Pixels Don’t Matter”

This was a common response to the previous piece: by using vector assets and vector-based systems instead of raster/pixel-based systems, you don’t need to care about the number of physical pixels and can endlessly scale everything by any amount (even fractions) in any direction.

Well, that’s not quite right.

Interestingly, elementary OS actually already uses vector for everything: app icons, the panel, actions in toolbars, etc. And GTK (the GUI toolkit elementary OS uses) scales any pixel values defined in the system CSS stylesheet by the display scaling factor (much like CSS on the web), so it’s vector-based drawing as well. But there are two important caveats to this: first, the same icon is still drawn differently for different “pixel” (in this case, virtual pixel, like CSS pixel) sizes. Second, they’re still designed with the physical pixel grid in mind.

But why would a physical pixel matter to a vector image? I asked Daniel Foré, founder and lead designer at elementary:
> We care about the pixel grid because if you’ve told the computer to draw over a *portion* of a pixel, that’s physically impossible to do. The computer uses anti-aliasing as a workaround to try and trick your eyes. But that means blending colors together which introduces blur and looks ugly. You want your icons to be sharp, not blurry.
> Vectors help us with pixel density since they can mathematically and cleanly scale up by the scaling factor (just like SVGs on the web). But we still care about integer scaling because vectors don’t automatically help with aligning (hinting) to the grid of physical pixels on which the icon will inevitably be displayed.
> It’s the same reason fonts are hinted; it makes sure the shapes are clear and legible no matter the amount of physical pixels they’re drawn over.

<figure markdown="1">
![A vector icon aligned (left) and misaligned (right) from the grid.](/assets/images/top-3-misconceptions-about-hidpi/1fxNxEcs48k84KYKvIQzQjA.png)
<figcaption markdown="1">
A vector icon aligned (left) and misaligned (right) from the grid.
</figcaption>
</figure>

Now, if and when we get to displays that are truly so dense you can’t see the physical pixels (perhaps 4x density on a laptop-sized display), then physical pixels might not matter enough to care. But even with our 2x displays of today, aligning to the pixel grid produces noticeably crisper results. And each scaling integer introduces exponentially many more pixels with diminishing returns, so we should optimize for the increasingly common 2x displays we have now.

## 2. “Other Platforms Do Non-Integer Scaling”

Other platforms may do non-integer scaling, but “everyone’s doing it!” is not always the best reasoning.

Android devices still frequently use integer scaling; a 4.7" 720×1280 device like the 2013 Moto X or Xperia Z5 Compact are essentially 640×360 at 2x scaling. A 5" 1080p device is the same virtual resolution at 3x. On devices that are not insanely pixel dense but use a non-integer scaling factor, icons are noticeably blurry due to anti-aliasing. On some devices, the manufacturer has chosen to use much, much more graphics computation to render at more than 2x density, so anti-aliasing is less of a problem. But then battery life and performance are.

Windows 7 had basically a text size adjustment. Windows 10 has a scaling factor that snaps to 0.25 increments, but is only the crispest when using integers. Their icons are not typically pixel-aligned anyway, so are frequently blurry regardless of the scaling factor. This helps mask the issue for them, so… good job I guess?

On the web, CSS can be scaled by whatever factor the browser wishes. However, this can introduce rounding errors when not scaling by integers, breaking layouts, and of course creating the same anti-aliasing/blur issues as everywhere else.

Ubuntu’s Unity desktop only actually does *integer* scaling properly, and scales the text size to compensate for what’s displayed to the user as 0.125 increments. The Unity interface itself snaps to 0.125 scaling increments pretty well, but that’s due to its highly custom drawing code and does not work for any of the rest of the OS.

macOS uses a “Best for Retina” resolution out of the box, which is integer scaling (good start!). They do, however, let you choose a different resolution to emulate, and here’s how that works: let’s say you have a 2560×1600 physical resolution, but choose 1920×1200 display mode. macOS basically renders your workspace onto a 3840×2400 pixel surface, then scales that back down to fit onto your 2560×1600 physical pixels. The result is that not everything lines up perfectly, so you get blurry text, icons, and UI. Not great.

***Update:** Apple’s MacBook Pros now ship with non-integer scaling out of the box, and [people have noticed that it’s blurry](https://9to5mac.com/2016/12/02/15-inch-macbook-pro-screen-resolution-blurry/). This appears to be because Apple wanted to increase the screen real estate, but the hardware could not smoothly handle the load of increased resolution while maintaining true 2x scaling. Instead, they compromised by anti-aliasing everything to increase the virtual screen resolution on the same physical resolution.*

So yes, other platforms *do indeed *offer non-integer scaling, but each one makes compromises to do so. If the displays being designed and chosen by manufacturers were just sane size/resolution combinations that considered the integer scaling factor from the start, it would be a much better situation. This is the future elementary OS is striving for, and manufacturers like System76 are actively on board.

## 1. “Scaling Factor is Just a User Preference”

Perhaps the largest misconception I hear is the notion that the scaling factor is or should be a user preference. This is possibly due to OSes exposing it as a setting, or the expectation that everything in a Linux-based OS should be configurable, or because there are people out there using hardware with poor design decisions and expect the OS to work around them.

However, almost by definition, the scaling factor is a factor of the hardware. It is a completely computable value based on the physical characteristics of a device: physical resolution and physical size. Given those, you can determine the density. If the density is above a certain threshold, it is considered a HiDPI display and the scaling factor is set to 2 (or 3 or 4, etc.).

***Update:** Yes, physical distance from display can also factor into the required density, but in the vast majority of cases a sane default can and should be used. In corner cases (like a 24" 4K external display), 1x or 2x scaling might make sense depending on one’s physical setup, so in that case, it could make sense to expose a way to change it. However, OSes should err on the side of making the UI too big (HiDPI) since it’s easier to change it if it’s *too* visible than if it’s too small.*

Now, being built on an open technology stack, of course a user or device manufacturer can dig into the configuration of elementary OS or other Linux based desktop OSes and change the scaling factor under the hood. But it’s not a user-facing accessibility feature (that’s what text scaling is for, which scales the text itself and surrounding UI), and it’s not just a user preference; it’s a factor of the physical hardware itself.

Much like display resolution itself should really not be a user preference for most displays — the display has an ideal, native resolution with an exact number of physical pixels at which it can draw—some people want to use it as an accessibility workaround. But in both cases, they could be better served by the built in accessibility features.

Thanks to everyone who left feedback and reached out to be after the previous piece! What are your thoughts about this one? [Tweet at me](https://twitter.com/CassidyJames) or leave a response below.

[Daniel Foré](http://danielfore.com/) and [Sam Hewitt](https://samuelhewitt.com/) contributed to this piece.