---
title: Updates for August, 2019
description: Plus some info about the 5.1 release
author: cassidyjames
image: /images/updates-for-august-2019/date-time_1600.png
tags:
  - updates
  - juno
---

Last month was busy! In August, we [officially launched the new blog]({{ site.baseurl }}{% post_url 2019/2019-08-15-welcome-to-the-new-blog %}), launched the [brand new login and lock screen greeter][greeter], and [attended GUADEC 2019]({{ site.baseurl }}{% post_url 2019/2019-09-05-elementary-at-guadec-2019 %}) in Thessaloniki, Greece. We've also been working hard on getting a 5.1 release in shape for users, but have hit a number of small roadblocks making it take longer than expected—which might be why this post is coming out way later than usual. 😉️

## Let's Talk About 5.1

So, what's actually planned for the upcoming elementary OS 5.1 release? As with previous point-releases of elementary OS, first and foremost it is a cumulative ISO refresh with all of the updates released to users throughout the past year. It will also include the latest kernel and hardware enablement (HWE) packages from Canonical as part of their Ubuntu LTS core.

### Trying Something New

However, since we moved from the 0.x numbering scheme to 5.x, we'll be treating this release a little differently. First, we've been working on significant reworking of the entire installation and first-run experience (which is where we've been hitting some snags).

Because the entire installation and first-run experience is different—and greatly improved—compared to the 5.0 release, we'll be giving this release its own identity and name. Importantly, **all users of elementary OS 5 Juno will be able upgrade to 5.1** via their normal updates in AppCenter. Think of 5.1 as a mid-cycle major update that everyone gets; it's somewhere between a usual point-release and an entirely new version of the OS.

<aside markdown="1">
> Think of 5.1 as a mid-cycle major update somewhere between a usual point-release and an entirely new version
</aside>

Another consequence of this change is that headlining features of 5.1 have already started trickling out to 5.0: the new [greeter] and [onboarding] apps, for example, are a large part of the 5.1 release. Rather than artificially limit them to 5.1, we've started rolling them out so existing users can enjoy them as soon as possible.

### Get the HWE Update Today

If you'd like the newer Linux kernel which includes improved hardware support—or if your hardware requires it—you can install the latest HWE stack from Terminal with the following command:

`sudo apt install --install-recommends linux-generic-hwe-18.04 xserver-xorg-hwe-18.04`

## Updates to Juno

With that out of the way, we still have a few monthly updates to Juno to share.

## Date & Time Settings

We released a new version of the Date & Time pane in System Settings with a lot of cleanup. Most obviously, we removed the timezone map; it was a very complicated custom-drawn widget that had become unmaintained over the years, and we have plans to better use the space of this pane in iterative updates.

<figure markdown="1">
![Date & Time Settings]({{ site.baseurl }}/images/updates-for-august-2019/date-time_800.png){: srcset="{{ site.baseurl }}/images/updates-for-august-2019/date-time_1600.png 2x"}
</figure>

Clean-up and improvement-wise, we added an automatic timezone setting, support setting the correct date and time settings for the new greeter, and fixed being able to toggle week number visibility for calendars. And as usual, there are the usual updated translations for non-English users.

## Applications Menu

We pushed out a few fixes to the app-launching Applications Menu as well. We now prevent accidentally launching apps when dragging an app out from the search results, and prevent AppCenter from making the panel freeze in certain circumstances. Translations were also updated as usual.

## Look & Feel

As previously mentioned, we released the long-awaited [new greeter][greeter] in August. For existing users, this means a new card-based look, actual full HiDPI support, multi-display support, Caps and Num Lock indication, corrected date and time format based on the selected user's settings, and tons of bug fixes compared to the previous greeter.

<aside>
{% assign post = site.posts | where:"slug", "say-hello-to-the-new-greeter" | first %}
{% include featured.html post=post %}
</aside>

We also released an improved version of the system stylesheet that we snuck in a mention to [last month]({{ site.baseurl }}{% post_url 2019/2019-08-04-updates-for-july-2019 %}).

## …and more!

We released a minor new version of the [Onboarding] app with a fix that prevents crashes on other OSes, plus updated translations. The system default settings package was updated to help support the date/time settings for the greeter.


[greeter]: {{ site.baseurl }}{% post_url 2019/2019-08-27-say-hello-to-the-new-greeter %}
[onboarding]: {{ site.baseurl }}{% post_url 2019/2019-07-23-get-settled-into-elementary-os-with-onboarding %}

