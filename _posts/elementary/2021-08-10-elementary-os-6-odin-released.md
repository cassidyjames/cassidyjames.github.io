---
title: elementary OS 6 Odin Available Now
description: It’s finally here, and it’s the biggest update to the platform yet
author: cassidyjames
image: /images/blog/elementary/elementary-os-6-odin-released/odin.png
legacy: elementary
canonical: https://blog.elementary.io/elementary-os-6-odin-released/
sitemap: false
updated: 2021-08-10
tags:
  - odin
  - release
  - flatpak


facebook: https://www.facebook.com/elementaryos/posts/4606634229368370
reddit: https://reddit.com/r/elementaryos/comments/p1s0iy/elementary_os_6_odin_available_now/

permalink: /blog/elementary/elementary-os-6-odin-released/
redirect_from:
  - /blog/elementary-os-6-odin-released/
---

<figure class="card" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/odin.png --alt elementary OS 6 Odin %}
</figure>

It's been a long road to elementary OS 6—what with a whole global pandemic dropped on us in the middle of development—but it's finally here. elementary OS 6 Odin is available to download now. And it's the biggest update to the platform yet! With OS 6, we've focused in on:

- Empowering you to **be in control** and **express yourself**,
- Continuing to innovate with **new features**, and
- Making elementary OS **easier to get** and **more inclusive**

To get elementary OS 6 now, head to [elementary.io] for the download—or read on for an overview of what's new.

---

## Be in Control & Express Yourself

elementary OS is designed to be easy to use, get out of your way, and not leave the hard decisions to you. At the same time, it exists to empower you to take control of your own devices and data. That's why we've always had an unmatched [commitment to privacy](https://elementary.io/privacy):

<aside markdown="1">
>Your data always belongs to you, and only you. We don’t make advertising deals or collect sensitive personal data. We’re funded directly by our users paying what they want for elementary OS and apps on AppCenter. And that’s how it should be.
</aside>

With OS 6, we're empowering you further with new ways to stay in control of your experience—plus new ways to express your own unique style and preferences.

### Dark Style & Accent Color

Get ready to turn down the lights, because Dark Style is here for elementary OS 6. The new visual style is available right from the Welcome screen or at any time from _System Settings_ → _Desktop_ → _Appearance_. Choose the classic Default style or a new Dark style, and the system and default apps will follow suit. Third-party apps are encouraged to follow this new preference, though we avoid breakage by not _forcing_ it; if your favorite app doesn't follow along, be sure to report that to its developer. Dark style can also be scheduled to follow sunset and sunrise for your location, or based on your own schedule.

<figure class="half">
  {% picture blog/elementary/elementary-os-6-odin-released/onboarding.png dark: blog/elementary/elementary-os-6-odin-released/onboarding-dark.png --alt Onboarding %}
  {% picture blog/elementary/elementary-os-6-odin-released/appearance.png dark: blog/elementary/elementary-os-6-odin-released/appearance-dark.png --alt Desktop Appearance settings %}
<figcaption markdown="1">
**Left:** Dark style and accent colors in the Welcome screen | **Right:** _System Settings_ → _Desktop_ → _Appearance_
</figcaption>
</figure>

We've also added 10 new accent colors to elementary OS, affecting everything from suggested action buttons and switches to text selection focus styles—and the new automatic accent color preference picks an accent color from your current wallpaper. elementary OS 6 is the most customizable version to date, enabling you to completely change the look by playing with different wallpapers, visual styles, and accent colors.

<aside markdown="1">
>elementary OS 6 is the most customizable version to date, enabling you to completely change the look.
</aside>

These new features are made possible by a complete redesign and rewrite of the elementary OS system stylesheet. We revisited every detail from contextual shading and contrast to shadows, strokes, and border radii. The end result ensures _much_ better contrast throughout the whole OS while enabling unprecedented customization.

<div style="margin: 3em auto;">
**[Look & Feel Changes Coming to elementary OS 6](https://blog.elementary.io/look-and-feel-changes-elementary-os-6)**  
_Visual design updates that are more than skin deep_
</div>

### Sandboxing & Portals

elementary OS 6 leverages cutting-edge sandboxing technology to enforce privacy and security protections at a technical level. In OS 6, all AppCenter apps are now packaged and distributed as Flatpaks, a modern container format that keeps apps siloed away from each other—and your sensitive data. Several default elementary OS apps are now being distributed as Flatpaks as well.

In addition, elementary OS 6 utilizes Portals to keep you in control of how apps interact with each other and your data. Apps must explicitly request permission in a well-defined way e.g. to get access to files or launch other apps. A new Permissions view in _System Settings_ → _Applications_ exposes all the permissions apps have requested and gives you control to override or revoke them.

<figure class="constrained" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/permissions.png --alt Applications Permissions settings %}
<figcaption markdown="1">
_System Settings_ → _Applications_ → _Permissions_
</figcaption>
</figure>

These protections are in place for apps installed from AppCenter, but importantly also apply to all apps installed via the built-in Sideload utility—including all third-party Flatpak apps from external sources like Flathub or a developer's own website. With these protections built in and elementary OS 6 being Flatpak-first, it's easier and safer than ever to get and use the apps you need.

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "elementary-appcenter-flatpak" | first %}
{% include post-summary.html post=post %}
</div>

