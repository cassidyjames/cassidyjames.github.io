---
title: "Dark Style Progress for elementary OS 6"
description: "The Dark Side of the Force is a pathway to many abilities some consider to be… unnatural"
author: danrabbit
image: /images/dark-style-progress-november-2020/card.png
tags:
  - dark-style
  - early-access
  - odin
  - ux

mastodon: https://mastodon.social/@elementary/105159945400262458
reddit: https://www.reddit.com/r/elementaryos/comments/jorxnv/dark_style_progress_for_elementary_os_6/
twitter: https://twitter.com/elementary/status/1324470374332063745
---

<figure class="full-bleed" markdown="1">
![Teaser](/images/dark-style-progress-november-2020/card.png)
</figure>

elementary OS 6 introduces two major new ways to make the desktop feel more personal: accent colors and dark style. The latter is something that's become especially ubiquitous recently on mobile operating systems and the web. Open Source desktops have also begun offering a system-wide dark mode, but typically with a major drawback that operates much differently from the mainstream platforms: it operates on an opt-out basis rather than opt-in. This is what sets the dark style preference in elementary OS 6 apart from the offerings in, for example, Ubuntu or Pop!_OS. You can read a lot more about motivations and research that went into that decision in Cassidy's previous blog post:

<div>
{% assign post = site.posts | where:"slug", "the-need-for-a-freedesktop-dark-style-preference" | first %}
{% include featured.html post=post %}
</div>

## System Settings & Onboarding

The last time we blogged about the dark style preference, we had a very minimal prototype that offered a simple toggle and an explanation that this setting would only affect the panel and "system components". Originally the plan was to only support the dark style in the desktop shell in elementary OS 6 and not to support changing it for apps at all. This would only include the panel, the dock, notifications, the authentication agent, and the keyboard shortcut overlay.

<figure class="half" markdown="1">
  <img alt="Prototype “Prefer dark style” toggle" src="/images/the-need-for-a-freedesktop-dark-style-preference/switchboard@2x.png" width="800" height="595" />
  <img alt="Prototype “Prefer dark style” toggle" src="/images/the-need-for-a-freedesktop-dark-style-preference/switchboard-dark@2x.png" width="800" height="595" />
  <figcaption markdown="1">
  Prototype “Prefer dark style” toggle
  </figcaption>
</figure>

Eventually we extended "system components" to include apps like Screenshot and Sideload as well as System Settings. We also developed some illustrations that reflected the idea that apps wouldn't be included. Between these two screenshots you can see how much the dark style has changed: the most noticeable being the use of a much more neutral base color and the improved contrast between buttons and the background. You'll also notice that since the introduction of the elementary settings daemon you're now able to schedule an automatic dark style change at sunset or by manually specifying a time. Keep in mind that this has grown quite a lot in a short amount of time and we're still iterating on the exact design. Things could still change significantly before the final release.

<figure class="half" markdown="1">
  <img alt="Current prefer dark style UI" src="/images/dark-style-progress-november-2020/switchboard@2x.png" width="1024" height="744" />
  <img alt="Current prefer dark style UI" src="/images/dark-style-progress-november-2020/switchboard-dark@2x.png" width="1024" height="744" />
  <figcaption markdown="1">
  Current “Prefer dark style” UI in _System Settings_ → _Desktop_ → _Appearance_
  </figcaption>
</figure>

We also now present the dark style and accent color choice when you first log in via Onboarding, and of course this app was added to the list of apps which support the dark style.

<figure class="half" markdown="1">
  <img alt="The dark style and accent color preferences in Onboarding" src="/images/dark-style-progress-november-2020/onboarding@2x.png" width="560" height="479" />
  <img alt="The dark style and accent color preferences in Onboarding" src="/images/dark-style-progress-november-2020/onboarding-dark@2x.png" width="560" height="479" />
  <figcaption markdown="1">
  The dark style and accent color preferences are now presented during Onboarding
  </figcaption>
</figure>

## Challenges with Apps

As we began to implement dark style support across all of the system components in our desktop, we started to feel confident about the idea of supporting it in apps too. We started small with simple apps like Calculator, but I'm happy to say that as of this time nearly all of the default apps in elementary OS follow the dark style. This isn't as easy as it sounds. As I alluded to earlier, the dark style preference in elementary OS 6 is "opt-in", meaning that developers must explicitly choose to support it. This is important because of so many places where app styles break when developers aren't testing against the dark style. Consider for example, Calendar:

