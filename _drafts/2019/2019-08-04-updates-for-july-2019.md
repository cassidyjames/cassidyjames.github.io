---
title:  "Updates for July, 2019"
description: Lots of small updates, and a new blog!
author: cassidyjames
image: /images/updates-for-july-2019/0bohRyOtytbmnC9fS.png
tags:
  - updates
  - juno

facebook: https://www.facebook.com/elementaryos/posts/2624806034217876
mastodon: https://mastodon.social/@elementary/102565965725391937
reddit: https://www.reddit.com/r/elementaryos/comments/cmbzux/updates_for_july_2019_elementary_blog/
twitter: https://twitter.com/elementary/status/1158455632355311617
---

It's that time again! Time to look back at the past month and see all of the updates that have been pushed out to elementary OS, and what else we've been up to. This month was somewhat quiet as we work on some bigger things to come, but there's still a lot of good stuff. Let's take a look.

## New Blog!

It's not an OS update, but it's still exciting:

If you're reading this, it's because of our new blog (or [RSS feed]({{ site.baseurl }}/feed))! We spent a few days investigating various options, and we landed on a new completely static blog that gives us more control over our content, better respects your privacy, and is _way_ faster. We'll have a more comprehensive post about the new blog, our reason for self-publishing, and its architecture later—but for now: welcome!

## Files

