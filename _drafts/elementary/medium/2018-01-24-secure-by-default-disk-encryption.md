---
title: "Secure By Default&#58; Disk Encryption"
description: "It’s time to better protect user data by default."
author: cassidyjames
date: 2018-01-24T22:54:43.175Z
image: /assets/images/secure-by-default-disk-encryption/1g1QNuj3lgSnsF-sgNAueHg@2x.png
tags:
  - "security"
  - "secure-by-default"
  - "elementary-os"
  - "open-source"
  - "encryption"
---

<figure markdown="1">
![](/assets/images/secure-by-default-disk-encryption/1g1QNuj3lgSnsF-sgNAueHg@2x.png)
</figure>

elementary and System76 got together last month to discuss and continue hacking on a new installer for future releases of Linux-based operating systems like elementary OS and Pop!_OS. A feature we’re working on together is the ability to fully encrypt the device’s drive. This is a user-selectable feature both elementary OS and Pop!_OS have shipped via the Ubiquity installer since it debuted, but it’s always been off by default and poorly communicated. We aim to change that.

## Just Do It

While discussing the installer, one thing System76 wanted to ensure was the ability to easily encrypt the installation once users have their computer in-hand; many System76 customers require it (i.e. government, education, and corporate organizations), other consumer electronics like iOS and Android devices manage it, and frankly it’s just good practice to encrypt by default. The problem in the past has been that, as a desktop Linux OEM, you cannot encrypt the installation before it’s in the user’s hands because then there is no guarantee that the encryption key is unique to that user. So customers would reinstall the entire OS from scratch immediately after receiving their computer—downloading the latest release of the OS, digging up a USB drive, flashing the drive, rebooting their computer, walking through the installer, and finally rebooting to finally use the computer. That’s not ideal.

Instead, we should assume that disk encryption—and better protecting user data—is what we want to do by default, and optimize the installation and first-boot process around that.

## UX Implications

Another major reason disk encryption isn’t the standard on Linux-based desktop OSes is that it does have some UX implications: users must remember a separate and distinct encryption password, users must enter this every time the computer powers on or restarts, and there are minor potential performance implications for I/O heavy work. The tradeoffs may be worth it, but we need to be sure users understand.

Some of these are mitigated by suspending instead of shutting down—i.e. just closing a laptop or letting a desktop go to sleep instead of explicitly turning it off—though that does leave the disk unencrypted when not in use.

### OEMs and Recovery Partitions

Our mantra for the new installer is that “every install is an OEM install.” This is not just to optimize for OEMs, but it ensures the code paths are well-tested no matter the installation scenario.

For a user installing the OS for themself from a flash drive — what I’ll call a user installation — they just step through the OEM-like portion, then step through user setup. For OEMs, they perform the first part the installation, then can power off the device and ship it to a user. The end user then receives the machine, sets up their user, and is off to work.

The wrench with encryption is that the end user *must* technically reinstall their OS in order to encrypt the disk with a unique password. Since we had been floating the idea of recovery partitions as part of the install, we realized this could provide us with a solution.

If every installation added a small recovery partition onto the drive, OEMs can configure their shipped devices to boot into that instead of the installed session. This allows encryption plus the ability for custom installation parameters if the user so chooses.

If the installer restarts the device, we know the user is present and we can boot into the OS and continue with user setup. If the user powers down, we can assume it will be set up later — in this case, we can boot into the recovery partition and give the end user the opportunity to encrypt the drive

### Installer UI

While these are important points to consider, we feel it’s time to push forward and communicate these implications to users instead of just leaving everything unencrypted. To do so, we’ve designed and prototyped a pair of new Encryption views in the installer:

<figure markdown="1">
![](/assets/images/secure-by-default-disk-encryption/1kzq6V43rDSOQyXWUA6aqpw.png)
</figure>

<figure markdown="1">
![New Disk Encryption prototype views](/assets/images/secure-by-default-disk-encryption/1U0hNITzCI_nx2NX5nTImwA.png)
<figcaption markdown="1">
New Disk Encryption prototype views
</figcaption>
</figure>

These views serve a number of functions:

1. Strongly push encryption by default. Better securing user data is worth it.

1. Clearly and honestly explain the implications, whether or not the user might fully understand disk encryption.

1. Allow users to opt out of encryption if they have a good reason.

1. Encourage the user to provide a strong password while understanding when and how they will need to use it.

### The Future

With these functions tackled, we have to think about future UX improvements as well:

1. Changing the encryption password from System Settings

1. Possibly syncing/adding passwords for additional admin users (though this might be technically difficult/infeasible due to the many ways you can set a password on a Linux-based OS)

1. Ensuring the power-on password entry looks as good and works as well as it can across different OSes and hardware combinations

With System76 (and hopefully soon elementary OS, as well) planning to ship with encryption by default, I hope these are areas we see focused on more. There’s a lot we can still do! But the security improvements of shipping encryption are worth doing so today.

## So… When?

Ah, the classic question. For System76 and Pop!_OS, they hope to ship the new installer as part of the 18.04 release in April, barring any last-minute hold ups. For elementary OS, we’d love to ship it in Juno (and are working toward that goal), but we do have a backup plan to ship the existing installer if we don’t feel the new one is ready yet.

So, in a nutshell, *When It’s Ready™ *as usual. But stay tuned for some more info about the installer itself soon! In the meantime, you can always dig into it [on GitHub](https://github.com/elementary/installer/wiki).

*Thank you to everyone who’s bought an app on AppCenter, our supporters on [Bountysource](https://salt.bountysource.com/teams/elementary) and[ Patreon](https://www.patreon.com/elementary), and those who’ve purchased a copy of [elementary OS](https://elementary.io/) or merch from [our store](https://elementary.io/store/). Every contribution helps make all of this possible, and we wouldn’t be here without you! If you’d like to help improve elementary OS, don’t hesitate to [Get Involved](https://elementary.io/get-involved)!*