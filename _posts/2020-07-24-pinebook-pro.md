---
title: WIP Pinebook Pro
description: Impressive hardware that gives a glimpse into an even brighter future
image: /images/blog/pinebook-pro/card.png
redirect_from:
  - pbp
  - pinebook
  - pinebook-pro
  - pinebookpro
updated: 2020-07-24
hidden: true
---

I recently got my hands on a Pinebook Pro from PINE64, and have spent the past couple of weeks using it—admittedly in rotation with a [Dell Precision 5530](/5530), [Slimbook Pro X](/prox), and System76 Meerkat. I have thoughts. tl;dr: Pinebook Pro is an impressive piece of hardware that provides a glimpse into an even brighter future of Linux-toting hardware.

<aside markdown="1">
**PINE64 provided me with a Pinebook Pro to help elementary explore porting elementary OS to the hardware.** This does not affect my impressions of the hardware, but I am noting it for full transparency.
</aside>

### Who is PINE64?

PINE64 is a both a global community and a brand of hardware devices featuring ARM processors. Many of the devices are single-board computers—similar to a Raspberry Pi—for tinkering, hacking, and special-purpose commercial/industrial applications. PINE64 caught the attention of the Linux desktop community when they announced the Pinebook: an inexpensive laptop featuring an ARM processor on a PINE64 main board. They followed that up with the Pinebook Pro, a higher-end and faster laptop that's still incredibly affordable and often touted as an alternative to cheap Chromebooks that folks buy just to use with desktop Linux.

PINE64 is also shipping the PinePhone, a smartphone designed to run various Linux-based OSes, and working on PineTime, a smartwatch platform in its early stages.

The unique thing about PINE64 is that they are very open, and work closely with several different open source communities to encourage and enable the porting of OSes to their hardware. This can mean sending devices to maintainers (like with elementary), or it can mean special runs of hardware like the PinePhone UBPorts Community Edition, with which PINE64 donated $10 of each purchase to UBPorts. It also means an expansive wiki with all sorts of information about running different software, tweaking firmware, and even doing hardware modifications or upgrades.

### About elementary OS on Pinebook Pro

Getting this out of the way since I know it will be what a lot of folks are interested in: elementary OS on Pinebook Pro is usable, but not what I would consider an experience that we would sign off on. We recommend a modern Intel Core i3 or better processor for a reason, and while many tout elementary OS as lightweight and great for lower-powered devices, that has never been a target for us. It's just not optimized for this class of hardware; animations are choppy, apps are slower than we'd like, and even lightweight web browsing can chug quite a bit on this hardware with elementary OS.

As such, **I would not currently recommend purchasing a Pinebook Pro as a primary device to run elementary OS.** That said, there are some experimental builds of elementary OS for Pinebook Pro if you happen to be a fan and already have a Pinebook Pro sitting around to toy with.

### Hardware

<aside class="card" markdown="1">
#### Spec Sheet

Processor  | Rockchip RK3399 SOC <br /> <small>Dual-Core ARM Cortex-A72 2.0 GHz</small> <br /> <small>Quad-Core ARM Cortex-A53 1.5 GHz</small>
Graphics   | Mali T860 MP4 GPU <small>with Panfrost drivers</small>
Memory     | 4 GB LPDDR4 RAM
Storage    | 64 GB internal eMMC <small>user-upgradable, microSD expansion</small>
Display    | 14&Prime; 1920×1080 IPS
Keyboard   | ANSI chiclet-style <small>non-backlit</small>
Trackpad   | 4.5&Prime; multi-touch <small>rough texture</small>
Wireless   | Dual-band 802.11ac, Bluetooth
Webcam     | 1080p (2-Megapixel)
Audio      | Stereo speakers, stereo microphone, headphone jack
Battery    | 10,000 mAh or ~36 Wh
Charger    | Barrel-style plug (5 Volt, 3 Amp) <small>USB-C compatible, too</small>
Data ports | 1× USB 3 Type-C <small>(power delivery, DisplayPort alternate mode)</small>, 1× USB 3.0 Type-A, 1× USB 2.0 Type-A
Privacy    | Firmware killswitches for wireless, camera, microphones

</aside>

Let's dive right into it: Pinebook Pro is a well-designed laptop, and downright impressive at this price point. PINE64 sells the Pinebook Pro for $200 USD, but there is a caveat when comparing to other devices in this price range: PINE64 has noted that they sell the Pinebook Pro at or near cost. While margins on computers tend to be thin, I suspect this exact laptop would cost significantly more if it were sold through almost anyone else—especially since they're not subsidizing the cost with preloaded software, a subscription, etc.

Still, it's $200 for end users, and PINE64 seems to have made the right decisions to get it to that price point.