## New Features

It wouldn't be a new OS release without exciting new features to improve your experience, and OS 6 delivers on that front.

### Multi-touch

One of the most pervasive new features for touch screen and touchpad users is the new multi-touch support throughout elementary OS 6. A three-finger swipe up smoothly opens the Multitasking View, exposing open apps and workspaces. A three-finger swipe left or right smoothly switches between the dynamic workspaces, making it even faster to jump between tasks.

<figure class="half card" markdown="1">
![Multitasking View](/images/blog/elementary/multitouch-gestures-in-elementary-os-6/multitasking.gif)
![Switching workspaces](/images/blog/elementary/multitouch-gestures-in-elementary-os-6/workspaces.gif)
<figcaption markdown="1">
1:1 multi-touch gestures used for Multitasking View and switching workspaces
</figcaption>
</figure>

But it's not just the desktop that has multi-touch support; we've worked to bring smooth and intuitive two-finger multi-touch gestures into apps as well. Swipe through paged layouts like screenshots in AppCenter, months in the Date & Time indicator, or steps in the Initial Setup and Welcome screens. Swipe to dismiss notification bubbles on screen or in the Notification Center. Swipe to go back in Web, System Settings, and several other apps. And smoothly swipe between users on the login/lock screen greeter.

<figure class="third" markdown="1">
![AppCenter Screenshots](/images/blog/elementary/multitouch-gestures-in-elementary-os-6/appcenter.gif)
![Notification Center](/images/blog/elementary/multitouch-gestures-in-elementary-os-6/notification-center.gif){: width="399" height="672" }
![Keyboard Layouts](/images/blog/elementary/multitouch-gestures-in-elementary-os-6/keyboard-layouts.gif)
<figcaption markdown="1">
**Left:** Swipe to switch pages | **Center:** Swipe to dismiss | **Right:** Swipe to go back
</figcaption>
</figure>

These new multi-touch gestures make elementary OS 6 faster and smoother to navigate on a touch screen or touchpad—all while ensuring each interaction is just as easy with a traditional mouse and keyboard as before. Multi-touch gestures can be customized from _System Settings_ → _Mouse & Touchpad_ → _Gestures_.

### Notifications

elementary OS has always provided desktop notifications, but OS 6 brings a redesign and under-the-hood rewrite with richer, more capable notifications than ever.

<figure class="half" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-beta-2/notification-badge.png --alt Notification with an icon badge %}
{% picture blog/elementary/elementary-os-6-odin-beta-2/notification-button.png --alt Notification with action buttons %}
<figcaption markdown="1">
New notification bubbles
</figcaption>
</figure>

Notification bubbles now feature badge capability, enabling apps to send richer information like a visual status indicator while ensuring you always know which app a notification is coming from. Apps can also now send actions along with notifications, which are displayed as buttons right within the notification bubble—it's easier than ever to not only be informed by apps, but to take quick actions without ever needing to open the app.

