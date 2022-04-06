---
title: "Hera Updates for June, 2020"
description: "Fixes and improvements with OS 5.1.6, plus a note about the future"
author: danrabbit
image: /images/hera-updates-for-june-2020/card.png
tags:
  - updates
  - hera
  - devs

facebook: https://www.facebook.com/elementaryos/posts/3398595123505626
mastodon: https://mastodon.social/@elementary/104445051158152816
reddit: https://www.reddit.com/r/elementaryos/comments/hjods1/hera_updates_for_june_2020_elementary_blog/
twitter: https://twitter.com/elementary/status/1278717200606642182
---

June was a busy month for elementary; we [started shipping elementary OS](/now-shipping-elementary-os/) on retailer devices, said [goodbye to Bountysource](/goodbye-bountysource-hello-github-sponsors/), started using [Plausible](https://plausible.io/blog.elementary.io) on the web (More about that later!), and of course, pushed out several updates to elementary OS. <!-- As usual, these updates are available in a new OS 5.1.6 ISO at [elementary.io](https://elementary.io) -->

## Code

<figure>
  <picture>
    <source srcset="/images/hera-updates-for-june-2020/code-dark@2x.png" media="(prefers-color-scheme: dark)">
    <img alt="Code" src="/images/hera-updates-for-june-2020/code@2x.png" width="1037" height="711" />
  </picture>
<figcaption>The Outline/Symbols plugin in Code now shows a placeholder when empty</figcaption>
</figure>

We now show a placeholder in the Outline/Symbols plugin when no symbols are found to prevent the sidebar jumping around when switching through different types of code files. We also addressed an issue where the folder sidebar layout could become squished and empty, ensuring that the "Open project folder…" button remains visible.

You can now scroll past the end of a file, making it easy to get a line of code exactly where you feel comfortable with it on screen. And we've optimized the way Code saves and loads its window size and position to reduce how often it accesses your disk.

## AppCenter

This month's updates to AppCenter include a fix for Flatpak runtime updates that were hidden. This should resolve an issue where you whould receive an update notification only to find an empty updates view. We've also tracked down and resolved an issue that caused runaway CPU usage when a certain number of app screenshots were viewed. Both of these fixes come courtesy of David Hewitt, who you can [sponsor on GitHub here](https://github.com/sponsors/davidmhewitt).

## Files

A couple of regressions in Files' pathbar behavior were resolved, namely when selecting breadcrumbs or activating their context menus. We've also resolved reported issues regarding files containing the `#` character, and fixed an issue with windows resizing with long file names in the list view. Plus, the handy disk space indicator in the sidebar now changes to warning or error colors when the disk becomes too full.

## Videos

Videos should now start up much faster with a large video library, and we added more robust handling for missing or moved library folders. Plus, this release includes fixes for loading external subtitles.

## And More

Thanks to new contributor [Michael McClurg](https://github.com/mcclurgm), Calendar and the accompanying Date & Time indicator now report the correct time for events which were created in a different timezone. Now you won't be confused about the start time of that meeting with colleagues in other countries!

Also, several system components received minor updates to ensure that sessions end quickly and safely when logging out and shutting down.

## Updates for Developers

To smooth out the transition to elementary OS 6, we've released Granite 5.5.0 with a couple of a new things and a whole slew of deprecations! The new style constants `Granite.STYLE_CLASS_COLOR_BUTTON` and `Granite.STYLE_CLASS_ROUNDED` will become more useful in 6.0's fancy new stylesheet—there aren't color button styles in 5.x's stylesheet, but these style constants are now available if you'd like to make use of them. Additionally, `Granite.Widgets.SourceList` now includes `Gtk.STYLE_CLASS_SIDEBAR` by default and we'll likely deprecate `Granite.STYLE_CLASS_SOURCE_LIST` in a future release.

The more important change is the number of deprecations in this release. There are several utilities and widgets in Granite that are now much better handled by Gtk and GLib, and will likely be removed in Granite 6.0. Expect to see some new deprecation warnings in Terminal if you're using any of the following:

- `Granite.Services.SimpleCommand` is deprecated and `GLib.AppInfo.create_from_commandline` should be used instead.
- Several theming utilites including `Granite.Utils.set_theming` and `Granite.Utils.get_css_provider` are now deprecated and `Gtk.CssProvider` and `Gtk.StyleContext` should be used directly instead.
- `Granite.Services.Paths` is deprecated and `GLib.Environment` provides methods that should be used instead.
- Old, unused utilities like `Granite.Utils.get_button_layout_schema` and `Granite.Utils.get_default_close_button_position` are now deprecated with no recommended replacement. There should no longer be a need for these at all. This also applies to the widgets `Granite.Widgets.CollapsiblePaned` and `Granite.Widgets.CompositedWindow` which are no longer necessary with modern Gtk3.

## Get It

As always, you can get these updates on elementary OS 5.1 Hera alongside updated translations, bug fixes, and performance improvements by opening AppCenter and hitting **Update All**.

If you're new to elementary OS or would just like a fresh install, these updates will be included in a new elementary OS 5.1.6 Hera download on [our homepage](https://elementary.io) soon.

## A Quick Note About The Future

As we head into the second half of the year, more and more development focus is being put into elementary OS 6. While we intend to continue releasing updates to Hera for the foreseeable future, we expect those updates to become more mundane and less noticeable. Several apps and components will likely no longer receive updates on elementary OS 5, including Terminal, Onboarding, parts of System Settings and more. This is because they're already making use of new features only available in elementary OS 6. We're excited to be working on a refreshed visual design including a dark style preference and custom accent colors—and taking advantage of the latest development libraries like Libhandy. But don't worry! elementary OS 5 will continue to receive security and stability updates to its underlying libraries until April of 2028, courtesy of Canonical. Also, we're almost ready to share a feature preview of elementary OS 6 for developers and enthusiasts, so stay tuned to our blog to hear more about what's coming and how you can get involved.

## And Updates About Sponsors

We're super grateful and excited that we've reached over 50% of our first goal and over 100 sponsors on [Github Sponsors](https://github.com/sponsors/elementary/)! In case you're unfamiliar we're currently raising money there with the hope to create a regular, monthly contract for one of our longest contributors: [Corentin Noël](https://github.com/tintou). Every contribution brings us closer to putting more development time into the fixes and features that you care about.
