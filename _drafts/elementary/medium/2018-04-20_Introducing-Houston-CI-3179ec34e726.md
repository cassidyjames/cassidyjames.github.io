---
title: Introducing Houston CI
description: Continuous validation testing for AppCenter apps
date: '2018-04-20T02:39:20.559Z'
categories: []
keywords: []
slug: /@DanielFore/introducing-houston-ci-3179ec34e726
---

![Dogfooding Houston CI on elementary core apps](https://cdn-images-1.medium.com/max/800/1*BXWtlAR-1MK750SRVtFlZw@2x.png)
Dogfooding Houston CI on elementary core apps

In our previous post about [Juno platform goals](https://medium.com/elementaryos/building-the-next-generation-of-apps-81234cc21a8a), we talked a little bit about continuous integration testing (CI) and a project we’ve been working on to bring the suite of automated tests we run for AppCenter Dashboard to a continuous format that anyone can use. Today, I’m proud to announce that Houston CI is ready for wider testing!

### What exactly is “Houston CI”?

Houston is the code name for AppCenter Dashboard, the online service component of AppCenter. When you submit your app for publishing in AppCenter, a suite of automated tests is run to check for things like metadata validity, RDNN file naming, proper file installation, and successful package builds. These automated tests allow us to ensure a minimum amount of quality control for all packages published in AppCenter, and ensure we aren’t spending extra human time reviewing apps that don’t even build or meet the basic guidelines.

As part of our work on the Juno release, AppCenter Dashboard had to be updated with a major new trick: the ability to build packages for both Loki and Juno. This has a few implications that we’ll get into in a moment, but for now you should know that the basis of Houston CI is AppCenter Dashboard 2.0. In other words, the same code powers Houston CI and the AppCenter Dashboard publishing process.

### Why do I want it?

If you’ve published an app in AppCenter before, you may have gone through something like this:

> **You**: Excitedly release version 1.0 of your app on GitHub and hit the big publish button on AppCenter Dashboard  
> **AppCenter Dashboard**: files some issues in your tracker, including some packaging errors  
> **You**: Fix all the errors! Release 1.0.1!  
> **AppCenter Dashboard**: More issue reports about packaging  
> **You, frustrated**: 1.0.2!  
> **AppCenter Dashboard, mockingly**: issue reports

Packaging and build failures can be annoying and having to go through the whole publishing process to try to reproduce them is tedious. Using Houston CI means you can find out if master passes automated testing _before_ you release. You can even find out if branches or contributor-submitted PRs pass before they’re allowed to be merged. And since Houston CI also tests your package builds, you can know if a particular feature branch breaks your packaging and act accordingly ahead of time. Pretty handy stuff.

### How do I use it?

Adding Houston CI to your GitHub project is very straightforward. If you’ve never used Travis CI before, check out their [Getting Started Guide](https://docs.travis-ci.com/user/getting-started/) first and come back here later. If you’re familiar with Travis, then you can copy the contents of the following gist to a `.travis.yml` file in your project’s root to begin testing:

Houston CI’s Travis YML configuration file

**Note:** Specifying the `DIST`s is no longer necessary; Houston will automatically build and test against the latest beta release (5.0 Juno right now) if your packaging in in your master branch or in a generic `deb-packaging` branch. Building for Loki will now require a `deb-packaging-loki` branch. More details [here](https://medium.com/elementaryos/developer-tips-updating-your-apps-for-juno-453c07a5b3a7).

![Houston CI letting you know some things are missing](https://cdn-images-1.medium.com/max/800/1*kn5vWpCMRwOpkdV_snfLlA.png)
Houston CI letting you know some things are missing

### Anything else I should know?

Houston CI and the upcoming version of AppCenter Dashboard comes with a major new feature you should know about: support for out of tree packaging. Soon we’ll be recommending that developers push their packaging to an “orphan branch” called `deb-packaging`. This is pretty convenient if you’re publishing for other Linux-based OSes and don’t want elementary-specific packaging in your master branch, but it also allows AppCenter dashboard to support separate packaging branches for each release of elementary OS.

If you push a branch called `deb-packaging-loki`, AppCenter Dashboard will use that packaging branch for Loki builds. This means you can set build flags or adjust dependencies as needed to ensure your app builds and is releasable on multiple supported versions of elementary OS, if you choose to do so.

Similarly, you can push packaging branches that match the naming of other branches for Houston CI. So if you have a feature branch called `big-new-thing`, you can create a matching packaging branch called `deb-packaging-big-new-thing` and Houston CI will test these branches together. This is especially handy if a feature branch introduces a new dependency. You can test a new, matching packaging branch and never introduce breaks in a CI-based workflow.

We’ve had a lot of success with the Houston V2 worker and Houston CI so far, but some of these features are brand new, so we’re expecting to find some issues with your help testing! If you think you’ve done everything right, but Houston CI just won’t build your app, make sure to [open an issue report in GitHub](https://github.com/elementary/houston/issues).

For more details, check [the Houston wiki](https://github.com/elementary/houston/wiki/Continuous-Integration).

If you need help or get stuck, don’t panic! You can always join [our Gitter](https://gitter.im/elementary/houston) for questions about AppCenter Dashboard or jump in to the [community Slack](https://elementarycommunity.slack.com/join/shared_invite/enQtMjg3NTExNDIwOTQ1LWExZjEzZGE4YjY4MjUwMTQ1MTVjZDJlNTFhNGRlN2FmZmUxNjhmZTI1YmNmZjQ0ODMxYzcwZTI1OTVlMTQyNWI). Houston CI is still rather new, so we’re hoping to get your feedback and learn how we can make it better. If you’re familiar with Javascript and want to help us make AppCenter Dashboard or Houston CI better, [it’s Open Source on GitHub](https://github.com/elementary/houston). We’d love to see your pull requests!

_Thanks again to all the developers making apps for AppCenter, everyone who has bought an app on AppCenter, our supporters on_ [_Bountysource_](https://salt.bountysource.com/teams/elementary) _and_ [_Patreon_](https://www.patreon.com/elementary)_, and those who’ve purchased a copy of_ [_elementary OS_](https://elementary.io/) _or merch from_ [_our store_](https://elementary.io/store/)_. Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to_ [_Get Involved_](https://elementary.io/get-involved)_!_