<figure class="half" markdown="1">
  <img alt="Calendar in the dark style before fixes" src="/images/dark-style-progress-november-2020/calendar-before@2x.png" width="1024" height="750" />
  <img alt="Calendar in the dark style after fixes" src="/images/dark-style-progress-november-2020/calendar-after@2x.png" width="1024" height="750" />
  <figcaption markdown="1">
  Calendar in the dark style before and after fixes
  </figcaption>
</figure>

This is a fairly common example of an app that had been developed against the light style and when forced to use the dark style would become completely illegible and thus unusable. Under an "opt-out" system, users would be stuck having to switch the entire system style preference every time they wanted to use this app until the developer hopefully delivered a fix.

<figure markdown="1">
  <img alt="Mail with dark style" src="/images/dark-style-progress-november-2020/mail@2x.png" width="1024" height="750" />
  <figcaption markdown="1">
  Mail, still does not support the dark style preference
  </figcaption>
</figure>

Also consider an app like Mail, which still does not support the dark style preference because of the nature of its content. It's unclear how Mail should handle displaying HTML emails which probably don't provide CSS that accounts for a dark style. There's still an open discussion about whether Mail should display HTML emails in a way that may blindingly contrast with its UI.

<figure class="half" markdown="1">
  <img alt="Terminal with user-determined style" src="/images/dark-style-progress-november-2020/terminal-dark@2x.png" width="932" height="672" />
  <img alt="Terminal with system-determined style" src="/images/dark-style-progress-november-2020/terminal@2x.png" width="932" height="672" />
  <figcaption markdown="1">
  A Terminal prototype with a "Follow System Style" option
  </figcaption>
</figure>

Another case yet to be resolved is for apps like Code and Terminal which offer multiple color schemes. In these apps, the color scheme also affects the content and there are multiple possible choices for light color schemes. This complexity becomes compounded as soon as these apps support custom color schemes as well. For now, we're considering a simple switch to alternate between two pre-determined default styles with Terminal defaulting to "off" and Code defaulting to "on". This keeps with Terminal always using the dark style by default, but Code matching the behavior of other light-by-default apps.

<figure class="half" markdown="1">
  <img alt="Files in light style" src="/images/dark-style-progress-november-2020/files@2x.png" width="932" height="672" />
  <img alt="Files in dark style" src="/images/dark-style-progress-november-2020/files-dark@2x.png" width="932" height="672" />
  <figcaption markdown="1">
  Files in dark and light styles, with less-legible places icons in dark style
  </figcaption>
</figure>

Changes to iconography also have to be considered when supporting a dark style. Several places sidebar icons in Files, for example, are far less legible in the dark style and will need to be redesigned for better contrast.

There are still other places in the UI where we support the dark style, but that support could be made better like in System Settings → Displays. The colors used for each display are quite bright and could be much dimmer when the dark style is activate. If you're curious about more examples of places where apps could not support the dark style without some modification, you can follow along with our [Prefer Dark Style project on GitHub](https://github.com/orgs/elementary/projects/43).

## Cross-platform & Flatpak Support

Another area we're still working on is support across the FreeDesktop ecosystem and especially within Flatpak apps. At the moment, apps need to be able to access the system AccountsService to be able to read the elementary dark style preference. After discussion with app developers, this doesn't seem to be something that works for them and especially for Flatpak'd apps is a bit frowned upon.

Two other approaches are either to expose the dark style preference via GSettings or via a DBus endpoint. GSettings is familiar and simple for developers writing apps for elementary OS or GNOME (among other desktops), but it seems the current consensus is that Flatpak'd apps should only be able to access their own GSettings schemas. This leads us to believe that exposing a DBus endpoint is probably the best option to encourage adoption by 3rd-party apps. So, in the near future, elementary settings daemon should handle that.

We're looking forward to feedback from some GNOME app developers about the acceptability of the DBus solution. For app developers using Granite, we already provide a very simple `Granite.Settings` object that abstracts everything away and makes it as easy as connecting to a signal, the same way you would handle [`Gtk.Settings`](https://valadoc.org/gtk+-3.0/Gtk.Settings.html). We'll provide documentation for this, and more, when elementary OS 6 enters public beta.

## Get Early Access

If you're excited by what you read here and want to get your hands on the developer preview of elementary OS 6, you can! GitHub sponsors at the $10/mo or above tier get access to our daily builds server where you can test the latest and greatest experimental builds, including builds for Pinebook Pro. Subscribing helps us fund the development of elementary OS and brings us that much closer to delivering the final product.

<div style="text-align: center" markdown="1">
[Get Early Access Builds](https://builds.elementary.io){: .button}
</div>
