import { Box } from "@mui/material";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AccountContext } from "../../context/AccountProvider";

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);

  const isOnline = activeUsers?.find((user) => user.sub === person.sub);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ededed",
        height: "60px",
        padding: "0px 16px",
      }}
    >
      <img
        src={person.picture}
        alt="db"
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Box sx={{ marginLeft: "12px" }}>
        <p>{person.name}</p>
        <p style={{ fontSize: "14px", color: "#686868" }}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </Box>
      <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
        <SearchIcon sx={{ marginRight: "20px" }} />
        <MoreVertIcon />
      </Box>
    </Box>
  );
};

export default ChatHeader;
