---
title: "Cleaning Up App Codenames"
description: "GitHub and RDNN make for a more sane scheme"
author: cassidyjames
date: 2017-07-21T15:14:14.057Z
image: /images/cleaning-up-app-codenames/10aDjghzZlPSzu9-d1AtSCQ.png
tags:
  - dev
---

We’re making some changes to our app codenames (and how we refer to apps) to clean up a few mismatched schemes. This gets a little nerdy (talking about GSettings and AppData), but it’s good info for any developers or just curious users of elementary OS.

## In the beginning…

Historically, elementary apps were given fun and clever code names; we had “Dexter” the contacts app (rolodex), “Postler” the email app (postal mail, plus reflecting the “Dexter” name), “BeatBox” the music player (which later became “Noise”), “Audience” the video player, etc. This convention came from the fact that our apps —which predate our desktop environment and OS — were third-party apps on top of Ubuntu. We had fun and clever names to stand out from the crowd of pre-installed and popular apps on Ubuntu at the time.

<figure markdown="1">
![BeatBox on Ubuntu many, many years ago…](/images/cleaning-up-app-codenames/10aDjghzZlPSzu9-d1AtSCQ.png)
<figcaption markdown="1">
BeatBox on Ubuntu many, many years ago…
</figcaption>
</figure>

But we’ve grown quite a bit since.

## Pantheon

Our new desktop environment was introduced with elementary OS 0.2 Luna. Most of our apps developed alongside or since Pantheon have been named `pantheon-foo`, where “foo” is the generic name of the app. We have pantheon-files, pantheon-terminal, pantheon-photos, etc. which user-facing, we call Files, Terminal, Photos, etc. This is much easier for users new to elementary OS to follow; there’s not a seemingly random codename thrown into the mix. This also jived with the idea that Pantheon is a whole desktop environment including a suite of apps, not just a shell. This didn’t exactly solve all of our problems, though.

One problem is that migrating is hard; if not done carefully and at the right time, changing a binary name along with its .desktop file, appdata, GSettings schema, etc. can led to users being confused, having apps disappear from their dock, and even losing data. It’s also difficult to decide which apps are technically part of Pantheon, and which are just “elementary apps.” The result: a mis-mash of clever codenames and pantheon- codenames with mostly generic names on top.

Another problem surfaced to me recently when Carl of System76 kept referring to Mail as “Pantheon”; it wasn’t clear to him that Pantheon in this case was the name of our DE, not the codename of the app. And looking back, it’s an easy mistake.

## RDNN and GitHub to the rescue!

When we migrated to GitHub, one decision we made was to genericize the repository names as much as possible. Since everything is scoped under [github.com/elementary](https://github.com/elementary), we didn’t need to prefix everything with elementary or Pantheon. So now we have [elementary/icons](https://github.com/elementary/icons), [elementary/mail](https://github.com/elementary/mail), [elementary/files](https://github.com/elementary/files), [elementary/terminal](https://github.com/elementary/terminal), etc.

Further, we’re adopting [RDNN](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) across our apps. This is encouraged by FreeDesktop.Org projects like [D-BUS](https://dbus.freedesktop.org/doc/dbus-api-design.html#api-design) as well as by [GNOME](https://wiki.gnome.org/HowDoI/ChooseApplicationID), so we’re being consistent both with ourselves and other major Open Source projects.

Moving forward, an elementary app with a generic name Baz would have a repository of github.com/elementary/baz, an app ID (including .desktop and AppData filenames) of `io.elementary.baz`, a binary of `io.elementary.baz`, and a gsettings path of `/io/elementary/baz`. User-facing, we’ll continue to refer to apps by their generic names (just “Baz”) as well.

<figure markdown="1">
![The few apps whose gsettings we’ve begun to migrate](/images/cleaning-up-app-codenames/1caBJZsZA3-d0pJfy65x2ug.png)
<figcaption markdown="1">
The few apps whose gsettings we’ve begun to migrate
</figcaption>
</figure>

For clarity (i.e. when talking about elementary apps on another OS), we may occasionally refer to apps as “elementary Baz.” This makes it easier for people outside of elementary to instantly recognize that it’s an elementary app, reduces confusion with other apps (GNOME Files vs. elementary Files), and also comes naturally from looking at the app ID and GitHub repositories.

We’ve started making this migration with a few apps, and we’re considering it a major platform goal as we work toward the release of elementary OS Juno.

## tl;dr

  * App codenames are a mess right now for historical reasons
  * We’re standardizing on generic names
  * Repos live at github.com/elementary/genericname
  * App IDs use RDNN, so io.elementary.genericname
  * We’ll prefix “elementary” only for clarity, i.e. “elementary Files” vs “GNOME Files”
  * This is a migration, not instantaneous. It will take a while to complete, but work is already underway.
