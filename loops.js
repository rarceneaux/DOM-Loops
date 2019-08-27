// loop thru the rainbow and print out the colors to the page
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// const  ew = ['black','gray','red'];

// const printRainbow = (toPrint,divId) =>{
//   colors.forEach((color) =>{
//     printToDom(color,'rainbow')
//   })
// }
const printToDom = (toPrint,divId) => {
  document.getElementById(divId).innerHTML += toPrint;
};





const instructors = [
  {first: "Zoe", last: "Ames"},
  {first: "Callan", last: "Morrison"},
  {first: "Greg", last: "Korte"},
  {first: "Michael", last: "Clarkeeeeeee"},
];



const printThem = () => {
  instructors.forEach((person) =>{
 printToDom(`<p>${person.first} ${person.last}</p>`,'rainbow');
  })
}

printThem();



// printRainbow();