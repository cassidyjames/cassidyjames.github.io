---
---

# Cassidy’s Blog

A barebones place for my thoughts. Most of my writing is on the [elementary blog](https://blog.elementary.io/authors/#cassidyjames).

{% assign posts = site.posts | sort: "date" | sort: "updated" | reverse %}

{% for post in posts %}
  {% unless post.hidden %}
    {% assign date = post.date %}
    {% if post.updated %}
      {% assign date = post.updated %}
    {% endif %}
- [{{ post.title }}]({{ post.url }}) {{ date | date: "%a, %b %e, %Y" }}
  {% endunless %}
{% endfor %}
