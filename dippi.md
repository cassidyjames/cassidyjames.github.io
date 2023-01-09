![Icon](https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.github.cassidyjames.dippi.png)

# Dippi

<noscript markdown="1">
## This page requires JavaScript

Sorry, it's all done client-side on a static page, so JS is needed. You can download the [Dippi app for Linux][flathub] to perform the same calculations offline—no JavaScript necessary.
</noscript>

<div class="result">
  <div id="invalid" class="hidden">
    <h2>Analyze a Display</h2>
    <p>For LoDPI, a DPI range of <b>90–150 is ideal for desktops</b> while <b>124–156 is ideal for laptops</b>.</p>
    <p>For HiDPI, <b>180–300 is ideal for desktops</b> while <b>248–312 is ideal for laptops</b>.</p>
  </div>
  <div id="low" class="hidden error">
    <h2>Very Low DPI</h2>
    <p>Text and UI are likely to be too big for typical viewing distances. <b>Avoid if possible.</b></p>
  </div>
  <div id="lodpi-low" class="hidden warning">
    <h2>Fairly Low DPI</h2>
    <p>Text and UI might be too big for typical viewing distances, but it's <b>largely up to user preference</b> and physical distance from the display.</p>
  </div>
  <div id="lodpi-ideal" class="hidden success">
    <h2>Ideal for LoDPI</h2>
    <p>Not HiDPI, but <b>a nice sweet spot</b>. Text and UI should be legible at typical viewing distances.</p>
  </div>
  <div id="lodpi-high" class="hidden warning">
    <h2>Potentially Problematic</h2>
    <p>Relatively high resolution, but not quite HiDPI. Text and UI <b>may be too small by default</b>, but forcing HiDPI would make them appear too large. The experience may be slightly improved by increasing the text size.</p>
  </div>
  <div id="lodpi-should-be-hidpi" class="hidden warning">
    <h2>Tweak for HiDPI</h2>
    <p>This display may default to loDPI on some desktops, which could result in too-small text and UI. However, it <b>should be usable with HiDPI by manually enabling 2× scaling</b>.</p>
  </div>
  <div id="unclear" class="hidden warning">
    <h2>Potentially Problematic</h2>
    <p>This display is in a very tricky range and is <b>not likely to work well</b> with integer scaling out of the box.</p>
  </div>
  <div id="hidpi-low" class="hidden warning">
    <h2>Potentially Problematic</h2>
    <p>HiDPI by default, but <b>text and UI may appear too large</b>. Turning off HiDPI and increasing the text size might help.</p>
  </div>
  <div id="hidpi-ideal" class="hidden success">
    <h2>Ideal for HiDPI</h2>
    <p>Crisp HiDPI text and UI along with a readable size at typical viewing distances. <b>This is the jackpot.</b></p>
  </div>
  <div id="hidpi-high" class="hidden warning">
    <h2>Fairly High for HiDPI</h2>
    <p>Text and UI are likely to appear <b>too small for typical viewing distances</b>. Increasing the text size may help.</p>
  </div>
  <div id="high" class="hidden error">
    <h2>Too High DPI</h2>
    <p>Text and UI will appear <b>too small for typical viewing distances</b>.</p>
  </div>
</div>

<form action="/dippi" method="GET">
  <label class="row" for="diag">
    <span>Diagonal size:</span>
    <input id="diag" name="d" type="number" step=".01" /> inches
  </label>
  <label class="row" for="width">
    <span>Resolution:</span>
    <input id="width" name="w" type="number" step="1" />×<input id="height" name="h" type="number" step="1" /> px
  </label>
  <div class="row">
    <span>Type:</span>
    <label for="laptop">
      <input id="laptop" type="radio" name="t" value="l" />
      Laptop
    </label>
    <label for="desktop">
      <input id="desktop" type="radio" name="t" value="d" />
      Desktop
    </label>
  </div>
  <input type="submit" value="Calculate" />
</form>

<div class="appcenter" markdown="1">
## Get it on Flathub

Dippi is primarily a native app designed for GNOME and Linux-based operating systems. [Get it on Flathub][flathub] to calculate display info any time, online or off. It has extra features like logical resolution, scaling factor, aspect ratio, live calculation, and a nice diagram to help you out.

<div style="text-align: center">
<a href='https://flathub.org/apps/details/com.github.cassidyjames.dippi'><img width='180' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.svg'/></a>
</div>

