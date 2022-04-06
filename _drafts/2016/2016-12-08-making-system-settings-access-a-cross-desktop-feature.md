---
title: "Making System Settings Access a Cross-Desktop Feature"
description: A new cross-desktop URL scheme specification
author: danrabbit
date: 2016-12-08T17:50:50.017Z
image: /assets/images/making-system-settings-access-a-cross-desktop-feature/0740YNDjNe4M3AKOB
tags:
  - fdo
---

Corentin Noël has proposed a cross-desktop URL scheme specification for system settings and we’re excited to announce the first release of Switchboard (the system settings app in elementary OS) that makes use of it!

<figure markdown="1">
![](/assets/images/making-system-settings-access-a-cross-desktop-feature/0740YNDjNe4M3AKOB)
</figure>

## The Problem

In the world of open desktops, many apps are cross-platform as a standard. However, as apps strive to be more useful and integrated in the desktop, they become siloed and start to break that cross-platform compatibility. As apps become more and more connected, it becomes useful for them to be able to direct their users to adjust system settings that may prevent them from completing their tasks, especially in the case of network or online accounts settings. Currently, to provide this functionality an app developer must hard code support for a single settings app. This leaves users frustrated when they want to use the app in a different desktop environment and find that this feature is broken.

## The Solution

Instead of hard coding commands to open a single app, we’re proposing the adoption of the cross-desktop URL scheme “settings://” to empower developers and ensure user freedom. The specification works much like the freedesktop.org icon naming specification, outlining a set of standard URLs that developers can expect will work and allowing for intelligent fallbacks so that more specific URLs can be constructed without breaking functionality.

## Cringey Examples

Jim is an app developer creating an email client. On first launch, he wants to show an onboarding screen that directs his users to the system’s online account settings where they can configure email accounts. Instead of hard coding a command to launch `switchboard online-accounts`, he uses the settings URL `settings://accounts/online`. Now he can provide functionality to help his users get started while keeping his app friendly to multiple desktop environments.

Sarah is also working on the app and she notices that in her desktop environment you can jump straight to email settings with the URL `settings://accounts/online/email`. She knows that this would save her users a step, but she wants to make sure that nothing breaks for users on a different desktop environment. Because of the fallback-style naming scheme, Sarah doesn’t have to worry! If `settings://accounts/online/email` isn’t available in the desktop environment, the URL handler will intelligently fall back to `settings://accounts/online`. High five Sarah!

## What’s Next

Now that support for this URL scheme has landed in Switchboard, we’ll be updating our apps and even the rest of the desktop environment to make use of it. We’ve reached out to lead developers on a couple of other desktop environments and they seemed interested in the idea. We’d love to see more developers adopt this scheme so that it gains momentum. If you have any questions or suggestions about [the specification](https://docs.google.com/document/d/1N0uqNtVXEFn3cLgNMeN75mP_dpMpCco-7uw5PKow-_Q/edit?usp=sharing) it is open to comments on Google Docs.

