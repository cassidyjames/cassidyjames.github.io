---
title: "Captive Portal Assistant Gets a Helping Hand"
description: "Thanks to the hard work of one who goes by the username TheLemonMan, Captive Portal Assistant (capnet-assist) has received a much needed fix and a couple new features."
author: DanielFore
date: 2016-11-16T19:17:03.714Z
image: /assets/images/captive-network-assist-gets-a-helping-hand/0UGRFSEQcPRg_XWC9.png
tags:
  - "security"
  - "privacy"
  - "elementary-os"
  - "linux"
  - "open-source"
---

In case you don’t know what [Captive Portal Assistant](https://launchpad.net/capnet-assist) is, it’s a small utility that pops up whenever you connect to [Captive Portal networks](https://en.wikipedia.org/wiki/Captive_portal) such as those in the airport or at a coffee shop. Its job is to make sure that being connected to the network is followed up by being connected to the Internet so that apps like Mail can still fetch their data.

<figure markdown="1">
![](/assets/images/captive-network-assist-gets-a-helping-hand/0UGRFSEQcPRg_XWC9.png)
</figure>

One of the new features that landed is support for showing SSL certificates. Captive Portal Assistant now makes sure you’re aware that the portal you’re connected to is secure and let’s you double check the certificate associated with it.

Captive Portal Assistant now also shares cookies with Epiphany. That means that your Federated logins (like Facebook) will conveniently Just Work™ and you can manage and clear cookies for Captive Portal Assistant from inside of Epiphany. Additionally, Captive Portal Assistant does respect *Privacy Mode* found in *System Settings* &gt; *Security & Privacy*. So you can be sure that you’re in control of what’s being saved.

Last but not least, there had been some issues with Captive Portal Assistant mistaking intranet and other non-Internet-but-still-a-network connections for captive portals. Those have been resolved and Captive Portal Assistant should now only appear when you’re truly connected to a captive portal.

This work was funded through [Bountysource](https://www.bountysource.com/teams/elementary), so as always we want to give a big shout out to all the folks supporting us there. Your financial support is what brings new features and fixes to elementary OS.

Most of these features rely on the latest version of WebKitGtk+ which isn’t available in Freya, so consider this your first look into new features coming to the next version of elementary OS ;D