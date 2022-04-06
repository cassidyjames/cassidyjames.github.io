---
title: Accessibility Features Are Just Features
description: An OS-wide curb-cutting effort
date: '2019-02-16T19:54:18.288Z'
author: cassidyjames
image: https://cdn-images-1.medium.com/max/1600/0*3Q6Snc6Qga_HsPK7
tags:
  - accessibility
  - ux
---

<figure markdown="1">
![Photo of an accessible curb cut](https://cdn-images-1.medium.com/max/1600/0*3Q6Snc6Qga_HsPK7)
<figcaption markdown="1">
Photo of an accessible curb cut by [Dane Deaner](https://unsplash.com/@danedeaner) on [Unsplash](https://unsplash.com)
</figcaption>
</figure>

For some time now, Daniel and I have been talking about how accessibility features really ought to just be standard features of the desktop. Much like [curb cuts](https://99percentinvisible.org/episode/curb-cuts/)—the slopes on sidewalks designed to make traversal with a wheelchair possible—many “accessibility” features can be used to improve the experiences of everyone, regardless of any specific ability or impairment. In addition, the ubiquitous nature of these features can greatly destigmatize their use.

## Visual Style

One way this has manifested is the massively-improved contrast in the system stylesheet; we always strive to be WCAG AA or AAA contrast compliant in the UI, reducing the need for special high contrast modes. If the entire desktop is high contrast _and_ looks great, it’s a win for everyone. Not only is it more accessible to those with difficulty seeing things that have low contrast, but it also greatly helps when using elementary OS on a projector, older display, or in sunlight.

## System Settings

Another way we are tackling this is through [a new organization-wide effort](https://github.com/orgs/elementary/projects/35) to reorganize other Universal Access (or accessibility) settings into standard features of the desktop. If they’re exposed in Universal Access settings, it means we must support them in order for the desktop to be usable to those users, so why not make them more discoverable for all users?

Something we’ve also heard is that users don’t go looking in Universal Access for these types of settings, because they don’t feel that they have a disability (even though Universal Access is explicitly _not_ titled “features for disabilities”). By reorganizing these settings into the standard, natural System Settings locations, we hope that everyone can benefit with more features and options to help them better use their computer. Consequently, settings and preferences that can be useful to a wide range of users will be both easier to find and better supported. We’ve already begun in a few small areas:

### Appearance

We’ve added a new Appearance tab in the Desktop settings to expose window animations, panel translucency, and text size.

![Desktop Appearance settings](https://cdn-images-1.medium.com/max/1600/1*EyErGVV6till1aap3FMPYA@2x.png)

These were all supported Universal Access features before, but now they’re much more obvious. Plus, we’ve improved text size by offering a wider range than the Universal Access options. Whether you have a vision impairment, a display resolution that’s a bit high or low for its physical size, or just like your text smaller or larger, you now have more control.

### Sound

We also expanded on the “Event sounds” toggle in Sound settings.

![Sound output settings](https://cdn-images-1.medium.com/max/1600/1*3gQ7yzFaH5xGNjz8QpvgLQ.png)

We’ve added a new “Flash screen” checkbox alongside, plus we added descriptive text to make it more clear what these settings do. Now if you are hard of hearing, don’t have speakers, or are using your computer in an environment where sounds are not appropriate, you have more accessible control over what happens with event alerts.

### Mouse & Touchpad

In order to move several supported accessibility settings here, we’ve actually completely redesigned the Mouse & Touchpad settings. Instead of one long scrolling list, it’s now separated into tabs for General settings as well as hardware-specific settings for Mouse and Touchpad individually.

![Mouse settings](https://cdn-images-1.medium.com/max/1600/1*cr4atYu07uDm3JjakBtBhQ@2x.png)

We’ve pulled the long-press and keypad control settings into the General settings. We also revised the left/right click setting to be more visual and to make more sense in right-to-left languages. And with the redesign, we’ve pulled the help text out of less-discoverable tooltips and put them right into the natural flow, requiring less finicky mousing around to learn about the different features.

### Universal Access

For now, we will keep the existing settings available all in one spot in Universal Access as well as their new homes in the relevant panes. We’ll listen to feedback and if over time users are visiting Universal Access less for those types of settings, we will consider revisiting the design of Universal Access to focus on assistive technologies that don’t have a more natural home.

## Just the Beginning

While some of these updates have already been pushed out to Juno (and the others are coming very soon), it’s just the beginning of our efforts in this area. We will continue to reorganize and refine settings and preferences, consider accessibility in our standard experience, and do our best to design a computing experience that is usable by all.

