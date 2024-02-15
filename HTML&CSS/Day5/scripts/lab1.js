function validateName() {
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim();
    var nameRegex = /^[a-zA-Z]+$/;
  
    if (nameValue === "") {
      alert("Name is required.");
      return false;
    } else if (!nameRegex.test(nameValue)) {
      alert("Name must contain only letters.");
      return false;
    }
    return true;
  }
  
  function validatePassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var passwordValue = passwordInput.value;
    var confirmPasswordValue = confirmPasswordInput.value;
  
    if (passwordValue.length < 6 || passwordValue.length > 8) {
      alert("Password must be between 6 and 8 characters.");
      return false;
    } else if (passwordValue !== confirmPasswordValue) {
      alert("Password and Confirm Password must match.");
      return false;
    }
    return true;
  }
  
  function validateCreditCard() {
    var creditCardInput = document.getElementById("creditCardNo");
    var creditCardValue = creditCardInput.value.replace(/-/g, "");
  
    var creditCardRegex = /^\d{16}$/;
  
    if (!creditCardRegex.test(creditCardValue)) {
      alert(
        "Credit Card number must be in a 16-digit format (4 groups of 4 digits separated by a dash)."
      );
      return false;
    }
    return true;
  }
  
  function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailValue)) {
      alert("Invalid email format.");
      return false;
    }
    return true;
  }
  
  function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value.trim();
    var phoneRegex = /^\d{10}$/;
  
    if (!phoneRegex.test(phoneValue)) {
      alert("Invalid phone number format. Please enter 10 digits.");
      return false;
    }
    return true;
  }

function cancelForm() {
  // Add your cancel logic here
  alert("Form canceled.");
}
function showPreview() {
    if (
        validateName() &&
        validatePassword() &&
        validateCreditCard() &&
        validateEmail() &&
        validatePhone()
    ) {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var creditCardNo = document.getElementById('creditCardNo').value;
        var name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var favColor = document.getElementById('favColor').value;
        var profilePhoto = document.getElementById('profilePhoto').value;
        var favBrowser = document.getElementById('favBrowser').value;
        var numEmployees = document.getElementById('numEmployees').value;
        var estimatedRevenue = document.getElementById('estimatedRevenue').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var website = document.getElementById('website').value;

        var previewContent =
            "<h2>Registration Preview</h2>" +
            "<p><strong>Username:</strong> " + username + "</p>" +
            "<p><strong>Password:</strong> *****</p>" +
            "<p><strong>Credit Card No:</strong> " + creditCardNo + "</p>" +
            "<p><strong>Name:</strong> " + name + "</p>" +
            "<p><strong>Date of Birth:</strong> " + dob + "</p>" +
            "<p><strong>Favorite Color:</strong> <span style='background-color:" + favColor + ";'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>" +
            "<p><strong>Profile Photo:</strong> " + profilePhoto + "</p>" +
            "<p><strong>Favorite Browser:</strong> " + favBrowser + "</p>" +
            "<p><strong>No. of Employees:</strong> " + numEmployees + "</p>" +
            "<p><strong>Estimated Revenue:</strong> " + estimatedRevenue + "</p>" +
            "<p><strong>Email:</strong> " + email + "</p>" +
            "<p><strong>Phone:</strong> " + phone + "</p>" +
            "<p><strong>Website:</strong> " + website + "</p>" +
            "<button onclick='printPreview()'>Print</button>";

        document.body.innerHTML = previewContent;
    }
    
}

function printPreview() {
    window.print();
}
