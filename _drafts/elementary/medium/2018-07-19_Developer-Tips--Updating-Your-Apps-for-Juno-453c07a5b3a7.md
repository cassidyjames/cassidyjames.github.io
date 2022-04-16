---
title: 'Developer Tips: Updating Your Apps for Juno'
description: Be ready to debut alongside elementary OS 5
date: '2018-07-19T19:34:28.862Z'
categories: []
keywords: []
slug: /@cassidyjames/developer-tips-updating-your-apps-for-juno-453c07a5b3a7
---

![](https://cdn-images-1.medium.com/max/800/1*MZ_BFLGT-Kr6CstGIoNNoQ.jpeg)

Now that the developer previews for Juno [beta1](https://medium.com/elementaryos/developer-preview-juno-beta-1-is-here-ce9160085bb2) and [beta2](https://medium.com/elementaryos/developer-preview-juno-beta-2-is-out-418f5037e9bb) are out, it’s prime time for app developers to get their apps ready. In fact, because Juno ships with the `bionic` AppCenter repository, developers _must_ act to get their apps in front of users in Juno. Let’s take a look at what needs to be done, plus some tips for the best transition.

### Bare Minimum

Technically, the bare minimum required for releasing your app in Juno may simply to make a new release and submit it in the [AppCenter Dashboard](http://developer.elementary.io/). Assuming your app builds, functions, and looks fine on Juno, this should get it released for users.

However, below are the full recommendations and tips for getting up to speed for Juno.

### Follow the Requirements and Suggestions

If it’s been a while since you pushed an update to your app, your first step is to brush up on the [publishing requirements and suggestions](https://github.com/elementary/houston/wiki/Before-You-Publish). These change from time-to-time, and we’ve gotten a little more strict and clarified certain areas over time. Remember, if your app does not meet the requirements, it will not be accepted into AppCenter for Juno!

[**AppCenter Dashboard: Before You Publish**  
_We have a few requirements and suggestions for publishing your app to AppCenter - AppCenter Dashboard, the backend for elementary AppCenter_github.com](https://github.com/elementary/houston/wiki/Before-You-Publish "https://github.com/elementary/houston/wiki/Before-You-Publish")[](https://github.com/elementary/houston/wiki/Before-You-Publish)

Some things to look out for are clarifications around extensions, new OARS data requirements, clarifications about “app stores,” tips about Human Interface Guidelines, clarifications about app naming, and some tips for games. Head to the wiki to see the [full requirements and suggestions](https://github.com/elementary/houston/wiki/Before-You-Publish).

### Packaging and Branches

#### Meson

One of the big changes we announced was [the move from CMake to Meson](https://medium.com/elementaryos/all-aboard-the-meson-future-hype-train-2b6c478b6b9e). We recommend app developers make this move as well. As such, with Juno, we’re officially deprecating the elementary CMake modules. While CMake will continue to work, our official documentation and code examples will all be written around Meson, so it’s best to keep up.

[**All Aboard The Meson Future Hype Train**  
_Choo Choo_medium.com](https://medium.com/elementaryos/all-aboard-the-meson-future-hype-train-2b6c478b6b9e "https://medium.com/elementaryos/all-aboard-the-meson-future-hype-train-2b6c478b6b9e")[](https://medium.com/elementaryos/all-aboard-the-meson-future-hype-train-2b6c478b6b9e)

#### Distribution Branches

We’ve also introduced distribution branches as part of [Houston CI](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726), and AppCenter Dashboard will use the same mechanism to determine which distribution to build for. So you’ll want to get your repository set up to work with that. Keep in mind that **to continue to release your app for Loki, you will need to move your packaging to a new** `**deb-packaging-loki**` **branch** before making a new release.

If you’re already using Houston CI, you should be able to see that your app builds correctly against both Loki and Juno — just check your Travis builds.

Going forward, packaging in your `master` branch or in a generic `deb-packaging` orphan branch will continue to build for the latest beta release of elementary OS, so in this case, 5 (Juno).

[**Introducing Houston CI**  
_Continuous validation testing for AppCenter apps_medium.com](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726 "https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726")[](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726)

Check the [“Anything else I should know?” section](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726#99ca) on that article for the details. As always, if you need any guidance, you can head to the [Houston Gitter](https://gitter.im/elementary/houston) for some help.

### GTK Changes

With every OS release comes changes, deprecations, new widgets, and styling updates to GTK. Juno is no different, and there’s a lot this time around!

*   [Changes from 3.18→3.20](https://developer.gnome.org/gtk3/stable/ch32s10.html)
*   [Changes from 3.20→3.22](https://developer.gnome.org/gtk3/stable/ch32s11.html)

#### Widget Classes → Element Selectors

Gtk.CSS has changed a lot. If you use custom styling in your app, you may need to update selectors. In particular, GTK widgets now use proper element selectors instead of style classes. For example, `.notebook` becomes `notebook`. For the most part, you can ship these styles alongside one another if you are supporting both Loki and Juno, i.e. by using a comma-separated selector like `notebook, .notebook {}`.

#### Inspector

Remember: the GTK Inspector is your friend! If you’re not familiar with it, give it a try. Make sure you have GTK development libraries installed, then enable the inspector shortcut:

```
sudo apt install libgtk-3-dev
```

```
gsettings set org.gtk.Settings.Debug enable-inspector-keybinding true
```

Then in your app, open the Inspector with the keyboard shortcut **Shift + Ctrl + D**. Poke around in the Objects tab for the widget hierarchy and style classes, and test changes to your custom CSS in the CSS tab. The “CSS Nodes” and “CSS Selector” dropdown selections are particularly useful, so be sure to take a look at them!

There were also some UI changes between the Inspector in Loki and Juno, so you may need to familiarize yourself with the new layout.

#### Style Class Constants

There are also new [style class constants in Granite](https://valadoc.org/granite/Granite.html). As we mentioned in our [Developer Tips: Branding Your App](https://medium.com/elementaryos/developer-tips-branding-your-app-a57cb44d31d3) article, It’s recommended to use these instead of the raw strings because you get deprecation warnings if they ever change.

[**Developer Tips: Branding Your App**  
_How to give your app a unique but native look_medium.com](https://medium.com/elementaryos/developer-tips-branding-your-app-a57cb44d31d3 "https://medium.com/elementaryos/developer-tips-branding-your-app-a57cb44d31d3")[](https://medium.com/elementaryos/developer-tips-branding-your-app-a57cb44d31d3)

#### Window Size Allocation

In Loki, requesting a GTK window size included the shadows in the calculation. This is no longer the case in Juno, so you may want to double-check your window sizes. Using `[Gtk.Allocation ()](https://valadoc.org/gtk+-3.0/Gtk.Allocation.html)` should work for both getting and setting the window size. You can take a look at [an example](https://github.com/danrabbit/lookbook/blob/f10663d7533e6f84c2239d00ca577a22e9b7f909/src/MainWindow.vala#L104) from [Daniel Foré](https://medium.com/u/4f27c8e412b0)’s LookBook app in Vala.

#### New Features & Widgets

GTK has a ton of new features in 3.22 and while we can’t possibly cover them all here, there are a few standouts:

*   **ScrolledWindow**: new size propagation is available for [width](https://valadoc.org/gtk+-3.0/Gtk.ScrolledWindow.propagate_natural_width.html) and [height](https://valadoc.org/gtk+-3.0/Gtk.ScrolledWindow.propagate_natural_height.html), which makes centering content while allowing scrolling on overflow super easy. There are also new [max-width](https://valadoc.org/gtk+-3.0/Gtk.ScrolledWindow.max_content_width.html) and [max-height](https://valadoc.org/gtk+-3.0/Gtk.ScrolledWindow.max_content_height.html) properties, so if you’re doing something to handle that manually, you don’t need to anymore.
*   **Popovers**: there have been changes to `show ()` and `hide ()` to work more consistently with other widgets. To show or hide a popover with the correct animations, use `popup ()` and `popdown ()`. Also keep in mind that using `show_all()` on a popover, instead of its child container, may have unintended results.
*   **Color Emoji** 🎉: GTK now supports color emoji, and we’re shipping the excellent [Noto Color Emoji](https://www.google.com/get/noto/help/emoji/) to give developers and users a huge and expressive set to work from in Juno. Users can insert them in any Gtk.Entry or Gtk.TextView by default by pressing Ctrl+Period or Ctrl+Semicolon. Developers can also use the `insert_emoji ()` signal on any `[Gtk.Entry](https://valadoc.org/gtk+-3.0/Gtk.Entry.insert_emoji.html)` or `[Gtk.TextView](https://valadoc.org/gtk+-3.0/Gtk.TextView.insert_emoji.html)` to show the picker. Lastly, there is a new `[show_emoji_icon](https://valadoc.org/gtk+-3.0/Gtk.Entry.show_emoji_icon.html)` property to automatically show an emoji picker icon inside an entry, and an `[EMOJI](https://valadoc.org/gtk+-3.0/Gtk.InputHints.EMOJI.html)` input hint to suggest emoji support to other input methods.

### Deprecations

Depending on what widgets, methods, or other APIs you’re using in your app, you might notice new deprecations in Juno—you can check these by running your app from the Terminal. Any time you see a deprecation, it’s a good idea to move to the recommended replacement to stay ahead of the eventual removal of that API.

If your app no longer compiles on Juno, it might be because of the removal of a deprecated API. Check the Terminal output for your app and fix any deprecations in Loki. Once you update your code to address it, you should be able to get your app building for Juno again.

That covers the basics of updating an app from Loki to Juno. Did we miss anything? If you have any other tips or tricks, let us and other developers know in the responses to this article. Happy developing for Juno!

_Thanks again to all you developers making apps for AppCenter, everyone who has bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_