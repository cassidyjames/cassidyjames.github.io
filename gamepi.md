---
layout: gamepi
---

# GamePi

![GamePi](/images/gamepi.jpg)

GamePi is a retro gaming console I assemble, based on [Raspberry Pi][raspi] and
[RetroPie][retropie].

[Order Yours Now][square]

## First-Time Setup

If you **bought** a GamePi, there are some one-time setup steps to take care of
(like installing the software). This is because the software cannot legally be
redistributed commercially.

[I Bought One (first-time setup)](fresh)

If you received it as a **gift**, no need to set anything up! Read on for tips.


## Tips

Here are some handy pointers from my experience setting up and playing with
GamePi.


### Controllers

RetroPie should just work with most USB controllers, including PS3, PS4, and
generic computer game controllers connected via USB.

If your GamePi came with a controller, it should just work out of the box.

Connecting multiple controllers will require a simple USB hub, but should be
straightforward. A Bluetooth adapter can be added and set up, but it's a bit
beyond the scope of these tips for now.

The official [RetroPie Installation Guide][controllers] has pretty good
instructions for controllers.


### Games

Game ROM files are stored on the microSD card under `/home/pi/RetroPi/roms/`.
They are sorted into folders matching the original console.

If you connect a USB Ethernet adapter (or if you have the GamePi Wireless and
connect it to your WiFi network), the RetroPie will also show up as a network
storage device on the network over SMB and SFTP with a hostname of `retropie`,
username `pi`, password `raspberry`.

[Learn More][roms]


### Power + Restarting

To turn GamePie on, just connect it to power. It will start automatically. You
can safely disconnect the power from the menu screen to power it down, or add a
simple power strip/switched plug for an easier on/off switch.

If you get completely stuck or shut GamePi down from the menu and want to
restart, it's easy: just unplug and replug the power cord (or toggle the switch
if one is on the power cord). It will start automatically when power is
reconnected.

GamePi consumes very little power when games are not playing, so leaving it
powered on for long periods of time is probably fine!


### Exit/Switch Games

If you're done playing one game and want to exit, press the **Hotkey** (the
**Select** button by default) and **Start** buttons on the controller
simultaneously. This will instantly exit to the menu. You can then choose a
different game, shut down from the menu, or disconnect the power.


### Configuration + Keyboard

If you find yourself on a blue configuration screen and want to change settings,
you may need to connect a keyboard. Disconnect the controller and attach a USB
keyboard, or use a USB hub to connect both. You shouldn't need this for normal
usage, but might if you want to set up more advanced settings (like configuring
WiFi on a GamePi Wireless).


[raspi]: https://www.raspberrypi.org/
[retropie]: https://retropie.org.uk/
[square]: https://squareup.com/store/cassidyjames
[etcher]: https://etcher.io/
[controllers]: https://retropie.org.uk/docs/First-Installation/#configure-controllers
[roms]: https://retropie.org.uk/docs/First-Installation/#transferring-roms
