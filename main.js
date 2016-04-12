document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('addLink');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://localhost:3000/job_postings';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'job_posting[url]';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
