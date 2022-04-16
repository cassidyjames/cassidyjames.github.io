---
title: "Redesigning Bluetooth Settings"
description: "An adventure in iterative design"
author: DanielFore
date: 2017-01-01T20:32:43.841Z
image: /assets/images/redesigning-bluetooth-settings/0fQg26LvoNOLDfZPF
tags:
  - "design"
  - "elementary-os"
  - "linux"
  - "open-source"
  - "software-development"
---

At elementary, redesigns don’t necessarily happen purely as sketches or mockups and they may not even happen all at one time. Many times, we design iteratively in code, solving a single problem at a time. Recently we built out a new, native bluetooth settings pane to replace the one we inherited from GNOME. We took this time to review some of the problems we had with the design of this pane and see how we could do better. Pictured below is the bluetooth settings pane as available today in elementary OS Loki:

<figure markdown="1">
![](/assets/images/redesigning-bluetooth-settings/0fQg26LvoNOLDfZPF)
</figure>

## Revision 2

<figure markdown="1">
![](/assets/images/redesigning-bluetooth-settings/0Bzqlemrucvf4tPCl)
</figure>

In the first couple revisions, we tackled some of our biggest problems. The most obvious one being that it was difficult to see at a glance which devices were connected and which were not. We added status bubbles like the ones we have in Network settings to make it more clear.

A more subtle change was moving the bluetooth adapter itself into the list as a header. This means we can now handle multiple adapters independently.

Something we decided to make more transparent was the “visibility” of the adapter. When you connect a new device, you need to make sure that the adapter is “visible” so that other devices can find it. This can make pairing frustrating, since it may not be entirely clear that the adapter is not visible even though it’s powered on. We decided to follow how mobile devices handle this, automatically enabling visibility while this pane is open and disabling it when the pane is closed.

## Revision 10

<figure markdown="1">
![](/assets/images/redesigning-bluetooth-settings/07WCDcG5ROGxZTrOp)
</figure>

We spent a few revisions to add back the ability to remove devices, adding tooltips to buttons, enabling translations on the new code, and some other under-the-hood changes.

We also decided to ditch the large, mostly empty view on the right and simply expand the list to the full width of the window. This means you can easily connect and disconnect any device without first having to select it in a sidebar.

There was a concern that it might be clear that we were handling visibility automatically now, so we changed the copy of the device header to explicitly call that out. We wanted to ease any fears of people coming from the old pane about how to make sure their adapter was visible.

## Revision 16

<figure markdown="1">
![](/assets/images/redesigning-bluetooth-settings/0VAEo-5NyMl2deKqG)
</figure>

Having the status bubbles made device status super glanceable, but we had some concerns. What about color blind users? What about error messaging? Are colors enough to convey the right information about any states besides “connected” and “not connected”? To cover these cases, we added status labels to the device, just like network settings. The combination of bubbles and labels means we can make the most important states (“connected” and “not connected”) glanceable but also provide clarity in case the bubble’s color doesn’t effectively communicate other device states.

## Revision 18

<figure markdown="1">
![](/assets/images/redesigning-bluetooth-settings/0GR2GQFLwLf4TKdVL)
</figure>

Another concern about clarity was that using a switch for devices meant conflating its connectivity with its power state. When we disconnect a device, we’re not actually powering that device off, like a switch implies. So instead, we felt it was much more representative to use label buttons for connecting and disconnecting devices.

## Revision 21

<figure markdown="1">
![](/assets/images/redesigning-bluetooth-settings/08ui8y_92mHeOmi2I)
</figure>

Sometimes when we connect a new device, we might want to configure settings related to that device. We may want to adjust the pointer speed of a newly connected mouse or change the balance on a newly connected soundbar. Instead of trying to shoehorn in more switches and sliders to the current pane, we decided to add a little “more” button, represented by three dots. For each device, this button will take you to a settings pane with relevant settings for that device type. In this way, we can provide helpful settings just a click away without making this pane overly complicated or duplicating settings that are provided elsewhere.

## Coming Soon

We’re stilling ironing out the last details of this new Bluetooth settings pane. We want to make sure to test thoroughly for any feature regressions and give our translation teams time to work their magic. But we’re pretty happy with the changes so far and we hope you’ll enjoy a slightly nicer Bluetooth experience in elementary OS very soon. Look out for an announcement about its availability in a future updates post!

*We’d like to say thanks again to our supporters on[ Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), those who’ve purchased a copy of[ elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to[ Get Involved](https://elementary.io/get-involved)!*