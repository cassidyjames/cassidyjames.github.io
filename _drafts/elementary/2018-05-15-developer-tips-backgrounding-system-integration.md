---
title: "Developer Tips: Backgrounding & System Integration"
description: Best practices for making your app a first-class citizen
author: cassidyjames
date: 2018-05-15T18:45:47.989Z
image: /images/developer-tips-backgrounding-system-integration/1jDmdgKEQLIezltJm9ado3Q@2x.png
tags:
  - devs
  - developer-tips
---

How your app should integrate with elementary OS and run in the background can be a tricky topic; other platforms have different conventions like minimizing to a system tray or being sort of document-based instead of app-based, which can lead to weird interactions if carried over to elementary OS. So what’s the _right_ way to run in the background and integrate with the OS? Let’s take a look.

## Backgrounding Your App

The first step is to have your app continue to do work while not in the foreground. In elementary OS, we encourage an [“Always Saved” user workflow](https://elementary.io/docs/human-interface-guidelines#always-saved) along with sane [background tasks](https://elementary.io/docs/human-interface-guidelines#background-tasks). Together, these mean users don’t have to worry about saving things or being careful with closing apps, as everything should just work and come back how they left it.

If your app’s main window is closed, you can override the [`delete_event`](https://valadoc.org/gtk+-3.0/Gtk.Widget.delete_event.html) to continue to do work and integrate with the OS through the Dock, Applications Menu, and Notifications. This is similar to how Mail keeps checking for incoming emails, Music keeps on playing, and AppCenter continues updates all when their respective windows are closed.

Always respect the user’s resources and don’t run in the background if you don’t need to. But if it makes sense for your app and the user would expect it, it can be a great experience. Just be sure to close down your app to free up resources when it’s not doing any work.

## Dock & Applications Menu Integration

The most immediately visible aspect of system integration—and one that will help when backgrounding your app—is your app’s launcher, shown in the Dock and Applications Menu. This is minimally your app’s icon and name, but there’s a whole bunch of utility here you are able to use.

### QuickLists

QuickLists are shown when right/secondary-clicking your app’s icon in the Dock and Applications Menu. There are two types: static, and dynamic.

<figure markdown="1">
![Static QuickLists always display in the Dock and Applications Menu, whether or not the app is open.](/images/developer-tips-backgrounding-system-integration/1JdWxGcPc2mGBgqrve0iGVQ@2x.png){: width="239.5" height="201"}
<figcaption markdown="1">
Static QuickLists always display in the Dock and Applications Menu, whether or not the app is open.
</figcaption>
</figure>

Static QuickLists are simpler to implement—they’re a [FreeDesktop.org spec](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s11.html), and are implemented completely within the app launcher file. And since they’re unchanging, they show even when your app is closed, plus they’re searchable in the Applications Menu. If your app’s actions don’t change, definitely opt for a static QuickList.

Dynamic QuickLists use the [LibUnity library](https://valadoc.org/unity/Unity.LauncherEntry.html) and require a little more work to get up and running, but can change based on the state of your running app. They also only display in the Dock, and not in the Applications Menu since they are used with running apps. If you have certain contextual actions that change or don’t make sense when the app isn’t running, opt for these.

Whether you use static or dynamic, **QuickLists are the best way for your app to expose actions to your users** outside of your app window, like when the window is on a different workspace or closed altogether.

### Badges

Your app can specify a numeric badge on its launcher icon, and this will be displayed to users in both the Applications Menu and on the Dock.

<figure markdown="1">
![Badges show up in the Dock and Applications Menu.](/images/developer-tips-backgrounding-system-integration/1em7pQMjB6Qwqwgpw6tiNtA@2x.png){: width="248.5" height="84.5"}
<figcaption markdown="1">
Badges show up in the Dock and Applications Menu.
</figcaption>
</figure>

In fact, if your app is in the background and adds a numeric badge, it will be added to the end of the dock even if it’s not pinned and the window is not open. This means **badges are a great way to** **quietly signal that there is new, actionable content** waiting in your app that the user is likely to care about.

Opening your app should typically clear any badges; check [the HIG entry](https://elementary.io/docs/human-interface-guidelines#badges) for more info.

### Progress Bars

Your app can use a progress bar in the Dock [via LibUnity](https://valadoc.org/unity/Unity.LauncherEntry.html).

<figure markdown="1">
![Progress bars show up on the Dock, whether your app window is open or not.](/images/developer-tips-backgrounding-system-integration/1jix8w-7loepONezUWTnl8g@2x.png){: width="187" height="78"}
<figcaption markdown="1">
Progress bars show up on the Dock, whether your app window is open or not.
</figcaption>
</figure>

**Progress bars are the best way to communicate an ongoing task**, like a file transfer or video rendering. Like badges, adding a progress bar will add your app to the Dock to show it, so it’s a great way to signal an ongoing background process without having to build any extra UI.

Check [the HIG entry](https://elementary.io/docs/human-interface-guidelines#progressbars) for more info.

## Notifications

Notifications are another extremely powerful way to integrate your app with elementary OS. From [the HIG](https://elementary.io/docs/human-interface-guidelines#notifications):
> Notifications play a sound and are displayed as bubbles just below the system indicators. They briefly appear on screen where they can be selected to open the relevant app or manually dismissed by hitting the X icon. After a short time, they automatically slide away. Missed notifications can be seen in and cleared from the Notification Center indicator.

Importantly, users are always in control of notifications and whether or not they appear. So just because your app sends one doesn’t mean the user saw it—they may have been looking away, their system might be in Do Not Disturb mode, or they may have disabled notifications for your app altogether.

<figure markdown="1">
![Notifications pop up at the top-right of the primary display.](/images/developer-tips-backgrounding-system-integration/1jDmdgKEQLIezltJm9ado3Q@2x.png){: width="401.5" height="196.5"}
<figcaption markdown="1">
Notifications pop up at the top-right of the primary display.
</figcaption>
</figure>

But used correctly, notifications are the most visible way to expose important, time-sensitive information to users. And your app doesn’t have to be drawing a window to use them; in fact, they’re most useful when no window is open at all, as it gives you a consistent, system-provided place to provide some rich information to the user and lead them back into your app.

Notifications are also super useful due to the Notifications Center indicator: it retains sent notifications, meaning it can be used to persist changes in status. All together, **notifications are the best and most visible way to both get information in front of your user, and persist it for later action**.

## So what about Indicators?

System Indicators are indeed a feature of elementary OS, but they’re reserved for use by the system to communicate system-wide statuses.

<figure markdown="1">
![System Indicators are displayed based on context.](/images/developer-tips-backgrounding-system-integration/10iHJswGZTVsPDsdaCyxN1w@2x.png){: width="401" height="227.5"}
<figcaption markdown="1">
System Indicators are displayed based on context.
</figcaption>
</figure>

The [HIG entry](https://elementary.io/docs/human-interface-guidelines#system-indicators) goes into more detail, but in summary: _application_ indicators are an anti-pattern, and not supported in elementary OS.

Apps should run in the background when it makes sense, and use the great ways to integrate into the OS through the Dock, Applications Menu, and Notifications. This helps keep users in control of their system and allows for deeper system integration when it makes sense—like when we added static QuickLists and dock badges to the Applications Menu.

I hope this helps you build great apps for your users on elementary OS and AppCenter! We’ve written a handful of other [Developer Tips](/tags/#developer-tips) articles to guide you. Is there an aspect of developing for AppCenter and elementary OS that we haven’t covered? Let us know on social media!
