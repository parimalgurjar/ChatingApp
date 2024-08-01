import { Box } from "@mui/material";
import React, { useState, useContext, useEffect, useRef } from "react";
import Footer from "./Footer";
import Message from "./Message";
import { AccountContext } from "../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
  const [file, setFile] = useState();
  const [image, setImage] = useState('');
  const [incomingMessage, setIncomingMessage] = useState('');
  
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on("getMessage", data => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      });
    });
  }, [socket]);

  useEffect(() => {
    const getMessageDetails = async () => {
      if (conversation?._id) {
        const data = await getMessages(conversation._id);
        setMessages(data);
      }
    };
    getMessageDetails();
  }, [conversation?._id, newMessageFlag]);

  useEffect(() => {
    if (incomingMessage && conversation?.members?.includes(incomingMessage.senderId)) {
      setMessages(prev => [...prev, incomingMessage]);
    }
  }, [incomingMessage, conversation]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13 && value.trim()) {
      let message={}
      if(!file){
      message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }
      }
    else{
       message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'file',
        text: image
      }
    }


      socket.current.emit('sendMessage', message);
      await newMessage(message);
      setValue("");
      setImage("");
      setFile('');
      setNewMessageFlag(prev => !prev);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
        
        backgroundPosition: "center",
        width: "100%",
        backgroundSize:' 50%',
      }}
    >
      <Box sx={{ height: "75vh", overflowY: "scroll" }}>
        <Box sx={{ padding: "1px 80px" }}>
          {messages.map((message, index) => (
            <Box key={index} ref={scrollRef}>
              <Message message={message} />
            </Box>
          ))}
        </Box>
      </Box>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Box>
  );
};

export default Messages;
