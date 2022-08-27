import { createSlice } from "@reduxjs/toolkit";
 
import appApi from "../services/appApi";

//app Api

const initialState =null
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{}

})

export default userSlice.reducer;