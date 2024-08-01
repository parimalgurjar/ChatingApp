import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
import { formatDate } from "../../../utils/common-utils";
import { setConversation, getConversation } from "../../../service/api";

const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag, account.sub, user.sub]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Box onClick={() => getUser()} sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          display: "flex",
          height: "45px",
          padding: "13px 25px",
          cursor: "pointer",
          marginBottom: "18px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            padding: "0px 0px",
            marginRight: "10px",
            width: "50px",
            height: "50px",
          }}
        >
          <img style={{ borderRadius: "50%" }} src={user.picture} alt="" />
        </Box>
        <Box sx={{ width: "90%", padding: "0 12px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <p>{user.name}</p>
            {message?.text && <p style={{fontSize:"12px",color:"#767676"}}>{formatDate(message.timestamp)}</p>}
          </Box>
          <Box>
            <p style={{color:"#767676",fontSize:"14px"}}>
              {message?.text?.includes("localhost") ? "media" : message.text}
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
