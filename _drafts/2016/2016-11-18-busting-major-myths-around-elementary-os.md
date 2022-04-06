---
title: Busting Major Myths Around elementary OS
description: A look at the facts
date: '2016-11-18T23:13:55.338Z'
author: danrabbit
tags:
  - gnome
  - myths
  - design
  - evergreen
---

The open source desktop landscape is complicated. There are many distros, many desktop environments, and so many things to know about each of them. We often see folks fall into some of the same pieces of misinformation when reporting on or commenting about elementary OS. So here’s a look at some of the major myths around elementary OS and what the actual facts are.

## “elementary OS uses GNOME Shell”

<figure markdown="1">
![GNOME Shell’s Overview](https://cdn-images-1.medium.com/max/800/0*hLePTNGpV2q2TZ3w.)
<figcaption>Shell GNOME’s Overview</figcaption>
</figure>

This is a pretty easy mistake to make. GNOME has been around a long time and there are quite a few distros that just ship with a modified version of it. But, elementary OS ships with our own home-grown desktop environment called Pantheon. Just recently, Pantheon has been recognized in both the freedesktop.org menu specification and in AppStream.

Unlike GNOME Shell, Pantheon is made up of a number of individual components. The panel, window manager, and dock are all separate programs, as are many other small helper programs like the Polkit Agent which handles authentication dialogs. In GNOME Shell these are all part of a single monolithic program. We believe that our choice of architecture makes the desktop environment more robust and ensures that others are able to benefit from our work by remixing it into their own distributions.

Another major notable difference between GNOME Shell and Pantheon is choice of programming language. Pantheon is written in Vala, while GNOME Shell is written in JavaScript (Specifically, [GJS](https://wiki.gnome.org/action/show/Projects/Gjs?action=show&redirect=Gjs)). Just to reiterate, these are totally separate unrelated code bases and are not derived from each other at all. We’re committed to using a single language across our entire desktop and apps. This allows us to share code, enforce a consistent code style, and ensure developers writing their own apps can learn from and adapt our code to new purposes.

## “elementary OS is just a skin for Ubuntu”

It’s a common criticism among Ubuntu derivatives that the developers just add a desktop environment on top of Ubuntu, making it effectively a skin and not having a meaningful impact on the usage of the operating system as compared to Ubuntu. But elementary OS is far from a skin.

We maintain [over 100 distinct open source projects](https://github.com/elementary). These include our desktop environment Pantheon and its components like the [panel](https://github.com/elementary/wingpanel), [window manager](https://github.com/elementary/gala), [app launcher](https://github.com/elementary/applications-menu), [settings app](https://github.com/elementary/switchboard) and [plugs](https://github.com/elementary?q=switchboard-plug-), and [system indicators](https://github.com/elementary?q=wingpanel-indicator-); over a dozen apps like [AppCenter](https://github.com/elementary/appcenter), [Music](https://github.com/elementary/music), [Calendar](https://github.com/elementary/calendar), [Calculator](https://github.com/elementary/calculator), [Camera](https://github.com/elementary/camera), [Photos](https://github.com/elementary/photos), [Videos](https://github.com/elementary/videos), [Code](https://github.com/elementary/scratch), and [Terminal](https://github.com/elementary/terminal); libraries like [Granite](https://github.com/elementary/granite); daemons and agents for services like [Parental Controls](https://github.com/elementary/switchboard-plug-parental-controls) and [Polkit](https://github.com/elementary/pantheon-agent-polkit); patches for upstream projects including unique configurations; code that puts all of that together into the final disk image; and then of course our system [stylesheet](https://github.com/elementary/stylesheet) and [icons](https://github.com/elementary/icons) which extend past the freedesktop.org specification and provide 3rd party developers with a more expansive set of assets than what comes with Ubuntu.

But it doesn’t stop with providing things on top of Ubuntu. elementary OS is not a remixed Ubuntu disk image. Instead, we build elementary OS images from metapackage seeds, just like Debian. This gives us the ability to tailor an experience that not only changes little things like showing password feedback asterisks in Terminal, but big things like using LibInput instead of xinput for better touchpad support.

## “elementary OS is made to look like macOS”

It’s no secret that macOS has been a champion of design on the desktop for nearly 15 years now. Steve Jobs is quoted as saying, “We made the buttons on the screen look so good you’ll want to lick them”. So we can see where people are coming from. We’re also very careful and put a lot of effort into having great design in elementary OS. But you might be surprised to know that we have less in common with OS X than others would have you believe.

<figure markdown="1">
![A Typical GNOME 2 desktop](https://cdn-images-1.medium.com/max/800/0*zldwFgOe1-NxytoS.)
<figcaption>A Typical GNOME 2 desktop</figcaption>
</figure>

Pantheon was originally developed to be a successor to GNOME 2, the desktop environment that we shipped in the first version of elementary OS. Many of the decisions about the layout of the desktop come from that heritage, including an applications menu at the top left, indicators with a session menu at the top right, and a place to switch between apps and workspaces at the bottom of the display. The first few iterations of our desktop included multiple docks or panels in different styles, sizes, and positions, but in the end we kept a single dock at the bottom of the screen. While at first glance it might look similar to the one found in OS X, the behavior of our dock is quite different, especially with regards to our hide mode which doesn’t steal screen real estate away from apps while you’re working.

Some things you won’t find in elementary OS are the iconic “traffic light” window buttons or a global menu. We also have chosen to make much wider use of colorful iconography in a style derived from [Tango!](https://commons.wikimedia.org/wiki/Tango_icons), which is quite different from both the hyper-real app icons and the flat symbolic toolbar icons you’ll see in macOS. We’ve avoided trends like translucency, extra gloss, and over-flatness and instead have opted to take a number of more timeless notes from things like [Material](https://material.google.com/) design, emphasizing the use of light, shadow, and color to help break up an application’s layout and provide clarity.

## “elementary just forks other apps and doesn’t write their own”

This myth is ever-so-partially based in truth; elementary does maintain two forked apps: Photos and Mail. However both of these apps were originally developed by Yorba (who has unfortunately closed up shop and ceased development) and Mail was designed in heavy collaboration with elementary. After some discussion with Jim Nelson, head of Yorba at the time, we felt it was better to continue developing these apps under a new name and vision. We’ve heard that recently some other developers have also adopted the original codebases and we can only remark that this means more choice for our users.

There are two other apps that might loosely qualify as forks: Files and Music. Both of these were originally developed for elementary OS, but the development team split over technical disagreements. In both cases, elementary gave up the original names to the developers who left.

On to the misconceptions! Switchboard (aka System Settings) is not a fork of GNOME Control Center. elementary maintains a compatibility layer that allows Control Center panes to be displayed, and we currently only ship 4 out of 22 of these by default. The major difference being that Switchboard is designed from the beginning to be extensible and modular, making it easier to reuse and re-mix in new fledgling desktop environments, but also that our Switchboard panes contain settings that are unique to our desktop environment and applications. We don’t need to carry extra external apps to supplement or deal with settings that don’t apply.

## “elementary writes their own apps for no good reason”

We have a number of our own apps including AppCenter, Calculator, Calendar, Camera, Code, Files, Mail, Music, Photos, Screenshot, Terminal, and Videos. For each of these apps, there are comparable solutions from other developers. We could just ship a collection of other folks’ apps with elementary OS. However, we have some pretty good reasons for not doing so.

<figure markdown="1">
![Files’ column view](https://cdn-images-1.medium.com/max/800/0*1CdTmsCVwtppUGj9.)
<figcaption>elementary Files’ column view</figcaption>
</figure>

First and foremost and most important to our users, elementary apps have features that the other apps don’t. Files has the column view and our smart pathbar. Terminal has backlog search, smart copy/paste, and until recently was the only Terminal app to support notifications. Scratch is built around auto saving. And, all of the aforementioned apps make use of Granite’s tab bar widget which gives them some free extra features like Undo Close Tab, Close Other Tab, and Duplicate Tab. Building our own apps using complex widgets from a common library means that our users can expect features to translate across all of our apps. Every app is also built to adhere to our [Human Interface Guidelines](https://elementary.io/docs/human-interface-guidelines). Using common design patterns means you can learn one app and that knowledge applies to other apps as well. It’s part of what makes elementary OS so easy to pick up for people new to it. Building our own apps also gives us the ability to create unique system features like Privacy Mode and gives us special insight into how to make a desktop environment and platform that makes it easier for third parties to develop powerful and feature-full apps.

But it’s also important to bear in mind that we don’t go our own way unless necessary. We make it a point to use and contribute back to standard libraries and avoid writing things that have already been written. And if one of our upstreams comes up with a better solution, we’re happy to retire our code in favor of it, a prime example being the several utilities and widgets that we’ve retired from Granite. We believe that having multiple implementations of a library makes sure that interests are diverse and the library will remain useful to more than just the original authors. We also recognize that development resources are scarce and precious. Focus is the key to success and it means saying “no” to time sinks.

## “elementary OS is for noobs or dumbs down their apps”

I think this stems from the idea that features require complexity. It’s a cultural belief in poor design. But we think that clear, easy-to-use apps are good for both new users and pros. Usability is for everyone and truly usable apps help, not hinder. Keyboard navigation is an example of something that is a priority both for pro users and users with special accessibility needs. An interface works best when it is transparent and empowers users to get things done.

It’s worth mentioning that elementary OS itself is developed with elementary apps. Scratch, Files, and Terminal need to be good development tools, because they’re the ones that we use every day. The people that develop elementary apps are using them for pro user cases and we think about how to make the system more powerful out of the box by including useful tools like Parental Controls and Firewall settings. But we also think about how to make the system more lean and usable by removing clutter and distractions that get in the way of doing meaningful things.

## “elementary doesn’t allow other distros to use Pantheon or their apps”

<figure markdown="1">
![Pantheon running on Manjaro](https://cdn-images-1.medium.com/max/800/0*WOaW0nC8dcLkVjAB.)
<figcaption>Pantheon running on Manjaro</figcaption>
</figure>

This is patently false. All of our desktop code is licensed under the terms of the [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html). That means that we explicitly allow anyone to reuse, remix, and redistribute this code. We also work directly with developers who are interested in porting our code to run on other distros. There are preliminary working versions of Pantheon available on Arch and Fedora, with efforts underway to port to Gentoo and Suse among others. Also of note, several of our apps are currently available in upstream Debian.

## “elementary OS holds back updates”

In elementary OS, patched packages are built with launchpad recipes, so when an upstream codebase is changed, a new build is automatically triggered and our patch is applied on top. We also make sure to avoid things like namespace collisions in packages. We take full advantage of the knowledgeable and hard-working security teams at Debian and Canonical, and we make sure our users are getting those updates as quickly as possible.

## “elementary doesn’t contribute to upstream projects”

Our upstream code contributions include the likes of Evolution Data Server, Gstreamer, GSSO, Gtk+, Vala, and more. We’ve also contributed funds to events like Inkscape Toronto and Debconf. We’ve donated to FontAwesome and OpenStreetMap and even to projects that our users make use of like rEFInd. And of course there’s the several thousand dollars in bounties that we’ve placed on upstream projects, particularly Gtk+.

We also have several downstreams and we work with them regularly, for example Xubuntu who uses a derivative of elementary icons. In fact, Humanity (the Ubuntu icon set), is derived from elementary icons and many downstreams use derivatives of those icons like Mint. We’re also happy to see that other distros have started picking up useful tools like our Captive Network Assistant.

Something else we’ve done pretty recently is to revitalize the development of [valadoc.org](https://valadoc.org). We fixed broken features, gave it a massive visual overhaul, and [now serve the site](https://medium.com/elementaryos/were-now-hosting-valadoc-org-e53b1deacc85) over HTTPS. We’ve also joined the [Snap Format technical oversight board](https://medium.com/elementaryos/weve-joined-the-snap-format-tob-e1e46968faef). So we’re very interested in participating in technologies that benefit the wider open source ecosystem.

¯\\\_(ツ)\_/¯

