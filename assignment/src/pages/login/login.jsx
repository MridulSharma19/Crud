import React,{useState} from 'react'

import axios from 'axios'


const Login=({setAuth,history})=>{
    const[credentials,setCredentials]=useState({email:'',password:''})
    const {email,password} = credentials
    const handleSubmit = async (event) => {
        event.preventDefault();
       try { const a =await axios.post('/login',credentials)
        if (a.status==200){
            setAuth(true)}
        
      }catch(err){
          alert('login failed')
            
    }}
      
    
      const handleChange = event => {
        const { value, name } = event.target;
    
        setCredentials({...credentials, [name]: value });
      };
    return(
        <div className="admin">
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}  style={{display:'flex' ,marginTop:'5%', flexDirection:"column",alignItems:'center'}}>
                <input type="email" style={{width:'20%', margin:'10px'}} name='email' placeholder='Email' value={email} onChange={handleChange} />
                <input type="password" style={{width:'20%', margin:'10px'}} name='password' placeholder='Password' value={password} onChange={handleChange} /> 
                <button type="submit" >Login</button> 
                </form>      

        </div>
    )
}

export default Login