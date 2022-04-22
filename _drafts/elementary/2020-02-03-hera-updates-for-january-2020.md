---
title: Hera Updates for January, 2020
description: Focusing on developers, privacy, and fine tuning
author: cassidyjames
image: https://raw.githubusercontent.com/elementary/terminal/1f869829535c52ecd7e4533adecb016432dd532a/data/screenshot.png
tags:
 - hera
 - updates

facebook: https://www.facebook.com/elementaryos/posts/3019965241368618
mastodon: https://mastodon.social/@elementary/103598029607557817
reddit: https://www.reddit.com/r/elementaryos/comments/eyi5xt/hera_updates_for_january_2020_elementary_blog/
twitter: https://twitter.com/elementary/status/1224507935117795330
---

Fresh on the heels of [releasing elementary OS 5.1 Hera](/introducing-elementary-os-5-1-hera), we spent January pushing out several developer-focused updates to core apps. We also focused on privacy, System Settings, and some small visual improvements.

## Code

The biggest release in January was definitely [Code 3.2](https://github.com/elementary/code/releases/tag/3.2.0).

We focused heavily on making Code even more project-oriented, improving the project sidebar in several ways. The most obvious change is that the "Open Folder" button has been renamed to "Add Project Folder…" and moved to the project sidebar, more directly associating them. Nearby we added a "Manage project folders…" menu, including new "Alphabetize" and "Collapse All" actions to keep things tidy. We also improved the project sidebar by dimming `.gitignore`d files, hiding temporary `~` files, and adding a new "Open In" menu to top-level project folders—making it easier to open an entire project in your terminal, file manager, or an IDE.

On the editor side, we enabled bracket completion and auto-indent by default; these are super handy plugins that we've been [dogfooding](/eating-our-own-dog-food) for a long time, and we feel they're at a point where they stay out of the way when needed but substantially improve the default coding experience. A new default "Smart cut/copy lines" feature lets you cut or copy the entire current line when there's no active selection. A new confirmation dialog helps cut down on accidental data loss from restoring an old version of the file.

Zooming with the keyboard should be more consistent by fixing the <kbd>Ctrl</kbd><kbd>+</kbd> shortcut in some layouts, and zooming with the keyboard is now possible in the terminal plugin. The "Draw Spaces" setting has been simplified to a binary "For selected text" or "Always" option. We fixed the shortcut for "Search previous" in the Find toolbar, and we now use color and iconography to represent no Find results—making it more accessible even if color is hard to distinguish. When creating a new file from the sidebar, you can now name it first (preventing making an unwanted "new file" in your project).

On the privacy front, Code now follows the system-wide [_Security & Privacy_ → _History_](settings://privacy) setting and will not restore recently-opened files when History is toggled off.

## Terminal

We released [Terminal 5.5](https://github.com/elementary/terminal/releases/tag/5.5.0) (and a [5.5.1](https://github.com/elementary/terminal/releases/tag/5.5.1) follow-up) in January. The big obvious new feature here is that we now expose the "Natural Copy/Paste" setting in the Settings menu, along with a short description of what it does; this should be helpful to anyone who uses CLI apps that didn't play nicely with the feature.

![Terminal Screenshot](https://raw.githubusercontent.com/elementary/terminal/1f869829535c52ecd7e4533adecb016432dd532a/data/screenshot.png){: width="1626" height="1200"}

We also added zooming with <kbd>Ctrl</kbd> + Mouse Scroll, made Terminal instantly reflect font changes, added the `sudo` password prompt text when copying the last output, and fixed a couple of issues with duplicated or extra "Home" tabs on startup.

## Files

Another big release in January was [Files 4.3](https://github.com/elementary/files/releases/tag/4.3.0). This developer-focused update added Git integration directly into Files, showing the status of files in your Git project folders. We also fixed several smaller issues with the pathbar, tabs, styling, and the headerbar.

Similar to Code, Files now respects the system-wide _Security & Privacy_ → _History_ setting.

## And More!

We pushed out [an update](https://github.com/elementary/default-settings/releases/tag/5.1.2) to the under-the-hood Default Settings package that removed some deprecated code and enabled some Greeter power settings. For enhanced privacy, it also changed the default Epiphany behavior to only accept first-party cookies and changed the default search engine to DuckDuckGo; if you'd already changed these settings, your changes will still be respected—and you can always pick your default search engine or add a new one in the Epiphany preferences.

An [update to System Settings](https://github.com/elementary/switchboard/releases/tag/2.3.8) fixed some issues with tiling, restoring the correct window size, and alignment at large window sizes.

<figure class="half" markdown="1">
![Old Mouse & Touchpad settings](https://raw.githubusercontent.com/elementary/switchboard-plug-mouse-touchpad/5928c23e2e842137251750397f28e742f083dfce/data/screenshot-clicking.png){: width="1978" height="1370"}
![Updated Mouse & Touchpad settings](https://raw.githubusercontent.com/elementary/switchboard-plug-mouse-touchpad/e29971124f1949ddee3077178c6202f7d3f910bd/data/screenshot-clicking.png){: width="1978" height="1370"}
<figcaption markdown="1">
**Left:** Previous Mouse & Touchpad settings | **Right:** Updated Mouse & Touchpad settings
</figcaption>
</figure>

We [updated the Mouse & Touchpad](https://github.com/elementary/switchboard-plug-mouse-touchpad/releases/tag/2.4.0) settings to add new Dwell Click and Pointer Size settings, making the default settings [more accessible to everyone](/accessibility-features-are-just-features). We also refreshed the primary button selection styling to make it more clear and added explicit number entries for the dwell click and long-press secondary click settings.

![Screenshot of the Screenshot app](https://raw.githubusercontent.com/elementary/screenshot/64ef0e25f1e302d678b3dd85a6c1f24c8801102d/data/screenshot.png){: width="442" height="448"}

Updates to [Screenshot](https://github.com/elementary/screenshot/releases/tag/1.7.1) and the [Session Indicator](https://github.com/elementary/wingpanel-indicator-session/releases/tag/2.2.7) improved minor styling in concert with a [Stylesheet update](https://github.com/elementary/stylesheet/releases/tag/5.4.1) which also improved text contrast in text selections.

<figure class="half" markdown="1">
![Before, Light](https://user-images.githubusercontent.com/7277719/71684000-f2a4c000-2d48-11ea-8a29-839276a51375.png)
![Before, Dark](https://user-images.githubusercontent.com/7277719/71684788-46b0a400-2d4b-11ea-80ce-063bd1710230.png)
![After, Light](https://user-images.githubusercontent.com/7277719/71683998-f2a4c000-2d48-11ea-94fb-132aaa5a457f.png)
![After, Dark](https://user-images.githubusercontent.com/7277719/71684763-313b7a00-2d4b-11ea-95eb-4fcf8b901a04.png)
<figcaption markdown="1">
**Above:** Old text selection style | **Below:** New text selection style
</figcaption>
</figure>

We released [Gala 3.2](https://github.com/elementary/gala/releases/tag/3.2.0) which brings Gala in line with our release processes, improves legacy app window shadows, prevents a potential crash when taking screenshots, fixes notification positioning after changing display scaling, and fixes animations for moving and maximizing tiled windows.

## Get It

As always, you can get these updates on elementary OS 5.1 Hera alongside updated translations, bug fixes, and performance updates by popping open AppCenter and hitting **Update All**.
