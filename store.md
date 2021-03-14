# Cassidy’s Store

Yep, you can buy stuff from me. Each item here has been designed by me and will be produced for you on demand.

<div class="products">
  {% for product in site.products %}
    {% unless product.hidden %}
    {% assign image = product.images[0] %}
      <a href="{{ product.url }}" class="product">
        <img src="{{ product.images[0] }}" alt="Photo" />
        {% include picture src=image alt=product.title %}
        <h3>{{ product.title }} <em>${{ product.price }}</em></h3>
        <p>{{ product.content | strip_html | truncatewords: 9 }}</p>
      </a>
    {% endunless %}
  {% endfor %}
</div>
