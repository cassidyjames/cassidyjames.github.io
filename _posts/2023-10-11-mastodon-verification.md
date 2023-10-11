---
title: How and Why to Get Verified on Mastodon
description: It's fast, easy, and doesn't cost anything
updated: 2023-10-11
image: /images/blog/mastodon-verification/verified.png

comments:
  id: 111217709599539934
---

I run a little family Mastodon server so that I can have [@cassidy@blaede.family](https://mastodon.blaede.family/@cassidy) and feel comfortable sharing random photos of my kids with people while remaining in control of how they're shared. Part of running a Mastodon server is that the admin can curate what hashtags, posts, and links are allowed to trend; e.g. if `#furryNSFW` is popular across your server's corner of the Internet, you _might_ not want that to be recommended to your mom on the trending page (true story!). So admins can explicitly allow or disallow each trend before it's shown to their users. Once a trend is allowed, it will be able to trend again at any point in the future, cutting down on work for seasonal or naturally recurring trends (like `#SilentSunday` or `#SuperbOwl`).

This also works for individual links and posts, but a more powerful feature is that **admins can explicitly allow (or disallow) certain _accounts_ or _publishers_ to trend**. This can greatly cut down on moderation work, as admins can allow-list reputable news sites or people they know are generally good people who stick to the rules and are unlikely to post something they don't want trending; I personally use this for virtually anyone I actually know in real life or from various open source projects. However, I've started becoming a bit more lenient than that, as for my small instance there's a pretty low risk of abuse: **I allow-list anyone with a verified account that looks decent at a glance.** I check in on the trends regularly and can always revoke that, but if someone has proven they are who they say they are and aren't regularly posting things I wouldn't want to trend, I don't want to have to go approve every post that might trend!

![Example of verified accounts on Mastodon]({{ page.image }})

So my call to anyone and everyone on Mastodon---but especially journalists and well-known personalities---is: **get verified!** It greatly helps people like me and mods of larger servers know you're you, and makes it more likely that people will find you in search, follow you, and see you on trending page in their Mastodon app or server.

### Okay, but how?

If you're coming from X (the social network formerly known as Twitter and still available at twitter.com) or a Meta network like Instagram, you might think being verified is some process requiring payment, government ID verification, bribery, etc. With Mastodon, that's not so! Verification is built on web standards and proves one thing: your account is associated with a specific page on the Internet. That might seem like less of a guarantee (it doesn't explicitly prove your real _human identity_), it's powerful. Here are some recommended ways to use verification to prove you're, well, _you:_

- **Personal website**: this is the most flexible and in your control; if you have a website where you direct people, use that for verification! It proves that your Mastodon account belongs to the same person as the website.

- **GitHub account**: GitHub supports Mastodon links on profiles and will add the right markup to support verification. For open source people, this is a great way to associate your work with your social media presence.

- **Organization about page**: if you work for an organization like a news site, see if you can add a link to your Mastodon account on your profile page there. This associates your work at that organization with your Mastodon account and proves your authority when talking about your work.

Another neat thing: you can verify multiple links! So I have cassidyjames.com, blaede.family, and my GitHub account all verified on my profile. The first link is what will show in some contexts like search results, so put the most well-known associated link first.

### Technical details

If you're manually adding a link on your own site (or talking to a web developer to get support added to your organization's site), here's what you need to know:

- The page needs to link back to your public profile, either with an `<a>` on the page or a `<link>` in the `<head>`
- The link needs to include `rel="me"` to distinguish it from just linking to someone else's account
- The page needs to be secure (served over `https`)
- There's a 1 MB page limit; if your page is too heavy, it won't work

### Read more

- [Here’s how The Washington Post verified its journalists on Mastodon](https://washpost.engineering/heres-how-the-washington-post-verified-its-journalists-on-mastodon-7b5dbc96985c)
- [The Markup: How We Verified Ourselves on Mastodon — and How You Can Too](https://themarkup.org/levelup/2022/12/22/how-we-verified-ourselves-on-mastodon-and-how-you-can-too)
- [Very high level information from JoinMastodon.org](https://joinmastodon.org/verification)
- [Slightly more technical information from the Mastodon documentation](https://docs.joinmastodon.org/user/profile/#verification)
- [Mastodon Link Debugger](https://mastodon-link-debugger.vercel.app/)
