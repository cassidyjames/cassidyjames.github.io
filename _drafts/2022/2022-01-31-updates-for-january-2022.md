---
title: Updates for January, 2022
description: What’s new in OS 6.1, plus shifting development to OS 7
author: cassidyjames
image: /images/elementary-os-6-odin-updates-september-2021/card.jpg

tags:
  - updates
  - jolnir

sponsor:
  name: Colin Dean
  link: https://www.codeandsupply.co/
  hook: "Colin Dean is a software engineer, community builder, and non-profit leader from Pittsburgh, Pennsylvania in the United States."
---

We just [released OS 6.1](/elementary-os-6-1-available-now) in December, and this month we're back with a handful of updates and fixes.

An update to Mail brings support for the unified Inbox view to Microsoft 365 accounts, enabling more users to mix e.g. their work and personal inboxes into one super view. We also fixed a few rare freezes and crashes, and fixed duplicate sender addresses when composing messages. As a nice detail, the compose window now uses the subject as the window title to make things easier to find in the Multitasking View and the <kbd>Alt</kbd><kbd>Tab</kbd> window switcher.

<figure>
  {% include picture.html src="mail.png" dark="mail-dark.png" alt="Screenshot of mail compose window" width="651" height="571" %}
  <figcaption>Mail now uses the subject line as the window title when composing</figcaption>
</figure>

We added a confirmation dialog for deleting in Calendar to prevent accidentally wrecking your events—especially helpful for shared and recurring events. You can also now <kbd>Ctrl</kbd><kbd>Click</kbd> links and email addresses in event descriptions to visit them or send a new message.

And rounding out the office productivity apps, we pushed an update to Tasks adding notifications for due tasks so you're more likely to remember and accomplish your to-dos.

There were also a handful of smaller updates throughout the month: we pushed an update to Files to show keyboard shortcuts for New Tab and New Window actions in the context menu—and we fixed a couple of crashes and interaction issues along the way. An update to Network settings fixes an issue with wired connections repeatedly reconnecting. We fixed a potential crash in Videos with certain media codecs. And lastly, we updated our Portals component to fix a number of issues with focus, positioning, animations, and crashes.

### Get these updates

As always, pop open AppCenter on elementary OS 6.1 and hit "Update All" to get all these updates plus your regular security, bug fix, and translation updates.

---

## Shifting Development to OS 7

At this point in the development cycle, we've started to shift our focus to developing elementary OS 7, the next major release. OS 6.1 will continue to receive updates and security fixes to underlying components from the Ubuntu repositories, and we'll continue releasing updates to the core apps and components as we're able—but in some cases, we're focusing on new OS features that rely on underlying technologies that are not available in the OS 6 base.

<aside markdown="1">
>Flatpak apps will continue receiving regular updates in perpetuity; this is the pay-off for adopting it for elementary OS and AppCenter!
</aside>

All Flatpak apps will continue receiving regular updates in perpetuity; this includes default apps like Archive Manager, Calculator, Camera, Captive Network Assistant, Document Viewer, Screenshot, Videos, and Web. This also includes all curated apps from AppCenter as well as any sideloaded apps from other source like Flathub. This is the pay-off for our efforts in investing in Flatpak as a technology and adopting it for elementary OS and AppCenter!

For OS 7 specifically, we've started [a number of initiatives](https://github.com/orgs/elementary/projects/94/views/1) that we hope to see through to the final release. This is in no way a comprehensive or final list of features, but just what we're currently working on:

### Major update and rethinking of Music

