---
title: Major Updates to Ephemeral
description: What’s new with the always-incognito web browser
updated: 2019-02-23
legacy: true

image: https://miro.medium.com/max/1400/1*v1WOWAngiyB9tAjuaqjn4Q.png

tags:
  - Ephemeral
  - AppCenter
  - elementary
---

In case you’ve missed it, I’ve been actively developing [Ephemeral, the always-incognito web browser](/blog/introducing-ephemeral), for elementary OS. My vision for version 1.0 was simple: a barebones web frame that didn’t keep any information around about your browsing. Since its release at the beginning of the year, I’ve been hard at work dogfooding and adding features as they seem relevant.

Here’s a recap of the major new features since the announcement!

## Smart Infobars

Ephemeral now has a few handy infobars to handle different situations. The goal is to be helpful, informative, but easily dismissable.

![Screenshot](https://miro.medium.com/max/1400/1*NUaY8fC9pW1cn8e8Skww7Q@2x.png)

If you’re browsing without it being your default, it’ll prompt you to make privacy a habit and set Ephemeral as your default browser. Of course you can dismiss this or ignore it forever, but it’s a setting many people may want to change when using it, and I don’t want to make them dig around in their System Settings.

If your device loses an Internet connection, Ephemeral has an infobar for that, and can help direct you to System Settings → Network to fix it. You can also dismiss this or ignore it forever (i.e. in case you’re using Ephemeral in a unique, offline environment for some reason).

If you’re using Ephemeral on elementary OS but haven’t purchased it, there’s an infobar reminding you of this fact and directing you to the AppCenter listing where you can purchase or fund it. You can dismiss this one too, but of course I always appreciate purchasing paid apps and helping fund the development.

Lastly, if somehow you’re using Ephemeral on something other than elementary OS, Ephemeral will let you know that things might not work exactly how you’d expect. As with all the others, you can safely dismiss this one too, but I wanted to be careful to set expectations early.

## The Menu

Ephemeral 1.0 didn’t even ship with a menu! That’s because there wasn’t much to the app, and sticking a menu in your app just for the sake of having a menu isn’t really sane. However, with a handful of new features, a simple menu naturally became the home for them.

![Screenshot](https://miro.medium.com/max/1400/1*Q50LxAOesMTlFwS0Nl-P8w@2x.png)

I’ve still avoided adding a preferences dialog (for similar reasons), as any settings or toggles are more contextual and don’t require a whole other window to manage them. But let’s dive into new features here:

## Zoom

One of the earliest features added (and the initial reason for the menu) is zoom! This borrows the design from other elementary apps like Code and Terminal with a simple linked minus/default/plus control. It’s also quite similar to what you see in Firefox and Chrom(e/ium).

## Window Management

To keep things balanced (as all things should be), I moved the “Open New Window” control into the menu; this way there are still three controls on each side: back/forward/refresh on the left, and erase/open/menu on the right. While I was at it, I exposed the “Quit All Windows” command here, as it had a keyboard shortcut (Ctrl+Q) before, but wasn’t exposed in the UI. Yay for discoverability!

## Search Engines

I recently added Startpage.com support to Ephemeral, and set it as the default search engine. However, I know many people use and prefer DuckDuckGo, so I added an option to toggle between these two engines right in the menu. In the future more engines (and a “Custom” option) may be added, at which point these might get their own dialog for management. But for now, it’s a simple one-click change in the menu.

## Reset

![Screenshot](https://miro.medium.com/max/1400/1*8c69RKrG_RyhQfKsPWunBg@2x.png)

With the addition of preferences such as the search engine and infobar behaviors, it made sense to provide a way to factory reset things. Again instead of dropping out into a preferences dialog, adding a “Reset Preferences” item inline works well for now. Of course to protect from accidents, there’s a standard confirmation dialog here.

## Open in External Browser

The first version of Ephemeral simply pulled any other installed web browsers in and plopped their icons in the header bar. Not only could things get unbalanced, they could get straight-up hilarious:

<figure markdown="1">
![Screenshot](https://miro.medium.com/max/1400/1*ntpeuWRrHAgnNwJDwY2E-A.png)
<figcaption>Hilarious, but not a good look. And not that unbelievable for web developers.</figcaption>
</figure>

Clearly this wasn’t the best long-term solution. So I added a new browser menu with some handy behavior. By default, it shows the standard “export” icon that’s expected when sharing data out to external apps. Clicking this brings up a menu of any installed web browsers. Choosing one of these browsers opens the site in that browser.

<figure class="half" markdown="1">
![Screenshot](https://miro.medium.com/max/5612/1*CjKF7gUDosjkFZKuxfF91g@2x.png)
![Screenshot](https://miro.medium.com/max/5612/1*KmNK_BHLT9ZvR7yKF6AuOA@2x.png)
<figcaption>New Browser Menu without a default selected. Plus, Ephemeral remembers your previously-chosen browser.</figcaption>
</figure>

Once a browser has been chosen, Ephemeral remembers it and puts it right in the header bar, along with a drop-down menu to the side to re-show that menu of browsers. This means that it retains the simplicity of one-click opening for most users, but remains flexible in case you’d want to open certain sites in other browsers.

Lastly, a new “Close Window When Opening Externally” toggle was added to this menu. I found that I usually wanted to close Ephemeral if I was popping into another browser, but I understand that not every user might want that so it’s a simple inline option.

## URL Entry + Suggestions

First off, the URL entry now supports searching from it (yep, that wasn’t in 1.0). So it’s faster to perform a search from anywhere.

One major way I wanted to make Ephemeral faster and more useful to use day-to-day was to provide suggestions and auto-completion in the URL entry. However, as an always-incognito browser, this obviously can’t be based off of the user’s long-term history—that would imply storing (and subsequently leaking) their history, which defeats the whole point.

Instead, I took inspiration from Firefox Focus yet again, and compiled a list of over 400 popular web domains—based on Mozilla’s list—and added them to the auto-completion of the URL entry. They’re handled 100% locally (still no touching a remote server until explicitly navigating), and only come up once there’s a match of 3+ characters. So they shouldn’t get in the way or feel like they’re randomly being suggested, but once you type a few characters of a popular site, it’ll come up. And if there’s just one match, it offers to autocomplete as well.
URL suggestions with multiple domains show a menu, and single domains autocomplete


<figure class="half" markdown="1">
![Screenshot](https://miro.medium.com/max/4096/1*B6ds8x8bzIq9JKdg-Nf67A.jpeg)
![Screenshot](https://miro.medium.com/max/4096/1*O1170zpy4U4xWFt_fKY1Og.jpeg)
<figcaption>URL suggestions with multiple domains show a menu, and single domains autocomplete</figcaption>
</figure>

Some search engines also support query suggestions, but it hasn’t been decided if Ephemeral will support this; it means Ephemeral would start sending your query over the network before you explicitly navigate, which could be problematic in a privacy-focused browser. It is also a large undertaking, as not all search engines support it in the same way. So we’ll leave that decision for the future. Even so, I’m really excited about the domain completion feature as it’s relatively simple under the hood, but makes a huge difference in usage.

## And More!

As you may have noticed from screenshots, Ephemeral has a striking new blue-purple gradient look, better echoing its two-tone icon. It’s exciting and satisfying to push what can be done in GTK CSS here, and I hope I can inspire more apps for elementary OS to get adventurous with their designs.

Ephemeral now has a built-in native start page, meaning that it doesn’t touch the network until you explicitly navigate. You can still search straight away right from the URL entry.

I’ve also added new error pages for when a site can’t be reached, instead of just loading a blank white page.

Links can be opened in a new window with a Ctrl- or middle-click.

Twitch, YouTube, and other sites are now better supported with Media Source Extensions; consequently, YouTube can stream up to 4K.

When trying to open an external app (like AppCenter with appstream:// links), Ephemeral will now warn you and let you choose if you’d like to allow that.

Lastly, Ephemeral is now translatable and translated into Spanish, French, Brazilian Portuguese, Dutch, Lithuanian, Russian, and German.

You can see the full list of releases and changes on [GitHub](https://github.com/cassidyjames/ephemeral/releases), or at the [AppCenter Website](https://appcenter.elementary.io/com.github.cassidyjames.ephemeral/).

I’ve been busy with Ephemeral, but the best part: it’s completely open source! If you have suggestions, come across issues, or want to help with development, head over to [github.com/cassidyjames/ephemeral](https://github.com/cassidyjames/ephemeral) to help out. There are several issues tagged as “Help Wanted,” but I’m open to people pitching in in any way they can.

And remember, purchasing Ephemeral on AppCenter directly funds the development and helps keep me motivated to work on it. :)

Until next time!
