---
title: "De-Googling: Chrome"
description: Probably the easiest migration
redirect_from: /chrome
updated: 2020-08-14
image: /images/blog/de-googling-chrome/card.png
---

Moving away from Google Chrome was _probably_ the easiest migration in my [de-Googling efforts](/blog/de-googling). I'm not a huge user of bookmarks, history, or extensions, so those weren't tying me down. On the desktop, I just switched to a combination of [Ephemeral](https://appcenter.elementary.io/com.github.cassidyjames.ephemeral/) (as my defaut) with [Epiphany/GNOME Web](https://wiki.gnome.org/Apps/Web/) as my main "real browser."

<figure markdown="1">
![Screenshot of Ephemeral](https://raw.githubusercontent.com/cassidyjames/ephemeral/main/data/screenshot-many-browsers%402x.png)
<figcaption>Ephemeral</figcaption>
</figure>

Ephemeral is a lightweight privacy browser that I develop for elementary OS, so of course I [dogfood](https://blog.elementary.io/eating-our-own-dog-food/) it and have it set as the default. A key feature is that you can pop sites open in your "real" browser with one click, so I usually have that set to Epiphany—the native GTK browser that comes with elementary OS, so it's an obvious choice.

However, some sites don't perform well in Ephemeral or Epiphany (usually due to unnecessary user agent sniffing), so I do keep Firefox around for that. And Firefox on the desktop has gotten really good. Since Epiphany supports Firefox Sync, it's actually pretty easy to jump between the two as needed. I also occasionally install Chromium for testing web development in a Chrome-based engine, but I don't use it for any real browsing.

### On Mobile

For a _long_ time, Chrome was the only browser I liked on Android; others either felt non-native due to scrolling physics (like Firefox used to), had questionable monetization incentives, or had too many features I didn't care about.

However, Firefox on Android has come leaps and bounds in the last several months, and an even better, entirely rebuilt version is in beta testing—and it's _excellent._ I've switched to it full-time on my phone and have not looked back. Plus, sync with desktop Firefox (and Epiphany!) makes it all work well together.

## Why De-Googling Your Browser Matters

If Chrome generally works well as a web browser, why decide to ditch it? Personally, it's because of browser engine diversity (which makes the web better), limiting the scope of data collected by Google, and the incentives the browser maker has for that data collection.

### Browser Engine Diversity

The web is at its best when there are multiple independent browser engines; that's when we get competition and innovation. When there is a single dominant browser engine, the company in control of it dictates what can and can't be done on the web—and developers only target that engine. If you're old enough, you may remember us being in this position with Internet Explorer for years.

We're seeing the same mistakes today with Chrome. Most web browsers these days are tweaked UIs built around Google's Chrome (technically Blink or Chromium, depending on how you look at it). Opera, Brave, Microsoft Edge, and almost any upstart browser you hear about fall into this category. Worse, a popular cross-desktop development tool Electron is a wrapper around Chrome as well, meaning more and more developers who want to reach the most users are only developing their web and desktop apps for Google Chrome's version of the web.

Since Google often includes experimental and non-standard features in their engine, these developers wind up relying on things that only work in Google Chrome and its derivatives. Either other browser engines live with the potential breakage, or fall in line and just implement things in the same way as Google. The end result: Google alone, the world's largest data collection network, dictates how the web is allowed to work.

<aside markdown="1">
>The world's largest data collection network dictates how the web is allowed to work.
</aside>

### Limiting the Scope of Data Collection

If that's not worrying enough, Google Chrome itself is also tied deeply into Google's data collection network. By default, Chrome sends Google at least:

- What you type into the URL bar, even before you submit it
- URLs of error pages you hit when browsing
- Information about Wi-Fi routers near you, whether or not you're connected to them
- Cell IDs of the cellphone towers near you, whether or not you're connected to them
- Strength of your Wi-Fi and/or cell signal
- Your IP address
- The languages of the sites you visit
- "information… to check for updates, get connectivity status, validate the current time, and estimate the number of active users"
- "information about the web forms that you encounter or submit while Autofill or password management is enabled"
- "usage statistics and crash reports" which includes "information such as preferences, button clicks, performance statistics, and memory usage"

If you hit the giant suggested button in Chrome or even just sign into any website with Google, then Chrome also actively uploads at least:

- Your entire browsing history
- Your search history
- Bookmarks
- Open tabs
- Your usernames and passwords for websites
- Your shipping and billing addresses
- Payment information like credit card numbers and expiration dates
- "information about the web pages you visit and your usage of them" if you choose to "make searches and browsing better"
- "Chrome may combine any declared age and gender information from your Google account with our statistics to help us build products better suited for all demographics"

Much of this data is associated identifiably with your Google account, and may be used to "improve Chrome" or "personalize your experience in other Google products." If you want the massive wall of text rundown, check out Google's own [Chrome Privacy Policy](https://www.google.com/chrome/privacy/).

Personally, I don't really want Google collecting massive amounts of data about how I use the web, mostly for their own benefit.

### Incentives

Google is an Internet advertising company. They are incentivized to get as many people as possible onto the Internet, collect as much data as possible from them, and then use that data to show them ads that make them the most money. Keep those incentives in mind each time you choose a product—and what better way to know exactly what you're doing on the Internet at all times than the web browser itself?

Personally, I like the incentives of GNOME and Mozilla much better; they are both non-profit organizations aiming to make the technology world better through open source and privacy-first solutions. I trust GNOME Web to not spy on me and send buckets of data to GNOME, much like I trust Mozilla not to do the same. And in both cases, their browsers are entirely open source and can be audited to ensure this. (Google Chrome is built on an open source Chromium base, but is not itself open source.)

---

## De-Googling Series

I'm slowly but surely writing up my thoughts and experiences with [de-Googling my life](/blog/de-googling) a bit. This is just the second part, but there's more to come!
