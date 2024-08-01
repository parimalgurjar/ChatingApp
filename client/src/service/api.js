import axios from "axios"
const url="http://localhost:8000"
export const addUser=async (data)=>{
    try{
        await axios.post(`${url}/add`,data)
    }
    catch(err){
        console.log("error in adding user",err.message)
    }
}

export const getUsers=async()=>{
    try{
        let response=await axios.get(`${url}/users`)
        
        return response.data
    }catch(err){
        console.log('error on call getuser api',err.message)
    }
}
export const setConversation=async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data)
    }
    catch(err){
        console.log("error while calling setconversation api",err.message)
    }
}
export const getConversation=async(data)=>{
    try{
       let response= await axios.post(`${url}/conversation/get`,data)
       return response.data
    }
    catch(err){
        console.log('error on getconversation api',err.message)
    }
}
export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (err) {
        console.error("Error in calling newMessage API", err.response ? err.response.data : err.message);
    }
};

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (err) {
        console.log("error in getMessages API", err.message);
        
    }
};
export const uploadFile=async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data)
    }
catch(err){
    console.log("error in upload file",err.message)
}
}
