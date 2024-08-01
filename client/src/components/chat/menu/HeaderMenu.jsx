import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const HeaderMenu = ({setOpenDrawer}) => {
    const [open,setOpen]=useState(null)
    const handleClose=()=>{
        setOpen(null)
    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget)
    }
  return (
    <div>
        <MoreVertIcon onClick={handleClick}/>
        <Menu
        
        anchorEl={open}
        keepMounted
        open={open}
        getContentAnchorE1={null}
        onClose={handleClose}
        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
       anchorOrigin={{
        vertical:"bottom",
        horizontal:"center"
       }}
      >
        <MenuItem
  onClick={() => {
    handleClose();
    setOpenDrawer(true);
  }}
  sx={{
    fontSize: "14px",
    padding: "10px 60px 5px 24px",
    color: "#4a4a4a"
  }}
>
  Profile
</MenuItem>

        
      </Menu>
      
    </div>
  )
}

export default HeaderMenu
