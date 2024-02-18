import { createSlice } from "@reduxjs/toolkit";


export const comSlice = createSlice({
    name: "Com",
    initialState: {
        question: "",
        answer: ""
    },
    reducers: {
        sendQuestion : (state, action) => {
            state.question = action.question
        },
        sendAnswer : (state, action) => {
            state.answer = action.payload
        }
    }
})