document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');

    // Display the container after a brief delay
    setTimeout(() => {
        container.classList.remove('hidden');
    }, 1000);

    // Prevent clicking the 'No' button
    noButton.addEventListener('mouseover', moveNoButton);
    noButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    // Move the 'No' button randomly within the container
    function moveNoButton() {
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - noButtonRect.width;
        const maxY = containerRect.height - noButtonRect.height;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        randomX += 30;
        randomY += 30;

        randomX = Math.min(randomX, maxX);
        randomY = Math.min(randomY, maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Handle 'Yes' button click
    yesButton.addEventListener('click', function() {
        container.innerHTML = `<h1>I knew we were meant to be soulmates🥹</h1>`;
    });
});
