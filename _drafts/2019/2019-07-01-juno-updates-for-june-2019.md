---
title: "Juno Updates for June, 2019"
description: "A Few Little Big Fixes"
author: peteruithoven
image: https://miro.medium.com/max/506/1*bAIB3mJJqPIk03TJCqfAWA.gif
tags:
  - updates
---

It’s time for another monthly updates post! While we put a bow on some really big stuff (hint hint, wink wink, nudge nudge) to be released in July, there were a few minor updates to enjoy in June.

## Stylesheet

Thanks to some help from our community, the dark style now has increased Radio and Checkbox contrast:

<figure class="card" markdown="1">
![Stylesheet](https://miro.medium.com/max/700/1*RXRputsAI3y8jIU9s1vSWg.png)
<figcaption markdown="1">
**Left:** Before | **Right:** After
</figcaption>
</figure>

Popovers with submenus now have an arrow style that matches the arrows in regular menus:

<figure class="card" markdown="1">
![Popovers](https://miro.medium.com/max/700/1*xPbl_fwBLl7l9gFmSFzCsQ.png)
<figcaption markdown="1">
**Left:** Before | **Right:** After
</figcaption>
</figure>

There was a fix for a very subtle 1px shift when only one tab is open in a notebook:

And we got a fix for insensitive, .destructive-action buttons:

<figure class="half card" markdown="1">
![Before light](https://miro.medium.com/max/494/1*1YByV23BWBIn_7iO0gd4rw.gif)
![After light](https://miro.medium.com/max/506/1*bAIB3mJJqPIk03TJCqfAWA.gif)
![Before dark](https://miro.medium.com/max/505/1*jVoD1AsRDlbkdb2i_hOqzg.gif)
![After dark](https://miro.medium.com/max/495/1*t5n3wIpDFn2Uqz6V5wWJmg.gif)
<figcaption markdown="1">
**Left:** Before | **Right:** After
</figcaption>
</figure>

Shoutouts to [Ryo Nakano](https://github.com/ryonakano) and others for their help!

## Panel

In the past, quick-launching apps might not get focus when opened. We now more accurately pass focus off to apps launched from the applications menu to ensure that happens. We’ve also fixed a regression that caused the Panel to remain opaque with some wallpapers. It should now properly calculate for contrast and become transparent more often.

## Terminal

We now support the keyboard shortcut Ctrl + = to zoom in, making it so you don’t need that extra shift key to zoom in quickly. We’ve also fixed a small regression in a warning dialog that would prevent Terminal from quitting properly when selecting the option to quit from that dialog.

## And More

We fixed a regression in the location services agent that caused it to timeout and quit, meaning apps weren’t able to use the system location service at all. Oops!

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest.

