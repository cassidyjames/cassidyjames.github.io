---
title: My elementary Wishlist
date: 2014-04-20 19:27

legacy: true
redirect_from: /post/my-elementary-wishlist
---

Occasionally I think of random apps or utilities that I'd love to be able to use on elementary OS. I jot them down and keep doing what I was doing, but today I decided to share in the hopes of inspiring someone out there to design and develop some cool things. :)

In each case I'm imagining the solution as a sexy, elementary-native, GTK3 utility. Something that would feel like it's a first-party elementary tool.

### Synced Clipboard

Though not everyone has multiple elementary devices, there are some times when I copy something on one computer and want to access it from another computer. Right now, I pop open Geary and shoot myself an email as it's the quickest way to get that text onto another machine. Instead, it'd be interesting if my clipboard was just synchronized across my elementary devices—and possibly even my mobile devices.

To implement this, I'd imagine someone would have to tap into an existing cloud syncing backend. I can't share extensive details, but elementary is working on some pretty cool cloud backend magic. Collaborating there would be awesome.

### Stupid Simple Remote Desktop

This is something I've brought up before, and I still don't think _anyone_ has nailed it. Google has their Chrome Remote Desktop which is pretty easy, but it depends on the entire Google Chrome app being installed and running in the background at all times. VNC and Microsoft's remote desktop both work if configured properly, but every experience I've had there has been confusing or impossible due to firewalls.

What I imagine is a simple native app that each person installs. It has something like three options:

1. Get Help (invite someone to control your computer),
2. Give Help (control a friend's computer after being invited), and
3. Access Your Devices (remote control your existing remote computers).

From a technical perspective, I'd expect it to use some sort of SSH tunneling to be secure, maybe using VNC through that. I'm not the most knowledgeable about remote desktop protocols or tools, but I feel like it should just work over the web with tunneling. Without me having to know what VNC, SSH, or tunneling are.

### Simple & Smart FTP Client

Yes, I know Filezilla works (most of the time). But it's ugly, overly complicated, and excessive for most of what I do with an FTP client. What I'd much rather see is a beautiful GTK3 FTP client that lets me set up my projects and connect to them easily. I imagine it having a sidebar  (SourceList in Granite lingo) with these projects, and two synchronized panes, the left for the local project files and the right for remote. It'd use the system's default filetype associations, could smartly auto-sync my changes, and would possibly even keep track of the changes with a sort of version control.

This is one that I haven't thought all the way through, but mostly comes from being extremely dissatisfied with the current landscape of FTP clients for elementary OS.

### Launchpad for Desktop

As you may know, elementary makes heavy use of Canonical's [Launchpad](https://launchpad.net) service for bug reporting, code repositories, blueprint tracking, etc. It's an extremely versatile and powerful service. But using it on the web feels excessively complicated.

I imagine a native desktop app for Launchpad. It'd remember my login and auto set up my public/private keys for authentication. It'd also give me access to projects to which I have contributed or can contribute. I could view the recent activity of the project, report and triage bugs, branch it to solve a bug, and submit merge requests. Essentially every time I'd typically go to the Launchpad website, I'd instead be able to complete the task in this beautiful native app.

Where this overlaps with a full IDE, I'm not sure. However, I see value here not only for elementary, but for anyone who develops for Ubuntu or its derivatives.

--------

I'm sure I've thought of or will think of more ideas like these. I'll follow up this post with more once they're fleshed out a bit!

If you have any questions for me or want to start work on one of these ideas, feel free to contact me at [+Cassidy James](http://google.com/+CassidyJames).
