---
title: elementary OS 6 Beta Available Today
description: What’s a beta, and what’s new for developers?
author: cassidyjames
image: /images/updates-for-july-2020/card.png
tags:
  - early-access
  - odin
  - devs

facebook: https://www.facebook.com/elementaryos/posts/4298503596848103
mastodon: https://mastodon.social/@elementary/106157045038618305
reddit: https://www.reddit.com/r/elementaryos/comments/n26x5e/elementary_os_6_beta_available_today/
twitter: https://twitter.com/elementary/status/1388284865645367297
---

Developers and testers, it's the day you've been waiting for: elementary OS 6 Beta is available now! We first started [talking publicly about elementary OS 6](/updates-for-july-2020) in August of last year. In the time since, we've been hard at work tackling the ambitious scope of work we laid out for ourselves while also dealing with the fallout of a global pandemic, travel restrictions, and loss in our own circles of family and friends.

Despite all of that, we're proud of the work we've done and are excited to get it into the hands of developers and testers as we work to complete the stable release.

## What’s a beta?

Before we get into what's new, a refresher on what "beta" means. There are generally three phases of development of elementary OS:

- Early Access
- Beta
- Release Candidate

Early Access builds are considered "bleeding edge," use the daily repositories, and are made available as soon as possible without the standard human testing process that goes into stable builds. In the case of elementary OS 6, we started building Early Access builds all the way back in August, 2020. Sponsors of elementary have had access since then, but we do not recommend anyone uses Early Access builds on their day-to-day computer as there are frequently breaking issues due to the nature of early development. Because they use the daily repos, it is not possible to cleanly upgrade from Early Access builds to the stable release.

Beta releases are a snapshot of Early Access builds once the developer platform has stabilized. At this point, we invite app developers to begin building and testing their apps on elementary OS. They're still built on the daily repos, so we still caution against using beta releases as your daily driver, and it is still not possible to cleanly upgrade to the stable release. But things should be more stable—especially around developer-facing APIs. **You are here.**

<aside markdown="1">
>Beta releases are a snapshot of Early Access builds… we still caution against using beta releases as your daily driver
</aside>

Release Candidates are what they sound like: candidates for the stable release. These are built on the stable repositories, benefiting from the more rigorous human testing that goes into stable releases. At this point, we consider the release "complete," and any further work is finding and fixing remaining bugs before the stable release.

Once we are comfortable with the state of the latest Release Candidate, we promote it to the stable release.

## What's new?

Lucky for developers, we've been detailing the changes in elementary OS 6 since August of last year. To start, you might want to check out the very first blog post about elementary OS 6, where we highlight what's to come:

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "updates-for-july-2020" | first %}
{% include featured.html post=post %}
</div>

But here's a recap for you all in one place, as well as links to more detailed individual blog posts if you missed them.

### Platform Changes

There is _a lot_ new under the hood in elementary OS 6 that developers should be aware of. The new screen shield brings continued audio playback even when the display has gone to sleep, enabling new use cases for your apps. We've completely revamped the notifications system with a new notifications server and a refreshed design; make sure your apps' notifications are showing properly on elementary OS 6, and please send feedback if something isn't working as you'd expect.

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "platform-changes-in-elementary-os-6" | first %}
{% include featured.html post=post %}
</div>

We're including [LibHandy](https://valadoc.org/libhandy-1/Hdy.html) in elementary OS 6; we encourage app developers to check it out and look at the first-party apps on elementary OS 6 to see how we're using it. In particular, replacing Gtk.Stack with Hdy.Deck will enable multi-touch swipe gestures for navigation, while Hdy.Carousel is great for pagination while also supporting multi-touch swipes. There are also new avatars with Hdy.Avatars, Hdy.Window enables rounded bottom corners and easy window dragging from any widget, and Handy includes a few layout helpers to make it easier to adapt your app's interface across small to large displays.

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "multitouch-gestures-in-elementary-os-6" | first %}
{% include featured.html post=post %}
</div>

