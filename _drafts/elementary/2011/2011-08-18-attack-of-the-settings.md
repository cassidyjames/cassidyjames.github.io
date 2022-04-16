---
title: Attack of the Settings
author: aroman
image: https://i.imgur.com/var14.png

tags:
  - switchboard
---

Computers are complicated. There’s literally an infinite number of things one can do with a modern PC, and an equally large number of ways to configure it and its software. Most people, however, have no need or desire to change and tweak every single nook and cranny of their computer. Most people prefer their computer to be elementary in nature—and software configuration is no exception.

Settings and configuration for the different components of our computers is typically scattered amongst many disjointed, disparate, stand-alone applications with different user interfaces and behavior. Unfortunately elementary OS and many other popular operating systems have been lacking in this critical department when it comes to simplicity and ease-of-use.

Today I am announcing the initial public release of Switchboard, an application and developer toolkit designed to tackle this very issue. In a nutshell, Switchboard solves this problem by enforcing coherency with regard to interface and behavior, and by automatically organizing the different configuration options into one unified and central location.

## How does it work?

Good question. For starters, “Switchboard” is really two discrete components: the user-facing app and developer-facing library. Let’s start with the former. The Switchboard app is just that—it’s a graphical, elementary-style app just like any other on the elementary desktop. In fact, here’s a picture of it:

![Screenshot](https://i.imgur.com/var14.png)

As you can see, Switchboard arranges the different settings available to you by group, and then organizes those into categories. This layout is designed to make it as easy and quick as possible to find exactly what you’re looking for, and get at it quickly. In Switchboard terminology, those different groups (such as User Accounts or Power settings) are called plugs.

## Plugs

If the app above is the brains of Switchboard, then plugs are its brawn. Plugs are small mini-applications written using LibPantheon—a Vala library that provides APIs for interacting with and extending the Pantheon desktop. LibPantheon provides APIs and tools for creating plugs for Switchboard, and it is mainly because of this consistent set of APIs that Switchboard is able to provide a clean and coherent experience. On the technical level, Switchboard plugs are executable binaries (like normal desktop apps) with small textfiles that describe the plug to Switchboard. When a plug is selected from the Switchboard app, the plug embeds itself into the window of Switchboard, giving the illusion that Switchboard contains all of the code for it’s plugs.

## Switchboard is not…

To alleviate and minimize any confusion, Switchboard is not a place for your application to store its settings or provide configuration options. It is not a replacement for things like GSettings, dconf, gconf, and configuration files. Rather, it is a graphical abstraction of such technologies for system components and hardware. A general rule of thumb is that if your app is stand-alone and not hardware related, it doesn’t need a plug. Things like your favorite dictionary app or game should use technologies like the app menu and configuration screens to modify their behavior. Switchboard is meant to provide a place for global configuration settings, such as power options, device syncing, or third-party hardware.

## BYOP (Bring Your Own Plugs)

Switchboard does not in fact come with any plugs. Rather, plugs are packaged and installed separately to make Switchboard as modular and easy-to-extend as possible. Additionally, this paradigm makes it very easy for third-party developers to use Switchboard. Suppose you’re a hardware company that just produced a brand new gadget that needs to sync with or be configured via a computer. Instead of needing to create a separate app and worry about how it will look and where it will be located, they need only to create a Plug for Switchboard and offer a software package that installs it. But don’t worry—future releases of elementary OS will of course come out-of-the-box with all of the plugs you need.

## Calling All Developers!

With Switchboard just being released, there is an abundant need for plugs. In order to ensure that Switchboard is a success for it’s debut in elementary OS (Luna!), plugs must be created. We have worked hard to make the experience of developing plugs as easy and accessible as possible. If you would like to try your hand at developing Switchboard plugs (it’s fun—I promise!), or even just to learn more about the Switchboard architecture, you have a myriad of resources at your disposal:

- [Source code on GitHub](https://github.com/elementary/switchboard)
- [Plugs on GitHub](https://github.com/elementary?q=switchboard-plug#org-repositories)
- [YouTube screencast explaining much of this article and giving a demo](http://www.youtube.com/watch?v=JF37THZoNsA)
- [The standard elementary Human Interface Guidelines](https://elementary.io/docs/human-interface-guidelines)
- [Vala documentation](https://valadoc.org/switchboard-2.0/Switchboard.html)
- [Launchpad Blueprint outlining some of the plugs needed for Pantheon and Luna](https://blueprints.launchpad.net/switchboard/+spec/default-plugs)

Thanks for reading, and here’s to Luna and beyond!
