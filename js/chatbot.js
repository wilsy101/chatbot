
// Storage key
        const SESSION_ID_KEY = 'myAppSessionId';

        /**
         * Generates a new unique session ID using the Crypto API.
         * @returns {string} A UUID.
         */
        function generateSessionId() {
            // crypto.randomUUID() is a modern, secure way to generate UUIDs
            // It's available in secure contexts (HTTPS) and most modern browsers.
            if (window.crypto && window.crypto.randomUUID) {
                return window.crypto.randomUUID();
            } else {
                // Fallback for older browsers or non-secure contexts (though less ideal)
                console.warn('crypto.randomUUID() not available. Using a less robust fallback.');
                return 'fallback-' + Date.now().toString(36) + Math.random().toString(36).substring(2);
            }
        }

        /**
         * Stores the session ID in sessionStorage.
         * @param {string} id - The session ID to store.
         */
        function storeSessionId(id) {
            try {
                sessionStorage.setItem(SESSION_ID_KEY, id);
                console.log('Session ID stored:', id);
            } catch (e) {
                console.error('Failed to store session ID in sessionStorage:', e);
                sessionIdDisplay.textContent = 'Error storing ID.';
            }
        }

        /**
         * Retrieves the session ID from sessionStorage.
         * @returns {string|null} The stored session ID, or null if not found.
         */
        function getSessionId() {
            try {
                return sessionStorage.getItem(SESSION_ID_KEY);
            } catch (e) {
                console.error('Failed to retrieve session ID from sessionStorage:', e);
                sessionIdDisplay.textContent = 'Error retrieving ID.';
                return null;
            }
        }

        /**
         * Clears the session ID from sessionStorage.
         */
        function clearSessionId() {
            try {
                sessionStorage.removeItem(SESSION_ID_KEY);
                console.log('Session ID cleared.');
            } catch (e) {
                console.error('Failed to clear session ID from sessionStorage:', e);
                sessionIdDisplay.textContent = 'Error clearing ID.';
            }
        }
        /**
         * Handles the generation or retrieval of a session ID.
         */
        function initializeSession() {
            let sessionId = getSessionId();
            if (!sessionId) {
                console.log('No existing session ID found. Generating a new one.');
                sessionId = generateSessionId();
                storeSessionId(sessionId);
            } else {
                console.log('Existing session ID found:', sessionId);
            }
        }

// chat.js - Floating Chat Interface
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize session ID
    initializeSession()
    // Create and append CSS
    const style = document.createElement('style');
    style.textContent = `
        .chat-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .chat-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #0084ff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }
        
        .chat-icon:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .chat-icon svg {
            width: 30px;
            height: 30px;
            fill: white;
        }
        
        .chat-box {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 350px;
            height: 450px;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
            transition: all 0.3s ease;
        }
        
        .chat-box.active {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }
        
        .chat-header {
            background-color: #0084ff;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .chat-header h3 {
            margin: 0;
            font-weight: 600;
            font-size: 16px;
        }
        
        .minimize-btn {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
        }
        
        .minimize-btn svg {
            width: 18px;
            height: 18px;
            fill: white;
        }
        
        .chat-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            background-color: #f5f5f5;
        }
        
        .message {
            margin-bottom: 15px;
            display: flex;
            align-items: flex-start;
        }
        
        .user-message {
            justify-content: flex-end;
        }
        
        .bot-message {
            justify-content: flex-start;
        }
        
        .message-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 8px;
        }
        
        .user-avatar {
            background-color: #0084ff;
        }
        
        .bot-avatar {
            background-color: #6b6b6b;
        }
        
        .message-avatar svg {
            width: 20px;
            height: 20px;
            fill: white;
        }
        
        .message-content {
            max-width: 70%;
            padding: 12px;
            border-radius: 18px;
        }
        
        .user-content {
            background-color: #0084ff;
            color: white;
            border-bottom-right-radius: 5px;
        }
        
        .bot-content {
            background-color: #e5e5ea;
            color: #333;
            border-bottom-left-radius: 5px;
        }
        
        .chat-input {
            padding: 15px;
            border-top: 1px solid #e6e6e6;
            display: flex;
        }
        
        .chat-input input {
            flex: 1;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 20px;
            outline: none;
            font-size: 14px;
        }
        
        .chat-input input:focus {
            border-color: #0084ff;
        }

        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(0, 132, 255, 0.4);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(0, 132, 255, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(0, 132, 255, 0);
            }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Create chat interface elements
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    
    // Chat icon
    const chatIcon = document.createElement('div');
    chatIcon.className = 'chat-icon pulse';
    chatIcon.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
            <path d="M7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
        </svg>
    `;
    
    // Chat box
    const chatBox = document.createElement('div');
    chatBox.className = 'chat-box';
    
    // Chat header
    const chatHeader = document.createElement('div');
    chatHeader.className = 'chat-header';
    chatHeader.innerHTML = `
        <h3>Chat Support</h3>
        <button class="minimize-btn">
            <svg viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z"/>
            </svg>
        </button>
    `;
    
    // Chat messages area
    const chatMessages = document.createElement('div');
    chatMessages.className = 'chat-messages';
    
    // Chat input
    const chatInput = document.createElement('div');
    chatInput.className = 'chat-input';
    chatInput.innerHTML = `
        <input type="text" placeholder="Type your message here...">
    `;
    
    // Assemble the chat interface
    chatBox.appendChild(chatHeader);
    chatBox.appendChild(chatMessages);
    chatBox.appendChild(chatInput);
    chatContainer.appendChild(chatBox);
    chatContainer.appendChild(chatIcon);
    document.body.appendChild(chatContainer);
    
    // Event listeners for chat functionality
    chatIcon.addEventListener('click', function() {
        chatBox.classList.add('active');
        chatIcon.classList.remove('pulse');
    });
    
    const minimizeBtn = chatHeader.querySelector('.minimize-btn');
    minimizeBtn.addEventListener('click', function() {
        chatBox.classList.remove('active');
    });
    
    const input = chatInput.querySelector('input');
    input.addEventListener('keypress', function(e) {
        
        if (e.key === 'Enter' && input.value.trim() !== '') {
            console.log("what is");
            
            // Add user message
            addMessage(input.value, 'user');
            
            // Call API for response (simulated)
            
            fetchBotResponse(apiUrl="http://localhost:8000/api/", data={'session_id':getSessionId(), 'text':input.value}).then(response => {
                console.log("ss ", response);
                addMessage(response, 'bot');
            });
            
            // Clear input
            input.value = '';
        }
    });
    
    // Function to add a message to the chat
    function addMessage(text, sender) {
        console.log("Adding text:", text);
        const message = document.createElement('div');
        message.className = `message ${sender}-message`;
        
        let avatar, content;
        
        if (sender === 'user') {
            avatar = `
                <div class="message-avatar user-avatar">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                </div>
            `;
            content = `<div class="message-content user-content">${text}</div>`;
            message.innerHTML = content + avatar;
        } else {
            avatar = `
                <div class="message-avatar bot-avatar">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 5.5c2.61 0 4.83-1.67 5.65-4H6.35c.82 2.33 3.04 4 5.65 4z"/>
                    </svg>
                </div>
            `;
            content = `<div class="message-content bot-content">${text}</div>`;
            message.innerHTML = avatar + content;
        }
        
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Simulated API function
    async function fetchBotResponse(apiUrl, payload) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Expecting JSON with key "text"
    return data.text; // Return the value of "text"
  } catch (error) {
    console.error('Error fetching bot response:', error);
    return null;
  }
}
addMessage("Hi, how can I help you today?", sender="bot")

});