We've added several new widgets, utilities and constants to [Granite](https://valadoc.org/granite/Granite.html), our GTK companion library. `Granite.Dialog` is a big one that simplifies creating dialogs following the elementary HIG. `Granite.SwitchModelButton` simplifies adding switches to `Gtk.Popover` menus, as seen in Terminal and Camera. `Granite.ValidatedEntry` brings client-side validation to user inputs—we'd love feedback about how you're validating entries in forms so we can make that experience easier in future updates as well. `TOOLTIP_SECONDARY_TEXT_MARKUP` is a constant for adding a smaller second line to `Gtk.Tooltips`, as seen in the new Panel indicator tooltips. `STYLE_CLASS_SMALL_LABEL` enables smaller `Gtk.Labels` without having to use Pango markup. `STYLE_CLASS_WARMTH` and `STYLE_CLASS_TEMPERATURE` are new constants for scales, as seen in the editor in Photos. `STYLE_CLASS_DEFAULT_DECORATION` is a new constant for slim header bars. `TRANSITION_DURATION_OPEN` and `TRANSITION_DURATION_CLOSE` are new constants for use in GTK animations to ensure consistency throughout the system. There have also been a number of deprecations and removals, so be sure to build, test, and update your apps for Granite 6.0 and elementary OS 6.

A major shift for elementary OS 6 is the inclusion of Flatpak apps out of the box, as well as an entirely Flatpak-based AppCenter ecosystem. We've created and are shipping a Flatpak platform and SDK that include all of the FreeDesktop, GNOME, and elementary libraries and technologies your apps will need to be built as a Flatpak—think of the platform as the elementary OS base in Flatpak form. We've updated the relevant [developer docs](https://docs.elementary.io/develop/) to include information about [packaging your app as a Flatpak](https://docs.elementary.io/develop/writing-apps/our-first-app/packaging).

<aside markdown="1">
>A major shift for elementary OS 6 is the inclusion of Flatpak apps out of the box, as well as an entirely Flatpak-based AppCenter ecosystem.
</aside>

If you already have an app on AppCenter or are developing one for elementary OS 6, we highly encourage you to familiarize yourself with writing a Flatpak manifest and testing your app as a Flatpak, as **all AppCenter apps in elementary OS 6 and beyond will be built as Flatpaks**. The publishing flow for Flatpak apps in AppCenter is not yet open, but will be by the time elementary OS 6 is released; hang tight, get familiarized with it locally, and we'll provide more information here on the blog when it's ready. We'll be sprinting on this early next month, so it shouldn't be _too_ long before you hear more.

We've also been hard at work refreshing the [Human Interface Guidelines](https://docs.elementary.io/hig/) for elementary OS 6; first, we've moved them to a new Gitbook-powered docs site alongside the developer documentation, creating a much more cohesive and better-organized one-stop-shop for all your docs. We've also been updating the HIG to better address questions, remove deprecated patterns, and add new widgets and patterns for elementary OS 6. Give it a fresh read-through, or search for the specific answers you're looking for! If there's something you feel is missing, please file an issue against [the new standalone HIG repo on GitHub](https://github.com/elementary/hig/), and we can discuss and address it there.

### Look & Feel

elementary OS 6 is coming with an all-new system stylesheet that retains the essential feel of elementary OS while honing in on the use of elevation and shadow—all while enabling great new user-facing features like system-wide accent colors and a dark style preference. We've also refreshed typography, unifying on the Inter typeface in various weights. App developers, be sure to test your apps against the new stylesheet and typography to ensure your app looks and feels as good as possible—and consistent with our first-party apps.

If you run into stylesheet issues as a developer, **please [file an issue on the stylesheet repo](https://github.com/elementary/stylesheet/) before trying to work around things** with custom CSS; it's possible we missed some pattern you and other developers rely on. We also welcome feedback in general about anything you're using custom CSS for that we could upstream to make available to all apps.

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "look-and-feel-changes-elementary-os-6" | first %}
{% include featured.html post=post %}
</div>

And as we've been teasing quite a bit, elementary OS 6 introduces a dark style preference for the first time. Importantly, this is **opt-in** for app developers; by default, your app will behave the same as in previous versions of elementary OS, using the light or dark variant of the stylesheet—whichever it requests. But in elementary OS 6, your app can bind to [Granite.Settings.ColorScheme](https://valadoc.org/granite/Granite.Settings.ColorScheme.html) to respond to the user's preference, e.g. by requesting the dark stylesheet variant and providing alternate in-app styles. For most apps, we recommend just going along with the user's preference by default—but if your app has a specialized use or multiple color schemes, you should start considering how your app will respond to the user's preference.

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "dark-style-progress" | first %}
{% include featured.html post=post %}
</div>

At this point in the beta, more complex developer-facing apps like Code and Terminal do not yet interact with the dark style preference; they retain their in-app color scheme settings. This may change before the final release of elementary OS 6.

