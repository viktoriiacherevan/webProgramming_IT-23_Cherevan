document.forms["form_id"]["first_name"].addEventListener("focus", function () {
  this.style.border = "3px solid white";
})

document.forms["form_id"]["first_name"].addEventListener("blur", function () {
  this.style.border = "none";
  this.style.borderBottom = "2px solid tomato";
})

document.forms["form_id"]["second_name"].addEventListener("focus", function () {
  this.style.border = "3px solid white";
})

document.forms["form_id"]["second_name"].addEventListener("blur", function () {
  this.style.border = "none";
  this.style.borderBottom = "2px solid tomato";
})

document.forms["form_id"]["email"].addEventListener("focus", function () {
  this.style.border = "3px solid white";
})

document.forms["form_id"]["email"].addEventListener("blur", function () {
  this.style.border = "none";
  this.style.borderBottom = "2px solid tomato";
})

document.forms["form_id"]["phone"].addEventListener("focus", function () {
  this.style.border = "3px solid white";
})

document.forms["form_id"]["phone"].addEventListener("blur", function () {
  this.style.border = "none";
  this.style.borderBottom = "2px solid tomato";
})

document.getElementById('msg').addEventListener("focus", function () {
  this.style.border = "3px solid white";
})
 
document.getElementById('msg').addEventListener("blur", function () {
  this.style.border = "none";
  this.style.borderBottom = "2px solid tomato";
})

