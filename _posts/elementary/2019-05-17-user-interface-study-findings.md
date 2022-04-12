---
title: 2019 UI Study Results
description: 'Regarding Custom Styles, Dark Modes, and Night Light'
updated: 2019-05-17
legacy: elementary
author: cassidyjames
tags:
  - ui-study
  - ux
  - dark-style
  - evergreen
---

In my time contributing to elementary and GNOME, I’ve become familiar with pleas from users to implement official support for arbitrary themes — while that itself is a large and controversial topic, I have been working over the past few years to better understand the _why_ behind these requests. In addition to listening to folks across the elementary and GNOME issue trackers, social media, and in-person at hackfests, meetups, and conferences, I also decided to conduct a study to see if I could identify patterns in the data; over 1,500 users of various OSes and environments like Android, GNOME, Ubuntu, and macOS (and dozens more) participated, giving me a decent look into this group of users. I wanted to look into behaviors and opinions around three distinct areas of user interfaces: custom styles, dark modes, and night light modes.

## The Questions and Stats

The study was conducted as a web survey posted to social media and open source forums from November, 2018 through April, 2019. The first question asked what platforms the respondent regularly used, including all that apply between Android, iOS, Chrome OS, elementary OS, GNOME, macOS, Ubuntu, Windows, and a free-form “Other” option. I have not yet collated the data based on reported used platforms, but plan to in the future (when I have time!). The following questions were presented in this order:

### Custom Style

> **“Do you typically use the default interface theme/style, or a custom one?”**
>
> - Default
> - Custom
> - It’s a mix
> - Not sure

When asked the above question, 44% of respondents said they typically use the default interface style. 18% said they typically use a custom style, and 38% said they use a mix. Less than 1% said they were not sure.

So while the largest group (44%) typically uses the defaults, there’s a larger combined group (56%) that either uses a mix of the default and a custom style, or typically uses a custom style. I’ll call these folks “Custom Style Users.”

> **“Why do you use a custom style?”**
>
> - Accessibility — it’s easier to see/use
> - Aesthetics — you prefer a different look from the default
> - Familiarity — it looks like something you’re used to
> - Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Naturally, it’s important to look at the _why_ behind custom styles. When Custom Style Users were given the above question and set of select-all-that-apply responses, 87% chose aesthetics, 34% chose accessibility, and 22% chose familiarity. Of the custom “other” responses, common themes were forcing a dark mode, better utilizing screen real estate, and integrating with non-native or third-party apps.

While clearly choosing a custom style is an aesthetic decision (and platforms can decide whether or not they wish to cater to users making aesthetic decisions about the platform), the interesting stand out to me is accessibility: users are turning to a custom theming mechanism (which isn’t even officially supported on many platforms) to address accessibility concerns. Dark mode being a common custom response without being prompted also shows me that there’s a clear want for dark styles, but that also doesn’t explain the reasoning of _why_ a dark mode is wanted. Thankfully, that was the next question.

### Dark Mode

> **“If given the option of a dark mode, do you select it?”**
>
> - Always
> - Sometimes
> - Never

All respondents were asked the above question. 53% chose Sometimes, 35% chose Always, and 12% chose Never.

The overwhelming takeaway here for me is that 88% of respondents sometimes or always choose a dark mode if given the option. That’s much higher than I would have guessed, and made me reposition dark modes in my head from “niche” to “mandatory.” Again, our ever-important quest here is to deduce the _why,_ so naturally that’s what was asked of those 88% (Dark Mode Users) next.

> **“Why do you use a dark mode?”**
>
> - Accessibility — it’s easier to see/use
> - Aesthetics — you prefer the look
> - Environmental — it better matches your surroundings
> - Familiarity — it looks like something you’re used to
> - Health — i.e. it combats/prevents headaches
> - Power saving — it uses less energy
> - Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Dark Mode Users were asked the above question, and given the select-all-that-apply responses. 70% chose aesthetics, 50% chose health, 46% chose accessibility, 35% chose environmental, 29% chose power saving, and 10% chose familiarity. The most common custom responses also had to do with low light (environmental) and eye strain (accessibility).

