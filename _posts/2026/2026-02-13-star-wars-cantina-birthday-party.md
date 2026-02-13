---
title: How I Designed My Cantina Birthday Party
description: Throwing the Star Wars party I always wanted!
image: https://cantina.blaede.family/images/card.png
updated: 2026-02-13
---

Ever since my partner and I bought a house several years ago, I've wanted to throw a themed Star Wars party here. We've talked about doing a summer movie showing thing, we've talked about doing a Star Wars TV show marathon, and we've done a few birthday parties—but never the _full-on_ themed party that I was dreaming up. Until this year!

For some reason, a combination of rearranging some of our furniture, the state of my smart home, my enjoyment of _Star Wars: Outlaws_, and my newfound work/life balance meant that this was the year I finally committed to doing _the party._

### Pitch

For the past few years I've thrown a two-part birthday party: we start out at a nearby bar or restaurant, and then head to the house for more drinks and games. I like this format as it gives folks a natural "out" if they don't want to commit to the entire evening: they can just join the beginning and then head out, or they can just meet up at our house. I was planning to do the same this year, but decided: let's go all-in at the house so we have more time for more fun. I knew I wanted:

1. **Trivia!** I organized a fun little Star Wars trivia game for my birthday last year and really enjoyed how nerdy my friends were with it, so this year I wanted to do something similar. My good friend Dagan volunteered to put together a fresh trivia game, which was incredible.

