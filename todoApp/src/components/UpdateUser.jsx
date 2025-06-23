import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const UpdateUser = () => {
    // const [userUpdate,setUserUpdate] = useState({
    //   name:"",
    //   email:"",
    //   age:"",
    // })
    const [name,setName] = useState('')
    const [email,setEmaill]= useState('')
    const [age,setAge] = useState('')
    const {id} = useParams()
  const navigate = useNavigate()

  
  // const update =(e)=>{
  //   e.preventDefault()
    
  // }
  const update =(e)=>{
    e.preventDefault();

    // const {name,email,age}=userUpdate
    // console.log(name,email,age)
    // axios.put("http://localhost:8000/updateUser/"+id,{name,email,age})
    // .then(result=>{
    //   console.log(result)
    //   navigate('/')
    // console.log(name,email,age)
    // }).catch(err=>console.log(err))
           axios.put("http://localhost:8000/updateUser/"+id,{name,email,age})
           .then(result=>{console.log(result);
            alert(result.data);
          navigate('/')}).catch(err=>console.log(err))
        // console.log(userData)
  }

  // useEffect(()=>{
  // },[])
  useEffect(()=>{
    // const {name,email,age} = userUpdate
    // console.log(name,email,age)
    axios.get("http://localhost:8000/getUser/"+id).then(result=>{
      console.log(result);
      setName(result.data.name);
      setEmaill(result.data.email);
      setAge(result.data.age);
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
          <form onSubmit={update}>
          <h1>Update user</h1>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder='enter name' id="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" placeholder='enter name' id="email"  value={email} onChange={(e)=>setEmaill(e.target.value)}/>
              </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input type="text" placeholder='enter name' id="age"   value={age} onChange={(e)=>setAge(e.target.value)}/>
              </div>
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default UpdateUser
