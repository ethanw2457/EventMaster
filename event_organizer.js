document.getElementById("eventform").addEventListener("submit", function(event) {
  event.preventDefault(); 
  window.location.href = "eventSelection.html";

  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value.trim();
  const address = document.getElementById("address").value.trim();
  const desc = document.getElementById("description").value.trim();


  if (name === "" || date === "" || address === "" || desc === "") {
    alert("Please fill in all fields.");
    return;
  }
  var i = 1;
  while (localStorage.getItem("event" + i) !== null) {
    i++;
  }
  localStorage.setItem("event" + i, name)
  localStorage.setItem("event" + i + "date", date);
  localStorage.setItem("event" + i + "address", address);
  localStorage.setItem("event" + i + "desc", desc);
  


  alert("Event added successfully!");


  window.location.href = "eventSelection.html";
});
