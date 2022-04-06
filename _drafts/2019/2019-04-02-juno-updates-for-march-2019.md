---
title: 'Juno Updates for March, 2019'
description: >-
  While we made a pretty big announcement on April 1, March wasn’t without its own hard work
date: '2019-04-02T23:32:58.869Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/800/1*GsVXELsVOY8vFzJJFfFkxw@2x.png
tags:
  - updates
  - juno
---

While we made a pretty [big announcement on April 1]({{ site.baseurl }}{% post_url 2019/2019-04-01-elementary-appcenter-flatpak %}), March wasn’t without its own hard work. Cassidy attended the [Parental Controls & Metered Data hackfest]({{ site.baseurl }}{% post_url 2019/2019-03-22-parental-controls-metered-data-hackfest %}), plus we pushed out several updates to elementary OS:

## Code

Code, the elementary code editor, saw a lot of small improvements in March. We fixed the `New Window` desktop action behavior, we now properly synchronize `Ctrl+N` key presses with number of new documents spawned, and we fixed a build system issue for the `editorconfig` dependency.

As far as features go, we added a highly requested one: there’s now a `Change Branch` context menu item for project folders in the sidebar, making it easier to use Git right from inside Code.

We also now avoid a possible startup crash related to how extensions load. If you’d previously had issues opening Code with extensions like the Browser Preview enabled, this should now be fixed for you.

Lastly, we’ve updated translations.

[**elementary/code** _Code editor designed for elementary OS_ on GitHub.com](https://github.com/elementary/code/releases/tag/3.1.0 "https://github.com/elementary/code/releases/tag/3.1.0")[](https://github.com/elementary/code/releases/tag/3.1.0)

## Panel

The top Panel (codenamed WingPanel) is made up of multiple components including the Panel itself plus several indicators. For the Panel itself, we’ve fixed an issue where users were seeing a small amount of overlap on top of apps in some cases.

[**elementary/wingpanel** _Stylish top panel that holds indicators and spawns an application launcher_ on GitHub.com](https://github.com/elementary/wingpanel/releases/tag/2.2.3 "https://github.com/elementary/wingpanel/releases/tag/2.2.3")[](https://github.com/elementary/wingpanel/releases/tag/2.2.3)

Plus, new releases of some indicators have fixed issues:

### Session Indicator

We’ve added keyboard shortcut accelerators to menu items for lock and logout. We’ve also updated some translations.

![](https://cdn-images-1.medium.com/max/800/1*GsVXELsVOY8vFzJJFfFkxw@2x.png)

[**elementary/wingpanel-indicator-session** _Wingpanel Session Indicator_ on GitHub.com](https://github.com/elementary/wingpanel-indicator-session/releases/tag/2.2.3 "https://github.com/elementary/wingpanel-indicator-session/releases/tag/2.2.3")[](https://github.com/elementary/wingpanel-indicator-session/releases/tag/2.2.3)

### Sound Indicator

The sound indicator, which shows input and output volume and playing media apps, received a lot of love in March.

![](https://cdn-images-1.medium.com/max/800/1*WEku9EMNJcFferkuxM4-0g@2x.png)

We fixed several issues around scrolling over the volume icon and scale slider. Smooth scrolling, touchpad scrolling, and scroll directions should all be more sane now.

We also have some handy new features for microphone users, like podcasters or others who record on their devices. You can now middle- or three-finger click the microphone icon right in the panel to mute it. Similarly, you can now scroll over the microphone icon to adjust input volume instead of the output volume like before.

Lots of small fixes and tweaks made it in as well like smarter updating of art from connected music players (via MPRIS), better music player fallback icon logic, an animated microphone mute icon, and of course updated translations.

[**elementary/wingpanel-indicator-sound** _Wingpanel Sound Indicator_ on GitHub.com](https://github.com/elementary/wingpanel-indicator-sound/releases/tag/2.1.3 "https://github.com/elementary/wingpanel-indicator-sound/releases/tag/2.1.3")[](https://github.com/elementary/wingpanel-indicator-sound/releases/tag/2.1.3)

## System Settings

Like the Panel, System Settings is comprised of multiple components: the System Settings app itself as well as individual settings “plugs”. We improved search keywords across the board, making it easier to find what you’re looking for in the System Settings search entry or from the system-wide Applications Menu. Several plugs also received updates in March:

### Keyboard Settings

This month we added a window `Close` keybinding option, so you can customize it from the default “Alt+F4” to something of your liking.

We also improved keyboard navigation, fixed the build system for the `gnomekbdui` dependency, worked on implementing more accurate and consistent labels, and changed the underlying appdata id to `io.elementary.switchboard.keyboard`.

### Sound Settings

This one’s a pretty significant update! We overhauled the Output Devices logic, increasing available devices—such as speakers or audio outputs over HDMI and DisplayPort—and no longer burying devices under “Ports”. In our testing this makes more sound output devices available on more hardware. If you’ve ever had issues getting HDMI, DisplayPort, or other unique audio setups to work well, this one is for you.

![](https://cdn-images-1.medium.com/max/1600/1*eSbWcKZ7UBkxfQpaGwEX3g@2x.png)

And of course, we’ve updated translations.

[**elementary/switchboard-plug-sound** _Switchboard Sound Plug_ on GitHub.com](https://github.com/elementary/switchboard-plug-sound/releases/tag/2.2.0 "https://github.com/elementary/switchboard-plug-sound/releases/tag/2.2.0")[](https://github.com/elementary/switchboard-plug-sound/releases/tag/2.2.0)

## Gala

There was a small Gala release with some bugfixes around the display scaling factor and copying screenshots to the clipboard.

[**elementary/gala** _Gala Window Manager_ on GitHub.com](https://github.com/elementary/gala/compare/1a96644c6aac405927499dacb308dea13512e919...395670ec3db6b6cd61f06950d64dc37e4eaf408a "https://github.com/elementary/gala/compare/1a96644c6aac405927499dacb308dea13512e919...395670ec3db6b6cd61f06950d64dc37e4eaf408a")[](https://github.com/elementary/gala/compare/1a96644c6aac405927499dacb308dea13512e919...395670ec3db6b6cd61f06950d64dc37e4eaf408a)

