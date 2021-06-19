# Dippi

<noscript markdown="1">
## This page requires JavaScript

Sorry, it's all done client-side on a static page, so JS is needed. You can download the [Dippi app for elementary OS][appcenter] to perform the same calculations offline—no JavaScript necessary.
</noscript>

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

<div class="result">
  <div id="invalid">
    <h2>Analyze a Display</h2>
    <p>For LoDPI, a DPI range of <b>90–150 is ideal for desktops</b> while <b>124–156 is ideal for laptops</b>.<p>
    <p>For HiDPI, <b>180–300 is ideal for desktops</b> while <b>248–312 is ideal for laptops</b>.</p>
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
    if (inches && width && height && type) {
      let idealDpi = INTERNAL_IDEAL_DPI;
      let idealRange = INTERNAL_IDEAL_RANGE;
      let unclearRange = INTERNAL_UNCLEAR_RANGE;

      if (type == "d") {
        idealDpi = EXTERNAL_IDEAL_DPI;
        idealRange = EXTERNAL_IDEAL_RANGE;
        unclearRange = EXTERNAL_UNCLEAR_RANGE;
      }

      let calculatedDpi = dpi(inches, width, height);

      if ( inches == 0 || width == 0 || height == 0 ) {
        console.log("invalid");
      }

      else if (calculatedDpi < idealDpi - idealRange - INTERNAL_UNCLEAR_RANGE) {
        console.log("low");
      }

      else if (calculatedDpi < idealDpi - idealRange) {
        console.log("lodpi-low");
      }

      else if (calculatedDpi <= idealDpi + idealRange) {
        console.log("lodpi-ideal");
      }

      else if (calculatedDpi <= idealDpi + idealRange + unclearRange) {
        console.log("lodpi-high");
      }

      else if (calculatedDpi < DPI_INFER_HIDPI) {
        console.log("unclear");
      }

      else if (calculatedDpi < (idealDpi - idealRange - unclearRange) * 2) {
        console.log("unclear");
      }

      else if (calculatedDpi < (idealDpi - idealRange) * 2) {
        console.log("hidpi-low");
      }

      else if (calculatedDpi <= (idealDpi + idealRange) * 2) {
        console.log("hidpi-ideal");
      }

      else if (calculatedDpi <= (idealDpi + idealRange + unclearRange) * 2) {
        console.log("hidpi-high");
      }

      else if (calculatedDpi > (idealDpi + idealRange + unclearRange) * 2) {
        console.log("high");
      }

      else {
        console.log("invalid");
      }
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
</style>

[appcenter]: https://appcenter.elementary.io/com.github.cassidyjames.dippi
