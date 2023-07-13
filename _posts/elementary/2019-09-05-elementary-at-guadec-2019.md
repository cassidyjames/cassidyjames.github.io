---
title: elementary at GUADEC 2019
description: Hanging out with GNOME in Thessaloniki, Greece
author: cassidyjames
legacy: elementary
updated: 2019-09-05
image: /images/blog/elementary/elementary-at-guadec-2019/welcome-banner_1600.jpg
tags:
  - event
  - flatpak
  - gnome
  - gtk
  - guadec
thanks: true

facebook: https://www.facebook.com/elementaryos/posts/2685264938171985
mastodon: https://mastodon.social/@elementary/102747110984529020
reddit: https://www.reddit.com/r/elementaryos/comments/d0jfbr/elementary_at_guadec_2019_elementary_blog/
twitter: https://twitter.com/elementary/status/1170049282575097856

permalink: /blog/elementary/elementary-at-guadec-2019/
redirect_from: 
  - /blog/elementary-at-guadec-2019/
---

<figure markdown="1">
![Welcome Banner](/images/blog/elementary/elementary-at-guadec-2019/welcome-banner_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/welcome-banner_1600.jpg 2x"}
<figcaption>Cassidy and fellow GUADEC attendees arriving at the Thessaloniki airport</figcaption>
</figure>

GUADEC is the annual **G**NOME **U**ser **A**nd **D**eveloper ~~**E**uropean~~* **C**onference where contributors to GNOME and its downstreams get together for a week of sharing their work from the past year, planning the future of their individual components, and catching up with one another. The conference is organized into two main halves: three days of talks, and three days of BoFs (with the last BoF day being more of a social day).

elementary [attended for the first time](https://blog.elementary.io/things-we-learned-at-guadec-2018) in Almería, Spain last year and had such a productive (and fun!) time that we made sure to be back again for 2019. This year Corentin Noël and I represented elementary, while Danielle took some time off to [celebrate her one-year anniversary](https://twitter.com/DanielFore/status/1163831738532941824) (congrats, Dani!).

Just like last year, due to the nature of GUADEC, this post might get a bit technical and is mostly future-looking. For even more reports from a diverse group of GNOME contributors, check out the [Planet GNOME blog aggregator](https://planet.gnome.org/). That aside, let’s dive in.

_* No longer restricted to Europe! In fact, a bid is being submitted to host GUADEC 2020 in Mexico. I guess we can retcon the E to stand for "Everywhere."_

---

<figure class="full-bleed" markdown="1">
![Allan's talk](/images/blog/elementary/elementary-at-guadec-2019/allan-talk_2560.jpg)
<figcaption>Allan’s talk</figcaption>
</figure>

## Talks

We attended a _lot_ of talks this year. We've linked to the recordings below as well, since they uploaded all of them already (which is _awesome_).

### Desktop Secrets Management for the Future

Red Hat and GNOME engineer Daiki Ueno shared future improvements to the "secrets" API that manages things like passwords and encryption keys in GNOME, elementary OS, and other desktops.

{% include youtube.html id="gqLtDjLXE1g" %}

He focused specifically on the implications of sandboxing with Flatpak, and how a new version of the API could be designed for this more secure future. Much of the content was above my level of knowledge, but it was encouraging to see some of the remaining questions around Flatpak being actively worked on, and this is work that will benefit elementary OS in the future.

### Managing GNOME Sessions with systemd

Red Hat engineer Benjamin Berg and Canonical engineer Iain Lane shared their work with moving much of the session management out of GNOME Session and into systemd.

{% include youtube.html id="pdwi3NWAW7I" %}

This is an area we've begun exploring in elementary OS, but it was good to hear about their experiences, some cool side-effects, and issues they had to overcome. This is ongoing work, and we'll be following it to see how it applies to elementary OS in the future as well.

### GNHOME AUTTOMQATION

No, my cat didn't walk across the keyboard while I was writing the name of this talk; Nathan Willis presented his thoughts around how the GNOME desktop could better support modern home automation (and "smart home") user flows.

{% include youtube.html id="30TbgJ0ebEY" %}

I _think_ the title is a pun based on "GNOME" and the names of some of the popular open source home automation tools in wide use today. It was an interesting talk that got my gears turning with regards to how the smartest devices in our homes (our computers) are sometimes the least integrated.

### Portals: Principles and Practice

Portals are how sandboxed apps communicate with one another or request specific access to things they wouldn't normally get, like user files, location services, screen sharing, etc. In this talk, Red Hat manager and GTK developer Matthias Clasen shared a deep dive into Flatpak Portals, their architecture, the user experience, and what he's learned in the past year since Flatpak 1.0. He also collected suggestions for Portals that don't yet exist.

{% include youtube.html id="bIzJyp8sb70" %}

We've been [moving toward Portals](https://blog.elementary.io/a-new-native-file-chooser) in elementary OS in preparation for [using Flatpak](https://blog.elementary.io/elementary-appcenter-flatpak), and it was good to see the wide variety of portals that exist and the design considerations behind them. One portal we suggested based on our work toward [a cross-desktop settings API](https://blog.elementary.io/making-system-settings-access-a-cross-desktop-feature) was a “Connect to Network” portal; rather than a “System Settings” portal that would need to handle every possible setting an OS might have, we came to the conclusion that individual portals for specific actions would be more flexible. A new network connection portal could be used in elementary OS to prompt a user to get connected when browsing AppCenter, for example, where an Internet connection is needed to install apps. It could also be used in apps designed for any desktop environment, like a web browser, torrent client, chat app, etc.

### Wineglass: How to Make Wine Accessible

elementary OS user and app developer Alex Angelou gave this unconference talk (unplanned and decided day-of) about his app [Wineglass](https://appcenter.elementary.io/com.github.aggalex.wineglass/).

{% include youtube.html id="tzqTYvFF7T0" %}

It was a brief introduction to Wine prefixes (used to sort of sandbox Wine apps from one another), and how Wineglass works to make it faster and simpler to use Wine. It was fun seeing elementary OS up on the big screen at a GNOME conference, and his app was generally well received. During the Q&A session there were also some great discussions and suggestions, with issues being filed before we left the room.

### GNU Health: The Fight for our Rights in the Public Health System

This was the first "keynote" talk, presented by Founder & President of GNU Solidario.

{% include youtube.html id="dTZI0dcBagg" %}

It focused on the unique challenges of the global healthcare system, and how GNU Health tries to address them. Over all it was an interesting case study in open source software entering and taking hold in a market dominated by proprietary solutions.

### Packing Up Boxes

Not about Flatpak, and not about GNOME Boxes. 😉️ GNOME Foundation engineer and core GTK developer Emmanuele Bassi shared how to use constraint-based layouts to build user interfaces in GTK4.

{% include youtube.html id="yn8IMnN7crA" %}

This is something app developers have been asking for for a while, so it's exciting to see it come to GTK. I'm super interested in playing with this in my own apps and in the elementary apps once the GTK4 porting work begins.

### Simple is Hard: Creating Beautiful App Icons

Red Hat and GNOME visual designer Jakub Steiner presented the new GNOME icon style and a quick demo of creating a new icon using the new Icon Preview app and Inkscape.

{% include youtube.html id="-iUffJk2vNI" %}

Jakub is always fun to chat with, and his goofy personality shines through in this talk. Even if you're not interested in designing GNOME icons (since elementary OS uses a different icon style), this talk is entertaining to watch.

### GNOME UX: Strategies & Tactics

Red Hat and GNOME UX designer Allan Day shared a lot of the design work that is going into GNOME as well as his vision for the future of GNOME.

{% include youtube.html id="j6ey5B4KdpY" %}

This talk was _so good_ and really shows the product management role that Allan and the design team serve within GNOME. I feel like this has always been the case to some extent, but is more prominent more recently. This also echoes how elementary is really a design-led organization, and many of the "tactics" he shares to improve GNOME can apply to elementary as well.

<figure markdown="1">
![Allan Day](/images/blog/elementary/elementary-at-guadec-2019/allan_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/allan_1600.jpg 2x"}
<figcaption markdown="1">
Allan Day | _Photo by [Richard Brown](https://www.flickr.com/photos/183829480@N06/48623731202/in/pool-14662216@N23/), [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/)_
</figcaption>
</figure>

Specifically, the bits about developer and designer synchronicity, designer-developers, and development-conscious design are areas that we champion within elementary; much of the work Daniel and I have done lately has centered around prototyping and developing directly in Vala and GTK, which means we're far less likely to design something that is impractical from a technical level. It also means we're able to jump into a codebase and improve the UI directly: we don't have to make a mockup and wait for a "real developer" to come along and pick up the work. This has been a _massive_ improvement to the process within elementary.

Something that has enabled that is that we do have a single preferred language and code style, which means we don't have to be fluent in C, Rust, Vala, JavaScript, Python, etc. Once we have solved a problem in one app, it's pretty generalizable across all elementary apps. Of course we still lean heavily on experienced developers, but we're able to do a lot more as designers than ever before.

### Maintaining a Flatpak Repository

Red Hat, GNOME, and Flatpak developer Alexander Larsson shared how Flatpak remotes work and how to host one yourself.

{% include youtube.html id="q-_fKWby0ds" %}

He gets pretty technical into how Flatpak works on the server side with details on OSTree (like git for your filesystem), how diff-based updates work, etc. Overall it was a great talk and is super relevant to elementary since we'll be hosting our own Flatpak remote for AppCenter. If you're interested in helping elementary move to the Flatpak future, I highly recommend you watch it!

### GNOME Foundation Annual General Meeting

Part of GUADEC is the GNOME Foundation's annual meeting where they go over the last year and share projections for the next year. GNOME Foundation members also get to vote on relevant topics, such as changing the term lengths of board members, and changing wording in the bylaws.

{% include youtube.html id="8OndpWb7xuI" %}

It was also an opportunity for an in-person question-and-answer session with the GNOME Foundation board.

{% include youtube.html id="6XGXnQyWfwY" %}

### The Need for a FreeDesktop Dark Style Preference

This was my talk! If you've read [my blog post]({% post_url elementary/2019-05-17-the-need-for-a-freedesktop-dark-style-preference %}) on the topic, it's mostly review. But it was well-received and as a result, GNOME and GTK are moving forward to support a system-wide dark style preference.

{% include youtube.html id="gi_3b81eBUE" %}

### Is the Linux Desktop Really Dead?

Endless Chief of Engineering and GNOME Foundation board member Robert McQueen shared some of the history of Endless, their shifting strategy over time, and his vision of how GNOME can remain successful in the current computing landscape.

{% include youtube.html id="JIqDOHwJnyY" %}

It's also sort of a "Business 101" and "disruption" talk condensed into a few minutes, which was very interesting. The end result from the Endless side is that Endless is planning to help GNOME teach kids to code. While that exact goal isn't something we're explicitly reaching for at elementary, the implications of that effort—making GNOME and related technologies more user-friendly and attractive—are very relevant to us.

### Accessibility Features for Mutter/GNOME Shell on Wayland

Red Hat and GNOME software engineer Oliver Fourdan presented ongoing work within Mutter and Wayland to enable the same level of accessibility support as X11.

{% include youtube.html id="391yy2yZGGs" %}

While elementary OS doesn't use GNOME Shell (which was demoed in this talk), we should be able to use the same Mutter features within Gala and elementary OS to ensure we don't regress in accessibility when we inevitably move to Wayland.

### Designing GNOME Mobile Apps

Purism and GNOME designer Tobias Bernard shared much of the ongoing work to port GNOME apps to mobile devices like the upcoming Librem 5.

{% include youtube.html id="olTQnKUSTso" %}

elementary has no plans to develop a mobile version of the OS, but some of the design patterns and especially the widgets in LibHandy are of great interest; better touch support and better layouts for small and large window sizes are always welcome. As a result of this talk (and playing with LibHandy afterwards), we've filed several issues for including LibHandy in elementary OS and using it within the desktop and apps.

### Usability Testing

Software engineer and Outreachy intern Clarissa Lima Borges presented her work on usability testing in GNOME.

{% include youtube.html id="YCYxjY80skU" %}

It was a great intro to usability itself, and usability testing specifically. One interesting take-away is that there are diminishing returns when performing usability studies; after about five user tests, your users are less likely to find new usability issues. Instead of performing dozens of usability tests to start, it's often better to test with a handful of users, iterate on the product, and then test again.

You can find more information and Clarissa's usability test results at [her website](https://lborgesclarissa.wordpress.com/).

### Product Metrics & Respecting Privacy

Robert McQueen presented—this time in the unplanned unconference style—about how an open desktop could implement privacy-respecting metrics.

{% include youtube.html id="MHVwjHzDkvc" %}

He started with the current state of metrics in Endless OS, and then shifted to how something better could be designed and implemented in GNOME and other open source desktops. It's an area I've thought about a lot; in fact, last year at the [Libre Application Summit]({% post_url elementary/2018-09-12-were-back-from-libre-application-summit-2018 %}), I sat down with folks from Purism and elementary and chatted about a theoretical privacy-respecting analytics system, why it's sought after, the risks, and how we would have to go about implementing it. It sounds like Robert has been chewing on the same idea, so we sat down afterwards and chatted about it some more.

<figure markdown="1">
![Robert McQueen](/images/blog/elementary/elementary-at-guadec-2019/robert_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/robert_1600.jpg 2x"}
<figcaption markdown="1">
Robert McQueen | _Photo by [Richard Brown](https://www.flickr.com/photos/183829480@N06/48623585931/in/pool-14662216@N23/), [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/)_
</figcaption>
</figure>

We still believe the best way to protect user data at elementary is to [not collect it in the first place]({% post_url elementary/2019-01-09-privacy-and-elementary-os %}). However, if app developers are going to be seeking ways to track how their apps are being used (for well-intentioned purposes like knowing where to spend development), they're going to seek out less-privacy-respecting solutions. If a privacy-respecting solution existed from the start, it could actually actively protect user data while also providing value to app and platform developers. This is all theoretical right now, but it's a thread that I'm interested in keeping up on, and I'll remain in contact with Robert, other folks from Endless, and folks from companies like Purism and System76 who might share the same goals as us.

### Lightning Talks

Lightning talks are fast-paced and unplanned talks that are decided day-of and given a strict, short time limit.

{% include youtube.html id="gIkValRbhlc" %}

The highlights for me were Alexander Larsson's GThree (a 3D rendering library for GTK) and Richard Brown's How to Survive a Speaker Having a Heart Attack on Stage.

### Free Software/Utopia

The closing keynote presented by Deb Nicholson, Director of Community Operations at the Free Software Conservancy.

{% include youtube.html id="uue5vXzk-Xs" %}

---

<figure class="full-bleed" markdown="1">
![GTK BoF](/images/blog/elementary/elementary-at-guadec-2019/gtk-bof-wide_2560.jpg)
<figcaption>GTK BoF</figcaption>
</figure>

## BoFs

BoFs, or "Birds of a Feather" sessions, are meetups that happen across the venue with people who are working on or with certain technologies—or just interested in a common topic. For example, the GTK BoF was organized by core GTK contributors, but attended by GTK developers, folks writing GTK apps, GTK stylesheet authors, etc.

### GTK

Speaking of the GTK BoF, this was the big all-day one that took most of our time on the first day. Matthias directed the discussion and opened the floor for GLib wishlist items (like an OS info API), the status of GTK4, and even the Dark Style implementation.

A lot of time was spent discussing GTK4—primarily if there were any more "headlining" features we wanted to try to get into the release to help encourage app developers to port as soon as possible. We mostly agreed that the performance improvements were a large reason to port, and didn't come up with any single "big new feature" that should be added at this point. LibDazzle and Purism's LibHandy also demonstrate that you can still do a lot more with GTK3 than most apps do, so even getting much of those widgets upstreamed into GTK4 would not be compelling features in themselves.

<figure markdown="1">
![GTK BoF](/images/blog/elementary/elementary-at-guadec-2019/gtk-bof_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/gtk-bof_1600.jpg 2x"}
<figcaption>GTK BoF</figcaption>
</figure>

We also talked about what is going to hold a lot of apps back from GTK4 to start: WebKitGtk. There is not currently a GTK4 port, meaning any app needing a web view will need to stay on GTK3 until that work is started and finished. That's a huge void that will take a lot of time and effort to accomplish, and as far as we know, nobody has taken it on yet.

Matthias has a great [dedicated blog post](https://blog.gtk.org/2019/08/29/gtk-bof-at-guadec/) on this BoF as well.

### Vendor Styles

I attended this BoF on the second day. Organized and moderated by Neil McGovern, Executive Director of the GNOME Foundation. It was all about moving forward with the sometimes at-conflict goals of GNOME apps looking as good as they can and downstream vendors (like Ubuntu or Pop!_OS) wanting to express their unique branding and styling. Rather than just sit in two separate camps, the idea was to talk it out and decide where we actually aligned, and how we could move forward to improve GNOME.

Over all, it went exceedingly well in my eyes. We came to a conclusion that GNOME _could_ support some amount of styling if it were well-defined and well documented—right now, the only real "documentation" is Adwaita's behavior itself. This definition and documentation work would also directly benefit apps as well, as they could use the documented styles to do more interesting custom styles that would be supported in Adwaita as well as any "compatible" stylesheets. This is actually pretty similar to elementary OS, where we have publicly-exported variables, the color palette, and Granite style classes for apps to do custom styling.

We agreed that there are really three areas when it comes to custom styling:

1. **"Supported"** styles (currently nothing, but hopefully soon a handful of public variables, color palette, colored headerbars, etc.),
2. **"Upstreamable"** styles (i.e. stylistic changes or something that a vendor or app wants to be supported but currently is not), and
3. **"Here be dragons"** which is everything else that's explicitly unsupported.

But at least agreeing on the three areas, it means GNOME can work to increase the supported styling and downstreams can work on upstreaming, ultimately reducing the "dragons" area.

Interestingly, Yaru (the Ubuntu GTK stylesheet) is already based on Adwaita (the GNOME GTK stylesheet), using a build-time variable system that the Yaru developers put together. They even demoed a Pop!\_OS inspired set of variables that does express much of the same branding as the official Pop!\_OS stylesheet without much work. Some of this work may get upstreamed into Adwaita itself, and I've been sharing our experiences with publicly-exported variables in elementary OS to enable our unique features like per-app accent colors and branded headerbars.

I'm currently [helping lead this effort within GNOME](https://discourse.gnome.org/t/gtk-adwaita-and-vendor-styles/1641), and as this work continues, we'll try to share and upstream as much of our work from elementary OS as possible. Tobias also has a good write-up of this BoF in [his blog post](https://blogs.gnome.org/tbernard/2019/09/05/guadec-2019/) if you'd like a bit more detail.

### Flatpak Donations/Store

Unfortunately I was unable to attend this BoF since the Vendor Styles BoF ended up taking the whole day. However, I chatted with Robert McQueen beforehand about how AppCenter works, and he debriefed me afterwards and shared some ongoing work within Flatpak to enable payments. It sounds like they are headed in the right direction, and I expect the work here to simplify some of our Flatpak work around payments.

## Social

As always, the social events were almost as important as the talks and BoFs; they provide a time and space to get to know folks, have fun, and chat about things—GNOME-related and otherwise—that don't have an official time and place in the schedule.

### Food & Exploration

While not explicit planned social events, a lot of time was spent walking around Thessaloniki, trying out different breakfast, coffee, and dinner spots.

<figure class="third" markdown="1">
![Designers walking](/images/blog/elementary/elementary-at-guadec-2019/designers-walking_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/designers-walking_1600.jpg 2x"}
![A street in Thessaloniki](/images/blog/elementary/elementary-at-guadec-2019/thessaloniki-street_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/thessaloniki-street_1600.jpg 2x"}
![Walking to the White Tower at sunset](/images/blog/elementary/elementary-at-guadec-2019/walking-white-tower-sunset_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/walking-white-tower-sunset_1600.jpg 2x"}
<figcaption>Walking around Thessaloniki</figcaption>
</figure>

<figure class="half" markdown="1">
![Sad Breakfast](/images/blog/elementary/elementary-at-guadec-2019/breakfast-1_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/breakfast-1_1600.jpg 2x"}
![Good Breakfast](/images/blog/elementary/elementary-at-guadec-2019/breakfast-2_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/breakfast-2_1600.jpg 2x"}
<figcaption markdown="1">
**Left:** Rushed (but still delicious) first-day breakfast | **Right:** Second-day breakfast once we knew a good spot
</figcaption>
</figure>

As far as coffee goes, I was a _huge_ fan of freddo cappuccino; basically an iced coffee topped with delicious, frothy cold milk.

### Picnic

An official social event one evening was a "picnic" farther inland at Platanakia Natura in Panorama, Greece. We took two big buses out, almost got the bus stuck on a tiny dirt road, and ended up hanging out near the forest enjoying local food and drinks.

<figure class="half" markdown="1">
![Picnic 2](/images/blog/elementary/elementary-at-guadec-2019/picnic-2_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/picnic-2_1600.jpg 2x"}
![Picnic 1](/images/blog/elementary/elementary-at-guadec-2019/picnic-1_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/picnic-1_1600.jpg 2x"}
<figcaption>Socializing at the picnic</figcaption>
</figure>

This was a great time to mingle and cross-polinate ideas. I know I personally ended up talking with folks who wanted to use AppCenter in another distro, long-time users of elementary OS, people who wanted to discuss the idea of privacy-respecting metrics, and more.

### Beers

Several of my GNOME friends are fans of beer. Naturally, we visited several local pubs and bars to try out the local beers. It turns out, there are local Greek and even Thessalonian beers that are very good!

<figure class="half" markdown="1">
![Sknipa](/images/blog/elementary/elementary-at-guadec-2019/sknipa_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/sknipa_1600.jpg 2x"}
![Imperial Stout](/images/blog/elementary/elementary-at-guadec-2019/imperial-stout_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/imperial-stout_1600.jpg 2x"}
<figcaption>Two local beers I enjoyed</figcaption>
</figure>

One evening Neil McGovern, Robert McQueen, Matthias Clasen, David King, Ian Santopietro, and I headed out to find local beers. The first place we headed to was inexplicably closed (their hours said they should be open!), but we eventually found a few places to try the local brew.

<figure class="half" markdown="1">
![Closed Bar](/images/blog/elementary/elementary-at-guadec-2019/closed-bar_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/closed-bar_1600.jpg 2x"}
![Drinks](/images/blog/elementary/elementary-at-guadec-2019/drinks_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/drinks_1600.jpg 2x"}
<figcaption></figcaption>
</figure>

### Beach BoF

On the last day, I attended the "Beach BoF," a day trip to the beach about a half hour drive away from Thessaloniki. Unfortunately I didn't get many photos, as I left my phone packed away, safe from the sand and sea.

<figure markdown="1">
![Cassidy](/images/blog/elementary/elementary-at-guadec-2019/cassidy_400.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/cassidy_800.jpg 2x"}
</figure>

We did get to lounge on the beach in the sun, swim, and hang out on the sandbar several meters into the sea. We also walked a couple of kilometers along the beach to a shipwreck, and some even swam out to check it out. I did learn a hard lesson: don't fall asleep for a few hours in the sun when you're as pale as I am; you'll end up completely fried and bright red. Whoops.

## Other Work

With so much collaboration, sharing of ideas, and knowledgable people in one place, other work happening at GUADEC is an inevitability. Consequently, two interesting pieces of work were started this week:

First, I started a _very_ early [proof of concept GNOME shim](https://github.com/cassidyjames/settings-shim) for our [settings schema spec](https://blog.elementary.io/making-system-settings-access-a-cross-desktop-feature). The idea being that GNOME-based OSes like Pop!\_OS might want to use some components originally designed for elementary OS, but not Switchboard itself. In the past we've proposed the settings schema to GNOME Control Center, but they turned it down for not being flexible enough (and because _ideally_ it would be handled by portals that don't yet exist). So, as a stopgap, the shim translates settings URL calls to GNOME Control Center calls. It's not the most ideal, but it is no more fragile than hardcoding GNOME Control Center calls into apps themselves, plus it keeps that ugliness and fragility centralized into one tiny component instead of spread across many apps.

Perhaps more exciting is Corentin's work on an [elementary Flatpak SDK](https://github.com/elementary/flatpak-platform). Based on the GNOME SDK (which is in turn based on the FreeDesktop SDK), this will allow us to build Flatpak apps on the same base as elementary OS itself, with all of the benefits of Flatpak. Eventually, this is what we see core elementary apps as well as AppCenter apps being built on.

## Thank You

I'd like to give a **huge** thank you to the [GNOME Foundation](https://www.gnome.org/foundation/) for sponsoring my travel and lodging! I had an amazing time connecting and working with folks throughout the GNOME community—especially Allan Day, Clarissa Borges, Niel McGovern, Robert McQueen, Tobias Bernard, Adrien Plazas, Julian Sparber, Matthias Clasen, Britt Yazel, Alex Angelou, Cosimo Cecchi, Ian Santopietro, Benjamin Berg, and probably dozens of others I've missed.

<figure markdown="1">
![Sponsored by GNOME Foundation](/images/blog/elementary/elementary-at-guadec-2019/sponsored.png)
</figure>

As a member of the GNOME Foundation, I see my attending GNOME events as multi-purpose: First, I help represent elementary and ensure future GNOME-stack developments are generally compatible with our vision. Equally, I strive to bring my experiences, knowledge, and data collected from working on elementary OS to GNOME to help make GNOME itself better. Lastly, I learn more about the technologies we're using in elementary OS so we can go and build cool things with them. The fact that the GNOME Foundation sees so much value in this is validating, and I encourage anyone who works on GNOME or GNOME-related downstreams to [apply for Foundation membership](https://www.gnome.org/foundation/membership/)!

<figure markdown="1">
![White Tower](/images/blog/elementary/elementary-at-guadec-2019/white-tower_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/white-tower_1600.jpg 2x"}
<figcaption>The White Tower</figcaption>
</figure>

We'd also like to thank the sponsors [Private Internet Access](https://www.privateinternetaccess.com), [Red Hat](https://www.redhat.com), [Endless](https://endlessos.com), [Ubuntu](https://ubuntu.com), [openSUSE](https://www.opensuse.org), [Codethink](https://www.codethink.co.uk), [Igalia](https://www.igalia.com), and [Arm](https://www.arm.com) for helping to make GUADEC happen.

<figure markdown="1">
![Sunset](/images/blog/elementary/elementary-at-guadec-2019/sunset_800.jpg){: srcset="/images/blog/elementary/elementary-at-guadec-2019/sunset_1600.jpg 2x"}
<figcaption>Sunset over the Aegean Sea</figcaption>
</figure>

And of course, a huge thanks to everyone who’s bought an app on [AppCenter], our supporters on [Bountysource] and [Patreon], and those who’ve purchased a copy of [elementary OS] or merch from [our store]. Each contribution helps make what we do possible. If you’d like to help improve elementary OS, don’t hesitate to [get involved].

[AppCenter]: https://appcenter.elementary.io
[Bountysource]: https://salt.bountysource.com/teams/elementary
[Patreon]: https://www.patreon.com/elementary
[elementary OS]: https://elementary.io/
[our store]: https://elementary.io/store/
[get involved]: https://elementary.io/get-involved

---

_Unless otherwise noted, all photos in this post were taken by Cassidy and are released to the public domain._

