document.getElementById('subscription-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;

  // Send data to Google Sheets (Replace URL with your Google Sheets script URL)
  fetch('YOUR_GOOGLE_SCRIPT_URL', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then(response => {
    document.getElementById('response').innerHTML = "Subscription successful!";
    document.getElementById('email').value = ""; // Clear input field after submission
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('response').innerHTML = "Error occurred. Please try again.";
  });
}
