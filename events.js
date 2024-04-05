function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var imageInput = document.getElementById('image-input');
    var chatBox = document.getElementById('chat-box');

    var message = messageInput.value.trim();
    var image = imageInput.files[0];

    if (message !== '' || (image && image.type.startsWith('image/'))) {
        // Create a new message container
        var messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        // Display text message
        if (message !== '') {
            // Check if the message is a link
            if (isLink(message)) {
                var linkElement = document.createElement('a');
                linkElement.href = message;
                linkElement.target = '_blank';
                linkElement.textContent = message;
                messageContainer.appendChild(linkElement);
            } else {
                var messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.textContent = message;
                messageContainer.appendChild(messageElement);
            }
        }

        // Display image
        if (image) {
            var imageElement = document.createElement('img');
            imageElement.className = 'image';
            imageElement.src = URL.createObjectURL(image);
            imageElement.style.width = '175px';
            imageElement.style.height = '150px';
            messageContainer.appendChild(imageElement);
        }

        // Append the message container to the chat box
        chatBox.appendChild(messageContainer);

        // Clear input fields
        messageInput.value = '';
        imageInput.value = null;

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Function to check if the input is a link
function isLink(text) {
    var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(text);
}
