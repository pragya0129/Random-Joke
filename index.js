let setup = document.getElementById("setup");
let punchline = document.getElementById("punchline");
let question = 0;
let data;

const getData = async () => {
  if (question) {
    punchline.style.display = "block";
    punchline.innerText = data.punchline;
    question = 0;
    btn.innerText = "Next Joke";
  } else {
    let response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    data = await response.json();
    punchline.style.display = "none";
    setup.innerText = data.setup;
    setup.style.display = "block";
    question = 1;
    btn.innerText = "View Punchline";
  }
};

let btn = document.getElementById("generate");
btn.addEventListener("click", getData);
