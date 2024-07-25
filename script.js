document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const inviteMessage = document.getElementById("invite-message");
    const mainContent = document.getElementById("main-content");
    // const main = document.getElementById("Invitation-part");

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
                mainContent.style.display = "auto"; // Ensure it's visible
                
                // myLetter.classList.add("visible");
                document.body.style.overflow = "auto";
                // myLetter.style.overflow = "scroll";
                
                mainContent.style.opacity = "1";
                mainContent.style.background = 'url("download.png") no-repeat center center fixed';
                mainContent.style.backgroundSize = '110%';
                const elements = document.querySelectorAll('.main');

                                // Iterate over each element and set its opacity to 1
                                elements.forEach(element => {
                                    element.style.opacity = '1';
                                });
            }, 1400); // Shorter delay to match the fade-out effect
        }, 1500); 
        }, 1000); // Shorter delay to match the fade-out effect
});
