import React, { useContext } from "react";
import { Box } from "@mui/material";
import { formatDate, downloadMedia } from "../../../utils/common-utils";
import { AccountContext } from "../../context/AccountProvider";
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF } from '../../../constants/data';

const Message = ({ message }) => {
  const { account } = useContext(AccountContext);
  const isSender = account.sub === message.senderId;

  return (
    <Box
      sx={{
        backgroundColor: isSender ? "#E7FED1" : "white",
        maxWidth: "60%",
        marginLeft: isSender ? "auto" : "0",
        padding: "5px",
        width: "fit-content",
        display: "flex",
        borderRadius: "7px",
        marginBottom: "10px",
      }}
    >
      {message.type === 'file' ? 
        <ImageMessage message={message} /> : 
        <TextMessage message={message} />
      }
    </Box>
  );
};

const ImageMessage = ({ message }) => {
  const proxyUrl = `/proxy?url=${encodeURIComponent(message.text)}`;
  
  return (
    <Box sx={{ position: "relative" }}>
      {message?.text.includes('.pdf') ? 
        <Box sx={{ display: "flex" }}>
          <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
          <p>{message.text.split('/').pop()}</p>
        </Box> :
        <img src={proxyUrl} alt={message.text} style={{ maxWidth: "100%", maxHeight: "300px" }} />
      }
      <GetAppIcon
        onClick={(e) => downloadMedia(e, proxyUrl)}
        sx={{ position: "absolute", bottom: 0, right: 0, border: '1px solid grey', borderRadius: "50%", cursor: "pointer" }}
      />
      <p>{formatDate(message.createdAt)}</p>
    </Box>
  );
};

const TextMessage = ({ message }) => {
  return (
    <p style={{ fontSize: "14px", wordBreak: "break-all" }}>
      {message.text}
      <sub style={{ fontSize: "10px", marginLeft: "10px", top: "5px", color: "#777A7C" }}>
        {formatDate(message.createdAt)}
      </sub>
    </p>
  );
};

export default Message;
