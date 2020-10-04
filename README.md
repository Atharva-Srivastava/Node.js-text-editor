# Node.js-text-editor

On the front-end,

- Edit `views/index.html` to change the content of the webpage
- `public/client.js` is the javacript that runs when you load the webpage
- `public/style.css` is the styles for `views/index.html`
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- app starts at `server.js`
- add frameworks and packages in `package.json`
- store app secrets in `.env` (nobody can see this but you and people you invite)

This is a real-time text editor made with node.js and socket.io Socket.io is used to stream live changes in the application. 
It has been made with node and express running at its backend. It runs on localhost:3000.

 I initialized a connection to our server, then we got hold of the textarea in the DOM via its id editor. 
I added an event listener keyup with a callback function, this function will be executed when we type in the textarea.
This callback retrieves the text const text = editor.value in the textarea via it's HTMLTextareaElement, then the text is sent over the socket stream socket.send(text).

I have set up a connection event, the function callback has a socket argument. 
The socket registers a message event, it has a handler function that broadcast the data event passed to it to all other sockets connected to the server when the message event is fired.


As all users have a message event they are listening to, the message handler will be executed because the server emitted a message event, 
so all user’s textarea will be set with the text passed over the socket connection.
