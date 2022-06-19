---
description: "From The Clone Wars and Rebels to the Skywalker Saga and The Mandalorian—all things Star Wars."
image: /images/starwars/kenobi.jpg
---

# Star Wars

{{ page.description }}

## Watch-Along

Join us to watch along with new episodes of the latest Star Wars shows on Disney+!

- [Obi-Wan Kenobi](kenobi)
- ~~[The Mandalorian](mandalorian)~~
- ~~[Skywalker Saga](skywalker-saga)~~

## Episode Guides

- [The Clone Wars](clonewars)
  - [Movie](clonewars#the-clone-wars-movie-️)
  - [Season One](clonewars#season-one)
  - [Season Two](clonewars#season-two-rise-of-the-bounty-hunters)
  - [Season Three](clonewars#season-three-secrets-revealed)
  - [Season Four](clonewars#season-four-battle-lines)
  - [Season Five](clonewars#season-five)
  - [Season Six](clonewars#season-six-the-lost-missions)
  - [Season Seven](clonewars#season-seven-the-final-season)

## Timeline

Scott wanted a canonical timeline, so here's a rough table of released and confirmed TV and film media. There's _a ton_ of comics and books, but this doesn't get into that (at least not yet). 

### Filter & Key

<label for="saga">
  <input name="filter" id="saga" type="checkbox" checked="checked" />
  🎬️ Skywalker Saga film
</label>

<label for="anthology">
  <input name="filter" id="anthology" type="checkbox" checked="checked" />
  🎞️ "A Star Wars Story" anthology film
</label>

<label for="animated">
  <input name="filter" id="animated" type="checkbox" checked="checked" />
  📺️ Animated series
</label>

<label for="disney">
  <input name="filter" id="disney" type="checkbox" checked="checked" />
  ➕️ Live action Disney+ series
</label>

<label for="book">
  <input name="filter" id="book" type="checkbox" checked="checked" />
  📖 Novel
</label>

**BBY**: years _Before the Battle of Yavin_, or before Episode IV \
**ABY**: years _After the Battle of Yavin_, or after Episode IV

### Table

<table style="text-align: left;">
  <thead>
    <tr>
      <th></th>
      <th>Media</th>
      <th>Timeline</th>
      <th>Release</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    {% for media in site.data.starwars %}
      {% assign timeline = media.timeline | plus: 0 %}
      <tr class="filterable {{ media.type }}">
        <td>
          {% if media.type == "saga" %}
            🎬️
          {% elsif media.type == "anthology" %}
            🎞️
          {% elsif media.type == "animated" %}
            📺️
          {% elsif media.type == "disney" %}
            ➕️
          {% elsif media.type == "book" %}
            📖
          {% endif %}
        </td>
        <td>{{ media.title }}</td>
        <td>
          {{ timeline | abs }}
          {% if timeline < 0 %}
            BBY
          {% elsif timeline == 0 %}
            BBY/ABY
          {% elsif timeline > 0 %}
            ABY
          {% endif %}
        </td>
        <td>{{ media.release }}</td>
        <td>{{ media.notes }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

## More

- [Spoiler Room Sign](spoiler-room)

<script>
  let filterInputs = document.querySelectorAll('input[name="filter"]');
  let filterRows = document.querySelectorAll('tr.filterable');
  
  filterInputs.forEach(input => {
    console.log(input);

    input.addEventListener('change', event => {      
      let rows = document.querySelectorAll('tr.' + input.getAttribute('id'));
      
      rows.forEach(row => {
        row.classList.toggle('hidden', !input.checked);
      });
    });
  });
</script>
