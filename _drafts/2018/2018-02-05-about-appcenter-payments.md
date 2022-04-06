---
title: About AppCenter Payments
description: Building a sustainable app ecosystem
date: '2018-02-05T17:01:01.399Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/1600/1*9apwHiipblJZieVUZKi1mQ.png
tags:
  - appcenter
  - funding
---

One of the primary goals of developing AppCenter Dashboard was to build a sustainable app ecosystem. I don’t think it’s a surprise to anyone that although the AppCenter ecosystem is growing, nobody can make a living on it yet. That’s what we mean when we say “sustainable”. Writing apps is a real, hard, full-time job. If we want to see more high-quality, Open Source apps then we need to prioritize getting third-party app developers paid.

## Perspective

Let’s talk numbers a second. We released AppCenter in May 2017 and since then we’ve processed about $1,700 worth of payments from a little over 750 charges. On the one hand this is good because it means the average paid price for an app in AppCenter is about $2.30. We have to remember that this is a non-zero number in an ecosystem where previously the standard was zero. So there is progress happening here and progress is good.

On the other hand, we know that several paid apps have been downloaded tens of thousands of times each which should make our total paid out at least in the tens or hundreds of thousands of dollars. From my own personal stats, I can see that only about 1% of downloaders pay for [Harvey](https://medium.com/elementaryos/appcenter-spotlight-harvey-9bd5bf212917) or Nimbus and the total payout for those two apps is about $200 over the last 8 months. [Sequeler](https://medium.com/elementaryos/appcenter-spotlight-sequeler-637b882edd6b) developer Alessandro Castellani reports $155, again paid out from 1% of downloaders. David Hewitt, author of Clipped and [Torrential](https://medium.com/elementaryos/appcenter-spotlight-torrential-39e98fba5f0) reports $330, paid out from 0.75% of downloaders.

This isn’t a sustainable income for our developer community, but there is a lot of growth potential. Those who do pay, pay more than the minimum amount and if we could raise the percentage of people who pay for apps we could get much closer to something that looks like a sustainable income.

## To The Streets!

In order to raise the percentage of people who pay for apps, we need to know why people choose not to pay, so we asked them. One of the most common responses we received went something like this:

> Oftentimes, I’ll skip paying for an app up front because I’ve never used it before. I want to try it out a little first. But after I download the app, it doesn’t seem like there’s a way for me to go back and pay for it.

There’s a significant number of people who want to pay for an app that they’ve decided they like after trying it out for a bit, but currently it’s not convenient to do so. They would have to uninstall the app and re-download it again, which is time consuming and convoluted.

Believe it or not, there were also several people who advocated for some kind of nag screen saying something like:

> I just forget to go back and pay. There’s no easy way to keep track of which apps I haven’t paid for and there’s no prompt to pay at a later time. I need a reminder.

So again, we have users who are willing to pay for an app after they’ve tried it out for free first. But keeping track of which apps they’ve already paid for vs downloaded for free is inconvenient and so it slips their mind.

## Let’s Do A Thing

Starting with the elementary OS Juno release, we’re going to try something a little different in AppCenter: monetized apps you haven’t yet paid for will show our HumbleButton on the updates page, and when you press “Update All” we’ll skip updating these apps. If you’ve already paid for the app, you’ll get your free updates as normal.

We want to be clear about something really quick: **both platform security updates and critical app updates will always happen regardless of whether you’ve paid for a certain app**. We will never withhold security updates based on payment status. Also, of course, free apps are exempt here.

![Payment on updates](https://cdn-images-1.medium.com/max/1600/1*9apwHiipblJZieVUZKi1mQ.png)

After a ton of discussion, we think this is the best solution for a few reasons:

*   **You can still enter “0” in the custom field when downloading initially or when updating**. The decision when and how much to pay is always in your hands and once you’ve paid we won’t ask again.
*   We’re not going to nag you at inopportune times. We won’t send you notifications. We won’t stop you in the middle of trying to get work done. We won’t attempt to restrict features or implement some other kind of time bomb.
*   Updates mean that the developer is providing you with additional value. They’ve spent time to make you a thing. We think this is a much more fair time to ask again than after some arbitrary time limit.
*   By not including paid apps in “Update All”, there is a bit of a convenience tax if you choose not to pay continually. We know that nag screens are inconvenient. They’re meant to be. We know that paying is also inconvenient, so we have to level the playing field a bit.

We’re fighting a bit of a complicated and up hill battle here. We strongly believe in the idea of Pay-What-You-Want, but in a lot of ways we’re in uncharted territory. We want to make sure that you always have the choice of when and how much to pay for apps, but we also want to make sure that app developers get the funding they need to make a living developing Open Source software. We’ll be watching the data closely to see how this change impacts developers’ incomes and if it turns out we missed the mark, we’ll be back to the drawing board to try something new.

## Another Important Change

There’s one other little thing we’re going to do to help developers out. We’re going to add a new button to the footer of app info pages so that you can help fund an app’s development at any time. Whether you’ve downloaded the app or not, whether you’ve already paid for the app or not, and whether it has a new update or not, you can always go back and help your favorite developers out.

![Fund option in footer](https://cdn-images-1.medium.com/max/1600/1*n2YX8iZo4Jt3GTrDAETUJg.png)

We hope you stick with us through some growing pains as we discover the best balance between keeping ultimate control in your hands and making sure developers can make a living developing Open Source apps for elementary OS. We think these two things will make a big impact on developers and will make it more possible for you to enjoy some really killer apps.

