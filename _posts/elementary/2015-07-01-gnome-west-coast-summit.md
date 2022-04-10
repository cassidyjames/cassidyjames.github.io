---
title: GNOME West Coast Summit
updated: 2015-07-01
image: https://66.media.tumblr.com/c632632fc9f7abf9170af2ac18393975/tumblr_inline_nqtvig9bYv1r2vnpt_1280.jpg
legacy: true
tags:
  - event
  - gnome
  - hidpi
---

![Whiteboard agenda](https://66.media.tumblr.com/2057fbee88ed339478361ff6b8370e60/tumblr_inline_nqturoVMxI1r2vnpt_1280.jpg)

Daniel, Cody, Avi, and I (Cassidy) just left San Francisco and the [GNOME West Coast Summit](/were-going-to-westcoast-summit). It kicked off Monday morning at 9 AM at [Endless](https://endlessos.com/), makers of the recently Kickstarted Endless computer.

## XDG-App and OSTree

![Cody working on a laptop](https://66.media.tumblr.com/a27b8116a0f473551238ebaa04d96fc8/tumblr_inline_nqtvn1SqTe1r2vnpt_1280.jpg)

Monday, we were **given a demo of XDG-App**, a way of sandboxing apps and providing known runtimes to app developers. Dan Nicholson, a developer at Endless, set aside time to sit down with Cody to explain **the benefits of [OSTree](https://ostree.readthedocs.io/en/latest/)**, a filesystem versioning control system that XDG-App uses. XDG-App and OSTree are both things we’re looking forward to when they are ready.

## HiDPI

![A HiDPI laptop running elementary OS](https://66.media.tumblr.com/ca74662c9ce25d8abb47df139d7ab92a/tumblr_inline_nqtv93Xia51r2vnpt_1280.jpg)

elementary OS doesn’t fully support HiDPI displays right now, but it’s **going to get better** soon. Daniel worked with GTK developer Alexander Larsson (and a HiDPI display) to investigate how to get our icons working perfectly with @2x pixel-doubling. We’re testing [an update to the icon set](/whats-up-with-hidpi-icons/) that should make icons draw beautifully crisp and resolution-independent, exactly how GTK itself is drawn. We also discovered several bugs in the way we’re using icons across elementary apps and have filed the appropriate bugs. Fixes should be coming soon!

## Mutter

![Jasper and Cassidy whiteboarding](https://66.media.tumblr.com/9e51806ead48621d5790d5942f1a66f3/tumblr_inline_nqtve11NbM1r2vnpt_1280.jpg)

Tuesday, Avi, Cody, Dan, and I had a session with several GNOME developers and **Mutter developer Jasper St. Pierre** regarding building shells on Mutter. As you may know, our window manager/compositor Gala is built on LibMutter, the shared backend that powers GNOME Shell. Jasper wanted to get us together to collaborate on features in Mutter itself that make all of our lives easier and prevent duplicated effort. We had a very productive session and now our Gala developers are working more closely with Jasper. He is also investigating several items we brought up with fullscreen and shadow rendering, plus he is rewriting tiling window support to allow for more specific and powerful shell-specific user experiences. We look forward to working more closely with Mutter to help make elementary OS, GNOME, and other desktop shells better.

## GTK Improvements

![GTK discussion](https://66.media.tumblr.com/e8d7b14b071986f0c3c22467859f1342/tumblr_inline_nqtvg9XhPe1r2vnpt_1280.jpg)

Daniel and I **worked with GTK developers** Matthias Clasen and Cosimo Cecchi to discuss improvements to GTK. We decided to add a height property to GTK Switches which should give GTK stylesheet designers more control over how switches appear. Specifically for elementary OS this means we can move away from using images for switch styling and fully use CSS. We also discussed improvements to entry placeholder text: it will be able to be styled by the GTK stylesheet, giving us not only the ability to show the placeholder text when the entry is focused (but empty), but also the ability to use any CSS styling such as font families/styles, color, and animations.

## Builder

![Christian showing Dan, Cody, and Avi GNOME Builder](https://66.media.tumblr.com/7e1a10b552dcf72814eb4ed137976f0b/tumblr_inline_nqtvhnuP9W1r2vnpt_1280.jpg)

We spent a lot of time with **Christian Hergert, the developer behind GNOME Builder**. He demonstrated Builder and its awesome progress. It’s already an extremely impressive IDE for GTK development and we are very interested in making it available for elementary OS. We also discussed the current state of build systems, including cmake (which we use for elementary OS) and automake. Our takeaway: the current state is somewhat of a mess, but each have their benefits. Builder will support automake out of the box and Christian isn’t opposed to accepting cmake support if someone proposes the code.

## Thank you!

![Sri](https://66.media.tumblr.com/e2a57e12830f3f22b95fdecad0c558af/tumblr_inline_nqtvjsYA8A1r2vnpt_1280.jpg)

First of all, a huge thank you goes out to Sriram Ramkrishna and Endless Mobile. Sri, a GNOME Board Member and community organizer, helped get everyone together in one venue—Endless Mobile’s San Francisco office—to collaborate on several elements of the stack. Endless provided an awesome meeting and hacking space and was extremely welcoming.

![Cool wall at Endless](https://66.media.tumblr.com/c632632fc9f7abf9170af2ac18393975/tumblr_inline_nqtvig9bYv1r2vnpt_1280.jpg)

We were able to attend GNOME West Coast Summit because of the support we’ve been getting from our users, fans, and Patrons. Several times we had breakthroughs that would have made the entire trip worth it on their own: building relationships with GNOME, GTK, and Mutter developers; making strides with HiDPI; hammering out the UX of potential tiling window features; wrapping our heads around XDG-App and runtimes; etc. If you want to help us continue attending summits and meetups like West Coast, you can always [get involved with funding elementary](https://elementary.io/get-involved#funding).

GNOME and GTK are important projects for elementary OS and we want to see them continue to mature and improve. Please also consider [Donating to GNOME](https://www.gnome.org/friends/). Funding is necessary for good infrastructure, new hardware, and getting designers and developers to meetups like West Coast Summit.

Lastly, working with GNOME has been an incredibly valuable experience. Increased collaboration between the two projects will help improve each individually and the greater open source ecosystem as a whole.
