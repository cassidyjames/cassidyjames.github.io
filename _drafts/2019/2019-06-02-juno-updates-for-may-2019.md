---
title: 'Juno Updates for May, 2019'
description: New features and fixes
date: '2019-06-02T18:51:07.426Z'
author: peteruithoven
image: https://cdn-images-1.medium.com/max/1600/1*F9sb5F77mvj_YPxpXdWSfA.png
tags:
  - updates
  - juno
---

It’s time for another monthly updates post! Read ahead to find out what new features and fixes came as updates to elementary OS during the month of May.

## Bluetooth Indicator

This month saw several improvements to the Bluetooth indicator! We now properly show device names that include the “&” character and we sort devices by name to make sure their location in the list remains consistent and easy to find. When a device doesn’t report its type (like “mouse”, “keyboard”, “speaker”, etc) we now fall back to the Bluetooth icon. Last but not least, we’re now showing a connection status badge per device, making it easier to see which devices are in what state.

<figure markdown="1">
![Devices now have status badges for quickly glancing their state](https://cdn-images-1.medium.com/max/800/1*F9sb5F77mvj_YPxpXdWSfA.png){: srcset="https://cdn-images-1.medium.com/max/1600/1*F9sb5F77mvj_YPxpXdWSfA.png 2x"}
<figcaption>Devices now have status badges for quickly glancing their state</figcaption>
</figure>

## Applications Menu

Searching for actions just got a whole lot easier! We’ve added some keywords to system actions so that searching for “reboot” will show the “Restart” action, etc.

![](https://cdn-images-1.medium.com/max/800/1*Qgpslfjw_aU8XCoyGHu0Ng@2x.png){: srcset="https://cdn-images-1.medium.com/max/1600/1*Qgpslfjw_aU8XCoyGHu0Ng@2x.png 2x"}

We’ve also made it so actions can be found using their English name, even when your language is something other than English. We hope this helps with discovery for bi-lingual users!

We’ve also addressed an issue where sometimes opening the Applications menu would freeze the whole panel and we’ve improved keyboard navigation so that you can switch to the next page of icons no matter what row your cursor is on.

## Files

It’s now possible to cherry pick files using just the keyboard by holding down `Ctrl + Alt`  and using a combination of arrow keys to move the cursor, the `+`(or `=`) key to select items and the `-` key to deselect items.

![](https://cdn-images-1.medium.com/max/680/1*t7SBZIpI-LlN6qR2LOUkBg.gif)

## Window Management

Several visual annoyances were addressed like an animation glitch when a window would be “moved” to the same workspace as you switch to the next workspace, removing the keyboard selection indicator when dragging a window in the Multitasking View, and fixing the padding of the dock in the `Alt + Tab` app switcher.

We’ve also addressed an issue where window menus could become out of sync with the window; now options like “Always on Top” always reflect the correct current state of the window.

Finally, a small productivity improvement: you can now always use the `Enter` key to enter a workspace when in the Multitasking View, whether or not that workspace contains a window.

## And More!

We addressed an issue where individual app notification settings were not being applied, like disabling notification sounds or notification bubbles.

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest.

