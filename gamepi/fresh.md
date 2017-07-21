---
layout: gamepi
---

# Freshhhh

Congrats on getting a GamePi! Since the software cannot be distributed with
GamePi (and thus be pre-optimized by me), there are a few optimization steps to
get the most of it. This is also a great reference if you want want to blow it
all away and start fresh!

## Install RetroPie

Due to software licenses, GamePi cannot be distributed with emulation software.
However, installing it is easy.


### Get RetroPie

Visit the [RetroPie website][retropie] and download the latest
version of RetroPie for your GamePi. The itty bitty GamePi Zero uses the
“Raspberry Pi 0/1” version, while the larger, more powerful GamePi 64 uses the
“Raspberry Pi 2/3” version.

[Visit the RetroPie Website][retropie]


### Get Etcher

Next, you have to get the RetroPie software onto your microSD card.
[Etcher][etcher] is a way to safely do just that.

[Download Etcher Now][etcher]


### Flash the SD card

1. Open the Etcher app you downloaded in the previous step.

2. Press the **Select image** button and choose the downloaded RetroPie file.

3. Connect your microSD card to your computer.

    _You may need to use the provided microSD to SD adapter and/or a USB SD card
    reader if your computer does not have a built-in SD card slot. Etcher should
    auto-select the newly detected microSD card as the drive; if not, press
    **Select drive** and choose the microSD card._

4. Press the **Flash!** button and wait for the RetroPie image to be flashed to
   the SD card.

5. When Etcher is done, remove the microSD card and insert it into the GamePi.


## Software Setup

To get started, connect your GamePi to an HDMI display and power. It should
automatically start up. Be patient, it takes a few minutes the first time.

1. Latest RetroPie image

2. ~~Update everything if possible (run on a Pi B with networking, or with a
   WiFi/Ethernet adapter attached)~~

3. Set Pi Config resolution to 720p

4. Set RetroArch resolution to 240p (or 480p)

5. Disable Wait For Network in raspi-config

6. Turn on RetroArch blurring for all but handheld emulators

7. ~~Add controller configs (specifically 8Bitdo) to /opt/retroarch/controllers
  or wherever~~

8. Disable `runcommand` menu

9. Enable `runcommand` box art

10. Change ES UI setting to Slide (because it’s prettier)


## Games

GamePi doesn't come with any games, but you can play ROM files you own from
several classic game consoles. Of course it's your responsibility to make sure
you own the rights to use any ROMs. [RetroPie's docs][roms] go into a bit more
detail about ROMs and how to transfer them to your GamePi.

[Learn More][roms]

Game ROM files are stored on the microSD card under `/home/pi/RetroPi/roms/`.
They are sorted into folders matching the original console.

If you connect a USB Ethernet adapter, the RetroPie will also show up as a
network storage device on the network over SMB and SFTP with a hostname of
`retropie`, username `pi`, password `raspberry`.


## Tips

Check the [main GamePi page](../) for tips now that you've gotten everything
loaded up!


[raspi]: https://www.raspberrypi.org/
[retropie]: https://retropie.org.uk/
[square]: https://squareup.com/store/cassidyjames
[etcher]: https://etcher.io/
[controllers]: https://retropie.org.uk/docs/First-Installation/#configure-controllers
[roms]: https://retropie.org.uk/docs/First-Installation/#transferring-roms
