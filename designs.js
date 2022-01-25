// Select color input
let colorPick;

// Select size input
let gridHeight;
let gridWidth;

// When size is submitted by the user, call makeGrid()
function makeGrid() {
   // selecting elements
   let gridHeight = document.getElementById("inputHeight").value;
   let gridWidth = document.getElementById("inputWidth").value;
   let canvas = document.getElementById("pixelCanvas");

   // creates an empty storage where the values will turn into rows and cell to display on the canvas
   canvas.innerText = ""; 
   // for loops
   // this for loop will add rows and cells to the tag table
   for (let c = 0; c < gridHeight; c++) {

       const row = canvas.insertRow(0);
      // nested for loop will act upon the number of width is input 
      for (let r = 0; r < gridWidth; r++) {

         let tableCell = row.insertCell(0); 
         // .onclick even will triger once the user will click on a desired color
         tableCell.onclick = chooseColor;
      }
   }
   
  // this will make a disply on the web page and will prevent from not displaying.
  return false;
}

// this will function will be call once a onclick event is click on a cell of a canvas to choose a color
function chooseColor() {
   const paintColor = document.getElementById("colorPicker").value;
   this.style.background = paintColor;
   return paintColor;
 
}




