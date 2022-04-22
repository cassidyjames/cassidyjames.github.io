---
title: "What’s Web Team Up To?"
description: "Everyone knows that elementary has a dedicated team cranking out new features and making fixes on desktop, but you might not know that we also have a very prolific web team. Blake Kostner and Lewis Goddard have both been working hard to bring some big updates to our web presence. Security and stability improvements, little refinements, improvements to the development workflow, and there’s even a fun new feature on the way!"
author: DanielFore
date: 2016-11-12T18:59:38.261Z
image: /assets/images/whats-web-team-up-to/1WMMZENkwvWxr3CUJNATwig.png
tags:
  - "continuous-integration"
  - "devops"
  - "elementary-os"
  - "linux"
  - "open-source"
---

### Sentry.io

Normally, we track issues on our website by waiting for people to file reports in GitHub. This works pretty well for major issues that affect a lot of people, but sometimes issues slip through the cracks because they are either not reported at all or don’t contain the right information we need to fix them.

<figure markdown="1">
![](/assets/images/whats-web-team-up-to/1WMMZENkwvWxr3CUJNATwig.png)
</figure>

[Sentry.io](https://sentry.io/welcome/) is a small program that runs in the background on our website and in your browser that watches for errors and automatically reports them. Since we started using it, we’ve made a number of fixes to things like link-scrolling, cache maintenance, and some configuration loading issues that nudged us to make the decision to move to HTTPS everywhere.

### HTTPS Everywhere

elementary.io is now fully served over HTTPS for every one of our web pages. Our transactions through Stripe have always been served over HTTPS and we’ve previously made the rest of our website available over HTTPS through [Cloudflare](https://www.cloudflare.com/), but now we have all of our servers using [Let’s Encrypt](https://letsencrypt.org/) all the time, ensuring every part of the connection is secure.

This makes it harder for a “[man in the middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)” to try and spoof our website, ensuring that important information (like our download checksums) is accurate and trusted and our network is up to date on modern security practice. We’re excited to be part of making the web a more trusted place.

### Fully Hosted on DigitalOcean

<figure markdown="1">
![](/assets/images/whats-web-team-up-to/1YkzhzmY7G8kkhn6sXgdcZw.png)
</figure>

Previously we were using a combination of Linode and Digital Ocean servers to host our website and CDN. We have since migrated all of our servers to [DigitalOcean](https://www.digitalocean.com/?refcode=b67e9da7c9a3&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=CopyPaste), and have taken this time to automate our server deployment with Ansible (more information about that later on). Moving all of our servers to Digital Ocean makes managing them easier for our web team and reduces our overhead costs. Digital Ocean are actually the second-largest webhost worldwide now, after Amazon, and we’ve been really happy serving downloads of elementary OS Loki from their servers.

### Automated Server Deployment

[Ansible](https://www.ansible.com/) is a server automation tool maintained by RedHat. It enables us to provision and deploy new, production servers from peer-reviewable code. It also allows us to easily issue security updates to all of our servers. This is a significant improvement over manually configuring each server by hand and saves our infrastructure & web teams a ton of work when deploying new test servers while also maintaining our production ones. When I poked him about Ansible, Blake said, “I’m really proud of the work we have been doing. While it still in it’s early stages, it is a big step to make elementary technically sustainable”.

This is a significant improvement over manually configuring each server by hand and saves our infrastructure & web teams a ton of work when deploying new test servers while also maintaining our production ones. When I poked him about Ansible, Blake said,
> # “I’m really proud of the work we have been doing. While it still in it’s early stages, it is a big step to make elementary technically sustainable”.

### Development Workflow

One of the big things we’ve been focusing on is automated testing of our GitHub repositories. Previously we had a private Jenkins setup for testing and deploying our website. It was very resource intensive and a little unreliable, so I’m happy to say we have transitioned to [Travis CI](https://travis-ci.org/) for testing, and a small node.js script for deploying. We now run CSS, Javascript, and PHP linting, and check translations for every pull request to our website.

We’ve also introduced [webpack](https://webpack.github.io/) to build our static website assets. We’re using [PostCSS](http://postcss.org/) and [cssnext](http://cssnext.io/) to ensure that we can develop with new CSS techniques while maintaining compatibility with most web browsers. We’ve also introduced [babel](https://babeljs.io/) for building our JavaScript files, which lets us use new [ES6 features](http://es6-features.org/) for cleaner code. It also bundles files for us, so we can split up our scripts into more manageable pieces instead of using huge monolithic files. This is all part of an ongoing [milestone](https://github.com/elementary/website/projects/1) we’ve set up to simplify and clean our website code base.

### What Does It All Mean?

If you’ve had a little trouble keeping up with all the technical jargon, rest assured that what it comes down to is a faster, more reliable, more secure elementary.io. You’ll continue to notice little improvements like an improved download dialog, updated documentation, oh and there’s one more thing: Lewis has been working on a way to keep track of average payments and show them on our homepage in a fun and competitive way.

He’s been poking at the data for a little while now and says, “I quite like that our average payments system for comparative points is detecting the OS properly now. It’s quickly falling in like with other pay-what-you-want things like Humble Bundle, where macOS users pay a little more than Linux or Windows users do. As a data-nerd, this is cool to see”. We’re excited to roll this feature out soon so you can see the data as well and help influence it ;)

### Thanks Again to Our Supporters

As always, we want to say thank you to our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and [Patreon](https://www.patreon.com/elementary), as well as the folks [contributing through PayPal](https://elementary.io/get-involved#funding) and of course everyone who purchased their copy of elementary OS. It’s because of your recurring contributions that we’ve been able to grow and continue to deliver elementary OS and this great website that supports it.

Don’t forget that our website is open source! If you’re a web developer or aspire to be one, we could use your help. You can [fork our website on GitHub](https://github.com/elementary/website) and we look forward to seeing your pull requests :D