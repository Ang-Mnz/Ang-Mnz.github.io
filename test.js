let boutonTest = document.createElement("button");
boutonTest.textContent = "bouton test";
let divTest = document.querySelector("#conteneurTest");

boutonTest.addEventListener('change', function() {
    console.log("hello");
});

divTest.append(boutonTest);
