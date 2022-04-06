---
title: Meet the Upcoming Installer
description: Making elementary OS more “gettable”
date: '2018-02-23T17:01:01.636Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/1600/1*-qVavEAS1iwLuKPmRyrJAA.png
tags:
  - installer
  - design
---

For a week last year, Cassidy, Cody, Corentin, and I joined System76 at their offices and worked with their team on a new installation experience for elementary OS and Pop!\_OS. elementary focused on the front-end, while System76 focused on the back-end.

## Why a New Installer?

elementary OS and Pop!\_OS both currently ship with Ubuntu’s Ubiquity installer. It made strides early on with regards to the actual user experience of installing a Linux-based OS when it debuted, and served us well. However, there is a huge opportunity to improve the experience more both from an OS and OEM perspective.

### Front-End

When we set out to revamp the installation experience, we didn’t actually know what the technical stack would look like. We desperately wanted to rewrite the front-end (in Vala and following the elementary HIG if possible) so that we could simplify and streamline the process. The existing Ubiquity front-end code was a large and confusing Python project that made even the simplest of changes difficult. When talking with System76, they also wanted to be able to have a bit more of a branded touch in the installer without it being overbearing.

So we started there: we had been working on a spec and designs for a new installer at elementary for a few years, and had thought through most of the process. We dusted those designs off, agreed they made a great starting point for elementary OS and System76, and we got together for the sprint.

The first thing we did at the sprint was go over that existing spec and point out anything we wanted to change. There were some steps that we agreed weren’t actually needed for a minimal installer (like setting up networking, since the primary goal is to just get the OS onto the drive), so we revised our spec. After that, we split off into two groups: front-end and back-end. The front-end team continued iterating through the designs, thinking through the entire experience start-to-finish, and started prototyping (coding non-functional bits of UI in Gtk+ and Vala).

### Back-End

The back-end team’s first goal was to finalize a decision around an installer framework/back-end. Before the sprint, several of us had taken a look into Ubiquity (and actually filed patches against it), Anaconda, and other installers. We agreed we needed to carefully balance the want to build something fresh and purpose-made, and to lean on existing projects and experiences when it made sense.

This discussion and exploration actually ended up spanning a couple of days into the sprint. The team looked in depth at Ubiquity, Anaconda, Calamares, and a few other existing installers. They researched, experimented, and talked through how each one could be adapted as a back-end for our new front-end, including adding new features and maintaining it. We also actively weighed the advantages and disadvantages of creating something new versus working with an existing solution.

