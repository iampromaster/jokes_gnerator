let jokeText = document.querySelector(".joke");
let btn = document.querySelector(".btn");

let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJoke = () => {
  jokeText.classList.remove("show");
  fetch(url)
    .then(data => data.json())
    .then(item => {
      jokeText.textContent = `${item.joke}`;
      jokeText.classList.add("show");
    })
}

getJoke();

btn.addEventListener("click",getJoke)
