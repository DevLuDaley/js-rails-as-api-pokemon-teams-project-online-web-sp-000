const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function getTrainers() {
  return fetch(TRAINERS_URL)
    .then(response => response.json())
      // .then(trainer => console.log(trainer))
}

getTrainers().then(trainers => {
  trainers.forEach(trainer => {
    //function to render toys goes here or something
    renderTrainers(trainer)
  })
})

function renderTrainers(trainer){
  console.log("renderTrainers is console.logging")
  let h2 =  document.createElement('h2')   
  h2.innerText = trainer.name

    /*
    let img = document.createElement('img')
  img.setAttribute('src', toy.image)
  img.setAttribute('class', 'toy-avatar')

  let p = document.createElement('p')
  p.innerText = `${toy.likes} likes`

  let btn = document.createElement('button')
  btn.setAttribute('class', 'like-btn')
  btn.setAttribute('id', toy.id)
  btn.innerText = "like"
  btn.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    likes(e)
  })

  let divCard = document.createElement('div')
  divCard.setAttribute('class', 'card')
  divCard.append(h2, img, p, btn)
  divCollect.append(divCard)
    */
}

// renderTrainers()
/*

 <div class="card" data-id="1">
      <p>Trainer</p>
      <BUTTON data-trainer-id="1">Add Pokemon</BUTTON>
      <ul>
        <li>
          Jacey (Kakuna)
          <button class="release" data-pokemon-id="140">Release</button>
        </li>
        <li>
          Zachariah (Ditto)
          <button class="release" data-pokemon-id="141">Release</button>
        </li>
        <li>
          Mittie (Farfetch'd)
          <button class="release" data-pokemon-id="149">Release</button>
        </li>
        <li>
          Rosetta (Eevee)
          <button class="release" data-pokemon-id="150">Release</button>
        </li>
        <li>
          Rod (Beedrill)
          <button class="release" data-pokemon-id="151">Release</button>
        </li>
      </ul>
    </div>

*/