2. **Sabacc**. The Star Wars equivalent to poker, featured heavily in the _Star Wars: Outlaws_ game as well as in _Star Wars: Rebels_, _Solo: A Star Wars Story_, and the Disney Galactic Starcruiser (though it's Kessel Sabacc vs. traditional Sabacc vs. Corellian Spike vs. Coruscant Shift respectively… but I digress). I got a Kessel Sabacc set for Christmas and have wanted to play it with a group of friends ever since.

3. **Themed drinks**. Revnog is mentioned in Star Wars media including _Andor_ as some sort of liquor, and Spotchka is featured in the New Republic era shows like _The Mandalorian_ and _The Book of Boba Fett_. There isn't really any detail as to what each tastes like, but I knew I wanted to make some batch cocktails inspired by these in-universe drinks. 

4. **Immersive environment**. This meant smart lights, music, and some other aesthetic touches. Luckily over the years I've upgraded my smart home to feature nearly all locally-controllable RGB smart bulbs and fixtures; while during the day they simply shift from warm white to daylight and back, it means I can do _a lot_ with them for special occasions. I also have networked speakers throughout the house, and a 3D printer.

About a month before the party, I got to work.

### Aesthetic

For the party to feel immersive, I knew getting the aesthetic right was paramount. I also knew I wanted to send out themed invites to set the tone, so I had to start thinking about the whole thing early.

<figure markdown="1">
![Star Wars Outlaws title screen](/images/blog/star-wars-cantina-birthday-party/outlaws-title.jpg){: .card }
<figcaption markdown="1">
_Star Wars: Outlaws_ title screen
</figcaption>
</figure>

<figure markdown="1">
![Star Wars Outlaws journal UI](/images/blog/star-wars-cantina-birthday-party/outlaws-journal.jpg){: .card }
<figcaption markdown="1">
_Star Wars: Outlaws_ journal UI
</figcaption>
</figure>

Since I'd been playing _Star Wars: Outlaws_, that was my immediate inspiration. I also follow the legendary [Louie Mantia](https://lmnt.me) on Mastodon, and had bought some of his Star Wars fonts from [The Crown Type Company](https://crowntype.com), so I knew at least partially how I was going to get there.

<figure markdown="1">
![Invite](/images/blog/star-wars-cantina-birthday-party/invite.jpg){: .card }
<figcaption>Initial invite graphic (address censored)</figcaption>
</figure>

For the invite, I went with a cyan-on-black color scheme. This is featured heavily in _Star Wars: Outlaws_ but is also an iconic Star Wars look (“A long time ago…”, movie end credits, Clone Wars title cards, etc.). I chose the [Spectre font](https://crowntype.com/spectre/) as it's very readable but also very Star Wars. To give it some more texture (and as an easter egg for the nerds), I used [Womprat Aurebesh](https://crowntype.com/womprat/aurebesh/) offset and dimmed behind the heading. The whole thing was a pretty quick design, but it did its job and set the tone.

#### Website

I spent a bit more time iterating on [the website](https://cantina.blaede.family), and it's a more familiar domain for me than more static designs like the invite was. I especially like how the offset Aurebesh turned out on the headings, as it feels very in-universe to me. I also played with a bit of texture on the website to give it that lo-fi/imperfect tech vibe that Star Wars so often embraces.

For the longer-form body text, I wanted something even more readable than the more display-oriented fonts I'd used, so I turned to a good friend: [Inter](https://rsms.me/inter/) (also used on this site!). It doesn't really _look_ like Inter though… because I used almost every stylistic alternate that the font offers—explicitly to make it feel legible but also… kinda funky. I think it worked out well. Specifically, notice the lower-case "a", "f", "L", "t", and "u" shapes, plus the more rounded punctuation.

<figure markdown="1">
![Website screenshot](/images/blog/star-wars-cantina-birthday-party/website.jpg){: .card }
<figcaption>Screenshot of my website</figcaption>
</figure>

<aside class="card" markdown="1">
I think more people should use subdomains for things like this! It's become a meme at this point that people buy domains for projects they never get around to, but I always have to remind people: subdomains are free. Focus on making the thing, put it up on a subdomain, and then if you ever spin it out into its own successful thing, _then_ you can buy a flashy bare domain for it!
</aside>

Since I already owned [blaede.family](https://blaede.family) where I host extended family wishlists, recipes, and a Mastodon server, I resisted the urge to purchase yet another domain and instead went with a subdomain. [cantina.blaede.family](https://cantina.blaede.family/) doesn't _quite_ stay totally immersive, but it worked well enough—especially for a presumably short-lived project like this.

### Environment

Once I had the invite nailed down, I started working on what the actual physical environment would look like. I watched the Mos Eisley scenes from _A New Hope_, scoured concept art, and of course played more _Outlaws_. The main thing I came away thinking about was lighting! 

#### Lighting

The actual cantinas are often not all that interesting, but lighting plays a huge role, both in color and the overall dim lighting with (sometimes colorful) accent lights.

So, I got to work on setting up a lighting scene in Home Assistant. At first I was using the same color scheme everywhere, but I quickly found that distinct color schemes for different areas would feel more fun and interesting.

For the main lounge-type area, I went with dim orange lighting and just a couple of green accent lamps. This reminds me of Jabba's palace and Boba Fett, and just felt… right. It's sort of organic but would be a somewhat strange color scheme outside of Star Wars. It's also the first impression people will get when coming into the house, so I wanted it to feel the most Star Wars-y.

Next, I focused on the kitchen, where people would gather for drinks and snacks. We have white under-cabinet lighting which I wanted to keep for function (it's nice to see what color your food actually is…), but I went with a bluish-purple (almost ultaviolet) and pink. While this is very different from a cantina on Tatooine, it reminded me of the Coruscant bar we see in _Attack of the Clones_ as well as some of the environments in _The Clone Wars_ and _Outlaws_. At one point I was going to attempt to make a glowing cocktail that would luminesce under black light—I ditched that, but the lighting stayed.

One of the more important areas was, of course, the sabacc table (the dining room), which is adjacent to the kitchen. I had to balance ensuring the cards and chips are visible with that dim, dingy, underworld vibe. I settled on actually adding a couple of warm white accent lights (3D printed!) for visibility, then using the ceiling fan lights as a sabacc round counter (with a Zigbee button as the dealer token).

<figure markdown="1">
![3D printed light](/images/blog/star-wars-cantina-birthday-party/light.jpg){: .card }
<figcaption>3D printed accent light</figcaption>
</figure>

Lastly, I picked a few other colors for adjacent rooms: a more vivid purple for the bathroom, and red for my office (where I set up split-screen _Star Wars: Battlefront II_ on a PS2).

I was pretty happy with the lighting at this point, but then I re-watched the Mos Eisley scenes and noticed some fairly simple accent lights: plain warm white cylinders on the tables.

<figure markdown="1">
![Entrance](/images/blog/star-wars-cantina-birthday-party/entrance.jpg){: .card }
![Bar](/images/blog/star-wars-cantina-birthday-party/bar.jpg){: .card }
![Handywork](/images/blog/star-wars-cantina-birthday-party/handywork.jpg){: .card }
</figure>

I threw together a simple print for my 3D printer and added some battery-powered puck lights underneath: perfection.

<figure markdown="1">
![Cylinder light](/images/blog/star-wars-cantina-birthday-party/cylinder.jpg){: .card }
<figcaption>First test of my cylinder lights</figcaption>
</figure>

#### Music

With my networked speakers, I knew I wanted some in-universe cantina music—but I also knew _the cantina song_ would get real old, real fast. Since I'd been playing _Outlaws_ as well as a fan-made _Holocard Cantina_ sabacc app, I knew there was a decent amount of in-universe music out there; luckily it's actually all on YouTube Music.

I made a [looooong playlist](https://music.youtube.com/playlist?list=PL0AOBxB-0ieHOYJdGhVj-b1XOtm1IHHH1) including a bunch of that music plus some from Pyloon's Saloon in _Jedi: Survivor_, Oga's Cantina at Disney's Galaxy's Edge, and a select few tracks from other Star Wars media (Niamos!).

### Sabacc

<figure markdown="1">
![Sabacc prints](/images/blog/star-wars-cantina-birthday-party/sabacc-prints.jpg){: .card }
<figcaption>3D printed sabacc tokens and chips</figcaption>
</figure>
