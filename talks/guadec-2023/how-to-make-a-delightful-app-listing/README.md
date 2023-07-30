# How to Make a Delightful App Listing

Revised version of a talk I presented at Ubuntu Summit 2022, with updated GNOME- and Flathub-specific information.

- [Slides (1.8 MB PDF)](How to Make a Delightful App Listing - Cassidy James Blaede - GUADEC 2023.pdf)

## Speaker Notes

### Magic8Ball by Magic8Ball Developers

Magic8Ball is a simple GTK4 toy magic eight ball program
for GNU/Linux written in Vala using GNOME technologies
and making use of Libadwaita. It supports Xorg and
Wayland.

>How many of you have **seen an app listing like this**? 
>
>How many of you have **_written_ an app listing** like this?

### Clairvoyant by Cassidy James Blaede

Ask questions, get psychic answers

Does he love you? Should you have pizza for dinner? Is there such thing as a stupid question? Discover the answers to these questions and more with Clairvoyant, the magic 8-ball inspired fortune teller.

- Ask a question, then open Clairvoyant for an answer.

- Not satisfied? Ask again, then hit "Ask Again" to try again.

- Do what you'd like with the answers—just don't shoot the messenger!

> Let’s look at a more compelling example… this is the same app, but actually taking care to create a great app listing. And there’s even more cool stuff that this app listing can have that I couldn’t fit on one slide.

### Agenda

1. Who is this talk for?
2. \_\_\_\_\_\_\_\_\_\_ is not a bad word
3. FreeDesktop AppStream MetaInfo
4. Providing quality MetaInfo

>Spoiler alert, here’s the agenda

### 1. Who is this talk for?

>Who the heck is this talk for? Raise your hand if you’re a **app developer**. Raise your hand if you work on the “**ecosystem**,” like toolkit, libraries, a distro, Flatpak, an app store, or a desktop environment. Raise your hand if **you want to help open source apps be successful.**

### Who is this talk for?

- **App developers**
- Ecosystem people
- Potential contributors

>**App developers** themselves are best suited to know **what the app is all about** and importantly, **how to communicate** that.
>
>As a secondary audience, **ecosystem people**—that is, those who are working on distros, Flatpak, GNOME platform, Flathub, etc.—because it might **reveal some capabilities** you didn’t know about that **could be implemented in your products**.
>
>**Potential contributors**: if you’re looking for a way to improve your favorite app’s app listing, it is **good to know what’s possible**!
>
>Also remember: **games are apps, too!**

### 2. \_\_\_\_\_\_\_\_\_\_ is not a bad word

>I hope I’m allowed to say this word in front of the open source community… you ready?

### 2. Marketing is not a bad word

>**Marketing**! Is not a bad word! In fact, I’d go a step further…

### Marketing is a requirement for open source apps

>Marketing is a **requirement** for **open source apps.**
>
>**App store listings** are **marketing pages**. There’s no way around it, it’s the **same as a landing page** on the web or **a flyer** in the physical world **introducing your app** to a new person; you can try to be dry and strictly factual, but it is going to bore them. **You have to _market_ your product.** 
>
>Marketing is a requirement **if you want people to find** and **enjoy**—and even **contribute to**—your hard work.
>
>Look at the mainstream, proprietary app stores: popular apps there have paid marketers designing icons, writing copy, and composing screenshots to ensure _their_ app is the one you download. While we don’t have to (or necessarily want to!) do _everything_ like the big app stores, this _is_ the level of detail and quality people will expect when evaluating whether or not they should install your app.

### Apple App Store

>As an example, this is straight from Apple’s website; so in a way, **our apps and ecosystem are competing with Apple’s massive marketing resources.** And Google has similar programs for Google Play.
>
>On the open desktop, we **have** to do a great job!

### Always think from a marketing perspective

>When creating an app store listing, **always think from a marketing perspective**.
>
>An app’s README on GitHub is a great place to put technical information, but **your app store listing should be selling your app** to the people you want to use it.

