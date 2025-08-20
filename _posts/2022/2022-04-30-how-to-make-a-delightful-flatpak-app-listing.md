---
title: How to make a delightful Flatpak app listing
description: Tips to make your app shine on Flathub, GNOME Software, and beyond
updated: 2022-04-30
hidden: true
---

Over the years I've helped build [an app ecosystem](https://blog.elementary.io/tags/#appcenter) built on open standards like Flatpak and AppStream, and these days [I work with](/blog/ive-joined-the-endless-os-foundation) organizations deploying Flatpak-based computers to dozens, hundreds, or thousands of people at a time. One of the recurring places I've noticed app developers struggling is their app's metainfo—the structured data that essentially forms an app's marketing page across all the app stores.

**Let's fix that!** This blog post was orginally intended to be a talk at [LAS](https://linuxappsummit.org/), but the deadline completely slipped away from me due to life circumstances. Fear not: I've written it all down. And perhaps I'll give this in a talk form at another event. I digress.

Let's dig into:

- Who this is for
- Why marketing is not a bad word
- Where this work shows up
- All the neat things you can do with metainfo
- Some good examples, and finally
- Marketing, again

### Who is this for?

Before we get too far, let's be clear: this blog post is intended for **app developers** or possibly contributors to apps who want to polish up their favorite apps' listings in app stores. And it should be obvious by now, but this post is intended for **Flatpak apps**, though it could apply to any app on any platform that uses the cross-desktop AppStream standard.

The best app listings are prepared by a developer or dedicated contributor who can understand a few things:

1. What the app is all about
2. How to **market** that

### Wait, marketing? In this economy?

Yes, app store listings are marketing pages. There's no way around it, it's the same as a flyer introducing your app to a new person; you can try to be dry and factual, but it is going to bore that potential user. You gotta _market_ your product. Marketing is not a bad word in open source; in fact, it's a requirement if you want people to find and enjoy your hard work.

<aside markdown="1">
>Marketing is not a bad word in open source; in fact, it's a requirement
</aside>

Look at the mainstream, proprietary app stores: popular apps there have paid marketers designing icons, writing copy, and composing screenshots to ensure _their_ app is the one you download. While we don't have to (or necessarily want to!) do _everything_ like the big app stores, this _is_ the level of detail and quality people will expect when evaluating whether or not they should install your app. 

###  Where does this show up, anyway?

If you spend your time prepping good metadata for your app and nobody sees it, what's the point? Should you just invest your time into making a website, instead?

Luckily, the default software centers/"app stores" across millions of installs of Linux-based OSes as well as the web will make great use of your metadata to show off your app. So far, I know of:

- [Flathub website](https://beta.flathub.org/)
- GNOME Software
- elementary AppCenter ([website](https://appcenter.elementary.io) and desktop client)
- Pop!_Shop
- KDE Discover
- [Apps for GNOME](https://apps.gnome.org/)

Basically, make sure you have good metainfo so your app can look like this:

<figure class="half" markdown="1">
<picture>
  <source srcset="/images/blog/{{ page.slug }}/metadata-cleaner-flathub-dark.png" media="(prefers-color-scheme: dark)">
  <img alt="Screenshot of Flathub" src="/images/blog/{{ page.slug }}/metadata-cleaner-flathub.png" width="849" height="2734" />
</picture>

<picture>
  <source srcset="/images/blog/{{ page.slug }}/metadata-cleaner-circle-dark.png" media="(prefers-color-scheme: dark)">
  <img alt="Screenshot of Apps for GNOME" src="/images/blog/{{ page.slug }}/metadata-cleaner-circle.png" width="849" height="2584" />
</picture>

<picture>
  <source srcset="/images/blog/{{ page.slug }}/metadata-cleaner-elementary-dark.png" media="(prefers-color-scheme: dark)">
  <img alt="Screenshot of AppCenter" src="/images/blog/{{ page.slug }}/metadata-cleaner-elementary.png" width="946" height="1438" />
</picture>

<picture>
  <source srcset="/images/blog/{{ page.slug }}/metadata-cleaner-discover-dark.png" media="(prefers-color-scheme: dark)">
  <img alt="Screenshot of KDE Discover" src="/images/blog/{{ page.slug }}/metadata-cleaner-discover.png" width="855" height="1661.5" />
</picture>

<figcaption markdown="1">
Same app listing on Flathub, Apps for GNOME, AppCenter, and KDE Discover.
</figcaption>
</figure>

And as an important note: since this data is a cross-desktop standard, it can show up in new, innovative ways! For example,

- An app launcher could use your app's branding for accent colors
- A desktop environment could use 
- Your app could use this info in its About dialog
- **It works offline**, so it's far superior to a website, as it can share information

### Let's get into metainfo

The FreeDesktop docs have a sort of [crash course on AppStream metainfo](https://www.freedesktop.org/software/appstream/docs/chap-Quickstart.html), and I won't try to completely duplicate that here. Instead, I'll assume you can look up the docs and follow along. Let's look at what makes an app listing according to AppStream metainfo, in a non-technical sense.

#### Icon & Name

The most prominent and important parts of your app's branding! Together, your app's icon and name form its _identity:_ how people will recognize your app among the sea of alternatives.

If you're at the stage of looking for inspiration for your app, the GNOME HIG has great sections for [naming your app](https://developer.gnome.org/hig/guidelines/app-naming.html) and [designing an app icon](https://developer.gnome.org/hig/guidelines/app-icons.html). The [elementary HIG](https://docs.elementary.io/hig/reference/iconography) and [KDE HIG](https://develop.kde.org/hig/style/icons/index.html) also have sections about designing icons if you're specifically targeting those platforms.

#### Summary

Frequently paired with the icon and name where space allows; also used as a tagline or heading in some places. This should be the hook that reminds people what your app is, or gets them interested if they've never heard of it before.

#### Description

The _guts_ of your app listing in app stores. This is where you go into as much detail as you'd like about what your app does, its features, and why it exists. You don't want it to be overwhelming (or nobody will read it), but you can get a bit detailed here. AppStream allows bulletted lists which is a great way to break sections up.

#### Developer name

This may seem obvious, but this is the name of who makes the app: if it's a company, it goes here; if it's an individual, your name goes here.

#### Screenshots!

The most prominent component of your app listing in many app stores; this is where you let the design of your app _shine._ Note that it's _not_ good practice to include marketing copy, non-screenshot graphics, etc. in this section.

#### Release info

No, release notes aren't _just_ for nerds; well-written and accurate release info is a way your app can stand out among the crowd. If people see you sweat the details here, they'll know you care about the details in your app, too.

#### URLs

AppStream supports a handful of URL types so app stores can link people to relevant places on the Internet; you can link to a homepage, issue tracker, support page, code repository, and more.

#### Accent colors!

This one is relatively new, but following in the footsteps of the custom elementary tag, AppStream now supports a standardized way to include brand accent colors in your app listing! This can make your app stand out nicely.

### Examples

https://appcenter.elementary.io/org.small_tech.comet/

https://apps.gnome.org/app/com.github.bleakgrey.tootle/

https://beta.flathub.org/apps/details/com.cassidyjames.plausible

Where's the meat? https://twitter.com/ryanprior/status/1520263027471405060

### Marketing, again

- Befriend or hire a designer
- Branding (name, summary, icon, colors, to a lesser extent screenshots) are the most important
- GNOME resources (Tobias' blog for naming?)
