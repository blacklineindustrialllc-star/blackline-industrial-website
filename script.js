// Blackline Industrial LLC

document.addEventListener("DOMContentLoaded", function () {
    console.log("Blackline Industrial website loaded.");

    const quoteButton = document.querySelector('a[href="#contact"]');

    if (quoteButton) {
        quoteButton.addEventListener("click", function () {
            console.log("Request a Quote button clicked.");
        });
    }
});
