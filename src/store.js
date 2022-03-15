import {configurestore} from '@reduxjs/toolkit'
import userSlice from './slice/userSlice' 
let store=configurestore({
    reducer:{
        user:userSlice,
    }
})
export default store