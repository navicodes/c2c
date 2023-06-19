// Get the form element
var form = document.getElementById("contactForm");

// Add an event listener for the submit event
form.addEventListener("submit", function(event) {

  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Send the email
  var ajaxOptions = {
    url: "contact-form-processor.php",
    method: "POST",
    data: {
      name: name,
      email: email,
      message: message
    }
  };

  $.ajax(ajaxOptions, function(response) {

    // Check if the email was sent successfully
    if (response.status === 200) {

      // Display a success message
      alert("Your message has been sent!");

      // Clear the form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

    } else {

      // Display an error message
      alert("An error occurred while sending your message. Please try again later.");

    }

  });

});
