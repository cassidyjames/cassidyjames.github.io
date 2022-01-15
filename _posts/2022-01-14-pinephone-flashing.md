---
title: Flashing different OSes on your PinePhone
description: A how-to when in comes to flashing your PinePhone
updated: 2022-01-14
---

> *NOTE:* This was done on a PinePhone 3GB model but the steps should apply to the 2G as well.

## Terms

- [JumpDrive](https://github.com/dreemurrs-embedded/Jumpdrive)

JumpDrive is software used to boot the PinePhone so that the onboard eMMC can be written to for replacing the currently installed OS. 

- [eMMC](https://en.wikipedia.org/wiki/MultiMediaCard#eMMC)

This is the onboard storage used for most Smartphones and Tablets (like the PinePhone and the PineTab)

- [MMC (microSD/SD)](https://en.wikipedia.org/wiki/SD_card)

This is a storage device used to store data and in this case an OS. 

> *NOTE:* eMMC storage will be noticeably faster when compared to a microSD card.

### Needed Items

- PinePhone
- 1x 4GB microSD card to be the JumpDrive
- 1x 32GB or larger microSD card for the OS 

The 3rd item is useful for trying different OSes as you just need to write the OS, swap out the card then power on the PinePhone. If you want to try more then two OSes (the one on the microSD card and on the eMMC) at a time. 

#### Creating the JumpDrive

1. Connect the microSD card to your system.
2. Download the latest release of JumpDrive for the PinePhone (it will be labeled pine64-pinephone.img.xz) from their [releases page](https://github.com/dreemurrs-embedded/Jumpdrive/releases).
3. Open the Disks application then left-click the microSD card from the left side list
4. Left-click on the three dot menu in the top right of the Disks application
5. Left-click the "Restore Disk Image..." option from that menu
6. Left-click the pine64-pinephone.img.xz image from your Downloads folder
7. Contine though the prompts and let the process complete

#### Booting from the JumpDrive

1. Plug the microSD card into the PinePhone's microSD card slot
2. Power on the PinePhone (connecting the power cable should do this as well if you don't want to put the device together)

#### Flashing the eMMC

1. Connect the PinePhone to your system
2. Once booted to the JumpDrive you should see the PinePhone's eMMC in the Disks application.
3. Follow the same steps from creating the JumpDrive but instead of selecting the microSD card left-click the eMMC and use the pinephone.img.xz file of the OS that you want to install. 

This [page](https://wiki.pine64.org/wiki/PinePhone_Software_Releases) is a common place to find PinePhone OSes. For example if I wanted Arch with Phosh for the original PinePhone I would download the "archlinux-pinephone-phosh-20211212.img.xz" image from this [page](https://github.com/dreemurrs-embedded/Pine64-Arch/releases).