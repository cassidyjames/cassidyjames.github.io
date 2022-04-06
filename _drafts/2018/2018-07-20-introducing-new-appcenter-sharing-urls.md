---
title: Introducing New AppCenter Sharing URLs
description: "Easily share apps to users whether or not they’re on elementary OS"
author: cassidyjames
date: 2018-07-20T19:32:46.360Z
image: /images/introducing-new-appcenter-sharing-urls/1_mzxdebxqeMgyDfAAHn5ug.png
tags:
  - web
  - appcenter
---

Over the past several weeks I’ve been working on a revamped [appcenter.elementary.io](https://appcenter.elementary.io/). Today I’m happy to announce its official debut!

In the past, this site was a simple redirect to an `appstream://` URL so that users on elementary OS had a linkable URL to share apps with one another. For example, [appcenter.elementary.io/com.github.cassidyjames.dippi](https://appcenter.elementary.io/com.github.cassidyjames.dippi/) would take you to the Dippi listing in AppCenter if you were running on elementary OS. If you weren’t, it would throw up a generic “Download elementary OS” message, keeping you wondering what was actually there.

We use these AppCenter URLs in the monthly AppCenter Spotlight series to link users to the store, plus if a user hits the “Share” button in the footer in AppCenter, they’re able to share this URL with several social networks, email, or their clipboard. It’s also what powers those “Get it on AppCenter” buttons you’ve likely seen around the web and in apps’ READMEs on GitHub.

It works fine when everyone is on elementary OS, but I wanted to expand it to be useful to those not on the OS. And with us nearing 100 apps in AppCenter, I wanted to help get the word out about the awesome variety of native apps that people are building specifically for elementary OS.

## How to Use It: Just Copy + Paste!

If you’re running elementary OS, you can use the “Share” button on any curated app’s AppCenter page to send a link. This link now points to a web-based listing of the app, where users of elementary OS can easily open their own native AppCenter to install it, while everyone else can still view the app listing with screenshots, the description, etc. on the web.

<figure markdown="1">
![Preview of a web-based app listing](/images/introducing-new-appcenter-sharing-urls/1-HNF7ahBA3j_TNzgTBkYbA.png)
<figcaption markdown="1">
Preview of a web-based app listing
</figcaption>
</figure>

Anyone can link to or share this URL; if you’re an app developer and want to share your app on social media, this is a *great* way to do that! Or if you’re just an excited user and want to show your friends, family, or followers a cool app, this is how to do it.

## The Homepage

The last piece of this puzzle is the new homepage at [appcenter.elementary.io](https://appcenter.elementary.io). Originally, this wasn’t even planned as part of the new site. But once we had all the data in one place, it made sense to make a little landing page and a count of all of the apps.

<figure markdown="1">
![](/images/introducing-new-appcenter-sharing-urls/1_mzxdebxqeMgyDfAAHn5ug.png)
</figure>

While I don’t plan for this to replicate the entire experience of browsing apps in AppCenter, it’s a handy resource to see what all is available and just how many apps there are.

## How It’s Made: Let’s Get Nerdy

>If you’re uninterested in the technical details and web development, this section is probably super boring. Feel free to skip it! But for those following along, I wanted to tell a bit of the story:

### Going Static

The [old site](https://github.com/elementary/appstream-redirect) was a simple PHP site that performed a dumb translation from a web URL into an `appstream://` URL. This worked since the site didn’t host any content from the apps—it simply translated from one form to another. However, this meant that the website could never display icons, app names, developer names, screenshots, or any other metadata about the apps because it simply didn’t know about them. It also meant it had to be executing code up on a server somewhere, even though the site contents were super simple.

For the new site, I decided that a static site would actually work well and be simpler to develop against—the list of apps is a known quantity and we could figure out how to automatically rebuild the site when it changed. It also meant we could have more flexibility in hosting, including using the built-in GitHub Pages feature. I set out templating up an app landing page that somewhat mimics the native AppCenter app pages for the web, testing with a couple of hand-made Markdown files filling in for real data. Once I got that looking good and working well, I got stuck briefly on how to get *real *app data.

### Generating Data

Luckily, elementary contributor [Levi Voorintholt](https://github.com/gamerlv) was on the case, and had an idea. Since AppCenter is powered by standards like PackageKit and AppStream, it meant we already had a web-accessible repository of all the data we needed — elementary OS downloads a new copy of this data each time it runs updates. While it’s not a JSON API that would be suitable for hitting on each page load, it meant we could regularly rebuild the Markdown files from this source, plug in the rich data like icons and screenshots from our AppStream server, and have a pretty good little web-based AppCenter client.

Levi wrote a ruby script to grab the data and build the files, and we committed it to the repository. At first, I ended up just running this regularly when I thought of it — when I’d publish an app or when I saw stuff coming through the review-side of the AppCenter Dashboard. Obviously this wasn’t ideal, but it got the site up and running.

### Building

Enter [Blake Kostner,](https://medium.com/@btkostner) elementary web engineer and defacto devops expert extraordinaire. With his work on Houston CI, he knew the power of leaning on Travis for CI building and testing. So he helped me set up Travis to do a daily build of the server, including running the Ruby file to grab updated AppStream data and regenerating the apps’ Markdown files.

Once this was all working, it meant we had a fully automated web-based AppStream client that generated rich listings for every app in the store. Dope!

### Opening AppCenter

I set up the last piece: a simpler version of the `appstream://` URL generation. The old version attempted to throw this redirect automatically based on user agent, but it turns out confidently detecting elementary OS (or any specific build of a Linux-based OS) is pretty hard. Instead, we can do a minimal amount of guessing about your OS (Is it Linux? Is it not Android? Then you might be on elementary OS.), and only show the dialog then. If you’re on macOS, some other known Linux distro, Windows, an iPhone, etc. you’ll just see the app listing with a button to get elementary OS. If you might be on elementary OS, you see this dialog instead of an automatic redirect:

<figure markdown="1">
![The new “Open in AppCenter” dialog](/images/introducing-new-appcenter-sharing-urls/18rtpg7U9KEAFD5YDMjUoRw.png)
<figcaption markdown="1">
The new “Open in AppCenter” dialog
</figcaption>
</figure>

Here you can hit the big blue button to pop open AppCenter to this app’s page on your machine, but you still get a “Preview App Listing” option in case you just want to see the web page. Plus I added a “Not on elementary OS” button that saves a boolean in HTML local storage so you never get prompted to open AppCenter again. I think this is a pretty balanced solution that deals with the constraints in as clean of a way as we can.

### Contributing

Want to make the site even better? Like everything we do at elementary, it’s open source and open to collaboration [on GitHub](https://github.com/elementary/appcenter-web). File an issue, submit a PR, or fork it and build your own thing!
