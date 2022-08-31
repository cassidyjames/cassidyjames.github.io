---
title: Run `gnome-info-collect` on Endless OS
description: Opt in to share a one-time snapshot of your configuration
updated: 2022-08-31
---

When `gnome-info-collect` was announced, I had a lot to say about it and the overarching direction:

<blockquote class="tweet">
  <p>Privacy-respecting metrics is something a lot of smart people have been thinking about and working on over the past several years. If we’ve chatted at events, you know what I’m talking about. 😉</p>
  <p>Excited to see some steps in this direction!</p>
  <blockquote>
    <p><a href="https://twitter.com/gnome/status/1562809273028988929"><strong>GNOME</strong> (@gnome) tweeted</a>:</p>
    <p>We're running a campaign to better understand our users. It only takes a minute to help, learn more here:</p>
    <p><a href="https://blogs.gnome.org/aday/2022/08/25/help-improve-gnome/">Help improve GNOME!</a></p>
    </blockquote>
    <p>I truly believe we (in the open source desktop community) can lead by example in tech, even when our products compete with those from the richest companies who don’t have the same fundamental radically user-centric beliefs as us.</p>
    <p>Big Tech plays lip service to privacy while tracking everything you do—and they get the advantage of knowing exactly how every user uses their products, and use that to affect behavior to make them more money. That’s their only incentive.</p>
    <p>If we want to compete, we have to know how to improve our products—but our incentives are so much better! Rather than “how can we make more money” being the end goal, it’s “how can we make people’s lives better?”</p>
    <p>Tracking people doesn’t make their lives better; in fact, it can actively harm them if that data is leaked or abused. So, we don’t collect it.</p>
    <p>To design a product to improve our users’ lives, we must understand how our product is used—but in a fundamentally privacy-first way.</p>
    <p><small><a href="https://twitter.com/CassidyJames/status/1562-2022830262295093248">Original thread on Twitter</a></small></p>
</blockquote>

I still think there's a lot to be done here; namely, only the people who are technical enough to install a package, run it from a Terminal, and undestand and agree to the data being sent are going to be counted. This will lead to **extreme** selection bias; what about the tens of thousands of people using GNOME on Endless OS who might not even know it, don't know or want to know how to use a Terminal, and certainly would not be able to manually download and run this tool? Certainly the fact they are GNOME users using their computer every day still counts for something?

<aside markdown="1">
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

<style>
blockquote.tweet {
  opacity: 1
}
</style>