### New & Updated Apps, Other User-facing Features

While we'll save the full rundown of new features for the stable release blog post, we do have some new apps and features that we'd love beta tester feedback on.

Mail has been completely rewritten; instead of relying on the custom Geary mail back-end, it now uses the system's Evolution Data Server which brings much wider mail server compatibility. Tasks is a new app that also talks to Evolution Data Server, enabling seeing and synchronizing your to-dos to various services. Currently, **setting an account up requires installing Evolution from the Ubuntu repos** (e.g. with `sudo apt install evolution`) and configuring your account there; for the stable release this will be set up in Online Accounts settings, but that work is not yet complete.

Files has a rewritten sidebar and—after a lot of testing and user feedback—a new navigation mode: single-click to navigate within the app with a double click to open files in their default app. Files has always been single-click to open, but this new hybrid approach strikes a balance between fast, consistent navigation while avoiding accidental opens of large files.

We've also redesigned a few System Settings views, and welcome feedback about them: Desktop has gotten a lot of attention to the Appearance tab with the new dark style preferences, accent colors, and dyslexia-friendly text setting. The Hot Corners tab has also been renamed to Multitasking with the addition of toggles for moving windows to a new workspace when entering fullscreen or maximizing. New gestures preferences have been added to Mouse & Touchpad settings. And the "About" view in System Settings has been renamed "System" and completely redesigned with the important addition displaying and updating device firmware with [fwupd and the Linux Vendor Firmware Service](https://fwupd.org/).

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "meet-the-upcoming-installer" | first %}
{% include featured.html post=post %}
</div>

The [new installer for elementary OS](/meet-the-upcoming-installer) is finally here and brings much faster and more straightforward installs for both end users and OEMs. This is an area we would appreciate a lot of testing across different hardware and configurations, so if you are able to spare a non-primary machine for elementary OS testing, start by installing it!

## Providing Feedback

A major part of the beta process is having people test these changes and report back! If you have feedback regarding and of the user-facing changes or notice any regressions in functionality, stability, etc. please file an issue.

<figure>
  <picture>
    <source srcset="/images/{{ page.slug }}/feedback-dark.png" media="(prefers-color-scheme: dark)">
    <img alt="Feedback tool" src="/images/{{ page.slug }}/feedback-light.png" width="692" height="421" />
  </picture>
<figcaption>System Settings → System → Send Feedback</figcaption>
</figure>

The best way to do so is via the built-in Feedback tool in elementary OS 6: search "feedback" in the Applications Menu, or head to _System Settings_ → _System_ → _Send Feedback_. The Feedback tool will help you determine which component is affected, and open its GitHub issues page in your web browser where you can check for an existing issue and report it if it's indeed new.

Otherwise, you can always head to the [elementary GitHub organization](https://github.com/elementary) and search for the proper component there. Double-check the README on the repository you choose before filing an issue to make sure it's the right component, and please **always use the provided issue templates**; it significantly cuts down on the time required for us to confirm, triage, and ultimately address reported issues.

## Release Schedule

At this stage of development, we don't have a release date set for elementary OS 6; that will come once we receive and address beta feedback from users and early testers. We do expect a second beta release and at least one Release Candidate before the stable release. As has been the case throughout all of the development of elementary OS 6, you can follow along on the [public project board] to get a sense of the outstanding tasks and our progress—or where you can pitch in!

Also note that the experimental Early Access builds for ARM-based devices like Pinebook Pro and Raspberry Pi are currently paused; with the move to Flatpak for some core apps, we'll need to sort out an ARM-based Flatpak build infrastructure before they can resume.

## Get It

If you're an app developer or eager tester, you can get elementary OS 6 Beta for 64-bit AMD/Intel today from our builds site. While Early Access builds are limited to GitHub Sponsors, beta releases are being made available to the general public in the interest of wider testing and app development.

<div style="text-align: center" markdown="1">
[Download elementary OS 6 Beta](https://builds.elementary.io){: .button }
</div>

## Disclaimer & Known Issues

As with any pre-release software, there are are some known issues in this first beta release. Check the [public project board] for known regressions, as well as the progress towards the stable release. And as always:

- We **do not recommend using beta builds on your primary device**, as irrecoverable crashes and data loss are possible.

- **It will not be possible to upgrade to the stable release** from beta builds.

- Several **user-facing features are unfinished** and in rapid development; beta releases are intended for developers.

[public project board]: https://github.com/orgs/elementary/projects/55
