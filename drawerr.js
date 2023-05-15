document.getElementById("form1").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var name = document.getElementById("name1").value;
  var email = document.getElementById("email1").value;
  // Perform form submission handling or further processing here
  console.log("Form 1 submitted");
  console.log("Name1: " + name);
  console.log("Email1: " + email);
  // You can replace the console.log statements with your desired functionality
});

document.getElementById("form2").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var name = document.getElementById("name2").value;
  var email = document.getElementById("email2").value;
  // Perform form submission handling or further processing here
  console.log("Form 2 submitted");
  console.log("Name2: " + name);
  console.log("Email2: " + email);
  // You can replace the console.log statements with your desired functionality
});