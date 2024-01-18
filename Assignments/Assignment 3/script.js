// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Function to handle form submission and validation for signup
function validateSignupForm(event) {
  event.preventDefault();
  const signupUsername = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('email').value.trim();
  const signupPassword = document.getElementById('signupPassword').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const termsCheckbox = document.getElementById('terms');
  const signupError = document.getElementById('signupError');

  // Basic validation example - You can add more checks as needed
  if (
      signupUsername === '' ||
      email === '' ||
      signupPassword === '' ||
      confirmPassword === ''
  ) {
      signupError.textContent = 'Please fill in all fields.';
  } else if (!validateEmail(email)) {
      signupError.textContent = 'Please enter a valid email address.';
  } else if (
      signupPassword.length < 8 ||
      !/\d/.test(signupPassword) ||
      !/[a-zA-Z]/.test(signupPassword)
  ) {
      signupError.textContent =
          'Password must be at least 8 characters and contain letters and numbers.';
  } else if (signupPassword !== confirmPassword) {
      signupError.textContent = 'Passwords do not match.';
  } else if (!termsCheckbox.checked) {
      signupError.textContent = 'Please agree to the Terms and Conditions.';
  } else {
      // Successful signup, you can redirect or perform further actions here
      signupError.textContent = ''; // Clear error message
      // For example: window.location.href = 'dashboard.html';
  }
}

// Event listener for signup form submission
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', validateSignupForm);
