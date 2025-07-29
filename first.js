  const toggleBtn = document.querySelector(".header button");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Optionally change button text
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "Light Theme";
    } else {
      toggleBtn.textContent = "Dark Theme";
      
    }
  });
