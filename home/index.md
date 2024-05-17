---
title: Smart Home
description: Cassidy’s smart home devices and recommendations 
date: 2024-05-15
updated: 2024-05-15
---

# {{ page.title }}

{{ page.description }}

<aside class="alert warning" markdown="1">
## This page is new and not well organized!

I’m working on it. 😅 I will figure out some better organization, links to products, etc. later once I finish dumping my thoughts here.
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

- Home Assistant may seem kinda scary, but it's 1000× better than it was even just a year ago—and 100% worth it

- Avoid Wi-Fi devices unless you think you will only ever have a small handful—and avoid cloud-dependent devices altogether if possible

## Device Reviews

Maybe “review” is a strong word, but here are some impressions/experiences I’ve had with various smart home devices.

### Lighting

From bulbs to permanent fixtures, this is the category in which I have the most devices.

#### IKEA (Home Smart, TRÅDFRI) _👍 Recommend_

I recommend them! I have multiple TRÅDFRI color bulbs and they are some of the most reliable. I don’t love their RGB color reproduction, though; it leans more pastel and less saturated (they seem to mix white in no matter what).

I also have multiple FLOALT skylight-style lights and _really_ like their look. One arrived with broken tunable white, but IKEA’s customer service was great and replaced it ASAP.

They work as expected with the IKEA DIRIGERA hub, but they also work great with Home Assistant over Zigbee—they even receive firmware updates out of the box.

#### Cree _👍 Recommend_

