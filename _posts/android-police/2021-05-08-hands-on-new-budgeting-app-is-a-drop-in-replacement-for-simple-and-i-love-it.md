---
title: "Hands-on: New budgeting app is a drop-in replacement for Simple, and I love it"
description: Simple may be dead, but DAS Budget copies its best budgeting features and works with nearly any bank
image: /images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/Screenshot-from-2021-05-03-22-04-27.png
updated: 2021-05-08

redirect_to: https://www.androidpolice.com/2021/05/08/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/
tags:
  - banking
  - android
---

On the day of Simple’s [scheduled migration to BBVA](https://www.androidpolice.com/2021/03/16/the-day-online-bank-simple-will-die-has-finally-been-revealed/), a new and Simple-inspired budgeting app has emerged: DAS Budget. A Simple user himself, developer Anthony Alves first reacted to the news of the bank's shutdown much [like I did](https://www.androidpolice.com/2021/02/11/theres-no-good-replacement-for-simple/): By trying out nearly every alternative bank he could. After being similarly disappointed, he decided to shift his focus, trying new budgeting tools instead of banks, but the overly complicated options left him (and all of us) unhappy. What he really wanted was Simple's user interface yanked out and plugged into _any_ bank. So, that's exactly what he built, and I love it.

DAS Budget is, as the name suggests, a budget app. Its back-end runs on Google Cloud and hooks into Plaid, a popular service that integrates with thousands of banks (hopefully including yours) and aggregates your financial data — even [the new Google Pay](https://www.androidpolice.com/2021/03/04/the-new-google-pay-app-is-out-of-beta/) app uses Plaid for its bank account insights. Historical transactions show up immediately in DAS Budget after signing in, and new transactions show up according to your bank's and Plaid's schedule, anywhere from every few hours to once a day.

It's not as immediate as Simple, so it doesn't _perfectly_ recreate that aspect — you'll probably want to keep your bank's native transaction notifications enabled if it offers them. But once transactions come into DAS Budget, it looks and works remarkably similarly to Simple: transactions are given a category, can be given notes, and can be marked as "spending from" any of your Goals or Expenses.

![Illustration showing over 4,000 banks supported by DAS Budget](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/Screenshot-from-2021-05-03-22-04-35.png)

_Thanks to Plaid_

!["The next best budgeting app" illustration from DAS Budget](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/Screenshot-from-2021-05-03-22-05-25.png)

!["Detailed transactions" illustration from DAS Budget](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/Screenshot-from-2021-05-03-22-05-08.png)

!["Spending from buckets" illustration from DAS Budget](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/Screenshot-from-2021-05-03-22-05-00.png)

!["Saving for your goals" illustration from DAS Budget](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/Screenshot-from-2021-05-03-22-04-53.png)

For those coming from Simple, DAS Budget carries over almost the same concepts and terminology — or as close as it can get. "Safe-to-Spend" was a Simple trademark, after all, so you'll have to live with "Free-to-Spend." In fact, right now DAS Budget works and even looks almost identical to Simple, right on down to the typography and interface colors, which makes switching a breeze.

That was a necessary first step to get the app off the ground, but the developer has a refreshed design planned that will keep the same functionality while letting the app stand on its own more. To me, the planned changes look like what Simple _could_ have looked like today instead of largely stagnating design-wise.

![DAS Budget transactions redesign](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/das-design-transactions.png)

![DAS Budget buckets redesign](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/das-design-buckets.png)

Interestingly for those that like a peek behind the curtain, DAS Budget uses Google's Flutter toolkit, making it look and feel like a modern Android app while also being cross-compiled for iOS. While some Flutter apps have felt laggy and non-native to me, the developer has done an excellent job ensuring DAS Budget is performant and smooth on Android — and according to the [app's subreddit](https://www.reddit.com/r/dasbudget/), it's well-received on iOS as well.

The app might be cross-platform, but it also supports recent native Android features like system-wide dark theming, biometric authentication for logging in with your fingerprint or face, a design that works nicely with navigation gestures, Google sign-in, and animations that are synchronized with the keyboard (a feature [just introduced for developers in Android 11](https://medium.com/androiddevelopers/animating-your-keyboard-fb776a8fb66d)). This attention to the platform and best practices is a breath of fresh air in the sea of mediocre and woefully out-of-date banking and budgeting apps.

![ezgif.com-gif-maker (7)](/images/blog/android-police/hands-on-new-budgeting-app-is-a-drop-in-replacement-for-simple-and-i-love-it/ezgif.com-gif-maker-7.gif)

I've been following the public planning and development of DAS Budget, and it's refreshing to see the level of engagement developer Anthony Alves has with the growing community of ex-Simple users who are still scrambling even now for a suitable replacement.

From the Simple subreddit and community Discord to a new, very active [DAS Budget subreddit](https://www.reddit.com/r/dasbudget/), you can find Alves working through the wants and needs of his fellow Simple refugees — myself among them. He's publicized his [development roadmap](https://trello.com/b/wPuSw382/dollars-sense-budget) as he works through changes and new features. Put together, this excites me more than any of the neobank alternatives that are trying to capitalize on Simple's demise; it feels like DAS Budget is _truly_ designed to solve the same needs that Simple did, providing a drop-in replacement that will improve with time. And that's great, considering I [still haven't found a bank with all the same features yet](https://www.androidpolice.com/2021/02/11/theres-no-good-replacement-for-simple/).

In my week or so using the app (ironically on top of a pre-shutdown BBVA-backed Simple account), I've been a huge fan. As a Simple user, it feels immediately familiar while also improving on the feature set. For example, DAS Budget has an option to create a recurring expense straight from a specific transaction, a godsend for getting expenses set up quickly within the app. I'm even more excited to see the public roadmap and design improvements to come. In the past, I've not been a fan of budgeting apps that sit on top of bank accounts due to the delay in transaction data — and to be clear, DAS Budget suffers from that same fundamental issue — but this feels like the best possible implementation of that model taking into account that limitation.

The automatic categories seem to be as accurate as Simple ever was, the design is straightforward, and the workflow is far more intuitive to me than alternatives like YNAB or Mint; those budgeting apps seem use an almost spreadsheet-like design or extensive category-based budgeting that you use to sort expenses after the fact, while Simple (and thus DAS Budget) is built around a more proactive "envelope" style budgeting where you set money aside virtually in separate buckets and then pay for things out of them. DAS Budget is also built around the concept of your "Free-to-Spend" cash, rather than trying to always show your total net worth or total available cash across all categories.

These are more differences in mentality than anything technical, but they mean DAS Budget just clicks for ex-Simple users like me a lot faster than alternatives.

DAS Budget is currently free during the invite-only beta via Google Play for Android and Test Flight for iOS. It's expected to release to the public this summer as a paid subscription to cover server and bank integration costs. Interested users can head to [the website](https://dasbudget.com/) to sign up for a beta invite.
