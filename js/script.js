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
function filterPosts(category) {
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
        if (category === 'all' || post.classList.contains(category)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Name is required.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Message cannot be empty.");
        return false;
    }

    alert("Form submitted securely!");
    return true;
}
async function fetchWeather() {
    const apiKey = "fd71f6ad8c7ea7b1b706722900745f76"; // Replace with your OpenWeatherMap API key
    const city = "Kathmandu";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <strong>${data.name}, ${data.sys.country}:</strong>
                ${data.weather[0].description}, ${data.main.temp}°C
            `;
            document.getElementById("weather-info").innerHTML = weatherInfo;
        } else {
            document.getElementById("weather-info").innerHTML = "Error fetching weather data.";
        }
    } catch (error) {
        document.getElementById("weather-info").innerHTML = "Unable to load weather data.";
    }
}

// Call the function to fetch weather data
fetchWeather();
