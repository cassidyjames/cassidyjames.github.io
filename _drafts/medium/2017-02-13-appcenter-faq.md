---
title: "AppCenter FAQ"
description: "Questions raised during our crowdfunding campaign"
author: cassidyjames
date: 2017-02-13T17:03:33.459Z
image: /assets/images/appcenter-faq/1Er3Sv7msnJQLk0gdDy0zWg.png
tags:
  - "payments"
  - "github"
  - "elementary-os"
  - "appcenter"
  - "open-source"
---

<figure markdown="1">
![](/assets/images/appcenter-faq/1Er3Sv7msnJQLk0gdDy0zWg.png)
</figure>

With our first few days of the campaign under our belt, we’d like to follow up on our previous updates and share a sort of FAQ regarding AppCenter and our campaign. We’ve received great questions, and if you have any that aren’t covered here, please ask! This post does get a little technical, but we want to be as comprehensive as possible. Without further ado, let’s dive in!

## What’s the flow for AppCenter payments?

Users of elementary OS who purchase an app from AppCenter will see a pay-what-you-want widget similar to the one we use at [elementary.io](https://elementary.io/) for OS payments. After choosing a payment amount (either one of the defaults or a custom value), they’ll be presented with a simple dialog to enter their payment information.

<figure markdown="1">
![](/assets/images/appcenter-faq/1ApVa9DfkgdNQBiyKTTnx8Q.png)
</figure>

<figure markdown="1">
![Prototypes of the Pay-What-You-Want Widget and credit card processing dialog for use in AppCenter](/assets/images/appcenter-faq/13iGLkoZLxDWaGC36P2oR4Q.png)
<figcaption markdown="1">
Prototypes of the Pay-What-You-Want Widget and credit card processing dialog for use in AppCenter
</figcaption>
</figure>

We’ve had a lot of requests for a Pay Later feature and while we don’t yet have designs for this concept, we think it’s a great idea and we’ll be discussing it during the sprint.

The exact UI and experience is still to be perfectly fleshed out (that’s a large part of getting our UX designers, UI designers, and developers all together to work on this), but ideally we will also be able to securely (and optionally) save a tokenized version of the payment information on the machine, allowing for easy one-click future purchases.

## How are AppCenter payments processed?

We are using [Stripe Connect](https://stripe.com/connect), the same payment platform used by industry leading companies like Indiegogo, Lyft, Kickstarter, Shopify, Squarespace, Postmates, etc. to pay out to sellers.

<figure markdown="1">
![](/assets/images/appcenter-faq/1-0ZEoJbMXMKb0zYxm1BkIQ.png)
</figure>

When a user purchases an app, Stripe transfers that payment to elementary. Our starting point was to pay out **70% to the developer** and retain an industry standard 30% to cover processing fees, hosting costs, etc. However, if the payment is $1 this leaves us in a bit of a pickle since 33¢ doesn’t quite cover costs, and we’d actually lose money on processing that transaction. After some discussion with our alpha testers, we settled on **30% with a minimum of 50¢**. That way, we can make sure to cover our costs on the low end, while ensuring that developers get the largest possible cut with payments over $1, and out of all the options we discussed this one seemed the easiest for people to immediately understand.

Because of the costs of processing the transaction, the minimum amount that we’ll try to process is $1. If a user attempts to pay a lesser amount, we’ll forgo payment processing and let them download the app for free.

The exact details of the payout (i.e. payment schedule) are still being worked on, but we’re committed to getting developers paid as quickly and painlessly as possible. In our experience with Stripe, they pay out every week day.

## Can Developers Enforce a Minimum Price?

We’re committed to providing a 100% Pay-What-You-Want experience in AppCenter. That means developers won’t be able to set price floors. Since we don’t plan to implement any kind of DRM or complicated authentication mechanisms in our repositories, and AppCenter is built around the concept of delivering apps whose source code is publically available, it makes little sense to put up a paywall at the very end. Any step along the way, users can get the app for free if they really try. Our focus instead, is on making AppCenter the easiest, most preferable way to get apps and making the payment process seamless so that users are encouraged to fund development of their favorite apps. We’ve been successful with this model and we are confident developers will be too.

## What is AppCenter using under the hood?

AppCenter is a fully native GTK3 app written in Vala. It uses AppStream for application metadata. Package operations are completed using Packagekit.

<figure markdown="1">
![A mockup of what the AppCenter home page might look like after the sprint](/assets/images/appcenter-faq/1BcsD6uNRnpYn0g6mNZGMOg.png)
<figcaption markdown="1">
A mockup of what the AppCenter home page might look like after the sprint
</figcaption>
</figure>

For the initial release of paid apps in AppCenter, we’re using a special apt repository and Debian-packaged apps with AppStream data.

AppCenter Dashboard and the web infrastructure behind it connect to GitHub, check out developers’ app repos, run a suite of tests, generate a Debian package, and place that into an apt repo built with [Aptly](https://www.aptly.info/). AppCenter Dashboard is written in Node.js and is [fully open source](https://github.com/elementary/houston).

<figure markdown="1">
![](/assets/images/appcenter-faq/1nCAQGc7HyGAGH24YpH8VzQ.png)
</figure>

We’ve been asked if we would consider adopting a packaging format like Flatpak or Snap. We have met and discussed each with the respective development teams. However, the existing infrastructure of apt, AppStream, a combination of automatic tests and human review, and Debian packaging will serve us well for the foreseeable future. We want to stress that the core functionality of AppCenter and AppCenter Dashboard aren’t reliant on any one package format. We’re excited about new sandboxed packages and we plan to adopt a sandboxed package format once the dust settles. Any change in packaging format or method would be made in a way requiring very little change from app developers and likely won’t have a meaningful impact on AppCenter’s feature set.

## How do reviews work?

When a developer submits an app, the infrastructure behind AppCenter Dashboard runs a series of increasingly complex tests against it. The first round of tests includes simple things like inclusion of icons, launcher file and metadata validation, etc. Any failures here are reported as GitHub issues against the app. Assuming the app passes, it builds and packages the app. Again, any issues here are filed against the app. Finally, we plan to run automated tests against the built app and file any issues raised. Any time AppCenter Dashboard files an issue, we include as much information as we can about what went wrong and any related documentation that might help address the issue.

<figure markdown="1">
![An example issue created by AppCenter](/assets/images/appcenter-faq/15P4xDhF5sdBEvWMAAk7Hsw.png)
<figcaption markdown="1">
An example issue created by AppCenter
</figcaption>
</figure>

When an app is built, tested, and packaged successfully, AppCenter will attach the deb package to the relevant release tag on GitHub and then it enters a human review. Reviewers from elementary install, test, and review the app. Human reviewers check to see if the app provides features as advertised, is stable enough to use as advertised, and doesn’t reimplement or circumvent platform features (like notifications), among other quality assurance tests. Any issues raised here will (no surprise) be reported against the app on GitHub. We know that it’s a pain to manage multiple issue trackers, and we’ve received feedback from alpha testers that using GitHub issues for this kind of feedback makes it easier for them to manage.

After that relatively quick process, the app gets marked as approved and enters AppCenter for purchase. If issues were reported that need to be addressed first, the developer can fix them, make a new release on GitHub, then resubmit the app.

## Will Closed Source Apps Be Allowed?

AppCenter will allow you to submit apps from all types of GitHub repositories, including private ones. However, as previously explained, we are not going to implement any pay floor, DRM, or code obfuscation aside from the normal build process. This means that we don’t make any guarantees about the visibility of your source code once we check it out to build it or the final (un)availability of binaries to users.

We really would rather Open Source be the expectation and standard we present to our users and open licensing is something that we know is important to them. We’ll very likely be displaying licensing information in a prominent way so that our users know that the app they’re supporting is in fact Open Source.

At the moment, AppCenter Dashboard also makes some assumptions about the structure of your source code in order to make sure you have all the right assets bundled, like icons and metadata files. And it is required that binaries be built by AppCenter Dashboard in order to be distributed.

## Closing Notes

We’ve been really excited to see all of the positive feedback around this campaign already. As of the time of writing this post, we’re nearly 2/3rds of the way to our goal and over 200 people have backed our campaign. So we just wanted to take a moment to say, “Thank you!” to everyone. If you believe in our vision of native Open Source apps and Pay-What-You-Want, we’d still love your help! There are a number of [rewards](https://igg.me/at/appcenter) available that you can check out at [the campaign](https://igg.me/at/appcenter).

*We’d like to say thanks again to our existing supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution has helped get us this far, and we wouldn’t be at this amazing milestone without you! If you’d like to help improve elementary OS, don’t hesitate to [back our AppCenter crowdfunding campaign](https://igg.me/at/appcenter) or [Get Involved](https://elementary.io/get-involved)!*