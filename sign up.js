// Load the notifications.js script if it's not already loaded
(function() {
  if (typeof showNotification !== 'function') {
    const script = document.createElement('script');
    script.src = '/notifications.js';
    script.async = true;
    document.head.appendChild(script);
    
    // Fallback in case the script fails to load
    script.onerror = function() {
      console.error('Failed to load notifications.js');
      
      // Define minimal versions of the functions
      window.showNotification = function(options) {
        alert(options.message || 'Notification');
      };
      
      window.isUserLoggedIn = function() {
        return sessionStorage.getItem('user') !== null;
      };
    };
  }
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const messageContainer = document.getElementById('messageContainer');
    const googleSignUpButton = document.getElementById('googleSignUp');
    
    // Password validation requirements
    const requirements = {
        length: {
            regex: /.{8,}/,
            text: 'At least 8 characters'
        },
        uppercase: {
            regex: /[A-Z]/,
            text: 'One uppercase letter'
        },
        lowercase: {
            regex: /[a-z]/,
            text: 'One lowercase letter'
        },
        number: {
            regex: /[0-9]/,
            text: 'One number'
        },
        special: {
            regex: /[^A-Za-z0-9]/,
            text: 'One special character'
        }
    };

    // Input validation functions
    const validators = {
        username: (value) => {
            if (value.length < 3) return 'Username must be at least 3 characters long';
            if (value.length > 30) return 'Username must be less than 30 characters';
            if (!/^[a-zA-Z0-9_-]+$/.test(value)) return 'Username can only contain letters, numbers, underscores, and hyphens';
            return '';
        },
        email: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address';
            return '';
        },
        password: (value) => {
            const errors = [];
            for (const [key, requirement] of Object.entries(requirements)) {
                if (!requirement.regex.test(value)) {
                    errors.push(requirement.text);
                }
            }
            return errors.join(', ');
        }
    };

    // Helper function for page transitions
    function navigateWithLoading(url) {
        sessionStorage.setItem('nextPage', url);
        window.location.href = 'loading.html';
    }

    // Debounce function for input validation
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Update password requirements visual feedback
    function updateRequirements(password) {
        for (let req in requirements) {
            const element = document.getElementById(req);
            if (element) {
                if (requirements[req].regex.test(password)) {
                    element.classList.add('valid');
                    element.classList.remove('invalid');
                } else {
                    element.classList.remove('valid');
                    element.classList.add('invalid');
                }
            }
        }
    }

    // Show message function
    function showMessage(message, type) {
        // Use the new notification system if available
        if (typeof showNotification === 'function') {
            let notificationType = 'info';
            if (type === 'error') notificationType = 'error';
            if (type === 'success') notificationType = 'success';
            if (type === 'info') notificationType = 'info';
            if (type === 'warning') notificationType = 'warning';
            
            showNotification({
                type: notificationType,
                message: message,
                sound: true, // Enable sound
                duration: type === 'error' ? 0 : 5000 // Don't auto-close error messages
            });
        }
        
        // Also update the form's message container for backward compatibility
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;

        messageContainer.innerHTML = '';
        messageContainer.appendChild(messageDiv);

        if (type !== 'error') {
            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
        }
    }

    // Input validation event listeners
    const validateField = debounce((field, validator) => {
        const error = validator(field.value);
        if (error) {
            field.classList.add('invalid');
            field.classList.remove('valid');
            showMessage(error, 'error');
        } else {
            field.classList.remove('invalid');
            field.classList.add('valid');
            messageContainer.innerHTML = '';
        }
    }, 300);

    // Add input event listeners
    username.addEventListener('input', () => validateField(username, validators.username));
    email.addEventListener('input', () => validateField(email, validators.email));
    password.addEventListener('input', (e) => {
        updateRequirements(e.target.value);
        validateField(password, validators.password);
    });

    // Password confirmation validation
    confirmPassword.addEventListener('input', () => {
        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('invalid');
            confirmPassword.classList.remove('valid');
            showMessage('Passwords do not match', 'error');
        } else {
            confirmPassword.classList.remove('invalid');
            confirmPassword.classList.add('valid');
            messageContainer.innerHTML = '';
        }
    });

    // Handle Google Sign-Up callback
    function handleGoogleSignUp(response) {
        const credential = response.credential;
        
        // Decode the JWT token to get user info
        const payload = JSON.parse(atob(credential.split('.')[1]));
        
        // Get existing users or create empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if user already exists
        const existingUser = users.find(u => u.email === payload.email);
        
        if (existingUser) {
            showMessage('Account already exists. Redirecting to login...', 'info');
            
            // Store user session
            sessionStorage.setItem('user', JSON.stringify({
                email: payload.email,
                name: payload.name,
                picture: payload.picture,
                loginMethod: 'google'
            }));
            
            // Check if there's a redirect URL stored
            const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
            
            // Redirect after delay
            setTimeout(() => {
                if (redirectUrl) {
                    // Clear the redirect URL from session storage
                    sessionStorage.removeItem('redirectAfterLogin');
                    // Navigate to the stored URL
                    navigateWithLoading(redirectUrl);
                } else {
                    // Navigate to main page if no redirect URL
                    navigateWithLoading('index.html');
                }
            }, 2000);
        } else {
            // Add new user
            users.push({
                email: payload.email,
                username: payload.name,
                password: null, // No password for Google users
                googleId: payload.sub,
                picture: payload.picture
            });
            
            // Save updated users
            localStorage.setItem('users', JSON.stringify(users));
            
            // Store user session
            sessionStorage.setItem('user', JSON.stringify({
                email: payload.email,
                name: payload.name,
                picture: payload.picture,
                loginMethod: 'google'
            }));
            
            showMessage('Account created successfully! Redirecting...', 'success');
            
            // Check if there's a redirect URL stored
            const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
            
            // Redirect after delay
            setTimeout(() => {
                if (redirectUrl) {
                    // Clear the redirect URL from session storage
                    sessionStorage.removeItem('redirectAfterLogin');
                    // Navigate to the stored URL
                    navigateWithLoading(redirectUrl);
                } else {
                    // Navigate to main page if no redirect URL
                    navigateWithLoading('index.html');
                }
            }, 2000);
        }
    }

    // Initialize Google Sign-In
    function initGoogleSignUp() {
        // Configuration for Google Sign-In
        const config = {
            client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your actual Google Client ID
            callback: handleGoogleSignUp,
            auto_select: false,
            cancel_on_tap_outside: true
        };
        
        try {
            google.accounts.id.initialize(config);
            google.accounts.id.renderButton(document.getElementById('googleSignUp'), {
                theme: 'outline',
                size: 'large',
                width: '100%',
                text: 'signup_with'
            });
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                    console.error('Google Sign-In prompt not displayed:', notification.getNotDisplayedReason());
                }
            });
        } catch (error) {
            console.error('Failed to initialize Google Sign-In:', error);
            showMessage('Google Sign-In is temporarily unavailable. Please try again later.', 'error');
        }
    }

    // Initialize Google Sign-Up button
    if (googleSignUpButton) {
        googleSignUpButton.addEventListener('click', initGoogleSignUp);
    }

    // Form submission for regular sign up
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        const usernameError = validators.username(username.value);
        const emailError = validators.email(email.value);
        const passwordError = validators.password(password.value);
        const passwordMatch = password.value === confirmPassword.value;

        if (usernameError || emailError || passwordError || !passwordMatch) {
            const errors = [
                usernameError,
                emailError,
                passwordError,
                !passwordMatch ? 'Passwords do not match' : ''
            ].filter(Boolean);
            
            showMessage(errors.join('. '), 'error');
            return;
        }

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Creating Account...';

        try {
            // Get existing users or create empty array
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Check if email already exists
            if (users.some(u => u.email === email.value)) {
                showMessage('Email already in use. Please use a different email or login.', 'error');
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                return;
            }
            
            // Add new user
            users.push({
                email: email.value,
                username: username.value,
                password: password.value
            });
              // Save updated users
            localStorage.setItem('users', JSON.stringify(users));

            // Store login credentials
            sessionStorage.setItem('user', JSON.stringify({
                email: email.value,
                name: username.value,
                loginMethod: 'email'
            }));

            // Remember email for future logins
            localStorage.setItem('rememberedEmail', email.value);
            
            showMessage('Account created successfully! Redirecting...', 'success');
            
            // Check if there's a redirect URL stored
            const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
            
            // Redirect after success message
            setTimeout(() => {
                if (redirectUrl) {
                    // Clear the redirect URL from session storage
                    sessionStorage.removeItem('redirectAfterLogin');
                    // Navigate to the stored URL
                    navigateWithLoading(redirectUrl);
                } else {
                    // Navigate to main page if no redirect URL
                    navigateWithLoading('index.html');
                }
            }, 2000);
        } catch (error) {
            showMessage('An error occurred. Please try again.', 'error');
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
});
