---
title: "We’re Now Hosting Valadoc.org"
description:
author: danrabbit
date: 2016-11-12T18:51:52.760Z
image: /images/were-now-hosting-valadoc-org/1fubJn9ICD-i_Yi4FBPlJww.png
tags:
  - "devs"
  - "vala"
---

About a year ago, we contributed a major visual overhaul to Valadoc.org. This is an essential tool for elementary OS development. Good docs are important both for new and old developers. However, we’ve recently seen some trouble with the server. There has been downtime and, more importantly, search stopped working completely. But, with a little bit of elbow grease, we’ve addressed the situation.

We’ve seen a number of Valadoc.org mirrors sprout up, all with their own problems as well (namely, links to specific pages broken, which is also a huge issue). Instead of creating our own mirror, we reached out to Florian Brosch (who runs Valadoc.org) and started drafting a way to move forward that keeps up time of the website high and ensures that important features that were broken got fixed.

<figure markdown="1">
![](/images/were-now-hosting-valadoc-org/1fubJn9ICD-i_Yi4FBPlJww.png)
</figure>

After a brief incubation period, we’re now officially serving Valadoc.org from elementary servers hosted by [Digital Ocean](https://www.digitalocean.com/?refcode=b67e9da7c9a3&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=CopyPaste). Deployment is automated with Ansible just like our other websites and you can rest assured that we’ll take the same care with this new addition to the family.

Although Valadoc.org doesn’t collect, read, accept, or store any personal information, we’re still planning to implement HTTPS/TLS with Let’s Encrypt very soon. If you’re curious, you can read more about our web architecture in [our previous blog post](https://medium.com/elementaryos/whats-web-team-up-to-c8ff73d637e3).

We’ve also put together a new [GitHub organization](https://github.com/vala-lang/valadoc-org) to help maintain Valadoc.org. Florian is still the owner of this organization and will still have the ability to lead its development path. This is an independent organization that elementary is proud to contribute to.

Thanks to some quick work by Blake, search is working again on Valadoc.org. While addressing an issue with broken link redirects, Lewis also took the time to make sure that links to specific pages of documentation were easier to read and write. But don’t worry, the old style links still work, so anything pointing to Valadoc.org won’t be broken:

Old: [http://www.valadoc.org/#!api=gtk+-3.0/Gtk.Label](http://www.valadoc.org/#!api=gtk+-3.0/Gtk.Label)

New: [http://valadoc.org/gtk+-3.0/Gtk.Label](http://valadoc.org/gtk+-3.0/Gtk.Label)

We’re very excited to make sure that Valadoc.org is still the best resource for Vala documentation. If you [visit the site](https://valadoc.org), you’ll see that it now provides links to several resources upfront, and we plan to continue to make this landing page more and more useful as time goes on.

If you’d like to get involved in Valadoc.org development, you can [fork the website on GitHub](https://github.com/vala-lang/valadoc-org). We look forward to your pull requests!
