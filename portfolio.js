function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    let isValid = true;

    // Reset error messagesl it is important ex in case user put in wront data, it cleares it up
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    // Validate name
    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    }

    if (message === "") {
        messageError.innerHTML="Please type in a message"
        isValid=false
    }
    // If form is valid, display success message
    if (isValid) {
        alert("Form submitted successfully!");
        // You can also submit the form to a server here using AJAX or by setting the form's action attribute
    }
}