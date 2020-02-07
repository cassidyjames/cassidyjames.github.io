---
---

# Cassidy’s Blog

A barebones place for my thoughts. Most of my writing is on the [elementary blog](https://blog.elementary.io/authors/#cassidyjames).

{% for post in site.posts %}
{% unless post.hidden %}
- [{{ post.title }}]({{ post.url }}) {{ post.date | date: "%a, %b %e, %Y" }}
{% endunless %}
{% endfor %}
