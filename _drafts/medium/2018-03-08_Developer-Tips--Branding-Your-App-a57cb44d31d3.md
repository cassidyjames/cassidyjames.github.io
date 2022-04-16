---
title: 'Developer Tips: Branding Your App'
description: How to give your app a unique but native look
date: '2018-03-08T17:01:01.888Z'
categories: []
keywords: []
slug: /@cassidyjames/developer-tips-branding-your-app-a57cb44d31d3
---

With 75+ native GTK3 apps, AppCenter continues to fill out with quality experiences from several dozen developers. Many have begun to build their own brand around their apps or developer account, which is awesome! Today I’m going to teach you how you can use the elementary stylesheet and other platform conventions to strengthen your own app’s brand and design.

### Use Style Classes

The quickest way to tune your app’s look is to use the built-in style classes from the elementary Stylesheet. There are tons of these for different uses, like back buttons, typography, flat headerbars, etc.

Constants for [Granite](https://valadoc.org/granite/Granite.html) and [Gtk](https://valadoc.org/gtk+-3.0/Gtk.html) style classes are available on Valadoc, but here are some of my favorite and most useful ones:

*   `.back` for back buttons, like in System Settings and AppCenter
*   `.h1`–`.h4` for heading text labels
*   `.flat`, useful for flat-styled windows or headerbars
*   `.default-decoration` for slim headerbars, like in Terminal
*   `.rounded` for rounded bottom corners on windows, like [Dippi](https://cassidyjames.com/dippi/) or [Harvey](https://github.com/danrabbit/harvey)

If a style constant exists, it’s always recommended to use it instead of setting a class manually. This ensures you’ll get warnings if the constant is ever deprecated, superseded, or removed. Assuming your app is in Vala (which we recommend for AppCenter, but isn’t required!), you’d add a style constant like:

your\_widget.**get\_style\_context** ().**add\_class** (Gtk.STYLE\_CLASS\_FLAT);

Or if there’s not a built-in style constant, just set a class with:

your\_widget.**get\_style\_context** ().**add\_class** ("rounded");

You can read more at [Valadoc](https://valadoc.org/gtk+-3.0/Gtk.StyleContext.add_class.html), or check them out in action in [Granite Demo](https://github.com/elementary/granite/blob/56f0725fcb0bc0bbc994ad82a5687d857a940d7e/demo/Views/CSSView.vala). Other languages should be similar; look for adding a class to the Gtk style context.

Style classes work just like you’d expect with CSS: if you ship a custom stylesheet, you can add custom styling for any built-in classes, or even add your own. Combining these with specific colors in your app can go a long way to making it stand out from the crowd while feeling completely native and at home on elementary OS.

### Set Brand Colors

An easy but striking change you can make to your app is using brand colors. The elementary stylesheet uses a number of variables to style the UI, including the headerbar and accent colors throughout your app. By default, headerbars are neutral and the accent color is elementary blue. But you can use this to set the tone for your own brand.

![Snaptastic uses a bright orange headerbar.](https://cdn-images-1.medium.com/max/800/1*V1j9nHFHmYloLUmWH36dKQ.png)
Snaptastic uses a bright orange headerbar.

To style a headerbar, set the `@colorPrimary`, `@textColorPrimary`, and `@textColorPrimaryShadow` variables in your custom CSS. You can see the variables in the [elementary Stylesheet on GitHub](https://github.com/elementary/stylesheet/blob/18ec68f66860c3a51a70e674a9d7308602ec8633/gtk-3.22/gtk.css#L82).

For the accent color, just set `@colorAccent` and it will get picked up by focus outlines, text selection, etc. You can see an example of setting this [in Dippi](https://github.com/cassidyjames/dippi/blob/966aedf9f721b939c5f71da1f198973755a72e34/data/Application.css#L2) for a subtle purple accent.

![Notice the subtle purple outline on the Diagonal Size entry](https://cdn-images-1.medium.com/max/800/0*3lgv2hYCv85QNfS4.)
Notice the subtle purple outline on the Diagonal Size entry

You can also use CSS to set or change other colors in your UI, like the subtitle in the Snaptastic screenshot from earlier. Don’t get _too_ carried away, but a nice touch of accent color can look great.

### GResource Icons

Sometimes you might want to ship an icon that’s not in the stock elementary set, or you want to recolor an icon to better match your app. Instead of installing these icons to the entire system, it’s best practice to use GResource.

This entails creating a simple resource XML file, loading the resource as a fallback icon set in your app, and telling your build system to build it with your app. Check out an [example gresource.xml](https://github.com/cassidyjames/dippi/blob/636efcf9c020f663c847838804d4db08be604bb1/data/com.github.cassidyjames.dippi.gresource.xml) from Dippi, along with [setting it as the fallback icon theme](https://github.com/cassidyjames/dippi/blob/636efcf9c020f663c847838804d4db08be604bb1/src/MainWindow.vala#L217) in Vala. For an example of compiling the resources with a build system, check the [meson.build](https://github.com/cassidyjames/dippi/blob/5258847464975dbf29f4292d13ce98c7d07246a5/meson.build#L8) file.

Different languages and build systems will obviously differ, but documentation and/or examples shouldn’t be too hard to come by. The [GNOME developer docs](https://developer.gnome.org/gio/stable/GResource.html) are a good place to start.

### Typography

Using the aforementioned `.h1`–`.h4` Gtk style classes for headings is one of the fastest ways to add some rich typography to your app and is a great place to start. These classes ensure you’re not hardcoding an exact style, but are marking the importance of a heading and letting the system stylesheet take over with setting the exact typeface, size, and weight.

You can also directly set a font weight and color in your UI with CSS, as you’d expect. For color, keep in mind WCAG contrast guidelines (you can use [Harvey on AppCenter](https://appcenter.elementary.io/com.github.danrabbit.harvey.desktop) to check!).

You can also set a font size in CSS, but **don’t use** `**px**` **units**: users might set a larger or smaller text size than default for accessibility reasons. It’s always a good idea to test with accessibility settings, and using `pt` or `em` units ensures your font will scale to match the user’s settings. Head to _System Settings_ → _Universal Access_ → _Display_ to try out different text sizes.

![Dictionary app [Palaura](https://appcenter.elementary.io/com.github.lainsce.palaura.desktop) uses a Serif font to display definitions](https://cdn-images-1.medium.com/max/800/1*LBlGHTIiRbJyJixZjf41iA@2x.png)
Dictionary app [Palaura](https://appcenter.elementary.io/com.github.lainsce.palaura.desktop) uses a Serif font to display definitions

One less-explored area of unique branding is using a custom font in your app’s “chrome” or UI. Snaptastic again uses this, but there are some things to keep in mind:

1.  **Use a pre-installed font, or depend on a font** if it’s in the OS repos. You need to make sure the font will show up on users’ systems, not just when it’s installed on yours! Check Snaptastic’s source code for [an example of depending on a font](https://github.com/bartzaalberg/snaptastic/blob/b3b52ad16684654c8eea06f490229a42cb5fc2db/debian/control#L15).
2.  **Consider localization**. Not every font supports every language and special characters, so your app might look weird when translated. Pick a font with wide character coverage, and try your app out with a few different languages to see how it’s going to look.
3.  **Avoid custom fonts for content**. The screenshot tool in elementary OS has a “conceal text” feature that temporarily replaces the system font with a scribbly “redacted” font. This won’t work anywhere you set a custom font, so be careful when dealing with user content and any potentially sensitive information.

Using these tips, you can help your app stand out by bolstering its brand and design. Remember, design isn’t always about adding to your app, though! Use these methods with reservation and purpose. Not every app needs to be super custom branded, and small touches go a long way.

_Thanks again to all the developers making apps for AppCenter, everyone who has bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_