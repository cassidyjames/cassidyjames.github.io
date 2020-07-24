---
---

# Cassidy’s Blog

A barebones place for my thoughts. Most of my writing is on the [elementary blog](https://blog.elementary.io/authors/#cassidyjames).

{% assign posts = site.posts | sort: "date" | sort: "updated" | reverse %}

{% for post in posts %}
  {% unless post.hidden %}
    {% include post-summary.html post=post %}
  {% endunless %}
{% endfor %}
