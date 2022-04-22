---
title: "AppCenter Spotlight&#58; quickDocs"
description: "Quickly Read Developer Docs"
author: cassidyjames
date: 2018-04-13T05:26:04.963Z
image: /assets/images/appcenter-spotlight-quickdocs/1bShmiBWY3py4Zxx7g8MWxw@2x.png
tags:
  - "open-source"
  - "appcenter-spotlight"
  - "documentation"
  - "developer-tools"
  - "elementary-os"
---

<figure markdown="1">
![](/assets/images/appcenter-spotlight-quickdocs/1bShmiBWY3py4Zxx7g8MWxw@2x.png)
</figure>

<figure markdown="1">
![On elementary OS? Hit the button to get quickDocs.](/assets/images/appcenter-spotlight-quickdocs/1uU5P3dtqz4TjfjYeL3Dm1Q@2x.png)
<figcaption markdown="1">
On elementary OS? Hit the button to get quickDocs.
</figcaption>
</figure>

quickDocs is a lightweight reader for developer documentation, made by Matt Harris. I chatted with Matt a bit about quickDocs and his experiences with elementary OS, AppCenter, and AppCenter Dashboard.

<figure markdown="1">
![](/assets/images/appcenter-spotlight-quickdocs/1zP0dTEh-tmefcu0yDCl3HA@2x.png)
</figure>

## Meet Matt Harris

Matt is a student in the UK, and loves playing music in his spare time. “I play guitar, sax, and piano. They act as a bit of a break from studying,” he told me. In between studying and making music, he also spends his time using and contributing to open source projects like elementary OS. “I’ve been using elementary OS for just under a year I think. I settled on it after hopping between Arch and Ubuntu in the end because of how polished it was.”

The idea for quickDocs itself actually came when Matt was looking at the elementary developer documentation. “I was inspired to make quickDocs after coming across the [developer.elementary.io](https://developer.elementary.io) website,” he explained. “After I saw how straightforward it was to publish an app on AppCenter, I started thinking up ideas.” Then it hit him. “One of the main tools I use while programming are developer docs, so I thought it would be perfect to make a native app instead of keeping loads of browser tabs open.” Thus, quickDocs was born.

## The Journey to 2.0

<figure markdown="1">
![](/assets/images/appcenter-spotlight-quickdocs/0RroDQe8PUP44_FOw.png)
</figure>

<figure markdown="1">
![quickDocs supports both Valadoc and DevDocs](/assets/images/appcenter-spotlight-quickdocs/0m_r5Si7peK7eqwZP.png)
<figcaption markdown="1">
quickDocs supports both Valadoc and DevDocs
</figcaption>
</figure>

When first released as 1.0 in January, quickDocs was already a competent documentation viewer with support for both Valadoc and DevDocs. In 1.1, Matt added a dark mode, while 1.2 brought initial offline support. But with version 2, quickDocs has been revamped.

“The main improvements of the 2.0 release was improving the offline Valadoc functionality,” Matt told me. “Before, pressing the download button would open a Terminal that ran a hacky script to parse all the URLs, download them, and unzip them to a folder,” he explained. “Then if the user was offline, I’d use the built-in WebKit file view to show the folders and allow the user to view them.” It was a start, but wasn’t the prettiest thing.

<figure markdown="1">
![](/assets/images/appcenter-spotlight-quickdocs/1HT_6tPGKZ12By1ajFQeNgQ.png)
</figure>

<figure markdown="1">
![The initial offline experience from quickDocs 1.2](/assets/images/appcenter-spotlight-quickdocs/15uYYRnwp3faA81PXlYLugQ.png)
<figcaption markdown="1">
The initial offline experience from quickDocs 1.2
</figcaption>
</figure>

But now he’s has added a new UI for downloading offline docs natively, plus a brand new offline docs UI that allows for searching and easier viewing. “You can download or remove only the docs you want, then they’re shown using the DevHelp library, which provides a nice native UI with search capabilities.”

<figure markdown="1">
![](/assets/images/appcenter-spotlight-quickdocs/0k1MPtos9uG79loNT.png)
</figure>

<figure markdown="1">
![Download, manage, and browse offline library docs right in the app](/assets/images/appcenter-spotlight-quickdocs/1GFAfHGpdUEK1fJIoAOklpg.png)
<figcaption markdown="1">
Download, manage, and browse offline library docs right in the app
</figcaption>
</figure>

It’s a much more integrated experience, and will make developers’ lives easier whether they’re online or off.

## Developing for AppCenter

Matt’s experience developing for AppCenter on elementary OS has been a positive one. He considers quickDocs to be his first proper app, and part of his success has come from the ease of developing for elementary OS and publishing on AppCenter. “Developing with AppCenter has been a joy,” he acclaimed. The community of first- and third-party developers is also a boon. “Publishing with AppCenter Dashboard is super easy, and the support from the community is amazing — if you’re stuck on something, there’s always someone there to help you.”

Matt has also been helping us test the [just-announced Houston CI service](https://medium.com/elementaryos/introducing-houston-ci-3179ec34e726) before the wider roll out, and it’s a definite time saver. “Occasionally I’ve been caught out by the odd thing during the testing process, but now using Houston CI has helped me catch issues before I publish.” Developers, stay tuned to our Medium for updates about Houston CI!

## Get quickDocs

quickDocs 2.0 is [available on AppCenter](https://appcenter.elementary.io/com.github.mdh34.quickdocs) today for the suggested price of **just $2**. Its source code is also openly-licensed and [available on GitHub](https://github.com/mdh34/quickDocs).

<figure markdown="1">
![On elementary OS? Hit the button to get quickDocs.](/assets/images/appcenter-spotlight-quickdocs/1uU5P3dtqz4TjfjYeL3Dm1Q@2x.png)
<figcaption markdown="1">
On elementary OS? Hit the button to get quickDocs.
</figcaption>
</figure>

What does the future hold for the app? “At the moment I’m quite happy with quickDocs,” Matt says. “But I’m always open to feature suggestions — if I come across another great docs source I will definitely add that.”

To hear more from Matt, be sure to follow him on [GitHub](https://github.com/mdh34)!

*Thanks to everyone who’s bought an app like quickDocs on AppCenter, developers publishing their apps on AppCenter, our supporters on[ Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from[ our store](https://elementary.io/store/). Each and every contribution helps make all of this possible, and we wouldn’t be here without you.*

*If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*