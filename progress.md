# Progress Bar Thingamadoodad

<div class="progress-bar">
  <meter id="volunteerathon" min="0" max="100" value="20"></meter>
</div>

<!--style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');

.progress-bar {
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  font-size: 3em;
}
</style-->

<style>
meter {
  --background-color: #e4f4f3;
  --border-color: #88c0c8;
  --fill-color: #a6d2cb;

  --height: 64px;
  --border-size: 4px;
  --fill-size: calc(var(--height) - 4 * var(--border-size));

  --border-radius: var(--height);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: var(--background-color);
  border: var(--border-size) solid var(--border-color);
  border-radius: var(--border-radius);
  width: 100%;
  height: var(--height);
}

meter::before {
  content: "20%";
  display: block;
}

meter::-webkit-meter-bar {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: none;
}

meter::-moz-meter-bar {
  background: var(--fill-color);
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  height: var(--fill-size);
  margin: var(--border-size);
}

::-webkit-meter-optimum-value {
  background: var(--fill-color);
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  height: var(--fill-size);
  margin: var(--border-size);
}
</style>
