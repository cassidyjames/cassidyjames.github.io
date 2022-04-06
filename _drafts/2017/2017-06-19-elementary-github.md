---
title: elementary + GitHub
description: We’ve completed our move
date: '2017-06-19T16:19:35.528Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/1000/1*zvwgIycD5ePCTv1fUNdeJg.png
tags:
  - github
---

We’re excited to finally say that elementary has completed our move and now lives [on GitHub](https://github.com/elementary)! We’ve migrated over 70 repositories from Launchpad and bzr. So what does that really mean?

<figure class="card" markdown="1">
![GitHub Logo](https://cdn-images-1.medium.com/max/1000/1*zvwgIycD5ePCTv1fUNdeJg.png)
</figure>

## Lower Barrier to Entry

GitHub is fairly ubiquitous these days among developers and with good reason. It is easy to use, there’s plenty of tutorials, documentation, and other help available. It provides simple web tools so that small fixes can be submitted in a web browser. Since we started migrating to GitHub, we’ve seen an influx of small, but helpful pull requests.

## Better Integrations

<figure class="card" markdown="1">
![GitHub integration for Slack](https://cdn-images-1.medium.com/max/1430/1*EIyMj6rzPkrfO6VkKZifIw.png)
<figcaption>GitHub integration for Slack</figcaption>
</figure>

GitHub is integrated with Slack, which means that when a new issue is filed or a pull request is submitted, our team gets a message right away. Other tools we use like Bountysource and Weblate provide badges that we can show in our README so that every app has quick and easy links readily available. Our downstreams like GitHub because it uses Git, making it easier to package our software for other Linux distributions like Fedora.

## Better Code Reviews

GitHub allows us to enforce some behavior for branches. Specifically, we can disallow the ability to push to the master branch and require code reviews. We can also require that branches pass status checks, like testing and even dismiss old approvals when new commits are pushed.

Nearly all of our repositories are now running Travis CI for continuous integration testing. Whenever a branch is submitted for review, it is automatically built in a clean environment and tests are run. This helps reduce the chances for regressions and breaks during development.

<figure class="card" markdown="1">
![Tighter controls on pull requests](https://cdn-images-1.medium.com/max/1492/1*X--KQFaKPiw94lzFRxSQFQ.png)
<figcaption>Tighter controls on pull requests</figcaption>
</figure>

We also require that branches be up to date with the latest master and GitHub’s built-in tools make it easy to resolve conflicts if they occur. That way, we can be sure that the reviews we do are being done on up-to-date code.

All of this together means that branches are reviewed faster and more thoroughly at the same time.

## Richer Issue Reports

<figure class="card" markdown="1">
![markdown, mentions, reactions, oh my!](https://cdn-images-1.medium.com/max/1600/1*1VZpDqL_CH1R2PLyl1Hd_g.gif)
<figcaption>Markdown, mentions, reactions, oh my!</figcaption>
</figure>

Because GitHub uses markdown everywhere, we can get much better issue reports with embedded images and code snippets. GitHub supports issue templates, so we can help guide people how best to supply the necessary information for trickier components. And maybe best of all, both the issue report itself and comments can have reactions which cut down on “me too” comments and other noise that can hide useful information.

## A New Translations Platform

In case you missed our previous blog post, all our translation are now hosted on Weblate instead of a mix of Transifex and Rosetta. More on that [here](https://medium.com/elementaryos/adios-transifex-weve-gone-to-weblate-59870dea06b2).

## Get Involved

If you’ve ever thought about getting involved, now is a great time! During the switch we’ve taken the time to update the README files for all of our repositories with simple build instructions and tips for debugging and testing. We’ve also [updated our website](https://elementary.io/get-involved#desktop-development) to reflect the change. There are now new links for [Bitesize](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3Aelementary+label%3A%22bitesize%22&type=) and [Bountied](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3Aelementary+label%3A%22bounty%22&type=) issues.

If you’ve never used Git or GitHub before, GitHub provides [a bunch of tutorials](https://guides.github.com/) and Codecademy offers a great [beginners git course](https://www.codecademy.com/learn/learn-git).

