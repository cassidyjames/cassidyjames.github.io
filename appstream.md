# AppCenter

This is a simple redirect page to help you open apps in elementary AppCenter. You can safely hit back or close this tab.

<script>
var app = getParams(document.location.search).app;
window.location = 'appstream://' + app;

function getParams(qs) {
  qs = qs.split('+').join(' ');
  
  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }
</script>
