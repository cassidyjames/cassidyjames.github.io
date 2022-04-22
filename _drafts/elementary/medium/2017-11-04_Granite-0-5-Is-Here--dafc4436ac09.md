---
title: Granite 0.5 Is Here!
description: 'Strap on your dev helmets, we’re about to get nerdy'
date: '2017-11-04T04:03:21.217Z'
categories: []
keywords: []
slug: /@DanielFore/granite-0-5-is-here-dafc4436ac09
---

[Back in May](https://medium.com/elementaryos/making-granite-a-better-library-8b925859e9fb), we wrote about the beginnings of some major changes coming to Granite. I’m happy to announce that a big new release is here which cleans up a ton of legacy code and introduces some sweet new widgets and APIs.

If you’re not familiar with [Granite](https://valadoc.org/granite/index.htm), it’s a companion library for [Gtk+](https://valadoc.org/gtk+-3.0/Gtk.html) and [GLib](https://valadoc.org/glib-2.0/index.htm), the foundational app building libraries on our platform. Granite provides additional widgets and APIs that contain design patterns that are specific to elementary OS. Think of it as a shortcut to help you build killer apps.

This is going to be a nerdy blog post with lots of technical language and code snippets. If that’s not your bag, don’t worry about it! Rest assured that we’re making elementary OS a more awesome platform for developers and we’ll see you in the next one. Otherwise, here we go!

### A Redesigned Demo

One of the first things you might notice is a redesigned demo that you can get by installing the package `granite-demo`. The new version sports clearer and faster navigation with more comprehensive and accurate examples. We’ve also updated the demo to make sure it covers not just the widgets provided in Granite but also utilities like `[Granite.DateTime](https://valadoc.org/granite/Granite.DateTime.html)`.

![](https://cdn-images-1.medium.com/max/600/1*Rxru9XbAm8j7zvvP2bsZQA.png)
![Left: Old & Busted; Right: New Hotness](https://cdn-images-1.medium.com/max/600/1*JNFBQ4FvQkilBAWowo-Uyw.png)
Left: Old & Busted; Right: New Hotness

### DateTime Utilities

Speaking of `[DateTime](https://valadoc.org/granite/Granite.DateTime.html)`, this release includes a few new tricks:

`[get_relative_datetime ()](https://valadoc.org/granite/Granite.DateTime.get_relative_datetime.html)`: A way to compare a `GLib.DateTime` with “now” which returns a compact, localized, natural-language string like “in 5m”, “3h ago” or “Yesterday”. This is great for any app that deals with messaging or scheduling.

`[is_same_day ()](https://valadoc.org/granite/Granite.DateTime.is_same_day.html)`: A way to compare two `GLib.DateTime`s which returns `true` if they are the same day of the same year.

`[seconds_to_time ()](https://valadoc.org/granite/Granite.DateTime.seconds_to_time.html)`: which converts an integer number of seconds to an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard time, for example “100” to “1:40". Very useful for media apps.

### AsyncImage

`[Granite.AsyncImage](https://valadoc.org/granite/Granite.AsyncImage.html)` is a `Gtk.Image` subclass that loads icons and images without blocking the main Gtk thread. This is a tremendous performance booster if your UI has a large image grid like an album or cover art view.

### HeaderLabel

A very minor widget but one we use all the time in forms, settings UIs, and sidebars. `[Granite.HeaderLabel](https://valadoc.org/granite/Granite.HeaderLabel.html)` is simply a left aligned label with the `h4` style class. Save a bit of typing, [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), and go from this:

`var label = new Gtk.Label ("foo");  
label.halign = Gtk.Align.START;  
label.xalign = 0;  
label.get_style_context ().add_class (Granite.STYLE_CLASS_H4_LABEL);`

to this:

`var label = new Granite.HeaderLabel ("foo");`

### MessageDialog

![The new Granite.MessageDialog](https://cdn-images-1.medium.com/max/800/1*fC1Vtx2WdICOd_JnpEYStQ.png)
The new Granite.MessageDialog

Creating [a HIG-compliant dialog](https://elementary.io/docs/human-interface-guidelines#dialogs) can be tedious and `Gtk.MessageDialog` is… special. Now you can easily create a good looking dialog without having to fiddle around with margins and spacing by using `[Granite.MessageDialog](https://valadoc.org/granite/Granite.MessageDialog.html)`.

### SettingsPage & SettingsSidebar

![Granite.SettingsSidebar and Granite.SimpleSettingsPage](https://cdn-images-1.medium.com/max/800/1*MeWwadVE13jhtzAag0Fq9g.png)
Granite.SettingsSidebar and Granite.SimpleSettingsPage

Originally developed for System Settings but useful for any app with complex settings, these two widgets work hand-in-hand to build views like the Network or Sharing settings pages.

[SimpleSettingsPage](https://valadoc.org/granite/Granite.SimpleSettingsPage.html) is divided into three sections: an automatically generated header, a `Gtk.Grid` content area, and a `Gtk.ButtonBox` action area.

[SettingsSidebar](https://valadoc.org/granite/Granite.SettingsSidebar.html) is a `Gtk.Stack` switcher that reads the properties of a SettingsPage to automatically populate itself with headers, labels, icons, and status badges (if necessary).

### SeekBar

![](https://cdn-images-1.medium.com/max/800/1*ng4LKKrzavav_MPPuKr0jw.png)

This widget provides a standard `[Granite.SeekBar](https://valadoc.org/granite/Granite.SeekBar.html)` for use in media apps like audio and video players.

### Style Class Constants

![A showcase of special style classes provided by the elementary OS CSS stylesheet](https://cdn-images-1.medium.com/max/800/1*Cwr6T4zzw1ZtQhy7w4FaoQ.png)
A showcase of special style classes provided by the elementary OS CSS stylesheet

The entire `Granite.StyleClass` namespace has been deprecated in favor of a more Gtk-like `Granite.STYLE_CLASS_FOO` naming convention. Some of these class names (like `popover` and `title`) are now covered by Gtk+ itself. Others, (like `back-button` and `card`) have been added and are now used by Granite. We highly recommend using these new constants in your code. This ensures that the compiler is aware if these class names are ever deprecated in the future and keeps your app looking the way you designed it. Check out [the](https://valadoc.org/granite/Granite.html) `[Granite](https://valadoc.org/granite/Granite.html)` [namespace](https://valadoc.org/granite/Granite.html) in Valadoc for more info.

### Other Deprecations

When something is deprecated in a library that means that it has been marked as obsolete and it will be removed in a future version. You can still use that thing for now, but we recommend updating your code ASAP. In Granite, things can become deprecated when they’ve been superseded by new functionality in Gtk+ or GLib or just when there becomes a new, better way to do something. If your code is using deprecated functionality, the compiler will throw a warning and let you know what the problem is and what replaces it. Here’s a list of the deprecations in this version of Granite:

Granite’s AboutDialog has been deprecated in favor of providing this information in your appdata.xml file. We wrote more about this in [a July blog post](https://medium.com/elementaryos/peace-out-about-dialogs-8efa956c0562). If you’d like your app to continue having an about dialog, you can still use [Gtk.AboutDialog](https://valadoc.org/gtk+-3.0/Gtk.AboutDialog.html) instead.

`apply_text_style_to_label ()` was deprecated since it’s a one-liner to add style classes already. Instead of this method, you can do something like `foo.get_style_context ().add_class ("bar");`

`create_app_menu ()` has been deprecated since Gtk introduced a handy `[Gtk.MenuButton](https://valadoc.org/gtk+-3.0/Gtk.MenuButton.html)`.

OverlayBar’s `status` property has been deprecated in favor of a more Gtk-like `label` property.

### Removals

In addition to deprecations, we’ve finally removed some very old (and in some cases broken) widgets from Granite.

HCollapsablePaned and VCollapsablePaned have been removed since their functionality is covered by `[Granite.Widgets.CollapsiblePaned](https://valadoc.org/granite/Granite.Widgets.CollapsiblePaned.html)`.

The SortFunc in SourceList has been removed as it was replaced by `[compare](https://valadoc.org/granite/Granite.Widgets.SourceListSortable.compare.html)`.

LightWindow and DecoratedWindow were removed since in modern Gtk+ all windows are decorated client-side and can easily be styled. For an easy flat-styled window you can now add `Gtk.STYLE_CLASS_FLAT` to your `Gtk.Headerbar`. See our [October updates post](https://medium.com/elementaryos/loki-updates-for-october-144c11e6b445) for more info.

Some very old Contractor widgets which don’t work with the current version of Contractor have also been removed.

Many old Granite widgets have been replaced by new Gtk+ widgets as the toolkit has evolved and improved over the last few years. This is the full list of those removals:

*   Granite SearchBar has been replaced by `[Gtk.SearchEntry](https://valadoc.org/gtk+-3.0/Gtk.SearchEntry.html)`.
*   HintedEntry has been replaced by the `[placeholder_text](https://valadoc.org/gtk+-3.0/Gtk.CellRendererText.placeholder_text.html)` property in `Gtk.Entry`.
*   SidebarPaned and ThinPaned were replaced by `[Gtk.Paned](https://valadoc.org/gtk+-3.0/Gtk.Paned.html)`.
*   Granite Popover was replaced by `Gtk.Popover`
*   StaticNotebook was replaced by `Gtk.Stack` and `Gtk.StackSwitcher`.
*   StatusBar was replaced by `Gtk.ActionBar`.
*   ToolButtonWithMenu was replaced by `Gtk.MenuButton`.
*   WrapLabel was replaced by the `wrap` property of `Gtk.Label`.

### Other Bug Fixes & Enhancements

[Toasts](https://valadoc.org/granite/Granite.Widgets.Toast.html) now automatically disappear after a timeout. [OverlayBar](https://valadoc.org/granite/Granite.Widgets.OverlayBar.html) has a new property `active` that adds a Gtk.Spinner. [Avatar](https://valadoc.org/granite/Granite.Widgets.Avatar.html) now reloads and resizes when the display’s DPI changes. [TimePicker](https://valadoc.org/granite/Granite.Widgets.TimePicker.html) now has better input parsing and will understand values like “6am”, “1230”, or “7” in addition to the standard “12:30”. Also, translations have been updated.

![OverlayBar with the new optional progress indicator](https://cdn-images-1.medium.com/max/800/1*aR9Ieg8DRonl4j205-uSdA.gif)
OverlayBar with the new optional progress indicator

Many widgets now have updated and more thorough documentation in Valadoc, but we would appreciate any pull requests to help make these docs better, especially with code examples! As with everything we do, [Granite is an Open Source library](https://github.com/elementary/granite) and we’d love your help improving it.

For the full commit log for this release, you can check out the [handy compare view on GitHub](https://github.com/elementary/granite/compare/0.4.1...0.5). You can also see full API documentation [on Valadoc.org](https://valadoc.org/granite/index.htm).

_We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_