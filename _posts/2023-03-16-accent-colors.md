---
title: Accent Colors—A FreeDesktop Proposal
description: Enable user expression while considering the needs of distros and app developers
# image: 

updated: 2023-03-16 
---

**NOTE: This is a fictitious blog post! This is how I think through problems and potential solutions. If you somehow come across this draft (👋️), know that it's a peek into my brain and _a potential_ approach I personally think could be taken—nothing more!**

- Accent colors: why??
  - User expression
  - Distro differentiation
  - Competitive parity
    - elementary OS
    - macOS
    - Windows
    - Android
    - Ubuntu

If you've been following GNOME development over the past few years you may be familiar with discussions around accent colors—specifically, can GNOME support some nice user expression upstream while enabling downstream distributions to differentiate themselves—all while considering the wants and needs of the expanding app developer community.

I'm happy to report that we now have a thorough proposal of how to solve this complex request. Before we get into implementation details, let's talk about the approaches we considered and how we arrived with this proposal.

When solving a complex design problem, **you have to consider the various stakeholders.** Of course it's easy to think of yourself (or whatever group you're contributing to) as the sole stakeholder, but—especially with a community as complicated as the FreeDesktop space—there are several other parties involved.

When I contributed to designing the [FreeDesktop color scheme preference](https://cassidyjames.com/blog/the-need-for-a-freedesktop-dark-style-preference/) (enabling the system-wide dark style preference) I was initially concerned about elementary OS and its users, but also actively engaged GNOME contributors, app developers, and other FreeDesktop platforms to get their input and ensure the spec could work for them. The reality is that **this sort of feature only really works for users if it works for _most of their apps,_** not just the handful they use that were designed explicitly for their corner of the wider ecosystem. As a result, the FreeDesktop color scheme spec is implemented across elementary OS, KDE, GNOME, and their ecosystems—including major cross-platform apps like Firefox.

We're doing our best to take the same approach with accent colors.

## The Stakeholders

For accent colors, we've specifically identified the following stakeholders based on extensive discussions and experience in the space:

- Downstream distributions: Ubuntu, Fedora, Vanilla OS, etc.
- FreeDesktop platforms: GNOME, elementary OS/Pantheon, KDE, etc.
- App developers: those making apps for GNOME Circle, KDE, elementary AppCenter, and cross-desktop  
- End users: people using the thing!

**Downstream distributions** have expressed the want to brand their experience via the default look and feel. Some distros like Ubuntu have done this with a different system stylesheet since the very beginning, while others like Fedora take more of a light-touch approach with wallpapers and logos in spots provided by the GNOME desktop. Distributions see their role as being close to end users and providing an experience they believe those users will want, and will recognize when they see it across the room or on the big screen.

**FreeDesktop platforms** want to create what they believe is the best ecosystem of apps and desktop experience. This means shipping features their users want, but also cooperating in ensuring the different platforms remain interoperable with one another. We also have to consider accessibility and maintainability of the platforms as a whole, and how different features are used by different downstreams.

**App developers** want to design and make apps that look and work how they expect across supported platforms. They might want their app to look exactly the same across Ubuntu, elementary OS, and KDE, or they might want it to adapt to each platform in some way they define—but either way, it should be easy to achieve.

**End users** want apps that work on their platform of choice, and if possible look and feel native—though that's always a secondary concern to the app being _usable_ in the first place. They want their environment to look and feel like _their own,_ whether for aesthetic or accessibility concerns, e.g. by setting a wallpaper, a light or dark style, a font size, etc.

## Possible Approaches

When thinking through how we could approach this both from the GNOME side and as a more generic FreeDesktop spec, we came up with three potential approaches that _could_, in theory, work. Each has trade-offs.

### 1. Arbitrary color

The naive approach would be to enable the system (e.g. a distributor or user) to define an arbitrary accent color, and then toolkits would be expected to just… use that. This would theoretically provide the most flexibility for end users and distributions, but it falls apart.

From the LibAdwaita side, it does already support setting arbitrary accent colors _from the app developer side_, where the app developer is expected to design and test their app to work or provide custom CSS to expand upon that. However, there's no way the _system_ setting any potential arbitrary color would work for app developers, as it would mean developers can no longer use accent colors in interesting ways with guarantees of contrast and thus accessibility—plus LibAdwaita requires a _set_ of colors for different contexts, not just a single base color.

LibAdwaita would need to not just accept the color as-is, but perform some amount of complicated and ultimately subjective transforms on the color to derive an accent _palette_ that can _then_ be used by applications. This might sound feasible, but it really falls apart when the provided color is black, yellow, brown, or any number of other shades of colors. An implementation would need to algorithmically perform subjective color science like hue-rotating certain colors in certain directions and other colors in other directions when used as shadows or highlights, determine contrasting colors for the various contexts accents are used like text-on-background or icons-on-views, and all in both light and dark style variants, etc. while ensuring the colors never look plain ugly. It's _very_ complex work and frankly seems like it would be extraordinarily over-engineered for a result that wouldn't even spit out the original color that was chosen in the first place.

Different toolkits would likely have different color science, resulting in mismatched colors across apps as well. If you chose Ubuntu orange, for example, there's no guarantee that actual exact color would even appear _anywhere_ in the UI—but some possible muddied or hue-shifted version could. Not exactly on-brand.

### 2. Nearest accent

A different solution to the first approach would be to define the spec as _accepting_ an arbitrary color, but then letting the toolkit (or in this case, LibAdwaita) algorithmically choose the "nearest" accent color from its existing palette. This could offer the toolkits the most flexibility (as they'd need to only support a limited number of known colors), but it has the same sort of end result problem as the first option.

Color palettes between platforms differ, for example. If someone chooses a nice deep teal color for their accent, it might map to elementary's lighter "Mint" accent color or even GNOME's (slightly blue-leaning) green color. A LibAdwaita app would use one color while an app using the Ubuntu stylesheet might map to any of four different green-ish accent options.

It's unpredictable and inconsistent, though not quite as complex as the first approach.

### 3. Named colors

The last approach continues the line of thinking from the previous two: if you can't perform a bunch of color science on an arbitrary color, and it's not ideal to map an arbitrary color to a set of potential accent colors, what if you remove the arbitrary part, and make it well-defined? That's what named colors solves.

In this approach, the spec would define a set of named colors, like "red," "orange, "yellow," etc. that platforms could commit to supporting. The exact values of these colors are intentionally not defined, enabling the toolkit to take that color and present something from its own palette that fits. Like the nearest accent approach, it eases the burden a bit from implementors as they would only need to test against a defined set of colors, and it allows for expression in each toolkit or stylesheet's own interpretation of a color. It also helps set user expectations of not necessarily picking "I want this exact shade of blurple," but more, "I chose the 'green' option, so apps are using green accents!"

The risks of this approach center around agreeing on that set of named colors in the first place—for example, Ubuntu currently ships accent color options that don't neatly fit into a generic color spectrum, with several different shades of green.

## Speccing Named Colors

Given the above possible approaches, we decided to pursue the named colors approach. It seemed to offer a good balance of platform differentiation, predictability and testability or app devs, and lower implementation complexity while still enabling a _lot_ of end user expression.

For named colors, we have a great starting point that's been shipping something similar for years: elementary OS! They have defined their own branded versions of:

- Red
- Orange
- Yellow
- Green
- Mint
- Blue
- Purple
- Pink
- Brown
- Slate

These ten colors seem like an excellent jumping off point, and we propose adopting them as the set of named colors in the FreeDesktop spec. This also means there's a clear migration path for elementary OS and all of the third-party apps already actively using their accent colors in the wild. It also seems to cover the spectrum of GNOME accent colors and nearly matches the options in KDE today. Ubuntu specifically would likely need to change or remove a single accent color option they're shipping today.

### LibAdwaita Design Considerations

Let's get into GNOME- and LibAdwaita specifics; if you're just here for the FreeDesktop stuff, feel free to skip ahead.

### Downstream Distribution Examples

Using a very early prototype of accent colors in GNOME, see if you can identify each OS by its theoretical screenshot:

[Fedora]

[Ubuntu]

[Vanilla OS]

[Pop!_OS]

## Open Questions

GNOME Shell: uses its own toolkit, so this work would need to be implemented there as well; would require implementing either CSS variables or mix and alpha functions that work at runtime (not just compile-time).
