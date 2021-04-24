const express = require("express");
const mongoose=require("mongoose");
var cors = require('cors')
const { joinUser, getUser } = require("./routers/TemporaryUser.js");

const app=express();

//establishing socket connection

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

//connecting to mongodb

const url="mongodb://localhost:27017/EduNation";
mongoose.connect(url,{useUnifiedTopology:true});
mongoose.connection.on('open',()=>{
    console.log("Mongoose server has started...");
});

app.use(express.json());
app.use(cors());

//handling the socket events

io.on("connection", socket => {

    console.log("connected");
    socket.on('joinRoom', ({ username, room }) => {

        const user = joinUser(socket.id,room);
        user.then(()=>{
            socket.join(room);
            socket.broadcast.to(room).emit('message', `${username} joined`);
            // console.log(user);
        });
    });

    socket.on('drawing', ({data,room_id}) => {
        // const user = getUser(socket.id,room_id);
        // user.then(()=>{
        //     console.log('drawing')
        //     socket.broadcast.to(room_id).emit('drawing',data);
        // });    
        console.log("Drawing event is fired !..");
        socket.broadcast.to(room_id).emit('drawing',data);

    });

    socket.on('createQuize', ({question,option1,option2,option3,option4,room_id}) => {
        // const user = getUser(socket.id,room_id);
        // user.then(()=>{
        //     console.log('drawing')
        //     socket.broadcast.to(room_id).emit('drawing',data);
        // });    
        console.log("createQuize event is fired !..");
        console.log(question+"\n"+option1+"\n"+option2+"\n"+option3+"\n"+option4+"\n"+room_id+"\n");
        socket.broadcast.to(room_id).emit('Quize',{question,option1,option2,option3,option4,room_id});

    });

    socket.on('submitQuiz', ({data,room_id}) => {
        // const user = getUser(socket.id,room_id);
        // user.then(()=>{
        //     console.log('drawing')
        //     socket.broadcast.to(room_id).emit('drawing',data);
        // });    
        console.log("submitQuiz event is fired !..");
        socket.broadcast.to(room_id).emit('submitQuiz',data);

    });

    // socket.on('clear_whiteboard', (data) => {
    //     const user = getUser(socket.id,room_id);
    //     user.then(()=>{
    //         console.log('clear_whiteboard')
    //         socket.broadcast.to(room_id).emit('clear_whiteboard',data);
    //     });
    // });

    // socket.on('update_website', (link) => {
    //     const user = getUser(socket.id,room_id);
    //     user.then(()=>{
    //         console.log('update_website')
    //         socket.broadcast.to(room_id).emit('update_website',data);
    //     });
    // });

    // socket.on('update_code', (code) => {
    //     const user = getUser(socket.id,room_id);
    //     user.then(()=>{
    //         console.log('update_code')
    //         socket.broadcast.to(room_id).emit('update_code',data);
    //     });
    // });


    socket.on('disconnect', () => {
        // const user = getUser(socket.id,room_id);
        // user.then(()=>{
        //     console.log('disconnect')
        //     socket.broadcast.emit('message', `${user.username} got disconnected`);
        // });     
        socket.leave(socket.id); 
        socket.broadcast.emit('message', `${socket.id} got disconnected`);
  
    });
});

httpServer.listen(8000, () => {
    console.log("server is running at port 8000");
});


const roomRouter=require("./Routers/RoomRouter.js");
app.use("/",roomRouter);