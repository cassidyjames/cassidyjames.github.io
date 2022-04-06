---
title: What's (Still) Up With Window Controls?
author: danrabbit
tags:
  - design
---

In my original post, [“What’s Up With Window Controls?”](/whats-up-with-window-controls), I outlined some of the things we were thinking about window controls in elementary and the beginning of an experiment. As of now, we’ve been running that experiment for about a full year. So let’s talk about it.

## Setting the Stage

The traditional window controls available to us are Close, Maximize, and Minimize. These controls have been available in Windows, Mac OS, and Free desktops for years. But recently we’ve seen a big shakeup happening: Ubuntu decided to switch their controls to a more Mac-like layout; GNOME only has close by default; Windows 8 apps don’t appear to have window controls; Mac OS added a new “Fullscreen” button; and new super-popular “mobile” desktops like Android and iOS are taking over on phones and tablets that also forego any sort of window controls. Maybe with all this forward thinking around us, it’s time to look at something we take for granted and see if the desktop can’t be a better place.

## What Got Me Thinking

![Windows XP window buttons](/images/whats-still-up-with-window-controls/xp.png)

Last Thanksgiving, I went up to visit my grandparents at their rural California ranch. They’re not technical people, but they need technology to be able to stay in touch with their family. They own a desktop PC with Windows XP (hooked to the TV in the living room), a netbook with Windows 7, Android phones, and an iPad 2. I noticed that my grandfather had opened a web browser on the TV, minimized it when he was finished, then opened a new instance of the web browser later. He had upwards of 12 separate web browser windows open and had no idea. For most of us, it can be fairly obvious when multiple windows are open and sucking up system resources (especially with a very explicit taskbar like the one in Windows XP), but this information was lost on a user who only understood that clicking the “-” made the app go away and double-clicking the app icon on the desktop is what made the app show up again.

## Minimize vs. Close

Essentially, what I came to realize (again, read [“What’s Up With Window Controls?”](/whats-up-with-window-controls)) was that the minimize button is asking users to do manual memory management. Matthew Paul Thomas (aka MPT) from Canonical wrote a [great post about the same problem](https://ubuntu.com/blog/quit). Our apps can be smarter than that: when you close the window, Noise won’t stop playing music; Scratch automatically saves your work so that you don’t lose anything; Midori saves all the webpages you were previously viewing; soon, Geary won’t stop checking for new mail; and all of these apps open instantly when you click their icon to reopen them. We’re building a platform where minimize is no longer necessary. You can just close a window and not worry about it.

## Two Buttons, Opposite in Function

![elementary OS window buttons](/images/whats-still-up-with-window-controls/controls.png)

This new two-button situation, which we've been testing for over a year, has been working fantastically. We avoid having multiple buttons that appear to do the same or similar things (Minimize vs Close and Maximize vs Fullscreen). No longer is it possible to miss and accidentally close a window you intended to maximize. We keep with our HIG by having more frequently used buttons on the left (in RTL languages, the layout is flipped). And we arrive at an arguably unique layout that makes our platform distinct from other platforms.

## Small Concessions

We recognize that a world full of smart self-managing apps is still in progress. This is a transition phase. So for those who really need to have minimize in their lives still, we’ve left a few vestiges for you. If you click the icon of an open window in the dock, the window will minimize. In this way, the dock icon becomes a “hide/show” type button. You can also still use a secondary-click (right mouse button or two finger tap) on the window title and select “minimize”. And of course, if you’re a little more of an advanced user, you can still use a tool like dconf to re-organize the window controls in any way you choose. I would encourage you also to contact the developers of your favorite apps and let them know that you want their apps to be smart about when to close or quit and what to remember the next time you open them.
