---
title: Stars & Thumbs
description: Thoughts on app ratings and reviews
updated: 2023-07-31
image: /images/blog/stars-thumbs-app-ratings-reviews-odrs/card.png

redirect_from: /stars-and-thumbs
---

I've been building open app ecosystems for over a decade now, and something that frequently comes up is how to best handle ratings (quantitative feedback) and reviews (qualitative feedback) of apps. User feedback can serve useful purposes: a powerful signal for ranking, a way to provide feedback to a developer, a way to demonstrate "social proof" (like testimonials or positive social media posts on a website), and a heads-up to other users for positive or negative experiences. But the widely-used five-star and review system has its problems.

## What's wrong with five-star ratings?

The meaning of the five-star rating system changes depending on culture, and even at its best, is a skewed system. If you've ever ridden in a ride-share like Lyft, Uber, or Bolt, you're expected to give a five-star review unless something went wrong—and at least as of 2017, [drivers with an average rating of less than 4.6 stars can lose their job](https://www.buzzfeednews.com/article/carolineodonovan/the-fault-in-five-stars). This is a circular problem: as more people are pressured to give drivers in general five stars, the average rating raises, which in turn raises the threshold at which ride-sharing companies will fire the drivers.

There's also the ambiguity: ask ten people what they would rate a product from an online retailer that they found "just fine," and you're likely to get at least three different answers: 2, 3, or 4 stars. If the spread is that wide, is it really a useful system? We've seen popular apps and platforms learn this over the years, too—and many have already abandoned the five-star rating system.

YouTube used five-star reviews until 2009, when they [pointed out the issues](https://blog.youtube/news-and-events/five-stars-dominate-ratings/) across their growing platform: most people gave five stars, some gave one star, and basically nobody gave two or three stars. As a result, they switched to a like/dislike system.

Netflix used five stars until 2017, and [replaced them with thumbs-up and thumbs-down](https://www.businessinsider.com/why-netflix-replaced-its-5-star-rating-system-2017-4?op=1)—though for slightly different reasoning; they use the ratings as a signal for recommendations rather than showing those ratings to other users. But by lowering the friction of providing feedback, they increased the amount of feedback given by over 200%. 

Even back in 2009, TechCrunch pointed out that [the Apple App Store's five-star rating shared the same problems](https://techcrunch.com/2009/09/22/youtube-comes-to-a-5-star-realization-its-ratings-are-useless/).

Specifically in the case of the [Open Desktop Ratings Service](https://odrs.gnome.org/) (ODRS) which is used to display ratings and reviews in app stores like GNOME Software, I've personally heard from app developers that a five-star rating system seems ill-suited when there are few total ratings; if just a few people give the app a low rating, it looks like the app is low quality—and it's hard to get people to update those ratings, even after any raised issues are fixed.

## What's wrong with written reviews?

Five-star ratings often come with free-form written reviews to explain _why_ a specific rating was given, but these have their own problems, too.

Accepting written reviews can enable [review bombing](https://en.wikipedia.org/wiki/Review_bomb) and harassment of developers—even for reasons unrelated to their app. This happens pretty regularly on Steam and app stores like Google Play. Think about it: soliciting written reviews is basically making a comments section. All of the problems we've learned with comments sections over the years apply here.

One solution could be having the app developer moderate their apps comments, but this too has problems: first, if a developer is being harassed, it's not good for their mental health to make them be the one required to read every review. At the same time, if an app developer is ultimately in charge of what reviews are displayed, it creates an incentive to hide any negative reviews—potentially defeating the purpose of them in the first place. As a result, it should be a requirement to have a neutral third party screen reviews—and that's very hard to scale properly, especially as an ecosystem grows.

After a review is screened by some neutral party, you very much _do_ want the developer to be notified about it—otherwise it's a post to other potential users without giving the developer the opportunity to improve. If people are going to spend their precious time writing a review, it should be as easy as possible for the developer of that app to actually receive the feedback!

Especially if you're thinking from the context of a relatively small or largely volunteer-driven app ecosystem, it seems like reviews are a _very_ difficult problem that is unsolved by some of the largest platforms at best, and a net negative on the ecosystem at worst.

## What would be better?

I've long felt that the issues with the five-star rating plus review system could be remedied by using a simpler setup. So what's the alternative?

My first suggestion is to **use a simpler signal for ratings**: something like a thumbs-up or heart icon to signal that someone likes the app. Combined with a tally of how many downloads there have been, this can give you relative rankings of apps with _very_ little interaction overhead. If _many_ people install an app and _nobody_ gives it a thumbs-up, it probably shouldn't rank as highly as an app that has a _medium_ number of installs but a very _high_ thumbs-up:installs ratio.

If you want to get more granular feedback, I still feel like something we discussed [back in 2017 at an elementary sprint](https://medium.com/elementaryos/the-denver-appcenter-sprint-85f12a667e03) could work: quantitative feedback in predetermined categories, e.g. binary options for "fast," "useful," or "works well."

I personally would **avoid written reviews completely**. Each time an update is released, it could render all reviews irrelevant, or it could be an entirely non-visible change—any there's no reliable way to know that from an app store point of view. A specific bug behind a one-star rating could have been fixed, yet that one-star rating will likely stay on the app's listing in perpetuity—especially if it's difficult or impossible for a user to update that rating if they've reinstalled their OS or just never visit the app's listing again. Encouraging users to revisit old ratings could be possible in the context of the same OS installation or if there is an account system, but that introduces a ton of complexity to a concept (written reviews) that even at its best has issues of review bombing, moderation, and localization.

## What about the ODRS?

To be clear, **I'm immensely impressed by and grateful for all the work that has gone into ODRS** so far: [Richard Hughes](https://blogs.gnome.org/hughsie/author/hughsie/) has done an incredibly thoughtful and admirable job at building something nobody else was doing in the open desktop space—that's kind of his thing! At the same time, it seems like the traction behind ODRS—especially when it comes to scaling moderation and inspiring outside contributions—has been lower than would be sustainable. So… let's iterate and improve!

We have several interested parties in the ecosystem: GNOME Core and Circle apps, KDE apps, Flathub as an app store, cross-platform apps targeting Flatpak, elementary AppCenter and third-party apps, and downstream distros benefiting from the app ecosystem and repackaging apps for their own repos like Fedora, Debian, Ubuntu, Pop!_OS, and many more.

Perhaps it's time to reinvigorate ODRS with the kind of cross-desktop cooperation that makes our open ecosystem as a whole stronger: the beautiful **coopertition** of working together on shared interests and technologies while striving to make what we each think is the best experience possible. I'm chatting with Richard and some of those folks mentioned to see how we can best direct this energy, and am looking forward to helping however I can—and if you're interested in joining the effort, let me know!
