// function loadCSS(url) {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = url;
//     document.head.appendChild(link);
//   }
  
//   // Example usage:
// loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

// const head = document.querySelector('head');

// // Create style element
// const style = document.createElement('style');

// // Add styles
// style.textContent = `
//     #chat-icon {
//         position: fixed;
//         bottom: 20px;
//         right: 20px;
//         background-color: #007bff;
//         color: white;
//         border-radius: 50%;
//         width: 60px;
//         height: 60px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         cursor: pointer;
//         z-index: 1001;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     }
//     #chat-icon:hover {
//         background-color: #0056b3;
//     }
//     #chatbox {
//         border: 1px solid #ccc;
//         height: 300px;
//         overflow-y: scroll;
//         padding: 10px;
//         margin-bottom: 70px;
//         background-color: #f9f9f9;
//         border-radius: 10px;
//         position: fixed;
//         bottom: 80px;
//         right: 20px;
//         width: 300px;
//         z-index: 1000;
//         display: none;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     }
//     #input-container {
//         display: flex;
//         position: fixed;
//         bottom: 20px;
//         right: 20px;
//         width: 300px;
//     }
//     #message-input {
//         flex: 1;
//         padding: 8px;
//         border: 1px solid #ccc;
//         border-radius: 5px 0 0 5px;
//         margin-bottom: 0;
//         box-sizing: border-box;
//     }
//     #send-button {
//         padding: 8px 16px;
//         background-color: #007bff;
//         color: white;
//         border: none;
//         border-radius: 0 5px 5px 0;
//         cursor: pointer;
//     }
//     #send-button:hover {
//         background-color: #0056b3;
//     }
//     .message {
//         margin-bottom: 5px;
//         padding: 8px;
//         border-radius: 5px;
//         background-color: #e2e2e2;
//     }
//     .sender {
//         font-weight: bold;
//         color: #007bff;
//         display: block;
//     }
//     #minimize-button {
//         position: absolute;
//         top: 5px;
//         right: 5px;
//         background-color: transparent;
//         border: none;
//         font-size: 16px;
//         cursor: pointer;
//         color: #666;
//     }
//     #minimize-button:hover {
//         color: #333;
//     }
// `;

// // Append style to head
// head.appendChild(style);


// const body = document.querySelector('body');

// // Create chat icon
// const chatIcon = document.createElement('div');
// chatIcon.id = 'chat-icon';
// chatIcon.innerHTML = '<i class="fas fa-comment-dots"></i>';
// body.appendChild(chatIcon);

// // Create chatbox
// const chatbox = document.createElement('div');
// chatbox.id = 'chatbox';

// // Create minimize button
// const minimizeButton = document.createElement('button');
// minimizeButton.id = 'minimize-button';
// minimizeButton.innerHTML = '<i class="fas fa-window-minimize"></i>';
// chatbox.appendChild(minimizeButton);
// body.appendChild(chatbox);

// // Create input container
// const inputContainer = document.createElement('div');
// inputContainer.id = 'input-container';

// // Create message input
// const messageInput = document.createElement('input');
// messageInput.id = 'message-input';
// messageInput.placeholder = 'Type your message...';
// inputContainer.appendChild(messageInput);

// // Create send button
// const sendButton = document.createElement('button');
// sendButton.id = 'send-button';
// sendButton.textContent = 'Send';
// inputContainer.appendChild(sendButton);
// body.appendChild(inputContainer);



// chatIcon.addEventListener('click', () => {
//     chatbox.style.display = 'block';
//     inputContainer.style.display = 'flex';
//     chatIcon.style.display = 'none';
// });

// minimizeButton.addEventListener('click', () => {
//     chatbox.style.display = 'none';
//     inputContainer.style.display = 'none';
//     chatIcon.style.display = 'flex';
// });


// sendButton.addEventListener('click', () => {
//     const messageText = messageInput.value;
//     if (messageText.trim() !== '') {
//         addUserMessage(messageText);
//         messageInput.value = '';
//         chatbox.scrollTop = chatbox.scrollHeight;

//         setTimeout(() => {
//             addBotMessage("This is a simulated response from the bot.");
//             chatbox.scrollTop = chatbox.scrollHeight;
//         }, 1000);
//     }
// });

// messageInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         sendButton.click();
//     }
// });

// function addUserMessage(text) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message');
//     messageElement.classList.add('user-message');
//     messageElement.innerHTML = `<span class="sender">${text} <i class="fas fa-person"></i></span>`;
//     chatbox.appendChild(messageElement);
//     messageElement.style.setProperty('textAlign', 'right');
//     messageElement.style.setProperty('backgroundColor', '#d4edda');
//     messageElement.style.setProperty('color', '#155724');
// }

// function addBotMessage(text) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message');
//     messageElement.classList.add('bot-message');
//     messageElement.innerHTML = `<span class="sender"><i class="fas fa-robot"></i>  ${text}</span>`;
//     chatbox.appendChild(messageElement);
//     messageElement.style.setProperty('textAlign', 'left');
//     messageElement.style.setProperty('backgroundColor', '#cce5ff');
//     messageElement.style.setProperty('color', '#004085');
// }

// chat.js - Floating Chat Interface
document.addEventListener('DOMContentLoaded', function() {
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
            // Add user message
            addMessage(input.value, 'user');
            
            // Call API for response (simulated)
            fetchBotResponse().then(response => {
                addMessage(response, 'bot');
            });
            
            // Clear input
            input.value = '';
        }
    });
    
    // Function to add a message to the chat
    function addMessage(text, sender) {
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
    async function fetchBotResponse() {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 600));
        return "Dummy text here";
    }
    
    // Add initial bot message
    addMessage("Hi there! How can I help you today?", 'bot');
});