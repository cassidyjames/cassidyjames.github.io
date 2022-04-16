---
title: All Aboard The Meson Future Hype Train
description: Choo Choo
date: '2018-01-23T02:10:03.345Z'
categories: []
keywords: []
slug: /@DanielFore/all-aboard-the-meson-future-hype-train-2b6c478b6b9e
---

When developers on elementary OS want to make a new app, they need something called a build system to take all of their source code (stuff that humans can read) and turn it into an executable binary (stuff computers can read). The build system also handles things like installing files that we need to describe your app in AppCenter, show it in the Applications menu, and more (metadata). For quite a while now, the build system that we’ve endorsed at elementary has been CMake. CMake does a pretty decent job at being legible and we’ve provided a number of modules to make sure that it can do all of the things we need it to do without developers having to spend a lot of time writing build system code. Let’s face it, build system code is boring and spending time writing it is time spent away from actually making your app more awesome. That’s why I’m excited to say that the new hotness is here and it sure is new and hot.

![](https://cdn-images-1.medium.com/max/800/1*tBWfQguw3TMKWIZMdyLSVQ.png)

### Just Show Me The Comparison

Let’s get this right out the way and take a look at a typical CMake file versus a Meson file. First up is CMake:

An example CMake build file

And here’s Meson:

An example Meson build file

One big difference you should notice immediately is that installing files is just an argument instead of a whole new method and Meson is generally smart about knowing where certain files (like executables) should be installed to. You should also notice that things are a little more automatic regarding dependency handling and Meson has built-in variables for things like the system data directory. In general, we’ve noticed that Meson build files are shorter and easier to read than CMake, which makes writing and maintaining them much faster and easier.

What you won’t see here is that this CMake file actually depends on [a repository](https://github.com/elementary/cmake-modules) with a few hundred extra lines of CMake to add support for things like internationalization and GResource. Meson is ready to go without extra dependencies and has [upstream modules](http://mesonbuild.com/Modules.html) to support these functions. It also automatically provides some other niceties like uninstall targets and builds run in parallel by default without having to add arguments like `make -j9`.

Meson has [great documentation](http://mesonbuild.com/), and many well known projects like Gtk+ and Systemd have made the switch so you know it can handle complex build system tasks. We’re also excited about the active development community around Meson and we’ve committed fixes upstream for [better Vala support](https://github.com/mesonbuild/meson/commit/295f8e14b1daa81107efd9019a006e9f599c3cdd) and [easier translation updates](https://github.com/mesonbuild/meson/commit/93d2ced31f9e23491ce010161475956b795a6235#diff-28c8ddebf584bf2879a67b8ab022f02a).

### Coming to Juno

We’ve already begun migrating many of our projects to Meson, but [like our big naming switch](https://medium.com/elementaryos/cleaning-up-app-codenames-ef9fc637ddef) it will take a while to transition. From now on, all new elementary code will be built with Meson.

Meson is available already for developers to use in Loki, but it does require a bit of [extra work](https://github.com/danrabbit/harvey/blob/2782727e56328bbc98e8633624b084f5919d1985/debian/rules) on the Deb packaging side. In Juno, we’ll have a new version of Debhelper that makes packaging a Meson-built project [just as automatic](https://github.com/elementary/wingpanel-indicator-nightlight/blob/deb-packaging/debian/rules) as CMake is today.

We’re pretty excited about making our platform more approachable for our 3rd party developer community, so you can expect our documentation to be updated as soon as the first preview builds of Juno become available to developers.

_We’d like to say thanks to everyone who’s bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_