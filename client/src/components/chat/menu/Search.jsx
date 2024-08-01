import React from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
const Search = ({setText}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#E4E4E4",
        borderBottom: "1px solid #E7E9EB",
        padding: "9px 4px",
        marginTop:'0vh'
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "",
          alignItems: "center",
          position: "relative",
          margin: "0px 13px",
        }}
      >
        <Box>
          <SearchIcon
            sx={{
              position: "absolute",
              color: "#A2A2A2",
              margin: "-11px 12px",
              zIndex: "2",
            }}
          />
        </Box>
        <InputBase
          onChange={(e) => setText(e.target.value)}
          placeholder="Such or start a new chat"
          sx={{
            width: "100%",
            borderRadius: "7px",
            padding: "2px 60px",
            backgroundColor: "#F1F1F1",
            fontSize: "15px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Search;
