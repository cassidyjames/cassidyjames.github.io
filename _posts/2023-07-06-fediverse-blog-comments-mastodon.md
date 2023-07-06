---
title: Toot toot! Mastodon-powered Blog Comments
description: The Fediverse—and Mastodon’s API—is magic for static Jekyll sites
updated: 2023-07-06

image: /images/blog/fediverse-blog-comments-mastodon/current.png
---

If you follow me on Mastodon, you’ve probably heard that I’ve added Mastodon-powered comments to this here blog. If you missed it, [check it out](#comments)!

Read on to dive into my process, the first few iterations of how I did it, and what my hopes are for the future. There are lots of links to the source code on GitHub if you want to follow along, as well. Oh, and throughout this post I’ll be referring to “Mastodon” comments, but technically any [Fediverse](https://en.wikipedia.org/wiki/Fediverse) account that uses [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) can comment on my blog by replying to the the associated Mastodon post—and I do directly use the [Mastodon API](https://docs.joinmastodon.org/api/) to get those replies and associated data from my own instance.

### Inspiration

At some point, I had seen other folks on Mastodon sharing that they'd added comments to their websites powered by ActivityPub, but it always seemed daunting. After all, I don’t love complex web development and could see rolling my own commenting system as a never-ending web development project. At the same time, I have built a few [static websites](/blog/welcome-to-the-new-blog/#modern-features) and spent years [iterating on them](/blog/read-time-estimate-jekyll/) to feel more like something running on a dynamic server, all while being blazing fast. So the challenge sounded at least vaguely interesting. At some point, WordPress also acquired an [ActivityPub plugin](https://wordpress.org/plugins/activitypub/), which seemed really cool for people using WordPress. Still, I forgot about it for a while.

I was reminded about it when [Jan Wildeboer](https://jan.wildeboer.net/) shared [“Client-side comments with Mastodon on a static Jekyll website”][Jan's post] on his blog—this seemed perfect! I peeked at it, bookmarked it, and moved on.

Finally, when I was sharing my [FreeDesktop Accent Colors proposal for GNOME](/blog/freedesktop-accent-colors-gnome-proposal/), I really wanted a better way for people to follow the conversation; that inspired me to finally actually dig in.

### First Iteration

As a very first proof-of-concept, I read through [Jan's post] again (do so if you are interested in implementing this!), then just took his code verbatim and bolted it onto my own Jekyll site. It actually worked! That allowed me to start really understanding how it works.

<figure markdown="1">
![Screenshot of comments at first](/images/blog/{{ page.slug }}/first.png){: .card }
<figcaption>They’re comments, and they work!</figcaption>
</figure>

I'll leave a lot of the details for his post, but the super-simplified gist is:

1. Write a blog post
2. Post about it on Mastodon
3. Grab the resulting post ID and plug it back into the static site
4. The blog uses the Mastodon API client-side to fetch replies to the given post
5. Those replies are spit out onto the page and styled

The majority of my work to ship the [first iteration](https://github.com/cassidyjames/cassidyjames.github.io/pull/35/files) was spent on tweaking the DOM that gets spit out and styling it up to fit the style of my site. It was a bit rough, but it worked!

### Oops, Emoji and Avatars 🤦️

I excitedly shared a few posts with comments enabled, then someone pointed out: custom emoji (in the `:shortcode:` format) didn’t work! Womp womp. Luckily, Jan had already solved this for display names, so I was able to [copy it for the comment itself](https://github.com/cassidyjames/cassidyjames.github.io/commit/dde9bf9b6436e0b75fb3f4cb0691a4ad37239b3f) pretty easily.

<figure markdown="1">
![Screenshot of comments with no inline emoji](/images/blog/{{ page.slug }}/emoji.png){: .card }
<figcaption>:oops:, also note the interactions cluttering things up at the bottom</figcaption>
</figure>

Then it was pointed out they weren't animated! Well, yeah, because I was requesting the `static` versions of emoji (and user avatars, actually), so that was expected. I [added support](https://github.com/cassidyjames/cassidyjames.github.io/commit/436b3208b326db2a98e7525c1150553ff5040bc6) for animated emoji and avatars while respecting the `prefers-reduced-motion` media query that can be set by OSes and browsers. Neat!

Someone pointed out that the avatar styling I was using wasn't the prettiest with certain profile pictures, so I [rewrote that across my whole site](https://github.com/cassidyjames/cassidyjames.github.io/commit/d69c5ac56ccb50f391e12cd5d6ac8b56292bc830)—and then I noticed some avatars were provided at a too-small size, so I [fixed that](https://github.com/cassidyjames/cassidyjames.github.io/commit/d0355a4ebd4d20b46c0fe84a49b4bbf26d487fdf), too.

### Clean Up

Along the way I noticed a few things that could be cleaned up. First, inline links were included in full, which is pretty ugly. Luckily the Mastodon API returns links with helpful utility classes included, meaning you just have to use a [tiny bit of CSS](https://github.com/cassidyjames/cassidyjames.github.io/commit/bbb9c6729adc77fec5154d2991919b067b312665) to imitate what Mastodon does on the web and in its apps. Second, I wasn't handling accounts without an explicit display name as gracefully as I could; I first used some [dirty string splitting](https://github.com/cassidyjames/cassidyjames.github.io/commit/4d22f2e859871face3217045a49f0e622a413ec2), then realized I could just [use the username](https://github.com/cassidyjames/cassidyjames.github.io/commit/9f5dba20850c61ac1cc223473be779748486a65d#diff-e224579ed0344a76bb3837aa2d28776274c7b0f5b201514e010cc8b3277e0b74L58-R46) from the API.

<figure markdown="1">
![Screenshot of comments with broken wrapping](/images/blog/{{ page.slug }}/wrapping.png){: .card }
<figcaption>Well that’s no good</figcaption>
</figure>

I noticed wrapping was super broken with long names and small screen sizes, so I took the time to finally learn CSS grid; check out the excellent-as-usual [CSS-Tricks complete guide](https://css-tricks.com/snippets/css/complete-guide-grid/) if you've been putting it off like me. This allowed me to fine-tune the layout of the replies exactly how I wanted in a way that made sense to my brain.

At this point, I was really getting unhappy with the massive blobs of HTML inside of JS inside of HTML—and my text editor's syntax highlighting wasn't a fan, either. So I spent some time iterating, rewriting, and simplifying things. First, since I was doing the same thing with emoji twice, I [pulled out the emoji-replacing into its own function](https://github.com/cassidyjames/cassidyjames.github.io/commit/6c53413033b1154836cc8b0bd55d04b0f250ae94). Rather than using string replacement on large blobs of HTML, I (re)learned how to directly create and manipulate DOM elements with JavaScript. This was _so much cleaner_ in the resulting code, even if it technically takes a few more lines.

After having a good experience switching to actual JavaScript DOM instead of strings, I took the plunge and [rewrote the whole thing](https://github.com/cassidyjames/cassidyjames.github.io/commit/9f5dba20850c61ac1cc223473be779748486a65d) in the same fashion. This was my favorite part of the process because it felt like I really finally understood every line of code—and I was in charge of how it worked! Even if it’s not the best way to write JavaScript (I don't claim to be an expert, here), it really reminded me of whipping up native code in Vala for GTK apps. If you’ve spent any time reading or writing elementary Vala code, you can probably tell I have spent a lot of time doing so as well. 😅️

### Design Iteration

Something I noticed when sharing links was that if I had a thread about a blog post, the first post was being omitted because I was only pulling its replies in as comments. I [fixed this](https://github.com/cassidyjames/cassidyjames.github.io/compare/213a6ce07e170acf8ca2ad14e0245331e9ee1d54...4295df7f4c3e994910b3c8244ef2b4ed3bb053ba) by hitting the Mastodon API to grab that first post before grabbing its replies. 

As a part of the above-mentioned JavaScript rewriting, I spent time thinking about how to clean up the visuals as well. I wanted to make the avatars a bit bigger and just declutter things a bit. I was especially  unhappy with having a ton of default-styled links in the header of each reply, including the somewhat daunting full `@username@example.com` next to every single commenter's display name.

Literally while I was working on this, Facebook/Meta/Instagram [launched their Threads app](https://www.theverge.com/2023/7/5/23784263/instagram-threads-app-download-iphone-android). I poked at it for a few minutes to see if ActivityPub/federation was working, and it wasn't enabled yet, so I moved on. While I was poking at it, I noticed something interesting pointing towards that federation, though: on user profiles, Threads includes a little badge with your instance name (currently just `threads.net` since they're not federating). I liked this styling, and wondered if I could do something similar to clean up the `@username@example.com` styling that I didn't like. So I took a stab at it!

I made the decision to actually heavily deprioritize usernames in favor of display names plus instance badges. This is still a _little_ disjointed as inline @-mentions show usernames, but over all I _really_ like the look. To ensure readers can tell users apart, I added tooltips to the avatar and instance badge to expose the full username—and clicking either will open the commenter's profile on their own instance. On mobile (at least in the browsers I am able to test), tapping-and-holding either will show the link to the profile which serves the same purpose.

I also wanted a way to visual distinguish my own comments (and more generally, highlight the original poster or “OP” like on Reddit), so I added a sort of "verified" styling to any comments coming from my private instance; I add a check mark badged on my avatar and style the instance badge with a check mark and distinct accent color. I'd like to make this more generalized so if you theoretically had multiple authors on your blog, you could still highlight OP and/or trusted accounts—but that's a problem for another day.

I went back and forth a few times with if/how to handle post interactions like favorites and boosts; if I was going all-in, I'd figure out a way to use the reader's Mastodon account to actually directly interact with posts, but that’s… a _lot_ more work. With all my excited sharing about this project on Mastodon, I inspired at least one other person; Julian Fietkau [wrote and shared his own implementation](https://fietkau.blog/2023/another_blog_resurrection_fediverse_new_comment_system). His version also uses JavaScript DOM manipulation, but does a lot more like handling threading, re-ordering replies, stripping leading @-mentions, and more. I still have to dig into it and see if there is more I can pull into my implementation. I did like his styling of favorites, though, so I [did something similar](https://github.com/cassidyjames/cassidyjames.github.io/commit/5d5bf43b37516d22fcae278b44987e64fc35a8c2) for the time being.

<figure markdown="1">
![Screenshot of comments today](/images/blog/{{ page.slug }}/current.png){: .card }
<figcaption>Culmination of these design iterations</figcaption>
</figure>

### What's Next

To be clear, this whole project was just something I've been hacking on for my own site in the evenings and in between my regular work—I don't promise any future plans! That said, I figure it's good to actually write up what I'd like to tackle next, if only for my own accountability.

- **Improved loading state**: along the way, I made the decision to auto-load the posts instead of requiring user interaction. However, with that change, the comments just pop in once loaded—all with no progress indication. This seems like a clear improvement to make with some sort of placeholder state.

- **Cache at build time** then update client-side? I've seen some _Opinions™_ about this since it would require storing others' data, but this integration intentionally only handle non-private posts, so I think it would be okay? After all, ActivityPub servers cache content in a similar way, edited/deleted posts could be modified/removed client-side after page load, and all the data would be refreshed on the next site build to re-cache the changes. I think this would lead to an improved experience on page load since the comments would be there from the start and only the changes would need to load/shift on the page. Then again, it increases the complexity quite a bit, and basically means I have to maintain code in two places: at build time, and at page load.

- **Threading?** At one point I had some CSS to indent replies to other posts or to style them similarly to Twitter/Bluesky/Threads replies, but that quickly turns into a nightmare layout-wise. Naively indenting every rely results in terrible layouts as well. Julian's implementation does handle some amount of threading, so perhaps I could revisit this and choose to just support one nested level for replies.

- **Reduce links out** to make it feel more integrated: instead of just always linking to the commenter's profile, I could use the data already fetched by the Mastodon API to do something custom like a profile card when tapping or hovering the avatar. This could provide a commenter's header image, bio, verified links, etc. in a nice digestable format instead of requiring people to follow links. Similarly, I wonder if I could use the Mastodon API to list people who fave'd a post locally/inline, instead of hackily linking to the `/favourites` URL like now? It'd be neat to have the little overlapping avatars for faves, anyway.

- **Auto-post to Mastodon with the API??** This would be the dream: write a blog post, publish it, then CI actually handles posting to Mastodon on my behalf, logs the resulting post ID, and makes comments appear automatically. Hmm… 🤔️

- **Make reusable!** Right now this is somewhat reusable by others with static sites, but I know there are some weird me-isms included (like hardcoding my instance). It would be great to make this even more reusable by others.

### Did I Miss Anything?

Okay, you got this far, so you're dedicated. Let me know if you notice any glaring issues, have a brilliant idea, or have any kind of feedback for me by replying [below](#comments). After all, [dog food is the best food](/blog/eating-our-own-dog-food/)!

[Jan's post]: https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Comments/
