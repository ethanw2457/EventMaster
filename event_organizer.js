// JavaScript for the event organizer page

document.getElementById("eventForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve input values
  const eventName = document.getElementById("eventNameInput").value.trim();
  const eventDate = document.getElementById("eventDateInput").value;
  const eventLocation = document.getElementById("eventLocationInput").value.trim();

  // Validate input
  if (eventName === "" || eventDate === "" || eventLocation === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Assuming AJAX call to send data to server for database storage
  // Here you would send the data to your backend for database storage
  // For example, using fetch API or XMLHttpRequest

  // Simulating success message
  alert("Event added successfully!");

  // Redirect to thank you page
  window.location.href = "role.html";
});
