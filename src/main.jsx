import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import { userSlice } from './feature/User.js'
import userReducer from "./feature/User.js" 


//configureStore take a property call reducer
//reducer property contain all the reducer that our project have

const store = configureStore({
  reducer:{
    //wehere our reducer will be called
    users: userReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
