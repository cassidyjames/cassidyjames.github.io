---
---

# Aaron's Blog

A barebones place for my thoughts.

{% assign posts = site.posts | sort: "date" | sort: "updated" | reverse %}

{% for post in posts %}
  {% unless post.hidden %}
    {% include post-summary.html post=post %}
  {% endunless %}
{% endfor %}
