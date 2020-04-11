---
title: What is a Raspberry Pi?
description: Answering a question I've been asked several times in the past week
redirect_from:
  - pi
  - raspi
  - raspberry-pi
  - raspberrypi
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

### Models

Raspberry Pi model naming convention is super messy, especially for newcomers. I had to look it up to even get it right… Originally there was a Raspberry Pi 1 Model B. Then they followed it up with a slightly cheaper Raspberry Pi 1 Model A, then an improved Raspberry Pi 1 Model B+, then a more compact Raspberry Pi 1 Model A+, then Rapberry Pi 2 Model B, then Raspberry Pi Zero(!), then Raspberry Pi 2 Model B, Raspberry Pi 3 Model A+, Raspberry Pi 3 Model B+, then Raspberry Pi 4 Model B… yeah. [Wikipedia](https://en.wikipedia.org/wiki/Raspberry_Pi#Generations_of_released_models) has a great chart, but here's my takeaway:

- **Rapberry Pi Zero (W)**: the cheapest, smallest, and lowest-power model. Due to the size, there's no Ethernet (without a USB adapter), and no full-size USB ports. Perfect for super low-profile and low-power projects. Requires lots of adapters if you need to connect normal-size USB, HDMI, etc. though. The "W" model includes Bluetooth and Wi-Fi, which is super convenient. $5–10 USD!

- **Raspberry Pi 3 Model B+**: What you're gonna get as a "Pi 3" these days. Slightly improved from the Pi 3 Model B with a faster processor and significantly improved Ethernet speeds. Full-size HDMI is convenient! $35 USD.

- **Raspberry Pi 4 (Model B)**: The latest, greatest model. Compared to the 3B+ it has a faster processor and GPU, faster RAM, a pair of USB 3 ports, more RAM for the same price or even more RAM if you're willing to pay more, faster Ethernet, Bluetooth 5, USB-C power, and an additional (mini) HDMI port. The only downsides are that it requires more power and requires an adapter or more specialty micro HDMI cable for the display. 2 GB RAM for $35, 4 GB RAM for $55.

When buying cases, accessories, etc. make sure they are compatible with your model! Cases tend to be very specific, but things like cameras, "[HATs](https://www.raspberrypi.org/blog/introducing-raspberry-pi-hats/)" ("Hardware Attached on Top" expansion boards that sit on top, like a hat!), and displays are usually widely-compatible with the different models.

---

Hopefully that gives a decent intro to what a Raspberry Pi is and what it can be used for! Let me know if you like Raspberry Pi content and want me to write in more detail about anything else… I've done a bunch of projects and probably have a lot to share. 😅️
