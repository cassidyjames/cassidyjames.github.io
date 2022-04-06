---
title: AppCenter for Everyone Remote Sprint
description: What we accomplished despite postponing the in-person sprint
author: cassidyjames
image: /images/appcenter-for-everyone/card@2x.png
tags:
 - appcenter
 - event

facebook: https://www.facebook.com/elementaryos/posts/3143251365706671
mastodon: https://mastodon.social/@elementary/103903208102630734
reddit: https://www.reddit.com/r/elementaryos/comments/fquub0/appcenter_for_everyone_remote_sprint_elementary/
twitter: https://twitter.com/elementary/status/1244039116980998144
---

While we ended up postponing the in-person [AppCenter for Everyone](/appcenter-for-everyone) sprint due to concerns around COVID-19, we did still get together remotely to get started on some of the work. We're a completely remote company and open source project to begin with, so we're used to working remotely; however, we had planned to get together in person to knock out more rapid whiteboarding, prototyping, and discussion that we've found is only at its most effective when people are in the same timezone and physical location for a few days.

## What We Worked On

Over the course of the attempted remote sprint, it became increasingly clear that for a product of this complexity, getting all of the stake holders in the same place and time is an absolute necessity. Due to issues with time zones, an inability to rapidly diagram or sketch collaboratively, and the general friction that comes with lag on a conference call between people on different continents, there were several times where we spent hours in the wrong direction. Unfortunately, it felt like a lot of individual pieces of work were thrown out due to evolving requirements and discoveries during the remote sprint. While that's typical _to an extent_ with any sprint, it felt like the remote aspect made it especially true this time around.

We did learn and think through things, though, and we have a clearer picture of the path to take from here. But we're looking forward to getting together in person and more productively working through these challenges.

### Design Track

Design-wise we individually sketched and whiteboarded, shared and worked through those designs, and ultimately prototyped a few components of the future AppCenter experience.

<figure class="half" markdown="1">
![Whiteboard sketches](/images/appcenter-for-everyone/whiteboard-sketch.jpg){: srcset="/images/appcenter-for-everyone/whiteboard-sketch@2x.jpg 2x"}
![Notebook sketch](/images/appcenter-for-everyone/notebook-sketch.jpg){: srcset="/images/appcenter-for-everyone/notebook-sketch@2x.jpg 2x"}
<figcaption>Rough sketches while working through Onboarding and OAuth flows</figcaption>
</figure>

One prototype branch addressed adding an account menu to the native AppCenter client along with app download history and links to the other places to manage your payment methods and online accounts. Another couple of branches explored embedding first a web-based OAuth flow and then a native OAuth flow for an elementary sync account (name still pending), which would power syncing your payment methods and purchase history between devices.

<figure class="half" markdown="1">
![AppCenter account menu](/images/appcenter-for-everyone/account-button.png){: srcset="/images/appcenter-for-everyone/account-button@2x.png 2x"}
![AppCenter app history](/images/appcenter-for-everyone/app-history.png)
![Onboarding sync sign in](/images/appcenter-for-everyone/sync-email.png){: srcset="/images/appcenter-for-everyone/sync-email@2x.png 2x"}
![Onboarding sync loading](/images/appcenter-for-everyone/sync-loading.png){: srcset="/images/appcenter-for-everyone/sync-loading@2x.png 2x"}
<figcaption>Prototype branches of AppCenter and Onboarding</figcaption>
</figure>

We also worked on a few branches for Online Accounts and the Wallet in System Settings to clean up the code and pave the way to these features. Even independently of our work on AppCenter, the substantial changes to Online Accounts should be a much smoother and more reliable workflow.

<figure class="half" markdown="1">
![Delete in Online Accounts](/images/appcenter-for-everyone/online-accounts-delete.png)
![Delete in Wallet](/images/appcenter-for-everyone/wallet-delete.png){: srcset="/images/appcenter-for-everyone/wallet-delete@2x.png 2x"}
<figcaption>New list management in Online Accounts and Wallet</figcaption>
</figure>

Our UX work in the Wallet has also lead to some thoughts around the way we manage lists of items in other parts of the operating system and we're hoping to see that work begin to trickle out soon.


