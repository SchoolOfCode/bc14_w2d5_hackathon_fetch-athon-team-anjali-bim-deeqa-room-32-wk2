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

// pokemon()

console.log("linked")
async function trivia() {
    const response = await fetch ("https://opentdb.com/api.php?amount=10");
    console.log(response)
    const data = await response.json()
    console.log(data)
    

}

trivia()

// console.log("linked")
// async function dadJokes() {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         headers: { accept: "application/json" },
//       });
//     console.log(response)
//     const data = await response.json()
//     console.log(data)

// }

// dadJokes()

// console.log("linked")
// async function dictionary() {
//     const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello")
//     console.log(response)
//     const data = await response.json()
//     console.log(data)

// }

// dictionary()