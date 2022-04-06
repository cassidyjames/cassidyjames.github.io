---
title: 'Switching from macOS: Open Source'
description: What exactly is Open Source about and why does it make elementary OS better?
author: cassidyjames
image: https://cdn-images-1.medium.com/max/256/0*Bebi8XYX_2GinLYy.png
tags:
 - switching-from-macos
 - open-source
  - evergreen
---

> So far in this five part series we’ve talked about [The Basics]({{ site.baseurl }}{% post_url 2016/2016-11-02-switching-from-macos-the-basics %}) of elementary OS (and how it compares to macOS), using elementary OS as a [Development Environment]({{ site.baseurl }}{% post_url 2016/2016-11-03-switching-from-macos-developer-environment %}), how to tackle [Creative Work]({{ site.baseurl }}{% post_url 2016/2016-11-04-switching-from-macos-creative-work %}) in elementary OS, and what [Hardware]({{ site.baseurl }}{% post_url 2016/2016-11-05-switching-from-macos-hardware %}) to run elementary OS on.

Today I wrap up with one of the greatest advantages of elementary OS over macOS: the fact that it’s Open Source.

## What is Open Source?

![](https://cdn-images-1.medium.com/max/256/0*Bebi8XYX_2GinLYy.png)

If you’re unfamiliar with open source (or just want a refresher), luckily we wrote about [what Open Source means](https://elementaryos.tumblr.com/post/152795861461/what-does-open-source-mean) back in 2013 and it’s just as relevant today. If you’re curious what Open Source software elementary OS builds from, we have a great [Open Source](https://elementary.io/open-source) page on our website.

With those prefaces out of the way, let’s dive in!

## Security & Privacy

First and foremost, Open Source software is often praised for its superior security and privacy over closed source software like macOS. When the source code is available to audit, anyone in the community — whether a security researcher, a concerned user, or an OEM shipping the OS on their hardware — can ensure the software is secure and not collecting or leaking personal information. If they find ways it could be improved, they can file a bug or even a pull request to improve it.

There’s also the advantage of crazy fast response to security disclosures; just look at Heartbleed: within hours of the disclosure, an update was pushed out to elementary users to fix the bug in SSL. This was possible because the OpenSSL code was open source and Canonical, the company that develops the Ubuntu core of elementary OS, could quickly and easily patch the code and deploy it.

## Improving elementary OS for You and Others

In a similar vein, if you have a specific bugfix, feature, or tweak that would benefit elementary OS as a whole, it’s actually possible to directly contribute that to elementary OS.

This is an incredible opportunity for third-party app developers. If your app could benefit from a system API or feature that’s not yet available, you can help write that feature into the OS. Your app is better for it (and you get the advantage of influencing its design), but all apps on the platform can benefit as well.

There’s also an advantage for more specialized installations of elementary OS. If you or your organization wanted, you could fork elementary OS for your specific use case. You could even redistribute it so long as it remains open source.

## Use the Source: Education & Reuse

As a third-party developer (or even just an interested user), you might be curious as to how a feature or design pattern in elementary OS was made. Instead of guessing or trying to reimplement it on your own, you can just look at the underlying source code for a definitive answer. While this may sound incredibly technical, it’s something we see developers do all the time. This also helps keep the UX on elementary OS more consistent as features are implemented the same way across apps instead of each app trying to reimplement the same experience in a slightly different way.

### Getting Involved

So I’ve shed some light on why elementary OS being Open Source is important, now what? Well, in true Open Source fashion, you can get involved!

First off, all of our desktop (OS and apps) code is available for audit and download on [GitHub](https://github.com/elementary), so feel free to get your hands dirty. We welcome issue reports, pull requests, and feature requests.

Our web and design teams also open source everything they do over at [github.com/elementary](https://github.com/elementary). If you’re experienced in web development, graphic design, or UX, feel free to stop by and contribute. Just like our desktop code, we are always happy to receive issues, feature requests, and pull requests on our open source projects.

If you’re not a developer or designer but still want to help make elementary OS better, there’s always the option of [helping fund](https://elementary.io/get-involved#funding) it. We’re funded 100% by our users and fans. With their support, we’ve been able to grow from a small group of passionate volunteers into a tiny company. Every little bit of help is one step closer to hiring another full-time developer.

For more information on getting involved, check out the appropriately-named [Get Involved](https://elementary.io/get-involved) page on our website!

