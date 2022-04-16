---
title: "A New Native File Chooser"
description: "And how you can get your apps ready for it"
author: DanielFore
date: 2019-02-16T19:54:35.338Z
image: /assets/images/a-new-native-file-chooser/1yB-G9JZPcLUxiPjB76RnhQ@2x.png
tags:
  - "sandbox"
  - "open-source"
  - "linux"
  - "elementary-os"
  - "flatpak"
---

About 3 years ago now, we were faced with a bit of a problem: the design of the file chooser in Gtk was rapidly becoming out of sync with the design of Files and with dialogs in elementary OS in general as part of a redesign effort within GNOME. This change moved action buttons from their familiar location and stripped color from the sidebar, among other things. So, shortly after the release of elementary OS Freya, we debuted our own redesigned file chooser dialog using the Gtk.Module system.

<figure markdown="1">
![Current FileChooserDialog in elementary OS 5 Juno](/assets/images/a-new-native-file-chooser/1yB-G9JZPcLUxiPjB76RnhQ@2x.png)
<figcaption markdown="1">
Current FileChooserDialog in elementary OS 5 Juno
</figcaption>
</figure>

This was great because we were able to do things like keep the action bar at the bottom of the dialog, restore color to the sidebar icons, and make use of Files’ smart pathbar. But, there are limitations to what we can do with Gtk.Module. At the end of the day, we can only ship a modified Gtk file chooser dialog and we must make sure that our Gtk.Module doesn’t break when the upstream Gtk chooser changes. This can be difficult at times, as we’ve seen that some users have experienced a file chooser with no action area at all. It’s not an ideal solution and to improve the situation, we need something new.

## FileChooserNative + Portals

In preparing for a new world of sandboxed apps, Gtk has made a pretty big change: the file chooser dialog has moved from being a widget living inside of a given app to a separate process that apps communicate with through [Portals](https://blogs.gnome.org/alexl/2017/01/24/the-flatpak-security-model-part-3-the-long-game/). This is huge for security and privacy because it means that when an app asks you to open a file or folder, it no longer needs permission to read your file system. Instead, only that separate, trusted file chooser must have these elevated permissions.

Also, since the file chooser is its own separate process, Gtk itself no longer has to supply the file chooser. This means that Gtk apps can use custom fully-native file choosers from not just GNOME, but also other platforms implementing the file chooser portal like Plasma, Windows, macOS, and soon elementary OS.

<figure markdown="1">
![Original FileChooser mockup from 2013](/assets/images/a-new-native-file-chooser/1FgU8d63DkrYohV6JejUmFA.png)
<figcaption markdown="1">
Original FileChooser mockup from 2013
</figcaption>
</figure>

For us, this immediately means complete control over the design of our file chooser without any hacky, unstable modifications of another code base. We can directly re-purpose and share widgets from Files like the smart pathbar, sidebar, and views for greater consistency between the two. In the short term, it also means we can add features like consistent image previews or file search. Eventually, we can integrate all the same views found in Files like grid and columns. In the long term, we might even be able to create special custom views of system libraries like photos or music. It really opens up a whole new realm of possibilities in the features and design we can provide.

## Get Ready, Developers

While the new native file chooser using portals isn’t ready yet, apps can replace their usage of `Gtk.FileChooserDialog` with `Gtk.FileChooserNative` today. When the new file chooser portal is available, apps will upgrade automatically to use it.

As always, you can find documentation regarding the usage of `Gtk.FileChooserNative` [on Valadoc](https://valadoc.org/gtk+-3.0/Gtk.FileChooserNative.html). It’s worth noting that while the API for `Gtk.FileChooserNative` is very close to `Gtk.FileChooserDialog` there are some restrictions and apps will no longer be able to interfere with the dialog while it’s open.

If you’d like to track our progress porting elementary apps to `Gtk.FileChooserNative` or see code examples, you can follow along with [this GitHub project](https://github.com/orgs/elementary/projects/45).

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*