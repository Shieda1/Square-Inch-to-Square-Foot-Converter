// https://www.omnicalculator.com/conversion/square-inch-to-square-foot-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squareFootRadio = document.getElementById('squareFootRadio');
const squareInchRadio = document.getElementById('squareInchRadio');

let squareFoot;
let squareInch = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squareFootRadio.addEventListener('click', function() {
  variable.textContent = 'Square Inch';
  squareInch = v;
  result.textContent = '';
});

squareInchRadio.addEventListener('click', function() {
  variable.textContent = 'Square Foot';
  squareFoot = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squareFootRadio.checked)
    result.textContent = `Square Foot = ${computesquareFoot().toFixed(5)}`;

  else if(squareInchRadio.checked)
    result.textContent = `Square Inch = ${computesquareInch().toFixed(5)}`;
})

// calculation

function computesquareFoot() {
  return Number(squareInch.value) / 144;
}

function computesquareInch() {
  return Number(squareFoot.value) * 144;
}