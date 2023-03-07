---
title: 3D Printing on Endless OS
description: …or any other Linux OS with Flathub
updated: 2023-03-06
---

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

Inkscape, Blender

## 2. Model that thing

Blender, FreeCAD, OpenSCAD, Tinkercad (web)

## 3. Slice the model

Cura, PrusaSlicer, FlashPrint

## 4. Print the model

Slicers, Octoprint (Raspi imager)
