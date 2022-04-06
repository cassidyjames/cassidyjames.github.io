---
title: Juno Updates for December, 2018
description: Happy Holidays and Happy New Year!
date: '2019-01-01T18:35:29.829Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/1600/1*5DmeXcooOR5ypkMl4FjDmA@2x.jpeg
tags:
  - updates
  - juno
---

It’s time for another updates roundup! To finish off the year strong, we’re bringing you bug fixes and improvements galore.

### Files

To help users discover Files’ built-in search and the smart path bar we now show the search icon and placeholder text whenever you’re in the Home folder instead of the Home icon. Files also now includes keyboard shortcuts in many of its tooltips including navigation and view controls and several system locations in the sidebar.

<figure markdown="1">
![Files with a searchbar in the Home folder and new shortcut tooltips](https://cdn-images-1.medium.com/max/800/1*Wpo7EePobr-kjbwGtrSq5Q@2x.png){: srcset="https://cdn-images-1.medium.com/max/1600/1*Wpo7EePobr-kjbwGtrSq5Q@2x.png 2x"}
<figcaption>Files with a searchbar in the Home folder and new shortcut tooltips</figcaption>
</figure>

You’ll now also see app icons in the “Open With” and “Open In” menus. The empty trash sound no longer plays if you’ve disabled event alerts in System Settings → Sound. Last but not least, several large under-the-hood changes were made with regards to memory usage, drag and drop, file renaming, color tags, and more.

### Music

The latest release of Music fixes several queuing issues, including an annoying issue that would cause the “previous” and “next” buttons to switch function in some cases. Playlists are now properly restored on startup when Music was closed while performing a search. Music can now also play s3m files and double clicking an album cover in the grid view will start playing that album.

### Applications Menu

A big new feature has landed in the Applications Menu: more robust System Settings search. You can now search for something like “display” and you’ll see a list of all the individual features in each pane where the word “display” is used. This is really handy for surfacing harder-to-find or less-used features.

<figure markdown="1">
![Searching for individual settings is now much more fine-grained](https://cdn-images-1.medium.com/max/678/1*oODAExci9LBHj35Wp8LFrg@2x.png){: srcset="https://cdn-images-1.medium.com/max/1375/1*oODAExci9LBHj35Wp8LFrg@2x.png 2x"}
<figcaption>Searching for individual settings is now much more fine-grained</figcaption>
</figure>

We’ve also addressed a couple of bugs that reset the view selection to the grid view. Category view users should be much happier as their selection should be more well preserved. Finally, an animation glitch that sometimes occurred when closing the applications menu has been smoothed out.

### System Settings

New keywords were added to Locale Settings to make it easier to search for things like “Region”, “Formats”, and “Temperature”. A fix was also applied to make certain locales with long names appear correctly in the locale selection drop down.

<figure markdown="1">
![New Appearance options in Desktop Settings](https://cdn-images-1.medium.com/max/800/1*tInbNyiBHCyyEjn4ioSVyQ@2x.png){: srcset="https://cdn-images-1.medium.com/max/1600/1*tInbNyiBHCyyEjn4ioSVyQ@2x.png 2x"}
<figcaption>New Appearance options in Desktop Settings</figcaption>
</figure>

Desktop Settings now comes with a new “Appearance” tab which contains a few settings that were previously only present in Universal Access Settings. We’ve heard a lot of feedback from users who weren’t aware these settings exist out of the box, so we’re hopeful that their new location and the improved search will help make them more discoverable. We’ll have more information on this topic coming soon, as well.

Along with this change comes a wider range of supported text sizes: we now include a “Small” size in case text is too large at your display’s size and resolution combination. The Large and Larger sizes also got bumped up slightly, making the new range 0.75×(Small) to 1.5× (Larger). As a result, elementary OS should be even more usable for a wider variety of users across a wider variety of hardware.

<figure markdown="1">
![Refresh Rate settings in Displays](https://cdn-images-1.medium.com/max/800/1*VPuJfG4h5i-y7P1tuPhPnQ@2x.png){: srcset="https://cdn-images-1.medium.com/max/1600/1*VPuJfG4h5i-y7P1tuPhPnQ@2x.png"}
<figcaption>Refresh Rate settings in Displays</figcaption>
</figure>

By popular request: we now handle display refresh rate settings in Displays! A drop down is always shown, even when your display only supports one refresh rate for the selected resolution. On the Night Light tab, controls are now made insensitive when Night Light is disabled so that you can more clearly see whether or not it is scheduled.

### For Developers

A new version of Granite is available that ignores empty accelerators in the new `accel_to_string ()` method.

The system stylesheet now supports adding the `accent` class to Gtk.Scales for easy color filled scales. The `:link` pseudo class is now also supported.

Several new icons are also available including:

*   `playlist-symbolic`
*   `playlist-queue-symbolic`
*   `internet-chat-symbolic`
*   `input-keyboard-capslock-symbolic`
*   `audio-headphones` and `audio-headset`

![icons](https://cdn-images-1.medium.com/max/800/1*5DmeXcooOR5ypkMl4FjDmA@2x.jpeg){: srcset="https://cdn-images-1.medium.com/max/1600/1*5DmeXcooOR5ypkMl4FjDmA@2x.jpeg 2x"}

### And More

Switches now have a brighter handle in the dark style for higher contrast. The icon for mobile phones has been updated to match what phones look like at the end of 2018. A few mirrored icons for right-to-left languages have been added. And we’ve made a few icon families a bit more consistent.

We fixed a couple issues in the Date & Time indicator with regards to displaying the correct events for a selected day and highlighting the current day more effectively. Device names in the Bluetooth indicator are now bold, to be more consistent with how devices are presented in other indicators. We fixed a crash in the Session indicator that was triggered when using remote login.

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest.

