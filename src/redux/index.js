import { createSlice } from "@reduxjs/toolkit";


export const comSlice = createSlice({
    name: "com",
    initialState: {
        question: "",
        answer: ""
    },
    reducers: {
        sendQuestion: (state, action) => {
            state.question = action.payload
        },
        sendAnswer: (state, action) => {
            state.answer = action.payload
        }
    }
})

export const { sendQuestion, sendAnswer } = comSlice.actions
export const question = (state) => state.com?.question
export const answer = (state) => state.com?.answer
export default comSlice.reducer