We're hearing more often that users are relying on music streaming services and just want a simpler local audio player experience; we've [begun work to rethink Music from the ground up](https://github.com/orgs/elementary/projects/96) as a simpler queue-based audio player that also takes advantages of new technologies like Flatpak and GTK4 from the start.

<figure markdown="1" class="constrained">
![Music screenshot](https://raw.githubusercontent.com/elementary/music/6d1c12767d0c2cd8f391b7b2f067142c9fc875ca/data/screenshot.png)
<figcaption>Sneak peek at the new Music</figcaption>
</figure>

It's still relatively early days here, but the initial work is exciting: we have a solid and very fast audio player with a queue that you can drag and drop files into. It supports repeat modes, shuffle, indicator panel integration through MPRIS, file metadata, and embedded cover art.

We also plan to launch a user study to help us further understand how people collect, store, and consume media on elementary OS which may affect future development of Music as well as Videos. For now, we welcome feedback from [Early Access] users who get their hands on the current state of Music!

### Auto updates in AppCenter

With Flatpak, it's much less risky to automatically update apps in the background because (unlike with Debian packages) the update isn't applied until it has completely succeeded and the app has been restarted. At the same time, we need to consider that non-curated Flatpaks could change their sandboxing out from under users with a simple update. We also need to consider the "try for free" use case for paid apps, where a user can install a paid app for $0 but is prompted to pay again upon an update.

<figure class="constrained">
  {% include picture.html src="appcenter.png" dark="appcenter-dark.png" width="1159" height="797" alt="Screenshot of AppCenter automatic updates toggle" %}
  <figcaption>Daily builds of AppCenter sport an “Automatic Updates” toggle</figcaption>
</figure>

The [initial functionality](https://github.com/elementary/appcenter/pull/1793) has been merged into daily builds of AppCenter in OS 7 already, but we still need to sort out the exact experience—and most importantly, messaging. And then we'll need to heavily test that experience and collect and address feedback from our [Early Access] users.

### Improved power management and battery settings

You may be familiar with "power management" features on other platforms that enable choosing between power saver, a default balanced mode, and a performance mode. We're able to ship this functionality in elementary OS 7, hooking into the device's power management when supported to e.g. either extend battery life or crank up the performance at the expense of battery life and/or fan noise.

<figure markdown="1" class="constrained">
![Screenshot of power management](https://user-images.githubusercontent.com/7277719/148827619-42be5160-f76a-4cbe-bf5d-41f681ee7541.png)
<figcaption markdown="1">
Initial work towards power management in _System Settings_ → _Power_
</figcaption>
</figure>

This work is possible thanks to the [upstream FreeDesktop Power Profiles Daemon](https://gitlab.freedesktop.org/hadess/power-profiles-daemon/), and settings to control its behavior [have been merged](https://github.com/elementary/switchboard-plug-power/pull/192) into OS 7 daily builds—we hope to add a quick way to change modes to the Panel indicator before release as well. We're excited to hear feedback from [Early Access] users here, as this has been a highly-requested feature and we want to make sure to get the experience right.

<figure markdown="1" class="constrained">
![Screenshot of battery health](https://user-images.githubusercontent.com/611168/129139879-b1c00b6f-9bdd-4d91-980d-2b4edd096d3c.png){: width="890" height="565"}
<figcaption markdown="1">
Initial work towards battery health in a reorganized _System Settings_ → _Power_
</figcaption>
</figure>

Similarly, we've started work on a new [battery health/status section](https://github.com/elementary/switchboard-plug-power/pull/194) in the Power settings, along with slight reorganization of the settings; while this has not yet been merged, we've made progress on the design and hope to sort out the implementation for OS 7.

### GTK4, Granite 7, and developer platform updates

OS 7 will come with GTK4 natively, and daily builds of our updated Flatpak runtime include everything developers need to start working with it today, including daily builds of a new major version of Granite and an updated system stylesheet. We're actively working to port a number of apps and desktop components to GTK4 and Granite 7 to take advantage of newer features and improved performance; we've already completed simpler components like Onboarding and Shortcut Overlay, and have branches open for many more.

<aside markdown="1">
>Daily builds of our updated Flatpak runtime include everything developers need to start working with GTK4 today.
</aside>

Granite 7 is still under development, but [so far](https://github.com/elementary/granite/blob/main/data/granite.appdata.xml.in#L13) some highlights are: a new unified `Granite.Placeholder` view to replace both AlertView and Welcome views; style constants that have been removed from GTK have moved to Granite so you can continue e.g. to get deprecation warnings; a more intentional focus on improving compatibility with Adwaita and GTK Default where possible; ongoing efforts to significantly clean up code and improve APIs; and of course, a _ton_ of removals of widgets that are unused or have been replaced by implementations in upstream GTK or other libraries like LibAdwaita.

Speaking of LibAdwaita, we plan to add it to daily builds of our platform soon; multi-touch primitives previously provided by LibHandy are available here as a near drop-in, and in our testing and usage so far we haven't come across any issues e.g. with styling. And as always, we're in constant contact and collaboration with the GNOME and Adwaita folks to ensure that remains the case!

### Super experimental: OS upgrades!

We debated mentioning this, but it's such a hugely-requested feature—and we _are_ in the early planning and experimentation phase. **It's possible this will not be ready in time for the release of OS 7**, but we're currently working on a way to prompt users of a major OS upgrade, to reboot to install the update "offline" (while not logged in), and then to reboot into the new OS. While early work is promising, it will require a _ton_ of testing to ensure it's production-ready. And again, it may or may not make the cut in time for the OS 7 release.

<aside markdown="1">
>While early work is promising, it may or may not make the cut in time for the OS 7 release.
</aside>

So far we're investigating using PackageKit offline updates, but there's not currently a backend for apt, the package manager Ubuntu and thus elementary OS uses. We are investigating how we can complete this work using as many well-supported upstream components as possible, and we're in contact with folks from the Fedora community—we hope this work is useful to Pantheon on other distros as well.

But again, I want to stress that this is a fairly large undertaking and we're in the early phases. We hope it's ready and well-tested in time for the OS 7 release, but we're not currently committing to that.

---

## Around the Web

If you want to check out elementary OS 7, Danielle recently [hosted a livestream](https://www.youtube.com/watch?v=Ryu9-F6B2Gs) to show off a super early look. Check out her stream for a sneak peek:

<div class="constrained" style="margin: 3em auto;">
{% include youtube.html id="Ryu9-F6B2Gs" %}
</div>

OMG! Ubuntu! [wrote about the new Warble app](/warble-wordle-game-clone-for-elementary-os) for elementary OS, read it here:

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "warble-wordle-game-clone-for-elementary-os" | first %}
{% include featured.html post=post %}
</div>

Cassidy was also invited to the [latest monthly Ubuntu Indaba](https://www.youtube.com/watch?v=KDrUFzYDefE&t=23s) to chat about GTK4, Granite, Adwaita, and our relationships with both upstream and downstream open source projects. Give it a watch:

<div class="constrained" style="margin: 3em auto;">
{% include youtube.html id="KDrUFzYDefE" %}
</div>

---

## Sponsors & Early Access

If you want to get your hands on super early builds of elementary OS 7, you're in luck! [Early Access] is up and running with experimental daily builds built from an Ubuntu 22.04 LTS alpha base and the elementary daily repositories, meaning you're getting multiple layers of bleeding-edge software. But if you're wanting to follow along with the development cycle, it's the best way to do so—just keep it off your production machines for now, as major issues are to be expected at this point.

As a reminder, all [GitHub Sponsors] at or above the $10 tier get ongoing Early Access as long as you're subscribed, and the Early Access site includes easy downloads of the latest:

- stable and release candidate builds
- bleeding-edge daily builds
- experimental builds for platforms like Pinebook Pro & Raspberry Pi 4

You also get access to the past month of daily builds for all platforms to aid in debugging or in case the latest build isn't working for you.

<div style="text-align: center" markdown="1">
[GitHub Sponsors]{: .button.flat }
[Get Early Access][early access]{: .button.suggested }
</div>

[early access]: https://builds.elementary.io/
[GitHub Sponsors]: https://github.com/sponsors/elementary
