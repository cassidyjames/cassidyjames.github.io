---
title: How I Designed My Cantina Birthday Party
description: Throwing the Star Wars party I always wanted!
image: /images/blog/star-wars-cantina-birthday-party/table.jpg
updated: 2026-02-14
---

Ever since my partner and I bought a house several years ago, I've wanted to throw a themed Star Wars party here. We've talked about doing a summer movie showing thing, we've talked about doing a Star Wars TV show marathon, and we've done a few birthday parties—but never the _full-on_ themed party that I was dreaming up. Until this year!

For some reason, a combination of rearranging some of our furniture, the state of my smart home, my enjoyment of _Star Wars: Outlaws_, and my newfound work/life balance meant that this was the year I finally committed to doing _the party._

### Pitch

For the past few years I've thrown a two-part birthday party: we start out at a nearby bar or restaurant, and then head to the house for more drinks and games. I like this format as it gives folks a natural "out" if they don't want to commit to the entire evening: they can just join the beginning and then head out, or they can just meet up at our house. I was planning to do the same this year, but decided: let's go all-in at the house so we have more time for more fun. I knew I wanted:

1. **Trivia!** I organized a fun little Star Wars trivia game for my birthday last year and really enjoyed how nerdy my friends were with it, so this year I wanted to do something similar. My good friend Dagan volunteered to put together a fresh trivia game, which was incredible.

