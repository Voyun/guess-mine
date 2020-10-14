import {handleMessageNotif} from "./chat"
// eslint-disable-next-line no-undef
const socket = io("/");

function sendMessage(message){
    socket.emit("newMessage", { message: message }); 
    console.log(`You: ${message}`);
}

function setNickName(nickname){
    socket.emit("setNickname", { nickname });
}



socket.on("messageNotif", handleMessageNotif);