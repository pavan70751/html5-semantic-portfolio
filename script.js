document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = ["name", "email", "subject", "message"];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    fields.forEach((id) => {
      const input = document.getElementById(id);
      const error = document.getElementById(`${id}-error`);
      error.textContent = "";
      input.removeAttribute("aria-invalid");

      if (!input.value.trim()) {
        error.textContent = `${input.previousElementSibling.textContent.replace(" *", "")} is required.`;
        input.setAttribute("aria-invalid", "true");
        valid = false;
      }
    });

    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    if (email.value.trim() && !email.validity.valid) {
      emailError.textContent = "Please enter a valid email address.";
      email.setAttribute("aria-invalid", "true");
      valid = false;
    }

    const status = document.getElementById("form-status");
    if (valid) {
      status.textContent = "Thank you! Your message has been validated successfully.";
      status.className = "success";
      form.reset();
    } else {
      status.textContent = "Please correct the errors in the form.";
      status.className = "error";
      document.querySelector('[aria-invalid="true"]')?.focus();
    }
  });
});