2. **Sabacc**. The Star Wars equivalent to poker, featured heavily in the _Star Wars: Outlaws_ game as well as in _Star Wars: Rebels_, _Solo: A Star Wars Story_, and the Disney Galactic Starcruiser (though it's Kessel sabacc vs. traditional sabacc vs. Corellian spike vs. Coruscant shift respectively… but I digress). I got a Kessel sabacc set for Christmas and have wanted to play it with a group of friends ever since.

3. **Themed drinks**. Revnog is mentioned in Star Wars media including _Andor_ as some sort of liquor, and spotchka is featured in the New Republic era shows like _The Mandalorian_ and _The Book of Boba Fett_. There isn't really any detail as to what each tastes like, but I knew I wanted to make some batch cocktails inspired by these in-universe drinks. 

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

Once I had the invite nailed down, I started working on what the actual physical environment would look like. I watched the bar/cantina scenes from _A New Hope_ and _Attack of the Clones_, scoured concept art, and of course played more _Outlaws_. The main thing I came away thinking about was lighting! 

#### Lighting

The actual cantinas are often not all that otherworldly, but lighting plays a huge role; both in color and the overall dimness with a lot of (sometimes colorful) accent lighting.

So, I got to work on setting up a lighting scene in Home Assistant. At first I was using the same color scheme everywhere, but I quickly found that distinct color schemes for different areas would feel more fun and interesting.

<figure markdown="1">
![Lounge area](/images/blog/star-wars-cantina-birthday-party/lounge.jpg){: .card }
<figcaption>Lounge area</figcaption>
</figure>

For the main lounge-type area, I went with dim orange lighting and just a couple of green accent lamps. This reminds me of Jabba's palace and Boba Fett, and just felt… right. It's sort of organic but would be a somewhat strange color scheme outside of Star Wars. It's also the first impression people will get when coming into the house, so I wanted it to feel the most recognizably Star Wars-y.

<figure markdown="1">
![Kitchen area](/images/blog/star-wars-cantina-birthday-party/kitchen.jpg){: .card }
<figcaption>Kitchen area</figcaption>
</figure>

Next, I focused on the kitchen, where people would gather for drinks and snacks. We have white under-cabinet lighting which I wanted to keep for function (it's nice to see what color your food actually is…), but I went with a bluish-purple (almost ultaviolet) and pink. 

<figure markdown="1">
![Coruscant](/images/blog/star-wars-cantina-birthday-party/coruscant.jpg){: .card }
<figcaption markdown="1">
Coruscant bar from _Attack of the Clones_
</figcaption>
</figure>

While this is very different from a cantina on Tatooine, it reminded me of the Coruscant bar we see in _Attack of the Clones_ as well as some of the environments in _The Clone Wars_ and _Outlaws_. At one point I was going to attempt to make a glowing cocktail that would luminesce under black light—I ditched that, but the lighting stayed.

<figure markdown="1">
![Table](/images/blog/star-wars-cantina-birthday-party/table.jpg)
<figcaption>Dining room sabacc table</figcaption>
</figure>

One of the more important areas was, of course, the sabacc table (the dining room), which is adjacent to the kitchen. I had to balance ensuring the cards and chips are visible with that dim, dingy, underworld vibe. I settled on actually adding a couple of warm white accent lights (3D printed!) for visibility, then using the ceiling fan lights as a sabacc round counter (with a Zigbee button as the dealer token).

<figure markdown="1">
![3D printed light](/images/blog/star-wars-cantina-birthday-party/light.jpg){: .card }
<figcaption>3D printed accent light</figcaption>
</figure>

Lastly, I picked a few other colors for adjacent rooms: a more vivid purple for the bathroom, and red plus a rainbow LED strip for my office (where I set up split-screen _Star Wars: Battlefront II_ on a PS2).

<figure markdown="1">
![Office](/images/blog/star-wars-cantina-birthday-party/office.jpg){: .card }
<figcaption>Office area</figcaption>
</figure>

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

[![Outer Rim Underworld Cantina](/images/blog/star-wars-cantina-birthday-party/playlist.jpg){: .card width="272px" }](https://music.youtube.com/playlist?list=PL0AOBxB-0ieHOYJdGhVj-b1XOtm1IHHH1)

I made a [looooong playlist](https://music.youtube.com/playlist?list=PL0AOBxB-0ieHOYJdGhVj-b1XOtm1IHHH1) including a bunch of that music plus some from Pyloon's Saloon in _Jedi: Survivor_, Oga's Cantina at Disney's Galaxy's Edge, and a select few tracks from other Star Wars media (Niamos!).

### Sabacc

A big part of the party was sabacc; we ended up playing several games and really getting into it. To complement the cards and dice (from [Hyperspace Props](https://hyperspaceprops.com)), I 3D printed chips and tokens that we used for the games. 

<figure markdown="1">
![Sabacc prints](/images/blog/star-wars-cantina-birthday-party/sabacc-prints.jpg){: .card }
<figcaption>3D printed sabacc tokens and chips</figcaption>
</figure>

We started out simple with just the basic rules and no tokens, but after a couple of games, we introduced some simple tokens to make the game more interesting.

<figure markdown="1">
![Playing sabacc ](/images/blog/star-wars-cantina-birthday-party/sabacc.jpg)
<figcaption>Playing sabacc</figcaption>
</figure>

I had a blast playing sabacc with my friends and by the end of the night we all agreed: we need to play this more frequently than just once a year for my birthday!

### Drinks

I'm a fan of batch cocktails for parties, because it means less time tending a bar and more time enjoying company—plus it gives you a nice opportunity for a themed drink or two that you can prepare ahead of time. I decided to make two batch cocktails: green revnog and spotchka.

<figure markdown="1">
![Spotchka and revnog](/images/blog/star-wars-cantina-birthday-party/spotchka-revnog.jpg){: .card }
<figcaption>Bottles of spotchka and revnog</figcaption>
</figure>

[Revnog](https://starwars.fandom.com/wiki/Revnog) is shown a few times in Andor, but it's hard to tell what it looks like—one time it appears to be blue, but it's also lit by the bar itself. When it comes to taste, the [StarWars.com Databank](https://www.starwars.com/databank/revnog) just says it "comes in a variety of flavors." However, one character mentions "green revnog" as being her favorite, so I decided to run with that so I could make something featuring objectively the best fruit in the galaxy: pear (if you know, you know).

<figure markdown="1">
![Revnog](/images/blog/star-wars-cantina-birthday-party/revnog.jpg){: .card }
<figcaption>My take on green revnog</figcaption>
</figure>

After a lot of experimenting, I settled on a spiced pear gin drink that I think is a nice balance between sweet, spiced, and boozy. The simple batch recipe came out to: 4 parts gin, 1 part St. George's Spiced Pear Liqueur, 1 part pear juice, and 1 part lemon juice. It can be served directly on ice, or cut with sparkling water to tame it a bit.

[Spotchka](https://starwars.fandom.com/wiki/Spotchka) doesn't get its own StarWars.com Databank entry, but is mentioned in a [couple](https://www.starwars.com/databank/klatooinian-wikiup) of [entries](https://www.starwars.com/databank/sorgan-common-house) about locations from an arc of _The Mandalorian_. All that can be gleaned is that it's apparently glowing and blue (Star Wars sure loves its blue drinks!), and made from "krill" which in Star Wars is shrimp-like.

<figure markdown="1">
![Spotchka](/images/blog/star-wars-cantina-birthday-party/spotchka.jpg){: .card }
<figcaption>My take on spotchka</figcaption>
</figure>

I knew blue curaçao would be critical for a blue cocktail, and after a bit of asking around for inspiration, I decided coconut cream would give it a nice opacity and lightness. The obvious other ingredients for me, then, were rum and pineapple juice. I wanted it to taste a little more complex than just a Malibu pineapple, so I raided my liquor supply until I found my "secret" ingredient: grapefruit vodka. Just a tiny bit of that made it taste really unique and way more interesting! The final ratios for the batch are: 4 parts coconut rum, 2 parts white rum, 2 parts blue curaçao, 1 part grapefruit vodka, 2 parts pineapple juice, 1 part coconut cream. Similar to the revnog, it can be served directly on ice or cut with sparkling water for a less boozy drink.

### Summary

Over all I had a blast hanging out, drinking cocktails, playing sabacc, and nerding out with my friends. I feel like the immersive-but-not-overbearing environment felt right; just one friend (the trivia master!) dressed up, which was perfect as I explicitly told everyone that costumes were not _expected_ but left it open in case anyone wanted to dress up. The trivia, drinks, and sabacc all went over well, and a handful of us hung around until after 2 AM enjoying each other's company. That's a win in my book. :)
