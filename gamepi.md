# GamePi

GamePi is a retro gaming console I make, based on [Raspberry Pi](https://www.ras
pberrypi.org/) and [RetroPie](https://retropie.org.uk/docs/).

[Order Yours Now](https://squareup.com/store/cassidyjames)


## Install RetroPie

Due to software licenses, GamePi cannot be distributed with emulation software.
However, installing it is easy.


### Get RetroPie

Visit the [RetroPie website](https://retropie.org.uk/) and download the latest
version of RetroPie for your GamePi. The itty bitty GamePi Zero uses the
“Raspberry Pi 0/1” version, while the larger, more powerful GamePi 64 uses the 
“Raspberry Pi 2/3” version.

[Visit the RetroPie Website](https://retropie.org.uk/)


### Get Etcher

Next, you have to get the RetroPie software onto your microSD card. [Etcher](htt
ps://etcher.io/) is a way to safely do just that.

[Download Etcher Now](https://etcher.io/)


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

Since the software cannot be distributed with GamePi (and thus be pre-optimized
by me), there are a few optimization steps to get the most of it. This is also
a great reference if you want want to blow it all away and start fresh!

To get started, connect your GamePi to an HDMI display and power. It should
automatically start up. Be patient, it takes a few minutes the first time.

1. Latest RetroPie image

2. ~~Update everything if possible (run on a Pi B with networking, or with a
   WiFi/Ethernet adapter attached)~~

3. Set Pi Config resolution to 720p

4. Set RetroArch resolution to 240p (or 480p)

5. Disable Wait For Network in raspi-config

6. Turn on RetroArch blurring for all but handheld emulators

7. ~~Add controller configs (specifically 8Bitdo) to /opt/retroarch/controllers or
   wherever~~

8. Disable `runcommand` menu

9. Enable `runcommand` box art

10. Change ES UI setting to Slide (because it’s prettier)


## Tips


Here are some handy pointers and tips from my experience setting up and playing
with GamePi.


### Controller

RetroPie should just work with most USB controllers, including PS3, PS4, and
generic computer game controllers connected via USB. Connecting multiple
controllers will require a simple USB hub, but should be straightforward. A
Bluetooth adapter can be added and set up, but I've not done that yet and am
unsure how well that works.

The official [RetroPie Installation Guide](https://retropie.org.uk/docs/First-In
stallation/#configure-controllers) has pretty good instructions for controllers
as well.


### Games

GamePi doesn't come with any games, but you can play ROM files you own from
several classic game consoles. Of course it's your responsibility to make sure
you own the rights to use any ROMs. [RetroPie's docs](https://retropie.org.uk/do
cs/First-Installation/#transferring-roms) go into a bit more detail about ROMs
and how to transfer them to your GamePi.

[Learn More](https://retropie.org.uk/docs/First-Installation/#transferring-roms)


Game ROM files are stored on the microSD card under `/home/pi/RetroPi/roms/`.
They are sorted into folders matching the original console.

If you connect a USB Ethernet adapter, the RetroPie will also show up as a
network storage device on the network over SMB and SFTP with a hostname of
`retropie`, username `pi`, password `raspberry`.


### Power + Restarting

To turn GamePie on, just connect it to power. It will start automatically. You
can safely disconnect the power from the menu screen to power it down, or add a
simple power strip/switched plug for an easier on/off switch.

If you get completely stuck or shut GamePi down from the menu and want to
restart, it's easy: just unplug and replug the power cord (or toggle the switch
if one is on the power cord). It will start automatically when power is
connected.

GamePi consumes very little power when games are not playing, so leaving it
powered on for long periods of time is probably fine!


### Exit/Switch Games

If you're done playing one game and want to exit, press the Start and Select
buttons on the controller simultaneously. This will instantly exit to the menu.
You can then choose a different game, shut down from the menu, or disconnect the
power.


### Configuration + Keyboard

If you find yourself on a blue configuration screen and want to change settings,
you may need to connect a keyboard. Disconnect the controller and attach a USB
keyboard, or use a USB hub to connect both. You shouldn't need this for normal
usage, but might if you want to set up more advanced settings.




<style>
  /* TODO: Make this more legit somehow */

  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Press Start 2P', 'Source Sans Pro', sans-serif;
  }
</style>
