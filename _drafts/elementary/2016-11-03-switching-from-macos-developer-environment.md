---
title: 'Switching from macOS: Developer Environment'
description: Part 2 of a 5-part series
author: cassidyjames
image: https://cdn-images-1.medium.com/max/2000/0*NOxTGcFB2imrjWTx.png
tags:
  - switching-from-macos
  - devs
  - evergreen
---

> The previous piece covered [The Basics]({{ site.baseurl }}{% post_url 2016/2016-11-02-switching-from-macos-the-basics %}).

I am a professional web developer working on multiple continuously delivered node apps on GitHub, working alongside a professional back-end developer who manages servers and our Elixir API app (among several other projects), and a quickly growing marketing team with an amazing graphic designer/illustrator who designs everything you see on [System76.com](https://system76.com).

I say this because I work in a very fast environment alongside extremely skilled professionals and need my tools to keep up. elementary OS and the tools available to me do so expertly.

## Scratch

Code editors can be a divisive matter; if you’re set on one, it’s likely that you’re going to want to keep using it even on a new platform. If you’re not completely set (or would be willing to try something new), however, I highly recommend you check out the text editor built into elementary OS: Scratch.

![](https://cdn-images-1.medium.com/max/2000/0*NOxTGcFB2imrjWTx.png)

Coming from macOS, you might not even consider the default text editor for your development setup. TextEdit doesn’t even have basic features like syntax highlighting. But you might be surprised to know that most of the development of elementary OS itself is done from within Scratch.

Its killer feature is that it’s always-saved, meaning you never lose work. It also has a great tabbed interface, several plugins (including a mini map, folder browser, and Terminal), comes with the beautiful Solarized color scheme by default, and there are a handful of simple preferences to tweak like a line-width guide and bracket or line highlighting. For many, it’s the perfect text editor or mini IDE.

What if you prefer something like Vim, Atom, or Sublime? No worries, those are all installable in elementary OS as well.

## Files

The built-in Files app in elementary OS looks simple at first (and consequently avoids being overwhelming), but tucks away many advanced features.

![](https://cdn-images-1.medium.com/max/2000/0*FtQ_mk04juPQgoMT.png)

The pathbar at the top of the Files window is not only a way to quickly copy or type the location of the current tab, it doubles as breadcrumbs. This is something that’s hidden by default in macOS Finder and takes up extra space when enabled. In Files it also does smart tab completion and deep search, which are great time savers. Plus, there are handy shortcuts like being able to long- or secondary-click any breadcrumb in the path to get access to folder-wide action as well as jump to its sibling folders.

Advanced functionality is made easy to get to throughout the app. Want to see hidden files? Just hit Ctrl+H or secondary-click anywhere in the folder to show ’em. Want to set specific Unix permissions on a file? Just secondary-click the file and use the straightforward Permissions tab in the file’s Properties dialog. System-wide actions provided by other apps (like Compress, Send via Email, Set as Wallpaper, etc.) are also exposed via the secondary-click menu.

The column view is a nice option for those of you used to that in macOS, and it’s what I prefer when digging into the deep structures of Git projects or Dropbox folders. Tabs have been a staple feature of Files since before they were introduced in Finder and you’ll find features like “Duplicate Tab”, “Close Other Tabs”, and “Undo Close Tab” in the right click menu.

Lastly, in any folder (or from its breadcrumb!) you can secondary click to get an “Open in Terminal” action. This lets you jump right into a new Terminal window from whichever path you were viewing which can be a nice time saver when you want to just dive into development. Which leads me to…

## Terminal

![](https://cdn-images-1.medium.com/max/2000/0*-U5_e_qBdeYu5LC2.png)

The Terminal app in elementary OS is simple yet powerful (noticing a trend?). You’ll first notice the beautiful dark UI and nice fonts, but next you’ll see tabs.

Right out of the box you get advanced tab features front and center. You can duplicate the tab you’re in, keep multiple processes running in the same window, and pop tabs out into their own windows. You also get a handy tab history/undo closed tab feature which has saved me many times.

When a process completes in an unfocused tab or window, you get a notification bubble (which you can click to focus the tab/window). This is great for seeing that a long-running process completed in the background or if something caused your server app to crash.

Another great feature is backlog search; you can hit the search icon to instantly search through the entire backlog of the current tab, which is great for skimming logs for certain keywords.

Lastly, I really love the smart copy-paste features, and it shows how smart design can improve even the oldest of apps. If you’ve highlighted text and Ctrl+C, Terminal knows that you likely wanted to copy text instead of end the current process (if any), so it copies the text to the clipboard. Similarly, you can just Ctrl+V to paste in the terminal instead of having to work around with extra modifier keys.

## Package Manager

It wouldn’t be a developer-oriented post without mentioning a package manager. Thankfully, elementary OS has one baked right in!

![](https://cdn-images-1.medium.com/max/2000/0*Sm3qxZOL5zW14MwS.png)

elementary OS is built on Ubuntu and Debian technologies like [Apt](https://wiki.debian.org/Apt). If you’re not familiar, Apt is a system-wide package manager that everything from the app store, updates, and third party packages use. It’s kind of like having Homebrew installed, but baked into the whole OS.

For example, to get started with Git on elementary OS, you can just `sudo apt install git` from Terminal on a fresh machine, and seconds later you’re ready to go. Hitting **Update All** in AppCenter (or running `sudo apt update && sudo apt upgrade` if you prefer) updates not only your development packages, but your whole OS and all of your apps. You can also install any downloaded `.deb` file designed for the version of elementary OS (or underlying version of Ubuntu), similar to installing a “bottle” in brew parlance.

Having the entire Debian repository at your fingertips is incredibly awesome, and it’s a huge reason longtime Linux users love Linux.

## Developing for Other Platforms

Much of this post has been focused on web or native elementary OS development. If you’re a developer for other platforms, there are various ways you can continue developing while using elementary OS.

[Android Studio](https://developer.android.com/studio/index.html) is officially supported on Linux. Its included instructions are for Ubuntu, but work the same on elementary OS due to their shared core. Facebook also has a [React Native](https://facebook.github.io/react-native/releases/0.21/docs/getting-started-on-linux.html) guide for Linux that should also work on elementary OS. [Electron’s](http://electron.atom.io/) docs include information for building from Linux, which again, works on elementary OS. [JetBrains](http://www.jetbrains.com/)’ several IDE products line IntelliJ all run on elementary OS.

Essentially, most big companies are catering more and more to being able to develop on a Linux-based platform like elementary OS. Even Apple has released [Swift](https://swift.org) for Linux. While they still require macOS for Xcode (so no easy iOS development without a virtual machine for now), it’s clear that Linux-based platforms like elementary OS are the future of both web and native development.

Do you develop on elementary OS? What are your favorite tools/features? Let us know on social media!

_Daniel Foré contributed to this post._

