function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {

    const phoneRegex = /^01\d{9}$/;
    return phoneRegex.test(phone);
}
function validateCreditCard() {
    const creditCardInput = document.getElementById('creditCard').value;
    const creditCardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

    if (creditCardRegex.test(creditCardInput)) {
        const creditCardSegments = creditCardInput.split('-');
        document.getElementById('output').value = creditCardSegments.join('\n');
        return true; 
    } else {
        alert('Invalid Credit Card format. Please enter a valid credit card number.');
        return false; 
    }
}

function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phonenumber').value;

    if (!validateEmail(email)) {
        alert('Invalid email input. Please enter a valid email address.');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Invalid phone number input. Please enter a valid 11-digit phone number starting with "01".');
        return false;
    }
    if(!validateCreditCard(creditCard)){
        alert("Invalid Credit Card input. Please enter a valid credit card number");
        return false;
    }
    return true;
}