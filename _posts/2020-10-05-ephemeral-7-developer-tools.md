---
title: Ephemeral 7 is Here
description: "Developer tools, hard refresh, latest WebKit updates, support for elementary OS 6, and new site suggestions"
updated: 2020-10-05
image: /images/blog/ephemeral-7-developer-tools/repo.png

hidden: true
---

It's been nearly two years since I first released Ephemeral—the always-incognito web browser for elementary OS—on AppCenter. In that time, I've added zoom, a refined design, site suggestions, customizable search engines, a JavaScript toggle, find-in-page, touchpad gesture navigation, dark style support, and more.

![Ephemeral: The always-incognito web browser]({{ page.image }})

Today, I'm happy to announce Ephemeral 7 with a great developer- and future-focused update. First, the official release notes:

>### Ephemeral 7.0.4 _Sep 27, 2020_
>
>Developers, Developers, Developers!
>
>  - Access WebKit Web Inspector and developer tools via Inspect Element
>  - New hard refresh action (bypassing the cache) with Shift+Ctrl+R
>  - Support for elementary OS 6, including the dark style preference
>  - Several new site suggestions
>
>Translation updates
>
>  - Translated to Ukranian thanks to Ihor Hordiichuk
>  - Updated Brazilian Portuguese translations thanks to Karl Prieb
>  - Updated Turkish translations thanks to Safak GENISOL
>
>Additional translations for new features will appear in future updates as translators have a chance to do their thing.

### WebKit Web Inspector and Developer Tools

The major update for developers here is the inclusion of the WebKit Web Inspector and associated developer tools, accessible via the "Inspect Element" item in the context menu. This brings the powerful and familiar developer tools as seen in GNOME Web and Apple Safari to Ephemeral.

<figure class="half" markdown="1">
[![WebKit Web Inspector, docked to the side](/images/blog/{{ page.slug }}/inspector-light.png)](/images/blog/{{ page.slug }}/inspector-light.png)
[![WebKit Web Inspector, docked to the side (dark)](/images/blog/{{ page.slug }}/inspector-dark.png)](/images/blog/{{ page.slug }}/inspector-dark.png)
[![WebKit Web Inspector, popped out](/images/blog/{{ page.slug }}/inspector-popout-light.png)](/images/blog/{{ page.slug }}/inspector-popout-light.png)
[![WebKit Web Inspector, popped out (dark)](/images/blog/{{ page.slug }}/inspector-popout-dark.png)](/images/blog/{{ page.slug }}/inspector-popout-dark.png)
<figcaption markdown="1">
WebKit Web Inspector and developer tools
</figcaption>
</figure>

You can dock the developer tools to the bottom or side of the view port, or pop them out into their own window. And like Ephemeral itself, the Web Inspector supports both light and dark styles.

### Hard Refresh

It seems like a little thing, but some sites just don't play nice unless you can force a "hard refresh," refreshing the page while bypassing the local cache. This is now possible in Ephemeral with a simple <kbd>Shift</kbd> <kbd>Ctrl</kbd> <kbd>R</kbd>.

### Support for elementary OS 6

Work on elementary OS 6 is under way, and with a new system stylesheet, it requires a bit of work for an app with extensive custom styling like Ephemeral. Luckily it's not too hard to ship one stylesheet for elementary OS 5.x and a separate one for elementary OS 6, so that's exactly what I've done. The result is that Ephemeral will continue to be supported and get updates on elementary OS 5.x for the forseeable future, while also supporting elementary OS 6 from day one.

The new stylesheet for elementary OS 6 also gave me an opportunity to think about some new styling. Here's a sneak peek:



elementary OS 6 is also introducing a system-wide dark style preference. Ephemeral on elementary OS 6 will support this from day one instead of the in-app toggle as seen in elementary OS 5.x. Users of Ephemeral on other platforms or system stylesheets will continue to see the more GNOME-styled variant of the UI which looks more at home with Adwaita, Pop!, etc.

### New Site Suggestions

Ephemeral comes with built-in site suggestions; these are locally-stored domains including some of the most popular websites around the world to enable privacy-respecting suggestions without querying an external service.

<figure markdown="1">
![OMG! Ubuntu!](/images/blog/{{ page.slug }}/omg.png)
<figcaption markdown="1">
Site suggestions mean typing _omg_ will show a suggestion for [OMG! Ubuntu!](https://omgubuntu.co.uk)
</figcaption>
</figure>

Ephemeral 7 comes with several new sites for "Friends of Ephemeral," Linux-specific news sites, and elementary OS Retailer sites. The result is more suggestions out of the box—and ones that I hope are relevant to Ephemeral and elementary OS users.
