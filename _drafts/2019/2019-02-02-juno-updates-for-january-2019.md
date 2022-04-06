---
title: Juno Updates for January, 2019
description: We’re back from the holidays with plenty of updates
date: '2019-02-02T02:50:31.467Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/1600/1*X3SqeGe8u1fA7CMFijVkcA@2x.png
tags:
  - updates
  - juno
---

It’s that time again! We’re back from the holidays with plenty of updates. Let’s dive in to what’s new in January for elementary OS:

## AppCenter

As AppCenter becomes more populated with great, indie apps we’re doing more work to ensure those apps are easily browse-able. This month, our design team spent some time on the large category cards that are displayed on AppCenter’s home page. This includes adding several new categories like “Communication”, “Finance”, and “Media Production” as well as redesigning the graphics for several existing categories. We’ll have a dedicated blog post with some more detail shortly.

<figure markdown="1">
![AppCenter’s homepage with new and redesigned category cards](https://cdn-images-1.medium.com/max/800/1*X3SqeGe8u1fA7CMFijVkcA@2x.png){: srcset="https://cdn-images-1.medium.com/max/1600/1*X3SqeGe8u1fA7CMFijVkcA@2x.png 2x"}
<figcaption>AppCenter’s homepage with new and redesigned category cards</figcaption>
</figure>

We’ve received reports of some users having trouble with email address validation when paying for apps. We realized we were being a bit too strict with what AppCenter recognizes as a valid email, so we relaxed the validation a bit to match the same pattern that our payment processor, Stripe, uses.

Sometimes when installation or removal operations failed, buttons would get oddly cropped or padded. This should now be resolved.

We’ve also fixed the oldest issue reported against AppCenter! Now, if an installation of elementary OS is performed without an Internet connection, AppCenter will correctly rebuild and populate its internal catalog when a connection is established. This should solve problems for many users who reported they could only see pre-installed apps in AppCenter.

## Code

A lot of time and attention recently went into improving the reliability of saving and restoring files in Code, especially when using the split view. We’ve fixed some potentially nasty data loss issues that would occur when Code wasn’t finished saving before the close button was pressed. Also, Code no longer tries to restore blank, unsaved files and we’ve improved the reliability of saving and restoring unsaved files in general.

## Files

While work is ongoing under the hood to bring Files’ codebase up to 2019 standards, a couple of small fixes have made their way into the release this month. We fixed a regression where the wrong app was being selected as default for opening certain file types. Sorry about that! We also brought back rounded corners on folder labels and the file chooser dialog now has a different tooltip that doesn’t suggest you can use the pathbar to search there (yet!). We fixed an issue where the “Properties” menu item wasn’t showing for the “File System” entry in the sidebar. We also addressed some potential crashers involving opening multiple files at the same time. When searching, you might notice that the results dropdown is larger to show more results. Finally, you can now choose to hide thumbnails for images and documents.

## System Settings

Following along with our focus on making keyboard shortcuts more discoverable, we now have a tooltip on the back button showing the `Alt + ←` and mouse back button shortcuts to navigate backwards in System Settings.

![](https://cdn-images-1.medium.com/max/800/1*E7AY6lRibKzqvGNrbNDEnw@2x.png){: srcset="https://cdn-images-1.medium.com/max/1600/1*E7AY6lRibKzqvGNrbNDEnw@2x.png 2x"}

We’ve also made some updates to Bluetooth settings to ensure that we more accurately report the status of adapters and to improve stability. We now show a label “discovering” and a spinner in the bottom right corner whenever new devices are being discovered. This way, you can see discovery status even when there are no nearby devices. To make device status extra clear, we now change the Bluetooth icon in the view when it is disabled. To reduce visual noise, we also have removed status badges from unpaired devices.

Applications settings (where you can set defaults and startup apps), has been updated with new search keywords to make finding the setting you’re looking for much clearer and easier.

## Applications Menu

Even the applications menu is using new accelerator tooltips! This means we now show _all_ shortcuts associated with launching the applications menu when you hover over its label in the panel like the defaults `⌘ + Space` and `Alt + F2`. We’ve also removed the highlighting effect when you use the built-in calculator. And of course we snuck in some performance improvements to help you launch apps even faster.

## And More

The latest version of Screenshot includes a fix for an issue where area screenshots would sometimes include the selection rectangle. We also resolved an issue where the “delay” setting would be ignored in some cases.

In addition to the updates mentioned above, you can always rely on updated translations, stability and performance fixes, and general code cleaning. Make sure to pop open AppCenter and hit “Update All” to get the latest and greatest.

