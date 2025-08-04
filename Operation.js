document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(event) {
        const clickedId = event.target.id;
        console.log('Clicked button ID:', clickedId);
    });
});
