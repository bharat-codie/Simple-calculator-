const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Keyboard input support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '%', '.'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculateResult();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
