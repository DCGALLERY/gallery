$(document).ready(function () {
    $("#send-email").click(function (event) {
      var formData = {
        email: $("#email").val()
      };
      console.log(formData)
  
      $.ajax({
        type: "POST",
        url: "https://api.ledinhcuong.com/mail-gallery.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
        if (!data.success) {
            if (data.errors.email) {
              $("#email-group").addClass("has-error");
              $("#email-group").append(
                '<div class="help-block">' + data.errors.email + "</div>"
              );
            }

          } else {
            $("form").html(
              '<div class="alert alert-success">' + data.message + "</div>"
            );
          }
      });
  
      event.preventDefault();
    });
  });

  function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("link-share");
    var icon = document.getElementById("icon-copy");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    if(icon.classList.contains("fa-regular")){
        icon.classList.remove("fa-regular")
        icon.classList.add("fa-solid")
    }
  }