---
title: Introducing Ephemeral
description: The always-incognito web browser
updated: 2019-01-09
legacy: true

image: https://miro.medium.com/max/1400/1*v1WOWAngiyB9tAjuaqjn4Q.png

tags:
  - Ephemeral
  - AppCenter
  - elementary
---

![icon](https://miro.medium.com/max/512/1*ngAOt2L66W0QUXBiHYsrnQ@2x.png)

Ever since [Firefox Focus](https://www.mozilla.org/en-US/firefox/mobile/#focus) landed on Android, I’ve been a fan. It’s an interesting idea of making privacy a habit by default instead of a separate mode you manually enable; on Android, you can set it as your default web browser meaning Google doesn’t vacuum up all of your browsing history in Chrome and sites don’t get persistent cookies and other trackers following you everywhere.

It turns out, Focus isn’t available on elementary OS. So I made Ephemeral, which takes the same basic concept and applies it to a native app tailor-made for elementary OS.

![screenshot](https://miro.medium.com/max/1400/1*UME2gxZpp6qgGE-hrXgcAQ@2x.png)

Ephemeral protects you in three key ways:

1. **Always incognito.** From the second you open an Ephemeral window until you close it (or hit the Erase button), Ephemeral is in private browsing mode. That means history, cookies, local storage, passwords, etc. are all blown away as soon as you leave.

2. **Contained.** Every Ephemeral window is a separate instance of the browser engine. This means pages are kept separate from one another. Sign into a service in one window, and other Ephemeral windows will have no idea you’re signed in.

3. **No third-party cookies.** Out of the box, Ephemeral blocks cookies from third-party sources. This cuts down on advertising cookies and other unwanted forms of cross-site tracking.

Ephemeral also uses DuckDuckGo—the search engine that doesn’t track you—by default to avoid as much Google tracking as possible.

What if you run into a site compatibility issue due to the tracking prevention, or if you want to sign into a site using another browser’s saved passwords? Ephemeral has you covered: just **hit your other browser’s icon** in the header and the current page is opened up there.

The best part of Ephemeral comes when you **use it as your default browser** (by setting it in System Settings → Applications): make privacy a habit by opening links in a private browser by default, knowing you can always jump back into a less private browser with one click.

I hope you enjoy Ephemeral and give it a try! It’s [available today for elementary OS on AppCenter](https://appcenter.elementary.io/com.github.cassidyjames.ephemeral).
