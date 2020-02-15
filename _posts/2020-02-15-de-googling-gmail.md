---
title: "De-Googling: Gmail"
description: The first step I recommend
---

I've wanted to have more control over my email for a long time, and consequently migrated most accounts to non-@gmail.com email addresses that were set up as forwarders on my website's domain. As such, there are very few emails that are actually addressed to my Gmail address. **This is a first step I recommend anyone even remotely thinking about de-Googling perform**; getting your email address out of the hands of _any_ given company and owning it yourself is useful, but takes time to catch and change old accounts, inform (and remind!) old friends, etc. Do it early to prevent headaches later.

Since most of my email was set up via forwarders, I am currently trialing Fastmail as a full-on replacement to Gmail for my primary email service. Google requires a Gmail address for your Google account, so the actual account will likely remain open for some time—but I might look into a "vacation response" that informs people of my non-@gmail.com address in case anyone still uses the old one. The nice part of owning my email address is that if I end up not loving Fastmail, I can easily move to another provider without anyone else knowing or caring.

So far, however I really like Fastmail. I've used them in the past and have spoken with a few people at the company and they seem like good people doing good things.

### Settling on Fastmail

Of course, there are a million email providers out there; how did I arrive at Fastmail? First, I have used Fastmail in the past on my own and for work while at [System76](https://system76.com). I enjoyed their web UI, an the company seems to be approaching things the right way.

I had also previously spoken with some people at Fastmail, including the CTO and COO. We were discussing how we could make Fastmail better integrate into elementary OS, and as a result of those early conversations we shipped native Fastmail account support in the Online Accounts settings of elementary OS.

I also like that Fastmail seems to be forward-thinking and when it comes to their tech stack—and they've done the hard work of pushing open standards like JMAP.

Other free email providers (like Yahoo) weren't a consideration for me; first, they're typically annoying with ads. Second, if you're not paying for your email service, then _someone_ is—and it's likely that it's with your data. That would kind of defeat the whole point of de-Googling.

I have heard of and looked into other providers, especially encrypted players like ProtonMail or Tutanota. However, I didn’t hear great things about their web UIs, and the requirement to use their apps (and not an email client of my choice) or a bridge running all the time in the background kind of killed my enthusiasm. I do think all communication should be end-to-end encrypted, but email isn't—and I think trying to bolt it on top is futile without industry-wide coordination. Since the vast, vast majority (probably over 99%) of my email usage is incoming mail from third party companies, end-to-end encryption isn't really relevant here. If I want to talk to someone privately, I will use an encrypted chat like Signal.

I am currently happy enough with Fastmail to pay them, point my email domains at them, and switch over wholesale. Hopefully this feeling lasts, and I'll be done moving email around for quite some time!

### Other Thoughts

These aren't strictly related to switching from Gmail to Fastmail, but doing so is a natural time to think about how you use email and shift some habits. However, you can start doing these things today without making the switch!

#### Wildcard Addresses

Something I set up a long time ago (when I set up my email domain) was wildcard email addresses. While you can do something similar with Gmail's `+label` syntax (so `yourname+label@gmail.com` automatically gets a label called `label` applied), owning your own domain means you can make it even cleaner.

With some domain providers (like Namecheap), you can set up a free "catch-all" or wildcard email forwarder, and that's probably the easiest route. If you do end up using Fastmail with a custom domain, you can also set up a `*@example.com` alias to do the same.

So, why a wildcard? It's a way you can know how people got your email address and easily combat spam. Say for example you want a coupon for a company called "Buy 'n' Large", but the only option to get it is to provide your email address. Just give them `bnl@example.com`, get your coupon, and carry on as usual. You can even unsubscribe from whatever mailing list they put you on. But a few weeks later, you get a spam email from a company you don't have a relationship with, sent to your `bnl@` address. You can:

1. Know Buy 'n' Large sold your data
2. Make a simple rule to mark any messages sent to `bnl@` as spam and never see them again

As a bonus, if BnL aggregates their data with other sources, your `bnl@` address won't be easily combined with consumer profiles that other companies keep on you based on the email addresses you've provided them.

It might sound complicated, but it's pretty easy to do—and it opens up some handy possibilities.

#### Unsubscribe

I get so. much. mail. Most of it I actually signed up for at some point, but the vast majority of it is useless and causes undue stress. I don't need to know about every single sale every single company whose site I've ever visted is having; however, that's practically where I'm at.

As a rule, I've decided to unsubscribe from the vast majority of newsletters and marketing mails that come in to my new Fastmail account. Account-related stuff is fine, but I don't need that coupon (they almost always expire before I actually want to use them), I don't need to know about the latest sale (if I'm looking to buy something, I'm already looking out for a sale—and impulse buying is bad), and I don't really care about the latest curated photos (sorry, Unsplash).

Newsletters from real humans that aren't trying to sell me things might be an exception… but so far I've not actually come across any of those. 🙃️

If you're feeling overwhelmed by email, I encourage you to start gratuitously unsubscribing. It's so satisfying.

### Fastmail Referral

I didn't write this blog just for the referral (I started before I realized it was a thing!), but I might as well share. Existing Fastmail customers get a [referral link](https://ref.fm/u23318928) that gives anyone 10% off their first year, and then a tiny portion of that gets removed from the price of my subscrition. It's a way I get credit for pointing you towards an ethical email provider, and you can save money! Win/win.

<div style="text-align: center;" markdown="1">
[Sign Up for Fastmail](https://ref.fm/u23318928){: class="button"}
</div>

---

<small>This is part of a series on De-Googling. See the intro [here](/blog/de-googling).</small>
