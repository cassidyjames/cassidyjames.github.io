---
title: elementary OS 6 Beta 2 Now Available
description: Installer, Flatpak, Online Accounts, Notifications, and more since Beta 1
author: cassidyjames
image: /images/updates-for-july-2020/card.png
tags:
  - early-access
  - odin
  - devs
---

Developers and testers, elementary OS 6 Beta 2 is available now! For a refresher on what a beta is, the release schedule, and how to provide feedback, see the [Beta 1 announcement].

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "elementary-os-6-odin-beta" | first %}
{% include featured.html post=post %}
</div>

## What's New Since Beta 1

So, what have we been up to for the past several weeks? The biggest changes in Beta 2 are related to the OS installer, Flatpak, and Online Accounts.

### Installer

We've been putting lot of polish and cleanup into the installer UI. We've ensured the various views no longer resize the window, we reworked the layout in a few of the views to be more consistent with one another, and we added a pleasant animation to the installation progress view instead of just a static icon. We've also improved disk detection and error handling when failing to install on certain setups.

<figure class="card" markdown="1">
![Installer animation](/images/{{ page.slug }}/installer.gif){: width="800" height="567"}
</figure>

Since the installer is such a critical part of the OS, we highly encourage you to reinstall from Beta 2 if you have been developing on and testing elementary OS 6. It's important we ensure it works well across a wide variety of hardware so people can enjoy the latest elementary OS on their devices.

### Flatpak

We've continued our efforts to ship first-party apps packaged as Flatpaks in Beta 2. elementary OS 6 now comes with Calculator, Camera, Document Viewer, Screenshot, Tasks, and Web from the AppCenter Flatpak repository. As a user, it's entirely transparent: apps launch and behave just as before—they just happen to be packaged in a different way under the hood. As the beta process progresses and we solve sandboxing issues in our apps, we plan to transition even more apps over from Debian packages to Flatpaks provided by the AppCenter Flatpak repository.

We have also begun testing the third-party process for building Flatpak apps into AppCenter, as teased in the [AppCenter Dashboard sprint blog post](/appcenter-dashboard-sprint). The dashboard itself is not quite ready for testing, but we're getting ever closer and we now know the back-end works for reviewing and deploying apps to the repo.

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "appcenter-dashboard-sprint" | first %}
{% include featured.html post=post %}
</div>

A major fix since Beta 1 is the inclusion of FreeDesktop Flatpak extensions in Beta 2; this ensures things like rendering in Web works correctly on more web pages—if you had tab crashes in Beta 1, you'll want to get Beta 2 for the fix.

### Online Accounts

A major feature to land in Beta 2 is support for adding Online Accounts from System Settings. We now support adding both mail and calendar accounts that support the IMAP and CalDav standards. Once added, data from these accounts will show up across the system in apps like Mail, Calendar, and Tasks as well as in the Date & Time panel indicator.

This feature is still undergoing rapid development, but it is working and we highly encourage you to give it a try. Keep in mind some account providers require you to explicitly enable IMAP and CalDav support in your account, and some may require you to use an app password; refer to your online account provider's documentation for the exact details. But since we're leaning on widely-supported open standards, most email and calendar providers should now be compatible.

The rewritten Mail app is also nearing feature parity with the previous version while being faster and less error-prone. It's easier to test than ever before in Beta 2, so add your account and take it for a spin!

### Notifications

elementary OS 6 comes with an improved Notifications system, and we've expanded on its capabilities for app developers in Beta 2.

<figure class="half" markdown="1">
![Notification with an icon badge](/images/{{ page.slug }}/notification-badge.png){: width="362" height="90"}
![Notification with action buttons](/images/{{ page.slug }}/notification-button.png){: width="362" height="129"}
</figure>

Notifications now support icon badges and action buttons; developers, be sure to check [the documentation for these new APIs](https://docs.elementary.io/develop/apis/notifications) to ensure your apps can take advantage of these new features.

### …and More!

Beta 2 comes with greatly improved focus styles in the system stylesheet, and we've fixed several small issues including border radii of linked buttons, nested header bars, and missing styles for the `monospace` style class. Developers, make sure to test against Beta 2 to ensure your apps look right—and as always, please [file issues](https://github.com/elementary/stylesheet/issues) if you have any problems.

We've also continued to update and improve the [elementary Documentation](https://docs.elementary.io/) in general as we approach the release of OS 6. Check it out when building your apps, and please file issues or pull requests if you notice anything is off or could be improved; both the [Developer Docs](https://github.com/elementary/docs) and [Human Interface Guidelines](https://github.com/elementary/hig) live on GitHub as Markdown files, so it's possible for anyone to contribute.

Lastly, Web now follows the dark style preference, bringing it in line with the other default apps like Mail, Tasks, Calendar, Music, System Settings, AppCenter, and more. Not only does the user interface go dark, but websites that support the [`prefers-color-scheme` CSS media query](https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme) will work as they do on other platforms and browsers that support a dark style. If you're a web developer publishing a site that users of elementary OS may visit, be sure to support the `prefers-color-scheme` media query and provide users with a dark variant when requested.

## Get It

If you're an app developer or eager tester, you can get elementary OS 6 Beta 2 for 64-bit AMD/Intel today from our [builds site][builds]. While Early Access builds are limited to GitHub Sponsors, OS 6 beta releases are being made available to the general public in the interest of wider testing and app development.

<div style="text-align: center" markdown="1">
[Download elementary OS 6 Beta 2][builds]{: .button }
</div>

**We encourage all testers of Beta 1 to perform a fresh install**; some configuration changes and Flatpak fixes will not be automatically applied on Beta 1 since they are implemented when the OS image is built.

## Disclaimer & Known Issues

As with any pre-release software, there are are some known issues in this beta release. Check the [public project board] for known regressions, as well as the progress towards the stable release. And as always:

- We **do not recommend using beta builds on your primary device**, as irrecoverable crashes and data loss are possible.

- **It will not be possible to upgrade to the stable release** from beta builds.

- Some **user-facing features are unfinished** and in rapid development; beta releases are intended for developers.

[Beta 1 announcement]: /elementary-os-6-odin-beta
[public project board]: https://github.com/orgs/elementary/projects/55
[builds]: https://builds.elementary.io
