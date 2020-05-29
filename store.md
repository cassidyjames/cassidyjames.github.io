# Cassidy’s Store

Yep, you can buy stuff from me. Each item here has been designed by me and will be produced for you on demand.

<div class="products">
  {% for product in site.products %}
    {% unless product.hidden %}
      <a href="{{ product.url }}" class="product">
        <img src="{{ product.images[0] }}" alt="Photo" />
        <h3>{{ product.title }} <em>${{ product.price }}</em></h3>
        <p>{{ product.content | strip_html | truncatewords: 9 }}</p>
      </a>
    {% endunless %}
  {% endfor %}
</div>