<figure>
  {% picture blog/elementary/elementary-os-6-odin-released/notification-light.png dark: blog/elementary/elementary-os-6-odin-released/notification-dark.png --alt Urgent notification bubble %}
<figcaption>Urgent notification bubble</figcaption>
</figure>

Since notifications are now using native GTK widgets just like native apps, they follow the dark style preference and emoji are displayed in full color. Urgent notifications sport a new look and a distinct sound to make them easier to identify. Lastly, notification bubbles also now support multi-touch swipe-to-dismiss on both touch screens and touchpads.

<figure class="card" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/notification-center.png --alt Notification Center %}
<figcaption markdown="1">
Redesigned Notification Center
</figcaption>
</figure>

Notification Center has also been redesigned; notifications here now match the look of notification bubbles including full-color emoji and badges. They're also more clearly grouped by app and support multi-touch swipe-to-dismiss.

### Tasks

The brand new Tasks app debuts in elementary OS 6, helping you tackle your to-do list whether it's stored on your device or synchronized with an online account.

<figure markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/tasks.png --alt Tasks %}
</figure>

Tasks is designed around the open CalDAV format, ensuring it's compatible with most online account providers. It supports synchronizing with multiple accounts and lists, time-based reminders, location-based reminders, and more.

### Firmware Updates

elementary OS 6 comes with firmware updates built in, powered by the [Linux Vendor Firmware Service](https://fwupd.org). Firmware updates are provided for supported devices by hardware manufacturers like Star Labs, Dell, Lenovo, HP, Intel, Logitech, Wacom, 8bitdo, and many more—now supported devices can get the latest updates for security and stability straight from _System Settings_ → _System_ → _Firmware_ or by searching the Applications Menu for “Firmware.”

<figure class="constrained" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/firmware.png --alt Firmware settings %}
<figcaption markdown="1">
Firmware updates built into System Settings
</figcaption>
</figure>

### App Updates

Several apps in elementary OS 6 sport brand new features, making OS 6 more capable than ever before.

<figure class="half" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/web.png --alt Web in a light style %}
{% picture blog/elementary/elementary-os-6-odin-released/web-dark.png --alt Web in a dark style %}
<figcaption markdown="1">
Web in both light and dark styles
</figcaption>
</figure>

The web browser in elementary OS 6 has been updated and renamed. Formerly known as Epiphany, Web is now distributed as a Flatpak to enable even faster updates to support the latest web technologies. Web also features Intelligent Tracking Protection and ad blocking built-in and enabled by default for even greater privacy protections out of the box. The new reader mode brings a stripped down and easier to read view for content-heavy pages. Web follows the new dark style preference both with its own interface and for websites that support the standardized CSS color scheme preference. And as previously mentioned, Web now supports multi-touch swipes for navigating back and forth between pages for touch and touchpad users.

<figure markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/mail.png --alt Mail %}
<figcaption>Mail</figcaption>
</figure>

Mail has been completely rewritten in OS 6. With the rewrite comes tighter Online Accounts integration powered by the open source Evolution Data Server. To start, the new system-wide Online Accounts settings supports the IMAP standard for mail accounts, but we now have the foundation to add more types of accounts over time. The rewrite also brings web process sandboxing so each email is displayed in its own sandbox—improving safety and security. The new Mail is using native widgets instead of custom drawing in places like the message list and conversation view, greatly improving support for right-to-left languages and platform-wide accessibility features.

<figure markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/calendar.png --alt Calendar %}
<figcaption>Calendar</figcaption>
</figure>

Calendar also supports the Online Accounts integration via the CalDAV standard; add any CalDAV-compliant account in System Settings, and its events and tasks will show up in the Calendar and Tasks apps. We've also added ICS import, improved offline support, and fixed a number of issues around all-day events and timezones.

<figure markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/camera.png --alt Camera %}
<figcaption>Camera</figcaption>
</figure>

We've revamped Camera in OS 6 with a fresh UI and several new features. Camera now supports switching between multiple cameras, toggling mirroring of the image, and brightness and contrast adjustment. When a recording is finished, Camera now sends an in-app notification with a button to open the video—perfect for making sure it looks how you want.

<figure markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/appcenter.png --alt AppCenter %}
<figcaption>AppCenter</figcaption>
</figure>

