//your JS code here. If required.
const codes = document.querySelectorAll('.code');

    codes[0].focus(); // Focus first input on page load

    codes.forEach((code, idx) => {
      code.addEventListener('input', (e) => {
        const value = e.target.value;

        // If user typed something, move to next
        if (value && idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      });

      code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (e.target.value === '' && idx > 0) {
            // Move to previous field and clear it
            codes[idx - 1].focus();
            codes[idx - 1].value = '';
          }
        }
      });
    });