const slider = document.getElementById("slider");
const body = document.querySelector("body");
const aboutSection = document.getElementById("purpose");
const navbar = document.querySelector(".navbar");

// Check for saved dark mode preference on page load
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
  aboutSection.classList.add("dark");
  navbar.classList.add("dark");
}

// Toggle dark mode on slider change
slider.addEventListener("change", () => {
  body.classList.toggle("dark");
  aboutSection.classList.toggle("dark");
  navbar.classList.toggle("dark");
  
  // Save dark mode preference to localStorage
  const isDarkMode = body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);
});




function updateClock() {
  const clockDisplay = document.getElementById("clock-display");
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const timeString = hours + ':' + minutes;
  clockDisplay.innerHTML = timeString;
}


setInterval(updateDate, 1000);
setInterval(updateClock, 1000);
