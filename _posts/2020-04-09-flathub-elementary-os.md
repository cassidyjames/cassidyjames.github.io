---
title: Flathub on elementary OS
redirect_from: /flathub
---

<small>**Note**: this post contains some future-thinking from me, and doesn't necessarily match up with any plans or thoughts of elementary as a whole. There's a reason it's on my personal blog. 😉️</small>

As a co-founder of elementary, I'm obviously extremely invested in the platform, our open source projects, and keeping it all sustainable so we can continue to deliver high-quality software to people that enables them to do what they want with their hardware.

### AppCenter

That's why I'm all-in on AppCenter, our pay-what-you-want app store that is delivering high-quality open source apps to users—and getting the developers of those apps paid. There are a few core tenents that make AppCenter what it is:

- All apps are open source
- Apps are designed specifically for elementary OS
- elementary reviews and approves app submissions and updates
- Developers can easily get paid for their apps

This unique combination of tenents has made AppCenter highly regarded—both by our users and within the larger desktop Linux ecosystem. And we will continue to deliver the high quality, curated experience our users have come to expect from us via AppCenter.

However, I'm also a realist: not every app a user wants (or even needs, i.e. for their education or job) is going to be specifically designed for elementary OS. And we're a relatively small enough platform—even with millions of OS downloads and estimated hundreds of thousands of regular users—that we don't have the pull to change that in the near-term.

Luckily for elementary, there's an effort from across the desktop Linux ecosystem that is aiming to solve this: Flatpak.

### Flatpak

Flatpak is a modern app distribution format that is being developed and supported by almost all major Linux desktops. It's poised to solve a few app distribution issues for these ISVs:

- Apps can be built with Flatpak and then run on any modern Linux desktop
- Apps are containerized so they are safer to use, even if the app might not be open source and auditable
- Developers can target a known-good SDK version and their app will function in perpetuity, regardless of underlying OS changes or updates
- ISVs can host their own repository of apps if they so choose, managing access as they see fit

I'm all-in on Flatpak, and we've spent significant time building Flatpak into elementary OS under the hood so users can install these apps. We've built Flatpak into AppCenter so that available apps and updates are where users expect. We've built a tool called Sideload into elementary OS to make installing Flatpaks from third-party sources a seamless experience. We're also working to rebuild the AppCenter backend around Flatpak so we get some of these benefits even for apps that are built specifically for elementary OS. But there's one piece of the puzzle that users need to actually fully solve the software availability issue: a centralized method of discovery.

### Flathub

That's where Flathub comes in. Flathub is a centralized Flatpak "remote" where developers can submit their apps directly. A huge benefit of the design of Flatpak itself is that it is decentralized by nature, meaning elementary OS can spin up an AppCenter Flatpak remote and deliver an equal experience to anyone else—but for cross-desktop apps that are intended to run on any Linux-based OS, Flathub is a great solution. Flathub is run by folks from Red Hat, Endless, GNOME, KDE, and more. And it's not officially affiliated with or controlled by any singular company or open source project other than Flathub itself.

If you're building apps for elementary OS, following our platform guidelines and Human Interface Guidelines, by all means, AppCenter is the perfect fit for distributing your app—and as of today, it's the only app store on Linux I'm aware of that enables developers to get paid for their apps. In the future, we even plan to make AppCenter apps available to other desktops via Flatpak.

But if you're building something like an Electron app or anything proprietary, Flathub is a perfect place to submit your app. And if you're a user looking to get apps other than the ones made specifically for elementary OS, Flathub is where we'll send you every time.

### Using Flathub on elementary OS today

Since Flatpak is built into elementary OS, installing an app from Flathub is pretty straightforward:

1. Head to [Flathub.org](https://flathub.org)
2. Find an app
3. Hit the Install button

At that point (or once you open the downloaded file, depending on your browser), Sideload will pop open and show you some information about the app you're about to install. If you agree and choose to proceed, Sideload will install the app—plus, it adds the Flathub remote under-the-hood to ensure you get updates. If it's your first Flatpak install, you might need to restart your device to get everything to show up as expected (we expect that to be resolved once we begin shipping Flatpak apps by default on elementary OS).

Since the Flathub remote is now added, you can head into AppCenter to search for and install any additional apps from Flathub—no browsing the website and Sideloading necessary.

We've been asked by users and Flathub contributors alike: why not just include Flathub in elementary OS out of the box? There are a few reasons:

1. **For most users and most app installations, we want to be directing people to the curated apps in AppCenter.** These have been designed to work on elementary OS, follow its design patterns, etc.—plus, we've actually run both automated and human reviews on these apps to ensure a good experience. Including Flathub out of the box could undermine our efforts here by muddying which apps we recommend most users install.

2. **Flathub's security and review policies are unclear.** While we run automated tests and human review every single app submission and update, it's not clear how much enforcement and review Flathub does. Including Flathub as a software source out of the box would mean we would be relying on their policies to keep our users safe.

3. **Flathub's stance for submitting third-party apps can be problematic.** Flathub has a lot of apps, but many of them are not submitted (or even supported) by the original app developers. We believe app developers should be in control of their app distribution, and if someone finds an app called "MakeBelieve" in AppCenter, they should be confident it is coming from the MakeBelieve developers.

4. **Apps cannot be fully sandboxed on elementary OS today**, meaning we would need to rely on the review and approval of Flathub to ensure apps aren't doing anything nasty—intentionally or accidentally.

For users who know about Flathub and go out of their way to install apps from there, we're committed to ensuring it all works. But we don't feel confident adding it as a software source out of the box.

### A Potential Future?

Some of the above concerns have begun to be alleviated from the client-side in elementary OS.

Today, AppCenter separates non-curated apps (i.e. the ones coming from the Ubuntu repositories) out and sorts them below curated apps. Some day we might make the distinction even more clear. When you add a non-curated Flatpak remote like Flathub, those apps are sorted along with other non-curated ones. Theoretically, adding Flathub out of the box would be similar to having the Ubuntu repositories where they're deprioritized, but still more easily available for those who want them.

Similarly, we already provide pretty clear disclosure and warnings about the nature of installing non-curated apps: these apps haven't been reviewed or approved by elementary, they might not be provided by the original developers, they might not get updates, etc. We could combine this with information we get from apps' appstream data (assuming Flathub reviews and approves it) and the permissions the Flatpak is requesting to have even more precise disclosure.

Given this, I _personally_ could see a future where Flathub was added out-of-the-box on elementary OS as a way to fill in those non-curated app gaps, with even more clear separation from curated apps and more precise disclosure of the implications of installing them. Perhaps it would require elementary OS migrating entirely to Wayland first—which is a goal, but seems to still be a ways off. Going even further, I could see a future where we add Flathub out of the box and remove apps from the Ubuntu repositories entirely—but perhaps that's a bit more cloudy in my imagination. 😉️

---

<small markdown="1">This post contains the personal thoughts of me (Cassidy James Blaede), and doesn't necessarily represent any official stance of elementary, GNOME, Flatpak, or Flathub.</small>
