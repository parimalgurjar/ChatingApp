import React from "react";
import { Dialog, Box } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./chat/ChatBox";
const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <Dialog
      open={true}
      hideBackdrop
      PaperProps={{
        sx: {
          height: "95%",
          margin: "20px",
          width: "100%",
          maxWidth: "95%",
          maxHeight: "100%",
          boxShadow: "none",
          overflow: "hidden",
        },
      }}
    >
      <Box className="flex" sx={{}}>
        <Box sx={{ width: "35%" }}>
          <Menu />
        </Box>
        <Box
          sx={{
            width: "65%",
            minWidth: "350px",
            height: "100%",
            borderLeft: "1px solid #969696",
            backgroundColor: "",
          }}
        >
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default ChatDialog;