### Web Track

In the beginning, a large part of our web team's goals was to investigate, understand, and communicate how all of the different web components fit together for a full Flatpak store: there's the Flatpak remote which stores and serves published apps, flat-manager which builds Flatpaks into that remote, linux-store-backend and linux-store-frontend which provide the web interface for sites like Flathub (and potentially appcenter.elementary.io), an account/authenticator web service which informs Flatpak of which apps you have previously purchased, and then the publishing dashboard where developers can submit their apps and view the status of those submissions.

In order to tie purchase history to an account that you can sign into on your computer, our web team worked on spinning up [an OAuth server](https://github.com/elementary/accounts) that could create a passwordless, email-link-based sign in, with fancy web sockets for a native, seamless login. We also threw together a [small prototyping project](https://github.com/elementary/accounts-prototype) so we could iterate on some web concepts quickly without spinning up a whole dynamic server.

We also built a [rough prototype web service mockup](https://github.com/davidmhewitt/elementary-account-api) to start hooking into the Flatpak Authenticator—even if much or all of this code is thrown away in the end, it was useful to begin hooking all the pieces together and understanding what each part needed to do.

### Desktop Track

On the desktop side of things, we started work on a [shared library for components](https://github.com/davidmhewitt/libelementary-account) that will exist in both the Flatpak Authenticator and the Wallet plug (plus anywhere else we might need it). We also started work on a branch of the [Authenticator](https://github.com/elementary/flatpak-authenticator) that puts the pieces together—handling logging into an OAuth account, adding and managing payment cards via Stripe, processing payments (including the developer/platform split), storing/fetching purchases, and authenticating the Flatpak downloads.

### Other Work

While prototyping, an issue with Valadoc cropped up that prevented some docs from loading properly. So as part of the sprint we found the root cause (a too-large build environment) and worked to resolve it and get Valadoc.org working smoothly again.

We also worked toward some elementary OS 6 goals, working with Mutter and Vala upstream to get some fixes and new bindings in. We continued our work porting more Files code from C to Vala, and investigated some Flatpak implications for both Mail and Online Accounts management. As of now, daily images are being built with the new installer workflow and the live environment works as expected. We're facing a partitioning failure during installation, but we're excited to be so close to delivering a private preview to campaign backers.

## What's Next

As soon as it is considered safe and appropriate, we do still plan to host an in-person sprint to accomplish the original AppCenter for Everyone goals. We'll share when we know more. While we'll still be working on some of those things in the meantime, we plan to pivot the main focus of our remote work to foundational pieces that will also help us ship elementary OS 6:

- Getting a first-party Flatpak remote up and running (which can eventually be the AppCenter remote as well)
- Continuing work on our elementary Flatpak SDK and Platform
- Starting to Flatpak our apps, starting with easier ones like Calculator
- Automating Flatpak builds as part of our CI and release pipeline
- Beginning Flatpak-focused developer documentation

### Backer Rewards

We're working towards fulfilling backer rewards from the Indiegogo campaign. So far, we've updated the [BACKERS.md file](https://github.com/elementary/appcenter/blob/master/BACKERS.md) to include any non-anonymous backers of the $10 tier or higher—as mentioned in [an earlier update](https://www.indiegogo.com/projects/appcenter-for-everyone#/updates/17), please double-check the file and message us through Indiegogo if you'd like your name changed or if you backed anonymously but would like your name included.

Our physical reward partner has informed us that they expect delays due to numerous shelter-in-place orders and reduced capacity at their fulfillment centers; consequently stickers, mugs, and hoodies may take a bit longer to produce and arrive than expected. We'll keep you updated via Indiegogo updates with the latest information as we receive it.

We have received test prints of both types of hoodies, and they do look great! The zip hoodie is a thinner, tighter fit material (more similar to a soft tee-shirt fabric), which makes it great for layering—especially in the spring and summer. Remember, if you did want to change the type or size of your hoodie, please message us on Indiegogo ASAP as we plan to begin fulfilling those orders soon. If you're unsure, check the [hoodie size chart we posted back on Feb 10](https://www.indiegogo.com/projects/appcenter-for-everyone#/updates/10).