The big difference from most laptops is the processor: it's an ARM-based Rockchip RK3399 system-on-a-chip which includes two 2.0 GHz ARM Cortex-A72 cores and four lower-power 1.5 GHz ARM Cortex-A53 cores—along with a Mali T860 MP4 GPU. Technobabble aside, this means the brains are more similar to what you'd find in a high-end Raspberry Pi or a smartphone—the processors and GPU on display here are lower-powered than  than the Intel or AMD processors you'd typically find in a laptop, which has its pros and cons.

On the plus side, the processors draw much less power over all than most laptops. This means better battery life, and even enables a **completely fanless design**. Consequently, the laptop is silent while easily lasting through an entire day's worth of work. The lower power draw also means the laptop can charge off a USB-C phone charger, or even a portable battery typically advertised for topping off your phone or tablet.

On the other hand, the lower performance of the processor and graphics definitely shows through, especially when running a full desktop software stack (like elementary OS). While general usage inside of a native app or two might feel great, multitasking slows things down a bit. Animations definitely suffer—though that may be due in part to a lack of GPU acceleration in the version of GTK we're using, and CPU-intensive tasks like compiling large software definitely take a hit.

More on the experience of using it in a bit, though—let's move on to more hardware.

#### Design & feel

I doubt anyone would be able to tell this laptop costs a fraction of high-end laptops based on its design and feel. The black magnesium-alloy lid and bottom give off a high-end feel from the very first touch. The entire laptop is rigid and feels like one solid piece, even if the sides, keyboard deck, and palm rest are actually some sort of single-piece molded plastic. There is very minimal flex over all, likely thanks to that rigid magnesium alloy acting as a sort of exoskeleton.

The design over all is minimal. It's all-black, with absolutely no logos or embellishments on the chassis. Four rubber feet at the corners keep the Pinebook Pro from sliding around, and provide a tiny bit of an air gap from the bottom metal of the chassis.

I love the look. My one critique is that as sleek as the matte black finish is, the back of the display is a fingerprint magnet; I feel like I have to wipe the thing down daily so I don't look like some sort of greasy animal.

#### Display

The display is impressive for this class of laptop. It's an IPS panel, and the colors look accurate to my eye. It's not washed out at all, and viewing angles are good. It does seem to get a bit dimmer at significant off-center angles than I'd love, but it's nothing that affects my daily usage.

My one complaint is actually the resolution, but perhaps not in the way you'd expect—unless you listen to my regular rants on social media, in which case: no, the horse is not dead and I will continue to beat it.

<aside class="card" markdown="1">
I'm a bit of a nut when it comes to display size and resolution combinations as it relates to the physical size of the UI, integer scaling, loDPI/HiDPI. etc. Like seriously—I've written a whole [blog series](https://blog.elementary.io/what-is-hidpi/) on it, and even developed and maintain [an app called Dippi](https://appcenter.elementary.io/com.github.cassidyjames.dippi) to help people better understand it and make better purchasing decisions.
</aside>

The resolution is maybe just a bit _too high_. At 14", the 1920×1080 resolution means that text and the mouse cursor are _just a bit_ too small for my liking. Some folks might be fine with it, and it's definitely something you can get used to. But if you're coming from regularly using a 15.6&Prime; display with the same logical resolution (3840×2160, or 1920×1080@2x) or a 13.3&Prime; display with a lower logical resolution (e.g. 3200×1800 or 1600×900@2x), it just seems extra small.

Normally, I'd argue that the manufacturer should have gone for a higher resolution like 3200×1800 (1600×900@2x) for HiDPI. Or maybe with 3840×2160 (exactly twice this resolution), the smaller text would be more bearable since it would at least be more crisp. But I'm certain trying to go for HiDPI would just exasperate the already-limited processing and graphical resources on this hardware.

Lucky for me, an unreleased experimental feature for elementary OS is UI scaling based on text size, and it seems to be working pretty well. I've bumped the size to "Large", and everything is much more readable at a comfortable distance. At least I have a good excuse to [dogfood](https://blog.elementary.io/eating-our-own-dog-food/) this now?

#### Keyboard & trackpad

### Day-to-day usage

In practice, I _was_ able to do quite a bit of lightweight desktop and web development. However, having multiple browsers open while doing web development plus researching something would slow things down, and some heavier web apps were barely usable. Slack, in particular, was painful. I was impressed over all with just how usable it was, though; I've attempted to use Raspberry Pi boards as desktop computers, and it just never felt worthwhile to me. Maybe it's because the Pinebook Pro has a great display, keyboard, and trackpad all attached, but it actually feels like a "real computer," just one that's on the slightly slower side.

---

I think that's it! Did I miss anything? Hit me up on social media or via email, conveniently all linked below.

[pbp]: https://www.pine64.org/pinebook-pro/
