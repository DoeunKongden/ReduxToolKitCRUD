import { useSelector } from 'react-redux'
import './App.css'
import { addUser, deleteUser, updateUser } from './feature/User'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function App() {

  const dispatch = useDispatch();
  //the use selector function take the state as an argument and return back what ever initial value the current reducer
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState("")
  const [username, setUserame] = useState("")

  const [newName, setNewName] = useState("")
  const [newUsername, setNewUserame] = useState("")



  return (
    <div>
      <div className='addUser'>
        <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name...' />
        <input onChange={(e) => { setUserame(e.target.value) }} type="text" placeholder='Username...' />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name: name, username: username })) }}>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h3>{user.username}</h3>
              <input type="text" placeholder='New name...' onChange={(e) => { setNewName(e.target.value) }} />
              <input type="text" placeholder='New username...' onChange={(e) => { setNewUserame(e.target.value) }} />
              <button onClick={() => { dispatch(updateUser({ id: user.id, name: newName, username: newUsername })) }}>Update User</button>
              <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default App
