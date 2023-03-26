import {createSlice, createStore} from "@reduxjs/toolkit";
import data from "../../src/data"

const initialState = {value: data.en}
export const dataLan = createSlice({
    name: "dataLan",
    initialState,
    reducers: {
        english: (state)=>{
            state.value = data.en
        },
        arabic: (state)=>{
            state.value = data.ar
        }
    }
})

export const {english, arabic} = dataLan.actions;
const store = createStore(dataLan.reducer);
export default store;
