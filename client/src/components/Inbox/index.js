import React, { useEffect, useState, useRef } from "react"
import ChatInput from "./chatInput"
import Conversation from "./conversation"
import Messagebox from "./message/index"
import { useSelector } from "react-redux"
import {
    getCurrentUserConversations,
    getCurrentUserConversation,
    getCurrentUserMessages,
    getConversationIdByUserId
} from "./tools"
import { useFormik } from "formik"
import * as Yup from "yup"
import { io } from "socket.io-client"
import axios from "axios"


const Inbox = (props) => {
    const user = useSelector(state => state.users)
    const [conversations, setConversations] = useState([])
    const [messages, setMessages] = useState([])
    const socket = useRef()
    const [currentConversationId, setcurrentConversationId] = useState(null)
    const [receiver, setReceiver] = useState(null)


    useEffect(() => {
        socket.current = io("ws://localhost:8900")

        socket.current.on("getMessage", data => {
            console.log(data)
            setMessages((prev) => [...prev, data])
        })
    }, [])

    console.log(conversations)



    useEffect(() => {
        socket.current.emit("addUser", user.data._id)
        socket.current.on("getUsers", users => {
            console.log("users", users)
        })
    }, [user.data._id])



    // click the conversation
    const getCoversationId = (id) => {
        setcurrentConversationId(id)
        const conversation = getCurrentUserConversation(id)
        conversation.then((values) => {
            const chat = getConversationIdByUserId({
                senderId: values.data.senderId,
                currentUserId: values.data.currentUserId
            })

            chat.then((values) => {
                const msgs = getCurrentUserMessages({
                    id_1: values.data[0]._id,
                    id_2: values.data[1]._id
                })
                msgs.then((values) => setMessages(values.data)).catch((e) => console.log(e))
            }).catch(e => console.log(e))
        }).catch((e) => console.log(e))
    }

    const getReceiverId = (receiver) => {
        setReceiver(receiver)
    }

    const formik = useFormik({
        initialValues: {
            text: ""
        },
        validationSchema: Yup.object({
            text: Yup.string()
                .required("text required")
        }),
        onSubmit: (values) => {
            values.senderId = `${user.data._id}`
            values.conversationId = `${currentConversationId}`
            handleSubmit(values)
        }
    })

    const handleSubmit = (values) => {
        //addNewMessages(values)

        const getMessages = async () => {
            try {
                const res = await axios.post(`/api/messages`, values)
                setMessages([...messages, res.data])
                //console.log(receiver)
                const receiverId = receiver._id

                socket.current.emit("sendMessage", receiverId, res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessages()
        formik.values.text = ""
        document.getElementById("text").value = ""

    }
    //console.log(messages)


    useEffect(() => {
        const conversations = getCurrentUserConversations(user.data._id)
        conversations.then((values) => setConversations(values.data)).catch((err) => console.log(err))
    }, [user.data._id])


    return <>
        <div class="container">
            <h1 class="h3 mb-3">Messages</h1>
            <div class="card">
                <div class="row g-0">
                    <div class="col-12 col-lg-5 col-xl-3 border-end">

                        <div class="px-4 d-none d-md-block">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <input type="text" class="form-control my-3" placeholder="Search..." />
                                </div>
                            </div>
                        </div>

                        <div class="position-relative" >

                            <Conversation
                                conversations={conversations}
                                getCoversationId={(id) => getCoversationId(id)}
                                getReceiverId={(id) => getReceiverId(id)}
                            />
                        </div>
                    </div>

                    <div class="col-12 col-lg-7 col-xl-9 ">
                        <div class="row border-bottom">

                            <a href="#inbox" data-toggle="modal" data-target="#view_info">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" width="40" height="40" class="rounded-circle" />
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">Aiden Chavez</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>


                        </div>
                        {
                            messages.length !== 0 ? <Messagebox
                                user={user}
                                currentConversationId={currentConversationId}
                                messages={messages}
                            /> : null
                        }



                        {
                            currentConversationId ?
                                <ChatInput formik={formik} conversationId={currentConversationId} /> :
                                null
                        }





                    </div>

                </div>

            </div>

        </div>

    </>
}

export default Inbox