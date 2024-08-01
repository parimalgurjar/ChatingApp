import express from 'express'
import { addUser,getUsers } from '../controller/user-controller.js'
import {newConversation} from '../controller/conversation-controller.js'
import { getConversation } from '../controller/conversation-controller.js'
import { newMessage,getMessages } from '../controller/message-controller.js'
import { uploadFile } from '../controller/image-controller.js'
import {getImage } from '../controller/image-controller.js'
import upload from '../utils/upload.js'


const route=express.Router()


route.post('/add',addUser)
route.get('/users',getUsers)
route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversation)
route.post('/message/add',newMessage)
route.get('/message/get/:id', getMessages);
route.post('/file/upload',upload.single('file'),uploadFile)
route.get('/file/:filename',getImage)

route.get('/proxy', async (req, res) => {
    try {
      const { url } = req.query;
      const response = await axios.get(url, { responseType: 'arraybuffer' });
  
      res.set('Content-Type', response.headers['content-type']);
      res.send(response.data);
    } catch (error) {
      res.status(500).send('Error fetching image');
    }
  });
export default route


