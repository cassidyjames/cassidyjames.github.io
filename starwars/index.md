---
title: Star Wars
description: "Beyond the Skywalker Saga from The Clone Wars and Rebels to the Mandalorian and Andor—all things Star Wars."
image: /images/starwars/kenobi.jpg
logo: /images/starwars/logo.png
---

# {% picture {{ page.logo | remove_first: '/images/' }} --alt {{ page.title }} %}

{{ page.description }}

## Sabacc Cantina

[Blaede Cantina](https://cantina.blaede.family/)

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

**BBY**: years _Before the Battle of Yavin_, or before Episode IV \
**ABY**: years _After the Battle of Yavin_, or after Episode IV

Toggle each type of media to filter the table:

<div id="filters">
  <label for="saga">
    <input name="filter" id="saga" type="checkbox" checked="checked" />
    🎬️
    <span>Skywalker Saga film</span>
  </label>

  <label for="anthology">
    <input name="filter" id="anthology" type="checkbox" />
    🎞️
    <span>“A Star Wars Story” anthology film</span>
  </label>

  <label for="animated">
    <input name="filter" id="animated" type="checkbox" />
    📺️
    <span>Animated series</span>
  </label>

  <label for="disney">
    <input name="filter" id="disney" type="checkbox" />
    ➕️
    <span>Live action Disney+ series</span>
  </label>

  <label for="book">
    <input name="filter" id="book" type="checkbox" />
    📖
    <span>Novel</span>
  </label>
</div>

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

---

## More

- [Spoiler Room Sign](spoiler-room)

### Previous Watch-Alongs

- ~~[Skeleton Crew](skeleton-crew)~~
- ~~[Ahsoka](ahsoka)~~
- ~~[Andor Season 1](andor/s1)~~
- ~~[Obi-Wan Kenobi](kenobi)~~
- ~~[The Mandalorian](mandalorian)~~
- ~~[Skywalker Saga](skywalker-saga)~~

<script>
  let filterInputs = document.querySelectorAll('input[name="filter"]');
  let filterRows = document.querySelectorAll('tr.filterable');
  
  filterInputs.forEach(input => {
    let rows = document.querySelectorAll('tr.' + input.getAttribute('id'));

    rows.forEach(row => {
      row.classList.add('hidden');
      row.classList.toggle('hidden', !input.checked);
    });

    input.addEventListener('change', event => {
      rows.forEach(row => {
        row.classList.toggle('hidden', !input.checked);
      });
    });
  });
</script>
