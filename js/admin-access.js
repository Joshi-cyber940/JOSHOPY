console.log("Admin access is running!");

const notificationDiv = document.querySelector(
    ".notification-div"
);

let pressTimer;

if (notificationDiv) {

    notificationDiv.addEventListener("pointerdown", function() {

        pressTimer = setTimeout(function() {

            window.location.href = "admin-login.html";

        }, 5000);

    });

    notificationDiv.addEventListener("pointerup", function() {
        clearTimeout(pressTimer);
    });

    notificationDiv.addEventListener("pointerleave", function() {
        clearTimeout(pressTimer);
    });

    notificationDiv.addEventListener("pointercancel", function() {
        clearTimeout(pressTimer);
    });

}