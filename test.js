let boutonTest = document.createElement("button");
boutonTest.textContent = "bouton test";
let divTest = document.querySelector("#conteneurTest");



boutonTest.addEventListener("click", function() {
    console.log("hello");
});

divTest.append(boutonTest);




const api_key = "RGAPI-d9ca9762-1b8b-4b44-8e72-5bcad3d692db"
const proxy_url = 'https://cors-anywhere.herokuapp.com/';
const url = "https://euw1.api.riotgames.com/lol/summoner/v4/summoner/by-name/"
const request = url + "AngMnz69?api_key=" + api_key;

fetch(request)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);  // Traitez les données reçues ici
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
