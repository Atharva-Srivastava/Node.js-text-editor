/**global io**/
const http = require("http").createServer();
const io = require("socket.io")(http);

var socket = io('http://localhost:3000');

function getEl(id) {
    return document.getElementById(id)
}
const editor = getEl("text")
editor.addEventListener("keyup", (evt) => {
    const text = editor.value
    socket.send(text)
})
socket.on('message', (data) => {
    editor.value = data
})

// I have initialized a connection to our server, then we got hold of the textarea in the DOM via its id editor. 
//We added an event listener keyup with a callback function, this function will be executed when we type in the textarea.
//This callback retrieves the text const text = editor.value in the textarea 
//via it's HTMLTextareaElement, then the text is sent over the socket stream socket.send(text).