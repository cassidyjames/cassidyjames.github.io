---
title: Updates for September, 2019
description: Updates to apps, settings, and more—plus kicking off Hacktoberfest
author: cassidyjames
image: /images/updates-for-september-2019/files-checkerboard@2x.png

tags:
  - updates
  - juno

facebook: https://www.facebook.com/elementaryos/posts/2735369693161509
mastodon: https://mastodon.social/@elementary/102894076844604995
reddit: https://reddit.com/r/elementaryos/comments/dci075/updates_for_september_2019_elementary_blog/
twitter: https://twitter.com/elementary/status/1179454719632302081
---

Happy October! As you settle into the fall season (or spring for those of you in the Southern hemisphere!), we're back to share the last month's progress on elementary OS and all of the updates we've released.

## Hacktoberfest 🍂️👩‍💻️🎃️

But first, this year we're participating in [Hacktoberfest](https://hacktoberfest.digitalocean.com/) yet again! We've started [labeling great issues](https://github.com/search?o=asc&q=org%3Aelementary+label%3Ahacktoberfest&s=created&state=open&type=Issues) for folks to take on this month—if you've wanted to contribute code to elementary OS but didn't know where to start, now is a great time.

If you're already a regular contributor, you can also help out this month by labeling issues with the `Hacktoberfest`{: class="tag hacktoberfest"} label. Remember, Hacktoberfest is ideal for folks who have never contributed to elementary OS, so labeled issues should be relatively self-contained, and regular contributors should be available to help answer any questions.

## Apps

In September we released a couple of updates to core apps:

### Files

The latest release of Files is a big one! The major new feature here is initial support for the [CloudProviders API](https://gitlab.gnome.org/World/libcloudproviders); this means file syncing and cloud storage providers like NextCloud can use this standardized API and hook directly into the Files app, without having to do anything special for elementary OS. This API is also implemented in GNOME Files, and we hope to see it adopted more widely across FreeDesktops. More information about the API and its background is available in [Carlos Soriano's blog post](https://csorianognome.wordpress.com/2015/07/07/cloud-providers/).

<figure markdown="1">
![Old]({{ site.baseurl }}/images/updates-for-september-2019/files-checkerboard.png){: srcset="{{ site.baseurl }}/images/updates-for-september-2019/files-checkerboard@2x.png 2x"}
<figcaption>New checkerboard style behind transparent thumbnails</figcaption>
</figure>

In addition, we've released several fixes and improvements for Files. Pasting files should be more reliable, color label visibility has been improved when using a dark style (not officially supported… yet), selecting files when using the <kbd>Shift</kbd> should be more reliable, the disk space bar styling has been improved, initial window positioning has been improved (now in the center of the primary display), and we now draw a checkerboard background behind transparent image thumbnails.

<figure class="half card" markdown="1">
![Old]({{ site.baseurl }}/images/updates-for-september-2019/files-before.png){: srcset="{{ site.baseurl }}/images/updates-for-september-2019/files-before@2x.png 2x"}
![New]({{ site.baseurl }}/images/updates-for-september-2019/files-after.png){: srcset="{{ site.baseurl }}/images/updates-for-september-2019/files-after@2x.png 2x"}
<figcaption markdown="1">
**Left:** Old disk space bar styling | **Right:** New disk space bar styling
</figcaption>
</figure>

We've also continued our work to clean up and modernize the Files codebase, porting more code from C to Vala and dropping deprecated code.

### Camera

Another significant release this past month was for Camera. This latest release greatly improves hardware compatibility for cameras on several popular laptops, including many Dell models. If opening Camera showed “no device” before, give it a try again now!

<figure markdown="1">
![Camera](https://elementary.io/images/screenshots/camera.png){: srcset="https://elementary.io/images/screenshots/camera@2x.png 2x"}
</figure>

Performance has also been greatly improved on many camera models. Camera's window position is now saved, and we've cleaned up some code to make the timer button more reliable.

## System Settings

### Displays

We've released a small update to the Displays settings plug that fixes entering minutes into the Night Light schedule, plus some under-the-hood fixes.

### About

The About section of System Settings shows system information and some system-wide actions. The latest release improves how we display storage information, hides the "Check for Updates" button if AppCenter is absent (i.e. on other OSes using our System Settings app), and drops showing the processor architecture since it was unreliable and we only officially support 64-bit Intel-like processors. Lastly, the "Report a Problem" button now launches the new Feedback app instead of using its own internal feedback dialog.

## Granite

The latest release of Granite, our developer library for building apps, includes a few fixes and improvements. Importantly, Granite now provides launcher API support for badges and progress bars, replacing the need for LibUnity in apps. We've added the Equals key to the accel methods, meaning keyboard shortcut tooltips will now show localized text instead of the `=` symbol. DynamicNotebook, the browser-class tab bar, gained support for "Close Tabs to the Right", and we fixed an issue where rapidly closing tabs would sometimes re-open closed tabs.

## Get It

As with each monthly update, you can expect other bug fixes, improvements, and translation updates. Remember to pop open AppCenter and hit that "Update All" button to get all these updates.

<style>
  .hacktoberfest {
    background-color: var(--orange-300);
    border-radius: 0.25em;
    color: var(--black-900);
    font-weight: 700;
  }
</style>
