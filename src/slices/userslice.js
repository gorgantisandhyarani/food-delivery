{/*import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



export let userLogin=createAsyncThunk('loginuser',async(userCredObj)=>{


    let respons=await axios.post("http://localhost:4000/user/login")
})
export const userSlice=createSlice({
    name:'user',
    initialState:{userObj:null,}
})}