import React from 'react';
import { Drawer } from '@mui/material';
import {Box} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';
const drawerStyle = {
  left: 32,
  top: 9,
  height:"95%",
  width:"33%",
  boxShadow:"none",
  zIndex: 1500,
};

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      sx={{ zIndex: 1500 ,}}
    >
      <Box sx={{display:"flex",backgroundColor:"#06CF9C",color:"white" ,padding:"40px 0px 25px 26px",alignItems:"center"}}>
        <ArrowBackIcon onClick={()=>setOpen(false)} sx={{marginRight:"5%",fontSize:"30"}}/>
        <p className='font-semibold text-xl'>Profile</p>

      </Box>
      <Box>
        <Profile/>
      </Box>

    </Drawer>
  );
};

export default InfoDrawer;
