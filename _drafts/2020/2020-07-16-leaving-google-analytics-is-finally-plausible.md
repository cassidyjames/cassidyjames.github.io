---
title: "Leaving Google Analytics is Finally Plausible"
description: "Reviewing another big step towards privacy and transparency"
author: danrabbit
image: /images/leaving-google-analytics-is-finally-plausible/blog-card.png
tags:
  - web
  - privacy

facebook: https://www.facebook.com/elementaryos/posts/3439881266043678
mastodon: https://mastodon.social/@elementary/104525268598122717
reddit: https://www.reddit.com/r/elementaryos/comments/hsgynl/leaving_google_analytics_is_finally_plausible/
twitter: https://twitter.com/elementary/status/1283851023568850947
---

We've always believed that our user experience doesn't just begin when people use elementary OS; it begins from the first moment that someone interacts with our organization in any way. And for a lot of people, that experience starts with our website. You may already know about [our stance on privacy](/privacy-and-elementary-os), advertising, and tracking from our previous blog posts, and that a core part of our business model is that [you are our customer, not a product](/you-are-not-the-product).

<aside>
{% assign post = site.posts | where:"slug", "you-are-not-the-product" | first %}
{% include featured.html post=post %}
</aside>

You might also know that our website has a comprehensive [privacy page](https://elementary.io/privacy) that details not only exactly how we use things like cookies on our website, but how to disable them. And with such a strong stance on privacy, you might be asking yourself why elementary uses analytics at all, let alone Google Analytics. To that I am happy to respond that we are leaving Google Analytics behind in favor of the Open Source and privacy-respecting [Plausible](https://plausible.io/).

## What Are Analytics?

If you're not familiar with the concept, you may be surprised to know that the majority of the websites you regularly visit are collecting statistical data about your usage of the website. Website developers then use this data to optimize infrastructure, pinpoint problems, or even drive design decisions—something we don't particularly advise.

<aside>
{% assign post = site.posts | where:"slug", "privacy-and-elementary-os" | first %}
{% include featured.html post=post %}
</aside>

At elementary, we use anonymous data about things like physical region and download method to make sure we have properly localized HTTPS and Torrent downloads so that you can get a fast and stable connection. We also check which pages are most—and least—visited on our website so we know where to focus improvements. And we pay attention to which operating system downloaders are coming from to make sure that we're on track with our mission of bringing an Open Source operating system to more people.

### Why Not Google Analytics?

Google Analytics lets us keep tabs on that data, but Google tracks _a whole lot more_ than that, too. Frankly we don't want access to that data—or to contribute towards it being collected. Remember, Google's incentive is to collect as much information as possible from people visiting as many sites as possible—and using Google Analytics directly helps them do that.

<aside markdown="1">
>Google's incentive is to collect as much information as possible from people visiting as many sites as possible—and using Google Analytics directly helps them do that.
</aside>

If you don't know, Google happily tracks you across all the websites you visit if those sites use Google Analytics, or if you use Google search. Google then infers and remembers all sorts of information about you; for example: your age range, an inferred gender, if you've changed jobs or moved recently, and whether you like to spend time outdoors. Google then uses all of this data to target ads to you, in the hopes that more precise ads will get you to bite, thus earning them their commission.

They then offer those profiles up inside of Google Analytics, letting website owners drill down using "In-Market Segments." The entire mechanism is invasive—and unnecessary for us. And even though we may choose to ignore these profiles and data, by using Google Analytics on our website, we've contributed to creating them. This data collection and surveillance does not align with our values, and we've been investigating how we can move away for quite some time now.

## The Challenge

Google Analytics is by far the most popular analytics solution available and there are few privacy-respecting alternatives. We considered a few self-hosted products like [Matomo](https://matomo.org/), but we couldn't find a good fit in terms of maintenance, pricing, and features. We also investigated using self-described privacy-focused [Fathom](https://usefathom.com/), but were disappointed to learn that they had gone closed-source since we'd last looked at them. The situation changed once we stumbled upon Plausible.

Plausible is a small UK-based company that provides a hosted, privacy-conscious analytics solution with simple and fair pricing—plus support for custom events. The product itself fits what we're looking for in an analytics solution, and it's encouraging to see that they are actively growing and developing new features. But what really got our attention is their messaging around their business model. Read [their blog post on monetizing](https://plausible.io/blog/open-source-funding) and see if it sounds familiar.

{% include twitter-card.html
  name="Plausible Analytics"
  account="PlausibleHQ"
  avatar="/images/leaving-google-analytics-is-finally-plausible/twitter-avatar.png"
  id="1282678251148763137"
  timestamp="2020-07-13 7:08 AM PDT"
  contents="A day in the life of a startup...<br /><br />
    \"Wanted to quickly reach out and see if you'd be interested in raising
    funds or taking investment\"<br /><br />
    No.<br /><br />
    \"Any interest in talking about an exit?\"<br /><br />
    No."
%}

Unlike Google, Plausible isn't in the advertising game and doesn't have an incentive to collect and sell user data. And they've made it clear that they're not interested in being scooped up by VCs or new ownership that might seek to change those values. They make money the same way elementary does: by directly charging customers for their product. We know firsthand how important it is to make sure that your business is built around your ethics, and we get the same feeling from the folks at Plausible. We're excited to be supporting a company that shares our values and respects the people visiting our website.

## Our Review of Plausible Analytics (So Far)

We used Plausible in parallel with Google Analytics for a month to see how they compared, and we were thrilled with the results. We were able to largely recreate the aggregate data we're interested in using Plausible's goals feature—namely: what version of the OS is being downloaded, what OSes downloads are coming from, and how many downloaders paid versus bypassed the payment. At the same time, much less data is even processed; for example, we completely stopped getting any sort of demographic data from the Google advertising network. The Plausible dashboard is also _far_ easier to use and understand at a glance; instead of a massive web app offering near-infinte sub-sections and complex filters, Plausible offers up a simple one-page dashboard with all the key data you need.

This may not be an expansive review, but over all we're very happy with Plausible Analytics. They've enabled us to get rid of Google Analytics while still keeping tabs on important product-related data. And most importantly, we are able to do so in a way that is much more transparent and trustworthy.

## Improving Transparency

One of the most interesting and unique features of Plausible is their open invitation and celebration of data transparency. First, their entire product is open source; when it comes to privacy, the source code being open and auditable by anyone—experts and end users alike—is paramount. But they go above and beyond that: every user of Plausible is able and encouraged to make their analytics dashboard public so everyone can see the data for themselves and know that nothing fishy is going on.

<aside markdown="1">
>Every user of Plausible is able and encouraged to make their analytics dashboard public so everyone can see the data for themselves.
</aside>

We've embraced this new feature at elementary and opened up the dashboards for our various subdomains as well as our main website. Check them out yourself!

  * [Main Website](https://plausible.io/elementary.io)
  * [Blog](https://plausible.io/blog.elementary.io)
  * [Developer Portal](https://plausible.io/developer.elementary.io)
  * [AppCenter on the Web](https://plausible.io/appcenter.elementary.io)
  * [Release Tracking](https://plausible.io/releases.elementary.io)
  * [Early Access Builds](https://plausible.io/builds.elementary.io)

We hope that this move will provide a tangible improvement to your digital life and give you even more peace of mind when using elementary products. We're always working towards the ideal and we're confident we've made a big step by switching to Plausible. Let us know on social media what you think of the new public analytics dashboard, and feel free to ask questions about how we're using this data!

---

**Update (Sep 8, 2020):** We expanded on our review of using Plausible, and added a link to our new Early Access Builds dashboard.
