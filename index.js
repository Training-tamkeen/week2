var button = document.getElementById("showText");
var text = document.getElementById("text");

button.addEventListener("click", () => {
  if (this.button.innerText === "Show text") {
    this.button.innerText = "Hide text";
    text.style.visibility = "visible";
  } else {
    this.button.innerText = "Show text";
    text.style.visibility = "hidden";
  }
});

// Basic Form validation.
function validate() {
  if (document.myForm.name.value == "") {
    alert("Please provide your name!");
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.email.value == "") {
    alert("Please provide your Email!");
    document.myForm.email.focus();
    return false;
  }
  if (document.myForm.message.value == "") {
    alert("Please provide a message");
    document.myForm.message.focus();
    return false;
  }
  return true;
}
