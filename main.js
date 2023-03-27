//Dictionary API
//Step 1: View data
//create async function await fetch
//await response
// console log Response
//call function

async function getData() {
  let response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello`)
  let data = await response.json()
  console.log(data)
  console.log(data[0].meanings[0].definitions[0].definition)
}
getData()
  
