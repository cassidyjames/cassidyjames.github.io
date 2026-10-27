---
title: "Scratch is now elementary Code"
description: "More than a name change"
author: cassidyjames
image: /images/blog/elementary/scratch-is-now-elementary-code/1JVvsDBXzN9Q7jhiGOD0B3A.png
legacy: elementary
canonical: https://blog.elementary.io/scratch-is-now-elementary-code/
sitemap: false
updated: 2018-01-02
tags:
  - juno
  - devs

permalink: /blog/elementary/scratch-is-now-elementary-code/
redirect_from:
  - /blog/scratch-is-now-elementary-code/
---

In 2011, elementary debuted our own “text editor.” We’ve shipped it in elementary OS ever since as Scratch, the default app for handling any plain text files, but it’s evolved into more than a simple notepad.

### …but what is a Text Editor?

We soon realized that the premise of a “text editor” is kind of silly; the fact that an app handles plain text files doesn’t inform _how_ it’s used. Is it for note-taking? There are lots of features we could add for that (check lists, notebooks, highlighting, etc.). Is it a last-resort utility that nobody really means to open? We could strip it down to hardly anything if that’s the case.

For Scratch, we always intended for it to be a _code_ editor, not just a generic _text_ editor. We’re not trying to build a note-taking app or stripped down utility. In fact, we use Scratch on elementary OS _to build elementary OS_.

### Focused on Code

By rebranding to Code, it lets us focus on what we intended from the start: building a great native code editor for developers on elementary OS. It also lets us reduce confusion between our app and the [visual programming language](https://en.wikipedia.org/wiki/Scratch_%28programming_language%29) also known as Scratch. :)

<figure class="third" markdown="1">
{% picture blog/elementary/scratch-is-now-elementary-code/1UYsmhLP8L6OHrLP55dBqNA.png %}
{% picture blog/elementary/scratch-is-now-elementary-code/1OA7Np5o_n3FymO9kd3doOw.png %}
{% picture blog/elementary/scratch-is-now-elementary-code/1JVvsDBXzN9Q7jhiGOD0B3A.png --alt Old, generic, “text editor” Scratch icon versus the new, shiny, Code icon %}
<figcaption>Old, generic, “text editor” Scratch icon versus the new, shiny, Code icon</figcaption>
</figure>

Code follows our [revised naming scheme](https://medium.com/elementaryos/cleaning-up-app-codenames-ef9fc637ddef) of just naming apps what they are or what they get you to; Files, Music, Videos, Calendar, Mail, Photos, etc. Now with Code, there’s no question as to the app’s purpose or intent. If you need to disambiguate, you can call it “elementary Code.”

#### Updates

From here forward, we’ll be making more code-editing-centric decisions around project management, plugins enabled by default, etc. In fact, we’ve already started making a number of these decisions and cleaning up preferences that make little sense in the context of reading and writing code.

{% picture blog/elementary/scratch-is-now-elementary-code/1wF6RQzzo9iY5wwyafnsb_Q.png %}

We now enable the folder manager plugin (where you can load a project’s file tree into the sidebar) by default, there have been a number of improvements to the plugin like move to trash and rename, We also load the Symbols Outline plugin by default, we always display line numbers, the current line of code is highlighted by default, we have a new “draw spaces for highlighted text” option, tab width, highlighting, and cursor position information in shown in the HeaderBar, and more.

### Coming to Juno

This is the first of many big changes coming to a new major release of elementary OS. Stay tuned for sneak previews and teasers as we work on the next big thing!
