---
title: "Developer Tips&#58; Making a Killer AppCenter Listing"
description: "Five ways to make your app stand out"
author: cassidyjames
date: 2017-08-25T19:12:07.174Z
image: /assets/images/developer-tips-make-a-killer-appcenter-listing/1gM5npdtsl3B1-x53mfrANA.png
tags:
  - "design"
  - "appcenter"
  - "elementary-os"
  - "tips"
  - "how-to"
---

As the number of apps in AppCenter grows, it’s becoming increasingly important for your app’s listing to stand out. It’s no longer sufficient to simply *be at* the party, you need to *be the life of* the party!

Read on for the five most important tips for your app to stand out.

## Well Designed, Pixel-Perfect Icons

<figure markdown="1">
![](/assets/images/developer-tips-make-a-killer-appcenter-listing/1UfrfhbhfeeA-lPvhy0s7QQ.png)
</figure>

The first thing anyone will see for your app is its icon; it’s featured prominently in the banner when your app is brand new, and is the primary identifying part of your app listing throughout AppCenter.

*Make sure it is awesome!*

Follow the [Iconography section of the Human Interface Guidelines](https://elementary.io/docs/human-interface-guidelines#iconography) to the letter, or consider working with a designer who can. Pixel-perfection, aligning to the grid, and appropriate color usage are critical to your icon simultaneously fitting into elementary OS and being recognizable. Also be sure to provide all appropriate sizes so it looks great throughout AppCenter as well as in the application launcher, dock, and workspace switcher when installed.

Daniel Foré recently wrote [a whole piece about this](https://medium.com/elementaryos/developer-tips-shipping-application-icons-ad024666f207), so be sure to give it a read.

## Unique, Memorable Name

<figure markdown="1">
![Nimbus by Daniel Foré has a unique and memorable name. It relates to both the icon and functionality of his app.](/assets/images/developer-tips-make-a-killer-appcenter-listing/13UW91C2fS8vCT-Y_tV_4wg.png)
<figcaption markdown="1">
Nimbus by Daniel Foré has a unique and memorable name. It relates to both the icon and functionality of his app.
</figcaption>
</figure>

The best apps are the ones you remember when talking to a friend or searching for it later. Make sure you name your app something that is unique (so it’s not confused with a competitor’s app!) and memorable. It helps if the sort of app is decipherable from its name, but honestly that’s less important than a memorable name and a to-the-point summary. Which leads me to…

## To-the-Point Summary & Appropriate Description

Your app’s **summary** is displayed below its name in AppCenter banners, and introduces the app on its info view. This should give potential users a one-sentence summary of what your app lets the user do, much like the [Comment field in your app launcher](https://elementary.io/docs/human-interface-guidelines#app-launchers). Don’t repeat the name of your app and don’t fill it with fluff.

**Protip:** Avoid the word “simple” here! It’s overused and should be apparent from the screenshots and description.

The **description** is a longer field that is displayed on your app’s info view. It should be as long and detailed as needed to describe what your app does, its features and any information the user should know up-front. Not every user will read this at length, but it can be a powerful way to show how your app stands above other, similar apps. Be sure to use bulleted lists and other lightweight formatting as appropriate to break it up and make it more interesting to read.

**Protip:** In AppCenter, we also display up to the first paragraph of your description in banners, so *don’t repeat your summary!* It will look awkward and repetitive.

## Multiple High-Quality Screenshots

Once a user is on your app’s info view, their eye will be drawn to the screenshots. It’s the first time they get to see your app in action, and first impressions count. Make sure your default screenshot is your best, but also include a few other interesting shots if people want to take a closer look. Follow [the AppStream spec](https://www.freedesktop.org/software/appstream/docs/sect-Metadata-Application.html#tag-dapp-screenshots) and you should be good.

<figure markdown="1">
![Spice-Up by Felipe Escoto has four big, beautiful screenshots that show off the different features of his app.](/assets/images/developer-tips-make-a-killer-appcenter-listing/1gM5npdtsl3B1-x53mfrANA.png)
<figcaption markdown="1">
Spice-Up by Felipe Escoto has four big, beautiful screenshots that show off the different features of his app.
</figcaption>
</figure>

Be sure to use the default elementary OS settings: GTK+ stylesheet, icons, fonts, button layout, etc. Your screenshots should represent what a user on a fresh install of elementary OS will see when they use your app.

If you have access to a HiDPI display, take screenshots in HiDPI; this will help ensure they look great everywhere. Also be sure to “Grab the current window” of your app with the built-in Screenshot tool on elementary OS. This gets you the window borders and shadow over a transparent background for free.

## Release Descriptions

Lastly, a great way to please and keep the trust of users is to use a descriptive changelog for your releases. Tell users what you changed, added, or fixed and why. Don’t go overboard with technical information, but point out what might affect users.

<figure markdown="1">
![Release descriptions are shown in the “What’s New” section at the bottom of your app listing. Here, an example from Eddy by Adam Bieńkowski.](/assets/images/developer-tips-make-a-killer-appcenter-listing/1eZYu9OI5APRUiCfITIdfBg.png)
<figcaption markdown="1">
Release descriptions are shown in the “What’s New” section at the bottom of your app listing. Here, an example from Eddy by Adam Bieńkowski.
</figcaption>
</figure>

Follow the [AppStream releases spec](https://www.freedesktop.org/software/appstream/docs/chap-Metadata.html#tag-releases) and use the descriptions for a brief changelog of each relese.

AppCenter may show a changelog of recent releases to potential users (before they install), plus the most recent release when a user is updating. Don’t fall into the “Bug fixes and performance improvements” trap for every release; let users know what kinds of bugs were fixed or improvements were made.

<figure markdown="1">
![Eddy’s release description when expanded in the Updates view.](/assets/images/developer-tips-make-a-killer-appcenter-listing/1oWmrlqo6E8qcGMFiKf2Hxw.png)
<figcaption markdown="1">
Eddy’s release description when expanded in the Updates view.
</figcaption>
</figure>

Follow these tips and your app will stand out from the crowd in AppCenter. Always think about how users will see your app alongside others, and strive to represent it both flatteringly and accurately!

*We’d like to say thanks again to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*