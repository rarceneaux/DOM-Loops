// console.log('🦕 vs 🦖');

const dinosaurs = [
  {
    dinoType: 't-rex',
    name: 'wrex',
    emoji:'🦖'
  },
  {
    dinoType: 'stegosaurus',
    name: 'steve',
    emoji:'🦕'
  },
  {
    dinoType: 'velociraptor',
    name: 'Ted',
    emoji:'🦇'
  }
];

const printToDom = (stringToPrint,divId) =>{
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

const makeDinoCards = () => {
  dinosaurs.forEach((dino)=> {
  let dinoString = ``;
  dinoString += `<div>`;
  dinoString += `<div class='dino-card'>`;
  dinoString += `<h3>${dino.dinoType}</h3>`;
  dinoString += `<p>${dino.name}</p>`;
  dinoString += `<h1>${dino.emoji}</h1>`;
  dinoString += `</div>`;
printToDom(dinoString,'dino-div');
});
}
makeDinoCards();