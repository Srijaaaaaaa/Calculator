const displayDiv = document.getElementsByClassName('present')[0];

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(event) {
        const clickedText = event.target.innerText;

        if(button.classList.contains('nbtn')){
            console.log('this stays');
            displayDiv.textContent += clickedText;
        }
    });
});
