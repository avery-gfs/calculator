function getCurrentValueAndCalculate(output) {
  const expression = output.value.slice(0, -1).replace(/×/g, '*').replace(/÷/g, '/');

  if (!expression || !/^[0-9+\-*/().\s]+$/.test(expression)) {
    return 'Error';
  }

  try {
    const result = Function(`"use strict"; return (${expression});`)();
    return Number.isFinite(result) ? String(result) : 'Error';
  } catch (error) {
    return 'Error';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const output = document.getElementById('output'); // Updated to match HTML
  // The display must accept operators as well as numbers. A number input
  // clears its value when an operator is appended.
  if (output instanceof HTMLInputElement && output.type === 'number') {
    output.type = 'text';
  }
  const buttons = document.querySelectorAll(
    'button, input[type="button"], input[type="submit"], input[type="reset"]'
  );

  buttons.forEach(button => {
    // Calculator controls should not submit their containing form.
    button.type = 'button';
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const value = (this.value || this.textContent || '').trim();

      if (value === 'C') {
        console.log('Clear button clicked');
        output.value = '';
      } else if (value === '=') {
        output.value += '=';
        console.log('Equals button clicked');
        output.value += getCurrentValueAndCalculate(output);
      } else if (value === '-') {
        console.log('Minus button clicked');
        output.value += value;
      } else if (value === '+') {
        console.log('Plus button clicked');
        output.value += value;
      } else if (value === '×') {
        console.log('Multiply button clicked');
        output.value += value;
      } else if (value === '÷') {
        console.log('Divide button clicked');
        output.value += value;
      } else {
        console.log(`Button clicked: ${value}`);
        output.value += value;
      }
    });
  });
});