With elementary OS 6 being all-in on Flatpaks, AppCenter has been updated to match. While we've always reviewed, approved, and curated third-party AppCenter apps, they're now also distributed as sandboxed Flatpaks for even stronger privacy and security. When an app is installed from a list, AppCenter now shows an in-app notification when it's complete so it's even faster to open. We've improved the design of app headers, including the contrast of buttons. And AppCenter notifications now provide richer context with improved language and contextual badges for installed apps and updates.

<figure markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/files.png --alt Files %}
<figcaption>Files</figcaption>
</figure>

After a lot of user feedback, testing, and iterating, we're shipping a subtle but important behavioral change to Files in elementary OS 6: as always, a single click navigates between folders, but opening a file in its default app now uses a double click. This change balances the efficiency of single-click navigation (matching the rest of the OS and the web) while addressing the real issue of accidentally opening multiple copies of a file or opening a large file in a slower-loading app. Files also has an all-new sidebar in OS 6 that makes it easier to drag to bookmark folders while sporting slick animations. We've also improved the list view with a smaller minimum size and added file emblems for communicating statuses like permissions or new files in a Git project, added Mint and Bubblegum colors for files tags, improved click targets for files, and improved support for devices using AFP, AFC, and MTP protocols. And Files now provides the File Chooser interface for Flatpak apps for more consistency.

<figure>
  {% picture blog/elementary/elementary-os-6-odin-released/code.png dark: blog/elementary/elementary-os-6-odin-released/code-dark.png --alt Code %}
<figcaption>Code</figcaption>
</figure>

For developers, we've continued to improve Code in OS 6. You'll notice a new project button in the header bar which shows the active Git project and enables quickly switching between open projects. Closing a project also now closes any of its open files. We've continued to iterate on Git integration by introducing the ability to switch and create branches, and by adding new line-by-line Git status in the gutter. Markdown support has been improved with new WYSIWYG-like editor shortcuts and spell check support. We've implemented an all-new full text search within folders and entire projects with togglable case sensitivity and regular expression support. For Vim-mode users, you'll notice both new and improved Vim commands as well as Code defaulting to command mode when enabled. We've also improved how Code saves and restores its state in OS 6, now including cursor position and the state of the sidebar when closing and re-opening the app.

<figure class="half">
  {% picture blog/elementary/elementary-os-6-odin-released/terminal-light.png dark: blog/elementary/elementary-os-6-odin-released/terminal.png --alt Terminal %}
  {% picture blog/elementary/elementary-os-6-odin-released/terminal-paste-protection-light.png dark: blog/elementary/elementary-os-6-odin-released/terminal-paste-protection.png --alt paste protection dialog %}
<figcaption>Terminal</figcaption>
</figure>

While users of elementary OS never _need_ Terminal to complete basic tasks, it's a fan favorite of developers and seasoned Linux users—and it's better than ever in OS 6. A flagship feature of the elementary Terminal is smart paste protection; in OS 6 this has been expanded to include multi-line pastes in addition to `sudo` pastes. We've also revised the paste protection copy for clarity and added expandable details including the command that would be executed. Zoom levels are now handled and remembered per-tab. You can now reload a tab from its context menu or with <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>R</kbd>. We've also added keyboard shortcuts for moving tabs (<kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>←</kbd>/<kbd>→</kbd>) and switching between tabs (<kbd>Ctrl</kbd><kbd>Tab</kbd>). And now in OS 6, all Terminal actions that have keyboard shortcuts show their shortcuts right in the context menu so they're easier to learn and remember. Lastly, process completion notifications now include a badge and copy to indicate whether the process exited with errors or not.

We've improved each of these apps and more in OS 6 like Music, Videos, Photos, and Calculator with bug fixes, improved performance, and updated localization.

### Panel

In elementary OS 5.1 we added a tooltip to the Applications Menu to provide more information including keyboard shortcuts—making a core OS feature of launching apps more discoverable. In talking to several users, we learned that many didn't realize most indicators had a middle-click shortcut to quickly toggle its main control. So with OS 6, we've expanded this convention to the majority of indicators on the Panel on hover.

