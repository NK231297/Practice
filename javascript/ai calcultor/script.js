let isFinalAnswerShown = false;

function appendValue(value) {
  if (isFinalAnswerShown) {
    document.getElementById('expression').textContent = '';
    isFinalAnswerShown = false;
  }
  const expression = document.getElementById('expression');
  expression.textContent += value;
  liveCalculate();
}

function clearDisplay() {
  document.getElementById('expression').textContent = '';
  document.getElementById('live-result').textContent = '';
  isFinalAnswerShown = false;
}

function calculate() {
  const expression = document.getElementById('expression');
  const liveResult = document.getElementById('live-result');
  try {
    const result = eval(expression.textContent);
    expression.textContent = result;
    liveResult.textContent = '';
    isFinalAnswerShown = true;
  } catch {
    expression.textContent = 'Error';
    liveResult.textContent = '';
    isFinalAnswerShown = true;
  }
}

function liveCalculate() {
    const expr = document.getElementById('expression').textContent;
    const liveResult = document.getElementById('live-result');
  
    // Only try to evaluate if it ends with a number or ')'
    const lastChar = expr.trim().slice(-1);
    const safeToEval = /[0-9)]/.test(lastChar);
  
    try {
      if (safeToEval) {
        const result = eval(expr);
        if (!isNaN(result)) {
          liveResult.textContent = result;
        } else {
          liveResult.textContent = '';
        }
      }
    } catch {
      liveResult.textContent = '';
    }
  }
  
  function backspace() {
    const expression = document.getElementById('expression');
    if (isFinalAnswerShown) {
      expression.textContent = '';
      isFinalAnswerShown = false;
    } else {
      expression.textContent = expression.textContent.slice(0, -1);
      liveCalculate();
    }
  }
  
  document.addEventListener('keydown', (e) => {
    const key = e.key;
  
    if (isFinalAnswerShown && !['Enter', 'Backspace', 'Escape'].includes(key)) {
      document.getElementById('expression').textContent = '';
      isFinalAnswerShown = false;
    }
  
    if (/\d/.test(key)) {
      appendValue(key); // 0-9
    } else if (['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
      appendValue(key);
    } else if (key === 'Enter') {
      e.preventDefault();
      calculate();
    } else if (key === 'Backspace') {
      e.preventDefault();
      backspace();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });
  
