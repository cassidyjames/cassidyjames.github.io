---
title: Why we write elementary apps in Vala
description: A tremendously effective tool for our needs
date: '2014-05-12T07:00:00.000Z'
author: danrabbit
image: https://cdn-images-1.medium.com/max/2000/1*zqydEido_Yipr0YiJv5hYg.png
tags:
  - vala
  - devs
  - meta
  - evergreen
---

<figure markdown="1">
![](https://cdn-images-1.medium.com/max/2000/1*zqydEido_Yipr0YiJv5hYg.png)
</figure>

If you follow elementary OS development, you may know that we do not write our applications on C or Python, but rather a language called [Vala](https://wiki.gnome.org/Projects/Vala). While it is true that a more mainstream language would lower the barrier to entry for new first-party and third-party developers, Vala has proven to be a tremendously effective tool for our needs.

Vala is an object-oriented programming language developed by the [GNOME Foundation](https://www.gnome.org/), which was first released in 2006. Syntax-wise, Vala looks and acts very similarly to Java or C#, which makes it easy for new contributors to leverage their knowledge and experience from other languages. Vala’s clear syntax and tight coupling with the strongly-typed GObject system promotes highly readable, expressive, and maintainable code, while preventing entire classes of crashes and bugs.

Since Vala compiles to C (and then into binary), we gain access to a large number of bindings for libraries written in C. This is extremely important given the number of C libraries available for the Linux desktop. All of our desktop applications are written using the [GTK](https://www.gtk.org/) toolkit, and many rely heavily on related GObject-based libraries, including Gee, WebKitGTK, VTE, and GStreamer. Bindings for dozens of popular GObject C libraries exist, and writing new ones is easy.

Before we adopted Vala, we wrote our desktop applications in Python. As both a language and a platform, Python made developing apps quick and easy. However, this ease of development came at a serious cost — performance, binding support, and maintainability became major pain points for us with Python. Worse, the slow and fragmented adoption of Python 3 over Python 2, particularly across Linux distributions, made packaging our apps and developer tools for different environments tedious and challenging. Vala’s native binaries have proven to be a better fit for us.

<figure markdown="1">
![A Simple GTK Application in Vala](https://cdn-images-1.medium.com/max/2000/1*HjaeSVLblDtdCwOkBR2xcA.png)
<figcaption>A Simple GTK Application in Vala</figcaption>
</figure>

Because Vala is developed by the same incredible folks who make GTK, integration between Vala and GTK is tight. Extending GTK with Vala has also proven successful. In fact, we’ve crafted our own set of widgets that build on and complement what GTK provides by default. This super-set of GTK, called [Granite](https://github.com/elementary/granite), is at the heart of nearly every elementary application, and Vala’s excellent object-oriented inheritance system, among other sophisticated language features, have been key to our development.

Vala has excellent documentation, be it in the form of [tutorials](https://chebizarro.gitbooks.io/the-vala-tutorial/content/), [code samples](https://wiki.gnome.org/Projects/Vala/Examples) or a [very easy-to-use API Reference](https://valadoc.org/). So if you’re interested in [hacking on our projects](https://elementary.io/get-involved) (which we very much appreciate — we are always looking for new contributors!), or are planning to release fantastic third-party desktop applications for elementary OS, we can’t recommend Vala enough. Dive in!
