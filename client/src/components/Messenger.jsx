import React from 'react'
import LoginDialog from './account/LoginDialog'
import {Toolbar,AppBar, Box} from '@mui/material';
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from './context/AccountProvider';
import { useContext } from 'react';
const Messenger = () => {
  const {account}=useContext(AccountContext)
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#E8E5DE" }}>
    {account ? (
      <>
        <AppBar sx={{ backgroundColor: "#00A884", height: "125px", boxShadow: "none" }}>
          <Toolbar />
        </AppBar>
        <ChatDialog />
      </>
    ) : (
      <>
        <AppBar sx={{ backgroundColor: "#00A884", height: "220px", boxShadow: "none" }}>
          <Toolbar />
        </AppBar>
        <LoginDialog />
      </>
    )}
  </Box>
  
  )
}

export default Messenger