But… in the end (and after a _lot_ of discussion and debate), we came to a consensus that existing solutions were outdated, over-complicated, or assumed a technology stack we weren’t using in either elementary OS or Pop!\_OS. We settled and agreed on building a very simple, open source, purpose-made installer library that just worked to get an OS onto a drive as quickly and simply as possible. And thus [distinst](https://github.com/pop-os/distinst) was born.

The front-end would simply be a consumer of this library, but the back-end would make no assumptions around the actual OS, desktop environment, packaging formats, or toolkits. User setup would be handled separately after OS installation by the existing GNOME Initial Setup in Pop!\_OS or an equivalent front-end that makes sense for us in elementary OS.

## What We’ve Built

### Front-End

We had our sketches and initial designs we started from, but we really worked through the design and front-end implementation of each of the install steps. We ended up with two main types of views: a side-by-side dual pane view (seen in the Language and Keyboard views), and an alert-type view (seen in the Drive and Issue Detection views). Everything is completely style-able via Gtk.CSS, meaning companies like System76 can create a more branded experience without having to maintain a fork or a completely separate version of the installer. This is especially important with the Progress view, where we have a number of class hooks for progress so one could theoretically add all sorts of CSS effects that also reflect the overall progression.

<figure class="third" markdown="1">
![Language](https://cdn-images-1.medium.com/max/1600/1*-qVavEAS1iwLuKPmRyrJAA.png)
![Keyboard 1](https://cdn-images-1.medium.com/max/1600/1*yLUdyaMVzRwn74D5dmSS8w.png)
![Keyboard 2](https://cdn-images-1.medium.com/max/1600/1*fhqaADIx0JY1i5aavLVuHA.png)
![Install](https://cdn-images-1.medium.com/max/1600/1*elR0qcyn6BSASkc2HAUmVQ.png)
![Drive](https://cdn-images-1.medium.com/max/1600/1*t9Wk2yXQpkOTon2T-qBLPA.png)
![Power](https://cdn-images-1.medium.com/max/1600/1*-xQLmhM3E-jUch2AJlu0WA.png)
![Progress](https://cdn-images-1.medium.com/max/1600/1*A0L01Q8mgDNFdjLbs66P6A.png)
![Success](https://cdn-images-1.medium.com/max/1600/1*PV0jZkjNKxOCfNTbM1Bx7g.png)
</figure>

System76 has been writing about their design progress on this front over on the [System76 blog](http://blog.system76.com) if you’d like to see what they’re thinking and how it will fit into the front-end.

### Back-End

For the back-end, System76 created _[distinst](https://github.com/pop-os/distinst)_. This new installer library lets us essentially dump the OS onto a drive extremely quickly and reports the relevant data back to the front-end. It is currently functional and successfully installs an OS _freakishly_ quickly.

### Follow-Up Sprint

In January we got some people from elementary and System76 back together to check in on our progress and scope out the rest of the remaining work, now that we’ve started. New areas to tackle included disk encryption, interaction with recovery partitions, and a more thought out drive selection/partitioning.

<figure class="half" markdown="1">
![Disk Encryption](https://cdn-images-1.medium.com/max/1600/1*kzq6V43rDSOQyXWUA6aqpw.png)
![Encryption Password](https://cdn-images-1.medium.com/max/1600/1*U0hNITzCI_nx2NX5nTImwA.png)
</figure>

Earlier we wrote about disk encryption in our [_Secure By Default: Disk Encryption_](https://medium.com/elementaryos/secure-by-default-disk-encryption-3592bf25e3ce) piece, so be sure to read that. _tl;dr:_ we should heavily encourage full disk encryption to better protect user data by default, and we have some interesting plans for how to do that from both an OS and OEM perspective.

As a result of the second sprint, we also plan to install a recovery partition (essentially a fresh copy of the installation medium) along with every install. This will make reinstalling, factory resetting, and support much easier. It also enables the use case of encrypting a device upon receipt from an OEM without having to manually reinstall.

<figure markdown="1">
![Sketch](https://cdn-images-1.medium.com/max/1600/1*SwkNRZfdCM6Ax_UcRmUb6A.jpeg)
<figcaption>Sketches of a potential side-by-side layout</figcaption>
</figure>

Lastly, we’re working on reworking the layout on a few of the installer panes to better cater to System76 and other downstreams being able to add their own branding and tell their own story. This mostly involves aligning each screen with the side-by-side view, leaving the left half open for any styling or branding an OS wants to provide. Cassidy provided some simple sketches of the idea.

## What’s Next

We have made great UX and prototyping progress, but there is still a _lot_ to do, and a lot more testing before we’re comfortable putting it into production. In no particular order, we still have to implement installing a recovery partition, knowing when we’re booting to the recovery partition, be able to encrypt disks in the back-end, and finish the complex “install type” and drive selecting screens.

For elementary OS, we also need to finish an mvp of our [Initial Setup](https://github.com/elementary/initial-setup) app —and test it extensively—before we can ship the installer.

### When Will It Ship?

System76 is aiming to ship the new installer as part of the Pop!\_OS 18.04 release in April. For elementary OS, we’d love to ship it in Juno (and are working toward that goal), but we do have a backup plan to ship the existing installer if we don’t feel the new one is ready yet. So, _When It’s Ready™_ as you might expect.

### Follow Along

There’s been a lot of information generated after two sprints and several days of in-person discussions, whiteboard sessions, and coding. You can find the up-to-date spec—including design rationale and a start-to-finish user flow—at [github.com/elementary/installer/wiki](https://github.com/elementary/installer/wiki). Contributions welcome if you feel something could be clarified or added.

All the source code is available at [github.com/elementary/installer](http://github.com/elementary/installer) (front-end) and [github.com/pop-os/distinst](https://github.com/pop-os/distinst) (back-end) if anyone wants to check it out or contribute. System76 will continue to post updates on [their blog](http://blog.system76.com), and we’ll continue writing relevant bits here on our blog as well.

---

_Portions of this piece authored by Cassidy James Blaede._

