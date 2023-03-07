---
title: 3D Printing on Endless OS
description: …or any other Linux OS with Flathub
image: /images/blog/3d-printing-endless-os-linux-flathub/card.jpg

updated: 2023-03-07
---

![Screenshot]({{ page.image }}){: .card }

I recently got a 3D printer for my birthday, and I have been absolutely _loving_
tinkering, printing, and learning with it. There is such a wealth of openly-shared 
and -licensed models out there, I've been having fun finding things to print for
myself, my friends, and especially my toddler. The best part for me, though? The
fact that I can dive deep into this whole new world of 3D modeling, slicing, and
printing using the computer I already have with freely-available software right
in the app store I already use on Endless OS: App Center with Flathub.

I got a Creality Ender 3 v2 printer, which is to say: a popular and well-reviewed
printer that didn't break the bank. For a super quick (and over-simplified) look
at the 3D printing process, there are a few steps to get from nothing to a
physical 3D object in your hands:

1. **Design a thing;** this can be on a whiteboard, in a 2D design app, or whatever.
   The point is, you have to start with some sort of specification/measurements.
   
2. **Model that thing;** you have to take the idea you have and turn it into a 3D
   shape on the computer. You can use a modeling program like Blender if you
   know what you're doing or want to use your model in different contexts, or 
   you can use a computer-aided drawing (CAD) tool to define the shapes for your
   object.
   
3. **Slice the model;** this is the process of taking a defined 3D object and
   turning it into actual instructions for your specific printer, filament, etc.
   3D printer companies usually offer free slicing programs designed with their
   own printers in mind, but it's mostly all inter-compatible and based on the
   same few open source projects.
   
4. **Print the model;** slicing outputs a GCODE file, which is very literal instructions
   for your printer to follow. You have to get that GCODE file onto your printer,
   either with an SD card, a USB connection, or a network connection. Then it can
   be printed!
   
With all the open source software that powers 3D printing combined with the open
sharing culture, you can accomplish each of these steps on Endless OS or any other
Linux-based OS that has access to Flathub. Let's look at each step and the options
you have:

## 1. Design a thing

I love whiteboards, so I usually start there if I'm designing a new thing from
scratch. I'll sketch a few angles out until I'm confident the measurements make
sense, then I'll move on to modeling.

{% include app-badge.html 
  rdnn="org.inkscape.Inkscape"
  name="Inkscape"
  description="Vector Graphics Editor" 
%}

However, if you're trying to convert a 2D object into 3D, or you just want to
play around in a 2D space first, I recommend Inkscape! It's a great vector image
editor, and it's available on Flathub. You can lay things out and make sure they
make sense in 2D space before moving onto the more complex 3D modeling.

{% include app-badge.html 
  rdnn="org.blender.Blender"
  name="Blender"
  description="Free and open source 3D creation suite" 
%}

If you already live in Blender, you can of course use it to design your object
from the start, as well. It's also available on Flathub.

## 2. Model that thing

Modeling is my weakest point personally, as I haven't taken the time to really
learn Blender or the open source CAD tools. So for me, I only tackle simple 3D
models—and I use the web-based [Autodesk Tinkercad](https://www.tinkercad.com/) to do it.

![Screenshot of Tinkercad in Chromium](/images/blog/{{ page.slug }}/tinkercad-install.png)

Luckily on Endless OS you can trivially install web apps like Tinkercad from the
included Chromium web browser; just hit the little "Install" button that pops up
on the address bar when you're on the site. Then Tinkercad's icon will be added
to the app grid on your home screen and you can add it to your favorites on the
dash.

{% include app-badge.html 
  rdnn="org.gnome.Epiphany"
  name="Web"
  description="Web browser for GNOME" 
%}

GNOME Web also supports web apps, Tinkercad works there as well. If you use Google Chrome or any other browser based on Chromium, it should also have an easy to use install button. If you use Firefox, you can always use Tinkercad from in the browser itself.

{% include app-badge.html 
  rdnn="org.freecadweb.FreeCAD"
  name="FreeCAD"
  description="An open source parametric 3D CAD modeler" 
%}

{% include app-badge.html 
  rdnn="org.openscad.OpenSCAD"
  name="OpenSCAD"
  description="The Programmer’s Solid 3D CAD Modeller" 
%}

If you're more experienced (or adventurous than I am now), you can also try something like FreeCAD or OpenSCAD from Flathub—available in App Center right out of the box on Endless OS.

## 3. Slice the model

Slicing is the most exciting step of the process to me, if only because people keep innovating in 3D printing purely on the software side to get more speed, performance, etc. out of existing hardware—and that all happens in the slicers.

{% include app-badge.html 
  rdnn="com.ultimaker.cura"
  name="Cura"
  description="The world’s most advanced 3D printer software" 
%}

Popular 3D printer companies like UltiMaker/MakerBot, Prusa Labs, and FlashForge have their slicers available on Flathub. While others might offer downloads for their software on their website, my experience has been it's less integrated over all; I'd stick to the ones on Flathub.

{% include app-badge.html 
  rdnn="com.prusa3d.PrusaSlicer"
  name="PrusaSlicer"
  description="Get perfect 3D prints!" 
%}

If whoever makes your printer doesn't have a slicer on Flathub, fret not! They're basically all inter-compatible, as the slicers are all based on the same handful of open source projects. Personally, I prefer UltiMaker Cura, and I could even add my Creality-brand Ender 3 v2 from in Cura's UI with all the right preset values. Some people prefer PrusaSlicer, and it's a similar story there.

{% include app-badge.html 
  rdnn="com.flashforge.FlashPrint"
  name="FlashPrint"
  description="Slicer for the FlashForge 3D printers" 
%}

## 4. Print the model

The simplest/most old-school way of printing is to save your sliced GCODE file out to a microSD card, eject it, then stick it in your printer, and use your printer's physical screen and wheel to select the print file. And that will work just fine! You can also connect your printer over USB and print directly from your slicing software.

![Screenshot of Prusa's GCODE viewer inspecting a model](/images/blog/{{ page.slug }}/prusa-gcode.png){: .card }

If you want to learn more about how your model will print before actually printing, you can use your slicer or a separate program to preview the GCODE file. While Cura has a preview built in, sometimes I like using PrusaSlicer's included GCODE viewer app (installed alongside PrusaSlicer) to inspect a specific GCODE file, too.

![Screenshot of the Raspberry Pi imager with OctoPi selected](/images/blog/{{ page.slug }}/raspi-octopi.png)

If you really want to go all out and have a spare Raspberry Pi, you can install [OctoPrint](https://octoprint.org/) with the OctoPi OS, and print to, monitor, and control your printer remotely. I won’t get into all the details, but you can get started with the official Raspberry Pi Imager by navigating to install an "other specific-purpose OS," "3D printing," and then "OctoPi."

{% include app-badge.html 
  rdnn="org.raspberrypi.rpi-imager"
  name="Raspberry Pi Imager"
  description="Raspberry Pi imaging utility" 
%}

---

Hopefully these apps and tips are useful to you! I've been super happy with the experience of designing, modeling, slicing, and printing all entirely from Endless OS—and if you have access to Flathub on your OS of choice, you can do it, too!
