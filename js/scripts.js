window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const someInput = document.getElementById("myBox").value;
    alert(someInput);
  };
};