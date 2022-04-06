---
title: 'Juno Updates for April, 2019'
description: New settings, redesigned dialogs, smashed bugs, and more
date: '2019-05-02T16:45:32.621Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/1978/1*5_gDVCKTqw5t8LU3_l4uzg@2x.png
tags:
  - updates
  - juno
---

It’s time for another monthly updates roundup post! This month we added several new settings, redesigned some dialogs, smashed bugs, and more. Read ahead to get the details.

## System Settings

In February [we previewed some of the work](https://medium.com/elementaryos/accessibility-features-are-just-features-30b7ad740eb) that we had done redesigning and expanding Mouse & Touchpad settings. This includes breaking the settings up into three separate tabs, adding new settings like keypad pointer control, long-press secondary click, and the ability to ignore the touchpad when an external mouse is connected.

<figure class="third" markdown="1">
![General](https://cdn-images-1.medium.com/max/1978/1*wkDwVu_JibTvzO-AJT6m5w@2x.png)
![Mouse](https://cdn-images-1.medium.com/max/1978/1*hROYdUXG0ryaZMyCkh23eA@2x.png)
![Touchpad](https://cdn-images-1.medium.com/max/1978/1*AHvFqr9kUTI0mC9w3erwrQ@2x.png)
<figcaption>The freshly redesigned Mouse & Touchpad settings</figcaption>
</figure>

You’ll also notice that we’re trying to make more effective use of the available space and make options more clear with icons, description text, and radiobuttons for short lists.

<figure markdown="1">
![Displays](https://cdn-images-1.medium.com/max/1978/1*5_gDVCKTqw5t8LU3_l4uzg@2x.png)
</figure>

Display settings also got a minor facelift with some new, brighter, and higher-contrast colors from our new color palette. Those of you who move between HiDPI and LoDPI setups will be happy to know that scaling settings are now applied immediately and don’t require a restart to take effect.

Lastly, we fixed a crash in Sound settings affecting some devices such as the HTC Vive and we fixed an issue in Bluetooth settings that prevented some devices from pairing such as certain Logitech keyboards.

## For Developers

We now subtly style `destructive-action` classed buttons in `Gtk.ActionBar`. They become red on hover and have a red background when focused.

<figure class="card" markdown="1">
![destructive-action buttons in ActionBars now turn red on hover](https://cdn-images-1.medium.com/max/406/1*EnukmU-slv4nNAwMRrsNRg@2x.png)
<figcaption>destructive-action buttons in ActionBars now turn red on hover</figcaption>
</figure>

We also now support `osd` classed `Gtk.Progressbars` like the ones seen in GNOME Builder and Epiphany.

## And More

Fix moving window to another workspace not updating panel opacity. Fix an issue that required pressing F2 several times in order to start renaming in Files. Music and Photos saw a number of dialogs redesigned and both now use the new [FileChooserNative API we talked about previously](https://medium.com/elementaryos/a-new-native-file-chooser-196acf9b06f0). Music also contains a small fix to help remember its window size more accurately.

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest.

