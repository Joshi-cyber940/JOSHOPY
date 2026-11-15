console.log("Admin access is running!");

const notificationButton = document.querySelector(
    ".notification-div"
);

let pressTimer;

if (notificationButton) {

    // Prevent Chrome's long-press context menu
    notificationButton.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    // Start the five-second timer
    notificationButton.addEventListener("pointerdown", function(event) {

        // Only respond to the main mouse button or touch
        if (event.pointerType === "mouse" && event.button !== 0) {
            return;
        }

        pressTimer = setTimeout(function() {

            window.location.href = "admin-login.html";

        }, 5000);

    });

    // Cancel the timer when the user releases
    notificationButton.addEventListener("pointerup", function() {
        clearTimeout(pressTimer);
    });

    // Cancel if the pointer moves away
    notificationButton.addEventListener("pointerleave", function() {
        clearTimeout(pressTimer);
    });

    // Cancel if the interaction is interrupted
    notificationButton.addEventListener("pointercancel", function() {
        clearTimeout(pressTimer);
    });

}