We released a whole bunch of updates to Files in July, thanks largely to the hard work of [Jeremy Wootten](https://github.com/jeremypw), [Corentin Noël](https://github.com/tintou), and [Paulo Galardi](https://github.com/lainsce).

<figure markdown="1">
![Files color tagging](/images/updates-for-july-2019/0bohRyOtytbmnC9fS.png){: width="1032" height="733"}
</figure>

Color tagging has been greatly improved! The menu item for selecting color tags has been rewritten, using GTK instead of custom Cairo drawing. The click targets are bigger and more clear, plus contrast has been improved. The menu also now shows all tags for selected files, which is a nice touch.

Files now shows more search results in the search drop down, making it more effective with lots of similar results. Opening Files from the Terminal now opens a new tab instead of a new window. We've improved keyboard navigation and made the progress window closable when copying network files to removable storage.

We also fixed some instances where tab names would be incorrect and folders would have the wrong sort order. MTP support (for external devices like Android devices and MP3 players) has been improved, we've fixed a few rare crashes in certain situations, and we've reduced memory usage of the file chooser dialog. We also fixed copying and pasting when dealing with symbolic links, fixed dragging-and-dropping in certain situations, and improved keyboard navigation throughout.

Under-the-hood, we ported more code from C to Vala to make it easier to read and work with within the rest of the codebase.

## Terminal

<figure class="card" markdown="1">
![Terminal context menu](/images/updates-for-july-2019/0ArkmmHWHxNVpVfhq.png){: width="222" height="249"}
</figure>

[Terminal](https://github.com/elementary/terminal/releases/tag/5.3.6) received a few small improvements: the [Menu key](https://en.wikipedia.org/wiki/Menu_key) found on some keyboards now opens the context menu, we added a separator to the context menu to better delineate text actions from app actions, and we save more window state between sessions.

## Onboarding

<figure markdown="1">
![onboarding-screenshot](/images/updates-for-july-2019/0qzyWf6x8Up4jaw1I.png){: width="560" height="506"}
</figure>

The [new Onboarding app]({{ site.baseurl }}{% post_url 2019/2019-07-23-get-settled-into-elementary-os-with-onboarding %}) was released in July! It has not been included by default in the desktop session, so you probably haven't seen it if you're an existing user. Hold tight, it will be included by default in an upcoming update.

## Panel & Indicators

We've updated the [Session indicator](https://github.com/elementary/wingpanel-indicator-session/releases), which shows the device's user accounts and session actions like _Shut Down_. We improved the styling of the Shut Down dialog when being launched from the Greeter, made sure the indicator can be closed with a single click in certain situations, and updated it so using the <kbd>Esc</kbd> key always closes the Shut Down and Log Out dialogs.

## Look and Feel

This past month we improved the look and feel of elementary OS via the [system stylesheet](https://github.com/elementary/stylesheet/releases/tag/5.2.5) and [icons](https://github.com/elementary/icons/releases/tag/5.0.4).

### Stylesheet

The big new change here is the color-neutral dark style. Dark-styled apps in elementary OS now sport a dark color-neutral shade of gray instead of the previous cool-tinted gray. We're trying this out in order to make certain situations like photo and video editing apps easier for color-correction, but we're also still looking for feedback and might tweak or revert it in the future.

<figure class="half" markdown="1">

![Cool](/images/updates-for-july-2019/09Bewh9Yj_oR1A2xw.png)
![Neutral](/images/updates-for-july-2019/0RBPSwUd8OPpOi3Hx.png)

<figcaption markdown="1">
**Left:** Previous cool-tinted dark style | **Right:** New color-neutral dark style
</figcaption>
</figure>

We've made other small improvements to the dark style: we improved StorageBar styling, fixed background colors from insensitive buttons, and fixed border colors of insensitive suggested action buttons.

We also added a subtle fade-out effect to the start and end of lists in popovers, like the list of Wi-Fi networks in the Networking indicator, or users in the Session indicator.

<figure class="half" markdown="1">

![No undershoot in Popovers](/images/updates-for-july-2019/0PLUxBL6a-cS_59yb.png)
![Undershoot in Popovers](/images/updates-for-july-2019/0SN_CUmoCsoYDm1FK.png)

<figcaption markdown="1">
**Left:** Old hard cut-off in popover lists | **Right:** Soft fade in popover lists
</figcaption>
</figure>

We're styling Keycaps in menus now with a flatter style, which will come into play as we add keycaps in menus in future updates.

<figure class="half" markdown="1">

![Light Menu](/images/updates-for-july-2019/0ebA8Kq7yA0oJ71tI.png)
![Dark Menu](/images/updates-for-july-2019/0_ZZDIV25P7yF3W7a.png)

<figcaption>Keycaps in both light and dark menus</figcaption>
</figure>

Progress and loading states on entries (like the address bar of browsers when a page is loading) have been made more subtle. Lastly, the system stylesheet now supports the floating-bar widget used in newer versions of Epiphany.

### Icons

The most obvious icon change is the newly redesigned wired networking icons, visible if your device has Ethernet or another wired network. In the panel, the new icon is simpler and clearer—instead of the complex and hard-to-align [ISO IEC-60417-5988 "Computer network" symbol](https://www.iso.org/obp/ui#iec:grs:60417:5988), we use a simpler metaphor that has been adopted by other platforms like Android, macOS, and Chrome OS.

<figure class="half" markdown="1">

![Panel](/images/updates-for-july-2019/0sqonzVH__6SHS3ag.png)
![System Settings](/images/updates-for-july-2019/0YXnbZQOejN20VAWL.png)

<figcaption markdown="1">
**Left:** New wired icon in the Panel | **Right:** New wired icon in Networking settings
</figcaption>
</figure>

While the ISO symbol technically represents _any_ wired network, it has become overwhelmingly associated with Ethernet connections; since we also use this symbol for USB network connections, we feel the new symbol works better. It's also easier to add states to it like "connecting" or "disconnected." We also took the opportunity to align the full-color and symbolic versions of the icons: instead of an Ethernet jack for the full-color version, we use the new symbol on an orange tile.

Several other icons were improved or added in July: the image-missing icon was simplified, new sizes were added for find-location, process-completed, night-light, image-crop, and mail-send. The software-update icon is now a fun badge shape instead of a square. New housekeeping icons were made in all sizes, and several symbolic versions were added: computer-laptop, media-memory, mail-forwarded, application-x-firmware, location-active, location-inactive, and location-disabled.

## Under the Hood & Developer Tools

We [improved several utilities in Granite](https://github.com/elementary/granite/releases/tag/5.2.4), our library of common widgets and utilities. We added more keys to `accel-to-string`, making keyboard shortcuts read more naturally. We added the ability to set an icon badge to MessageDialog, making it more versatile and preventing developers from having to drop to a custom Gtk.Dialog for that commonly-used pattern. We also moved the DateTime settings schema to use the GNOME interface schema, keeping datetime settings better in sync. Lastly, we deprecated IconFactory and utilities that are now provided by GLib.

Our new [Feedback](https://github.com/elementary/feedback) app was released. There's nothing user-facing that's new yet; we simply moved the _System Settings_ → _About_ → _Report a Problem_ dialog from the System Settings plug codebase into its own standalone app. We have some bigger plans for it in the future, but for now, it just means it's easier to update on its own.

[Cerbere](https://github.com/elementary/cerbere/releases/tag/2.5.0)—the system process that relaunches critical desktop components—was updated to better handle shutdown states and cleanly exit.

## And More!

As with each monthly update, you can expect other bugfixes, performance improvements, and translation updates. Be sure to open AppCenter and hit _Update All_ to get the latest and greatest.

