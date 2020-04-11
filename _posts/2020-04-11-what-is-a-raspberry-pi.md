---
title: What is a Raspberry Pi?
description: Answering a question I've been asked several times in the past week
---

> Sometimes I forget how much of a bubble I'm in. Every day, I interact with Linux users and developers, fellow tech geeks, etc. online. My social media feeds—thanks in large part to algorithmic timelines pushing me what they think I'd like—are largely a bunch of tech folks talking about tech things.
>
> Much of that discourse is centered around open source. So I forget that _normal people_ out there in the world aren't constantly talking about or at least acutely aware of Raspberry Pi projects. Most of them don't even know what a Raspberry Pi is! So when I've been talking about Raspberry Pi projects to do at home while social distancing, I get weird looks or funny questions. Or even for some of those friends who sort of know about Raspberry Pis, they still have several questions.
>
> In an effort to answer those questions and give anyone an introduction to Raspberry Pi, I've decided to write up this blog post targeted specifically to the less-techy or just less-Linuxy folks out there.

### In a Nutshell

Raspberry Pi is a **brand of single-board computers** designed and produced by the [Raspberry Pi Foundation](https://www.raspberrypi.org/)—a charity organization from the UK whose mission is "to put the power of computing and digital making into the hands of people all over the world."

Each Raspberry Pi model is tiny, uses a relatively small amount of power (for a computer), is relatively inexpensive, can run a Linux-based operating system, and can be used for all sorts of projects—educational, utilitarian, or just fun.

Let's break that down a bit.

### Single-board computer

If you've ever seen the inside of a computer, you might know about a motherboard, processor, GPU, RAM, network cards, etc. Single-board computers are basically a motherboard that have all those parts and pieces permanantly attached—kind of like the inside of a smartphone. Each Raspberry Pi model has some form of USB ports, HDMI video output, and a microSD card slot (instead of a hard drive). Most models also have built-in networking via an Ethernet port and/or a Wi-Fi chip.

<figure markdown="1">
![Raspberry Pi 4](/images/pi4_1600.jpg)
<figcaption>Raspberry Pi 4 (with a thermal pad on the processor)</figcaption>
</figure>

There are other companies that design and make single-board computers. Sometimes they are made to be compatible with Raspberry Pi software, sometimes they are made to be more powerful, etc. But Raspberry Pi is the most well-known brand.

### Size, power, and price

Raspberry Pi computers are small. The largest—even put in a case—is only about 3½ × 2½ × 1 inches (9 × 6 × 3 cm). The smallest is about 2½ × 1½ × ½ inch (6 × 3 × 1 cm) in a case. Again, think about the insde of a smartphone more than a traditional computer.

<figure markdown="1">
![Raspberry Pi Size Comparison](/images/pi-size_1600.jpg)
<figcaption>Rapsberry Pi Zero (left) and Raspberry Pi 4 (center) in cases, compared to a ruler, 8BitDo game controllers, and SD cards</figcaption>
</figure>

Similar to a smartphone, Raspberry Pi computers use lower-power processors. In fact, the Raspberry Pi is _probably_ less powerful than your phone—but that's largely due to the goal of being inexpensive to produce. They are powered by a typical phone charger, and you can even buy add-on batteries to make them portable.

Thanks to their design, the lower-cost components, the economies of scale, and the fact that the Raspberry Pi Foundation is a charity, Raspberry Pi models range from $5 USD to $55 depending on the model. Remember that the computers only come with the main board, though—you'll need to supply your own power supply, microSD card, case, and other accessories as needed for your project. This helps keep the cost down, produce less electronic waste overall, and ensures you're not paying for 

### Linux and projects

A big part of the Raspberry Pi world is the [open source](https://blog.elementary.io/switching-from-macos-open-source/) software ecosystem around it. The computers typically run a version of Linux (the same core operating system that powers everything from super computers, websites, and Tesla cars to TiVos and Internet routers—and [elementary OS](https://elementary.io)!). Well, techincally a Raspberry Pi doesn't run _anything_ when you get it; you have to put an operating system on a microSD card for it to run. But there are standard Linux-based options freely available from the Raspberry Pi Foundation website.

Because Linux and most software made for Raspberry Pi is open source, it also means people can remix it for others to use. So your specific project might have pre-made software for you to copy onto a microSD card instead. This is the case for projects like the [RetroPie](https://retropie.org.uk/) retro game console and [OctoPrint](https://octoprint.org/download/) 3D printer controller.

While you can technically use a Raspberry Pi as a general-purpose computer, it is going to be pretty slow compared to what you would expect. Even the most powerful model will struggle with basic web browsing and video playback, especially if you start doing multiple things at once. But the beauty of the low cost of Raspberry Pi models is that you can build dedicated, single-purpose computers for various projects. Some of my favorites:

- [RetroPie](https://retropie.org.uk/): make a retro gaming console
- [Pi-hole](https://pi-hole.net/): block ads and tracking on your whole network
- [OctoPrint](https://octoprint.org/): manage and check up on your 3D printer remotely
- [Kodi](https://kodi.tv/): watch movies and TV

---

Hopefully that gives a decent intro to what a Raspberry Pi is and what it can be used for! Let me know if you like Raspberry Pi content and want me to write in more detail about anything else… I've done a bunch of projects and probably have a lot to share. 😅️
