---
title: "AppCenter Spotlight: Minder"
description: Create, develop, and visualize your ideas
author: cassidyjames
date: 2018-09-03T05:12:51.624Z
image: /images/appcenter-spotlight-minder/0cMT1noyI1R7rq5Wz.png
rdnn: com.github.phase1geo.minder
tags:
  - appcenter-spotlight
  - interview
---

{% include appcenter.html %}

<figure markdown="1">
![Minder with map properties, including layouts and themes](/images/appcenter-spotlight-minder/0cMT1noyI1R7rq5Wz.png)
<figcaption markdown="1">
Minder with map properties, including layouts and themes
</figcaption>
</figure>

Sometimes an app comes out of seemingly nowhere to fill a need and impress, and that’s the case this month with Minder by Trevor Williams.

## Meet Trevor

<figure markdown="1">
![Trevor Williams](/images/appcenter-spotlight-minder/1qwZY8DCb_IUyAx8OkgGWgA@2x.png){: width="158.5" height="158.5"}
<figcaption markdown="1">
Trevor Williams
</figcaption>
</figure>

Trevor is a design verification engineer at Hewlett Packard Enterprise. He has an experienced background of engineering and open source: he has a degree in computer science, has been involved in open source for nearly two decades, and has written several apps and libraries.

> My primary hobby and creative outlet is coding which I tend to spend most of my evenings doing. If I’m not coding, I enjoy spending time with my family, woodworking, watching movies/TV/sports. I am also a bit of a computer junkie in that I love reading or watching documentaries on computer history along with screencasts on various computer topics. Most of the content that I read is related to computing news.

All of that background, and yet Minder is his first foray into development for elementary AppCenter, using Gtk, and writing in Vala. How did he get here?

> I have been using elementary OS for several years after listening to the first “Simply elementary” podcast. I have been enjoying using the new apps that are specifically developed for elementary OS within AppCenter for quite some time.

## The Story of Minder

Trevor started using mind mapping to help him understand the scope of adding features to one of his other projects. Since he was using elementary OS, he popped open AppCenter to see what was available for mind mapping software, but wasn’t really thrilled with what he found among the non-curated apps.
> I found their interfaces to be confusing and non-elementary in design. I came up with a vision of what a mind-mapping app would look like following elementary design principles, and I realized that it was both possible and important to do for the elementary community.

<figure markdown="1">
![Minder with an optional dark style](/images/appcenter-spotlight-minder/0uuQ8byHT0PQ7AX4o.png)
<figcaption markdown="1">
Minder with an optional dark style
</figcaption>
</figure>

He started developing Minder to fill that gap and provide a curated mind mapper app for elementary OS. Soon after, he submitted it to AppCenter, and it was approved and released to users.

## Developing for elementary OS

When chatting with Trevor, he told me how he enjoyed the “one true development path” we have for elementary OS: Vala, Gtk, AppCenter, the HIG, etc. Previous projects he’s worked on try to support multiple platforms with one codebase, something he said makes it difficult to develop and maintain.
> Writing an app to target a single development environment had some obvious benefits to me, allowing me to focus more on the app and less on the build environment.

Vala specifically got a lot of love.

> I really enjoy coding in Vala. The language has some terrific capabilities that are missing in languages like C/C++. I like that the language is compiled versus interpreted, making finding syntax errors easier to find and fix — the reported errors are generally quite good.

And of course, [Houston CI](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726) continues to be a hit with app developers.

> I really like the Travis CI integration into the workflow as it helps make sure that code commits haven’t regressed code quality and makes the release process much easier.

All that, along with the elementary Community Slack, development [Gitter channel](https://gitter.im/elementary/houston), and wide availability of other apps’ codebases on GitHub eased the process for him. Trevor also appreciated the ease with which developers can enable pay-what-you-want monetization in AppCenter.

> I have never attempted to make money from any of my projects in the past and was curious to learn about this aspect of development as well. I believe that the elementary team is committed to supporting developers in this and AppCenter makes it extremely easy on the developer to attempt to make money for their efforts while making it easy for the user to reward developer’s for their work if they choose to ask for money.

Lastly, the community of users and fellow developers have left a lasting impression on Trevor an his development experience.

> Minder is the most active community that I have had in terms of bug reporting, translations, feature requests, etc. The fact that people know how to contribute code to elementary projects helps them to become better faster than is possible in other environments.

## Future Plans

With all of that good experience, you might wonder if Trevor is planning on releasing more apps for AppCenter. It turns out, he absolutely is. His first target: outlining.

> There is a close correlation between mind-mapping and outlining. I originally was going to add an outlining feature to Minder; however, having a dedicated outlining application would more closely align to elementary OS’s philosophy of doing one thing and doing it well. I believe that my next application will be an outlining application that will have the ability to share data with Minder.

After that, Trevor plans to take a look at the current ecosystem of apps in AppCenter, see if he can identify any holes in types of apps he’d like to see, and start developing things to fill it in.

## Get Minder

Minder is [available on AppCenter](https://appcenter.elementary.io/com.github.phase1geo.minder) today for the recommended price of **just $5**. Like all AppCenter apps, its source code is openly-licensed and [available on GitHub](https://github.com/phase1geo/minder/).

{% include appcenter.html %}

Get in touch with Trevor and let him know what you think of Minder! You can email him at phase1geo [at] gmail.com or find him on Twitter at [@phase1g_o](https://twitter.com/@phase1g_o). If you’d like to make contributions, report bugs, or make feature requests to Minder be sure [follow the project on GitHub](https://github.com/phase1geo/minder/).

> I would just like to commend the elementary OS team for striving to make both the development and user experience exceptional. I would also like to thank the elementary community for taking an active interest in Minder. Let’s keep making AppCenter the most exciting place to find the best applications for Linux!
>
> — Trevor Williams
