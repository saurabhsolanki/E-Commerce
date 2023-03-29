import { Button, Text} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import './CSS/usersList.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser } from '../../../Redux/auth/action'

const UsersList = () => {
const data=useSelector(store=>store.auth.allUser)
const dispatch=useDispatch()
const toast = useToast()

const handleDelete=(id)=>{
console.log(id)
dispatch(deleteUser(id))
toast({
  position: 'top',
  title: 'User deleted Successfully',
  status: 'error',
  duration: 3000,
  isClosable: true,
})
dispatch(getAllUser())
}

useEffect(()=>{
dispatch(getAllUser())
},[])
console.log("all user data",data)

  return (
    <div id='usersListContainer'>
      <h1>All User List</h1>

      <div id="allUserListDiv">
        {
            data.map((e,i)=>(
                <div>
                    <p><strong>Name :-</strong> &nbsp; {e.name}</p>
                    <p><strong>Email :-</strong> &nbsp; {e.email}</p>
                    <p><strong>Phone :-</strong> &nbsp; {e.phone}</p>
                    <p><strong>Password :-</strong> &nbsp; {e.password}</p>
                    <p><strong>Role :-</strong> &nbsp; {e.role}</p>
                    <Button onClick={()=>handleDelete(e._id)}>Delete</Button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default UsersList
