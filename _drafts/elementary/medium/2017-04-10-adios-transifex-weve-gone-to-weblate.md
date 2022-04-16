---
title: "Adiós Transifex, We’ve Gone to Weblate"
description: "Over the past few years, Transifex has provided their translations services to us for free under their Open Source program. However, our usage of their system has far outgrown the program’s intended use case. If we were to be paying customers of the system, we’d fit far above their top tier pricing category at thousands of dollars per month. With this in mind, we had a couple of options: vastly reduce our usage of Transifex to fit the size of our pocket book or find another translations solution."
author: DanielFore
date: 2017-04-10T17:04:45.414Z
image: /assets/images/adios-transifex-weve-gone-to-weblate/0gdqKrMv_2t9H04by
tags:
  - "localization"
  - "translation"
  - "elementary-os"
  - "weblate"
  - "open-source"
---

We looked at numerous services, hosted and self-hosted, and landed on Weblate, the same translation software that is used by OpenSUSE. Weblate is [open source software](https://github.com/WeblateOrg/weblate) and we were able to pretty quickly and easily spin up an instance of it to get to work on. After using it a few weeks, it’s safe to say that it’s stuck.

<figure markdown="1">
![](/assets/images/adios-transifex-weve-gone-to-weblate/0gdqKrMv_2t9H04by)
</figure>

## What This Means for Translators

If you’d like to help out with translating our website, you’ll need to [sign up on our weblate instance](https://l10n.elementary.io/accounts/register/) either by creating an account there or signing in with GitHub (We highly recommend the GitHub option since it supports two-factor authentication).

Once you’re registered, you’ll see that [Weblate](https://l10n.elementary.io/projects/) is pretty straightforward to work with and it comes with some cool new features like:

**Terminating punctuation checks**. Weblate will detect and warn about strings to make sure that translations end with the same punctuation, whether that’s a period, ellipsis, or none at all.

**Whitespace checks**. Sometimes there’s supposed to be whitespace at the end of that line. Weblate will check for this too.

**Duplicate string checks**. If someone just copy-pastes the English string and claims that it’s translated, Weblate knows.

**Responsive design**. Now you can submit or edit translations on mobile!

And of course many more. Overall, we’re very excited with this move and we’re looking forward to making more extensive use of Weblate with our other GitHub hosted projects as well.

## Thanks Transifex!

We would like to take a moment to say “Thank You” to Transifex for providing their service to us for free all these years. They spent a decent amount of time with us trying to figure out a reasonable price point that would cover our translation needs. We know that providing such a service is expensive and they really helped us out when we were just getting started. We’re happy to free up their resources so that their Open Source program can be used by smaller projects that need a leg up more than we do.

*We’d like to say thanks again to our supporters on[ Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), those who’ve purchased a copy of[ elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*