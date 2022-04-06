---
title: Introducing New AppCenter Categories
description: Better for both users and developers
author: cassidyjames
date: 2018-01-17T01:26:45.070Z
image: /images/introducing-new-appcenter-categories/1XU8e9StQRiWrwOw9S3UbCg@2x.png
tags:
  - appcenter
  - devs
---

We’ve been hard at work to refresh the categories on the AppCenter home page. This refresh includes some new categories plus some changes to existing categories. Read on to see how it improves life for both users and developers!

<figure class="half" markdown="1">
![Before](/images/introducing-new-appcenter-categories/1ExiYwcTo4d_5KSOH_81irQ.png)
![After](/images/introducing-new-appcenter-categories/1XU8e9StQRiWrwOw9S3UbCg@2x.png)
<figcaption markdown="1">
AppCenter categories, before and after
</figcaption>
</figure>

## Refined Design

At a glance, the most obvious change is the refined design for several existing and new categories. [Daniel](https://twitter.com/DanielFore), [Micah](https://twitter.com/micahilbery), and I have spent a few days digging into the AppCenter stylesheet and pushing the design a bit more.

<aside markdown="1">
>With modern CSS features, we’re able to make a richly-designed interface with native GTK.
</aside>

With native modern CSS features like radial gradients, border images, repeating gradients, em sizing, SVG backgrounds, and font family support, we are able to make a very modern and richly-designed interface while leveraging completely native GTK technologies. And *because* it’s all native GTK, it is still completely localizable, properly reflows for right-to-left languages, remains pixel-perfect on HiDPI, and uses the system’s iconography.

Under the hood, we’ve also cleaned up a lot of the CSS. It’s now in its own file, is linted for consistency, and uses our official palette wherever possible. The result is that it’s much easier to add categories or improve the styling in the future, plus any tweaks to our official palette in the stylesheet will automatically trickle down to AppCenter.

## More Purpose Driven

One of the trends we’ve seen is apps falling into a number of catch-all categories; instead of being categorized under how they’re used, they’re grouped under opaque categories like *Accessories* or *Internet*.

<aside markdown="1">
>We’re introducing new categories on the home page.
</aside>

Instead, we’d like to encourage more specific, purpose-based categorization and browsing. We’re introducing new categories on the home page to help encourage this: *Communication*, *Finance, Media Production*, and *Writing & Language*. These aren’t strict subcategories of others like *Accessories* and *Internet*, but rather span a number of sane Main and Additional Categories from the [FreeDesktop.org spec](https://standards.freedesktop.org/menu-spec/latest/apa.html).

These categories may change over time, but they’re what we’re planning to start with.

## Recognizing Apps

These categories were chosen in part due to the existing apps that have been submitted to AppCenter where many had been grouped under *Accessories* as the only place to find them. Now it’s easier to browse and discover apps made for specific purposes.

<aside markdown="1">
>It’s easier to browse and discover apps made for specific purposes
</aside>

If you’re a developer, check your .desktop file’s categories against [the spec](https://standards.freedesktop.org/menu-spec/latest/apa.html)! There may be more granular Additional Categories you can include to help with discovery. Even if there aren’t any new categories on the homepage for your app today, keep in mind that we plan to do more with categories in the future—updating them now can only help you. Also remember that categories are also used in the Applications Menu category view, so keeping yours updated and as accurate as possible can only help users find your app whether it’s installed or not.

## Encouraging Developers

Some categories were chosen to help surface the types of apps that developers can make. The *Communication* category for example, doesn’t have any third-party curated apps yet. Similarly, *Media Production* has just one. We hope to see this change soon!

<aside markdown="1">
>A great opportunity for app developers to set the bar for apps to come.
</aside>

The lack of apps in categories isn’t a bad thing, though; just like the very first apps that were made available on AppCenter, this is a great opportunity for both existing and new app developers to get into brand new categories on the home page and set the bar for apps to come.

## Other Changes

We’ve also tweaked several of the existing categories to include more of the [FreeDesktop.org Additional Categories](https://standards.freedesktop.org/menu-spec/latest/apas02.html). This means more apps should be visible and grouped where you’d expect. Plus tweaked category titles like *Math, Science, & Engineering* are more explicit about the apps to expect.

## The Future

We’ll continue to monitor the apps that are available in AppCenter, and we’re always thinking about how to make it better for both users and developers. This is just the first small set of changes in this area; stay tuned for more! If you want to follow along with our efforts, check the [Better Browsing project](https://github.com/elementary/appcenter/projects/2) on GitHub.
