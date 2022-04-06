---
title: So You Wanna Publish on AppCenter
description: 'Helpful tips, common pitfalls, and frequently asked questions'
date: '2017-06-26T16:49:41.423Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/640/1*Er3Sv7msnJQLk0gdDy0zWg.png
tags:
  - appcenter
  - devs
  - evergreen
---

It’s official: there’s been over 20 apps published through [AppCenter Dashboard](https://developer.elementary.io/) with more in development and on the way. Developers are excited that there is finally a fast and simple way to ship great, native, Open Source apps and earn an income while doing it. If you have an idea, now is the time to get it out there. But where do you begin? What should you look out for? And are there any little secrets you should know? Read on to find out!

<figure class="card" markdown="1">
![AppCenter by elementary](https://cdn-images-1.medium.com/max/640/1*Er3Sv7msnJQLk0gdDy0zWg.png)
</figure>

## Getting Started

If you’ve never written an app on elementary OS before, that’s okay! We have a great getting started guide [on our website](https://elementary.io/docs/code/getting-started#getting-started). Need a little help learning Vala? Say no more, because [Valadoc.org](https://valadoc.org/) has several guides and videos including this great one from Egee:

Feel like your design chops need polishing? Check out our [Human Interface Guidelines](https://elementary.io/docs/human-interface-guidelines#human-interface-guidelines) for an intro to UX design and things to keep in mind when designing your UI. And of course, all of our apps are completely Open Source on GitHub, so you can always [poke through our source code](https://github.com/elementary) if you’re looking for code samples.

## Common Pitfalls & Pro Tips

Once you have an app and are ready to publish, check out the [AppCenter Dashboard Wiki](https://github.com/elementary/houston/wiki/Before-You-Publish). There’s a neat list of things you should double check before you hit the publish button, but here are a few more things to keep in mind:

AppCenter Dashboard enforces the Reverse Domain Name Notation (RDNN) for packages to avoid naming collisions. For most packages that’s going to look something like `com.github.user.appname`. To keep things simple for you and to make sure your app passes testing, we recommend using that RDNN all throughout your app. Use it as your app ID when you send notifications. Use it as your binary name. Use it to namespace gsettings keys. Stay consistent, save yourself some headache, and learn to love your RDNN!

The first thing that people will see when they go to discover your app is your [banner colors](https://elementary.io/docs/code/getting-started#appdata). Try to stand out with a unique and creative color combination (hint: blue is not a creative color) and ship an icon and isn’t based on a square.

<figure markdown="1">
![Sample banner](https://cdn-images-1.medium.com/max/1600/1*iqNQTRGSh_9uvCOlHUbyJQ.png)
<figcaption>Try something other than blue and describe what people do (or don’t do) when they have your app</figcaption>
</figure>

Avoid overly common descriptions like “simple”, “easy-to-use”, etc. Focus on what your app enables people to achieve. Describe what you knew while building your app that your competitors don’t.

Your screenshot needs to use elementary OS default settings (including window control position), have a transparent background, and should feature your app, not your whole desktop. You can easily take a transparent screenshot using the built in screenshot tool and the “Grab the current window” screenshot mode.

<figure class="half" markdown="1">
![Screenshot with desktop](https://cdn-images-1.medium.com/max/1600/1*Bw85anni4oeZS9FCc_Fpug.png)
![Screenshot without desktop](https://cdn-images-1.medium.com/max/1600/1*FE6-Iqcc17Y-zwHHPiOcBQ.png)
<figcaption markdown="1">
**Left:** Don’t do this. | **Right:** Do this.
</figcaption>
</figure>

Don’t forget that you can have multiple categories in your .desktop file and there is an expansive list of [additional recognized categories](https://standards.freedesktop.org/menu-spec/latest/apas02.html). Having a complete set of categories and keywords will help people find your app when browsing or searching.

If you’ve chosen to monetize your app, don’t forget about the [suggested price key](https://elementary.io/docs/code/getting-started#appdata)! AppCenter will automatically default to $1, but you can be bold and suggest any price you’d like. This is your chance to tell the world what you think your app is worth. See what similar apps retail for in other stores and confidently suggest the same.

Lastly, don’t write “for elementary OS” in your app description! If you’re publishing on AppCenter Dashboard, everyone already knows that your app was written for elementary OS.

## Other FAQ

We frequently get asked if developers can publish apps written in languages other than Vala or with a build system other than CMake. The answers is “yes”! All of our documentation is built around the “[one true development path]({{ site.baseurl }}{% post_url 2014/2014-05-12-why-we-write-elementary-apps-in-vala %})” that elementary follows, but as long as your app is a native Gtk3 app with [Debian packaging](https://elementary.io/docs/code/getting-started#packaging), it should be publishable. Several apps published in AppCenter are already using the Meson build system, for example.

Another question we get asked is if developers can publish things that aren’t apps like extensions or libraries. In this case, the answer is “not yet”. We have plenty of new features planned for our automated testing system in the future that will allow for publishing different types of packages, but at the moment you can only publish apps in AppCenter Dashboard.

If you get stuck, need help, or have any other questions about publishing in AppCenter, feel free to [join us on Gitter](https://gitter.im/elementary/houston).

