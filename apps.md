---
class: article
---

# Cassidy's Apps

Apps I've made, and apps I wish existed.

## Flathub

I have a few apps available on Flathub for any modern Linux-based operating system.

[![Dippi icon](https://raw.githubusercontent.com/cassidyjames/dippi/main/data/icons/com.github.cassidyjames.dippi.svg)][dippi] | [![Clairvoyant icon](https://raw.githubusercontent.com/cassidyjames/clairvoyant/main/data/icons/com.github.cassidyjames.clairvoyant.svg)][clairvoyant] | [![Tally icon](https://raw.githubusercontent.com/cassidyjames/tally/main/data/icons/tally.svg)][tally] | [![Butler icon](https://raw.githubusercontent.com/cassidyjames/butler/main/data/icons/app.svg)][butler]
--- | --- | --- | ---
[Dippi] | [Clairvoyant] | [Tally] | [Butler]

[dippi]: https://flathub.org/apps/details/com.github.cassidyjames.dippi
[clairvoyant]: https://flathub.org/apps/details/com.github.cassidyjames.clairvoyant
[tally]: https://flathub.org/apps/details/com.cassidyjames.plausible
[butler]: https://flathub.org/apps/details/com.cassidyjames.butler

---

## Only on Flathub

I've chosen to only distribute and support my apps on [Flathub]; it's the best place to get apps for Linux, regardless of your specific distribution. Get the latest versions from there and know that it's my app, supported by me.

[![Download on Flathub](https://flathub.org/assets/badges/flathub-badge-en.svg)][Flathub]

- **If you're on elementary OS**: AppCenter versions of my apps are **no longer maintained or receiving updates.** I have requested they be removed. Install from [Flathub] to get the latest designs and future updates.

- **If you're using my apps packaged as Snaps**, Arch packages, or anything else: These builds **are not supported by me**, as I don't have the time and energy to test them. They've been repackaged against my wishes.

Flatpak works well across all Linux distributions, and helps guarantee you'll be experiencing my apps as I've designed them. I've asked third-party packagers to not repackage my apps under my name elsewhere; they're all 100% Free and Open Source, but the support and maintenance burden—and effect on reputation—means I don't condone this repackaging.

If you're someone who would like to fork my apps, I encourage it! I simply request you rename them and not distribute them under my name (except e.g. as an individual contributor to the code itself).

[flathub]: https://flathub.org/apps/search?q=cassidyjames

---

## Deprecated

I also have some older apps that are no longer maintained, but I'm leaving here for posterity.

[![Ephemeral icon](https://github.com/cassidyjames/ephemeral/raw/main/data/icons/128.svg)](https://appcenter.elementary.io/com.github.cassidyjames.ephemeral) | [![Ideogram icon](https://github.com/cassidyjames/ideogram/raw/main/data/icons/128.svg)](https://appcenter.elementary.io/com.github.cassidyjames.ideogram) | [![Palette icon](https://github.com/cassidyjames/palette/raw/main/data/icons/128.svg)](https://appcenter.elementary.io/com.github.cassidyjames.palette) | [![Principles icon](https://github.com/cassidyjames/principles/raw/main/data/icons/128.svg)](https://appcenter.elementary.io/com.github.cassidyjames.principles)
--- | --- | ---
[Ephemeral](https://appcenter.elementary.io/com.github.cassidyjames.ephemeral) | [Ideogram](https://appcenter.elementary.io/com.github.cassidyjames.ideogram) | [Palette](https://appcenter.elementary.io/com.github.cassidyjames.palette) | [Principles](https://appcenter.elementary.io/com.github.cassidyjames.principles)

---

## Concepts

Collection of apps that I want to make or wish existed for GNOME. Sketches/wireframes might exist for some of these; if you're interested in taking one of these on, **let me know**.

Also note that the names of in-progress apps and concepts are not set in stone, they're just how I currently refer to them.

### In Progress _(but probably not actively worked on)_

- [**Anamorph**](https://github.com/cassidyjames/anamorph): De-squeeze anamorphic footage, i.e. that shot with a Moment Anamorphic lens.

- [**Codecard**](https://github.com/DevAlien/codecard): Share snippets of code as a pretty image, e.g. for social media.

- [**Codestash**](https://github.com/cassidyjames/codestash): Stash your code for later. Inspired by [SourceNote for Mac](https://www.sourcenoteapp.com/).

- [**Rundown**](https://github.com/cassidyjames/rundown): Battery rundown app that waits until the battery is full, then power is unplugged, then it runs benchmarks until the battery dies. Use across hardware for consistent/comparable battery stats. Probably needs to do a variety of work behind the scenes, like loading webpages (WebKitGTK), maybe playing videos, occasionally hitting the CPU.

- **Webshooter**: Your friendly neighborhood website screenshooter. Grab full-size screenshots of web pages at predefined sizes. Great for sharing prototypes.

### Ideas _Contact me if you want to tackle one, and I can help with design!_

- **Backdrop**: Small collection of curated wallpapers. Maybe using an Unsplash collection as a back-end, or just shipping the wallpapers with the app.

- **Butler**: Home Assistant dashboard on the desktop. A lightweight native wrapper around Home Assistant that has you enter your local (and optionally remote) URL, intelligently falls back to the remote URL, respects the FreeDesktop dark style, integrates with the Background portal, and maybe even has a mini mode called by a global keyboard shortcut.

- **Lyra**: Get lyrics and meaning for almost any song. Powered by the Genius API. Hook into MPRIS to see what's playing, but also search for songs/lyrics.

- **Pixels**: A pixel-perfect ruler. Inspired by [PixelSnap for Mac](https://getpixelsnap.com/).

- **Shortlist**: Better than wishlists. Pick a small number of items you want. This would likely be more a web service with native front-ends for at least elementary OS and Android.

- **Stickers**: Collection of cute stickers that can be pasted into apps. Ideally featuring [Adorbs](https://samuelhewitt.com/adorbs), maybe any Telegram-compatible stickers?

- **This Week** (or a better name): Native implementation of [This Week in GNOME](https://thisweek.gnome.org/). Why use it instead of an RSS reader? It could take the RSS feed and transform it into a bit more structured data shown in native views, run in the background and only notify when there's news without requiring any setup.

### Superseded _Either no longer make sense or no longer needed._

- ~~[**Audio**](https://github.com/cassidyjames/audio): Play audio files. That's it. Utility for playing downloaded voicemails, personal recordings, etc. without opening up a full-fledged music app.~~ See [Decibels](https://flathub.org/apps/com.vixalien.decibels)

- ~~**Clack**: A simple, no-frills notepad sort of app. Just the bare minimum needed to spit some text into a .txt file.~~ Basically fulfilled by [GNOME Text Editor](https://flathub.org/apps/details/org.gnome.TextEditor).

- ~~**Diffaroo**: Get a diff of the filesystem, packages, etc. from a known-good state, i.e. to see changes made from a stock image by an OEM.~~ Not sure how this fits into a modern idea of image-based/immutable OSes.

- ~~**Gotham**: Selectively force-enable a dark style support third-party apps, like Firefox. Would show a list of apps (perhaps just non-curated ones?), allowing you to toggle dark style support, which could copy the .desktop file and prepend it with an environment variable that followed the elementary dark style. Or something.~~ Partially fulfilled by [Darkbar](https://flathub.org/apps/details/com.github.bluesabre.darkbar), and the spread of the FreeDesktop dark style preference.

- ~~**Pwatypus**: Turn PWAs into pinned, integrated web apps. Like [Webpin](https://github.com/artemanufrij/webpin), but leaning more on PWA manifests and focusing on as deep of integration as possible.~~ Less needed now with the work towards PWA support in GNOME Web.

- ~~**Roost**: App for Nest smart devices, i.e. thermostat, cams, etc.~~ Superseded by the **Butler** idea above, plus integrating directly with Nest is a huge pain.
