window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const animal = document.getElementById("animal").value;
    const place = document.getElementById("place").value;
    const person = document.getElementById("person").value;
    const tool = document.getElementById("tool").value;
    const adj = document.getElementById("adj").value;

    document.querySelector(".hidden>p>span#animal").innerHTML = animal;
    document.querySelector(".hidden>p>span#place").innerHTML = place;
    document.querySelector(".hidden>p>span#person").innerHTML = person;
    document.querySelector(".hidden>p>span#tool").innerHTML = tool;
    document.querySelector(".hidden>p>span#adj").innerHTML = adj;

    document.querySelector(".hidden").removeAttribute("class");
    alert(someInput);
  };
};