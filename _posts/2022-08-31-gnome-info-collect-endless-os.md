---
title: Run `gnome-info-collect` on Endless OS
description: Opt in to share a one-time snapshot of your configuration
updated: 2022-08-31
---

When `gnome-info-collect` was announced, I had a lot to say about it and the overarching direction:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Privacy-respecting metrics is something a lot of smart people have been thinking about and working on over the past several years. If we’ve chatted at events, you know what I’m talking about. 😉<br><br>Excited to see some steps in this direction! <a href="https://t.co/kL3WmmquX6">https://t.co/kL3WmmquX6</a></p>&mdash; Cassidy James Blaede (@CassidyJames) <a href="https://twitter.com/CassidyJames/status/1562830262295093248?ref_src=twsrc%5Etfw">August 25, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

I still think there's a lot to be done here; namely, only the people who are technical enough to install a package, run it from a Terminal, and undestand and agree to the data being sent are going to be counted. This will lead to **extreme** selection bias; what about the tens of thousands of people using GNOME on Endless OS who might not even know it, don't know or want to know how to use a Terminal, and certainly would not be able to manually download and run this tool? Certainly the fact they are GNOME users using their computer every day still counts for something?

<asode markdown="1">
>Only the people who are technical enough to install a package, run it from a Terminal, and undestand and agree to the data being sent are going to be counted.
</aside>

As long as that is understood when looking at the data, I think it's still a worthwhile initiative—and we should look to improve upon that issue. In the meantime, if you happen to be on Endless OS _and_ technical enough to follow some directions in the terminal, here is how to run `gnome-info-collect`:

### Download and Run on Endless OS

Git and Python are included in Endless OS, so downloading and running the tool is as easy as:

1. Open the Terminal app

2. Type (or copy and paste with the right-click context menu), then press <kbd>Enter</kbd>:
   ```
   git clone https://gitlab.gnome.org/vstanek/gnome-info-collect.git
   ```

3. Then type (or copy and paste with the right-click context menu), then press <kbd>Enter</kbd>:
   ```
   python3 gnome-info-collect/client/client.py
   ```

4. Review the information to be sent. If you agree to send it, press <kbd>Y</kbd> on your keyboard and hit <kbd>Enter</kbd>

That's it! Now your configuration will be counted by the GNOME project when considering future initiatives.
