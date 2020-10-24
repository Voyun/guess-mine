import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint";
import { handleGameEnded, handleGameStarted, handlegameStarting, handleLeaderNotif, handlePlayerUpdate } from "./players";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = aSocket => (socket = aSocket);

export const initSockets = aSocket => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnected);
  aSocket.on(events.newMsg, handleNewMessage);
  aSocket.on(events.beganPath, handleBeganPath);
  aSocket.on(events.strokedPath, handleStrokedPath);
  aSocket.on(events.filled, handleFilled);
  aSocket.on(events.playerUpdate, handlePlayerUpdate);
  aSocket.on(events.gameStarted, handleGameStarted);
  aSocket.on(events.leaderNotif, handleLeaderNotif);
  aSocket.on(events.gameEnded, handleGameEnded);
  aSocket.on(events.gameStarting, handlegameStarting);
};