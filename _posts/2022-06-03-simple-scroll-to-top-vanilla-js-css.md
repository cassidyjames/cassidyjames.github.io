---
title: Simple scroll-to-top in vanilla JavaScript and CSS
description: Continuing my series of documenting things for myself
image: /images/blog/simple-scroll-to-top-vanilla-js-css/card.png

updated: 2022-06-03
---

I'll probably expand on this in the future, but I am fairly proud of how this turned out! A client wanted a back-to-top button on their rentals page since the page was getting pretty tall, and I decided to whip something progressively-enhancing up.

![Screenshot of back-to-top button]({{ page.image }}){: .card }

Works without JavaScript, technically even works without CSS.

### The HTML

First, I create an anchor (link) that points to the top of the page, using the age-old `href="#"`. This tells the browser to scroll to an empty ID, which in practice means the top of the page. If I want to scroll to a specific section other than the top of the whole page, I could include the ID of the element to scroll to, e.g. `href="#specific-id"`.

```html
<a class="back-to-top" href="#">Back to top</a>
```

I could stop here and technically it would work! It would show up wherever placed in the DOM, and clicking it will take you to the top of the page.

### JavaScript

In JS, I create a `setScrollClass()` function that's responsible for deciding when to toggle the class on the `<body>`. I use `classList.toggle()` to say to add the `at-top` class when you're within 48px of the top of the page.

I chose 48px here because if that number's too small, I can hit issues in certain browsers/on certain devices (e.g. especially on mobile!), and 48px feels close enough to the top/bottom in my experience. But that _is_ pretty subjective and could easily be some other value.

I also calculate the distance from the _bottom_ of the window, because in this case the scroll-to-top button could overlap the footer navigation which I found annoying. Totally up to you and your site design, though.

I've wrapped the guts of `setScrollClass()` in a `requestAnimationFrame()` debounce, but honestly I'm not 100% sure it's necessary; it largely depends on whether or not browsers already debounce JS events on resize and scroll. It can't really hurt, though.

To ensure the button shows up and hides when appropriate based on the scroll position and window resizing (since resizing the window can cause the scroll position to change), I add event listeners to the window for both `scroll` and `resize` and call the `setScrollClass()` function for each.

```javascript
let debounceTimeout;
let body = document.querySelector('body');
let scrollingElement = document.scrollingElement;

setScrollClass();

window.addEventListener('scroll', setScrollClass);
window.addEventListener('resize', setScrollClass);

function setScrollClass() {
  if (debounceTimeout) {
    window.cancelAnimationFrame(debounceTimeout);
  }

  debounceTimeout = window.requestAnimationFrame(function () {
    let scrollTop = scrollingElement.scrollTop;
    let scrollHeight = scrollingElement.scrollHeight;
    let innerHeight = window.innerHeight;
    let scrollBottom = scrollHeight - innerHeight - scrollTop;

    body.classList.toggle('at-top', scrollTop < 48);
    body.classList.toggle('at-bottom', scrollBottom < 48);
  });
}
```

Lastly, I'm sure to also just call `setScrollClass()` outside of the event listeners so it runs on page load.

### CSS

For styling, here I'm just focusing on the functional bits; the exact aesthetic is up to you. First, I make sure the site has `scroll-behavior: smooth` set because that'll make the built-in anchor scrolling smooth without any JS necessary. Gone are the days where you need some JS framework for that!

For the actual scroll-to-top anchor, I position it fixed at the bottom-right of the page. Subjective and up to your site design, but I find that works well especially when styled like a button like in the image at the top of the post.

I also give the anchor an opacity and a transition for the opacity, so that I can hide it when you're scrolled to the top or bottom of the page. When it's hidden (i.e. when the body has the `at-top` or `at-bottom` classes), I set the opacity to `0` and importantly disable `pointer-events` so it's not invisible but still clickable.

```css
html {
  scroll-behavior: smooth;
}

.back-to-top {
  bottom: 1em;
  opacity: 0.9;
  position: fixed;
  right: 1em;
  transition: opacity 200ms ease;
  z-index: 1;
}

.back-to-top:hover {
  opacity: 1;
}

.at-top .back-to-top,
.at-bottom .back-to-top {
  opacity: 0;
  pointer-events: none;
}
```

Feel free to style it up however else you see fit, i.e. as a button or just as an icon.

---

What do you think? Am I doing anything terribly wrong or unneeded here? Let me know on social media or via email using the links in the footer! And just for fun, I've added the exact code embedded on this page to this page. 😉️

<a class="back-to-top" href="#">Back to top</a>

<style>
  html {
    scroll-behavior: smooth;
  }

  .back-to-top {
    bottom: 1em;
    opacity: 0.9;
    position: fixed;
    right: 1em;
    transition: opacity 200ms ease;
    z-index: 1;
  }

  .back-to-top:hover {
    opacity: 1;
  }

  .at-top .back-to-top,
  .at-bottom .back-to-top {
    opacity: 0;
    pointer-events: none;
  }
</style>

<script>
  let debounceTimeout;
  let body = document.querySelector('body');
  let scrollingElement = document.scrollingElement;

  setScrollClass();

  window.addEventListener('scroll', setScrollClass);
  window.addEventListener('resize', setScrollClass);

  function setScrollClass() {
    if (debounceTimeout) {
      window.cancelAnimationFrame(debounceTimeout);
    }

    debounceTimeout = window.requestAnimationFrame(function () {
      let scrollTop = scrollingElement.scrollTop;
      let scrollHeight = scrollingElement.scrollHeight;
      let innerHeight = window.innerHeight;
      let scrollBottom = scrollHeight - innerHeight - scrollTop;

      body.classList.toggle('at-top', scrollTop < 48);
      body.classList.toggle('at-bottom', scrollBottom < 48);
    });
  }
</script>
