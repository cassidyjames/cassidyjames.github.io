---
title: 'Developer Tips: GitHub Workflow'
description: Best practices to make development faster and easier
date: '2019-04-08T16:50:28.287Z'
author: cassidyjames
image: https://cdn-images-1.medium.com/max/2000/1*ZkedeotogXIlqipOv9bW0g.png
tags:
  - devs
  - developer-tips
  - github
  - evergreen
---

![](https://cdn-images-1.medium.com/max/2000/1*ZkedeotogXIlqipOv9bW0g.png)

AppCenter leans heavily into the GitHub-based workflow for developers, ensuring that elementary isn’t recreating the wheel. However, that also means that many handy aspects of development are somewhat expected, but not strictly documented. Here are some of the best practices in a GitHub-based workflow that will help you develop your apps for AppCenter, make the lives of contributors easier, and help your app speed through AppCenter human reviews.

## A Proper README.md

GitHub basically expects a README.md file to exist in the root of your repo, going as far as to automatically create one when you create a new repo. Because of this, GitHub users also expect READMEs to exist and be useful, and will use this as the primary way of seeing what your app is and often how to contribute. While you can create more tailored CONTRIBUTING.md or similar documents, your README is literally front and center on GitHub, so at least direct contributors to the right place from it.

We also use the README when checking apps submitted to AppCenter to better understand the app. While much of the information here should also be present in your app’s AppData, this is often the first impression AppCenter reviewers get of your app—make it count!

A great README has the following well-organized information:

### Basic App Info

A heading with the app title, a logo, and a screenshot are great to put up top in your README. If someone comes across your app’s repo from GitHub or somewhere else on the Internet, your app’s branding and identity should be one of the first things they see. You can even point the logo and screenshot to the assets in your `data/` folder in the repo so they always stay up to date.

### How to Build

If someone is going to contribute or even just modify your app for their own uses, one of the first things they need to know how to do is build it from source. Outline any dependencies and how to use your build system here. If you’re using Meson, it should be fairly consistent with most elementary apps.

### How to Get It

For AppCenter apps, we highly recommend using the provided [Markdown Badges](https://github.com/elementary/houston/wiki/Markdown-Badges) for your app. This ensures the AppCenter branding is up-to-date and will direct users to AppCenter on the web or in the native app automatically. Note that this badge is only useful after your app has been first published to AppCenter.

### More

Other information that we often see in great READMEs is the Travis build status, translation information, and a disclaimer about other platforms if your app is only built for and tested against elementary OS. Basically any information you find yourself frequently repeating can go in your README as a canonical source.

## Releases

AppCenter requires using releases for submissions, but there are some things you can remember to do to make things go smoothly:

### Don’t Modify a Release

While GitHub doesn’t treat releases as immutable, it’s best practice for you to. Once you make a release, other contributors can start downloading tarballs and packaging them elsewhere, plus AppCenter Dashboard uses this to know there’s a potential new submission. If you modify a release, you’re bound to cause issues. It’s best to make a small x.y.1 patch release if you need to modify something, and be clear in the release description on GitHub what was modified or fixed.

### Write Good Release Descriptions

Speaking of release descriptions, _please_ use this field on GitHub for useful information! While you can copy your AppData release notes over here, just remember GitHub is more technical than AppCenter, plus it supports everything rich GitHub fields do like Markdown, HTML, and even @-mentions for users. This is a great place to provide a list of technical changes and credits for things like translations. You can even link to specific PRs or commits if it provides useful context.

We read your GitHub release descriptions when reviewing updates to AppCenter, so if you are accurate and concise, it can help ease and speed up the review process.

## Issue Tracking

GitHub issues are an incredibly useful tool for any developer, and we rely on them for AppCenter Dashboard as well. The most immediate thing is: ensure you enable issue tracking on your repo! This is the default on GitHub, but if you turn it off, AppCenter Dashboard will have no place to report automated submission or build issues, plus our app reviewers will have no place to report human-requested changes.

### Labels

AppCenter Dashboard will automatically report any issues found in the automated building and testing process with an “AppCenter” label. While human reviewers won’t have permission to add their own labels, you can also tag their reported issues with “AppCenter” to keep things organized.

We also find some standard labels like “Help Wanted,” “Bitesize,” and “Design Conflict” can help developers organize their workflow. The most important thing, however, is to only create labels you’ll actually use—don’t get bogged down with creating seven levels of priority if in practice you only use “low” and “high,” for example.

### Milestones

GitHub also supports Milestones for both issues and PRs. This is great because you can plan ahead as much as you’d like for future releases, i.e. by creating a “2.1.0” milestone, or a “Future” milestone. You can then add issues and PRs to these milestones, and use the Milestones page to track the progress of each. We don’t explicitly require or utilize Milestones for AppCenter Dashboard, but we’ve found it helps keep development organized.

## Pull Requests

We often see solo developers just commit to master for everything, but Pull Requests are one of the most important tools that GitHub gives you, and we highly recommend using them for everything.

### Keep Master Clean

One major advantage of using PRs is that you keep your “master” branch clean. You can know that master is always successfully building, for example, by never having unfinished work hanging out there—because that unfinished work is always in a PR.

Utilizing [Protected Branches,](https://help.github.com/en/articles/about-protected-branches) you can even prevent yourself and contributors from committing directly to master. This is great to make sure you don’t push unfinished work or overwrite master by force-pushing to the branch.

PRs integrate with CI like Travis and [Houston CI](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726), meaning you can also always ensure your commits going into master are [successfully building against the AppCenter Dashboard infrastructure](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726). This can cut down any time creating releases and waiting for AppCenter Dashboard itself to build your app to know if it was successful, since you’ve already confirmed it’s going to build correctly during development. You can even set your repo’s settings to not allow you to merge into master without a passing build, something we recommend enforcing!

PRs also keep your master branch clean when you utilize Squash Commits in GitHub, a feature that lets you condense all of the individual commits into a single one that implements the feature against master. This way, your commit history of the master branch reads more like:

*   Implement features X, Y, and Z (#123)
*   Fix issues A and B (#234)
*   Implement feature foo and bar (#345)

Instead of:

*   Start implementing feature X
*   Revert feature X in favor of feature Y
*   Actually revert
*   Fix build
*   Typo
*   Start work on feature Z
*   Rework X, Y, and Z to make more sense together
*   Fix stuff
*   Broken build
*   Tweak dependencies
*   Update feature Z
*   Fix issue A
*   Revert
*   Fix issue A and B
*   Fix typo
*   Implement feature foo
*   I’m dumb
*   Update deps for foo
*   Implement feature bar
*   Actually implement feature bar
*   Fix all of the issues with feature bar
*   Fix another issue with feature bar
*   Revert previous fix
*   Clean up
*   Fix stuff
*   Tweak copy

…we’ve all been there. Squash those commits down so your master branch’s commit history is concise and legible.

### Work on Features in Parallel

Even if you’re a solo developer, PRs can help you keep development organized by allowing you to work on different features or fixes in parallel. If you get stuck on one thing, you can jump over to another PR to continue making progress there. Or, use [GitHub’s recently-introduced Draft PR status](https://github.blog/2019-02-14-introducing-draft-pull-requests/) to prototype more future-thinking or wild ideas without explicitly committing to implementing them.

Of course, this workflow also helps outside collaborators who might see an issue and want to help fix it with a PR of their own. If you’re already used to a PR-centric workflow, it makes this go more smoothly for all parties.

## Smart Linking and Closing Issues

One awesome feature of GitHub is the ability to easily link to several things from the text fields of issues, comments, PRs, etc. Pasting a link to a specific commit link will automatically shorten it to a git hash. Pasting a link to an issue will shorten it to the issue number, or you can just start typing `#` and the issue number or a keyword, and GitHub will help you link it inline. You can even paste a permalink to a line or block of code in your repo, and GitHub will automatically turn it into a syntax-highlighted code block. Linking to related issues and PRs also adds an entry to that issue or PR’s timeline, which helps with cross-referencing things

One of the most useful features, though, is the automatic closing of mentioned issues when using [certain keywords](https://help.github.com/en/articles/closing-issues-using-keywords). For example, if a commit is made to master that says “fixes #123”, issue #123 will automatically get linked to from the commit message and closed. Because of the cross-referencing and timelines of issues, the issue itself will also get an entry that says “Closed by `f00ba2`”, or whatever the associated commit is.

Automatic closing works best, however, when paired with PRs. Mention in a PR description that it “fixes #234”, and issue 234 will get an entry in its timeline saying it was mentioned. First, this helps anyone coming across that issue in the future know it’s being worked on or talked about elsewhere. Second, once that PR is actually merged in, the issue will also get automatically closed. This really cuts down on having to manually manage issues and can speed up your development. It also gives valuable context to any subscribers to the issue, instead of a generic “this is fixed” comment and closing the issue.

## Comparison View

GitHub provides a really useful comparison view between commits, releases and keywords like “master”. To use it, append `/compare/` and the two things you want to compare, separated by `...` to your GitHub repo’s URL. For example, [github.com/cassidyjames/ephemeral/compare/5.0.0…master](https://github.com/cassidyjames/ephemeral/compare/5.0.0…master). This is super handy for seeing what’s changed between two releases, or even helping you write your release notes for an upcoming release.

AppCenter Dashboard human reviewers also use the comparison between the previously-approved release and the newly-submitted release to help us understand what has changed in your app.

These are some of the most valuable GitHub workflow tips and tricks we recommend for developing for elementary OS and submitting to AppCenter. Did we miss any? Hit us up on social media!

