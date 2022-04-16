---
title: "Juno Updates for March, 2019"
description: "While we made a pretty big announcement on April 1, March wasn’t without its own hard work. Cassidy attended the Parental Controls & Metered Data hackfest, plus we pushed out several updates to elementary OS:"
author: DanielFore
date: 2019-03-06T20:15:50.722Z
image: /assets/images/juno-updates-for-march-2019/1eSbWcKZ7UBkxfQpaGwEX3g@2x.png
tags:
  - "elementary-os"
  - "updates"
  - "open-source"
---

## Code

Code, the elementary code editor, saw a lot of small improvements in March. We fixed the `New Window` desktop action behavior, we now properly synchronize `Ctrl+N` key presses with number of new documents spawned, and we fixed a build system issue for the `editorconfig` dependency.

As far as features go, we added a highly requested one: there’s now a `Change Branch` context menu item for project folders in the sidebar, making it easier to use Git right from inside Code.

We also now avoid a possible startup crash related to how extensions load. If you’d previously had issues opening Code with extensions like the Browser Preview enabled, this should now be fixed for you.

Lastly, we’ve updated translations.
[**elementary/code**
*Code editor designed for elementary OS. Contribute to elementary/code development by creating an account on GitHub.*github.com](https://github.com/elementary/code/releases/tag/3.1.0)

## Panel

The top Panel (codenamed WingPanel) is made up of multiple components including the Panel itself plus several indicators. For the Panel itself, we’ve fixed an issue where users were seeing a small amount of overlap on top of apps in some cases.
[**elementary/wingpanel**
*Stylish top panel that holds indicators and spawns an application launcher - elementary/wingpanel*github.com](https://github.com/elementary/wingpanel/releases/tag/2.2.3)

Plus, new releases of some indicators have fixed issues:

### Session Indicator

We’ve added keyboard shortcut accelerators to menu items for lock and logout. We’ve also updated some translations.

<figure markdown="1">
![](/assets/images/juno-updates-for-march-2019/1GsVXELsVOY8vFzJJFfFkxw@2x.png)
</figure>
[**elementary/wingpanel-indicator-session**
*Wingpanel Session Indicator. Contribute to elementary/wingpanel-indicator-session development by creating an account on…*github.com](https://github.com/elementary/wingpanel-indicator-session/releases/tag/2.2.3)

### Sound Indicator

The sound indicator, which shows input and output volume and playing media apps, received a lot of love in March.

<figure markdown="1">
![](/assets/images/juno-updates-for-march-2019/1WEku9EMNJcFferkuxM4-0g@2x.png)
</figure>

We fixed several issues around scrolling over the volume icon and scale slider. Smooth scrolling, touchpad scrolling, and scroll directions should all be more sane now.

We also have some handy new features for microphone users, like podcasters or others who record on their devices. You can now middle- or three-finger click the microphone icon right in the panel to mute it. Similarly, you can now scroll over the microphone icon to adjust input volume instead of the output volume like before.

Lots of small fixes and tweaks made it in as well like smarter updating of art from connected music players (via MPRIS), better music player fallback icon logic, an animated microphone mute icon, and of course updated translations.
[**elementary/wingpanel-indicator-sound**
*Wingpanel Sound Indicator. Contribute to elementary/wingpanel-indicator-sound development by creating an account on…*github.com](https://github.com/elementary/wingpanel-indicator-sound/releases/tag/2.1.3)

## System Settings

Like the Panel, System Settings is comprised of multiple components: the System Settings app itself as well as individual settings “plugs”. We improved search keywords across the board, making it easier to find what you’re looking for in the System Settings search entry or from the system-wide Applications Menu. Several plugs also received updates in March:

### Keyboard Settings

This month we added a window `Close` keybinding option, so you can customize it from the default “Alt+F4” to something of your liking.

We also improved keyboard navigation, fixed the build system for the `gnomekbdui` dependency, worked on implementing more accurate and consistent labels, and changed the underlying appdata id to `io.elementary.switchboard.keyboard`.

### Sound Settings

This one’s a pretty significant update! We overhauled the Output Devices logic, increasing available devices—such as speakers or audio outputs over HDMI and DisplayPort—and no longer burying devices under “Ports”. In our testing this makes more sound output devices available on more hardware. If you’ve ever had issues getting HDMI, DisplayPort, or other unique audio setups to work well, this one is for you.

<figure markdown="1">
![](/assets/images/juno-updates-for-march-2019/1eSbWcKZ7UBkxfQpaGwEX3g@2x.png)
</figure>

And of course, we’ve updated translations.
[**elementary/switchboard-plug-sound**
*Switchboard Sound Plug. Contribute to elementary/switchboard-plug-sound development by creating an account on GitHub.*github.com](https://github.com/elementary/switchboard-plug-sound/releases/tag/2.2.0)

## Gala

There was a small Gala release with some bugfixes around the display scaling factor and copying screenshots to the clipboard.
[**elementary/gala**
*Gala Window Manager. Contribute to elementary/gala development by creating an account on GitHub.*github.com](https://github.com/elementary/gala/compare/1a96644c6aac405927499dacb308dea13512e919...395670ec3db6b6cd61f06950d64dc37e4eaf408a)

*Thanks to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*