const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function getTrainers() {
  return fetch(TRAINERS_URL)
    .then(response => response.json())
      // .then(trainer => console.log(trainer))
.then(trainers => {
  trainers.forEach(trainer => {
    renderTrainers(trainer)
  })
})
}

// getTrainers()



document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  console.log("event listener is working on line 21");
  getTrainers()
  // window.stop()
}
 )

function renderTrainers(trainer){
  // console.log("renderTrainers is console.logging")
  let box =  document.createElement('div')
  // box.innerText = trainer.name
  box.setAttribute("class", "box")

  let trainerName =  document.createElement('p')
  trainerName.setAttribute("class", "name-label")
  trainerName.innerText = trainer.name

  var addPokemon = document.createElement("button")
  
  addPokemon.innerHTML = "Add Pokemon"

  
  var pokeList =  document.createElement("ul")
  var pokeCrew = trainer.pokemons

  pokeCrew.forEach(character => {
    var item = document.createElement("li")
    item.innerText = `${character.nickname} \(${character.species}\)`
    // console.log(character.id)
    var releasePokemon =  document.createElement("button")
    releasePokemon.innerHTML = "RELEASE"  
    releasePokemon.setAttribute("class", "release") 
    item.appendChild(releasePokemon)
    pokeList.appendChild(item)
  })


  box.appendChild(trainerName)
  box.appendChild(addPokemon)
  // box.appendChild(releasePokemon)
  box.appendChild(pokeList)
  // document.body.appendChild(box)

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(box);3}