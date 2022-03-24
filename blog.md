---
---

# Cassidy’s Blog

A barebones place for my thoughts. Much of my writing is also on the [elementary blog](https://blog.elementary.io/authors/#cassidyjames), and I've written a couple of pieces for [Android Police](https://www.androidpolice.com/author/cassidy/).

{% assign posts = site.posts | sort: "date" | sort: "updated" | reverse %}

{% for post in posts %}
  {% unless post.hidden %}
    {% include post-summary.html post=post %}
  {% endunless %}
{% endfor %}
