var passwordField = document.getElementById("password");
var showPasswordCheckbox = document.getElementById("check");
showPasswordCheckbox.addEventListener("click", function() {
    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
var pw = document.getElementById("pw");
var showPassword = document.getElementById("checkb"); 
showPassword.addEventListener("click", function() {
  if (showPassword.checked) {
      pw.type = "text";
  } else {
      pw.type = "password";
  }
});
  function flipCard() {
    var card = document.getElementById("myCard");
    card.classList.toggle("flipped");
  }

  function validate(event){
    var name = document.getElementById("name").value;
    if(!/^[a-zA-Z]+$/.test(name)){
      alert("User name must be in alphabets!!");
      event.preventDefault(); 
    }
  }
  function valid(event){
    var namee = document.getElementById("namee").value;
    if(!/^[a-zA-Z ]+$/.test(namee)){
      alert("User name must be in alphabets!!");
      event.preventDefault(); 
    }
  }