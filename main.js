//Made by Benedict
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const calcBtn = document.getElementById('calcBtn');
const period = document.getElementById('periods');
const output = document.getElementById('output');
const presentValue = document.getElementById('present');
const futureValue = document.getElementById('future');
const inputs = document.querySelectorAll('.row input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    output.textContent = '';
  })
})

function calcInterest() {
  let int = interest.value;
  int = int/100;
  return int;
}

function compoundingPeriod() {
  let com = period.value;
  com = (calcInterest()/com) + 1;
  return com;
}

function power() {
  let comValue = Number(period.value);
  let year = Number(years.value);
  let power= comValue * year;
  return power;
}

function mix() {
  let mix = compoundingPeriod()**power();
  return mix;
}

function future() {
  let amt = amount.value;
  let finalValue = amt * mix();
  for (const input of inputs) {
    if (input.value === '') {
      output.textContent = 'Fill in all fields';
    } else {
      output.textContent = 'Calculating...'
      setTimeout(() => output.textContent = `₦${finalValue.toFixed(2)}`, 1500)
    }
  }
}

function present() {
  let amt = amount.value;
  let finalValue = amt / mix();
  for (const input of inputs) {
    if (input.value === '') {
      output.textContent = 'Fill in all fields';
    } else {
      output.textContent = 'Calculating...'
      setTimeout(() => output.textContent = `₦${finalValue.toFixed(2)}`, 1500)
    }
  }
  
}

function calculate() {
  if (presentValue.checked) {
    present();
  } else {
    future();
  }
}



calcBtn.addEventListener('click', calculate);


