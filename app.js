document.addEventListener('DOMContentLoaded', function () {
  const output = document.getElementById('output'); // Updated to match HTML
  const buttons = document.querySelectorAll('button'); // Selects all buttons

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const value = this.innerText;

      if (value === 'C') {
        console.log('Clear button clicked'); // Debugging log
        output.value = '';
      } else if (value === '=') {
        console.log('Equals button clicked'); // Debugging log
        // Add calculation logic here
      } else {
        console.log(`Button clicked: ${value}`); // Debugging log
        output.value += value;
      }

      if (value === '+') {
        getCurrentValueAndAdd(output);
        
      }
    });
  });
});