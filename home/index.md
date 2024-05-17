---
title: Smart Home
description: Cassidy’s smart home devices and recommendations 
date: 2024-05-15
updated: 2024-05-15
---

# {{ page.title }}

{{ page.description }}

<aside class="alert warning" markdown="1">
## This page is brand new and not well organized!

I’m working on it. 😅 I will figure out some better organization, links to products, etc. later once I finish dumping my initial thoughts here.
</aside>

## General Advice

- Matter is the future, Zigbee is the present

- Don’t be afraid of a Zigbee hub

- Lots of smart home stuff is Zigbee even if you don’t realize it:
  - IKEA Home Smart/TRÅDFRI/DIRIGERA
  - Philips Hue
  - Aqara
  - Sonoff
  - Third Reality
  - Comcast Xfinity security
  - Cree
  - Lightify
  - OSRAM
  - Sylvania

- HomeKit compatibility is worth it for the long run even if you don’t use Apple today

- It’s not a problem to start in one ecosystem, just avoid products that _only_ work in one ecosystem

- Home Assistant is kinda scary, but 1000× better than it was even just a year ago—and 100% worth it

- Avoid Wi-Fi devices unless you think you will only ever have a small handful

## Device Reviews

Maybe “review” is a strong word, but here are some impressions/experiences I’ve had with various smart home devices.

### Lighting

From bulbs to permanent fixtures, this is the category in which I have the most devices.

#### IKEA (Home Smart, TRÅDFRI) _👍 Recommend_

I recommend them! I have multiple TRÅDFRI color bulbs and they are some of the most reliable. I don’t love their RGB color reproduction, though; it leans more pastel and less saturated (they seem to mix white in no matter what).

I also have multiple FLOALT skylight-style lights and _really_ like their look. One arrived with broken tunable white, but IKEA’s customer service was great and replaced it ASAP.

They work as expected with the IKEA DIRIGERA hub, but they also work great with Home Assistant over Zigbee—they even receive firmware updates out of the box.

#### Cree _👍 Recommend_

I have around a dozen of these warm white Cree bulbs and they have been by far the most reliable in my house. I honestly don’t think I have ever had to power cycle even one of them over the past couple of years; they just keep on trucking, and extending the Zigbee mesh network all the same.

The one minor complaint I have is that a couple of them flicker at 1% brightness in some of my fixtures; this may not be noticable to you or even affect you/your lighting fixtures, and it is easier resolved by using 5% brightness instead—but I thought I would mention it for completeness sake.

#### Juno _👎 Avoid_

I got three Juno Zigbee wafer lights (recessed lights that mount without a can) on a good sale at Lowe's, and I think I see why they were on clearance…

To be fair, they _mostly_ work well and I really like the color temperature, brightness, and installation—especially for the price. But for something where you’re cutting a six-inch hole in your ceiling to permanently install it, it needs to be more reliable!

My main issue has been that one or more of my three Juno wafers will fall off the Zigbee network every couple of weeks—seemingly after I add other devices. The resolution is annoyingly inconsistent, too: sometimes a quick power cycle brings it back, but other times I have to reset it by flicking the switch on and off about ten times—especially annoying with multiple fixtures on the same circuit! Luckily even after resetting, the lights come back with their existing settings and ID and everything in Home Assistant.

At the time, these were the only non-Hue (and thus affordable) Zigbee wafer lights I could find. But I have since found a Lumary model as well as a handful of no-name models on eBay which just might be a better purchase.

#### Lightify, OSRAM, Sylvania _👎 Avoid_

Oh boy. I found a good deal on a lot of these lights on eBay and have regretted ever since.

Some folks say they work fine for them! It may be a conflict with a specific device, Zigbee channel, neighbor interference, or just a bad batch, but **every single one** of these bulbs has had issues ranging from annoying (glitchy color changing), to unacceptable (requiring a reset to come back online every week or two), to literally unusable (falling off the network and never coming back—even post factory reset).

Apparently there were sold under the Lightify brand with their own hub, but some bulbs are advertised under the OSRAM and Sylvania brands. Lightify shut down and stopped supporting their hub, but thanks to the magic of Zigbee, _technically_ the bulbs should still be fine to use with other hubs. But I do **not** recommend it under any circumstances based on my experiences.

#### Sengled _👎 Avoid_

These bulbs seem popular, but they have a couple of issues for me that make them not worth the hassle.

