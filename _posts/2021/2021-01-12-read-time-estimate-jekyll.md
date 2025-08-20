---
title: "Estimating “Read Time” in Jekyll"
description: "See it in use right here on the blog!"
updated: 2021-01-12
---

I'm a huge fan of static site generators like Jekyll, which I'm using for my website and various elementary sites like the [elementary Blog](https://blog.elementary.io). Over time, I've been working to make Jekyll blogs look and feel like a more full-featured dynamic CMS-based blog, like Wordpress, Ghost, or even Medium. However, much of what those dynamic sites do can be calculated at build time instead of on the fly—meaning Jekyll can handle them, no problem. One such example is a "read time" estimate.

## The Math

If you haven't thought about it, "read time" might seem complicated to calculate—and to be fair, you _could_ get really complex if you wanted to take into account vocabulary, lengths of paragraphs, and number of images. But for the vast majority of cases, you can get a perfectly workable sense of how long a blog post is with exceptionally simple math: **number of words ÷ words per minute**.

That's really it. For the words-per-minute metric, I have found **200 wpm** to be a good baseline; it's on the low end of an average adult reader, which means you typically _over_-estimate the reading time. In my opinion, it's safer to over-estimate since readers will be happier to finish reading earlier than estimated rather than later.

## Implementing it in Jekyll

To build this into Jekyll, I make use of `_includes` files. First, my blog template includes `_includes/read-time.html` with the logic. To use it, I include `{% raw %}{% include read-time.html content = page.content %}{% endraw %}` in my page template.
`read-time.html` contains the following, which I'll walk through step-by-step:

```liquid
{% raw %}{% capture output %}
  {% assign words = include.content | strip_html | number_of_words %}
  {% capture formatted_words %}{% include thousands.html number = words %}{% endcapture %}
  <span class="read-time" title="Estimated ({{ formatted_words | strip }} words at 200 words per minute)">
    {{ words | divided_by: 200 | plus: 1 }} min read
  </span>
{% endcapture %}

{{ output | strip_newlines | strip }}{% endraw %}
```

First, the basic idea is to construct the string inside a `{% raw %}{% capture %}{% endraw %}` block. This lets me pipe it to `strip_newlines` and `strip` when I output it, ensuring I'm not adding all kinds of extra spaces and newlines into the final HTML. Inside that block, I create a `words` variable which is a simple count of the post content (with HTML stripped out). This gives me the first part of my calculation.

In my case, I wanted to format that number with a thousands separator, so I pass it through a `thousands.html` template that formats the string, and I assign that to `formatted_words`. I keep this separate from the `words` variable so I can still use that for math later on.

<details markdown="1">
<summary markdown="1">
Reveal `thousands.html`
</summary>

```liquid
{% raw %}{% capture output %}
  {% assign digits = include.number | split:'' %}
  {% for digit in digits %}
    {% assign three_from_end = digits.size | minus: forloop.index | modulo: 3 %}
    {% if three_from_end == 2 and forloop.index != 1 %}
      {{ digit | prepend: ',' }}
    {% else %}
      {{ digit }}
    {% endif %}
  {% endfor %}
{% endcapture %}

{{ output | strip_newlines | remove: " " }}{% endraw %}
```
</details>

Then I set up the HTML that I actually want to be included in the page. I use a `<span>` with a `read-time` class so I can style it later, and include the `formatted_words` and a description of how it's calculated in the `title` attribute. Inside the span, I do the simple math: number of `words` divided by my words-per-minute of 200 (and I add one so I never get `0`). I append `min read` so the end result is something like `4 min read`.

That's it! Now I can just include `read-time.html` wherever I want to show the current page's estimated read time. I can even pass something other than `page.content` in if I want to calculate the read time of an arbitrary string.
