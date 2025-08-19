---
title: Home
class: cassidyjames
---

{% if site.avatar %}
  <img class="avatar" src="{{ site.avatar | prepend: site.baseurl }}" alt="Photo of Cassidy" width="128" height="128" />
{% endif %}

# {{ site.title }}

{{ site.description }}

<div class="cards" markdown="1">
<section class="work" markdown="1">
## Work

**Currently looking for work!** Previously, I co-founded elementary, Inc., was the UX Architect at System76, and was Community Architect/Experience Lead at Endless Access.

[<i class="fa fa-fw manual"></i>Learn about Endless](https://endlessaccess.org){: .read-more.endless }
[<i class="fa fa-fw manual"></i>Learn about elementary](https://elementary.io){: .read-more.elementary }
[<i class="fa fa-fw manual"></i>Learn about System76](https://system76.com){: .read-more.system76 }
[<i class="fab fa-fw fa-linkedin"></i>Connect on LinkedIn](https://linkedin.com/in/{{ site.linkedin }}){: .read-more.linkedin }
[<i class="far fa-fw fa-file-alt"></i>Review résumé](/resume){: .read-more.resume }
</section>

<section class="code" markdown="1">
## Volunteering & Collaboration

I volunteer for and collaborate with open source projects and communities, and share my projects under **free and open licenses**.

[<i class="fab fa-fw fa-github"></i>Browse code on GitHub](https://github.com/{{ site.github_user }}){: .read-more.github}
[<i class="fab fa-fw fa-gitlab"></i>View profile on GNOME GitLab](https://gitlab.gnome.org/cassidyjames){: .read-more.gitlab }
[<i class="fa fa-fw fa-info-circle"></i>View GNOME profile](https://wiki.gnome.org/CassidyBlaede){: .read-more.gnome }
</section>

<section class="talks" markdown="1">
## Talks, Streams, & Podcasts

I give **talks** and **stream** my work on open source. I also sometimes appear on **podcasts**.

<a href="/talks" class="read-more talks"><i class="fa fa-fw fa-chalkboard-teacher"></i>View talks</a>
<a href="https://www.youtube.com/@CassidyJames/streams" class="read-more"><i class="fa-fw fa-solid fa-video"></i>Watch livestreams</a>
<a href="https://www.youtube.com/watch?v=iI1y8srvUMc" class="read-more"><i class="fa-fw fa-brands fa-youtube"></i>Watch Tech Over Tea</a>
<a href="https://www.youtube.com/watch?v=YRCndaruy_g" class="read-more"><i class="fa-fw fa-brands fa-youtube"></i>Watch Linux User Space</a>
<a href="https://linuxunplugged.com/guests/cassidyjames" class="read-more lup"><i class="fa-fw fa-solid fa-podcast"></i>Listen on Linux Unplugged</a>
</section>

<section class="writing" markdown="1">
## Writing & Social

I **write things** on the Internet about UX, tech, and what I'm up to. I usually share these things on **social media**.

<a href="/blog" class="read-more blog"><i class="fa fa-fw fa-rss"></i>Read posts on Blog</a>
<a rel="me" href="{{ site.mastodon.url }}" class="read-more mastodon"><i class="fab fa-fw fa-mastodon"></i>Follow {{ site.mastodon.handle }}</a>
<a rel="me" href="{{ site.twitter }}" class="read-more twitter"><i class="fab fa-fw fa-twitter"></i>Browse Twitter archive</a>
<a href="https://medium.com/{{ site.medium }}" class="read-more medium"><i class="fab fa-fw fa-medium"></i>Read posts on Medium</a>
</section>

<section class="photography" markdown="1">
## Photography

I take **photos** of my adventures (and my cat), mostly with my Pixel phone.

<a href="https://unsplash.com/{{ site.unsplash }}" class="read-more unsplash"><i class="fas fa-fw fa-camera"></i>View photos on Unsplash</a>
<a rel="me" href="{{ site.pixelfed }}" class="read-more pixelfed"><i class="fas fa-fw fa-camera-retro"></i>View photos on PixelFed</a>
<a href="https://instagram.com/{{ site.instagram }}" class="read-more instagram"><i class="fab fa-fw fa-instagram"></i>View photos on Instagram</a>
</section>

<section class="gaming" markdown="1">
## Gaming

I play **games** when I can find the time. Usually on PS5, but occasionally on Switch, and—very rarely—Steam.

<a href="/destiny" class="read-more destiny"><i class="fa fa-fw manual"></i>Add on Destiny</a>
<a href="http://psnprofiles.com/blaede22" class="read-more psn"><i class="fa fa-fw fa-trophy"></i>See PSN profile</a>
<a href="/switch" class="read-more switch"><i class="fa-fw fa-solid fa-gamepad"></i>Add on Nintendo Switch</a>
<a href="http://steamcommunity.com/id/{{ site.steam }}/" class="read-more steam"><i class="fab fa-fw fa-steam-square"></i>Add on Steam</a>
</section>
</div>