### 3. FreeDesktop AppStream MetaInfo

>If you’ve never heard of this before, it really sounds like I just made it up; we really like our compound technical words. Let’s look at each word really quick in case you’re not familiar

### FreeDesktop:

Software & specs to make open source desktops & ecosystems interoperable

>This is a lot of words, but the key here is **interoperable**. 
>
>**This is why clicking the icon of a GNOME app works whether you’re on GNOME, KDE, elementary OS, XFCE, etc.** 
>
>Or, **clicking a link** in one app **opens your preferred web browser, even if they’re totally different toolkits**.
>
>It’s also the umbrella for projects like **Portals**, which are used on every modern Linux-based OS to provide sandboxed apps different functionalities and access while keeping users in control.
>
>FreeDesktop: really important stuff, basically the **plumbing** between apps on a modern desktop

### AppStream:

Software & specs to present & describe apps

>This might make more sense when we look specifically at MetaInfo…

### MetaInfo:

\<Specification for describing apps /\>

### FreeDesktop AppStream MetaInfo:

How to describe apps in an interoperable way

>FreeDesktop AppStream MetaInfo: **the way to describe apps in an interoperable way**!
>
>Still a mouthful, but now you know what it is!

### MetaInfo Example

>Yes it’s tiny, no I don’t expect you to read it, it’s just an illustration that it’s XML.
>
>If you were to read that tiny text, you’d see (list on the left)
>
>Basically: everything you need to make something like…

### GNOME Software

### circle.gnome.org

### 4. Providing quality MetaInfo

>How do we ensure **quality**?

### Icon Design

Follow the icon guidelines!

[developer.gnome.org/hig/guidelines/app-icons](https://developer.gnome.org/hig/guidelines/app-icons)

### Description

- Everything a potential user would want to know!
- Avoid long lists, use sentences & paragraphs
- Include relevant terms/phrases to help with search, but don’t keyword-stuff

### Release Notes

- No “bug fixes and performance improvements”
- Short, but informative
- You want users to run the latest version!
- If users have limited bandwidth, this can help **convince them why they should spend their data** to update

### Content Rating

- Open Age Rating Service: [hughsie.github.io/oars](https://hughsie.github.io/oars)
- Answer thoughtfully & truthfully
- Take easily-accessible content into account

>For example, an RSS reader that doesn't feature any content by default can be "All Ages", but the rating for a manga app with pre-configured servers should reflect the content of those default sources.

### New & Shiny: Brand Color

- Use your app’s color palette!
- Compliment the icon
- When in doubt: talk to a designer
- Not used in GNOME (yet!), but…

>It is used in placed like elementary OS AppCenter, so if your app is on Flathub and a user enables it on elementary OS, it will be shown there
>
>You could imagine using the brand color in rich ways, like in GNOME Software (this is an old, crappy mockup I made, but shows the idea)
>
>Instead of algorithmically basing it off the app icon on GNOME Circle, we could use the brand color directly

### License

- Use SPDX license identifier
- Major advantage of open source: it’s auditable
- Used to help determine “safety” in GNOME Software

>GNOME Software uses the license to determine how “safe” an app is, with recognized open licenses informing the user that the code is auditable

### More Tips

- Keep text non-technical and relevant to users; no toolkits, programming languages, etc.
- Don’t repeat yourself (app name, summary, description)
- Multiple interesting screenshots of the app actually in use (placeholders are boring)
- Read the docs…

### More Information

- [**docs.flathub.org**/docs/for-app-authors/appdata-guidelines](https://docs.flathub.org/docs/for-app-authors/appdata-guidelines)
- [**www.freedesktop.org**/software/appstream/metainfocreator](https://www.freedesktop.org/software/appstream/metainfocreator)

>Flathub really wants to improve the first impression on the front page, so they recently added great recommendations, examples, etc. as a first step. In the future, they plan to start enforcing some of these recommendations to be featured. 
>
>There’s also a web app to help you write your MetaInfo

