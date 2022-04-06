---
title: AppCenter and Content Ratings
description: Using open standards to empower users and parents
date: '2018-09-24T05:12:17.843Z'
author: cassidyjames
image: https://cdn-images-1.medium.com/max/958/1*9uynQO1QQeGr6tMtMzqEeA@2x.png
tags:
 - appcenter
 - oars
---

Today, apps submitted to AppCenter are required to provide [Open Age Ratings Service (OARS)](https://hughsie.github.io/oars) data along with their code and other metadata. While app developers always provide this self-created data, we review it along with the app itself before each release to users to ensure it’s sane and accurate.

## Today: Content Warning

Starting with Juno, we’ll display a content warning when a user goes to download an app that meets or exceeds a certain level of OARS data—think nudity, violence, or language content. In addition, these apps will not be featured on the AppCenter homepage as recommended installs, but will remain in search results and category pages if sought out. While we don’t intend to be the content police—and we could never make as informed of a decision for what’s acceptable for someone as themself or a parent in the case of a child—this is a small first step toward more robust content controls and informed consent for users.

<figure markdown="1">
![New Explicit Content Warning in AppCenter](https://cdn-images-1.medium.com/max/958/1*9uynQO1QQeGr6tMtMzqEeA@2x.png)
<figcaption>New Explicit Content Warning in AppCenter</figcaption>
</figure>

For adults, this gives a minimum viable heads-up before they install an app with explicit content at work or perhaps on a family computer. For child accounts, remember that all apps currently require an administrator password for installation, so make sure children are using a non-administrator account on the computer. This also allows you to use the Parental Control settings to set boundaries for device usage time along with specifically-allowed apps and websites.

When a warning shows, users can also choose to toggle it off in the future. Just like the new toggle for Paste Protection in Terminal, this is so we can offer better protection by default while still keeping control in the hands of the user who knows if this is a protection they want or need.

## Next: Let’s Get Specific

The plan for the near future is to show OARS data in one way or another alongside other data on each app’s page in AppCenter. This way we can give users more of a heads up about what they can expect from the app and better decide for themself or their child if it’s something to install. We’re still working through how this will look and work—we want to be accurate about the rating, but concise and not overwhelming—so we expect to roll this out as a post-release update to elementary OS 5 Juno.

## The Future: System-Wide Controls

The ultimate goal is to give users control in System Settings to decide what categories of content are appropriate for both themselves and any child accounts. AppCenter would then respect those system settings and only display and allow downloads of apps that are within the specified ranges of each category. This would allow parents to choose what is right for their children, versus us attempting to force specific restrictions on all users or on children based solely on age. Of course smart defaults will be important here, which is why this will take a bit more time to design and get right before it rolls out.

The obvious place for this would be the existing Parental Controls section of System Settings; however, that would only apply to child accounts. We aim to give users control over and informed consent to what they themselves see in AppCenter, too—one user mentioned to me that their girlfriend has PTSD from combat-related trauma, so letting her set her own restrictions on a certain level of violent content could improve her quality of life, even though she’s the owner of the computer and thus uses an administrator account.

To support these sorts of situations and to better promote the concept of digital wellbeing, we plan to rework Parental Controls into a more generalized system that can help not only parents of children, but individuals setting their own limits and consent. Stay tuned for more information around digital wellbeing in the future.

## Get Involved

Want to help us make the experience around content better in AppCenter and elementary OS? There are a number of ways to get involved. First, you can check out the specific elementary-wide [Digital Wellbeing project](https://github.com/orgs/elementary/projects/33). This is where we track issues and code that is related to this concept, and you can pitch in on anything needing development or input.

If you’re a parent or individual user who would find value in system-wide content limits, we want to hear from you! Reach out here in the comments, message us on social media, or confidentially shoot us an email at [digitalwellbeing@elementary.io](mailto:digitalwellbeing@elementary.io) and we’ll read your feedback to help inform our design.

If you’re interested in contributing to OARS itself, you can do so over on [the project’s GitHub repository](https://github.com/hughsie/oars).

Lastly, as always with elementary OS, you can head over to [elementary.io/get-involved](https://elementary.io/get-involved) for all the other ways to help out from funding and development to translations and design.

