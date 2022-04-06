---
title: Privacy and elementary OS
description: How we protect your data from ourselves and others
date: '2019-01-09T16:21:00.830Z'
author: cassidyjames
image: https://cdn-images-1.medium.com/max/1600/1*A6acK8YdY-_VS414hveMlw.jpeg
tags:
  - privacy
  - tattle-tale
  - appcenter
  - funding
  - evergreen
---

With the [release of elementary OS 5 Juno](https://medium.com/@cassidyjames/471dfdedc7b3) still fresh, I wanted to take a moment and talk about our continued privacy focus with elementary OS. We’ve always been fanatical about respecting your privacy, but with Juno, we’ve added some awesome new features that have brought it to the forefront of my mind.

And with current trends in consumer technology, I feel it’s important to plant our feet in the ground.

## Protecting Your Data from Us

First, elementary actively protects your data from ourselves. We believe respecting your privacy is the ethical thing to do; **users have a fundamental right to the utmost privacy, even from companies and products they trust.** And frankly, we don’t want the responsibility of handling your data or the possibility of being compelled by a nation state or other entity to give it up. So we just don’t collect it. _At all._

**elementary OS does not send _any_ private data back to elementary.** We don’t collect stats when you install it, we don’t collect usage analytics, and we don’t snoop on what you’re typing. That _should_ be the status quo for software, but unfortunately for users and their privacy, it’s not.

Some people coming from this world of vacuuming up data ask us: how does elementary know what features to develop, which areas to focus on, how many daily active users we have? The answers vary, but generally: we actively engage with users, we have a vision for where we’re going, and… why do we need to know an exact number of daily active users again?

Strictly data-driven design actively trades users’ privacy for a ton of data. That data is then used to try and figure out what to work on, what features to add or drop, and where to spend resources. However, the data is only as good as those who are using it, and too often these troves of data can be used simply to push a pre-existing agenda. Not to mention opening the possibility of data leaks or a growing target for malicious or nation-backed hackers.

> We rely on having experienced designers, architects, and engineers who have a shared vision.

<figure class="third" markdown="1">
![Dan, Allen, and Avi at UDS-P](https://cdn-images-1.medium.com/max/1600/1*wP5nwsSw7XJAonuua_GsgQ.jpeg)
![Whiteboard sketch of AppCenter from a hackfest](https://cdn-images-1.medium.com/max/1600/1*0Nyo-b-x_LVX7Z8pCvM9cw.jpeg)
![Blake and Cassidy at a hackfest](https://cdn-images-1.medium.com/max/1600/1*QOFrbePqu7fYV0SzInQogw.jpeg)
![Sketches of potential Music layouts](https://cdn-images-1.medium.com/max/1600/1*A6acK8YdY-_VS414hveMlw.jpeg)
![Jasper and Cassidy at a whiteboard at GNOME WestCoast](https://cdn-images-1.medium.com/max/1600/1*vXxG3XVQlMmIgE1f9RT4uA.jpeg)
![Nathan, Cody, and Dan at a hackfest](https://cdn-images-1.medium.com/max/1600/1*7TTCul7h6dIJ1NIuGb7lWA.jpeg)
![Dan and Jeremy at a hackfest](https://cdn-images-1.medium.com/max/1600/1*d4yU2CG1O2tGe4U89UDOlg.jpeg)
![Blake, Dan, and Felipe at a hackfest](https://cdn-images-1.medium.com/max/1600/1*CJl7NLHdH6CRyG3JsClHRA.jpeg)
![Carl, Cassidy, Dan, David, Sarah, Jeremy, and Ian at a hackfest](https://cdn-images-1.medium.com/max/1600/1*3UGR3yKcUeyERvrtp_kHPg.jpeg)
</figcaption>Collaborating and iterating over the years</figcaption>
</figure>

Instead, we rely on having experienced designers, architects, and engineers who have a shared vision. This vision is not always concrete; it’s informed by engaging with our users and customers, listening to feedback, working with partners, and observing the industry at large. But we simply do not need to trade users’ privacy for this vision.

Is elementary against responsible, privacy-first collection of useful data? Absolutely not. But doing that is _extremely_ hard, and something that even the largest monoliths in tech are struggling with. As a smaller company, it’s simply more responsible for elementary to not dabble here at all. If and when we are able to develop an open, peer reviewed, industry-respected method of responsible and privacy-first telemetry, we may consider doing so. But today is not that day.

## Protecting Your Data from Others

Not collecting data is one thing, but we also actively protect your privacy from others. elementary OS sports several privacy-first features to help with this:

### Tattle-Tale

elementary OS helps you keep tabs on what apps on your device are up to. When an app is using your microphone (whether you’re recording a memo, or something is snooping on you), we display a microphone indicator on the top Panel to let you know. And if you want, you can just flip the switch to instantly mute it from any apps.

![Sound indicator](https://cdn-images-1.medium.com/max/658/1*jwrRA0HByaZICvVdFs6EOw@2x.png)

If an app is using a lot of energy, we tell you in your power indicator. This makes sense for intense apps like games or when you’re processing a lot of data, but it can be a sign that something’s not quite right if you see a background app or something you don’t even know is running pop up there.

![Power indicator](https://cdn-images-1.medium.com/max/1200/1*SDCSNUc2qVan_gb1B50NGg@2x.png)

Tattle-taling in elementary OS is a way we can enable great features while keeping you in control of your own device. It’s also something we plan to expand even more in future updates, so stay tuned.

### Location Services

![Location Services dialog](https://cdn-images-1.medium.com/max/980/1*UMbex49_v54YUvWxno5rUw@2x.png)

Location-using apps submitted to AppCenter are required to use the system-wide GeoClue service for those location features. This means when an app tries to query your location, we automatically show you a prompt telling you which app and how precise of a location it’s asking for. You can choose to allow or deny.

![Location Services settings](https://cdn-images-1.medium.com/max/1752/1*DJeTcZK6sYZvnIRUVS6YLA@2x.png)

With the Location Services settings in Security & Privacy, you can always disable Location Services for the whole system or just on a per-app basis.

### Housekeeping

![Housekeeping settings](https://cdn-images-1.medium.com/max/1546/1*FEuM2SZVRUZTXblCOdQedw@2x.png)

elementary OS can automatically keep your temporary and trashed files tidied up. Not only does this keep your device’s storage free, it can help ensure your private data doesn’t come back to haunt you.

### AppCenter Curation

Last but perhaps most importantly, the entire model of elementary AppCenter is designed to keep users safe. **Every single app submitted to AppCenter for elementary OS is open source and goes through a rigorous testing process.** This includes a suite of automated tests against the source code and the built binaries. Binaries are always reproducibly-built on elementary infrastructure from source, ensuring what users get is exactly what is found in the public code repo. And once an app is passing the automated testing process, a human reviews every single submission — including updates — to ensure the app does what it says, has accurate rating and release data, and follows platform requirements for security and privacy.

![AppCenter](https://cdn-images-1.medium.com/max/2742/1*pCf4g--_ZTPp48VB4ojGmQ@2x.png)

This whole process is essential to ensure user privacy is protected from third parties who—whether accidentally or maliciously—might otherwise put it at risk.

## Open Source

elementary OS—and everything else we do—has always been completely open source, but it’s more important than ever when it comes to users’ privacy. Software _must_ be open, auditable, and verifiable if it claims to respect your data and privacy. Companies that claim to respect your privacy and yet keep their products locked down and proprietary are not demonstrating respect for their users or confidence in their claims. Keep that in mind the next time you see a massive, proprietary tech giant buying ads about “privacy.”

## You Are Not the Product

Lastly, I’d like to remind you how we can have this stance: our users are not the product of elementary. We sell a pay-what-you-want OS and facilitate the sale of pay-what-you-want apps. We don’t make advertising deals, we don’t collect or sell data, and we aren’t funded by massive tech giants. We have a direct relationship with our customers and users.

Daniel has written about this a bit more in depth:

<div>
{% assign post = site.posts | where:"slug", "you-are-not-the-product" | first %}
{% include featured.html post=post %}
</div>

By ensuring our relationship and funding model is clear and direct with users, we eliminate all business incentives to harvest data. And that’s critical in order to actually respect and defend your privacy.