</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const DEFAULT_ASPECT_WIDTH = 16;
    const DEFAULT_ASPECT_HEIGHT = 9;

    const INTERNAL_IDEAL_DPI = 140;
    const INTERNAL_IDEAL_RANGE = 16;
    const INTERNAL_UNCLEAR_RANGE = 14;

    const EXTERNAL_IDEAL_DPI = 120;
    const EXTERNAL_IDEAL_RANGE = 30;
    const EXTERNAL_UNCLEAR_RANGE = 20;

    const INCHES_INFER_EXTERNAL = 18;
    const DPI_INFER_HIDPI = 192;

    let diagInput = document.getElementById("diag");
    let widthInput = document.getElementById("width");
    let heightInput = document.getElementById("height");
    let laptopInput = document.getElementById("laptop");
    let desktopInput = document.getElementById("desktop");

    const urlParams = new URLSearchParams(location.search);

    const inches = urlParams.get("d");
    const width = urlParams.get("w");
    const height = urlParams.get("h");
    const type = urlParams.get("t");

    /* Set inputs */
    diagInput.value = inches;
    widthInput.value = width;
    heightInput.value = height;

    if (type == "d") {
      desktopInput.checked = true;
    } else {
      laptopInput.checked = true;
    }

    /* Do the math */
    let idealDpi = INTERNAL_IDEAL_DPI;
    let idealRange = INTERNAL_IDEAL_RANGE;
    let unclearRange = INTERNAL_UNCLEAR_RANGE;

    if (type == "d") {
      idealDpi = EXTERNAL_IDEAL_DPI;
      idealRange = EXTERNAL_IDEAL_RANGE;
      unclearRange = EXTERNAL_UNCLEAR_RANGE;
    }

    let calculatedDpi = dpi(inches, width, height);

    if ( !inches || !width || !height ) {
      document.getElementById("invalid").classList.remove("hidden");
    }

    else if (calculatedDpi < idealDpi - idealRange - INTERNAL_UNCLEAR_RANGE) {
      document.getElementById("low").classList.remove("hidden");
    }

    else if (calculatedDpi < idealDpi - idealRange) {
      document.getElementById("lodpi-low").classList.remove("hidden");
    }

    else if (calculatedDpi <= idealDpi + idealRange) {
      document.getElementById("lodpi-ideal").classList.remove("hidden");
    }

    else if (calculatedDpi <= idealDpi + idealRange + unclearRange) {
      document.getElementById("lodpi-high").classList.remove("hidden");
    }

    else if (calculatedDpi < DPI_INFER_HIDPI) {
      document.getElementById("lodpi-should-be-hidpi").classList.remove("hidden");
    }

    else if (calculatedDpi < (idealDpi - idealRange - unclearRange) * 2) {
      document.getElementById("unclear").classList.remove("hidden");
    }

    else if (calculatedDpi < (idealDpi - idealRange) * 2) {
      document.getElementById("hidpi-low").classList.remove("hidden");
    }

    else if (calculatedDpi <= (idealDpi + idealRange) * 2) {
      document.getElementById("hidpi-ideal").classList.remove("hidden");
    }

    else if (calculatedDpi <= (idealDpi + idealRange + unclearRange) * 2) {
      document.getElementById("hidpi-high").classList.remove("hidden");
    }

    else if (calculatedDpi > (idealDpi + idealRange + unclearRange) * 2) {
      document.getElementById("high").classList.remove("hidden");
    }

    else {
      document.getElementById("invalid").classList.remove("hidden");
    }

    function dpi(inches, width, height) {
      let unroundedDpi = Math.sqrt (
        Math.pow (width, 2) +
        Math.pow (height, 2)
      ) / inches;

      return Math.round (unroundedDpi);
    }
  });
</script>

<style>
  .hidden {
    display: none;
  }

  form {
    display: inline-block;
    margin: 1em 0;
  }

  .row {
    display: block;
    margin: 0.5em;
  }

  .row span {
    display: inline-block;
    text-align: right;
    min-width: 7em;
  }

  .row label {
    display: inline-block;
    margin: 0.25em;
  }

  input[type="number"] {
    appearance: none;
    background: var(--faint);
    border: 1px solid var(--primary-color);
    border-radius: 0.25em;
    color: var(--primary-color);
    display: inline-block;
    font-size: 1.125em;
    margin: 0 0.25em;
    opacity: 0.75;
    padding: 0.25em;
    -webkit-appearance: none;
    width: 5em;
  }

  input[type="number"]:focus {
    border-color: var(--accent-color);
    opacity: 1;
  }

  input[type="submit"] {
    float: right;
  }

  a img {
    display: inline-block;
  }
  
  .success h2 {
    color: var(--success-color);
  }
  
  .warning h2 {
    color: var(--warning-color);
  }
  
  .error h2 {
    color: var(--error-color);
  }
</style>

[flathub]: https://flathub.org/apps/details/com.github.cassidyjames.dippi
