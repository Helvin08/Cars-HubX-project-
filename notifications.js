/**
 * Notifications System
 * A reusable notification toast system for the Cars Hub website
 */

// Create notification toast styles if they don't exist
function createNotificationStyles() {
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      .notification-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 350px;
        background-color: #333;
        color: white;
        padding: 16px;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transform: translateX(400px);
        transition: transform 0.3s ease-in-out;
      }
      .notification-toast.show {
        transform: translateX(0);
      }
      .notification-toast.error {
        background-color: #d9534f;
        border-left: 5px solid #c9302c;
      }
      .notification-toast.success {
        background-color: #5cb85c;
        border-left: 5px solid #4cae4c;
      }
      .notification-toast.info {
        background-color: #5bc0de;
        border-left: 5px solid #46b8da;
      }
      .notification-toast.warning {
        background-color: #f0ad4e;
        border-left: 5px solid #eea236;
      }
      .notification-content {
        flex: 1;
      }
      .notification-title {
        font-weight: bold;
        margin-bottom: 5px;
      }
      .notification-message {
        font-size: 14px;
      }
      .notification-close {
        background: transparent;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-left: 10px;
        opacity: 0.7;
      }
      .notification-close:hover {
        opacity: 1;
      }
      .notification-action {
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 5px 10px;
        border-radius: 3px;
        margin-top: 8px;
        cursor: pointer;
        font-size: 12px;
        transition: background-color 0.2s;
      }
      .notification-action:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    `;
    document.head.appendChild(style);
  }
}

// Notification sound effects
const notificationSounds = {
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  warning: '/sounds/warning.mp3',
  info: '/sounds/info.mp3',
  default: '/sounds/notification.mp3'
};

// Audio context for playing sounds
let audioContext;

// Initialize audio context on user interaction
function initAudioContext() {
  if (!audioContext) {
    try {
      // Create audio context
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
    } catch (e) {
      console.error('Web Audio API is not supported in this browser', e);
    }
  }
  return audioContext;
}

// Play notification sound
function playNotificationSound(type) {
  // Try to initialize audio context if not already done
  const context = initAudioContext();
  if (!context) return;
  
  // Get the appropriate sound URL based on notification type
  const soundUrl = notificationSounds[type] || notificationSounds.default;
  
  // Create audio element
  const audio = new Audio(soundUrl);
  
  // Set volume
  audio.volume = 0.5;
  
  // Play the sound
  audio.play().catch(error => {
    console.warn('Could not play notification sound:', error);
    
    // Fallback to a simple beep using the Web Audio API
    try {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(type === 'error' ? 330 : type === 'warning' ? 260 : 520, context.currentTime);
      
      gainNode.gain.setValueAtTime(0.1, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.5);
      
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator.start();
      oscillator.stop(context.currentTime + 0.5);
    } catch (e) {
      console.error('Failed to play fallback sound:', e);
    }
  });
}

/**
 * Show a notification toast
 * @param {Object} options - Notification options
 * @param {string} options.type - Notification type: 'success', 'error', 'info', 'warning'
 * @param {string} options.title - Optional title for the notification
 * @param {string} options.message - Message to display
 * @param {string} options.actionText - Optional text for action button
 * @param {Function} options.actionCallback - Optional callback for action button
 * @param {number} options.duration - Duration in ms (0 for no auto-close)
 * @param {boolean} options.sound - Whether to play a sound (default: true)
 * @returns {HTMLElement} The notification element
 */
function showNotification(options) {
  // Create styles if they don't exist
  createNotificationStyles();
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification-toast ${options.type || 'info'}`;
  
  // Create content
  const content = document.createElement('div');
  content.className = 'notification-content';
  
  // Add title if provided
  if (options.title) {
    const title = document.createElement('div');
    title.className = 'notification-title';
    title.textContent = options.title;
    content.appendChild(title);
  }
  
  // Add message
  const message = document.createElement('div');
  message.className = 'notification-message';
  message.textContent = options.message;
  content.appendChild(message);
  
  // Add action button if provided
  if (options.actionText) {
    const actionButton = document.createElement('button');
    actionButton.className = 'notification-action';
    actionButton.textContent = options.actionText;
    actionButton.addEventListener('click', () => {
      if (typeof options.actionCallback === 'function') {
        options.actionCallback();
      }
      notification.remove();
    });
    content.appendChild(actionButton);
  }
  
  notification.appendChild(content);
  
  // Add close button
  const closeButton = document.createElement('button');
  closeButton.className = 'notification-close';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    notification.remove();
  });
  notification.appendChild(closeButton);
  
  // Add to document
  document.body.appendChild(notification);
  
  // Play sound if enabled (default is true)
  if (options.sound !== false) {
    playNotificationSound(options.type || 'default');
  }
  
  // Trigger animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Auto close after duration
  if (options.duration !== 0) {
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.classList.remove('show');
        setTimeout(() => {
          if (document.body.contains(notification)) {
            notification.remove();
          }
        }, 300);
      }
    }, options.duration || 5000);
  }
  
  return notification;
}

// Check if user is logged in
function isUserLoggedIn() {
  return sessionStorage.getItem('user') !== null;
}