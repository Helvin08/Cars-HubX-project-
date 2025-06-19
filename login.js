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

// Predefined test users
const validUsers = [
    { email: 'admin@carshubx.com', password: 'admin123' },
    { email: 'user1@carshubx.com', password: 'user1pass' },
    { email: 'test@carshubx.com', password: 'test123' },
    { email: 'demo@carshubx.com', password: 'demo2025' },
    { email: 'guest@carshubx.com', password: 'guest123' },
    { email: 'henisha@carshubx.com', password:'Henisha.0'},
];

// Initialize local storage with predefined users if not already set
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(validUsers));
}

// Helper function for page transitions
function navigateWithLoading(url) {
    sessionStorage.setItem('nextPage', url);
    window.location.href = 'loading.html';
}

// Store email for Remember Me functionality
function rememberEmail() {
    const email = document.querySelector('#email').value;
    const rememberMe = document.querySelector('#remember').checked;
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
}

// Load remembered email if exists
document.addEventListener('DOMContentLoaded', () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.querySelector('#email').value = rememberedEmail;
        document.querySelector('#remember').checked = true;
    }

    // Initialize Google Sign-In button
    const googleBtn = document.querySelector('#googleSignIn');
    if (googleBtn) {
        googleBtn.addEventListener('click', initGoogleSignIn);
    }
});

// Handle Google Sign-In callback
function handleGoogleSignIn(response) {
    const credential = response.credential;
    
    // Decode the JWT token to get user info
    const payload = JSON.parse(atob(credential.split('.')[1]));
    
    // Store user session
    sessionStorage.setItem('user', JSON.stringify({
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        loginMethod: 'google'
    }));

    // Show success notification with sound if the notification function exists
    if (typeof showNotification === 'function') {
        showNotification({
            type: 'success',
            title: 'Google Login Successful',
            message: 'You have successfully logged in with Google',
            sound: true, // Enable sound
            duration: 3000
        });
    } else {
        // Fallback to alert if notification function doesn't exist
        alert('Login successful!');
    }
    
    // Short delay before redirecting to show the notification
    setTimeout(() => {
        // Check if there's a redirect URL stored
        const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
        if (redirectUrl) {
            // Clear the redirect URL from session storage
            sessionStorage.removeItem('redirectAfterLogin');
            // Navigate to the stored URL
            navigateWithLoading(redirectUrl);
        } else {
            // Navigate to main page if no redirect URL
            navigateWithLoading('index.html');
        }
    }, 1500);
}

// Initialize Google Sign-In
function initGoogleSignIn() {
    // Configuration for Google Sign-In
    const config = {
        client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your actual Google Client ID
        callback: handleGoogleSignIn,
        auto_select: false,
        cancel_on_tap_outside: true
    };
    
    try {
        google.accounts.id.initialize(config);
        google.accounts.id.renderButton(document.getElementById('googleSignIn'), {
            theme: 'outline',
            size: 'large',
            width: '100%'
        });
        google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                console.error('Google Sign-In prompt not displayed:', notification.getNotDisplayedReason());
            }
        });
    } catch (error) {
        console.error('Failed to initialize Google Sign-In:', error);
        alert('Google Sign-In is temporarily unavailable. Please try again later.');
    }
}

// Regular email/password login form submission
document.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('input[type="password"]').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Check credentials
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Remember email if checkbox is checked
        rememberEmail();

        // Store user session
        sessionStorage.setItem('user', JSON.stringify({
            email: user.email,
            loginMethod: 'email'
        }));

        // Show success notification with sound if the notification function exists
        if (typeof showNotification === 'function') {
            showNotification({
                type: 'success',
                title: 'Login Successful',
                message: 'You have successfully logged in',
                sound: true, // Enable sound
                duration: 3000
            });
        } else {
            // Fallback to alert if notification function doesn't exist
            alert('Login successful!');
        }
        
        // Short delay before redirecting to show the notification
        setTimeout(() => {
            // Check if there's a redirect URL stored
            const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
            if (redirectUrl) {
                // Clear the redirect URL from session storage
                sessionStorage.removeItem('redirectAfterLogin');
                // Navigate to the stored URL
                navigateWithLoading(redirectUrl);
            } else {
                // Navigate to main page if no redirect URL
                navigateWithLoading('index.html');
            }
        }, 1500);
    } else {
        alert('Invalid email or password');
    }
});
