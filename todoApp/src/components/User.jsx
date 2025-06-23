import React,{useState,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
const User = () => {
    // const navigate = useNavigate()
    const [user,setUser] =useState([])
    // const updateUser =()=>{
    //     navigate('/update')
    // }
    useEffect(()=>{
        axios.get("http://localhost:8000/").then(result=>{
            console.log(result.data)
            // const {name,email,age} = result.data
            setUser(result.data)
        }
).catch(err=>console.log(err))
    },[])

    const deleteUser = (id)=>{
        axios.delete('http://localhost:8000/deleteUser/'+id).then(res=>{
            console.log(res); 
            window.location.reload()}).catch(err =>console.log(err))
        // console.log(id)
        // alert(id)
    }
  return (
    <div>
       <div>
        <Link to="/create">
        <button >Add user</button>
        </Link>
        </div>
      <h1>user page</h1>
      <table>
        <thead>
            <tr>
                <th>so.no.</th>
                <th>name</th>
                <th>email</th>
                <th>age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {user.map((elem,i)=>{
                return(
                    <>
                    <tr>
                        <td>{i+1}</td>
                        <td>{elem.name}</td>
                        <td>{elem.email}</td>
                        <td>{elem.age}</td>
                        <td>
                            <Link to={`/update/ ${elem._id}`}>
                            <button >update</button>
                            </Link>
                            <button onClick={()=>deleteUser(elem._id)}>delate</button>
                        </td>
                    </tr> 
                    </>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default User
