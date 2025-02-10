// Redirects the user to "yes_page.html" when the "Yes" button is clicked.
function nextPage() {
    window.location.href = "yes.html";
}

// Moves the "No" button to random positions on the screen with fun animations.
function moveButton() {
    const button = document.getElementById("noButton");
    const container = document.querySelector(".container");
    
    // Get container and button dimensions
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate random positions within bounds
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply styles for smooth movement
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transition = "all 0.3s ease-out";

    // Add a fun shaking animation
    button.classList.add("shake");
    setTimeout(() => button.classList.remove("shake"), 300);
}
