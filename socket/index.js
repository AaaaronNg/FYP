const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = []

const addUser = (userId, socketId) => {
    console.log("adduser", userId)
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId })
}

console.log(users);

const removerUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) =>
    users.find(user => user.userId === userId)


io.on("connection", (socket) => {
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        console.log(`${userId} connected socket.io`)
        io.emit("getUsers", users);
    });

    socket.on("sendMessage", (receiverId, data) => {

        const user = getUser(receiverId)
        console.log("user", user)
        if (user) {
            io.to(user.socketId).emit("getMessage", data)
        }
    })

    socket.on("disconnect", () => {
        console.log("user disconnected")
        removerUser(socket.id)
        io.emit("getUsers", users)
    })
})

