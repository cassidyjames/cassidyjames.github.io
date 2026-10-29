---
title: Updates to the Blog
description: Pagination, tags, and an import of my writing from elsewhere
updated: 2026-10-28
tags:
  - webdev
---

I've been wanting to get back into more frequent blogging instead of just posting half-thought-out toots to Mastodon, turning them into a rambling thread, and then losing the thought to the depths of social media… but every time I try to write something, there are a bunch of changes I want to make to my website so I get overwhelmed and do something else. 😅

Between the recent Matrix Conference (another blog post I need to write…), travel, and taking a couple of days off of work to recover, I decided to tackle some of those changes to _hopefully_ reduce the mental block for the future: I finally added pagination and tags, plus imported a bunch of my writing from other sites! As long as I'm here, I figured I should document the changes as a blog post, too.

### Pagination

As my blog has grown (I have posts as from over a decade ago!), dropping every post onto a single index page has started to get a bit unwieldy. I knew Jekyll had a pagination plugin, but I hadn't set it up. I finally did that, with nicely-styled back/forward buttons.

<figure markdown="1">
{% picture blog/blog-updates-pagination-tags-import/pagination.png --alt Newer button, page 4 of 7, older button --img class="card" %}
</figure>

It's a little thing, but something I'd been putting off for too long.

### Tags

With over a hundred and fifty posts, even paging through the blog is not a great experience if you're looking for something specific. I went through and tagged every blog post by topic: e.g. [GNOME](/blog/tags/gnome/), [Design](/blog/tags/design/), [Flatpak & Flathub](/blog/tags/flatpak/), [How-To](/blog/tags/howto/), and [Web Development](/blog/tags/webdev/).

<figure markdown="1">
{% picture blog/blog-updates-pagination-tags-import/tags.png --alt Tags on a post --img class="card" %}
</figure>

<aside markdown="1">
**Fun accident:** the [Star Wars tag page](/blog/tags/starwars/) gets the same styling as my [Star Wars pages](/starwars/) section because of how I use path-based CSS classes for custom styling. It was a bug, but I kind of like how it's a fun easter egg, so I kept it. 😉️
</aside>

I also wanted a way to format the tags nicely (e.g. `Star Wars` for the `starwars` tag) and provide some more context, so I added a data file to my Jekyll site to optionally provide a display name and description for each tag. Hover the tags to see the descriptions, or check out the new [tag listing](/blog/tags/) to browse all of the available topics!

### Importing my writing

Pagination and tags help a lot because now because: my blog has _way_ more posts! I've imported my writing from elementary and Android Police so it's all accessible from one place.

I wrote a ton for the elementary Tumblr, Medium publication, and blog during the decade-plus I contributed and then worked full-time on elementary; release announcements, AppCenter Spotlights, design rationale, developer tips, and more. I'd copied _some_ of my work here in the past, but most of it was still only accessible on the elementary blog—or was lost to the depths of Medium and Tumblr. I finally spent the time to import the 80+ remaining posts I authored. Where the posts are still available on the elementary blog, I made sure to point the canonical URL there to avoid leeching any search engine juice from the original site; I just want to make it convenient to read my stuff in one place, but don't want to mess up search engine ranking or anything. You can check out the entire archive on my site under the [elementary tag](/blog/tags/elementary/).

Similarly (though on a _much_ smaller scale), I contributed a few posts to [Android Police](https://www.androidpolice.com/author/cassidy/) before they were bought out and strip-mined by Valnet—the company [described by former writers as unethical](https://androiddev.social/@ryne/113544768947181345) that [acquires news sites and immediately lays off their staff](https://kotaku.com/polygon-sold-vox-media-valnet-layoffs-digital-gaming-1851778655?ref=aftermath.site), and [threatens to sue journalists](https://web.archive.org/web/20241125151535/https://twitter.com/joshtyler/status/1861066207270735989) for reporting on them. Since the topics I wrote about may be of interest to readers of my blog, I added those posts as redirects (with the ability to serve them from the site directly if they ever disappear). You can peruse those posts under the [Android tag](/blog/tags/android/).

If I find more of my writing across the Internet, I plan to pull it into this blog in a similar way; either cross-posted directly or at least indexed here with a redirect to the original.

### What's next?

I know not to promise anything (especially timelines!) but here are some things I'd like to work on next for my blog:

- Per-tag styling (e.g. a unique accent color)
- Find some of my more verbose Mastodon threads and turn them into blog posts
- Automatically-generated social cards by default
- Search while keeping everything static
- Address whatever other [issues I've opened](https://github.com/cassidyjames/cassidyjames.github.io/issues)
- Write more!

If anything in this post sounded interesting, [my website is open source](https://github.com/cassidyjames/cassidyjames.github.io)! Check out the source code or commit history to learn how I did things. I can't promise I did everything the _right_ way, but it works!
