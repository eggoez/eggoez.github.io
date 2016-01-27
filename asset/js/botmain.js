var old = '';

$(function() {
  $.get('default.html', function(source) {
    document.getElementById('view-frame').contentWindow.document.write(source);
    $('#edit-box').val(source);
  });
  update();
});

function update() {
  var textarea = $('#edit-box').val();
  var d = document.getElementById('view-frame').contentWindow.document; 

  if (old != textarea) {
    old = textarea;
    d.open();
    d.write(old);
    d.close();
  }

  window.setTimeout(update, 500);
}