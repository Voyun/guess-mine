(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " said ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUM5QkMsT0FEOEIsR0FDVEQsSUFEUyxDQUM5QkMsT0FEOEI7QUFBQSxNQUNyQkMsUUFEcUIsR0FDVEYsSUFEUyxDQUNyQkUsUUFEcUI7QUFFckNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLG1CQUFnQ0QsT0FBaEM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWYoZGF0YSkge1xyXG4gICAgY29uc3Qge21lc3NhZ2UsIG5pY2tuYW1lfSA9IGRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX0gc2FpZCAke21lc3NhZ2V9YCk7XHJcbn0iXX0=
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

// eslint-disable-next-line no-undef
var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickName(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmZhNWM0YjguanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tOYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBNkI7QUFDekJILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFFQTtBQUFYLEdBQTFCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JILE9BQXBCO0FBQ0g7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBOEI7QUFDMUJSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUksSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0g7O0FBSURSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBMEJDLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlTWVzc2FnZU5vdGlmfSBmcm9tIFwiLi9jaGF0XCJcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2Upe1xyXG4gICAgc29ja2V0LmVtaXQoXCJuZXdNZXNzYWdlXCIsIHsgbWVzc2FnZTogbWVzc2FnZSB9KTsgXHJcbiAgICBjb25zb2xlLmxvZyhgWW91OiAke21lc3NhZ2V9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5pY2tOYW1lKG5pY2tuYW1lKXtcclxuICAgIHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwgeyBuaWNrbmFtZSB9KTtcclxufVxyXG5cclxuXHJcblxyXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKTsiXX0=
},{"./chat":1}]},{},[2])