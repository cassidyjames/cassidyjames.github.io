---
title: A Look at the Slimbook Pro X
description: Not a review, but some thoughts
image: /images/blog/slimbook-pro-x/card.png
redirect_from:
  - pro-x
  - prox
  - slimbook
  - slimbook-pro
  - slimbook-pro-x
updated: 2020-07-12
---

<aside markdown="1">
I was unable to get all of the photos I wanted before my baby had to go to bed—but for now I have included several photos from the Slimbook website.
</aside>

Slimbook recently had a [Linux-related developer promotion](https://slimbook.es/en/developers) where they called for anyone “involved with an open source project, developing for a Linux distribution, programming for GNU or even for the Linux Kernel” to contact them for the opportunity to get Slimbook hardware at a discount or possibly for free to help them with their work.

I applied on behalf of my work on elementary, and to my surprise, they chose me! A few weeks later, a refurbished [Slimbook Pro X][pro-x] showed up at my door. If you follow me on Twitter, this may be old news:

<div markdown="0">
  <a href="https://twitter.com/CassidyJames/status/1273667079548235776">
    <blockquote>
      <p><strong>Cassidy James Blaede</strong> @CassidyJames<br />
      Unboxing something from @SlimbookEs 📦️👀️</p>

      <img alt="Video thumbnail" src="/images/{{ page.url }}/twitter-thumb.png" />
      <p>11:21 AM · Jun 18, 2020</p>
    </blockquote>
  </a>
</div>

Ignoring the garbage livestream quality (I have since gotten a new router, I should blog about that…), I cover most of my legit first-impressions there. It was the first time I’d seen a Slimbook model up close in person, and I wasn't even entirely sure what I was getting.

For those who don't wish to watch a 20-min video and/or want my thoughts after having used it for a few weeks now, here are some thoughts.

<aside markdown="1">
**Again, Slimbook provided this refurbished Slimbook Pro X model to me for my work on elementary, free of charge.** That does not affect my thoughts or opinions about it, but I am pointing it out for full disclosure.
</aside>

### Specs & configuration

I'll get into details later, but the basic specs of the Slimbook Pro X I received are:

- 14&Prime; 1920×1080 IPS display
- Backlit ANSI keyboard
- 8th Gen Intel® Core™ i7-8565U CPU
  - 4 cores (8 threads)
  - 1.8 GHz (up to 4.6 GHz turbo)
- NVIDIA Geforce MX250
  - 2 GB GDDR5 memory
- 8 GB DDR4 2666 MHz RAM
- 250 GB M.2 SSD
- 720p webcam with stereo mic
  - IR facial detection camera
- Intel 9560 AC Wi-Fi (up to 1730 MBps)
- 46.7 Wh battery
  - Not specified by Slimbook, but reported by GNOME Power Statistics
- 65-Watt DC barrel-style charger
  - 19 Volt/3.42 Amp
  - European plug, but with a standard ["Mickey Mouse" C6 inlet](https://en.wikipedia.org/wiki/IEC_60320#C5) on the brick, meaning I could use an existing C5 cord with a US plug from another laptop

### Weight, build, and noise **Light, fairly solid, and quiet**

These physical characteristics are pretty subjective, at least how I'll cover them here—different people value different aspects of a laptop.

#### Very (disconcertingly?) lightweight

The most consistent thing I—and others when I hand it to them—think about this hardware is, "It's _so light!"_ Like, to the point where I was honestly concerned if there was even any hardware inside it when I picked it up for the first time. It may seem silly, but it reveals a few things:

1. Magnesium is a great material for making lightweight laptops.

2. A glass touchscreen (like on [my Dell Precision 5530](/5530)) adds a _ton_ of heft—in addition to all the glare.

3. The battery is smaller than I'd like; less than half the size of the one in [my Dell Precision 5530](/5530).

I would have to do a teardown (maybe eventually, but not today!), but I also wonder if the internal design is as efficient as it could be. Yes, a lightweight laptop is _great_ for throwing in a bag, and the Slimbook Pro X delivers there. But, is there just empty space inside? How is it so lightweight? If there's unused space, could it have been made thinner or even smaller in its other dimensions?

I realize I've now spent several paragraphs on something that may seem trivial, but it is just so _absolutely_ jarring when you pick it up that it's deserved.

#### Pretty solid build

The laptop is made from magnesium alloy, plus some aluminum and plastic. Even with its unexpected lightness, it doesn't feel plasticy—just slightly hollow? But the way it's all put together seems pretty solid.

Why the “pretty” qualifier? Mostly due to the display bezel and a few perplexing seams in the chassis. For the most part, the laptop feels very rigid; the keyboard deck and sides don't flex, the bottom is mostly one big piece, and the back of the display is a solid piece.

But the display bezel is a black plastic, and on my (admittedly refurbished) model, that bezel is separating slightly from the display panel, with some glue visible—even affecting the webcam. This is almost certainly related to it being a refurbished model that was provided to me for free; however, the fact that it's possible for the bezel to separate in this way still concerns me a bit.

<aside markdown="1">
I have reached out to Slimbook as a courtesy to let them know about this issue, in case it is a more widespread problem. I will update this post if/when I hear back.
</aside>

On the bottom of the laptop are two long rubber feet spanning most of the length of the chassis. I like this style of feet, as it lifts the laptop a bit off of a table or desk, but looks fairly uninterrupted. There is also a large fan vent spanning most of the width towards the back side, and two small speaker vents up near the front. Next to the speaker vents, however, are two seams in the otherwise solid bottom panel. At first I thought these might be optional SD card reader or SIM tray covers, but due to their placement, it looks like they might be the speakers themselves. But why are they a separate material and visible on the outside? It is just strange.

I also would be remiss to not mention the stickers: there are advertising stickers on the palm rest. Sometimes this is mandated by Intel or other component manufacturers—especially for smaller OEMs. It’s… fine. But it’s a bit tacky; nobody _wants_ stickers on their brand new $1,000 laptop, just like you wouldn't want to buy a brand new high-end car and have it come with bumper sticker advertisements. Slimbook even added their own “protected by magnesium” (alluding to the magnesium alloy used in the chassis) and “powered by GNU/Linux” stickers.

Over all it _is_ a pretty solid feeling laptop, and these minor things only slightly take away from that.

#### It's (usually) silent

In my use of the Slimbook Pro X, it's a _very_ quiet machine. The fans stay quiet or entirely off most of the time. But there's a catch here: I don't usually use the NVIDIA graphics.

The Slimbook Pro X packs an NVIDIA GPU, even in its very slim and lightweight package. Specifically, it comes with an NVIDIA Geforce MX250. I usually opt for good-enough integrated Intel graphics, but I had mentioned the relative lack of NVIDIA hardware as a way Slimbook could help out—and they delivered here.

When you kick that NVIDIA card on, the fans seem to spin up _significantly_ more. Even when not doing what I would consider GPU-intensive tasks; for example, just browsing the web. I guess it's putting that GPU to good use, making scrolling and animations that much smoother, but it's not really a benefit that I notice. And the battery hit is also significant. So unless I'm specifically testing NVIDIA integration or issues, I keep the laptop in Intel mode where it runs much cooler, and thus quieter.

### Input/output

#### **Keyboard**: Great design and feel, minor annoyances

Since you spend most the time interacting with a laptop with its keyboard it's paramount to the experience. And the Slimbook Pro X delivers a mostly great keyboard here.

I really like the **design and look** of the keyboard. It's a less common style these days with big, square, silver keycaps and little space between the keys. The result looks great, and feels really good to type on. The silver keys' color and texture mean they don't pick up as much oil or smudging as other keyboards I've used, which is nice. It also means that the _entire_ deck of the laptop is reflective, which has been a small annoyance when using the laptop outdoors.

<figure markdown="1">
![Backlight](/images/{{ page.url }}/backlight.jpg)
<figcaption>Photo provided by Slimbook</figcaption>
</figure>

The keys are **backlit**, which is handy. However, the combination of the silver keys, inconsistent backlighting/bleed, and an annoying firmware issue take away from the benefit a bit. First, the silver keys mean that lighting up the characters on the keys actually make them _harder_ to read in all but pitch black environments. And then the lighting seems to be uneven, lighting up some parts of some keys significantly more than others, while also leaking out around the keys. Lastly, the Slimbook Pro X insists on always turning on the keyboard backlight when you start up, regardless of its previous state—the result is that I always want to turn it off, and if I forget, it's a tiny bit more unnecessary power draw.

The **feel and travel** of the keys is _perfect_ for me. There's a healthy amount of travel and cushion, which I love—it's not as low-profile-feeling as many chiclet-style keyboards, but it's not some mechanical keyboard either.

I opted for the **ANSI layout** (which is standard in the US), and it is mostly what I'm used to. The arrow keys are all in one line, with the up/down keys half-sized; I've used this style and the inverted-T style, and don't have a strong preference toward one or the other. The laptop doesn't try to squeeze in dedicated <kbd>Home</kbd>, <kbd>Pg Up</kbd>/<kbd>Pg Down</kbd>, or <kbd>End</kbd> keys which is fine with me; I am used to using <kbd>Fn</kbd> with the arrow keys to handle that.

The <kbd>F1</kbd>–<kbd>F12</kbd> **function keys** are mapped to F1–F12 instead of media keys by default. Personally, I would prefer they be media keys (or at least configurable in the BIOS) like my Dell Precision; I want to quickly change the volume or backlight _way_ more often than I want to quickly hit <kbd>F10</kbd> or <kbd>F12</kbd>. The Fn-Lock feature doesn't seem to behave how I would expect, either.

And yes: there is a **Windows-branded Super key**. We use the [Looped Square (⌘) symbol in elementary OS](https://blog.elementary.io/why-the-looped-square-symbol/) to avoid having the Windows logo everywhere while still having a somewhat common symbol; I'd prefer laptop manufacturers do the same or at least use <kbd>Super</kbd>.

<aside markdown="1">
Shoutout to [Star Labs](https://starlabs.systems/?rfsn=4227837.e8f025) who just use a <kbd>Super</kbd> key! It's OS-agnostic and not overly branded, while still being distinctly Linux-y. Nice touch!
</aside>

Over all, I love the look and feel of the keyboard. The reflectiveness, backlight, function keys, and Windows key keep me from calling it perfect, but it is otherwise great.

#### **Trackpad**: Big, smooth, and hinged

If you're not interacting with the keyboard, you're using the trackpad. Luckily, the trackpad is similar to the keyboard: mostly great with only some very minor issues.

<aside markdown="1">
[Video](https://twitter.com/CassidyJames/status/1273679346830422020) (Twitter)
</aside>

First, it's **big**. I love the size, which gives you all sorts of room for tracking and multi-touch gesturing. And its location and software seem to do a great job of avoiding accidental touches/movements, even with its size.

It's also **pleasantly smooth**, which is a must for me. I don't think it's glass, but the smooth surface means fingers easily glide when tracking or gesturing. And the smoothness seems to translate to the software as well: scrolling in apps or two-finger swiping seems to track the movements as perfectly as I could ask for.

It's a **hinged design**, meaning it physically clicks at the bottom but gets progressively harder to click as you move up the surface—until it's impossible near the top. This is pretty standard right now for trackpads, with only Apple (to my knowledge) employing the crazy haptic engine needed to get perfectly even clicks across an entire surface. I _mostly_ just use tap-to-click instead of pressing for the actual click, but it is nice to have the physical click as an option. It does support area-based physical clicking if you want to enable that in your OS, i.e. so physically clicking near the bottom-right corner would right-click. I prefer just leaving it set to two-finger clicking for right-click.

#### **Display**: Awesome for loDPI

The display is 1920×1080 at 14-inches, meaning it falls into the loDPI camp. It's a great physical size and resolution combination, though—out of the box at 1× scaling, everything feels like the right physical size, if only slightly small.

<aside markdown="1">
I'm a bit of a nut when it comes to display size and resolution combinations as it relates to the physical size of the UI, integer scaling, loDPI/HiDPI. etc. Like seriously—I've written a whole [blog series](https://blog.elementary.io/what-is-hidpi/) on it, and even developed and maintain [an app called Dippi](https://appcenter.elementary.io/com.github.cassidyjames.dippi) to help people better understand it and make better purchasing decisions.
</aside>

While I prefer the look and crispness of HiDPI, it does come with the trade-off of much higher power usage and thus lower battery life. While the NVIDIA card (and probably the integrated Intel graphics) could handle something like a 3840×2160 display (1920×1080@2× for the same real estate but twice the detail), I can respect the decision to stick with loDPI here—especially given the relatively small internal battery. And for a loDPI display, it looks _great_. Colors seem accurate, it can get sufficiently bright, and the matte finish combined with no discernible layers on the display surface mean it often looks like the image is printed right onto the surface of the display.

<figure markdown="1">
![Hinge](/images/{{ page.url }}/hinge.jpg)
<figcaption>Photo provided by Slimbook</figcaption>
</figure>

The display hinge actually opens fairly widely—which is really nice for working in a variety of situations—and the top and side bezels are nice and modernly slim. I also definitely prefer this matte finish to glossy glass touch displays, like the one on [my Dell Precision 5530](/5530). If the Slimbook Pro X were HiDPI, its display would be what I would consider to be perfect.

#### **Webcam and IR camera**: Interesting!

The webcam itself looks fine; mine has an issue with it not sitting flush inside the display bezel (almost certainly related to it being a refurbished model), so it sometimes gets out of focus or points up awkwardly. But when working as designed, it seems pretty standard for a laptop webcam: perfectly serviceable for video calls.

What is much more interesting is the infrared "face unlock" camera. It appears to be designed for Windows Hello, but with some pre-installed software, you can set it up to work with Linux via PAM. It was easy enough to set up, and while the setup software itself could be designed much better, it works! It's pretty cool to be able to log in automatically when I am in front of the device, or to authenticate any admin tasks. There is some better integration work I'd love to do here with elementary OS, though, like still requiring active consent via a button press for admin tasks.

I have _no_ idea how secure it is, though—I would recommend enabling full-disk encryption to keep your data safer at rest, and treating this as a convenience for when you're physically in front of your machine.

#### **Ports & connections**: Needs more USB-C/Thunderbolt

Ports-wise, it's pretty well-equipped. I may be weird here, but in my opinion, _too_ well-equipped—or at least not equipped in my ideal way. I don't need Ethernet (with a damage-prone flap) on a laptop, I don't need three USB-A ports (including one USB 2.0 port), I don't need a Kensington lock, and I definitely don't prefer a barrel-style charger. And yet, here's what you get:

<figure markdown="1">
![Ports](/images/{{ page.url }}/ports.jpg){: .card}
<figcaption>Photo provided by Slimbook</figcaption>
</figure>

##### Left Side

- Kensington lock
- Ethernet, with plastic flap/door
- USB 2.0 Type-A
- USB 3.1 Gen 1 Type-A
- Combination headphone/mic jack

##### Right Side

- Barrel charging port
- Full-size HDMI
- USB 3.1 Gen 1 Type-A
- USB 3.1 Gen 1 Type-C (but **not Thunderbolt**)

This is where I'm actually fine with Apple's and more recently Dell's direction on their laptops: give me _a bunch_ of USB-C/Thunderbolt ports, let me charge from all of them, and I'll figure the rest out. I already use a bunch of USB-C chargers and connections for my other devices, and I wish I could use the same ones here. For example, my Dell laptop came with a USB-C to Ethernet adapter. If I used Ethernet at my desk, I could just leave that attached to the Ethernet cable and plug it into one of many USB-C ports. Or I could plug in my Thunderbolt dock/display and have it connect to everything else. Or I could plug in my USB-C headphones that came with my phone. Or I could use the USB-C SD card reader that I also use with my phone and other devices.

But when a laptop only comes with one USB-C port—especially when it's not Thunderbolt, you're stuck with all these "universal" devices that are competing for that one port. Sure, I could plug in an HDMI cable if I needed to, or an Ethernet cable, or three USB-A flash drives. But for me, the versatility of having multiple USB-C/Thunderbolt ports would be much higher.

All that is to say: the ports and expansions here are _fine,_ though I do really miss having Thunderbolt, more USB-C, and charging over USB-C. Oh, and having the barrel charger, HDMI, and USB-C on the right is awful when using a mouse on the right side of the laptop at a desk, if you do that.

#### **Internal expansion**: Perfectly fine!

I haven't cracked this laptop open at all, and any more, I am not really one to do so. Sometimes I will upgrade RAM or replace a disk with a larger/faster model, but lately, laptops have been good enough for me.

<figure markdown="1">
![Internals](/images/{{ page.url }}/internals.jpg){: .card}
<figcaption>Photo provided by Slimbook</figcaption>
</figure>


According to [Slimbook's website][pro-x], the Slimbook Pro X can house up to two M.2 drives, seemingly up to 4 TB total. It can also accept up to 32 GB 2666 MHz RAM, though I'm not sure how many physical slots it has, or how mine is configured.

Without the space for 2.5-in drives, I seriously wonder why the laptop is so light—and why its battery isn't larger. I may have to crack it open eventually after all, just to take a peek.

<aside markdown="1">
**Edit:** I found the above image on the Slimbook website. You can judge its internal design for yourself! Personally, I wonder what that space is on the upper-right side.
</aside>

### Software

I don't plan to dive deeply into the software, but for completeness, here are some notable bits of how it shipped to me:

#### elementary OS

Yep, it came with elementary OS! It was just a few updates behind the latest image, too—and that could easily be explained by those updates being pushed out after it was imaged and while it was in transit from overseas. Nice work, Slimbook! And yes, you can order it with elementary OS right from Slimbook as well.

<figure markdown="1">
![elementary OS](/images/{{ page.url }}/elementary-os.jpg)
<figcaption>Photo provided by Slimbook</figcaption>
</figure>

It was _mostly_ stock, though with a few added apps: Firefox, LibreOffice, NVIDIA tools, and some Slimbook-specific apps were installed.

<aside markdown="1">
[Video](https://twitter.com/CassidyJames/status/1273678572213813248) (Twitter)
</aside>

#### Slimbook apps

They ship a [Slimbook Battery](https://slimbook.es/en/tutoriales/aplicaciones-slimbook/398-slimbook-battery-3-application-for-optimize-battery-of-your-laptop) app which appears to be a front-end to TLP, but doesn't really integrate into elementary OS at all (i.e. via the power indicator). I have not played with this too much, as I believe the device should ship with sane defaults, and I don't really want to fiddle with it.

<aside markdown="1">
[Video](https://twitter.com/CassidyJames/status/1273679991708938240) (Twitter)
</aside>

There is also a [Slimbook Face](https://slimbook.es/en/tutoriales/aplicaciones-slimbook/400-slimbook-face-biometric-recognition-and-dont-enter-more-passwords) app which is the front-end for the IR camera unlocking. It looks like it's a light fork of the more well-known [Howdy app for Windows Hello cameras](https://github.com/boltgolt/howdy).

<aside markdown="1">
[Video of enrollment](https://twitter.com/CassidyJames/status/1273681909709541376) and [video of usage](https://twitter.com/CassidyJames/status/1273682467921162240) (Twitter)
</aside>

There are also a number of CLI utilities that come with the install that I haven't dived into too much, though I found out I need to use `prime-select` to change between the NVIDIA or Intel GPUs.

---

I think that's it! Did I miss anything? Hit me up on social media or via email, conveniently all linked below.

[pro-x]: https://slimbook.es/en/pro-x-en
