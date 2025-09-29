// ==============================
// Part 1: Variables and Conditionals
// ==============================

const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
  const age = Number(ageInput.value);

  // Basic input validation
  if (isNaN(age) || age < 0 || age > 120) {
    ageResult.textContent = 'Please enter a valid age between 0 and 120.';
    return;
  }

  // Using if/else to check age group
  if (age < 13) {
    ageResult.textContent = 'You are a child.';
  } else if (age < 20) {
    ageResult.textContent = 'You are a teenager.';
  } else if (age < 65) {
    ageResult.textContent = 'You are an adult.';
  } else {
    ageResult.textContent = 'You are a senior.';
  }
});

// ==============================
// Part 2: Functions — The Heart of Reusability
// ==============================

// Function 1: Greet user with formatted string
function greetUser(name) {
  if (!name.trim()) {
    return 'Please enter your name.';
  }
  // Capitalize first letter
  const formattedName = name.trim()[0].toUpperCase() + name.trim().slice(1).toLowerCase();
  return `Hello, ${formattedName}! Welcome to the site.`;
}

// Function 2: Calculate total price with tax
function calculateTotalPrice(price, quantity, taxRate = 0.07) {
  // price and quantity are numbers
  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value;
  greeting.textContent = greetUser(name);
});

const priceInput = document.getElementById('priceInput');
const qtyInput = document.getElementById('qtyInput');
const calcTotalBtn = document.getElementById('calcTotalBtn');
const totalResult = document.getElementById('totalResult');

calcTotalBtn.addEventListener('click', () => {
  const price = Number(priceInput.value);
  const quantity = Number(qtyInput.value);

  if (isNaN(price) || price < 0) {
    totalResult.textContent = 'Please enter a valid positive price.';
    return;
  }
  if (!Number.isInteger(quantity) || quantity < 0) {
    totalResult.textContent = 'Please enter a valid quantity (non-negative integer).';
    return;
  }

  const total = calculateTotalPrice(price, quantity);
  totalResult.textContent = `Total price (including tax): $${total.toFixed(2)}`;
});

// ==============================
// Part 3: Loops — Embrace the Power of Repetition!
// ==============================

const showColorsBtn = document.getElementById('showColorsBtn');
const colorsList = document.getElementById('colorsList');

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

// Using forEach loop to generate list items
showColorsBtn.addEventListener('click', () => {
  colorsList.innerHTML = ''; // clear previous list
  colors.forEach(color => {
    const li = document.createElement('li');
    li.textContent = color;
    colorsList.appendChild(li);
  });
});

// Countdown example using a for loop and setTimeout
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

countdownBtn.addEventListener('click', () => {
  countdownDisplay.textContent = '';
  let count = 5;

  // Using a while loop inside a timer is tricky,
  // so we'll simulate countdown using recursive setTimeout.
  function countdown() {
    if (count >= 0) {
      countdownDisplay.textContent = `Countdown: ${count}`;
      count--;
      setTimeout(countdown, 1000);
    } else {
      countdownDisplay.textContent = 'Countdown finished!';
    }
  }
  countdown();
});

// ==============================
// Part 4: Mastering the DOM with JavaScript
// ==============================

// 1. Toggle Dark Mode
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 2. Click message that changes style when clicked
const clickMessage = document.getElementById('clickMessage');
clickMessage.addEventListener('click', () => {
  clickMessage.classList.toggle('clicked');
  if (clickMessage.classList.contains('clicked')) {
    clickMessage.textContent = 'You clicked me!';
  } else {
    clickMessage.textContent = 'Click me!';
  }
});

// 3. Add new items dynamically to a list
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');
let itemCount = 0;

addItemBtn.addEventListener('click', () => {
  itemCount++;
  const li = document.createElement('li');
  li.textContent = `Dynamic Item #${itemCount}`;
  dynamicList.appendChild(li);
});
