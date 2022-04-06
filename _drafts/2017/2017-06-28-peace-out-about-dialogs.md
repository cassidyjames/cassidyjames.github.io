---
title: "Peace Out, About Dialogs"
description: "and hello metadata standards"
author: danrabbit
date: 2017-06-28T15:48:24.851Z
image: /images/peace-out-about-dialogs/1mrrQ-gyPp_02a4_UFX5O0g.png
tags:
  - devs
  - design
---

When we first started writing apps, package managers were not very friendly things. They pretty much looked like this:

<figure markdown="1">
![Doesn’t wanna be friends. Only manages packages.](/images/peace-out-about-dialogs/1B7e58f6IwUCUtnlEtpFdxQ.png)
<figcaption markdown="1">
Doesn’t wanna be friends. Only manages packages.
</figcaption>
</figure>

But app developers wanted a way to provide *metadata* with their apps. Stuff like licensing information and a link back to their website. So soon there was something that looked a lot like this:

<figure markdown="1">
![An old Gtk2 about dialog](/images/peace-out-about-dialogs/0SNlhBVJ3W1tzVpH8)
<figcaption markdown="1">
An old Gtk2 about dialog
</figcaption>
</figure>

But as we started writing more apps, we realized that there was a standard set of links we wanted to provide with every app that wasn’t covered here: a place to get help, a place to report issues, and a place to suggest translations. So we decided to write our own Granite About Dialog.


<figure class="half" markdown="1">
![](/images/peace-out-about-dialogs/0FR5T1GxBGcfY5KAI)
![Left: The super rad Firefox about dialog; Right: Granite’s About dialog](/images/peace-out-about-dialogs/1mrrQ-gyPp_02a4_UFX5O0g.png)
<figcaption markdown="1">
Left: The super rad Firefox about dialog; Right: Granite’s About dialog
</figcaption>
</figure>

The Granite About Dialog was heavily inspired by Firefox with a large, bold icon and links to things that we felt like our users cared about.

We decided that we’d put a link to this dialog in the gear menu of all our apps (the fancy new replacement for menubars). And for a time, we looked over all that we had made and we saw that it was very good… until we wanted to design apps without a gear menu. So we moved the link to the dock with quicklists. But then we made quicklists searchable in the applications menu, and now we have all these About entries cluttering up search results, and it was not so good anymore.

## Suddenly, App Stores

Ever since the iOS App Store, we’ve had to rethink what a package manager’s job is. It suddenly became a place where you not only expected to be able to add and remove packages, but a place to discover and evaluate new apps that you’ve never heard of before. And for that, apps need to display metadata: descriptions, screenshots, licensing information, and *links to useful web pages*. With AppCenter, about dialogs start to make a lot less sense. There’s already a canonical place to see application metadata. And now there’s even a standard specification called [AppStream](https://www.freedesktop.org/software/appstream/docs/sect-Metadata-Application.html) so that app developers and app store developers can be on the same page about what things they expect to be able to share. To that end, we’re making a couple of changes in elementary OS.

<figure markdown="1">
![New AppInfo page footers in AppCenter](/images/peace-out-about-dialogs/145GeVGqVbNw2tyr6SrPByQ.png)
<figcaption markdown="1">
New AppInfo page footers in AppCenter
</figcaption>
</figure>

In a recently released version of AppCenter, we’ve redesigned the page footer to include project licenses and to cover more URLs from the AppStream specification.

In each of our 1st party apps, we’ll be making sure we have valid and up-to-date AppStream `appdata.xml` files and we’ll begin removing the About Dialogs.

We’ll also soon deprecate the Granite About Dialog widget so developers will see a warning when building their apps using this widget.

## How to get on board

If you’re a developer ready to kill the About dialog in your app, make sure that you’re making use of the [following tags](https://www.freedesktop.org/software/appstream/docs/chap-Metadata.html#sect-Metadata-GenericComponent) in your `appdata.xml` file:

  * `<project_license>`

  * `<url type="homepage">`

  * `<url type="bugtracker">`

  * `<url type="help">`

  * `<url type="translate">`

Then, remove the About dialog from your apps, if you are using them. Now, feel free that you can make new UI decisions that aren’t based around legacy concepts! Choose not to have a gear menu if you don’t want one. And lastly, enjoy an uncluttered applications search.
