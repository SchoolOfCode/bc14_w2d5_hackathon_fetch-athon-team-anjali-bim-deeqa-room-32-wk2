//gonna fetch data from each API 
//async function
//fetch and wait from URL 
//Console log response
// console.log("linked")
// async function pokemon() {
//     const response = await fetch ("https://pokeapi.co/api/v2/pokemon/1/");
//     console.log(response)
//     const data = await response.json()
//     console.log(data)

// }



 async function dadJokes() {
   const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });

 
  console.log(response)
      const gettingJoke = await response.json()
console.log(gettingJoke)
 
  const theJoke = document.querySelector("#dadJoke");
  theJoke.textContent = gettingJoke.joke;

 }

    dadJokes()


    document.querySelector('#click-me').addEventListener('click', dadJokes);

    



