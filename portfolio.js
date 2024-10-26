function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    let isValid = true;

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    }

    if (message === "") {
        messageError.innerHTML="Please type in a message"
        isValid=false
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}