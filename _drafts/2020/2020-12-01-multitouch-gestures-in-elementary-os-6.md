---
title: "Multi-touch Gestures in elementary OS 6"
description: "Our swipiest operating system ever"
author: danrabbit
image: /images/multitouch-gestures-in-elementary-os-6/multitasking.png
tags:
  - early-access
  - odin
  - touch
  - ux

mastodon: https://mastodon.social/@elementary/105307450969775384
reddit: https://www.reddit.com/r/elementaryos/comments/k4whvv/multitouch_gestures_in_elementary_os_6elementary/
twitter: https://twitter.com/elementary/status/1333911042808827909
---

One of the most hotly requested features for years has been to have multi-touch gestures in elementary OS, and with 6.0 I'm excited to say that we will deliver. Like the [dark style preference](/dark-style-progress/), delivering a great multi-touch experience is a little more complicated than it seems on the surface. There have been some 3rd party tools to detect touchpad gestures and then trigger actions after-the-fact, but it wasn't until recently that we've had the technical ability to provide smooth, responsive animations that track 1:1 with your finger movement across a touchpad or touch screen.

## Window Manager Gestures

We've had the great pleasure of working with [José Expósito][jose], the author of Touchégg, on our window manager gestures. In elementary OS 6, we use Touchégg Daemon behind the scenes to capture input events and communicate them to Gala, our window manager.

<figure markdown="1">
![Multitasking View](/images/{{ page.slug }}/multitasking.gif)
<figcaption>1:1 multi-touch gestures used for Multitasking View</figcaption>
</figure>

At the moment, we're reviewing two proposals: one for the multitasking view and another for switching workspaces directly. Both of these use 1:1 responsive, finger-tracking gestures that can be peeked or canceled at any time. When special animations aren't available in the window manager, such as when tiling, we fall back to animations built in to Touchégg.

<figure markdown="1">
![Switching workspaces](/images/{{ page.slug }}/workspaces.gif)
<figcaption>1:1 multi-touch gestures used for switching workspaces</figcaption>
</figure>

We're still discussing exactly what the default configuration should be, but work is already underway on System Settings so that you can choose whichever gestures feel most comfortable for you—or choose none at all.

<figure markdown="1">
  <img alt="Gesture Settings" src="/images/{{ page.slug }}/settings.png" width="990" height="686" />
  <figcaption>Gesture configuration in System Settings → Mouse & Touchpad</figcaption>
</figure>

If you'd like to support José's work on multi-touch gestures for elementary OS 6—and other Linux-based operating systems—you can do so with as little as $2/mo on [GitHub Sponsors][jose].

<div style="text-align: center" markdown="1">
[Sponsor José on GitHub][jose]{: .button}
</div>

[jose]: https://github.com/sponsors/JoseExposito

## App Gestures

In order to make gestures work globally, previous solutions have opted to emulate keyboard shortcuts after a gesture was completed. This is effective, but animations—if they're provided at all—don't feel connected to users' input. Instead, in elementary OS 6 we're making use of Handy, a library originally developed for [Purism](https://puri.sm/) and their Open Source phone platform. This means that each app and desktop component must be updated to support gestures individually, which is ultimately a lot more work but a vastly superior experience.

### Paging

<figure markdown="1">
![AppCenter Screenshots](/images/{{ page.slug }}/appcenter.gif)
<figcaption>Paging screenshots in AppCenter</figcaption>
</figure>

In elementary OS 5, we used Handy to add gestures for switching pages to the applications menu and during onboarding. So far, in elementary OS 6 this has been extended to the Date & Time indicator to switch months in the calendar view and to AppCenter to switch between screenshots. This makes use of the [Handy Carousel](https://valadoc.org/libhandy-1/Hdy.Carousel.html) widget which also provides a smooth transition between page indicator dots when needed. Our plan is to provide gestures any time pages are used and we're already tracking issues for Calendar and more.

### Navigation

Another place we've implemented gestures is while navigating between panes or views. This is using the [Handy Deck](https://valadoc.org/libhandy-1/Hdy.Deck.html) widget which contains a concept of next and previous views and shows views in a neat stack. Swipe-to-go-back is now implemented in elementary OS 6 in Feedback, in the Installer and Initial Setup views for configuring locale variants, and in Systems Settings → Keyboard when adding new layouts. Gestures are also now available natively in WebkitGtk and therefore Epiphany also provides swipe navigation for both back and forward.

<figure markdown="1">
![Keyboard Layouts](/images/{{ page.slug }}/keyboard-layouts.gif)
<figcaption>Navigating when adding keyboard layouts in System Settings → Keyboard</figcaption>
</figure>

Some more complex navigation situations are in progress such as when navigating between views in System Settings itself and in AppCenter. There are also open issues for navigating in Files and Photos, but development hasn't yet started there. Working with Handy Deck in these situations has exposed some inefficiencies in the way navigation was implemented previously so not only are we implementing a new feature, but the underlying code is being made more robust and optimized.

### Other

We're also looking into other uses for gestures as popularized in mobile operating systems, such as swipe to dismiss. In elementary OS 6, you can now dismiss notification bubbles from the desktop with a swipe, and remove them from the notifications indicator by swiping in either direction as well. We haven't implemented swipe-to-dismiss in other types of lists yet, but we're open to suggestions! You can follow along with our [progress and plans on GitHub](https://github.com/orgs/elementary/projects/61), as well as file feature requests.

<figure markdown="1">
![Notification Center](/images/{{ page.slug }}/notification-center.gif){: width="399" height="672" }
<figcaption>Notification bubbles being swiped away in the new Notification Center</figcaption>
</figure>

A quick note about pinch-to-zoom and rotate, at the moment we don't yet have a way to implement these more complex gestures. We may have to wait until we can provide GTK4 in a Flatpak or for elementary OS 7 before it becomes possible to provide gestures for transforms.

Lastly, I just wanted to say thank you to [Alexander Mikhaylenko](https://twitter.com/alexm_gnome) for being available for questions and feature requests as we implement Handy in our apps. He's been an essential resource and very open to improving Handy for our use cases.

## Get Early Access

If you're excited by what you read here and want to get your hands on the developer preview of elementary OS 6, you can! GitHub sponsors at the $10/mo or above tier get access to our [daily builds server][builds] where you can test the latest and greatest experimental builds, including builds for Pinebook Pro. Subscribing helps us fund the development of elementary OS and brings us that much closer to delivering the final product.

<div style="text-align: center" markdown="1">
[Get Early Access Builds][builds]{: .button}
</div>

[builds]: https://builds.elementary.io
