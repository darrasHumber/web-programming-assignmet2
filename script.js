const usernameInput = document.getElementById("username");
const saveNameBtn = document.getElementById("save-btn");
const clearNameBtn = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");
const welcomeHeading = document.querySelector("h1[data-source='gpt-storage']");

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

function updateWelcomeMessage(username = "User") {
  const greeting = getGreeting();
  welcomeHeading.textContent = `${greeting}, ${username}!`;
}

saveNameBtn.addEventListener("click", function () {
  const username = usernameInput.value.trim();
  if (username === "") {
    alert("Please enter a username!");
    return;
  }
  localStorage.setItem("username", username);
  displayName.textContent = `Hello, ${username}! Nice to see you again.`;
  updateWelcomeMessage(username);
  usernameInput.value = "";
  alert("Username saved!");
});

clearNameBtn.addEventListener("click", function () {
  localStorage.removeItem("username");
  displayName.textContent = "";
  welcomeHeading.textContent = "Welcome, User!";
  usernameInput.value = "";
  alert("Username cleared!");
});

window.addEventListener("load", function () {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    displayName.textContent = `Hello, ${savedUsername}! Nice to see you again.`;
    updateWelcomeMessage(savedUsername);
  } else {
    welcomeHeading.textContent = "Welcome, User!";
  }
});
