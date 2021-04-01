const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
const { joinUser, getUser } = require('./util/user');

io.on("connection", socket => {

    console.log("connected");
    socket.on('joinRoom', ({ username, room }) => {
        console.log("hii");
        const user = joinUser(socket.id, username,room);

        socket.join(user.room);
        socket.broadcast.to(user.room).emit('message', `${user.username} Joined`);
        console.log(user)
    })

    socket.on('drawing', ({data,room_id}) => {
        const user = getUser(socket.id);
        console.log('drawing')
        socket.broadcast.to(room_id).emit('drawingc',data);
    });

    socket.on('clear_whiteboard', (data) => {
        const user = getUser(socket.id);
        io.to(user.room).broadcast.emit('clear_whiteboard')
    });

    socket.on('update_website', (link) => {
        const user = getUser(socket.id);
        io.to(user.room).broadcast.emit('update_website', link)
    });

    socket.on('update_code', (code) => {
        const user = getUser(socket.id);
        io.to(user.room).broadcast.emit('update_code', code)
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('message', 'A user has been Disconnected');
    });
});

httpServer.listen(8000, () => {
    console.log("server is running at port 8000");
});