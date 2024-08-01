import React from "react";
import { useContext, useState } from "react";
import { Box } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import InfoDrawer from "../../drawer/InfoDrawer";
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { account } = useContext(AccountContext);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Box
        sx={{
          height: "60px",
          padding: "0px 16px",
          backgroundColor: "#ededed",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position:"sticky",
          top:0,
          zIndex:99
        }}
      >
        <img
          className=""
          style={{
            height: "42px",
            width: "42px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          src={account.picture}
          alt="dp"
          onClick={() => {
            toggleDrawer();
          }}
        />
        <Box
          sx={{
            display: "flex",
            marginTop: "9px",
            width: "30%",
            justifyContent: "space-between",
          }}
        >
          <SupervisedUserCircleIcon sx={{}} />
          <MessageIcon sx={{ padding: "1px" }} />
          <HeaderMenu
            sx={{ marginBottom: "5px" }}
            setOpenDrawer={setOpenDrawer}
          />
        </Box>
      </Box>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
