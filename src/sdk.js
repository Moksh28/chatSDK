// Function to create the chat bubble element
function createChatBubble() {
    const chatBubble = document.createElement("div");
    chatBubble.classList.add("chat-bubble"); // Add a class for styling

    // Add icon using Font Awesome
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-comments"); // Adjust the classes for the desired icon
    chatBubble.appendChild(icon);

    // Tooltip
    chatBubble.title = "Click to open chat";

    // Event listener to handle interactions
    chatBubble.addEventListener("click", () => {
        toggleChatWindow();
    });

    return chatBubble;
}

// Function to toggle the chat window visibility
function toggleChatWindow() {
    const chatWindow = document.getElementById("chat-window"); // Adjust the ID
    chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
}

// Call the function to create and append the chat bubble
document.addEventListener("DOMContentLoaded", () => {
    const chatBubbleElement = createChatBubble();
    document.body.appendChild(chatBubbleElement);
});