<figure class="card">
  {% picture blog/elementary/elementary-os-6-odin-released/panel-tooltip.png dark: blog/elementary/elementary-os-6-odin-released/panel-tooltip-dark.png --alt Tooltip for the Sound indicator %}
<figcaption>Tooltip for the Sound indicator</figcaption>
</figure>

Now, when hovering: the Night Light indicator shows the status and middle-click to snooze shortcut; the Sound indicator shows the precise volume and middle-click to mute shortcut; the Network indicator shows the current wireless network name; the Bluetooth indicator shows the on/off state and middle-click to toggle shortcut; the Power indicator exposes the precise battery percent and time until charged or empty, plus the middle-click to toggle shortcut; the Notifications indicator shows exactly how many notifications there are as well as the middle-click for Do Not Disturb shortcut; and the Session indicator details the current user's name and the middle-click to prompt to shut down shortcut.

<figure class="card" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/sound-indicator.png --alt Sound indicator %}
<figcaption>Sound indicator</figcaption>
</figure>

We've expanded the functionality of the Sound indicator in OS 6, as well: the indicator now shows both input and output devices right in the popover, making changing between headphones and speakers or different mics easier on the go, without having to open the full sound settings.

<figure class="card" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/power-indicator.png --alt Power indicator %}
<figcaption>Power indicator</figcaption>
</figure>

We've improved the Power indicator in OS 6 with better support for desktop devices plus a handy new feature: selecting a device in the popover now opens a Power Statistics interface with more information like the design energy and total capacity of the device's battery.

All together, these changes mean the system indicators in elementary OS 6 are more powerful and make handy, time-saving shortcuts far more discoverable than before.

### Desktop Features

We've added new features to the desktop and window management of elementary OS 6 to speed up your workflow.

<figure class="card third">
  {% picture blog/elementary/elementary-os-6-odin-released/window-titles.png --alt window titles %}

  {% picture blog/elementary/elementary-os-6-odin-released/window-context.png dark: blog/elementary/elementary-os-6-odin-released/window-context-dark.png --alt window context menu %}

  {% picture blog/elementary/elementary-os-6-odin-released/desktop-menu.png dark: blog/elementary/elementary-os-6-odin-released/desktop-menu-dark.png --alt [desktop menu %}

<figcaption markdown="1">
**Left:** Window title | **Center:** Window menu | **Right:** Desktop menu
</figcaption>
</figure>

elementary OS 6 features window titles when hovering windows in the Multitasking View so you can more easily find the right window from several visually-similar ones. We've improved the window context menu when secondary-clicking a window's header bar with a new layout, improved copy, and a new feature: Take Screenshot. This makes it easier to take screenshots of specific windows, plus helps expose the keyboard shortcut to make it even faster in the future. And lastly, we've added a new context menu to the desktop itself: secondary-clicking your desktop wallpaper now exposes quick shortcuts to change the wallpaper, configure display settings, or jump into System Settings.

<figure class="constrained" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/multitasking.png --alt Desktop Multitasking settings %}
<figcaption markdown="1">
Multitasking settings
</figcaption>
</figure>

elementary OS 6 has expanded multitasking settings in _System Settings_ → _Desktop_ → _Multitasking_. We've combined the previous hot corners view with new new controls for when to move windows to a new workspace, including options for toggling the behavior for both fullscreen and maximize.

<figure class="half" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/screenshot.png --alt Screenshot utility %}
{% picture blog/elementary/elementary-os-6-odin-released/screenshot-save.png --alt Screenshot utility save dialog %}
<figcaption>Screenshot utility</figcaption>
</figure>

The Screenshot utility is easier to move around with the ability to drag from anywhere in the window. You can also drag the preview image from the Save dialog straight into another app, like an image editor, to skip hitting the Copy to Clipboard or Save buttons.

<figure class="third" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/sideload.png --alt Sideload %}
{% picture blog/elementary/elementary-os-6-odin-released/sideload-progress.png --alt Sideload progress %}
{% picture blog/elementary/elementary-os-6-odin-released/sideload-success.png --alt Sideload success %}
<figcaption>Sideload</figcaption>
</figure>

