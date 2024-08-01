import React from 'react'
import {emptyChatImage} from "../../../constants/data"
import { Box } from '@mui/material'
const EmptyChat = () => {
  return (
    <Box sx={{padding:"30px 0px",textAlign:"center",height:"100%",backgroundColor:"#F8FAFB",width:"100%",paddingTop:"97px"}}>
      <Box sx={{padding:"",width:"63%",display:"flex",flexDirection:"column",margin:"auto",}} >
        <img src={emptyChatImage} alt="" />
        <p className='text-2xl' style={{color:"#7B7B7B",fontWeight:"400",marginTop:"20px",marginBottom:"10px",fontFamily:"inherit"}}>WhatsApp Web</p>
        <p className='' style={{color:"#5A5A5A",fontFamily:"inherit"}}>Now send and recieve messages without keeping your phone online<br/>
        Use whatapp on up to 4 linked devices and 1 phone  at he same time.
        </p>
        <Box sx={{padding:"20px 0px 20px 0px"}}>
        <hr/>
        </Box>
      </Box>
    </Box>
  )
}

export default EmptyChat
