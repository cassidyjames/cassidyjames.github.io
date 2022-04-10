---
title: What’s New in Ephemeral 5
description: New features and snazzy UI refinements
updated: 2019-05-15
legacy: true

image: https://miro.medium.com/max/1400/1*v1WOWAngiyB9tAjuaqjn4Q.png
---

![Ephemeral, the always-incognito web browser]({{ page.image }})

Today I’m happy to announce the latest release of the private-by-default browser for elementary OS. Ephemeral 5 brought some useful new features, and 5.1 add few small refinements that really add polish.

## What is Ephemeral?

If you’re just hearing about it for the first time (or need a refresher): Ephemeral is the private-by-default, always-incognito browser for elementary OS. It’s heavily inspired by Firefox Focus—a mobile web browser—but designed and developed specifically for elementary OS using standard libraries for the platform like GTK, Granite, and WebKit.

The primary design is that you set it as your default browser, and thus any links you click on from other apps are opened in a new instance that’s completely separated from your normal browsing. It rejects third-party cookies, uses a privacy-respecting search engine, and prevents ad trackers from following you around the web.

Ephemeral is available on AppCenter for a suggested price of $9.

## Ephemeral 5.0

Version 5.0 was released last month with a couple of major new features:

### Custom Search Engine

![Screenshot](https://miro.medium.com/max/1400/1*rCW90g4gHZHNr9YIGGENuw@2x.png)

In addition to being able to choose between Startpage.com or DuckDuckGo, Ephemeral 5.0 adds a “Custom” setting so you can use any search engine you’d like. This means you can use something that’s more relevant to you regionally, something that only searches a specific website, or pretty much whatever you can think of.

### User-Added Site Suggestions

![Screenshot](https://miro.medium.com/max/1400/1*z0iLhKX2q6AH56XP7HU8dA@2x.png)

Ephemeral offers to complete from over 400 popular websites when you’re typing a URL, and now as of 5.0 you can add your own sites to those suggestions. If you’re always visiting a site that’s not suggested, you can just hit the ⭐️ in the URL entry to add your own domain.

## Ephemeral 5.1

Version 5.1 was just submitted to AppCenter today with a few small but meaningful UI enhancements that you’ll love:

### A Dazzling URL Entry

Hannes Schulze worked to make the URL entry and suggestions much nicer. We refined the UX a bit to always keep the search action at the top, then list user-added domains, and then popular domains down below.

![Sreenshot](https://miro.medium.com/max/1400/1*uTIyx7hGuvRm9fev4HGROA.gif)

Hannes also improved the matching of suggestions; for example, typing “out” will now suggest “theoutline.com”. If there’s a domain that begins with “out,” it’ll show up above those fuzzier matches as well. And user-added domains are always listed above the default popular domains.

This work utilizes Dazzle, a library of fancy and typically animated widgets that’s used in projects like Epiphany (GNOME Web) and GNOME Builder—it’s great to see it in action on elementary OS.

### Refined Alert and Prompt Dialogs

![Screenshot](https://miro.medium.com/max/1216/1*7b8PmHERHDZ6ceLmqmtsyQ@2x.png)

David Hewitt worked to replace the rough built-in WebKit dialogs for JavaScript alerts and prompts with Granite-based ones that follow the elementary Human Interface Guidelines. While JavaScript alerts and prompts might not be used a ton today, these new dialogs look how you’d expect and make interacting with websites that do use them feel much nicer.

## Get Ephemeral

Ephemeral is available on AppCenter for elementary OS for $9 or pay-what-you-want. Version 5.0 is available today while 5.1 should be rolling out shortly.
