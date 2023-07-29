/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('All fields are required');
      return;
    }
    
    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    // If all validations pass, you can proceed with form submission
    alert('Form submitted successfully');
  });
  