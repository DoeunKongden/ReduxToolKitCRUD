import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeDate"


//Creating slice part will allow us to be able to create all the reducer and the actions
//create slice takes in an object
export const userSlice = createSlice({
    name: "users", //name of this slice
    initialState: { value: UsersData },//stores the initial values of the user states

    //reducers are different function that we can call to provide some action to our state
    //CRUD example : Create update delete those are the fucntion or action that will be use in the reducer
    reducers: {
        //state argument here is where we will access the current values of the state
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.name = action.payload.name
                    user.username = action.payload.username
                }
            })
        }
    }
})

export const { addUser, deleteUser, updateUser } = userSlice.actions
export default userSlice.reducer