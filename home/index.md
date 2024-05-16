---
title: Smart Home
description: Cassidy’s smart home devices and recommendations 
date: 2024-05-15
updated: 2024-05-15
---

# {{ page.title }}

{{ page.description }}

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

#### Lightify, OSRAM, Sylvania _👎 Avoid_

Oh boy. I found a good deal on a lot of these lights on eBay and have regretted ever since.

Some folks say they work fine for them! It may be a conflict with a specific device, Zigbee channel, neighbor interference, or just a bad batch, but **every single one** of these bulbs has had issues ranging from annoying (glitchy color changing), to unacceptable (requiring a reset to come back online every week or two), to literally unusable (falling off the network and never coming back—even post factory reset).

Apparently there were sold under the Lightify brand with their own hub, but some bulbs are advertised under the OSRAM and Sylvania brands. Lightify shut down and stopped supporting their hub, but thanks to the magic of Zigbee, _technically_ the bulbs should still be fine to use with other hubs. But I do **not** recommend it under any circumstances based on my experiences.