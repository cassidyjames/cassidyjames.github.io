---
title: Rebuilding elementary OS
description: Our road to a better release process, automated builds, and more
author: cassidyjames
image: /images/rebuilding-elementary-os/header_1600.jpg

tags:
  - github
  - infrastructure
  - juno

sponsor:
  name: System76
  link: https://s76.co/ElementarySponsorship
  image: /images/sponsors/system76.png
  image-2x: /images/sponsors/system76@2x.png
  hook: "They make killer Linux laptops, desktops, and servers. If you're looking for a new computer, head their way!"

facebook: https://www.facebook.com/elementaryos/posts/2812922722072872
mastodon: https://mastodon.social/@elementary/103087792838553220
reddit: https://www.reddit.com/r/elementaryos/comments/ds7008/rebuilding_elementary_os_elementary_blog/
twitter: https://twitter.com/elementary/status/1191852661085261824
---

<figure class="full-bleed" markdown="1">
![Robot playing a keyboard]({{ site.baseurl }}/images/rebuilding-elementary-os/header_2560.jpg)
</figure>

If you've been following elementary OS, your top thought right now is probably, “Where’s 5.1?” If you've been following elementary OS for quite some time, you're _also_ probably familiar with our unofficial, “When it's ready” release schedule—we don't announce things until we're absolutely sure it's going to ship, and we don't release until we're very confident in the end result—even if that means we take a bit longer than people would like.

This work on our 5.1 release has been particularly difficult and lengthy. We ambitiously set the major milestone of completely reworking how the OS is both built by us and installed by users for our 5.1 release, and consequently there have been more roadblocks than expected. We're working through them, but we understand that people are getting antsy. That's partially on us; perhaps we should have had more discretion with sharing our goals, but we're very excited about this upcoming release and it's just been hard to keep quiet about it.

## The Scope of 5.1

In an effort to get 5.1 out to users more quickly, we've decided to bump the new installer to a future release. Too many issues remain with the integration right now, and the existing Ubiquity installer—while perhaps a bit long in the tooth—continues to work as it always has. This means 5.1 will be focused around five key areas:

1. A brand new Greeter and Onboarding experience
2. Flatpak support with Sideload and AppCenter
3. Major updates around accessibility and System Settings
4. Iterative improvements across several apps
5. The latest hardware enablement and support

Under the hood, 5.1 will also bring an entirely new process for building ISOs that is faster, better documented, and more reproducible.

<aside markdown="1">
>5.1 will be a substantial update that existing and new users alike will love
</aside>

We've been working on these updates for the past year, and we're confident 5.1 will be a substantial update that existing and new users alike will love. We'll have the usual detailed release notes here on the blog once it's officially released. Since elementary OS 5 Juno is effectively rolling, many of these updates have actually already rolled out to users, and users of 5.0 will be upgraded to 5.1. As mentioned in the August updates, the new HWE can be installed manually on existing installs, but will be included by default with new 5.1 installs.

## Documenting Processes

One major hurdle with all of this work is that there was a substantial lack of documentation around our ISO building and release process. Consequently, only one person was responsible for or even knowledgeable about how we actually bake elementary OS into the final product we deliver to users. That was unacceptable, and we're well on our way to fixing it.

### Package Releases

Every piece of a software update for elementary OS is delivered to users’ devices as a “package” of compiled code. When we feel a specific component is ready to be sent out as an update, we update AppData and Debian packaging and create a “release” on GitHub; that snapshot of the code is then pulled in, built, and placed into a repository by Launchpad; From there, user's devices regularly query that repository for available updates and, when you're ready, the package is finally downloaded and installed.

The whole process is a bit complex and was never properly documented, so we started there. As we discussed and documented it, we realized how much was one-off human labor that could be largely automated. So at the same time, we came up with and documented a more ideal process that uses our CI integrations to create the right files, tag the release, and trigger builds. This new process is what now lives on the [OS wiki]. There's still a bit of human interaction, but it's much less work and fits into our regular development workflow much better.

