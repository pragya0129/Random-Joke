let setup = document.getElementById("setup");
let punchline = document.getElementById("punchline");

const getData = async () => {
  let response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  let data = await response.json();
  setup.innerText = data.setup;
  punchline.innerText = data.punchline;
};

let btn = document.getElementById("generate");
btn.addEventListener("click", getData);
