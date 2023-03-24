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
  
  function addToFavourites(str) {
     let jokeList = document.createElement("li")
     jokeList.textContent = str
     document.querySelector("#favourites").appendChild(jokeList)
   }

   
   
   async function dadJokes() {
     const response = await fetch("https://icanhazdadjoke.com/", {
       headers: { accept: "application/json" },
      });
      console.log(response)
      const gettingJoke = await response.json()
      console.log(gettingJoke)
      
      const theJoke = document.querySelector("#dadJoke");
      theJoke.textContent = gettingJoke.joke;
      
      //if input = yes, add to favourites
      //put this function inside the async function with (theJoke.textContent)
      // add event listener to YES button
      let favouriteButton = document.querySelector("#yes-favourites")
      favouriteButton.addEventListener("click", () => addToFavourites(theJoke.textContent))
 }
 document.querySelector('#click-me').addEventListener('click', dadJokes);

const refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener("click", () => {
  const jokeList = document.querySelector("#favourites");
  while (jokeList.firstChild) {
    jokeList.removeChild(jokeList.firstChild);
  }
});

//  function refresh (event) {
//   document.querySelector("#favourites").textContent = "";
//  }
 //document.querySelector("refresh").addEventListener("click", refresh);
 
 // create submit button
 //if rated highest, ask if you want to save to fav 
 //to create a favourites list

  //create fav list, with fav dad jokes

    



