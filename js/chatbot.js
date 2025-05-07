function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }
  
  // Example usage:
loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
const chatbox = document.createElement('div');
chatbox.id = 'chatbox';
const inputContainer = document.createElement('div');
inputContainer.id = 'input-container';
const messageInput = document.createElement('input');
messageInput.id = 'message-input';
messageInput.placeholder = 'Type your message...';
const sendButton = document.createElement('button');
sendButton.id = 'send-button';
sendButton.textContent = 'Send';

// Apply styles using setProperty
chatbox.style.setProperty('border', '1px solid #ccc');
chatbox.style.setProperty('height', '300px');
chatbox.style.setProperty('overflowY', 'scroll');
chatbox.style.setProperty('padding', '10px');
chatbox.style.setProperty('marginBottom', '10px');
chatbox.style.setProperty('backgroundColor', '#f9f9f9');
chatbox.style.setProperty('borderRadius', '10px');
chatbox.style.setProperty('position', 'fixed');
chatbox.style.setProperty('bottom', '10px');
chatbox.style.setProperty('right', '10px');
chatbox.style.setProperty('width', '300px');
chatbox.style.setProperty('zIndex', '1000');

inputContainer.style.setProperty('display', 'flex');
inputContainer.style.setProperty('position', 'fixed');
inputContainer.style.setProperty('bottom', '20px');
inputContainer.style.setProperty('right', '10px');
inputContainer.style.setProperty('width', '300px');

messageInput.style.setProperty('flex', '1');
messageInput.style.setProperty('padding', '8px');
messageInput.style.setProperty('border', '1px solid #ccc');
messageInput.style.setProperty('borderRadius', '5px 0 0 5px');
messageInput.style.setProperty('marginBottom', '0');
messageInput.style.setProperty('boxSizing', 'border-box');


sendButton.style.setProperty('padding', '8px 16px');
sendButton.style.setProperty('backgroundColor', '#007bff');
sendButton.style.setProperty('color', 'white');
sendButton.style.setProperty('border', 'none');
sendButton.style.setProperty('borderRadius', '0 5px 5px 0');
sendButton.style.setProperty('cursor', 'pointer');
sendButton.addEventListener('mouseover', () => {
    sendButton.style.setProperty('backgroundColor', '#0056b3');
});

const body = document.querySelector('body');
body.appendChild(chatbox);
body.appendChild(inputContainer);
inputContainer.appendChild(messageInput);
inputContainer.appendChild(sendButton);


sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        addUserMessage(messageText); // Add user message
        messageInput.value = '';
        chatbox.scrollTop = chatbox.scrollHeight;

        // Simulate bot response (replace with actual API call)
        setTimeout(() => {
            addBotMessage("This is a simulated response from the bot.");
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 1000); // 1-second delay
    }
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

function addUserMessage(text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add('user-message');
    messageElement.innerHTML = `<span class="sender">You: <i class="fas fa-person"></i></span> ${text}`; // Icon on the right
    chatbox.appendChild(messageElement);
    messageElement.style.setProperty('text-align', 'right');
    messageElement.style.setProperty('backgroundColor', '#d4edda');
    messageElement.style.setProperty('color', '#155724');
}

function addBotMessage(text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add('bot-message');
    messageElement.innerHTML = `<span class="sender"><i class="fas fa-robot"></i> Bot:</span> ${text}`;
    chatbox.appendChild(messageElement);
    messageElement.style.setProperty('text-align', 'left');
    messageElement.style.setProperty('backgroundColor', '#cce5ff');
    messageElement.style.setProperty('color', '#004085');
}