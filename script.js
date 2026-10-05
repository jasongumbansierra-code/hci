document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent standard submission for validation checks

    let isFormValid = true;

    // Helper to display error status
    function setFieldError(inputId, errorId, message) {
        const inputField = document.getElementById(inputId);
        const errorField = document.getElementById(errorId);
        
        inputField.classList.add('error-input');
        inputField.classList.remove('success-input');
        errorField.textContent = message;
        isFormValid = false;
    }

    // Helper to display success status
    function setFieldSuccess(inputId, errorId) {
        const inputField = document.getElementById(inputId);
        const errorField = document.getElementById(errorId);
        
        inputField.classList.remove('error-input');
        inputField.classList.add('success-input');
        errorField.textContent = '';
    }

    // 1. CRN / SS Number Validation
    const crnNumber = document.getElementById('crnNumber').value.trim();
    if (crnNumber === '') {
        setFieldError('crnNumber', 'crnError', 'CRN / SS Number is required.');
    } else {
        setFieldSuccess('crnNumber', 'crnError');
    }

    // 2. Email Address & Confirmation Check
    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirmEmail').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        setFieldError('email', 'emailError', 'Please enter a valid email address format.');
    } else {
        setFieldSuccess('email', 'emailError');
    }

    if (confirmEmail === '' || confirmEmail !== email) {
        setFieldError('confirmEmail', 'confirmEmailError', 'Email addresses do not match.');
    } else {
        setFieldSuccess('confirmEmail', 'confirmEmailError');
    }

    // 3. User ID & Confirmation Check (8-20 chars, begins with letter, letters/numbers/underscore only)
    const userId = document.getElementById('userId').value.trim();
    const confirmUserId = document.getElementById('confirmUserId').value.trim();
    const userIdPattern = /^[A-Za-z][A-Za-z0-9_]{7,19}$/;

    if (!userIdPattern.test(userId)) {
        setFieldError('userId', 'userIdError', 'Must be 8-20 chars, begin with a letter, and contain only letters, numbers, or underscores.');
    } else {
        setFieldSuccess('userId', 'userIdError');
    }

    if (confirmUserId === '' || confirmUserId !== userId) {
        setFieldError('confirmUserId', 'confirmUserIdError', 'User IDs do not match.');
    } else {
        setFieldSuccess('confirmUserId', 'confirmUserIdError');
    }

    // 4. Personal Information Validation
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        setFieldError('lastName', 'lastNameError', 'Surname is required.');
    } else {
        setFieldSuccess('lastName', 'lastNameError');
    }

    const givenName = document.getElementById('givenName').value.trim();
    if (givenName === '') {
        setFieldError('givenName', 'givenNameError', 'Given name is required.');
    } else {
        setFieldSuccess('givenName', 'givenNameError');
    }

    const dob = document.getElementById('dob').value;
    if (dob === '') {
        setFieldError('dob', 'dobError', 'Date of birth is required.');
    } else {
        setFieldSuccess('dob', 'dobError');
    }

    // Final Validation Outcome
    if (isFormValid) {
        alert('Validation Successful! All entries meet institutional requirements.');
        // Insert submission handling or AJAX backend logic here
    }
});