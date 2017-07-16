var doc = new jsPDF();

function updateIframe(data) {
  $("iframe").contents().find('html').html(data);
}

function submitCv(callback) {
  var cv_text = $('#cv-text-area').val();
  
  try {
    var cv_json = $.parseJSON(cv_text);
  } catch(e) {
    alert("Invalid json");
    return;
  }
  $.ajax({
    type: "POST",
    url: "https://jsoncv.aran.site/generate",
    data: cv_json,
    success: function(data) {
      updateIframe(data);
      callback(data);
    },
    error: function() {
      alert("an error occured");
    },
    dataType: "html"
  });
}

function downloadPdf() {
  submitCv(function(data) {
    window.frames["preview-frame"].focus();
    window.frames["preview-frame"].print();    
  });
}