I have around a dozen of these [soft white Cree Connected bulbs](https://www.creelighting.com/a19-4flow-connected-bulbs/) and they have been by far the most reliable in my house. I honestly don’t think I have ever had to power cycle even one of them over the past couple of years; they just keep on trucking, and extending the Zigbee mesh network all the same.

The one minor complaint I have is that a couple of them flicker at 1% brightness in some of my fixtures; this may not be noticable to you or even affect you/your lighting fixtures, and it is easily resolved by using 5% brightness instead—but I thought I would mention it for completeness sake.

These might be discontinued, as I can't find a regular place to purchase them from Cree—but if you find a good deal on Amazon or eBay, I would still recommend them.

#### Juno _👎 Avoid_

I got three [Juno Zigbee wafer downlights](https://juno.acuitybrands.com/products/detail/1899282/juno/smart-flat-wafer-downlight/4-6-led-smart-flat-canless-wafer-downlight-no-housing-required) (recessed lights that mount without a can) on a good sale at Lowe's, and I think I see why they were cheap…

To be fair, they _mostly_ work well and I really like the color temperature, brightness, and installation—especially for the price. But for something where you’re cutting a six-inch hole in your ceiling to permanently install it, it needs to be more reliable!

My main issue has been that one or more of my three Juno wafers will fall off the Zigbee network every couple of weeks—seemingly after I add other devices. The resolution is annoyingly inconsistent, too: sometimes a quick power cycle brings it back, but other times I have to reset it by flicking the switch on and off about ten times—especially annoying with multiple fixtures on the same circuit! Luckily even after resetting, the lights come back with their existing settings and ID and everything in Home Assistant.

Weirdly, two of them show up with Juno as the manufacturer in Home Assistant while another shows up with Samsung as the manufacturer. I have no idea why. They also showed up as RGBW lights, but are only tunable white; I had to add a custom configuration to hide the nonfunctional RGB settings.

At the time, these were the only non-Hue (and thus affordable) Zigbee wafer lights I could find. But I have since found a Lumary model as well as a handful of no-name models on eBay which just might be a better purchase.

#### Lightify, OSRAM, Sylvania _👎 Avoid_

Oh boy. I found a good deal on a lot of these lights on eBay and have regretted ever since.

Some folks say they work fine for them! It may be a conflict with a specific device, Zigbee channel, neighbor interference, or just a bad batch, but **every single one** of these RGBW and tunable white bulbs has had issues ranging from annoying (glitchy color changing), to unacceptable (requiring a reset to come back online every week or two), to literally unusable (falling off the network and never coming back—even post factory reset).

I do have a few of the warm white models still working and while they _mostly work,_ they still are some of the least reliable ones; they sometimes get stuck on or off, requiring a power cycle or reset to get them back on the network.

Apparently these bulbs were sold under the Lightify brand with their own hub, but some bulbs are advertised under the OSRAM and Sylvania brands. Lightify shut down and stopped supporting their hub, but thanks to the magic of Zigbee, _technically_ the bulbs should still be fine to use with other hubs. But I do **not** recommend it under any circumstances based on my experiences.

#### Sengled _👎 Avoid_

These bulbs seem popular, but they have a couple of issues for me that make them not worth the hassle.

First, they are a rare case of a mains-connected Zigbee device that is **not** also a Zigbee repeater; typically, any Zigbee device with constant power (like a plug, bulb, lighting fixture, switch, or even my IKEA air purifier) also acts as a repeater to extend your Zigbee mesh network. That’s kind of the whole point of Zigbee and one of the reasons it’s so reliable and resilient: the more (always-powered) devices you add, the more reliable it gets versus Wi-Fi where that adds congestion. But Sengled cheaped out, I guess, meaning these bulbs will only be a drain on your Zigbee network, and are especially a no-go for exterior applications where you really want that mesh network to be extended.

Second, the color temperature has been a bit weird for me; when I turn them on with an automation, they seem to flash the previous color before correctly changing to the requested color. This doesn't happen _all_ the time for me, and it might be something specific to my setup, but I haven't had this issue with any other brand.

Lastly (and likely due in part to the first issue), Sengled bulbs just have not been as reliable for me. They lose connectivity more often than other brands, require power cycling, and get out of sync.

### Motion, Presence, Occupancy

While smart lights are a natural starting point, motion sensors are what really sold me on automating all the things: I love never having to think about turning lights on or off; they just do the right thing when someone walks into the room, and turn off when nobody is around.

#### Third Reality _👍 Recommend_

These [Third Reality motion sensors](https://www.3reality.com/online-store/THIRDREALITY-Zigbee-Motion-Sensor-Zigbee-Hub-Required-Works-with-SmartThings-or-Echo-Devices-with-Build-in-Zigbee-hub-No-Battery-Included-p370448012) are my favorite! Like most inexpensive motion sensors, they're passive infrared (PIR) which means they detect _motion_, but not _presence_; that is, if you stay still, they will not detect you. This is compensated for by setting the timeout for automations to a sufficiently long period, e.g. ten minutes (the lights will only turn off after there is no motion for ten minutes straight). Because of this, many motion sensors have a long, unchangeable time-out out of the box, like 1–5 minutes. 

However, these Third Reality sensors have a _very_ short time-out—like immediate—which makes them very responsive when you want them to be. I take advantage of this with a nightstand light automation that turns on when there is motion detected at night (e.g. I get out of bed) but turns off as soon as no motion is detected (to minimize disturbing my partner).

These sensors have also been some of the more reliable ones, are powered by a standard AAA battery, are frequently on good sales in bulk or on Amazon, receive regular firmware updates through Home Assistant, and are super easy to mount and replace. Due to all of this, they’re my faves!

#### IKEA TRÅDFRI _👍 Recommend_

The [IKEA TRÅDFRI motion sensors](https://www.ikea.com/us/en/p/tradfri-wireless-motion-sensor-smart-white-60377655/) were my first motion sensors and they are acceptable, just not quite as nice as the Third Reality ones. They are inexpensive, relatively reliable, and have some level of water resistance so they are fine e.g. under an eave for an outdoor lighting automation.

They are a bit bulkier and harder to replace the batteries in as a result, though.

I have yet to try the newer [IKEA VALLHORN motion sensors](https://www.ikea.com/us/en/p/vallhorn-wireless-motion-sensor-smart-white-40504348/); they have poor initial reviews, so I would avoid them for now unless/until things get sorted out.

#### Sonoff SNZB-03 _👍 Recommend_

The little [Sonoff SNZB-03 motion sensors](https://sonoff.tech/product/gateway-and-sensors/snzb-03/) work about as well as the IKEA TRÅDFRI ones, and I've had very few issues over all. I don't have a strong preference between these and other brands, and really just go for whatever is on the best sale.

I will note that these use a button battery that is a bit harder to pop open to replace (similar to the IKEA ones, though no screw), but they are _not_ water resistant. But they are small and have worked well for me.

#### Aqara Presence Sensor FP2 _Mixed_

You might notice that the [Aqara Presence Sensor FP2](https://www.aqara.com/us/product/presence-sensor-fp2/) is the only non-Zigbee device on this list so far… I usually don't recommend going with Wi-Fi devices, but this one _does_ work locally over HomeKit (which works with Home Assistant regardless of whether you own any Apple devices).

I'm mixed because it just hasn't panned out to be quite as reliable as promised—especially for the high price.

I purchased one of these for my living room where we more frequently spend time sitting still and reading, working on a laptop, etc. because a standard PIR motion sensor would stop detecting motion and turn out the lights—even with a relatively long time-out. The FP2 definitely works _better_ than a PIR sensor for this use case, but a year later we still occasionally get both ghosts (it thinks someone is in the room when they're not) and failures to detect when someone is sitting still. In theory we should be able to even have automations based on where someone is within the room (like turning on a reading lamp when someone sits on that end of the sofa), but the accuracy hasn't been reliable enough for me to commit to that.

It's possible I need to move the sensor, adjust settings, and/or re-train it, but that's kind of the issue: it requires a lot more setup and fiddling to dial it in just right.

#### Nest Protect (wired)

Wait… what?? Why is a smoke/CO detector that works over Wi-Fi and Thread in this section? Well… the wired models actually have a presence sensor that is relatively reliable—if you can tap into it! For this, I use a [Starling Home Hub](https://www.starlinghome.io/)—a _must_ if you use Nest devices in a Home Assistant or HomeKit house—which exposes all the Nest Protect goodies as HomeKit devices. You can also use [Homebridge](https://homebridge.io/) for this, but I found the Starling Home Hub much easier to set up and forget about.

Now that I have the Nest Protects showing up in Home Assistant, I use their presence sensors as part of my presence detection for a couple of rooms. I don't know that I'd use them on their own, but they effectively extend the range of motion detection, so I'm a fan.

Note that these sensors are _only_ accessible in the wired models due to the high energy draw.

### Door & Window (contact)

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

### Temperature & Humidity (climate)

I have only recently gotten into climate control with my smart home, but I have been trying several devices and approaches.

#### Aqara _👍 Recommend_

I use an Aqara climate sensor in my bathroom to detect when the shower is running (with a spike in humidity), then turn on the exhaust fan to prevent mold/mildew. It has been extremely reliable, working like a charm every day! I like how the sensor is small and unobtrusive; I stuck it to the wall near the mirror to get a decent reading.

#### Sonoff _👍 Recommend_

I have multiple [Sonoff SNZB-02 climate sensors](https://sonoff.tech/product/gateway-and-sensors/snzb-02/) around the home, and they all work reliably. They're pretty cheap, now, too, especially since the SNZB-02**D** (for display) and SNZB-02**P** (updated model) came out with the same capabilities. They're relatively small (though not as small as the Aqara ones) and seem accurate enough for my needs.

If you want a display, the [Sonoff SNZB-02D climate sensor](https://sonoff.tech/product/gateway-and-sensors/snzb-2d/) has the same guts, but adds a little LCD display which is nice if you want to see the temperature and humidity at a glance without using a smart display or phone. For example, we use this in our kids' room so we can see the temperature when we're getting them ready for bed, and in our dining room that gets a lot of sun so we can know the actual temperature in the room before deciding to open a window.

#### Debug temperatures in other sensors

Weirdly, most contact sensors also include a temperature sensor as well; sometimes marked as “debug” or “device temperature.” I would not rely on these _instead of_ a dedicated climate sensor—especially on exterior doors and windows, as the temperature on the device will not represent the temperature in the room—but I _would_ consider using them as a signal in less critical places. For example, if you have a bedroom door, closet door, and bathroom door all in the same general area, you could create a sensor group in Home Assistant to average them and get a decent idea of the temperature in that area.

### Water Leak

Luckily I've not tested these extensively in real leak situations, but here are my thoughts so far.

#### Govee (Wi-Fi + hub)

One of the rare non-Zigbee devices on the list, the Govee water leak sensors were my first of this category. We had our washer malfunction and flood our basement shortly after moving into our house, so they were some of the first smart devices I purchased for the house. A few months later, a pipe froze and caused another leak that was luckily caught by the Govee sensor—so it did its job!

If you're looking for a standalone system that doesn't need to tie into a smart home platform all that well, then the Govee leak detectors work well enough: their built-in siren is loud, we have not had false positives (more on that…), and they saved us from extensive damage once.

I find the hub-based design a little annoying, as it's a dedicated wall-connected hub that connects to Wi-Fi and then only serves these sensors—I would prefer Zigbee or at least a multi-purpose hub that wasn't single-use—but it does work and you can connect your Govee account to Google e.g. to see the device in the Google Home app and to get spoken notifications from Google Assistant on Nest speakers. Buuuut the integration is pretty light.

My in-laws also have these leak detectors and consistently get false positives in their downstairs bathroom with long, hot showers… I honestly think that's because they don't have good exhaust for that bathroom and water condenses everywhere (including on the sensor!), but it's something to keep in mind if it's going to be exposed in a bathroom (e.g. behind a toilet) rather than under a cabinet.

#### Third Reality

When I went all-in with Zigbee, I replaced the Govee sensors with these [Third Reality water leak sensors](https://www.3reality.com/online-store/THIRDREALITY-Zigbee-Water-Leak-Sensor-Upgraded-with-Dripping-Detection-120-dB-Alarm-App-Email-Notifications-Enabled-When-Work-with-Compatible-Zigbee-HUB-Like-SmartThings-Aeotec-or-Third-Reality-Hub-p361253429). We have not had a leak, thankfully, so I can't speak to how well they work—but I like the design and the fact that they have an in-built siren.

#### Aqara

I don't actually have any of these Aqara water leak sensors (yet), but wanted to jot something down before I forget: they don't have a built-in siren, so I personally wouldn't recommend them for water leaks; you have to ensure your hub is powered, online, working correctly, and that the end devices are on the Zigbee network without any failures for them to alert you at all.

However… this actually introduces some interesting advantages! It means the Aqara water leak sensor is really just a "circuit closed" sensor; you can wire it up to any circuit—like, say, a pressure-detecting mat—and make that Zigbee-connected. It's a cool idea I want to explore more.
