import React from 'react'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
const Profile = () => {
    const {account}=useContext(AccountContext)
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"center",paddingTop:"25px",paddingBottom:"25px",backgroundColor:"#E9EAEC"}}>
    <img style={{height:"12rem",width:"12rem"}}
  className="object-cover object-top rounded-full "
  src={account.picture}
  alt=""
/>

    </Box>
    <Box sx={{padding:"15px 0px 15px 13px", marginTop:"12px",width:"100%"}}>
      <p style={{color:"#046958",fontSize:"14px"}}>Your name</p>
      <p className='pt-4'>{account.name}</p>
    </Box>
    <Box sx={{padding:"15px 0px 15px 13px", marginTop:"12px",width:"100%",backgroundColor:"#E9EAEC"}}>
     <p style={{fontSize:"14px",lineHeight:"24px",color:"#7B7B7B"}}>This is not your user name or pin. this name will be visible to your whatsapp contacts</p>
    </Box>
    <Box sx={{padding:"15px 0px 15px 13px", marginTop:"12px",width:"100%"}}>
      <p style={{color:"#046958",fontSize:"14px"}}>About</p>
      <p className='pt-4'>Eat🍕 Sleep😴 Code💻 Repeat📈</p>
    </Box>
    </>
  )
}

export default Profile
