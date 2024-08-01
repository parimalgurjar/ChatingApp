
import React from 'react'
import { useState,useEffect,useContext } from 'react'
import { getUsers } from '../../../service/api'
import { Box } from '@mui/material'
import Conversation from './Conversation'
import {AccountContext} from '../../context/AccountProvider'
const Conversations = ({text}) => {
    const [users,setUsers]=useState([])
    const {account,socket,setActiveUsers}=useContext(AccountContext)
    useEffect(()=>{
        const fetchData=async()=>{
            let response=await getUsers()
            const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData()
    }, [text])

    useEffect(()=>{
      socket.current.emit('addUsers',account)
      socket.current.on('getUsers',users=>{
        setActiveUsers(users)

      })

    },[account])

  return (
    <Box sx={{height:"75vh",overflow:"overlay"}}>
       {users.map(user => (
       user.sub !== account.sub &&
       <>
                <Conversation user={user}/> 
                <hr style={{marginLeft:"90px"}}/>
            </>
            ))}
    </Box>
  )
}

export default Conversations
