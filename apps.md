# Cassidy's Apps

Apps I've made, and apps I wish existed.

## Flathub

I have a few apps available on Flathub for any modern Linux-based operating system.

[![Dippi icon](https://raw.githubusercontent.com/cassidyjames/dippi/7d11037d7288dea7aed664b69b6d4e73439fdcfb/data/icons/com.github.cassidyjames.dippi.svg)][dippi] | [![Clairvoyant icon](https://raw.githubusercontent.com/cassidyjames/clairvoyant/main/data/icons/com.github.cassidyjames.clairvoyant.svg)][clairvoyant]
--- | --- | ---
[Dippi](https://appcenter.elementary.io/com.github.cassidyjames.dippi) | [Clairvoyant](https://appcenter.elementary.io/com.github.cassidyjames.clairvoyant)

[dippi]: https://flathub.org/apps/details/com.github.cassidyjames.dippi
[clairvoyant]: https://flathub.org/apps/details/com.github.cassidyjames.clairvoyant

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

- [**Audio**](https://github.com/cassidyjames/audio): Play audio files. That's it. Utility for playing downloaded voicemails, personal recordings, etc. without opening up a full-fledged music app.

- [**Codecard**](https://github.com/DevAlien/codecard): Share snippets of code as a pretty image, e.g. for social media.

- [**Codestash**](https://github.com/cassidyjames/codestash): Stash your code for later. Inspired by [SourceNote for Mac](https://www.sourcenoteapp.com/).

- [**Plausible**](https://github.com/cassidyjames/plausible): Native app that wraps up Plausible dashboard data. Would likely need a new name since it's unofficial.

- [**Rundown**](https://github.com/cassidyjames/rundown): Battery rundown app that waits until the battery is full, then power is unplugged, then it runs benchmarks until the battery dies. Use across hardware for consistent/comparable battery stats. Probably needs to do a variety of work behind the scenes, like loading webpages (WebKitGTK), maybe playing videos, occasionally hitting the CPU.

- **Webshooter**: Your friendly neighborhood website screenshooter. Grab full-size screenshots of web pages at predefined sizes. Great for sharing prototypes.

### Ideas _Contact me if you want to tackle one, and I can help with design!_

- **Backdrop**: Small collection of curated wallpapers. Maybe using an Unsplash collection as a back-end, or just shipping the wallpapers with the app.

- **Diffaroo**: Get a diff of the filesystem, packages, etc. from a known-good state, i.e. to see changes made from a stock image by an OEM.

- **Lyra**: Get lyrics and meaning for almost any song. Powered by the Genius API. Hook into MPRIS to see what's playing, but also search for songs/lyrics.

- **Pixels**: A pixel-perfect ruler. Inspired by [PixelSnap for Mac](https://getpixelsnap.com/).

- **Roost**: App for Nest smart devices, i.e. thermostat, cams, etc.

- **Shortlist**: Better than wishlists. Pick a small number of items you want. This would likely be more a web service with native front-ends for at least elementary OS and Android.

- **Stickers**: A collection of cute stickers that can be pasted into apps. Ideally featuring [Adorbs](https://samuelhewitt.com/adorbs), maybe any Telegram-compatible stickers?

### Superseded _Either no longer make sense or no longer needed._

- ~~**Clack**: A simple, no-frills notepad sort of app. Just the bare minimum needed to spit some text into a .txt file.~~ Basically fulfilled by [GNOME Text Editor](https://flathub.org/apps/details/org.gnome.TextEditor).

- ~~**Gotham**: Selectively force-enable a dark style support third-party apps, like Firefox. Would show a list of apps (perhaps just non-curated ones?), allowing you to toggle dark style support, which could copy the .desktop file and prepend it with an environment variable that followed the elementary dark style. Or something.~~ Partially fulfilled by [Darkbar](https://flathub.org/apps/details/com.github.bluesabre.darkbar), and the spread of the FreeDesktop dark style preference.

- ~~**Pwatypus**: Turn PWAs into pinned, integrated web apps. Like [Webpin](https://github.com/artemanufrij/webpin), but leaning more on PWA manifests and focusing on as deep of integration as possible.~~ Less needed now with the work towards PWA support in GNOME Web.
