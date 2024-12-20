---
title: "Accent Colors: A Proposal for GNOME"
description: Enabling user expression while considering the needs of distros and app developers
image: /images/blog/accent-colors/card.png

redirect_from: 
  - /blog/accent-colors-6f1ed002ab5595859014ebf0951522d9/
  - /accent-colors/
  - /accent-colors

comments:
  id: 110612929466833497

updated: 2023-06-26
---

<aside markdown="1">
**This is not an announcement or guarantee of implementation from GNOME!** This post represents my personal opinions in tracking an ongoing discussion within GNOME and the FreeDesktop space. Also, **all screenshots in this post are work-in-progress prototypes!** There may be issues and unsolved problems in them, so please don't assume they represent a finished product.
</aside>

If you've been following GNOME development over the past few years you may be familiar with discussions around _accent colors._ Specifically, could GNOME support some **nice user expression** upstream while enabling downstream **distributions to differentiate** themselves—all while considering the **wants and needs of the expanding app developer community**?

I'm happy to report that we* now have a proposal and some prototype work of how to solve this complex request. Before we get into implementation details, let's talk about the approaches we considered and how we arrived with this proposal.

<aside class="card" markdown="1">
*For the purposes of this post, "we" means myself, [Alice](https://blogs.gnome.org/alexm/), [Chris](https://blogs.gnome.org/christopherdavis/), and [Jamie](https://itsjamie.dev/). While we're all currently working within the GNOME community, **our work here began as an independent effort** after having been involved over the past several years in these discussions. Alice, Chris, and Jamie have done the vast majority of the work, while I have been writing up our efforts and trying to help steer things where I can.

I'm now sharing this proposal with the broader GNOME community after a long process within the FreeDesktop space, and **we are having ongoing discussions within the GNOME design team** to decide how to proceed.
</aside>

When solving a complex design problem, **you have to consider the stakeholders.** Of course it's easy to think of yourself (or whatever group you're contributing to) as the sole stakeholder, but—especially with a space as complicated as FreeDesktop—there are several other parties involved.

