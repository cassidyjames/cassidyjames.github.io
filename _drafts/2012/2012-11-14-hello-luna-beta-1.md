---
title: Hello, Luna Beta 1
author: cassidyjames
image: /images/hello-luna-beta-1/pantheon.png
thanks: true

tags:
  - luna
  - pre-release
---

Developers and testers, today we are happy to announce the first beta release of elementary OS Luna. We've been working hard the past year and a half to create the next generation of elementary, and it begins with this beta.

## What's New

Luna is our greatest undertaking yet, and along with it have come many new apps, features and development libraries. By integrating and innovating with the latest technologies, we’re building a platform that free software developers can be excited about.

### Pantheon

**Pantheon** is our new desktop environment and shell. It consists of the greeter, panel, app launcher, dock, window manager, settings app, and theme. Our primary focus during our development of Pantheon has been to provide a clean but powerful stage for great apps. That means a shell that fades into the background when not in use and consumes very few system resources. But it also means building a desktop that has opportunities for tight integration and offering system services.

![Pantheon](/images/hello-luna-beta-1/pantheon.png)

Our login screen, **Pantheon Greeter**, is now built on LightDM. It features smooth graphics and animation with Clutter, displays the time and date with beautiful typography, and has built-in accessibility.

**WingPanel** is our panel in Luna. It's lighter-weight than the panel in Jupiter and boasts a simpler, more refined look. It also features reworked indicators; clicking an indicator reveals a pleasing popover with the relevant items, and the Applications item now opens Slingshot instead of a menu. In addition, the legacy GNOME applets of old have been fully deprecated.

**Slingshot** is our new app launcher. It displays an optimal 3x5 paged grid of app icons, the result of iterative design and user testing. We’ve targeted three classes of users: those used to the point-and-click/tap mechanism present in modern interfaces, those accustomed to the category-based list view, and those who want full keyboard control including opening, searching, and launching in just a couple of keystrokes. Slingshot is built for speed and utilizes Granite which ensures consistency with the rest of the system.

Our dock is now based on **Plank**, meaning it’s been completely rewritten in Vala and features LibUnity integration. This allows the dock to show app badges (a count of unread items), progress bars, and contextual quicklist items. Its settings are now integrated with Switchboard instead of being a stand-alone interface.

**Gala** replaces Compiz for window management. Built on LibMutter, it offers a light and smoothly-animated experience in addition to support for more complex decoration theming. Power users will love the new workspace management features as well.

We’ve unified system configuration in the form of our new settings app, **Switchboard**. Switchboard supports a slick open standard for settings panes, called plugs. Luna comes with a number of plugs preinstalled as well as a transitional compatibility layer for GNOME’s System Settings panes.

Lastly, the **elementary stylesheet** has seen a number of enhancements since Jupiter. In Luna, the theme is now primarily GTK3 and goes hand-in-hand with Granite. The theme is now CSS-based which allows us a lot better control over the final look. In addition, it’s easier than ever to implement excellent typography within your apps. Lastly, the theme includes built-in default styles like .content-view and it’s super easily to override styles within your app.

### Underlying Technologies

Luna is powered by newer technologies, both developed by elementary and other open source projects, bringing a wide number of improvements to the OS.

Below the UI, elementary OS uses the **Linux kernel**. The kernel has seen significant improvements, including wider hardware compatibility, better wireless drivers, improved graphics drivers, and many low-level advancements.

Throughout the OS we’ve focused on pushing **GTK3** as much as possible. Every default user-oriented app uses GTK3, meaning they take advantage of our sleek new theme.

During the Luna cycle, we’ve built out our user interface technology, **Granite**. Granite is an extension of GTK, providing a select number of improved, useful, well-designed, and consistent widgets for apps. Granite now includes a welcome screen, thin panes, popovers, modebuttons, static notebook, dynamic notebook, decorated window, source list, and the about dialog. Each of these widgets are available to app developers and are used throughout the OS, bringing beautiful design and both visual and behavioral consistency between apps.

### Apps

One of the biggest transformations in Luna occurs in our default web browser, **Midori**. It features a newer and much faster version of WebKit, providing an all-around better experience and supporting the latest in CSS3 and HTML5. We’ve also integrated the new Dynamic Notebook from Granite, giving Midori a beautiful and consistent tabbed browsing experience. Midori also makes use of Popovers in its bookmarking interface. Lastly, Midori has received many important compatibility and security updates.

