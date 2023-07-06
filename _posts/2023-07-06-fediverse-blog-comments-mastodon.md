---
title: Toot toot! Mastodon-powered Blog Comments
description: The Fediverse—and Mastodon’s API—is magic for static Jekyll sites
updated: 2023-07-06
---

- Jan's post
- First stab
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
