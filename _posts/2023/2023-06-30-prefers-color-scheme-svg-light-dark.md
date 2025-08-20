---
title: "Give your SVGs light/dark style support"
description: prefers-color-scheme and media queries are magic
updated: 2023-06-30

comments:
  id: 110634455576567295
---

I've recently been contributing to Flathub and updating my own website a bit, and I found myself wanting to recolor SVGs for light and dark style support. Let's look at some examples:

## Inline SVG

When using an inline SVG (including it directly in the DOM), I still recommend using your site or page’s CSS to style your icons.

An SVG icon should look something like this, with the actual path data in the `d` attribute:

```xml
<svg>
  <path d="…" />
</svg>
```

You’ll want to make sure the SVG file doesn’t have its own styling, as that can override your page’s styles depending on specificity—it follows the “cascading” part of CSS, after all. Then just treat it like any other part of your page, remembering that paths use the `fill` property (instead of the `color` or `background` as you might expect).

```css
.example svg path {
  fill: #f00;
}
```

Inline SVGs can inherit styles like any other element, so I always recommend specifying both `color` and `fill` anywhere you want to set the foreground color on your site, so your icons pick up the text color automatically. So for your CSS:

```css
svg path {
  fill: inherit;
}

.example-1 {
  color: red;
  fill: red;
}
```

And then on your page:

```xml
<div class="example-1">
  <svg>
    <path d="…" />
  </svg>
  Some text
</div>
```

Result:

<div class="example example-1">
  {% include icons/low-vision-symbolic.svg %}
  Some text
  <style>
    svg path {
      color: inherit;
    }

    .example-1 {
      color: red;
      fill: red;
    }
  </style>
</div>

And as you might expect, the inline SVG will follow your page or site's media queries for dark style support:

```css
.example-2 {
  color: maroon;
  fill: maroon;
}

@media (prefers-color-scheme: dark) {
  .example-2 {
    color: pink;
    fill: pink;
  }
}
```

Result (go ahead and try toggling your OS/browser's dark style preference!):

<div class="example example-2">
  {% include icons/low-vision-symbolic.svg %}
  Some text
  <style>
    svg path {
      color: inherit;
    }

    .example-2 {
      color: maroon;
      fill: maroon;
    }

    @media (prefers-color-scheme: dark) {
      .example-2 {
        color: pink;
        fill: pink;
      }
    }
  </style>
</div>

This is how I use SVGs if I can, as you get more flexibility over the styling, and can do things like changing the color on hover (e.g. for SVGs in a link). That all makes sense because the SVG is directly in the DOM and thus can be treated like any other element. But sometimes you aren’t including the SVG inline—what then?

## `<img />` or CSS background image

When you use an SVG in an `<img />` tag or as a background image in CSS, it doesn’t follow the CSS rules given to DOM elements—the SVG and thus its included `<path>`s are not actually in the DOM. In this case, if you control the SVG file I recommend using a `<style>` element in the SVG itself! This is where it gets really cool: **you can use media queries directly in the SVG**:

```xml
<svg>
  <path d="…" />
  <style>
    path { fill: #273445 }

    @media (prefers-color-scheme: dark) {
      path { fill: #fafafa }
    }
  </style>
</svg>
```

Result (toggle your browser's dark style):

<div class="example example-3">
  <img alt="Destiny icon" src="/images/destiny.svg" />
</div>

**This does not allow you to dynamically recolor the SVG from your site or page's CSS**, so it has its limitations. But for brand icons where you want a light and a dark version, I love it.

## Favicons

I discovered something thanks to my friend, GNOME designer, and Flathub brand designer [Jakub Steiner](https://jimmac.eu/): **you can use a `prefers-color-scheme` media query directly in an SVG**, and browsers will Do the Right Thing™! We are using this on the new [Flathub website](https://flathub.org/); go ahead and toggle your OS's dark style preference and watch the favicon in your browser's UI.

If you use this, make sure you **provide a fallback PNG that works on both light and dark backgrounds**, as not all browsers support SVG favicons; check [Can I Use…](https://caniuse.com/link-icon-svg) for the details.

## CSS filters

Another option you have when using SVGs (or really, any images) on the page is to use CSS filters in light/dark style. Depending on how you use this, it can feel a bit more hack-ish, especially if you start manipulating colors—but it works. I used this on my [Star Wars: Andor page](/starwars/andor) for the logo:

```css
@media (prefers-color-scheme: light) {
  .example-4 img {
    filter: 
      brightness(0) 
      invert(14%) 
      sepia(43%) 
      saturate(4969%) 
      hue-rotate(343deg) 
      brightness(89%) 
      contrast(107%);
  }
}
```
As you can see, the resulting filters are _really_ messy, and it’s impossible to tell what it’s going to look like by reading it, which I don’t love. You can use an online [color to CSS filter converter](https://isotropic.co/tool/hex-color-to-css-filter/) to help compute the filters, as well. 

Result (toggle your browser's dark style):

<div class="example example-4">
  <img alt="Andor logo" src="https://cassidyjames.com/images/starwars/andor/logo.png" />
  <style>
  @media (prefers-color-scheme: light) {
    .example-4 img {
      filter: brightness(0) invert(14%) sepia(43%) saturate(4969%) hue-rotate(343deg) brightness(89%) contrast(107%);
    }
  }
  </style>
</div>

## Thanks for reading!

I hope this helps someone out there on the Internet, even if it’s just me the next time I go to manipulate SVGs. :)

<style>
    .example {
      margin: 1em auto;
      padding: 1em;
      background-color: var(--faint);
    }
</style>
