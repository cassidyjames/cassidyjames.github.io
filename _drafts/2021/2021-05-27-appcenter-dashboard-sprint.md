---
title: AppCenter Dashboard Sprint Spring 2021
description: Big steps for the Flatpak-based AppCenter
author: danrabbit
image: /images/appcenter-dashboard-sprint/owen-lystrup-unsplash.jpg
tags:
  - appcenter
  - odin
  - devs
---

<figure class="full-bleed" markdown="1">
![Denver's Union Station](/images/appcenter-dashboard-sprint/owen-lystrup-unsplash.jpg)
  <figcaption markdown="1">
  Denver's Union Station by Owen Lystrup on [Unsplash](https://unsplash.com/photos/chaqHXlOzYs)
  </figcaption>
</figure>

Last year we ran a crowdfunding campaign for an ambitious project called "AppCenter for Everyone." The goal of this project was to move our pay-what-you-want app store from being Debian package based and largely locked in to elementary OS to being based on Flatpak and available for use on any modern Linux-based desktop. Though we successfully met and exceeded our funding goal, we had to postpone the in-person sprint due to the COVID-19 pandemic. Over a year later—and with the availability of the vaccine—we decided to split this work up into multiple sprints, starting with one focused on the publishing workflow. This month, I flew out to Denver, Colorado to work with Blake Kostner and Cassidy James, and I'm excited to share with you what we achieved.

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "appcenter-for-everyone" | first %}
{% include featured.html post=post %}
</div>

We kicked off the week by discussing where the current publishing experience could be improved. Transparency was a big theme, including issues with communicating review times, recording reviewer discussions and actions, and making it easier to contribute to as an open source project. We also wanted to make sure there was a way to actively notify reviewers of pending reviews and improve the performance of the dashboard for people who have access to a large number of repositories. After some time brainstorming, we decided that the dashboard should be split up into two projects: the [AppCenter Dashboard](https://github.com/elementary/appcenter-dashboard) itself where developers submit their apps, connect to Stripe, etc. and [a new repository for reviewers](https://github.com/elementary/appcenter-reviews) where app submissions are processed as GitHub pull requests and ultimately published using GitHub Actions.

The design and workflow of the AppCenter Dashboard will remain largely the same for app developers with just a couple of small differences. First, instead of trying to read and list all of the GitHub repositories you have access to, the new dashboard will only list apps for which you have explicitly submitted a repository URL. This should make the dashboard much faster and less cluttered, and reduces the scope of permissions needed for our GitHub integration. Second, there will be some minor changes to the way Stripe Connect API keys are generated and linked to your app. We're still working out the exact design details, but it should make monetizing your app a little more explicit.

On the review and publishing side, things will be very different from the previous workflow. Instead of an internal reviewer dashboard, reviews will now be processed as GitHub pull requests. This means the review queue will be publicly visible, as will discussion by reviewers and who approved or requested changes on your app. This also means reviewers will be proactively notified on GitHub and on our company Slack when apps are submitted, which should help cut down on review times. Publishing is now built on GitHub Actions using the [Flatpak Builder action](https://github.com/bilelmoussaoui/flatpak-github-actions) maintained by Bilal Elmoussaoui. We're especially happy to be working upstream there on a common codebase and have already submitted our first pull request to improve it for everyone. Automated tests run as part of the review process will now also be built using GitHub Actions, which should make them much easier to write and re-use in your own CI. And speaking of CI, as of the sprint we're also building a [publicly available container](https://github.com/orgs/elementary/packages/container/package/flatpak-platform%2Fruntime) that includes the elementary platform to substantially reduce Flatpak build times.

There's still some work to do before we're ready for developers to submit their Flatpak apps through the new dashboard, but the submission process is already a working MVP. We'll be reaching out shortly to developers on a case-by-case basis to start testing, and submissions should be open to everyone shortly after that. If you haven't yet packaged your app as a Flatpak, now is a great time to do so; the [developer documentation](https://docs.elementary.io/develop/writing-apps/our-first-app/packaging) has already been updated.

During the week we spent some time packaging and deploying more of our own first party apps as Flatpaks; we're now shipping Camera, Mail, and Tasks as Flatpaks in elementary OS 6. Eventually, our plan is to ship all of our first-party apps as Flatpaks published via AppCenter Dashboard. In this way, we'll be dogfooding the AppCenter submission process and developer platform, and are strongly incentivized to make it a great experience. We're also able to see firsthand how apps must interact with sandboxing and portals and make sure platform APIs are available for developers.

As an aside, Cassidy and I also spent some time working on the new stylesheet and closed many of its remaining issues. Especially of interest is the work put into backdrop, disabled, and focus states.

I want to give a special shout out and thank you to developers working on Flathub and the wider Flatpak ecosystem. They've been an immense help offering their time and knowledge.

If you're looking for news about elementary OS 6 Beta 2, hang tight! We'll have more information soon about the improvements we've made on the road to the final stable release. As always, you can watch the [project board on GitHub](https://github.com/orgs/elementary/projects/55) to see outstanding tasks.