Combined, **81% use dark modes for at least one of health, accessibility, or environmental reasons**—this really stands out to me! This 81% is using dark modes at least some of the time to address factors outside of their device like getting headaches, combating eye strain, or working in a darker office. This further cements in my mind that dark modes are a must have, and should be considered not just an aesthetic choice, but an accessibility concern.

For power saving, it’s important to know a little about screen technologies. Most modern flagship mobile devices — like those from Apple, Samsung, Google, LG, and Motorola — use OLED displays. These displays individually light the pixels, meaning black pixels are completely powered off, and dark pixels use less energy than bright pixels. LCD displays (more common in laptop and desktop displays) use a backlight behind the entire display, so the color of pixels has virtually no effect on the energy use. Consequently, on mobile devices it is (anecdotally) common to use dark modes to save power, and some OSes like Android even enable a dark mode for the system UI when power saving features are enabled. This is much less important for most laptop and desktop displays, but should still be considered as OLED displays are becoming more common there. And if FreeDesktop platforms have ambitions to be used on mobile devices, it should absolutely be considered!

### Night Light

The last area I wanted to investigate since it overlaps with dark environments and eye strain was “night light” modes. These modes ship by default on latest versions of at least Android, Windows, GNOME, elementary OS (Night Light), iOS, and macOS (Night Shift), plus are enabled with third party tools on other OSes or older versions of those OSes.

> **“Do you use a Night Light, Night Shift, Red Shift, Flux, or similar mode?**
> i.e. a feature or mode that adjusts your display to be warmer/more red, often promoted for use at night to prevent eye strain, sleeplessness, etc.”
>
> - Yes
> - No
> - Not sure

An overwhelming 76% of users said they do use a Night Light mode, while 22% said they do not, and 2% said they were not sure. This tells me that a relatively niche feature that’s rolled out across OSes to address eye strain can quickly become used by the majority. This is encouraging! I followed up with those 76% (Night Light Users) to ask when they use Night Light:

> “**When do you use a Night Light mode?**
> i.e. When do you make the display warmer?”
>
> - All the time — it’s nearly always on
> - At night or in the dark
> - Occasionally
> - Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

77% of Night Light Users said they use Night Light at night or in the dark. 14% said all the time, 6% said occasionally. The remaining 3% was split between several custom responses, most of which were more specific versions of “At night or in the dark”, i.e. “from dusk until dawn,” “automated to turn on at sunset,” etc.

### Anything else?

> **“Anything else to share about UI styles, dark modes, Night Light, etc?”**

Lastly, I provided a free-form area for respondents to share any more thoughts, and I’ve been combing through these hundreds of responses! Some common themes are that white UIs with Night Light are still harsh in dark environments (so they use dark modes), that some people prefer always using light styles, that some apps make sense as dark while others don’t, that getting a dark mode “right” is critical, that a dark mode should be supported by more apps (especially Firefox and Chrome were mentioned several times), that Night Light could be aware of the currently-focused app (i.e. for color-critical work like photo editing), that a selectable accent color can reduce the want for custom themes, and that a dark mode could also be scheduled like night light is.

## Please Help!

I have a massive spreadsheet of the responses that I am planning to redact any potentially personal information from, then publish openly for the open source community to look at and help derive any more interesting information. If you’re interested in helping with this work and good at collating data from large datasets, I’d love your help! I’m interested specifically in how these responses differ between users of different platforms (which was asked first), and any other interesting correlations that can be made. Shoot me an email at c@ssidyjam.es with the subject “User Interface Study” and we can dig in.

## What’s Next

As a result of this work, further research, experimentation, and observing larger trends in consumer technology, I’m calling for a FreeDesktop dark style preference. You can read about that soon!

_Wording and self-reporting from the User Interface Study might affect results, and I don’t pretend that this sample speaks for the entirety of FreeDesktop users. However, it’s a useful dataset that can help identify larger patterns. Percentages from the User Interface Study were taken on May 16, 2019 and rounded to the nearest percent._

