// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("Hello", () => console.log("Somebody joined!"));

setTimeout( () => socket.emit("HelloGuys"), 5000);