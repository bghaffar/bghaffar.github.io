document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Check validity
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
  
      // Simulate submission
      form.classList.add("hidden");
      confirmation.classList.remove("hidden");
    });
  });
  