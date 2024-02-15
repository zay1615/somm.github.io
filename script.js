document.getElementById("showMessage").addEventListener("click", function() {
    document.getElementById("valentineMessage").style.display = "block"; // Show the message
    document.getElementById("yesButton").style.display = "inline"; // Show the Yes button
    document.getElementById("noButton").style.display = "inline"; // Show the No button
});

document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("openPresentsMessage").style.display = "block"; // Show the presents message
    document.getElementById("specialLink").style.display = "inline"; // Show the link if Yes is clicked
});

// Optionally, handle the No button click if you want to add any specific logic for it in the future
document.getElementById("noButton").addEventListener("click", function() {
    // Do nothing or add logic here if needed
});