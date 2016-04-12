function getCookies(domain, name, callback) {
  chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
    if(callback) {
      callback(cookie.value);
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  chrome.cookies.getAll({domain: 'localhost'}, function(cookies) {
  });
  var checkPageButton = document.getElementById('addLink');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://localhost:3000/job_postings/chrome_create';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'job_posting[url]';
      i.value = tab.url;
      var j = d.createElement('input');
      j.type = 'hidden';
      j.name = 'job_posting[user_id]';
      j.value = 1;
      f.appendChild(i);
      f.appendChild(j);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
