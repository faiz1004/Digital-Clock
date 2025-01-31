function updateClock() {
    // Get current time & date
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format time with leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Get date in format: Day, Month Date, Year
    const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
    const dateString = now.toLocaleDateString("en-US", options);

    // Update clock & date in UI
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("date").textContent = dateString;
}

// Toggle Dark/Light Mode
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change button text based on mode
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