When I contributed to designing the [FreeDesktop color scheme preference](https://cassidyjames.com/blog/the-need-for-a-freedesktop-dark-style-preference/) (enabling the system-wide dark style preference) I was initially concerned about elementary OS and its users, but also actively engaged GNOME contributors, app developers, and other FreeDesktop platforms to get their input and ensure the spec could work for them. The reality is that **this sort of feature only really works for users if it works for _most of their apps,_** not just the handful they use that were designed explicitly for their corner of the wider ecosystem. As a result, the FreeDesktop color scheme spec is implemented across elementary OS, KDE, GNOME, and their ecosystems—including major cross-platform apps from large ISVs like Mozilla Firefox, Google Chrome, Brave Browser, and Microsoft Edge.

We're doing our best to take the same approach with accent colors.

* Table of Contents
{:toc}

## The Stakeholders

For accent colors, we've specifically identified the following stakeholders based on extensive discussions and experience in the space:

- Downstream distributions: Ubuntu, Fedora, Vanilla OS, etc.
- FreeDesktop platforms: GNOME, elementary OS/Pantheon, KDE, etc.
- App developers: those making apps for GNOME Circle, KDE, elementary AppCenter, and cross-desktop  
- End users: people using the thing!

**Downstream distributions** have expressed the want to brand their experience via the default look and feel. Some distros like Ubuntu have done this with a different system stylesheet since the very beginning, while others like Fedora take more of a light-touch approach with wallpapers and logos in spots provided by the GNOME desktop. Distributions see their role as being close to end users and providing an experience they believe those users will want, and will recognize when they see it across the room or on the big screen.

**FreeDesktop platforms** want to create what they believe is the best ecosystem of apps and desktop experience. This means shipping features their users want, but also cooperating in ensuring the different platforms remain interoperable with one another. We also have to consider accessibility and maintainability of the platforms as a whole, and how different features are used by different downstreams.

**App developers** want to design and make apps that look and work how they expect across supported platforms. They might want their app to look exactly the same across Ubuntu, elementary OS, and KDE, or they might want it to adapt to each platform in some way they define—but either way, it should be easy to achieve.

**End users** want apps that work on their platform of choice, and if possible look and feel native—though that's a secondary concern to the app being _usable_ in the first place. They also want their environment to look and feel like _their own,_ whether for aesthetic or accessibility concerns, e.g. by setting a wallpaper, a light or dark style, a font size, etc.

## Possible Accent Color Approaches

When thinking through how we could approach this as a generic FreeDesktop spec, we came up with three potential approaches that _could_, in theory, work. Each has trade-offs.

### 1. Arbitrary Color

A naive approach would be to enable the system (e.g. a distributor or user) to define an arbitrary accent color, and then toolkits would be expected to just… use that. This would theoretically provide the most flexibility for end users and distributions, but it falls apart.

From the GNOME/Libadwaita side, we already support setting arbitrary accent colors _from the app developer side_, where the app developer is expected to design and test their app to work or provide custom CSS to expand upon that. However, **there's no simple way the _system_ setting any potential arbitrary color would work for app developers**, as it would mean developers can no longer use accent colors in interesting ways with guarantees of contrast and thus accessibility—plus Libadwaita requires a _set_ of colors for different contexts (background and foreground, light style and dark style), not just a single base color.

Libadwaita (and all toolkits) would need to not just accept the color as-is, but perform some amount of complicated and ultimately subjective transforms on the color to derive an accent _palette_ that can _then_ be used by apps. This might sound feasible, but it really falls apart when the provided color is gray, yellow, brown, or any number of other shades of colors. An implementation would need to algorithmically perform subjective color science like hue-rotating certain colors in certain directions and other colors in other directions when used as shadows or highlights, determine contrasting colors for the various contexts accents are used like text-on-background or icons-on-views, and all in both light and dark style variants, etc. while ensuring the colors never look plain… ugly (which again, is subjective). It's _very_ complex and hand-wavy work and frankly seems like it would be extraordinarily over-engineered for a result that **wouldn't even spit out the original color that was chosen in the first place**.

Different toolkits would inevitably use different color science and subjective implementations, resulting in mismatched colors across apps as well—if you chose Ubuntu orange, for example, there's no guarantee that actual exact color would even appear _anywhere_ in the UI—but some possible muddied or hue-shifted version could. It's not exactly on-brand in that way.

However, this is the most flexible option and puts the complexity in the toolkits instead of in the spec.

### 2. (or 1b.) Nearest Accent

A different solution to (or variation on) the first approach would be to define the spec as _accepting_ an arbitrary color, but then letting the toolkit (or in this case, Libadwaita) algorithmically choose the "nearest" accent color from its existing palette. This approach could offer toolkits the most flexibility (as they'd need to only support a limited number of known colors), but **it could have the same sort of end result problem as the first option**. It would be up to the individual platforms to decide how to expose this to users, whether they expose a full color picker, or just some predefined values.

An issue we could see is that **color palettes between platforms differ**, for example. If someone chooses a nice deep teal color for their accent, it might map to elementary's lighter "Mint" accent color or even GNOME's (slightly blue-leaning) green color. A GNOME/Libadwaita app would use one color while an app using the Ubuntu stylesheet might map to any of four different green-ish accent options.

There's **potential for unpredictability and inconsistency, though it's not quite as complex** as the first approach needing to support _any_ color in the toolkits.

### 3. Named Colors

The last approach continues the line of thinking from the previous two: if you can't perform a bunch of color science on an arbitrary color, and it's not ideal to map an arbitrary color to a set of potential accent colors, what if you remove the arbitrary part, and make it more-well-defined? That's what Named Colors attempts to solve.

In this approach, the spec would define a set of named colors, like "red," "orange, "yellow," etc. that platforms could commit to supporting. The exact values of these colors are intentionally not defined in the spec, enabling the toolkit to take that color and present something from its own palette that fits. Like the nearest accent approach, **it eases the burden a bit from implementors** as they would only need to test against a defined set of colors, and it **allows for expression in each toolkit** or stylesheet's own interpretation of a color. It also codifies setting user expectations of not necessarily picking "I want this exact shade of blurple," but more, "I chose the 'green' option, so apps are using green accents!"

We do have a great starting point for colors that's been shipping to users for years: elementary OS! They have defined their own branded versions of red, orange, yellow, green, mint, blue, purple, pink, brown, and slate (a chromatic gray). These ten colors seem like an excellent jumping off point and could be adopted as Named Colors in the FreeDesktop spec. This would give a clear migration path for elementary OS, covers the spectrum of GNOME accent colors, and nearly matches the options in KDE today. Ubuntu specifically would likely need to change or remove a single accent color option they're shipping today.

The risks of this approach center around agreeing on that set of named colors in the first place—for example, Ubuntu currently ships accent color options that don't neatly fit into a generic color spectrum, with several different shades of green. Some desktops that want to offer arbitrary colors might feel limited by this implementation, and **you could _still_ have inconsistency** where different toolkits interpret named colors in ways unexpected by the user. There are also open questions around appending the spec with new colors in the future, should people want to.

## Proposal

Named Colors was our preferred approach initially, as it seemed to be the least-bad and least complex option for GNOME and elementary OS. However, it didn't really align with the direction for KDE, COSMIC, or tauOS contributors who were [proposing the FreeDesktop portal implementation](https://github.com/flatpak/xdg-desktop-portal/pull/815) in the first place.

Given the above—and after literally a years-long process with multiple hours-long discussions and hundreds of comments from across the ecosystem—we have decided to back **Arbitrary Color for the FreeDesktop spec**, proposed to be implemented as **Nearest Accent for GNOME/Libadwaita** (and likely elementary OS as well). While a bit more complex for GNOME to implement than strict Named Colors, it does seem to offer a balance of flexibility for platforms, distribution differentiation, predictability and testability for GNOME-targeting app devs, and lower implementation complexity for GNOME than complete Arbitrary Colors—all while still enabling a lot of end user expression.

Given an arbitrary color, platforms (e.g. via the toolkit or a platform library) would need to derive their palette that can be used by that platform's apps. The exact implementation is up to each platform, but essentially if the FreeDesktop Portal says the accent color is `#f00`, platforms should take that and decide how to use it in a way that makes sense for them.

<figure markdown="1">
![Adwaita Demo with pink accent](/images/blog/accent-colors/banner-pink.png)
<figcaption markdown="1">
Adwaita Demo using a prototype pink accent color
</figcaption>
</figure>

For GNOME, we envision mapping it to the nearest accent color—perhaps including some additions inspired from the elementary palette, like pink and slate; so if the portal says `#f00`, we'd match that to our existing red palette. elementary OS could do something similar by having Granite automatically set the closest-matching stylesheet variant, similar to how they handle wallpaper-based accent colors today. In KDE (please excuse my limited knowledge of the inner workings!), I believe the chosen color could be given directly to QPalette. On Ubuntu, GNOME apps could map to the nearest palette color; the palette could be defined in the Yaru stylesheet as it is today. Flutter apps could potentially use an accent color directly e.g. to seed its Material Design 3 ("Material You") support.

In the future, if some sufficiently talented and motivated developer wanted to try to add arbitrary color support to GNOME in a way that ensures both accessibility and aesthetic quality, that _could theoretically_ be possible—or it could even be implemented as a third-party library on top of GTK; the FreeDesktop spec wouldn't limit how the accent color could be used down the road.

## GNOME Design Considerations

Let's get into GNOME and Libadwaita specifics; if you were just here for the FreeDesktop stuff, that's a wrap, and thanks for reading!

First, we want to be clear: even though the FreeDesktop portal might accept and store arbitrary values, we see that as an implementation detail on GNOME desktop—**we propose that the set of well-defined choices be exposed in Appearance Settings in a way similar to how elementary OS and Ubuntu display them today.**

While thinking through this proposal for GNOME, some of the other biggest considerations were:

- Not adding an undue burden for app developers
- How to ensure we retain semantic color (e.g. for destructive actions or warnings)
- How it looks across the platform, e.g. in places like suggested actions in dialogs
- How we would implement it in Shell
- How downstream distributors could use this for differentiation

### App Developers

For app developers, an important thing to remember is that they're always in control of how their app works. While Libadwaita could support FreeDesktop accent colors by default, **a developer can always override the accent color used by their app**, as they see fit for their design and brand—just like today with the default blue accent color. 

<figure markdown="1">
![Calendar with red accent](/images/blog/accent-colors/cal-red.png)
<figcaption markdown="1">
Calendar with a prototype red accent color
</figcaption>
</figure>

This is identical to how the FreeDesktop color scheme preference was implemented in Libadwaita for the dark style. If a developer wants to support accent colors, they would need to test with the colors in the GNOME palette—but by following best practices around color usage, they can be fairly confident the palette will just work for them by default.

### Semantic Color

While color should never be used as the _only_ way to understand context (due to color blindness, inaccurate displays, and even Night Light altering visible colors), color can be used effectively to enhance the semantics of the desktop. However, this is a challenge when colors like red, yellow, and green exist in the set of potential accent colors in addition to being used semantically for things like "destructive," "warning," or "success."

<figure class="half" markdown="1">
![Clocks with pink accent](/images/blog/accent-colors/clocks-pink.png)
![Clocks with red accent](/images/blog/accent-colors/clocks-red.png)
<figcaption markdown="1">
Clocks with a prototype accent colors and new destructive button style
</figcaption>
</figure>

elementary OS alleviates this by using a lighter tint style for accent-colored buttons, while using a more aggressively-contrasty red style for destructive actions. We actually came to align on the same (well, opposite) approach: use the selected accent color similarly to how the blue accent is used in GNOME today, but tone down and differentiate destructive actions. This is actually [recommended by UX Movement](https://uxmovement.com/buttons/how-to-design-destructive-actions-that-prevent-data-loss/) precisely to avoid mistaking destructive actions as the suggested call to action—and it works well here, too.

<figure class="half" markdown="1">
![Clocks with slate accent](/images/blog/accent-colors/clocks-slate.png)
![Calendar with slate accent](/images/blog/accent-colors/cal-slate.png)
<figcaption markdown="1">
A prototype slate accent color
</figcaption>
</figure>

Something nice about a chromatic gray "slate" accent color is that it can reduce the amount of bright, potentially-distracting accent colors throughout the OS while retaining their semantic meaning—being different and distinct from non-accent buttons, labels, icons, etc. This accent color would also make other semantic colors like destructive actions stand out even more, which could be seen as an accessibility boon.

### Dialogs

For suggested actions in dialogs specifically, we had a different problem: the accent-colored text of red, pink, and orange could be very similar to the destructive red text, making it unclear which is the suggested and which is the destructive action. We could just make the suggestion action an accent background, but we did this in Adwaita for GTK3 and didn't love it—it makes the dialog feel very unbalanced and overly aggressive.

<figure class="half" markdown="1">
![Dialog with pink accent color text](/images/blog/accent-colors/dialog-pink.png)
![Dialog with pink accent color background](/images/blog/accent-colors/dialog-pink-bg.png)
<figcaption markdown="1">
**Left:** Accent-colored text | **Right:** Accent-colored background
</figcaption>
</figure>

We considered making the suggested action just _a bit_ more prominent—using an elementary-like tint in this context—while keeping the destructive action more toned down. This is what we currently do for the hover styles, so we'd need to adapt those a bit, too. 

<figure markdown="1">
![Dialog with tinted suggested action button](/images/blog/accent-colors/dialog-hover.png)
<figcaption markdown="1">
Suggested action hover styles
</figcaption>
</figure>

However, this still didn't feel right with colors close to the destructive style because it matches the new proposed destructive style elsewhere, leading to potential confusion.

<video width="520" height="284" autoplay muted loop controls>
  <source src="/videos/accent-colors/dialog-tint.mp4" type="video/mp4">
Your browser does not support the video tag. <a href="/videos/accent-colors/dialog-tint.mp4">Download</a>.
</video> 

While thinking it through and playing with different styles, we thought: what if we simplify the styling in dialogs a bit, keeping the general layout, but treating buttons more similarly to everywhere else?

<figure class="half" markdown="1">
![Dialog with unstyled buttons](/images/blog/accent-colors/dialog-unstyled.png)
![Dialog with vertical unstyled buttons](/images/blog/accent-colors/dialog-vertical.png)
<figcaption markdown="1">
**Left:** New proposed dialog style | **Right:** Adapted to vertical buttons
</figcaption>
</figure>

Once we started playing with this, it just felt right. It feels a bit simpler and more modern than the old GTK3 styles or the current GTK4 styles while not fundamentally changing the layout. This has been one of the more controversial proposals within the GNOME design team, though, so we'll see if it works or if we come up with something different.

### Shell

Shell uses its own toolkit, st, rather than GTK. As such, we're working on an implementation of accent colors there, as well.

<figure class="third" markdown="1">
![Shell with a purple accent](/images/blog/accent-colors/shell-purple.png)
![Shell with a yellow accent](/images/blog/accent-colors/shell-yellow.png)
![Shell with a pink accent](/images/blog/accent-colors/shell-pink.png)
![Shell with an orange accent](/images/blog/accent-colors/shell-orange.png)
![Shell with a teal accent](/images/blog/accent-colors/shell-teal.png)
<figcaption markdown="1">
Prototype Shell support for accent color
</figcaption>
</figure>

This was actually easier than we expected it to be when we set out, and we think the results are nice!

### Downstream Distribution Examples

As a fun sort of exercise, I wanted to see if—theoretically—the proposed accent colors plus the existing color scheme preference could be a tool distributions use for differentiation. Using a very early prototype of accent colors in Libadwaita, see if you can identify each distro by a screenshot of its theoretical default settings:

![Orange light](/images/blog/accent-colors/orange-light.png)

![Cyan dark](/images/blog/accent-colors/cyan-dark.png)

![Blue light](/images/blog/accent-colors/blue-light.png)

![Green dark](/images/blog/accent-colors/green-dark.png)

![Yellow light](/images/blog/accent-colors/yellow-light.png)

<details markdown="1">
<summary markdown="1">
Reveal Spoilers
</summary>
**Top to bottom:** Ubuntu, Pop!_OS, Fedora, Manjaro, Vanilla OS
</details>

Did you get them all? Okay, perhaps that was too easy with the wallpapers, fonts, Shell extensions, etc… but that is kind of the point! I personally would love to see distributions using well-defined preferences for their differentiation while not resorting to the nuclear option of changing the entire system stylesheet out from under third-party apps. Using the accent color instead helps ensure apps can feel more at home across distributions right out of the box while also being predictable for the app developers.

### Open Questions

That just about wraps this up, but just for completeness-sake, we wanted to let you know that **we do have some remaining questions** that will need to be solved.

There are places in the Shell styling that use images—like checks and switches—that will either need to be ported to CSS, or (as a last resort) we'll need to provide colored SVGs in all the accent colors.

GNOME currently has (very nice!) blue folder icons, visible in GNOME Files and the file picker. With a user-selected accent color, would we _want_ those to follow along? Does that create a lot more work for maintaining the icon set? Is it fine if the folders are always GNOME-blue, regardless of the accent color? This is something we need to think about and discuss with the design team and icon maintainers.

The actual accent color palettes for each of the ten colors needs to be chosen, and along with that, we should probably have internal guidelines/metrics for contrast and accessibility. E.g. we need to ensure yellow is as accessible as blue, and have a measure of how we know that.

Lastly, there's still more thought and discussion needed around semantic colors and how to ensure e.g. destructive and error states are visually distinct when using accent colors. For example, do we use different shades of the semantic colors with some of the accent colors? Do we avoid supporting a "red" accent color altogether (as a fan of red, I'm not a fan of that idea!)? Do we avoid using semantic color in most contexts altogether to allow the accent color to shine through more? These are all being discussed within GNOME, and I'm not sure where we'll end up.

## Prototype Progress

There's an open [pull request for the FreeDesktop portal](https://github.com/flatpak/xdg-desktop-portal/pull/815) we were involved in to add the tiny amount of support—and importantly, specification—needed for accent colors. We've also opened draft merge requests for [the GNOME desktop schemas](https://gitlab.gnome.org/GNOME/gsettings-desktop-schemas/-/merge_requests/63) and [Libadwaita](https://gitlab.gnome.org/GNOME/libadwaita/-/merge_requests/824) which will be required to support accent colors.

We've proposed updates to [destructive styles](https://gitlab.gnome.org/GNOME/libadwaita/-/merge_requests/810) and [message dialog styles](https://gitlab.gnome.org/GNOME/libadwaita/-/merge_requests/812) in Libadwaita which would address some of the considerations raised above.

Finally, we've opened draft merge requests for [GNOME Shell](https://gitlab.gnome.org/GNOME/gnome-shell/-/merge_requests/2715) and [GNOME Settings](https://gitlab.gnome.org/GNOME/gnome-control-center/-/merge_requests/1728) for accent color support to bring it all together.

## Next Steps for GNOME Design

We've presented this proposal within the GNOME design team, and are actively working through the details to see if we can come to an agreement on the best way forward. There is still a lot of work to be done if it's accepted, though!

We would need to update the [GNOME Human Interface Guidelines](https://developer.gnome.org/hig/) to provide guidance to developers in using accent colors—including when to opt into the accent color, when to use and avoid semantic colors, and how to test against the supported accent colors. We would need to audit existing GNOME apps for color usage, e.g. in illustrations, animations, and semantic colors. For animations (like in the Mouse & Touchpad settings), we would need to update the source videos and styling to be recolorable based on the accent color.

And there are probably 100 other, smaller things I'm forgetting that would need to be done.

## Thanks for Reading!

I know that was a _monster_ of a blog post, so props for getting through it to the end. We hope this proposal makes sense and serves as a kicking-off point for a long-awaited way for users to make their desktop their own, distributions to differentiate themselves in well-defined ways, and app developers to not be overwhelmed with the implementation. 😅️ Thanks to Alice, Chris, and Jamie for their collaboration, and for future related posts, be sure to follow [my blog](https://cassidyjames.com/blog), [Alice's blog](https://blogs.gnome.org/alexm/), and [Chris' blog](https://blogs.gnome.org/christopherdavis/)—or just subscribe to [GNOME Planet](https://planet.gnome.org/) to get it all!

And to reiterate one more time, the "we" in this blog post is inclusive of myself, Alice, Chris, and Jamie—and ultimately, I wrote this blog post, so any mistakes are my own. We've been involved in discussions with other folks quite a bit, but we're the ones attaching our names to this specific proposal. :) At the same time, we can't promise that this will be accepted or come to fruition the way we've mapped out—in the next GNOME release or really, ever—but we wanted to put it out there for feedback and discussion. Thanks again for reading!
