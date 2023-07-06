---
title: Toot toot! Mastodon-powered Blog Comments
description: The Fediverse—and Mastodon’s API—is magic for static Jekyll sites
updated: 2023-07-06
---

If you follow me on Mastodon, you’ve probably heard that I’ve added Mastodon-powered comments to this here blog. If you missed it, [check it out](#comments)!

Read on to dive into my process, the first few iterations of how I did it, and what my hopes are for the future. Oh, and throughout this post I’ll be referring to “Mastodon” comments, but technically any [Fediverse](https://en.wikipedia.org/wiki/Fediverse) account that uses [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) can comment on my blog by replying to the the associated Mastodon post—and I do directly use the [Mastodon API](https://docs.joinmastodon.org/api/) to get those replies and associated data from my own instance.

### Inspiration

At some point, I had seen other folks on Mastodon sharing that they'd added comments to their websites powered by ActivityPub, but it always seemed daunting. After all, I don’t love complex web development and could see rolling my own commenting system as a never-ending web development project. At the same time, I have built a few [static websites](/blog/welcome-to-the-new-blog/#modern-features) and spent years [iterating on them](/blog/read-time-estimate-jekyll/) to feel more like something running on a dynamic server, all while being blazing fast. So the challenge sounded at least vaguely interesting. At some point, WordPress also acquired an [ActivityPub plugin](https://wordpress.org/plugins/activitypub/), which seemed really cool for people using WordPress. Still, I forgot about it for a while.

I was reminded about it when [Jan Wildeboer](https://jan.wildeboer.net/) shared [“Client-side comments with Mastodon on a static Jekyll website”][Jan's post] on his blog—this seemed perfect! I peeked at it, bookmarked it, and moved on.

Finally, when I was sharing my [FreeDesktop Accent Colors proposal for GNOME](/blog/freedesktop-accent-colors-gnome-proposal/), I really wanted a better way for people to follow the conversation; that inspired me to finally actually dig in.

### First Iteration

As a very first proof-of-concept, I read through [Jan's post] again (do so if you are interested in implementing this!), then just took his code verbatim and bolted it onto my own Jekyll site. It actually worked! That allowed me to start really understanding how it works.

I'll leave a lot of the details for his post, but the super-simplified gist is:

1. Write a blog post
2. Post about it on Mastodon
3. Grab the resulting post ID and plug it back into the static site
4. The blog uses the Mastodon API client-side to fetch replies to the given post
5. Those replies are spit out onto the page and styled

The majority of my work to ship the [first iteration](https://github.com/cassidyjames/cassidyjames.github.io/pull/35/files) was spent on tweaking the DOM that gets spit out and styling it up to fit the style of my site. It was a bit rough, but it worked!

- Learning grid
- Iterating on the code
  - Pulling out emojify
  - String-replaced templates → Using the DOM (reminds me of Vala!)
- Iterating on the design:
  - hide @username@example.com in favor of display name and instance badge (like Threads 🙈️)
  - Links
  - bigger avatar
  - Fall back to username
  - fewer ugly links
  - added faves
  - "verified"
  - title text, title text everywhere

## Todo

- Improved loading state; right now it just pops in once loaded w/no progress indication
- Cache server-side, then update client-side?
  - Questions about storing others' data, but I intentionally only handle non-private posts
  - ActivityPub servers cache content locally, after all
  - Edited/deleted posts could be modified/removed client-side, and be refreshed on the next site build to re-cache the changes
- Maybe one-level of threading?
- Reduce links out to Mastodon, making it feel more integrated
  - Profile card when tapping/hovering avatar?
  - Use API to list people who fave'd  post locally?
    - It'd be neat to have the little overlapping avatars for faves
- Auto-post to Mastodon with the API?? Right now it's very manual.

[Jan's post]: https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Comments/