Installing third-party apps from outside of AppCenter in elementary OS is as easy as downloading a Flatpak and clicking it; the Sideload utility takes over to present relevant information and get the app installed. In OS 6, Sideload now supports Flatpak bundles, expanding the types of apps that can be installed. Sideload also now links to the new _System Settings_ → _Applications_ → _Permissions_ page so you can tweak anything if you'd like after installation. And lastly, Sideload helpfully offers to trash the downloaded installer file once the app is installed to help keep your Downloads folder tidy.

## Easier to Get & More Inclusive

We're always expanding the elementary OS platform and ecosystem making it more useful, desirable, get-able, and keep-able—an approach coined by former Canonical designer [Matthew Paul Thomas](https://twitter.com/mpt) all the way [back in 2010](https://www.youtube.com/watch?v=GT5fUcMUfYg) and covered in our [AppCenter & the Future of the Universe](https://blog.elementary.io/appcenter-the-future-of-the-universe) post.

elementary OS 6 makes great strides on the "get-able" front; first [teased in 2018](https://blog.elementary.io/meet-the-upcoming-installer), the new installer front-end designed and developed by elementary debuts in OS 6. The new installer has been designed to be simpler, more straightforward, and much faster than the previous Ubiquity installer developed by Canonical for Ubuntu.

<figure class="third" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/initial-setup-language.png --alt Initial Setup Language page %}
{% picture blog/elementary/elementary-os-6-odin-released/initial-setup-keyboard.png --alt Initial Setup Keyboard page %}
{% picture blog/elementary/elementary-os-6-odin-released/installer-try-install.png --alt Installer Try or Install page %}
{% picture blog/elementary/elementary-os-6-odin-released/installer-drives.png --alt Installer Drives page %}
{% picture blog/elementary/elementary-os-6-odin-released/installer-encrypt.png --alt Installer Encryption page %}
{% picture blog/elementary/elementary-os-6-odin-released/installer-progress.png --alt Installer Progress page %}
{% picture blog/elementary/elementary-os-6-odin-released/installer-success.png --alt Installer Success page %}
<figcaption>Installer</figcaption>
</figure>

A key consideration of the new installer is that "every install is an OEM install." The installer's job is solely to get the OS onto a device and little more; after installing, you're prompted to either shut down (e.g. to hand the device off to another person) or restart into the new OS. Either way, user account creation is handled in the installed OS by our new Initial Setup utility, then you log straight in to start using your account.

<figure markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/initial-setup-user.png --alt Initial Setup User page %}
<figcaption>Initial Setup</figcaption>
</figure>

This means we don't handle network connectivity, user accounts, or updates in the installer itself, greatly streamlining and speeding up the process. It also means small OEMs or organizations that hand-install the OS on devices (rather than using an imaging server, for example) can do so quickly and easily, shutting the device down once it's installed and shipping it off straight to a user. It also means OEMs or organizations that _do_ use an image-based approach can configure a custom install of elementary OS (e.g. by installing any additional hardware drivers), delete the OEM account, and make an image of that; once booted on hardware, Initial Setup will run for a new user just like on a standard fresh install.