First, they are a rare case of a mains-connected Zigbee device that is **not** also a Zigbee repeater; typically, any Zigbee device with constant power (like a plug, bulb, lighting fixture, switch, or even my IKEA air purifier) also acts as a repeater to extend your Zigbee mesh network. That’s kind of the whole point of Zigbee and one of the reasons it’s so reliable and resilient: the more (always-powered) devices you add, the more reliable it gets versus Wi-Fi where that adds congestion. But Sengled cheaped out, I guess, meaning these bulbs will only be a drain on your Zigbee network, and are especially a no-go for exterior applications where you really want that mesh network to be extended.

Second, the color temperature has been a bit weird for me; when I turn them on with an automation, they seem to flash the previous color before correctly changing to the requested color. This doesn't happen _all_ the time for me, and it might be something specific to my setup, but I haven't had this issue with any other brand.

Lastly (and likely due in part to the first issue), Sengled bulbs just have not been as reliable for me. They lose connectivity more often than other brands, require power cycling, and get out of sync.

### Motion, Presence, Occupancy

While smart lights are a natural starting point, motion sensors are what really sold me on automating all the things: I love never having to think about turning lights on or off; they just do the right thing when someone walks into the room, and turn off when nobody is around.

#### Third Reality _👍 Recommend_

These are my favorite cheap motion sensors! Like most inexpensive motion sensors, they are infrared which means they detect _motion_, but not _presence_; that is, if you stay still, they will not detect you. This is compensated for by setting the timeout for automations to a sufficiently long period, e.g. ten minutes (the lights will only turn off after there is no motion for ten minutes straight). Because of this, many motion sensors have a long, unchangeable time-out out of the box, like 1–5 minutes. 

However, these Third Reality sensors have a _very_ short time-out—like immediate—which makes them very responsive when you want them to be. I take advantage of this with a nightstand light automation that turns on when there is motion detected at night (e.g. I get out of bed) but turns off as soon as no motion is detected (to minimize disturbing my partner).

These sensors have also been some of the more reliable ones, are powered by a standard AAA battery, receive regular firmware updates through Home Assistant, and are super easy to mount and replace. Due to all of this, they’re my faves!

#### IKEA TRÅDFRI _👍 Recommend_

These were my first motion sensors and they are acceptable, just not quite as nice as the Third Reality ones. They are inexpensive, relatively reliable, and have some level of water resistance so they are fine e.g. under an eave for an outdoor lighting automation.

They are a bit bulkier and harder to replace the batteries in as a result, though.

#### Sonoff _👍 Recommend_

These little motion sensors work about as well as the IKEA ones, and I've had very few issues over all. I don't have a strong preference between these and other brands, and really just go for whatever is on the best sale.

I will note that these use a button battery that is a bit harder to pop open to replace (similar to the IKEA ones, though no screw), but they are _not_ water resistant. But they are small and have worked well for me.

### Door & Window (contact sensors)

I feel like these are some of the unsung heroes of home automation, and I have been systematically adding them to almost every door and window in the house. They’re relatively simple mechanisms with a non-powered magnet and then a battery-powered magnet detector sensor to detect if something is open or closed, but they’re _fast_ and precise, which is nice.

#### Comcast Xfinity _👍 Recommend_

These seemed too good to be true, but just might be my favorite door sensors! I found these Xfinity security door sensors on Amazon for under $10 each, and sure enough, they are nice little Zigbee sensors that look right at home with a home security system. Which is to say they are kind of bulky, super generic, but actually pretty well made.

One of them had issues when I placed it on a window a bit further from my hub, but the others have all been super solid. They power automations for a closet light, a bathroom light, turning off the AC when I open my office window, and more.

I will say: avoid using the included adhesive as it is _nasty_ and permanent; if you have ever tried to remove old security sensors, you have probably encountered this drywall-destroying 3M adhesive. Instead, I am a big fan of removable Command strips or even just sticky tack (blue tack, Uhu tack, etc.).

#### Aqara _👍 Recommend_

These Aqara contact sensors are the smallest I have seen; they're seriously tiny! But they have worked reliably for multiple doors and windows throughout our house.

#### IKEA

These are brand new and I just installed them on some windows, so I don't have a long term impression, but so far, so good!

They bring the price down compared to competitors in a few ways:

- No batteries included
- No temperature sensor
- Kinda bulky

However, they are powered by a standard AAA battery which is nice, and means you can use rechargeable batteries instead of disposable button batteries. They are also IPX6 water resistant which means they should be able to be used for outdoor or damp locations without issues.