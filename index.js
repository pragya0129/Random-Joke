const getData = async () => {
  let response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  let data = response.json();
  console.log(data);
};
