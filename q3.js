function validateCreditCard(cardNumber) {
    var re = /^(?:3[47]\d{13}|(?:4\d{12}|\b(?:4\d{15}|5[1-5]\d{14}|6011\d{12}))|\b(?:3(?:0([0-5]\d{11}|[6-9]\d{10})|[1-5]\d{14})))$/;

    if (re.test(cardNumber)) {
        return "Valid credit card number.";
    } else {
        return "Invalid credit card number.";
    }
}

// Example usage:
console.log(validateCreditCard("371449635398431")); // American Express - valid
console.log(validateCreditCard("6011053711075799")); // Discover - valid
console.log(validateCreditCard("4111111111111")); // VISA - valid
console.log(validateCreditCard("5555555555554444")); // Master Card - valid
console.log(validateCreditCard("60115564485789458")); // Discover - invalid
