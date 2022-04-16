---
title: "Improving International Input Methods"
description: "A Year After"
author: santileortiz
date: 2017-02-09T01:27:31.035Z
image: /assets/images/improving-international-input-methods-a-year-after/1aeGEy4R8Z4FGvJRnIIt1VA.png
tags:
  - "design"
  - "elementary-os"
  - "ux-design"
  - "linux"
  - "internationalization"
---

It has been a year since I [posted](https://santileortiz.wordpress.com/2016/02/14/keyboard-input-methods-and-i18n-on-elementary-os/) for the first time about my ideas on how to improve international input methods on elementary OS. I would like to do a summary about how things have changed since then, not only in the operating system but also in my thoughts about what needs improvement, how to do it and the amount of work required to get to that point.

After writing that post, I tried to implement some of the features I proposed, turns out I underestimated how hard it would be. Not because the code was complex, but because Gala is not really responsible of this, instead we use several projects upstream to deal with a lot of things at this lower level. So, changing this had to be done in these projects, which is harder, because now we are not only affecting elementary OS but any Linux distribution that also uses them. In general I think this poses a problem for quick development of experimental features, but without these projects we would not be where we are right now, so it’s somewhat of a necessary evil. Still I wish it wasn’t that way.

So, what actually got implemented?, well, the options tab was finally removed from switchboard in Loki. This may sound like only some code had to be removed, but that’s not what happened. The options tab was removed, but the useful options were moved somewhere else, where they could be discovered by people that need them, while not cluttering the interface for people who don’t.

<figure markdown="1">
![Layout tab for different languages](/assets/images/improving-international-input-methods-a-year-after/1aeGEy4R8Z4FGvJRnIIt1VA.png)
<figcaption markdown="1">
Layout tab for different languages
</figcaption>
</figure>

Regarding the community aspect of my to do list, we reached out to a lot of people that help with translations to know if they had issues typing in their native language. As a result a [mailing list](https://lists.launchpad.net/elementary-i18n/) was put in place, and we received a lot of feedback for several languages. It would be nice if more people would follow up on this with information about their language and their issues.

Also, I have been able to speak at length with people from other countries and tried to understand their problems with more depth. I have learned a lot from doing this, especially not to come to conclusions without really understanding the problem. For instance, I thought the problem of input methods was they were not preinstalled, and the obvious solution was to do a *little research*, find which one is the most used by a language, and set it up when the keyboard layout for that language is chosen. Turns out changing the input method forces you to log out and back in, so we can’t really swap input methods as we change keyboard layouts.

Before I discovered what I wanted wasn’t possible at the moment, I tried to do some of the “*little research*”, and found out this to be a very polemic topic, everyone has different preferences, for different reasons. I see a lot of people misunderstanding problems (just like I did), which gets worsened by the language barrier. It’s really easy to think “If my input method allows me to type X language easily, it’s obviously the best choice for language Y too”, without actually knowing what the needs of typing in language Y are. I think to a great extent, this lack of communication and willingness to really invest time understanding others, is what causes a new input method to appear every now and then, fragmenting the input method ecosystem further.

It’s really hard to come up with a solution if users just gets angry because we didn’t do the thing that seems so obvious to them. Maybe there is something they are not considering, or maybe we don’t understand how things work in their language so it’s not that obvious for us.

More recently, we’ve been trying to improve existing input methods over all. For example Fcitx now works on Slingshot both when typing and selecting text, this was a huge problem for a long time.

<figure markdown="1">
![Typing Korean into Slingshot using Fcitx](/assets/images/improving-international-input-methods-a-year-after/1lwrVwBQR-ZYuE4ZPX9dpMA.png)
<figcaption markdown="1">
Typing Korean into Slingshot using Fcitx
</figcaption>
</figure>

In the end, I expect to be able to integrate input methods into a nice UI, but for this we really need to invest time understanding each other’s needs, so I’m open to suggestions and we always appreciate your feedback.

*We’d like to say thanks again to our supporters on[ Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), those who’ve purchased a copy of[ elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to[ Get Involved](https://elementary.io/get-involved)!*