Another important update in Luna is the inclusion of **Geary**, a new mail client. It supplants Jupiter’s Postler and does a mighty fine job. Geary brings some of the best features of webmail to the desktop—like threaded conversations and excellent HTML rendering—while excelling in desktop integration with attachment handling, mail notifications, and more.

**Maya**, a new app in Luna, is a simple desktop calendar. With it you can create, view, and manage events to organize your agenda.

With Luna, we’re debuting our brand new music player: **Noise**. Noise combines a beautifully simple interface with a powerfully fast backend to let you get right at your music. It makes excellent use of Granite’s ThinPane and DecoratedWindow widgets, ensuring consistency with the rest of the desktop.

Luna also sees the introduction of **Scratch**, an always-saved text-editor. Scratch is super lightweight, has great code language support, and is built on a powerful plugin system so you can transform it into your own IDE. It’s deceivingly simple and surprisingly powerful.

Rounding out our development tools is (Pantheon) **Terminal**, a lightweight and simple terminal emulator. It makes use of Granite, meaning it has excellent and consistent tab management.

Last but not least is **Files**, our new file manager. Files is built on Granite, bringing multiple widgets in for increased consistency. It also features desktop integration through LibUnity, and unique features like a column browsing view and plugin support.

## How to Help

elementary OS is crafted **entirely by volunteers**. We happily accept any help offered to us from the community. There are a number of ways you can help out and make the final release even better.

First of all, go ahead and make sure you're registered with Launchpad. We use Launchpad for blueprint planning, code hosting, and bug tracking; it’s a tool that is very useful for us and is essential for testers to use.

### Report Bugs

What happens if you come across a bug? Report it! We’re pushing out this beta to allow wider testing before we release a final version, and it’ll only get better if we know about any bugs that might exist. There are a number of ways to report bugs.

First, if something crashes, look for the "Report a Problem" dialog which should pop up. If you encounter a bug without that happening, go ahead and click the "Report a Problem" item on the dock. This will log some system information (crash reports and app logs), let you check over the contents, and then upload it to Launchpad to a private bug. Launchpad will open in your browser where you can double-check the bug and **give us more details so we can fix it.**

If you’re not in elementary OS but still need to report a bug, you can simply visit Launchpad in your browser and report the bug on our project page. No matter how you report a bug, be sure you’re including any information about what you were doing before the bug occurred so we can successfully track it down.

### Join Development

We’re always happy to meet new developers. If you’re a developer or tester interested in helping elementary more closely, join #elementary on irc.freenode.net. We can talk with you and help direct you toward a project you could play a big role in.

There is also the elementary Developer Community mailing list, where developers can ask questions, propose or brainstorm ideas, and discuss development in a non-real-time fashion. It’s a great place to introduce yourself as a developer and find a project to help with.

With this beta, we’ll be targeting bugs toward the [Luna Beta 2 milestone on Launchpad](https://bugs.launchpad.net/elementaryos/+milestone/luna-beta2). It might be a good idea to familiarize yourself with that milestone and even try tackling some bugs as they pop up.

### Contribute Financially

Last but not least, you can [contribute financially to elementary](https://elementary.io/get-involved/#funding). We’re 100% volunteer and rely on your contributions to fund things like the website, travel expenses to developer conferences (where we meet incredible people, learn valuable new things, and make friends with other projects), and anything else that furthers our mission. Every little bit counts and we offer multiple ways to donate like credit card, flattr, and PayPal.

## How to Download/Install

Now that you’ve read about all of the work that’s gone into this beta and how to help us out, you probably want to know how to download and install it. Downloading is simple; just click the button below for your processor type (32- or 64-bit). Then just burn it to a CD or USB disk as you would any other OS. If you need help, you can follow along with our user guide from Jupiter.

_Note: broken download links have been removed._

Remember that **this is a beta and is not indicative of the final version.** We respectfully ask any press to make this clear if they decide to write about this beta. We’re pushing this beta out to get wider testing and feedback before our final release and as such, it is not intended for typical end users.
