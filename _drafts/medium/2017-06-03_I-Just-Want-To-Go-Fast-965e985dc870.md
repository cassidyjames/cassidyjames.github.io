---
title: I Just Want To Go Fast
description: The state of streaming emulated games on elementary OS
date: '2017-06-03T17:59:12.192Z'
categories: []
keywords: []
slug: /@DanielFore/i-just-want-to-go-fast-965e985dc870
---

Okay first of all, if you’ve never seen anyone run Kaizo Mario World, go watch this so you can understand what I’m talking about:

Amazing Kaizo run by Dram55

This is a genre of gameplay call [Speed Running](https://www.reddit.com/r/speedrun/). It’s as fun as it is difficult, but what’s really great about running old games and rom hacks (like Kaizo) is that you can play them in a emulator. This makes setting up for streaming on services like Twitch a much less expensive proposition with much less hardware involved. (For a frame of reference, HDMI capture devices are in the hundreds of dollars range and the ones that work with Linux are on the higher end of the price spectrum). So for the purposes of this post, I’m going to assume we’re talking about streaming emulated games only.

### How this works on macOS

This is what my streaming setup looks like on macOS:

Me not being anywhere near as good as Dram

What you’re looking at here requires a few different pieces of software:

*   [OpenEmu](http://openemu.org/). Probably the best emulator you can get right now. Killer features here are the controller button mapping UI, smart state saving, and easily accessible “quick saves”. If you’ve ever played a hard game like Kaizo, being able to quickly save and reload “states” (specific, non-developer-intended save points) is essential for being able to practice difficult sections.
*   [OBS Studio](https://obsproject.com/). This is kind of the de facto standard for many streamers and podcasters. This is what’s used to create the “scene” here that involves the game’s video and audio capture (important to note those are two different things), plus my channel artwork, webcam, microphone and...
*   [Stream Labs](https://streamlabs.com/). This is what’s used for creating the Twitch chat widget and those little subscribe banners and the like. It’s important to note that what StreamLabs actually does is create little mini websites. There’s an OBS “browser” plugin that you then use to overlay these little websites onto your scene.
*   [Soundflower](https://soundflower.en.softonic.com/mac). By default, OBS isn’t able to directly grab game audio in macOS. My guess is that this is a security mechanism so that random apps can’t just say record your FaceTime calls. This app basically circumvents that and allows you to re-route audio from your output device (read headphones) to a new input device (faux microphone).

And that’s basically how streaming SNES games works on macOS. I have an [8Bitdo SNES30](http://www.8bitdo.com/snes30-sfc30/) that connects over bluetooth and an [M-Audio](http://www.m-audio.com/products/browse/category/usb-audio-and-midi-interfaces) USB audio input device that’s so old they don’t list it on their website anymore. Both of these work out of the box, it’s just magic. I’m a happy camper and I can play games.

### How This Works on elementary OS

Surprise, the hardware isn’t the problem. Both my controller and the audio interface work out of the box. You thought it was gonna be the hardware right? Nope.

What about OBS? Surely a big, complicated app like that is going to be hard to replace on Linux. Nope. OBS is available… with caveats:

*   The Good. Pulseaudio is a surprise hero because I can capture game audio just fine out of the box. No extra apps or dicking around under the hood to get this to work. This isn’t really an OBS thing I guess, but I thought I’d give OBS the point here.
*   The Bad. Browser plugin just doesn’t even exist in the Linux version. There is, however, a 3rd party browser plugin that you can get [here](https://github.com/bazukas/obs-linuxbrowser). You’re welcome Internet, I just saved you lots of googling and digging through forum posts.
*   The Ugly. OBS is still fucking Gtk2. What year is this? Y’all know that Gtk3 has been out since like the dawn of time by now right? This is a huge pain in my ass because it looks like dogshit on HiDPI.

But you know, this is tolerable. Things can be worked around. The real let down is the emulator itself. Playing hard games on [Higan](https://byuu.org/emulation/higan/) (which it seems is the only SNES emulator in the repos right now) is just not as fun. Mapping a controller is slow and painful and I’ve had to do it several times. Higan doesn’t remember your state when you close it, not even which game you were playing. As far as I can tell, there are no quick saves which means lots of waiting for death animations and no sane way to practice difficult sections in a game like Kaizo. And yeah this fucking app is Gtk2 also and it takes a HUGE performance hit on HiDPI because it’s trying to actually render the game at that size. So in order to even play the game I have to set a lower resolution on my display. Ugh.

### What I’d Like to See

Is basically better apps. It’s \[current year\], things should be Gtk3 by now. I would like an OpenEmu-quality app with a nice controller-mapping UI and quick saves. I’ve heard there’s some work in this direction with [GNOME Games](https://wiki.gnome.org/Apps/Games), but it looks it isn’t available for elementary OS users except as a Flatpak which honestly I don’t feel like investing the time into figuring out how to install. The last time I tried to install a Flatpak I spent several hours on it and got absolutely nowhere. But anyways, point is, it’s just not as fun to stream on elementary OS right now. And that’s disappointing. But hey, the future is bright. Maybe someone will come along and submit some really sweet apps to AppCenter and I can throw my money at them for being awesome.