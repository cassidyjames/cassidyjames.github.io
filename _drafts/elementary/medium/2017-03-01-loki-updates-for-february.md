---
title: "Loki Updates for February"
description: "Your favorite desktop OS keeps getting better. Here’s our monthly improvements summary."
author: DanielFore
date: 2017-03-01T17:25:48.892Z
image: /assets/images/loki-updates-for-february/04fdBkDqeOKPGTQzH
tags:
  - "elementary-os"
  - "linux"
  - "updates"
  - "open-source"
---

## A Redesigned Bluetooth Settings Pane

<figure markdown="1">
![](/assets/images/loki-updates-for-february/04fdBkDqeOKPGTQzH)
</figure>

We hinted at this redesign [in January](https://medium.com/elementaryos/redesigning-bluetooth-settings-ab30abca480f) and we’re happy to say that the brand new Bluetooth Settings pane is available as an update for our Loki users. The new pane contains niceties like glance-able status indicators, quicker access to connect and disconnect devices, and handy links to relevant settings panes for paired devices. To read more about the changes and motivations for the redesign, be sure to check out [our previous post.](https://medium.com/elementaryos/redesigning-bluetooth-settings-ab30abca480f)

## Files

We fixed an issue that would cause the zoom level of a view to reset to defaults after a reboot. If you have disabled session saving, Files will now respect that setting when being opened from another app, like a web browser. The save file dialog now also opens to the correct folder when saving downloads in Firefox. As well as fixes for CJK inputs and other internationalization fixes.

If you’re a fan of reddit, you may have seen a post on /r/linux about [an exploit](https://www.reddit.com/r/linux/comments/5r6va0/how_to_easily_trick_file_manager_users_to_execute/) that affects several file manager applications. It works by making an application.desktop file look like an image to trick you into opening a script. In this update, we’ve taken measures to ensure that this exploit won’t affect Files by opening application.desktop files with a text editor by default instead of executing and displaying their real file name instead of the provided application name.

<figure markdown="1">
![Before the fix (left) and after the fix (right)](/assets/images/loki-updates-for-february/1P74P6IE1MYBttL8gFcvD3A.png)
<figcaption markdown="1">
Before the fix (left) and after the fix (right)
</figcaption>
</figure>

## Screenshot Tool

For HiDPI users, screenshot tool no longer includes a black area around whole screen screenshots and the position of the pointer is recorded accurately. You can also now quit with the keyboard shortcut `Ctrl + Q`. And of course, a long-awaited fix has landed that enables taking screenshots with the “Print Screen” key.

## Scratch

<figure markdown="1">
![](/assets/images/loki-updates-for-february/0gn6-ZiiOIoCdJA33)
</figure>

Programmers will be happy to know that our text editor has received several fixes for its plugins including better bracket and word completion as well as Multi-pane improvements. We’ve also improved the state handling of unsaved files when Autosave is disabled. This release is wrapped up with fixes for the spell checker plugin and improvements to CJK text input.

## Applications Menu

Following our efforts on improved internationalization, we’ve committed a fix regarding the selection of text while using the fcitx input method. The Applications Menu also now includes new sessions actions in search results: Lock and Log Out.

## Applications Settings Pane

<figure markdown="1">
![](/assets/images/loki-updates-for-february/08ITWSXlYHP-nv9_t)
</figure>

<figure markdown="1">
![](/assets/images/loki-updates-for-february/0lmO4cOy0D-1pQTQz)
</figure>

Following reports of confusion over what exactly this pane does, we’ve included some helpful messaging when startup apps have yet to be configured. We’ve also redesigned the app chooser popover to show more information, including a helpful hint in the custom command field. In the “Default” tab, the Text Editor selection now affects a larger set of file types, by popular request.

## And More!

Several other small updates have landed such as a fix for the `Ctrl +C` to copy shortcut in Mail, sealing a memory leak when changing your desktop background, and a fix for an issue in parental controls that may have failed to prevent restricted websites from being accessed.

In addition to the updates mentioned above, you can always rely on updated translations, stability fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest.

*We’d like to say thanks again to our supporters on[ Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), those who’ve purchased a copy of[ elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*