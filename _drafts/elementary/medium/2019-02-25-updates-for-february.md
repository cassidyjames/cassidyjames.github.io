---
title: "Updates for February"
description: "This month, a number of bug fixes and performance improvements landed as updates to elementary OS 5 Juno. Read ahead for the full rundown!"
author: DanielFore
date: 2019-02-25T23:41:32.653Z
image: /assets/images/updates-for-february/1h2xQZXwatwpPoUcaNbLcQg@2x.png
tags:
  - "design"
  - "elementary-os"
  - "open-source"
  - "linux"
  - "updates"
---

## Calendar

The headlining release this month is the latest version of Calendar. We’ve done a considerable amount of work both on the surface and under the hood.

Events in the calendar view and the sidebar now have a more modern styling that make much better use of color. The whole calendar view is now brighter, with subtler lines and less distracting UI elements. You’ll also notice that we make use of a Lime accent color throughout the UI.

<figure markdown="1">
![Calendar has a new, more modern and more colorful look](/assets/images/updates-for-february/1h2xQZXwatwpPoUcaNbLcQg@2x.png)
<figcaption markdown="1">
Calendar has a new, more modern and more colorful look
</figcaption>
</figure>

We’ve also improved keyboard navigation in several places. The sidebar can now be navigated and events activated using the keyboard. We’ve added keyboard shortcuts for common actions and you can see their accelerators in the tooltips for Headerbar items. You can also now search for calendars when choosing which calendar to add a new event to.

<figure markdown="1">
![Search for calendars when selecting which calendar to add an event to](/assets/images/updates-for-february/1Jg5Usx7Efg344UsXXMuZzQ@2x.png)
<figcaption markdown="1">
Search for calendars when selecting which calendar to add an event to
</figcaption>
</figure>

When managing calendars, you’ll notice that checkboxes use the calendar’s color. There’s also a new color chooser that make use of hues from the elementary palette.

<figure markdown="1">
![](/assets/images/updates-for-february/1hvez0-kui0oqEPWA9n2wRg@2x.png)
</figure>

<figure markdown="1">
![New color choices when managing calendars](/assets/images/updates-for-february/1tYNxZmFzzSdDZaKhJHZWKQ@2x.png)
<figcaption markdown="1">
New color choices when managing calendars
</figcaption>
</figure>

To ensure that it’s clear where notifications are coming from, Calendar now always uses its own icon when sending alerts for events. We’ve also made improvements to Calendar’s styling when using RTL languages.

There’s been a bunch more work under-the-hood to make Calendar’s code more concise and modern. We improved the way Calendar saves and restores its window size and position to reduce the number of times it reads or writes from your hard drive. This means better performance on slow spinning disks and longer life for modern flash drives.

Finally, Calendar now makes use of `Gtk.FileChooserNative`. This is an under-the-hood change that elementary OS users won’t notice yet, but for platforms that provide a file chooser Portal, Calendar will now use the native file chooser. Stay tuned for more about this in a future blog post and why elementary apps will be transitioning to using a file chooser Portal.

We hope you enjoy this fairly large update to Calendar!

## AppCenter

Like Calendar, AppCenter also uses a new method for saving and restoring its window’s position and size. We also improved the way AppCenter uses system memory to display its list views. Finally, there was a small cosmetic fix to the position of the action buttons in an app’s info page when switching between the install and cancel actions.

## Screenshot

We’ve received reports of some users getting stuck with an illegible system after using the “Conceal Text” feature. We now ensure that the system font is restored as early as possible to avoid this situation, even in case of other kinds of errors.

## Files

A fix was released for a high CPU usage regression that snuck into the last release. We also fixed in an issue where hidden files and folders would be sorted incorrectly in some cases.

## Music

Album art in the grid view is now displayed at full resolution on HiDPI displays. We fixed an issue with selecting a music folder with spaces in its path. We’ve also updated the path for the Media Key Listener extension to GNOME Settings Daemon: this means Music will work better on other distributions like Fedora. Like Calendar, Music also now uses `Gtk.FileChooserNative`.

## For Developers

There’s a few new goodies specifically for app developers this month as well!

### Granite

We’ve fixed in issue in some `Granite.DateTime` utilities where extra leading spaces were added. We now report `Gdk.Key.Return` as `Enter` in `Granite.accel_to_string`. You can also now easily find out if users have history enabled in System Settings with `Granite.Services.System.history_is_enabled`.

Users of `Granite.MessageDialog` can now easily show raw error messages or other raw output with the new `show_error_expander` method:

<figure markdown="1">
![Show error details with the new show_error_expander method](/assets/images/updates-for-february/1tfGftjSO6p4QFA2ti8wsLg@2x.png)
<figcaption markdown="1">
Show error details with the new show_error_expander method
</figcaption>
</figure>

We’ve also addressed a couple of typos in the documentation on Valadoc.org and packagers on other distributions should note that as of this release Granite builds with Meson instead of CMake.

### Stylesheet

Switches are now shaded using a white overlay instead of Gtk.CSS’s `shade` method. This looks much nicer with green or yellow accent colors:

<figure markdown="1">
![Left: old shading method; Right: new shading method](/assets/images/updates-for-february/12KI_sGQqwcis5yonta1-tw.png)
<figcaption markdown="1">
Left: old shading method; Right: new shading method
</figcaption>
</figure>

Groups of widgets using `Gtk.STYLE_CLASS_LINKED` now appear correctly in RTL languages. Click targets for Scales using `Granite.STYLE_CLASS_SEEKBAR` are now more accurate.We also addressed some style issues with close buttons in Infobars and borders in Sidebars while using the dark stylesheet. You’ll also notice that keyboard focus in Entries is more clear while using the dark stylesheet.

Numbered badges in Sidebars have had their color scheme inverted for a more subtle look:

<figure markdown="1">
![Badges in sidebars are now more subtle looking](/assets/images/updates-for-february/1-V8A_yJLAhrGFQKmRVpvrg@2x.png)
<figcaption markdown="1">
Badges in sidebars are now more subtle looking
</figcaption>
</figure>

Finally, Buttons in Headerbars now support `Gtk.STYLE_CLASS_RAISED` in case you’d like to make sure button borders are present for all buttons.

## And More

The default location for Picture-in-Picture windows has been changed to the bottom right of the display instead of the bottom left. Screenshots taken with keyboard shortcuts are now properly saved in Pictures/Screenshots. You can now also cancel area screenshots with the Escape key. Performance of saving whole screen screenshots on HiDPI and other high resolution displays should be much improved. We also addressed a couple of visual glitches that sometimes occurred when tiling windows.

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest.

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*