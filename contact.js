alert('HELLO');
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedbackMessage = document.getElementById("feedbackMessage");

    if (name === "" || email === "" || message === "") {
        feedbackMessage.textContent = "Please fill out all fields.";
        feedbackMessage.style.color = "#dc3545"; // Red for error
        return false;
    } else {
        feedbackMessage.textContent = "Thank you! Your message has been sent.";
        feedbackMessage.style.color = "#28a745"; // Green for success
        return true;
    }
}