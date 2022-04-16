---
title: "AppCenter Spotlight&#58; Spice-Up"
description: "Create simple and beautiful presentations"
author: cassidyjames
date: 2017-06-19T17:49:25.256Z
image: /assets/images/appcenter-spotlight-spice-up/1zfLehV_mh-bsuHc4o4by9w.png
tags:
  - "appcenter-spotlight"
  - "elementary-os"
  - "open-source"
  - "linux"
  - "presentations"
---

<figure markdown="1">
![](/assets/images/appcenter-spotlight-spice-up/1zfLehV_mh-bsuHc4o4by9w.png)
</figure>

We took a brief look at **Spice-Up** — the presentation app from Felipe Escoto — back in [the very first AppCenter Spotlight](https://medium.com/elementaryos/appcenter-spotlight-beta-testers-75412fe42302). But with its 1.0 release, today I wanted to dive a little more in depth with Felipe himself about the app, its recent major updates, and publishing on AppCenter.

But first, let me introduce Felipe! He’s a software and devops engineer who works at [Wizeline](https://www.wizeline.com/) and contributes to elementary OS. He lives in Guadalajara, Mexico. When not developing, in school, or working he enjoys spending time with his girlfriend and gaming.

<figure markdown="1">
![On elementary OS? Hit the button to get Spice-Up.](/assets/images/appcenter-spotlight-spice-up/1-6S-aaSFzwqMxNBKu1KoqQ.png)
<figcaption markdown="1">
On elementary OS? Hit the button to get Spice-Up.
</figcaption>
</figure>

## The Story of Spice-Up

The origin of Spice-Up goes back four years: Caleb Riley — perhaps better known as [spiceofdesign](https://spiceofdesign.deviantart.com/) on DeviantArt — created a [design concept](https://spiceofdesign.deviantart.com/art/New-Presentation-Concept-401767854) for a presentation app. Felipe came across it around a year later, but was just starting to program and didn’t feel like he could build it with his existing knowledge. He did, however, start contributing to elementary OS and improving his skills.

<figure markdown="1">
![“[New Presentation Concept](https://spiceofdesign.deviantart.com/art/New-Presentation-Concept-401767854)” by [spiceofdesign](https://spiceofdesign.deviantart.com/)](/assets/images/appcenter-spotlight-spice-up/1q276XrNjVhYB65UjVEzNcQ.png)
<figcaption markdown="1">
“[New Presentation Concept](https://spiceofdesign.deviantart.com/art/New-Presentation-Concept-401767854)” by [spiceofdesign](https://spiceofdesign.deviantart.com/)
</figcaption>
</figure>

After a few more years of experience, Felipe felt it was time to tackle the app following the concept as closely as possible. He named it Spice-Up in reference to *spiceofdesign* and started working on it. Development really took off, however, when we started beta testing AppCenter and provided the AppCenter Dashboard for third-party app submission.

<figure markdown="1">
![Real screenshots of Spice-Up today](/assets/images/appcenter-spotlight-spice-up/1T02YukrxXU2h9I_JvC5jCg.png)
<figcaption markdown="1">
Real screenshots of Spice-Up today
</figcaption>
</figure>
> # With AppCenter, I can just press a button and my app can reach the hands of many!
> Before AppCenter, developers basically had to rely on people sharing their apps, or having some social media presence to get those apps out into the world. Then, users would have to run commands on their terminal just to be able to install it. Now with AppCenter, I can just press a button and my app can reach the hands of many! It’s incredible being able to have that reach and impact where it just didn’t exist on the Linux desktop before.

## Recent Updates

Since his first release, Felipe has added some pretty awesome features. Spice-Up now has its own file format, embeds images within presentations (meaning you can share them with others), shows recent presentations right on the welcome screen, has better shape controls, and more! All of these features have been pushed out through AppCenter over the past few months.

### Controller Support

One feature that I was stoked about when I saw the update was **controller support**; Spice-Up can now be controlled with a USB or Bluetooth controller, including a handy little dialog that lets you set which buttons on your controller start and stop the presentation, navigate through slides, and set jump points. It’s all very slick and a really useful feature instead of requiring dedicated presentation clicker hardware.

> During the Denver AppCenter sprint we connected a Switch controller to Dan’s computer, and the system picked up the controller immediately without any issues. Then later I had to do a presentation for a school project, and my teacher had one of those clickers to move through the slides. Talking with my friends, we thought that it would be cool if we could just use the Switch’s controller to move through the presentation. So with a bit of research I was able to easily add support for all controllers.

As the proud owner of an 8bitdo NES30 Pro controller, this blew my mind. I paired it with my computer over Bluetooth and as promised, Spice-Up instantly recognized my controller and worked with it of the box. I also tested a Dualshock 4 over Bluetooth, an iBuffalo USB controller, and a cheap USB SNES-style controller from China and they all worked perfectly.
> # A shining example of open source development.

The core controller functionality comes from an open source Vala library called [LibGamepad](https://github.com/meghprkh/libgamepad), which Felipe used for the interaction with gamepad hardware. He was able to do this thanks to the work from [Megh Parikh](https://github.com/meghprkh) on the Vala library as well as the crowdsourced [GameControllerDB](https://github.com/gabomdq/SDL_GameControllerDB) from the [SDL project](http://libsdl.org/). It’s a shining example of open source development and being able to build on the work of others instead of having to re-invent the wheel.

### Image Improvements

One thing that’s gotten consistently better with updates is image handling. Images are now included within the presentation file, enabling easier sharing and management. You can also now open an image to edit in your favorite image editor from within Spice-Up, and it automatically replaces it when saved. Lastly, you can just swap out images right from within the app (in case of a new version or one that was edited elsewhere). Put together, these updates greatly improve working with lots of images in your presentations.

### Templates

Templates was one of the most often requested features, and with his latest update, Felipe is delivering. Spice-Up now ships with a number of default templates that appear on the Welcome screen alongside recently edited presentations. They’re well designed and make throwing together a new presentation a lot quicker and less fiddly.

## Future Plans

Spice-Up just hit 1.0 and is definitely under active development, and there’s a lot more Felipe would like to work on for upcoming releases: additional shapes (like triangles and arrows), opacity for objects, and animations/transitions are high on his list.

When I asked about his broader plans for Spice-Up, Felipe was fairly ambitious — which I totally respect. He wants to make Spice-Up a killer app, and hopefully attract people to elementary OS from other platforms in the process:
> My end goal is to make Spice-Up the de facto presentation app for elementary OS, and make it so a lack of an excellent presentation app can no longer be an excuse to avoid the platform.

That sounds good to me. :)

## Get Spice-Up

Spice-Up is [available on AppCenter](https://appcenter.elementary.io/com.github.philip-scott.spice-up.desktop) today **for free**. Its source code is also openly licensed and [available on GitHub](https://github.com/Philip-Scott/Spice-up).

<figure markdown="1">
![On elementary OS? Hit the button to get Spice-Up.](/assets/images/appcenter-spotlight-spice-up/1ADgWkM_oUORFN3JKmogp1g.png)
<figcaption markdown="1">
On elementary OS? Hit the button to get Spice-Up.
</figcaption>
</figure>

## More from Felipe

In addition to Spice-Up, Felipe develops [Notes-Up](https://appcenter.elementary.io/com.github.philip-scott.notes-up.desktop), the markdown notes manager, and [Wallpaperize](https://appcenter.elementary.io/com.github.philip-scott.wallpaperize.desktop), an applet to make beautiful wallpapers from any smaller image. Both are available for elementary OS in AppCenter.

You can also visit [his website](https://philip-scott.github.io/), follow him on [Twitter](https://twitter.com/philip_scott_), check out his [GitHub profile](https://github.com/Philip-Scott), and circle him on [Google+](https://google.com/+PhilipScottFE).

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS and AppCenter, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*