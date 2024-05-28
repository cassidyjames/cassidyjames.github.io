---
title: Recovering the BIOS on a Dell XPS 13 (9310)
description: I've had to do this too many times… here's my guide
updated: 2024-05-28
comments:
  id: 112520487387063066
---

It seems like every few months my work Dell XPS 13 just… dies. Or at least, it seems like it for a few minutes, making me panic about being able to do my work and wondering about backups. And then I remember that it just likes to play dead for no reason—maybe I recently did a BIOS update, maybe I had to open its chassis for some reason (like a jittery trackpad… another blog post I need to write), maybe the battery was totally discharged, or maybe it just wants to troll me. Idk. But it happens more regularly than it should.

The symptoms are more or less the same:

1. It doesn't turn on

2. If it does turn on (e.g. after leaving it plugged in for a while and/or holding the power button), I get a Dell logo and some blinking lights

3. If I disconnect the battery and try to boot up, I get other blinky lights and/or an exciting RGB rave on the display

4. The BIOS is just… inaccessible

Perhaps the most frustrating thing about this situation is that Dell's own documentation is _terrible_. They lean too heavily on forums with bad advice, their support site is hard to search, and different documentation will tell you to do different things for no discernible reason. The [service manual](https://www.dell.com/support/manuals/en-us/xps-13-9310-laptop/xps-13-9310-service-manual/) is hard to find and has some useful information, but then too often tells you to contact their technical support—who will refuse to help if it's out of warranty.

I last documented [how to recover from this on Mastodon](https://mastodon.blaede.family/@cassidy/111530500634769622) when it happened to me in December, but surprise, it happened to me again! At this point I figured I'd make it more easily searchable/findable by documenting in a blog post. Here goes.

## Charge the Battery

First, if your Dell XPS is failing to boot, try plugging it into power for an hour or so, then try booting after that. It’s possible the battery is just low and the laptop is refusing to boot—I've had this more than once, and the laptop frustratingly does a bad job of telling you what's happening—and it seems to require being charged up more than just a little bit to turn back on after this happens.

I don't know why you can't just connect power and boot up with a dead battery; I guess that would be too easy, and Dell prefers you to waste an hour without being able to use your computer. Neat stuff!

If you've done this and still just get the Dell logo (and maybe some blinky lights from the battery/status LED strip below the trackpad), carry on. But note that you need at least 10–15% battery charge to do the BIOS recovery, anyway, so don't skip this first step.

## Discharge (a.k.a. "flea power release")

I’m not sure how critical this is, but several versions of [Dell's documentation](https://www.dell.com/support/manuals/en-us/xps-13-9310-laptop/xps-13-9310-service-manual/flea-power-release) told me to do it.

1. Unscrew the bottom panel (with a T5 torx bit)
2. Disconnect the internal battery cable
3. Hold the power button for 30 secs

Yes, you will look like a fool doing this with the laptop propped up on its display so you can reach things. Next:

0. **Important!** Keep the laptop display open until told otherwise! The XPS 13 9310 (and probably newer) power on when the display is opened, which will undo your hard work

1. Re-connect the internal battery cable

2. Carefully snap the bottom panel on—I'm not 100% sure this is needed, but I _think_ it is because there's a hardware tamper switch that tells the computer when the bottom panel is off

**Remember to keep the display open** this whole time, too—I know, it's a pain.

## Download the Latest BIOS Version

3. Search Dell’s site for your model and find the latest BIOS file; for my XPS 13 9310 (not 2-in-1), it's [here](https://www.dell.com/support/home/en-us/product-support/product/xps-13-9310-laptop/drivers).

**Don't just Google for the model/BIOS**, because Dell's support site has terrible SEO/tagging. Instead, head to the Dell website, go to the support section for drivers and downloads, and search for your specific serial number/model to find the very latest BIOS version.

Download the latest BIOS file in the Recovery Image (.rcv) format if offered, otherwise rename .exe to BIOS_IMG.rcv.

Format a USB flash drive as FAT32, then drop the file to the root of the drive. You'll also want a USB-C to USB-A adapter handy (unless you're using a fancy USB-C flash drive).

## Recover the BIOS

**Important!** If you can’t get this step to work, repeat the previous step, trying with a different flash drive.

1. **While keeping the laptop powered off**, plug in your flash drive; again, I'm not sure how much this matters, but I seemed to only have success when using the right-hand USB port (near the power button) for the flash drive—it could just be a coincidence, but it seems to be the case for me

2. **While still keeping the laptop powered off**, hold the Ctrl+Esc keys on the keyboard

3. **While still holding the keys**, plug in your AC adapter (e.g. USB-C charger); once the Caps Lock key light lights up, release the keys

If all goes well, you should eventually get a BIOS recovery screen; **it might reboot/flash a few times before getting to this screen, so be patient**

---

Let me know [on Mastodon](https://mastodon.blaede.family/@cassidy/112520487387063066) if this worked for you, or if you have other tips. I still don't know why I have to do this every once in a while, but it's honestly making me reconsider Dells altogether. I really like the hardware, otherwise, but these sorts of issues have just been pretty common across models and years—I think for my next laptop, I'm eyeing that [Star Labs StarFighter](https://us.starlabs.systems/pages/starfighter). 👀
