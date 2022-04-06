---
title: "AppCenter Spotlight: Planner"
description: Never worry about forgetting things again
author: cassidyjames
rdnn: com.github.alainm23.planner
image: /images/appcenter-spotlight-planner/project_800.png
thanks: true

tags:
  - appcenter-spotlight
  - interview

facebook: https://www.facebook.com/elementaryos/posts/3052846374747171
mastodon: https://mastodon.social/@elementary/103682138652819524
reddit: https://www.reddit.com/r/elementaryos/comments/f60q15/appcenter_spotlight_planner/
twitter: https://twitter.com/elementary/status/1229891020374134784
---

If you've been looking for a great task management app, look no further: Planner by Alain is the one. It's also by far one of the most polished apps I've seen in AppCenter—it does so much, but it does it all well.

{% include appcenter.html %}

Planner is designed around to-do lists, but it's much more than just a single list of checkboxes. It handles due-dates, projects, reminders, and even online sync with Todoist.

## Meet Alain

Planner is developed by Alain, a 25-year-old systems engineer and app developer from Cusco, Peru.

<figure class="circle" markdown="1">
![Alain](/images/appcenter-spotlight-planner/alain.jpg){: srcset="/images/appcenter-spotlight-planner/alain@2x.jpg 2x" width="320" height="320"}
</figure>

>My favorite hobby is listening to music, I feel that I concentrate much more when I put on my headphones and listen to a good hard rock at full volume. Otherwise, living in a tourist country, I like to travel and see new places. And from time to time I also like to cook (my girlfriend always tells me I'm a good cook).

Alain has been following elementary since Luna, and has always appreciated our design. Like many apps, Planner came about out of necessity.

>I basically developed Planner because it was a tool I needed, I started working as a software developer 3 years ago and using elementary OS as my main OS. I used several project and task managers (Things, Todoist, Trello, MeisterTask, etc) but there was always something that made me leave them (features, design). Then I started thinking and decided to develop my own task manager, a native one with a good design—and I think I succeeded.

Planner has been on AppCenter for over a year now, but the major 2.0 update was released just about a month ago. In addition to a major visual overhaul, Planner 2 brought online sync.

>I really like Planner 2 because not everything stays on the computer, now you can also synchronize your task with Todoist and work from anywhere.

So far, Alain has been happy with both elementary OS and AppCenter.

>I really like elementary OS and AppCenter (I consider myself a fanboy) distributing your application for everyone to use is very easy.

The one critique is that our payment processor [does not currently support Peru](https://stripe.com/global), so Planner can't be monetized yet (without incorporating a company in another country, i.e. using [Stripe Atlas](https://stripe.com/atlas)). However, Alain has seen some success in using [PayPal] and [Patreon] to help sustain development.

## How Planner Works

There are three default views in Planner: Inbox, Today, and Upcoming. "Inbox" acts as a default staging area for tasks; if you want to just throw some tasks into Planner without worrying about which list to attach them to, this is where you do that. "Today" shows tasks that are due today across all projects and lists—handy for knowing your immediate priorities. "Upcoming" shows a calendar agenda-style list of future dates, along with any tasks assigned to those days—plus any calendar events you have on those days to make planning even easier. How thoughtful!

<figure markdown="1">
!["Today" view in Planner](/images/appcenter-spotlight-planner/today_800.png){: srcset="/images/appcenter-spotlight-planner/today.png 2x" width="1162" height="774"}
<figcaption markdown="1">
Example "Today" view
</figcaption>
</figure>

You can add projects to the sidebar to keep things tidy. For example, you could have a project for your blog, a project for around-the-house, a project for work, etc. Each project can also have sections within it, making it easy to keep things organized there. Each project in Planner aggregates its tasks' statuses to create an overall progress, shown next to the list in a donut-style chart.

<figure markdown="1">
![A project in Planner](/images/appcenter-spotlight-planner/project_800.png){: srcset="/images/appcenter-spotlight-planner/project.png 2x" width="1162" height="774"}
<figcaption markdown="1">
Example project list
</figcaption>
</figure>

### Design

What strikes me most about Planner is its thoroughly thought out design, including tons of tiny, delightful animations and impressive details. For example, when you select the Inbox, Today, or Upcoming views, their icons have a cute little wiggle within the colored box. It's tiny and easily missable, but it's the kind of attention to detail that makes an app really stand out. Similarly, delete buttons spin out from the side on hover, the "Add list" options slide up in a card over the sidebar, and extra controls like buttons for expanding a list or editing a section smoothly fade in when needed.

<figure class="card">
    <video width="448" height="384" autoplay="true" loop="true" playsinline="true" muted="true">
        <source src="/videos/appcenter-spotlight-planner/animations.webm" type="video/webm">
        <source src="/videos/appcenter-spotlight-planner/animations.mp4" type="video/mp4">
    </video>
    <figcaption>Look at these cute little animations!</figcaption>
</figure>

All of the little animations feel like they do something to both add to delight and help communicate the spatial model (where things on the screen are coming from or going to when they appear or disappear). And they do so without affecting performance at all.

### Todoist Sync

Perhaps the most important feature to many will be Planner's syncing with the online Todoist service. Todoist works much in the same way as Planner, with Inbox, Today, and Upcoming views, plus projects with subsections. That's not a coincidence: Alain has designed Planner to be a perfect native Todoist app for elementary OS. Syncing with Todoist brings an essential feature to the to-do app: web and mobile device support. Download the Todoist app on your other platform of choice, sign into the same account, and all of your tasks and projects are kept in sync with Planner on elementary OS.

<figure markdown="1">
![A project in Planner](/images/appcenter-spotlight-planner/todoist_800.png){: srcset="/images/appcenter-spotlight-planner/todoist.png 2x" width="939" height="587"}
<figcaption markdown="1">
Cross-device support with Todoist
</figcaption>
</figure>

To me, syncing with multiple devices is table stakes for a project management or to-do app. I don't always have my main computer right in front of me, but that shouldn't stop me from jotting down a to-do or checking something off as done. Planner delivers wonderfully with its Todoist support.

## Future

What's coming in the future from Alain? They provided some teases:

>I have some ideas for Planner 3. I've been thinking about developing a mobile application and stop using Todoist as a synchronization server and develop one of my own. I've also been thinking about developing a native Apple Music client for Linux and a multisystem game emulator similar to OpenEmu.

While these weren't strict promises, I would definitely be interested in an online music app and game emulator! I look forward to seeing what they do next.

## Get Planner

Planner is [available on AppCenter](https://appcenter.elementary.io/{{ page.rdnn }}) today for free. As with all apps on AppCenter, it's open source and [available on Github](https://github.com/alainm23/planner).

{% include appcenter.html %}

While Alain has made Planner available for free, they do have a [PayPal] and [Patreon] to help sustain development. If you're a fan of Planner or Alain's other apps, consider contributing via PayPal or becoming a patron! You can follow Alain on Twitter at [@alainm23], or Planner at [@planner_todo].

## Thanks

Thanks to all of the app developers like Alain, everyone who has bought an app on AppCenter, and to all of our supporters, backers, and customers! Your contributions make elementary possible. If you’d like to help build and improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved).

Alain would like to thank all the people who helped them develop Planner, and everyone who has contributed via PayPal and Patreon.

{% include spotlight.html %}

[PayPal]: https://www.paypal.me/alainm23
[Patreon]: https://www.patreon.com/alainm23
[@alainm23]: https://twitter.com/alainm23
[@planner_todo]: https://twitter.com/planner_todo
