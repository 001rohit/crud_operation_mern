import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUser = () => {
  
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    age:"",
  })
  const navigate = useNavigate()
  const handleChange =(e)=>{
      const {name,value} = e.target
    //  setUserData([...userData,e.target.value])
    setUserData((prev)=>({
      ...prev,[name]:value,
    }))
  }
  const submitHandle =(e)=>{
    const  {name,email,age} = userData
    console.log(name,email,age)
    e.preventDefault()
       axios.post("http://localhost:8000/createUser",{name,email,age})
       .then(result=>{console.log(result)
      navigate('/')}).catch(err=>console.log(err))
    console.log(userData)
  }
  return (
    <div>
         <form onSubmit={submitHandle}>
         <h2>Add User</h2>     
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder='enter name' id="name" name='name' value={userData.name}  onChange={handleChange}/>
              </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" placeholder='enter name' id="email" name='email' value={userData.email}  onChange={handleChange}/>
              </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input type="text" placeholder='enter name' id="age" name='age'  value={userData.age}  onChange={handleChange}/>
              </div>
              <button type='submit'>submit</button>
          </form>  
    </div>
  )
}

export default CreateUser
