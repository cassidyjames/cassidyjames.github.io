---
title: Updates for October, 2019
description: "The Flatpak Update. Plus: prepping for LAS and wrapping up Hacktoberfest."
author: cassidyjames
image: /images/updates-for-october-2019/sideload@2x.png

tags:
  - updates
  - juno
  - flatpak
  - appcenter

sponsor:
  name: System76
  link: https://s76.co/ElementarySponsorship
  image: /images/sponsors/system76.png
  image-2x: /images/sponsors/system76@2x.png
  hook: "They make killer Linux laptops, desktops, and servers. If you're looking for a new computer, head their way!"

facebook: https://www.facebook.com/elementaryos/posts/2804510489580762
mastodon: https://mastodon.social/@elementary/103065145606890904
reddit: https://www.reddit.com/r/elementaryos/comments/dqajba/updates_for_october_2019_elementary_blog/
twitter: https://twitter.com/elementary/status/1190376602913427456
---

Welcome to November! A bit later this month we’ll be attending the [Linux App Summit](https://linuxappsummit.org) alongside folks from Canonical, CodeThink, Collabora, Endless, Flatpak, Fractal, GNOME, GStreamer, KDE, Krita, LibreOffice, Meson, Purism, Red Hat, Ubuntu and more in Barcelona, Spain to hang out and work with folks from across the open source community—plus we'll be giving a couple of talks about [Curb Cuts](https://conf.linuxappsummit.org/en/LAS2019/public/events/43) and [Growing Beyond the System Tray](https://conf.linuxappsummit.org/en/LAS2019/public/events/48).

We'll share more on that later, but first: let's take a look at all of the updates that went out to elementary OS users over the past month.

## Sideload & Flatpak

We have a brand new app for elementary OS to enable easier sideloading of apps. Sideload handles `flatpakref` files, like those you might find on [Flathub](https://flathub.org) or another third-party website providing a Flatpak app for download.

![Sideload screenshot]({{ site.baseurl }}/images/updates-for-october-2019/sideload.png){: srcset="{{ site.baseurl }}/images/updates-for-october-2019/sideload@2x.png 2x"}

While we always recommend users visit AppCenter for quality curated apps made for elementary OS, we understand that there are some cross-platform apps that don't meet the requirements to be curated in AppCenter. Rather than leaving users out on their own to add insecure PPAs or run random scripts as root, Sideload facilitates a safer way to help users get sandboxed apps.

<aside markdown="1">
>Flatpak is now enabled out of the box on elementary OS
</aside>

This also means that Flatpak is now enabled out of the box on elementary OS, and we've [submitted a pull request](https://github.com/flatpak/flatpak.github.io/pull/355) to simplify the Flatpak [quick setup instructions](https://flatpak.org/setup/elementary%20OS/) on Flatpak.org to reflect this.

Sideload is a new app and we have plans to iterate on it over time, but it's already super useful and straightforward. The first version was released in October and it will be rolling out to users soon. If you want to get your hands on it early (and aren't afraid of the Terminal), you can install it with:

```shell
sudo apt install io.elementary.sideload
```

## Updates Released

Towards the end of the month we also finalized our brand new automation-powered release process (more on that in an upcoming blog post), meaning we were able to easily queue up the releases of several apps and desktop components.

### AppCenter: Flatpak, Non-Curated Warning, & Up to 10× Faster

The big AppCenter update is finally here! This release adds Flatpak support out of the box, meaning apps from any added user remotes—including those added with Sideload—will show up automatically. Apps with multiple versions available (i.e. from both Flatpak and the Ubuntu repos) will show a drop-down to select the version of the app listing, and Flatpak updates will be included alongside normal updates. Because we default to user installations, installing and updating Flatpak apps does not require an administrator password.

With users adding more non-curated apps into AppCenter with an officially-supported method, we also took time to be more clear about the implications of installing non-curated apps with a new dialog, similar to the Sideload dialog. As with Sideload, this is a starting point and we plan to iterate on it further, especially exposing more specific Flatpak permissions.

![Non-curated warning]({{ site.baseurl }}/images/updates-for-october-2019/non-curated.png){: srcset="{{ site.baseurl }}/images/updates-for-october-2019/non-curated@2x.png 2x"}

On app listings, we've added a loading animation to screenshots, plus added new forward/back navigation buttons on hover in case the little dots were too hard to hit.

<figure markdown="1">
![AppCenter]({{ site.baseurl }}/images/updates-for-october-2019/appcenter-fondo.png)
<figcaption>AppCenter app listing with new screenshot navigation</figcaption>
</figure>

This release also adds the ability to browse and uninstall apps while not connected to the Internet, with a new network infobar that appears and directs you to your networking settings if you're offline.

<figure markdown="1">
![Network infobar]({{ site.baseurl }}/images/updates-for-october-2019/appcenter-network.png){: srcset="{{ site.baseurl }}/images/updates-for-october-2019/appcenter-network@2x.png 2x"}
<figcaption>Network infobar lets you browse cached apps and uninstall while offline</figcaption>
</figure>

Lastly, we've also cleaned up and refactored a _ton_ of code in AppCenter, bringing massive performance improvements and numerous layout fixes. Paired with a newer version of PackageKit, AppCenter performs more actions in parallel. As a result, it's **about 10× faster** for certain operations like showing featured apps on the home page.

### Greeter: Lots of little fixes

We released the first update to the greeter since the new version was released, and it contains a handful of small but meaningful fixes. The greeter should better respect NumLock settings, saves the last user on attempted login, and has sounds enabled (i.e. for the "thud" when backspacing in an empty entry). We also fixed the wallpaper preview for wallpapers of certain aspect ratios, like those for ultra-wide displays. Entering a password no longer immediately removes it, and entering an incorrect password now highlights the typed password after erroring.

Design-wise, we've reduced the size of non-focused user names to make the selected user more prominent.

### Panel: Fixes

We released a minor update to the top panel that fixes a couple of reported issues. First, we've fixed the issue where some users could get the panel to move by dragging with multiple fingers on a touchscreen. We also fixed some focus issues where opening the Applications Menu or certain dialogs from the Panel would get into weird states.

### Date & Time Indicator: Redesign & Fixes

In October we released a major new design for the Date & Time indicator in the top panel. It includes more clear navigation, a dot for events on each day, plus a side pane with the selected day's events. The new design also fixes issues with using a large text size in the Appearance or Universal Access settings and improves overall performance.

![Date & Time indicator screenshot]({{ site.baseurl }}/images/updates-for-october-2019/datetime.png){: srcset="{{ site.baseurl }}/images/updates-for-october-2019/datetime@2x.png 2x"}

We've also released major fixes for recurring events in the indicator, and display an error dialog if the Calendar fails to open for some reason when selecting a day or event.

### Security & Privacy Settings: Housekeeping Redesign

![Housekeeping screenshot]({{ site.baseurl }}/images/updates-for-october-2019/housekeeping.png){: srcset="{{ site.baseurl }}/images/updates-for-october-2019/housekeeping@2x.png 2x"}

We reworked the design of the Housekeeping settings in the Security & Privacy settings to better match the design of the new Onboarding app.

### Bluetooth Settings: Pairing Agent

<figure class="half" markdown="1">
![Bluetooth pairing agent PIN dialog]({{ site.baseurl }}/images/updates-for-october-2019/pairing-pin.png){: srcset="{{ site.baseurl }}/images/updates-for-october-2019/pairing-pin@2x.png 2x"}
![Bluetooth pairing agent passkey dialog]({{ site.baseurl }}/images/updates-for-october-2019/pairing-passkey.png){: srcset="{{ site.baseurl }}/images/updates-for-october-2019/pairing-passkey@2x.png 2x"}
<figcaption>New Bluetooth pairing agent for PINs and passkeys</figcaption>
</figure>

The Bluetooth settings now include a new pairing agent to better handle devices that need a PIN or passkey to pair. This dialog shows up when pairing a device like a keyboard, and should increase the compatibility of elementary OS for more wireless devices.

### Look & Feel

In the look & feel department, we released a new version of the system stylesheet—which controls how everything from buttons to menus are styled—as well as the icon set. The changes are subtle, but overall keep things consistent and looking great.

For the stylesheet, we focused a bit on shadows: we made popover shadows more consistent, plus we improved the shadows on legacy-decorated windows (like those for GTK2 or Electron apps) by lightening them up a bit. Scrollbars in WebKit web views like in Epiphany have been improved with a wider hover state. Support for wide separators in apps like Tilix has been added. We fixed insensitive flat buttons in list rows. We also fixed unreadable keycap text in certain situations. Lastly, we've removed a handful of obsolete or duplicated styles.

For the icons, we refreshed the system update icon with a new metaphor (a download-like arrow on a badge), and added a new symbolic version to be used in places like Sideload and AppCenter's non-curated warning dialog. We've also increased the size of the inset symbols on 32px home icons, making them easier to see at a glance. We added a new workspace preferences icon, and added extra sizes for locale preferences, wireless signal, and user status icons. Lastly, we added a new view-reader icon for reading modes like in Epiphany.

We've also laid the foundations for some upcoming developments with the Dock: we've ensured that the dock badge is always red—even if the stylesheet uses a different accent color—and we've added a (currently hidden) dark style that can be manually enabled in Plank's hidden preferences. More on that later. 😉️

## Hacktoberfest 🍂️👩‍💻️🎃️

Besides releasing a bundle of updates in October, this year we also saw great participation in [Hacktoberfest](https://hacktoberfest.digitalocean.com/) solving bitesize bugs across our projects and working with new contributors on their first ever contributions to elementary.

Thank you to all those contributors who made a difference, and thanks to the volunteers and maintainers who helped them out along the way.

## Get the Updates

As with each monthly update, you can also expect general bug fixes, performance improvements, and translation updates that we didn't detail here. Open up AppCenter and hit that "Update All" button to get the goods.

## More Flatpak Details

The response to Flatpak support in elementary OS has been overwhelmingly positive! We covered a lot of the details and frequently-asked questions back in April when we [first announced]({% post_url 2019/2019-04-01-elementary-appcenter-flatpak %}) our Flatpak plans. Be sure to give that a read if you want to learn more or want to see our longer-term plans.

<aside>
{% assign post = site.posts | where:"slug", "elementary-appcenter-flatpak" | first %}
{% include featured.html post=post %}
</aside>
