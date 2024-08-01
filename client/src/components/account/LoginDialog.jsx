import { Dialog,Box, List, ListItem } from '@mui/material'
import React from 'react'
import {qrCodeImage} from "../../constants/data"
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../../service/api';
const LoginDialog = () => {
    const {setAccount}=useContext(AccountContext)
    const onLoginSuccess=async(res)=>{
        const decoded=jwtDecode(res.credential)
        setAccount(decoded)
       await addUser(decoded)
    }
    const onLoginError=(res)=>{
        console.log("Login failed",res)

    }
  return (
    <Dialog open={true} hideBackdrop PaperProps={{sx:{height:"90%",marginTop:"12%",width:"60%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",overflow:"hidden"}}}>
        <Box className="p-8 flex">
            <Box>
                <p className='text-3xl text-gray-500 pb-9' style={{fontFamily:"inherit",fontWeight:"300"}}>Use WhatsApp on your computer</p>
                <List sx={{fontSize:"18px",lineHeight:"28px",color:"#3B4A54"}}>
                    <ListItem>
                    1. Open WhatsApp on your phone
                    </ListItem>
                    <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>

                    <ListItem>3. Point your phone at this screen to capture the QR code</ListItem>

                </List>
            </Box>

            <Box sx={{position:"relative"}}>
                <img src={qrCodeImage} alt="" style={{height:"14rem",width:"14rem"}}/>
                <Box sx={{position:"absolute",top:"40%",left:"7%"}}>
                    <GoogleLogin
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}/>
                </Box>

            </Box>

        </Box>

    </Dialog>
  )
}

export default LoginDialog
