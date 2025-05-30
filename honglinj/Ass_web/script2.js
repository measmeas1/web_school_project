document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fade-out effect before showing confirmation
    this.style.opacity = "0";
    setTimeout(() => {
        alert("Your application has been submitted successfully!");
        this.style.opacity = "1";
    }, 500);
});
