---
title: Introducing Dippi
description: A new app to calculate (Hi)DPI
updated: 2018-01-14
legacy: true

tags:
  - AppCenter
  - elementary
  - Dippi
---

![icon](https://miro.medium.com/max/256/1*eg5zKKLPDHilLUcvuoycLw@2x.png){: width="128" height="128" }

Apparently writing a [multi-part series on Medium](https://medium.com/elementaryos/tagged/hidpi) isn’t enough for me; I just can’t stop thinking and talking about HiDPI! This time I’ve actually made a nice little native app to help you out.

<figure class="half" markdown="1">
![screenshot](https://miro.medium.com/max/1698/1*9HSpXGgzXMLLWOS0A7hP4g.png)
![screenshot](https://miro.medium.com/max/1626/1*fBtFOPBGFbNu1zM12-SE6Q.png)
</figure>

## Why an app?

Calculating DPI is no secret, it’s simply √(w²+h²)/d where w = width in pixels, h = height in pixels, and d = diagonal display size in inches. Simple! There are even countless websites out there that will let you punch in a bunch of values and get a bunch more values spat back out.

So why did I decide to build an app? Three reasons:

1. Existing websites are over-complicated, overwhelming, and don’t tell the whole story,

2. I wanted something that was easily accessible for users who do these calculations a lot, and

3. I’ve been itching to write a native app since [the release of AppCenter](https://medium.com/elementaryos/new-release-elementary-os-loki-0-4-1-2a756549ee76) for elementary OS.

Specifically, I was inspired by Emma Marshall at System76 who was asking me to help with a customer’s purchasing decision. They’d bought a HiDPI laptop from System76, and wanted to know what external displays would also be considered HiDPI and work well with their computer. She had read through my Medium series, but had some specific size and resolution combinations she wanted to run by me.

Now she can just pop open Dippi and answer any question a customer could have while she’s on the phone!

## The Real Value: Analysis

Initially I wrote Dippi just to make the DPI calculation math easier for me and Emma. But then I realized the extra value I could bring: device- and DPI-specific advice based on both my experience and the logic we use at System76 to determine size and resolution combinations.

So now Dippi calculates the DPI, yes, but that’s a small part of the larger picture. It also infers the type of device (laptop or desktop for now) and gives you specific advice about the display. It will tell you if a display is:

- Very Low DPI,
- Fairly Low DPI,
- Ideal for LoDPI,
- Potentially Problematic,
- Ideal for HiDPI,
- Fairly High for HiDPI, or
- Too High DPI

In addition, it gives you specific reasoning and ways you can possibly make a problematic display a little better in software.

## How does it know?

It might seem like black magic when you use Dippi—sometimes it still does to me, and I wrote it!— but the underlying algorithm is fairly simple.

### DPI

First, it calculates the DPI based on the earlier equation. This is derived from the pythagorean theorem (a²+b²=c²) to get the diagonal measurement in pixels, divided by the diagonal in inches. Remember the literal definition of DPI is dots—in this case, pixels—per inch.

### Display Type

Dippi infers the display type based on its size. If it’s below 18" diagonal, it infers it’s a laptop, otherwise it presumes it’s a desktop. You can always override this if it gets it wrong, but it’s usually correct. For example, desktop displays are commonly in the 19–27" range, while almost all laptops are 17.3" or smaller.

### DPI Anchor and Ranges

Dippi uses an “anchor” DPI for each device type: 140 for laptops and 120 for desktops. This is perhaps the least scientific part, but one that comes from years of experience in different conditions; these are the ideal DPIs we aim for at System76 and closely match the advice I always give. They’re based roughly on how far someone typically sits away from each type of display, but avoids having to ask someone how many millimeters their potential or theoretical display might end up away from their eyeballs.

Each of the display types also has an “ideal range” and an “unclear range.” For laptops, I consider the ideal range ±16 DPI from the anchor and the unclear range is ±14 outside of that. For desktops, it’s ±30 ideal and ±20 unclear. The difference here is due to desktop displays typically having a wider range from the user, plus the relative ease of adjusting a desktop display when its location is not determined by attached input devices. These ranges also aren’t super mathematically-determined, but were derived from lots of testing of different common display size and resolution combinations.

For HiDPI, everything is simply doubled (since ideally HiDPI is pixel-doubling).

## Advice

For each of the ranges a display might fall in, Dippi provides specific advice. For example, if the DPI falls within the low end of the unclear LoDPI range, it shows the user:

![screenshot](https://miro.medium.com/max/700/1*AWx9KIT_6mAuIhFIVywEQQ.png)

>**Fairly Low DPI**
>Text and UI might be too big for typical viewing distances, but it’s largely up to user preference and physical distance from the display.

If the display is in the high end of the unclear LoDPI range, it tells them:

![screenshot](https://miro.medium.com/max/700/1*YhM5OD7RRo0G1WwVRdj9Pg.png)

>**Potentially Problematic**
>Relatively high resolution, but not quite HiDPI. Text and UI may be too small by default, but forcing HiDPI would make them appear too large. The experience may be slightly improved by increasing the text size.

In each case, I avoid being definitive—a lot of this depends on the specific user and their setup—but I do point out potential issues so the user can make a smart purchasing decision.

I’ve also documented the resulting ranges [over on GitHub](https://github.com/cassidyjames/dippi/blob/master/dpi.md), mainly as a reference to myself while developing the app (to make sure it’s behaving correctly). Shout out to David Jordan from System76 for helping me come up with those and talking through them.

## Get Dippi

I know this app has value for me and some of my coworkers at System76, but I hope others might find it useful!

[Get it on AppCenter](https://appcenter.elementary.io/com.github.cassidyjames.dippi){: .button }

Dippi is designed and developed on and for elementary OS. You can [get it on AppCenter](https://appcenter.elementary.io/com.github.cassidyjames.dippi) for free with a pay-what-you-want option. Or if you’re more of a tinkerer, you can [grab the open source code from GitHub](https://github.com/cassidyjames/dippi) and build it with the instructions there. There are also instructions for other platforms available in the README there.
