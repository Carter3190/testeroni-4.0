document.addEventListener("DOMContentLoaded", function () {
    // Use a delay to ensure the button is available
    setTimeout(() => {
        let button = document.getElementById("myButton");
        if (button) {
            button.addEventListener("click", function () {
                alert("Button Clicked!");
            });
        } else {
            console.error("Button not found!");
        }
    }, 500); // Delay to allow fetch to insert the button
});
