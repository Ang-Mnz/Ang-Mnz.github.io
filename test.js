let boutonTest = document.createElement("button");
let divTest = document.querySelector("#conteneurTest");

boutonTest.addEventListener('change', function() {
    console.log("hello");
});

divTest.add(boutonTest);
