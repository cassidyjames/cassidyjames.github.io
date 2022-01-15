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