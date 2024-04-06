const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});


// the below is not used but for reference
document.getElementById("signupform").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  // Retrieve user input
  const name = document.getElementById("signupname").value.trim();
  const email = document.getElementById("emailInput").value.trim();

  // Validate user input
  if (name === "" || email === "") {
    alert("Please enter your name and email.");
    return;
  }
  var i = 1;
  while (localStorage.getItem("user" + i) !== null) {
    i++;
  }
  localStorage.setItem("user" + i, name);
  localStorage.setItem("email" + i, email);


  // Retrieve
  //document.getElementById("result").innerHTML = localStorage.getItem("user1");

  //localStorage.clear();
  // Assume AJAX call to send login info to server and save in database
  // Redirect to another page after successful login
  window.location.href = "/result.html?driver=" + name; // Redirect to event selection page
});
