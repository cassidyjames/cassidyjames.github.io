---
title: The Heuristics of Headerbars
author: danrabbit
image: /images/the-heuristics-of-headerbars/pixels.png
tags:
  - design
  - gtk
  - devs
---

One of the more visually obvious changes we’re working on for Isis is the adoption of GTK’s new HeaderBar widget. This is a major departure from the way window controls and window titles have appeared for years, so I think it’s worth spending a bit of time discussing what this change allows.

## Every Pixel Counts

Whether we're talking about tiny 10" displays or giant 32" displays, we aim to make the best possible use of screen real estate. Combining the Titlebar and Toolbar into a single widget saves precious vertical pixels that could be better used to show your photos or the web.

![Screenshot of traditional titlebar vs headerbar](/images/the-heuristics-of-headerbars/pixels.png)

Additionally, using these new fancy window decorations means that windows can now have a semi-transparent single pixel border. Much like what this has done for our icons, it means that windows look as sharp and crisp over dark backgrounds as they do on light backgrounds, something that hasn’t been possible before.

## Larger Tap Targets

![Screenshot of window control tap targets](/images/the-heuristics-of-headerbars/tap.png)

Even though we're saving vertical space, we're actually able to increase the amount of space around Tool items. And by moving window controls into the same line as Tool items, we decrease the chance for misclicks by placing them farther away from each other.

## Window Titles Optional

Traditionally, every window comes with a title calling out the name of the app that’s open. For some apps, like Scratch, we use this space to call out important information such as the name of the file that is currently open.

![Screenshot of window without a title](/images/the-heuristics-of-headerbars/title.png)

However, for a lot of apps, this title doesn’t add value to what’s displayed on screen. When you open up Music, you can tell that it’s the music player because of the layout of the controls and the content that is displayed. In this app, the title is simply visual noise that makes it more difficult to focus on other more important information (like the currently playing song).

## A Little Creative Freedom

Mobile app developers are familiar with the idea of being able to visually express their brand in their apps, while staying within platform guidelines and using the native toolkit.


![Screenshot of window with a blue headerbar](/images/the-heuristics-of-headerbars/brand.png)

Now, desktop developers will be able take advantage of CSS theming in the HeaderBar of their apps as well.

## Coming Soon to Freya

While we’re excited to announce this direction, we’re still putting it all together! If you are an app developer with access to one of our Freya preview builds, you can expect the necessary bits and pieces to land within the next couple of weeks. For everyone else, it’s something to look forward to once Freya is ready and released.

## A Developer’s Choice

As a final note, I’d like to remind everyone that implementing the new HeaderBar and client-side window decorations is completely a developer’s choice. We’ll continue to support traditional window decorations in Gala for the foreseeable future and your apps will not be automatically converted. It’s up to the developer to decide if GTK HeaderBar is right for their app.

---

**Edit:** As of GTK 3.12, HeaderBars support Close, Maximize, and Minimize as well as a Menu item much like our current gear menu (So GNOME apps will look and work as expected on Pantheon!). Additionally, they remain configurable so you can place them on whichever side of the window you like. By default, we'll be sticking with our configuration of close on the left side and maximize on the right.


