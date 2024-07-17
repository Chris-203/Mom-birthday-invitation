document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const inviteMessage = document.getElementById("invite-message");
    const mainContent = document.getElementById("main-content");

    // Set up the transition for main content
    mainContent.style.transition = "opacity 1s ease-in-out";

    // Show the welcome message
    welcomeMessage.classList.add("visible");

    // After 1 second, fade to the invite message
    setTimeout(() => {
        welcomeMessage.classList.remove("visible");

        setTimeout(() => {
            welcomeMessage.style.display = "none"; // Hide welcome message completely
            inviteMessage.classList.add("visible");

            // After another 1 second, fade to the main content
            setTimeout(() => {
                inviteMessage.classList.remove("visible");

                // Show the main content with the fade-in effect
                mainContent.style.display = "flex"; // Ensure it's visible
                mainContent.classList.add("visible");
                document.body.style.overflow = "auto"; // Allow scrolling only on the main content
                mainContent.style.opacity = "1";
                setTimeout(() => {
                    inviteMessage.style.display = "none"; // Hide invite message completely
                }, 1000); // Shorter delay to match the fade-out effect
            }, 1000); // Shorter delay to match the fade-out effect
        }, 1000); // Shorter delay to match the fade-out effect
    }, 1000); // Shorter delay to match the fade-out effect
});
