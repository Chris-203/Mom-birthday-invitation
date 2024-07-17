document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const inviteMessage = document.getElementById("invite-message");
    const mainContent = document.getElementById("main-content");

    // Show the welcome message
    welcomeMessage.classList.add("visible");

    // After 3 seconds, fade to the invite message
    setTimeout(() => {
        welcomeMessage.classList.remove("visible");

        setTimeout(() => {
            welcomeMessage.classList.add("hidden");
            inviteMessage.classList.add("visible");

            // After another 3 seconds, fade to the main content
            setTimeout(() => {
                inviteMessage.classList.remove("visible");
                mainContent.classList.add("visible");
                mainContent.style.transition = "opacity 1s ease-in-out"
                mainContent.style.display = "flex";
                setTimeout(() => {
                    inviteMessage.classList.add("none");
                }, 1000);
            }, 3000);
        }, 2000);
    }, 2000);
});
