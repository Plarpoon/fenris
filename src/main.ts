window.addEventListener("DOMContentLoaded", () => {
  const settingsButton = document.querySelector("#settings-button");

  if (settingsButton) {
    settingsButton.addEventListener("click", () => {
      alert("Settings button clicked!");
    });
  }
});
