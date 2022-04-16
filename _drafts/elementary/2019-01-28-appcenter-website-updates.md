---
title: AppCenter Website Updates
description: Release notes, prices, and more
author: cassidyjames
date: 2019-01-28T19:16:59.804Z
image: /images/appcenter-website-updates/1kIeio0vBb2IEPF8lGkFM-A.png
tags:
  - appcenter
  - devs
  - web
---

In July, we revealed [a brand new experience for sharing AppCenter URLs,](/introducing-new-appcenter-sharing-urls) powered by a new AppCenter website. It’s now been running smoothly for over six months, handling hundreds of app submissions and updates in a completely automated fashion. Today I’m happy to announce two important improvements to the AppCenter website: release notes and prices.

## Release Notes

Every release submitted to AppCenter requires up-to-date and accurate release description, provided by the developer in the standard AppStream format. This data includes a version number, release date, and a rich description field. Developers have been using this field to great effect, and it’s displayed in AppCenter on elementary OS when you have updates—great for keeping users informed of the value being added to their favorite apps. However, this data was missing on the AppCenter website.

No longer! AppCenter on the web now displays a list of recent releases, much like AppCenter on elementary OS. Since we don’t know which version a user has installed (if any) from the web, we show several releases worth of data. The latest release’s details are expanded so users can see what the latest update entailed, but each previous release can also be expanded. Each release also shows its release date, which can in itself serve as a great at-a-glance look into the developer’s update commitment (and doubles as a last-updated field for the latest release).

<figure markdown="1">
![Example of release notes on the AppCenter website](/images/appcenter-website-updates/1kIeio0vBb2IEPF8lGkFM-A.png)
<figcaption markdown="1">
Example of release notes on the AppCenter website
</figcaption>
</figure>

It’s a small change, but one that provides a lot of useful data to potential users. It also gives developers more content for their listing to serve as a sort of automatic homepage for their app, which was the original design of AppCenter website; no more updating that information in several places, as AppCenter on the web pulls it from the exact same standards-compliant location as AppCenter on elementary OS!

## Prices

Another small but important update is the inclusion of prices for paid apps. Before, it was impossible to tell whether an app was monetized or not from the web—and for those monetized apps, there was no indication of the developer-provided suggested price.

Now, AppCenter on the web includes a new “Get it on AppCenter” section that serves two purposes: first, it exposes the developer-provided suggested price if the app is monetized; second, it provides more context about AppCenter itself for people who are potentially new to elementary OS and AppCenter.

<figure markdown="1">
![Example of the new “Get it on AppCenter” section, including pricing](/images/appcenter-website-updates/1zityHyOjYsPsyxuqucMz2g.png)
<figcaption markdown="1">
Example of the new “Get it on AppCenter” section, including pricing
</figcaption>
</figure>

The first is important to better communicate the value and expectations of apps on AppCenter; we want to change the default perception around open source apps, and by being up front about what developers are asking to be paid, we feel we’re making progress there.

The latter makes sense since if you’re on elementary OS, you can just hit the “Open in AppCenter” button to view the listing and related information; if you’re on the web listing, you’re likely not on elementary OS. This section helps better explain what exactly AppCenter is, plus points to relevant to resources whether they’re an app developer or a potential new user.

## More

We also recently added a way to reset the “not on elementary OS” setting, a common user request: simply hit the new “Reset Preferences” button on the bottom of the home page. Thanks to community contributor [Spencer Kuzara](https://github.com/kodaxx) for putting in the work to ship that. We’ve also made a handful of small improvements to when app links (like the app’s homepage or issue tracker) are displayed to make that more reliable.

Want to make the site even better? Like everything we do at elementary, it’s open source and open to collaboration [on GitHub](https://github.com/elementary/appcenter-web). File an issue, submit a PR, or fork it and build your own thing!
