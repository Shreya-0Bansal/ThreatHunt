const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('chat-area'); // Change to chat-area

const uname = document.getElementById('name');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        // Send message to server with username
        const messageWithUsername = { username: getUsername(), message: input.value };
        socket.emit('chat message', messageWithUsername);
        input.value = '';
        }
    });

    function getUsername() {
        const user = (uname.value).substring(1, (uname.value).length - 1);
        return  user;
    }

    // Receive messages from server
    socket.on('chat message', (data) => {
        const item = document.createElement('div'); 
        item.classList.add('message'); 
        item.textContent =` ${data.username} : ${data.message}`; 
        messages.appendChild(item);
        messages.scrollTop = messages.scrollHeight; 
    });