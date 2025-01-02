function showAlert() {
    alert("Hello! Welcome to Youth Empowerment in Nepal!");
    document.getElementById("dynamicMessage").textContent =
        "Thank you for clicking the button!";
}
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validateForm() {
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone !== "" && isNaN(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
function showFormData(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const message = document.getElementById("message").value;

    alert(`Form Data:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate of Birth: ${dob}\nMessage: ${message}`);
    return false;
}