An initial version of this CI work has been completed, and we've starting using it since the October updates in production for package releases. Check the [OS wiki] for the full rundown, but here's a summarized version of the process when we're ready to send out a release:

1. **We create a release PR** that gets reviewed, tested, and approved. Since we also review, test, and approve every PR that goes into master (and thus the daily repo), this PR review is relatively easy. But it is required as a sanity check and an additional line of defense against regressions.

2. **CI does a bunch of magic**, including generating a Debian changelog, creating the actual GitHub release, and merging the release into a protected stable branch.

3. **Launchpad builds the package** from the stable branch and pushes that package into the stable repo. AppCenter on users' devices regularly checks this repo and prompts users to update when there are new packages.

For this process to be the most effective, we also have a few standards we enforce during regular development:

- Regular (non-release) PRs add the relevant changes into the AppData and screenshots. This means there's less work at release time, but also gives us an opportunity to get release notes translated before the release.

- PRs are squash-merged into master, and the commit message is in the format of `Class: Brief description of changes` since this is what is used to build the Debian changelog. This is also just good practice to make the commit log more readable.

Again, this is highly summarized, and the full details are at the [OS wiki]. If you're into continuous integration, continuous delivery, release management, GitHub Actions, etc. you'll probably enjoy checking that out.

### ISO Building

If you thought package releases were complex, ISO building is on a whole other level. When we want to make a downloadable version of elementary OS, we use a collection of scripts to build the OS from Debian Live Build, packages from the Ubuntu repositories, and packages from our Launchpad repos. Some packages are built by taking the upstream source code and applying our own patches, since the original code was designed for Ubuntu and not elementary OS. Once the OS is built, the resulting ISO must then be tested to ensure it: boots across a variety of hardware; installs successfully BIOS, UEFI, Secure Boot, with and without Internet, etc.; and ends up with a correct install.

This process had no real documentation or visibility, so we've been working on documenting and moving the ISO building process to GitHub CI as well. Before, there were disparate scripts and lengthy docs scattered about from nearly a decade of building elementary OS, but no definitive, “this is how we do it today.” We're happy to be working with dedicated volunteers and contributors like [Keli Grubb](https://github.com/kgrubb), [David Hewitt](https://github.com/davidmhewitt), and [Corentin Noël](https://github.com/tintou) to get things into shape.

A functional ISO building process has been documented and is being tested in the [OS repo on GitHub][os repo]. We're still working out some kinks, but getting this information documented and public has given us a baseline to build from.

### Other Automation

While working on these new automated processes, we also built [a few GitHub Actions](https://github.com/elementary/actions) for ourselves and others to use in their projects. [Vala Lint](https://github.com/elementary/actions/blob/master/vala-lint/README.md) ensures each repo's code passes our strict code style guidelines, the [Release](https://github.com/elementary/actions/blob/master/release/README.md) action is what automates creating GitHub Releases and bumping versions, and a new [Gettext Template](https://github.com/elementary/actions/blob/master/gettext-template/README.md) action automates the process of updating POT and PO templates when there are translatable string changes.

Each of these actions solves a need for us internally at elementary, but they're also super helpful for our third-party app ecosystem! As we further automate processes, we'll think about how we can use GitHub Actions to make things even better.

## What's Next

Now that we have a baseline for both package releases and ISO builds, we're testing them and starting to use them in production. 5.1 will prominently feature this work, and be released once we are confident it is robust and reliable. Updates to 5.0 in the meantime have also begun to use the updated package release process.

If you're interested in getting involved in this work, we highly recommend checking out the [OS repo] and the [package release process on the wiki][os wiki]. While things are evolving and iterating rapidly, we're always happy for folks to join in and help make elementary OS even better.

[OS repo]: https://github.com/elementary/os/
[OS wiki]: https://github.com/elementary/os/wiki/Release-Process