With elementary OS shipping on [several hardware devices from multiple retailers](https://store.elementary.io), we've also continued investing in [hardware improvements]({% post_url elementary/2021-02-03-hardware-improvements-coming-to-elementary-os %}). OS 6 features a new streamlined startup prominently displaying the device manufacturer's logo along with minimal elements like a loading spinner or password entry for encrypted drives. Startup is intentionally non-elementary-branded as it feels much more seamless—and we don't need to constantly advertise your operating system to you.

<figure class="half card" markdown="1">
{% picture blog/elementary/hardware-improvements-coming-to-elementary-os/boot-loading.jpg --alt Boot Screen: loading spinner %}
{% picture blog/elementary/hardware-improvements-coming-to-elementary-os/boot-password.jpg --alt Boot Screen: unlocking an encrypted drive %}
<figcaption markdown="1">
elementary OS 6 startup on a [Star Labs](https://starlabs.systems/?rfsn=4227837.e8f025) device
</figcaption>
</figure>

elementary OS 6 also includes improved performance across the desktop and apps thanks in part to our work on experimental Pinebook Pro and Raspberry Pi builds. With OS 6, we've improved process communication between desktop components and reduced disk reads and writes, which is especially evident on lower-clocked processors and slower storage mediums like spinning hard drives and SD cards. These performance improvements benefit the entire range of devices on which elementary OS runs.

### Accessibility & Inclusivity

Another element of our approach to elementary OS is to ensure it's as inclusive as possible—meaning it's able to be used comfortably by anyone, including those with temporary, chronic, or permanent accessibility needs. As such, we've focused in on our [Accessibility Features are Just Features](https://github.com/orgs/elementary/projects/35) efforts in OS 6.

<figure class="card" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/a11y-indicator.png --alt Universal Access indicator %}
<figcaption>Universal Access indicator</figcaption>
</figure>


elementary OS 6 includes a new Universal Access indicator to expose toggles for features like the Screen Reader, Onscreen Keyboard, Dwell Click, etc. so they're easy to turn on or off as needed. This new indicator can be manually turned on in System Settings, but also automatically shows on the login and lock screen greeter and in the installer to make elementary OS more accessible out of the box. Dwell Click and Locate Pointer both sport new accent-colored animations in OS 6 to make them more visible when in use. We've also improved usability throughout the OS with new features and better defaults—curb cuts, if you recall my blog post from a couple of years back:

<div style="margin: 3em auto;">
{% assign post = site.posts | where:"slug", "accessibility-features-are-just-features" | first %}
{% include post-summary.html post=post %}
</div>

The redesigned and rewritten system stylesheet ensures much higher contrast by default across the desktop and native apps—including those from developers on AppCenter; this can help people with vision needs, those with unconventional hardware setups like projectors or older, low-contrast displays, and even just anyone using their device in a bright environment like direct sunlight.

Expanded text size scaling and a new dyslexia-friendly text option can help those with specific vision or reading needs. In addition, the new system stylesheet now uses the text size to smartly scale the rest of the UI, making it a real option for handling display resolutions that don't fit nicely into the integer scaling buckets—all while keeping the UI pixel-perfect and crisp.

The new dark style preference is a visual treat for those who prefer it, but it can also help those with light sensitivity and migraines be able to more comfortably use elementary OS. The new Slate accent color can reduce the effect of distracting colors for those with specific learning or attention needs. And by exposing keyboard shortcuts more consistently in context menus and tooltips throughout the entire desktop in OS 6, we're helping newer users, keyboard warriors, and those with limited mobility learn how to accomplish their tasks without reaching for the mouse or touchpad.

Multi-touch gestures are a new slick way you can navigate the OS on a touchpad or touch screen, but also improve accessibility: previously keyboard-only features like desktop zoom are now able to be used solely on a touchpad or touch screen with a three- or four-finger pinch to zoom. For zoom specifically, we've also increased the maximum zoom level and added feedback when unable to zoom further in either direction.

We've also improved our iconography in elementary OS to improve accessibility and inclusivity. Consistently rounded shapes across arrows, media controls, and more are more friendly and inviting. Depictions of people in icons are now more generic and gender-neutral. And several color icons have been improved for contrast and visibility across a variety of backgrounds, especially when used with the new dark style.

## …and more

elementary OS 6 debuts a brand new pair of wallpapers designed in partnership with the creative agency [Freehive](https://freehive.com/) and photographer [Brendon Porter](https://brendonporter.com/), released under the [Creative Commons BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

<figure class="card half" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/wallpaper.jpg --alt Odin Wallpaper %}
{% picture blog/elementary/elementary-os-6-odin-released/wallpaper-dark.jpg --alt Odin Wallpaper (dark) %}
</figure>

We've also refreshed our set with four new wallpapers that are higher-resolution, add variety, and expertly show off the new accent colors. The images inline here are downsized and compressed; you can grab the full-resolution images from elementary OS 6 or on [GitHub](https://github.com/elementary/wallpapers).

<figure class="card quarter" markdown="1">
![Tj Holowaychuk wallpaper](/images/blog/elementary/elementary-os-6-odin-released/Tj Holowaychuk.jpg){: width="1920" height="1080"}
![Viktor Forgacs wallpaper](/images/blog/elementary/elementary-os-6-odin-released/Viktor Forgacs.jpg){: width="1920" height="1080"}
![Snow-Capped Mountain wallpaper](/images/blog/elementary/elementary-os-6-odin-released/Snow-Capped Mountain.jpg){: width="1920" height="1080"}
![Martin Adams wallpaper](/images/blog/elementary/elementary-os-6-odin-released/Martin Adams.jpg){: width="1920" height="1080"}
<figcaption>New Wallpapers in elementary OS 6</figcaption>
</figure>

You may have also noticed a brand new system typeface for elementary OS 6: [Inter](https://rsms.me/inter/) by [Rasmus Andersson](https://rsms.me/about/). Inter is a new completely open source typeface carefully crafted & designed for computer screens; we've brought it to OS 6 and worked with Rasmus on refreshed typography in the form of adjusted sizes, weights, color, and rendering settings for improved legibility and contrast.

<figure class="card" markdown="1">
{% picture blog/elementary/elementary-os-6-odin-released/inter.png --alt Inter %}
</figure>

OS 6 comes with additional features, support for newer hardware, updated programming libraries, updated translations, improved System Settings panes, and more. For detailed release notes organized by version number of each individual component, you can always view our [public Releases site](https://releases.elementary.io).

---

## Get elementary OS 6

elementary OS 6 Odin is available as a pay-what-you-can purchase at [elementary.io] today. Localized direct downloads and a torrent magnet link are provided.

<div style="margin: 3em auto; text-align: center" markdown="1">
[FAQ]{: .button.flat }
[Download elementary OS 6][elementary.io]{: .button.suggested }
</div>

We're also keeping a [list of frequently-asked questions][faq] updated as we hear from customers and fans; if you have a question or issue, check there first!

### Devices

We've been working with our [hardware retailers](https://store.elementary.io/) to ensure they're able to offer elementary OS 6 out of the box as soon as possible. **Devices from both [Star Labs](https://starlabs.systems/?rfsn=4227837.e8f025) and [Laptop With Linux](https://laptopwithlinux.com/?ref=36&utm_source=referral&utm_medium=elementary&utm_campaign=elementary) are shipping with OS 6 now**; visit retailers' individual sites for more information.

---

## Thank You

elementary OS is made in large part by volunteer contributors from around the world. For OS 6 specifically, we'd like to thank the following individuals for their substantial contributions.

- [Corentin Noël](https://github.com/tintou) – OS patches, Files, Flatpak, Camera, and more
- [David Hewitt](https://github.com/sponsors/davidmhewitt) – OS build system, performance, Settings Daemon, AppCenter, Installer, and more
- [Igor Montagner](https://github.com/igordsm) – Camera and more
- [Jeremy Wootten](https://github.com/jeremypw) – Files, Code, Calculator, and more
- [José Expósito](https://github.com/sponsors/joseexposito) – Multi-touch, window management, Screenshot, and more
- [Marco Betschart](https://github.com/sponsors/marbetschar) – Online Accounts, Mail, Tasks
- [Marius Meisenzahl](https://github.com/sponsors/meisenzahl) – Flatpak permissions, scheduled dark style, firmware updates, accent color, and more
- [Michael McClurg](https://github.com/mcclurgm) – Calendar, especially with regards to time zones and unit tests
- [Micah Ilbery](https://github.com/micahilbery) – Icons and color palette
- [Ryo Nakano](https://github.com/ryonakano) – Localization, Code Review
- [Sean Davis](https://github.com/sponsors/bluesabre) – Notifications, Sound indicator

Many of these contributors are on GitHub Sponsors, meaning you can show your appreciation and fund their ongoing work by sponsoring them directly.

To all of our sponsors and customers: thank you! Your contributions fund our ongoing work and make it all possible. If you’d like to help build and improve elementary OS, don’t hesitate to <a href="https://elementary.io/get-involved" onclick="plausible('Link: Get Involved')">Get Involved</a>.

[elementary.io]: https://elementary.io
[faq]: https://github.com/elementary/os/wiki/elementary-OS-6-Odin-FAQ
[hardware retailers]: https://store.elementary.io/
