const { getSocket } = require("./sockets");

const messages = document.getElementById("jsMessages");
const sendMSg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) =>{
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="author ${nickname ? "out" : "self" }">${nickname ? nickname : "YOU" }:</span> ${text}
    `;
    messages.appendChild(li);
}

const handleSendMsg = (event) => {
    event.preventDefault();
    const input = sendMSg.querySelector("input");
    const { value } = input;
    getSocket().emit(window.events.sendMSg, { messages: value })
    input.value = ""; 
    appendMsg(value);
}

export const handleNewMessage = ({message, nickname}) => 
    appendMsg(message, nickname); 

if(sendMSg){
    sendMSg.addEventListener("submit", handleSendMsg);
}