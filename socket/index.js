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

const removerUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) =>
    users.find(user => user.userId === userId)


io.on("connection", (socket) => {
    console.log("user connected (socket.io)")


    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users)
    });

    socket.on("sendMessage", (receiverId, data) => {
        console.log()
        const user = getUser(receiverId)

        io.to(user.socketId).emit("getMessage", data)
    })

    socket.on("disconnect", () => {
        console.log("user disconnected")
        removerUser(socket.id)
        io.emit("getUsers", users)
    })
})

