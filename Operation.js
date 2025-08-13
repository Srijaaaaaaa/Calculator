const displayDiv = document.getElementsByClassName('present')[0];
const historyDiv = document.getElementsByClassName('previous')[0];

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(event) {
        const clickedText = event.target.innerText;

        if (button.classList.contains('nbtn')) {
            console.log('this stays');
            displayDiv.textContent += clickedText;
            return;
        }

        if (button.id === 'backspace') {
            displayDiv.textContent = displayDiv.textContent.slice(0, -1);
            return;
        }

        if (button.classList.contains('btn')) {
            historyDiv.textContent += displayDiv.textContent + clickedText;
            displayDiv.textContent = '';
        }
    });
});
