import React, { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { uploadFile } from "../../../service/api";

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
      
        setImage(response.data);
      }
    };
    getImage();
  }, [file,setImage]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ededed",
        height: "55px",
        display: "flex",
        width: "100%",
        alignItems: "center",
        padding: "0px 15px",
      }}
    >
      <SentimentSatisfiedAltOutlinedIcon sx={{ marginRight: "10px" }} />

      <label htmlFor="fileInput">
        <AttachFileIcon sx={{ transform: "rotate(45deg)", cursor: "pointer" }} />
      </label>
      <input type="file" id="fileInput" style={{ display: "none" }} onChange={onFileChange} />

      <Box sx={{ flex: 1, marginLeft: 1, padding: "0px 20px" }}>
        <TextField
          fullWidth
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={sendText}
          sx={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: "0px 15px",
          }}
          value={value}
        />
      </Box>
      <MicIcon />
    </Box>
  );
};

export default Footer;
