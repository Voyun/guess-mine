import events from "./event";

const socketController = (socket) => {

    const broadcast = (event, data) => socket.broadcast.emit(event, data);

    socket.on(events.setNickname, ({nickname}) => {
        console.log(nickname);
        broadcast(events.newUser, { nickname });
        socket.nickname = nickname;
    });

    socket.on(events.disconnect, () => {
        console.log("disconnected");
        broadcast(events.disconnected, { nickname: socket.nickname });
    });

    socket.on(events.sendMsg, ({ message }) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname });
    });

    socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
    );

    socket.on(events.strokePath, ({ x, y }) => {
        broadcast(events.strokedPath, { x, y });
        console.log(x, y);
    });
};

export default socketController;