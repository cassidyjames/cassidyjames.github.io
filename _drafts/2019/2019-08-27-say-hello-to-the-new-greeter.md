---
title: Say Hello to the New Greeter
description: Our redesigned login and lock screen
author: danrabbit
image: /images/say-hello-to-the-new-greeter/screenshot_1600.jpg
tags:
  - design
  - first-run
  - juno

facebook: https://www.facebook.com/elementaryos/posts/2667493236615822
mastodon: https://mastodon.social/@elementary/102696294042635761
reddit: https://www.reddit.com/r/elementaryos/comments/cwmqrh/say_hello_to_the_new_greeter_elementary_blog/
twitter: https://twitter.com/elementary/status/1166796690029809664
---

After nearly two years of design, development, and testing, I'm very excited to talk to you about a huge change to the user experience in elementary OS: our new Greeter.

<figure markdown="1">
![Greeter screenshot]({{ site.baseurl }}/images/say-hello-to-the-new-greeter/screenshot_800.jpg){: srcset="{{ site.baseurl }}/images/say-hello-to-the-new-greeter/screenshot_1600.jpg 2x"}
<figcaption markdown="1">
A screenshot of the new Greeter
</figcaption>
</figure>

We've been working hard to bring you a new Greeter that's made with your concerns in mind. With the new design, we've closed 43 [reported issues](https://github.com/elementary/greeter/milestone/2?closed=1) in GitHub. This means fixes to things like keyboard focus issues, brightness keys now work as expected, and the clock will show 24 hour or AM/PM formats on a per-user basis. The new design should work better on multi-display setups as well, including docked laptop setups.

You can update and start using the new Greeter today! Just pop open AppCenter and hit that "Update All" button. Enjoy!

---

_That’s it for user-facing information! If you’d like to hear more about the design and development process of the Greeter, read on._

---

## Design Process

There was a laundry list of motivations for rethinking the greeter and we approached the design from several angles. First, we had technical motivations. GTK has improved greatly over the last few years and Clutter has become abandoned. The old code base was a bit of a mess and made it difficult to fix issues or add new features. Clutter made it difficult to address issues that were trivial to solve in GTK, like making sure the clock doesn't overlap with the username and password. We also wanted to make sure that the new design ensured high contrast between text on the screen and the background; The old design didn't work well in situations where a user wanted to have a particularly bright wallpaper. Localization was a concern as well: users frequently told us they wanted to be able to select their own indiviual clock format. We also had loads of reported usability issues like the Guest session not being obviously differentiated from normal users, no indication of Num or Caps Lock, cursor focus issues, multi-display issues, HiDPI issues, difficulty with identifying users who didn't set an avatar, and more.

As far back as November of 2017, Cassidy attended the [GNOME Shell UX hackfest](https://blog.system76.com/post/167747412318/gnome-ux-hackfest-2017) in London where it turns out GNOME (and related parties) were struggling with a lot of the same design issues. It was here that Tobias Bernard proposed the idea of showing users' wallpapers behind their avatars in a horizontal card layout.

<figure markdown="1">
![GNOME mockups]({{ site.baseurl }}/images/say-hello-to-the-new-greeter/gnome-mockup_800.jpg){: srcset="{{ site.baseurl }}/images/say-hello-to-the-new-greeter/gnome-mockup.jpg 2x"}
<figcaption markdown="1">
Tobias' original concept
</figcaption>
</figure>

You can see that this design also includes distinguishing the Guest session and manual username entry from regular users by placing separate buttons at the bottom of the display. These designs and ideas took a bit of a backburner until May of 2018 when Harvey Cabaguio revisited a few of these concepts in a new set of mockups and in a more elementary style.

<figure class="half" markdown="1">
![Harvey's mockups]({{ site.baseurl }}/images/say-hello-to-the-new-greeter/harvey-login-mockup_800.jpg){: srcset="{{ site.baseurl }}/images/say-hello-to-the-new-greeter/harvey-login-mockup_1600.jpg 2x"}
![Harvey's mockups]({{ site.baseurl }}/images/say-hello-to-the-new-greeter/harvey-lock-mockup_800.jpg){: srcset="{{ site.baseurl }}/images/say-hello-to-the-new-greeter/harvey-lock-mockup_1600.jpg 2x"}
<figcaption markdown="1">
Harvey's concepts for login and lock
</figcaption>
</figure>

If you look at the desktop spatially—where elements have a clear relative physical position in space—the new design is much better. At the very bottom or back of the layers is the system texture, which is always the bottom-most layer below workspaces. On top are the users' sessions, represented by their wallpapers. Once logged in, that wallpaper becomes full screen because it is the primary focus. You'll notice that system texture underneath is the same as when you're in the Multitasking View, peeking below the workspaces.

There's more we can do here with this spatial model—especially with animation—but this new design is the first step in that direction.

## Development Process

Last November, Corentin took the time to build and propose the [initial branch](https://github.com/elementary/greeter/pull/181) of what would become the new Greeter. Since that time, we've been making steady progress. The primary goal was reaching feature parity with the old design. That means making sure we indicate which users are logged in, showing a menu with session options, providing feedback when an incorrect password is entered, detecting HiDPI displays, manual and guest logins, and more. At the time of merging, this branch already closed 13 issues with the old design, but it would be another 48 pull requests over the next 9 months before release.

We're really proud of the work done on making the new Greeter experience smooth, but this is just a first step! Now that we have a clean foundation, the team is ready to more actively discuss changes and iterate based on your feedback.

## What's Next

One of the big tangential changes that came out of this was an AccountsService extension for Pantheon. If you're not familiar, AccountsService makes a limited set of user data available to the system: things like the user's full name, avatar, and wallpaper. In order to solve the issue of showing the correct time format on the Greeter, we needed to create a new extension to AccountsService to save time format data in—previously we'd been using a GSettings key in the Date & Time indicator (which caused a few issues of its own). Having an established AccountsService extension paves the way for exposing other user settings to the Greeter as well. In fact, we have a [GitHub Project](https://github.com/elementary/greeter/projects/2) for tracking requested user settings and we'll be exploring the best way to make sure that the Greeter remains consistent with what users expect from their session settings.

We're also looking at adding an [Accessibility Indicator](https://github.com/elementary/wingpanel-indicator-a11y) to the Greeter to make some previously-inaccessible tools (like the screen reader, on screen keyboard, etc) available. We've also discussed a way to more easily and automatically launch pairing for bluetooth input devices when no inputs are detected. This is pretty essential stuff for new installations for example.

You might notice that the original design from Harvey contained both distinct login and lock screen designs. Today, we're shipping a single design across both, but we plan to move towards the new lock screen design as well. We're also interested in iterating on the size, position, animation, and typography of elements—especially across different display sizes. Both of which will be much easier now that we have a clean, modern, fully-GTK codebase.

And of course, as part of our work on the new [Installer](https://blog.elementary.io/meet-the-upcoming-installer/), the Greeter now handles the case of having no users on the system and will launch an Initial Setup window to help you create a new user. More on that later, but for now I'll just tell you that the experience is very slick!
