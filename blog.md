---
---

# Aaron's Blog

A place for my thoughts on things and also a review or two.

{% assign posts = site.posts | sort: "date" | sort: "updated" | reverse %}

{% for post in posts %}
  {% unless post.hidden %}
    {% include post-summary.html post=post %}
  {% endunless %}
{% endfor %}
