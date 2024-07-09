function sendOTP() {
    const email = document.getElementById('email').value;

    // Generate a random 6-digit OTP
    const otp_val = Math.floor(100000 + Math.random() * 900000);

    // Prepare email body with OTP
    const emailBody = `<h2>Your OTP is ${otp_val}</h2>`;

    // Send email using EmailJS or any other service
    Email.send({
        SecureToken: "your_secure_token_here",
        To: email,
        From: "abc@gmail.com",
        Subject: "Email OTP Verification",
        Body: emailBody,
    }).then(message => {
        if (message === "OK") {
            alert("OTP sent to your email " + email);

            // Display OTP input field
            document.getElementById('demo1').style.display = 'none';
            document.getElementById('demo2').style.display = 'block';

            // Store OTP value for verification
            document.getElementById('otp').setAttribute('data-otp', otp_val);
        } else {
            alert("Failed to send OTP. Please try again later.");
        }
    });
}

function verifyOTP() {
    const otpEntered = document.getElementById('otp').value;
    const otpStored = document.getElementById('otp').getAttribute('data-otp');

    if (otpEntered === otpStored) {
        alert("OTP verified successfully!");
        // Handle successful OTP verification (e.g., submit form, redirect, etc.)

        // For demonstration, reset form and hide OTP verification section
        document.getElementById('otpForm').reset();
        document.getElementById('demo2').style.display = 'none';
        document.getElementById('demo1').style.display = 'block';
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
