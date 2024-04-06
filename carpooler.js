// JavaScript for the carpooler page

// Event listener for the login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve user input
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();

  // Validate user input
  if (name === "" || email === "") {
    alert("Please enter your name and email.");
    return;
  }

  // Assume AJAX call to send login info to server and save in database
  // Redirect to another page after successful login
  window.location.href = "eventSelection.html"; // Redirect to event selection page
});
