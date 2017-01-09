document.addEventListener('DOMContentLoaded', function() {
  var SaveActiveButton = document.getElementById('saveActiveTab');
  SaveActiveButton.addEventListener('click', function() {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'https://jimbobjoliene.herokuapp.com/users/1/web_requests/38/WANKLEDOODLEDOO';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      
      var t = d.createElement('input');
      t.type = 'hidden';
      t.name = 'title';
      t.value = tab.title;
      f.appendChild(t);
      
      var p = d.createElement('input');
      p.type = 'hidden';
      p.name = 'projectName';
      p.value = 'consume transform';
      f.appendChild(p);
      
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
