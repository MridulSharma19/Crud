import React,{useState} from 'react'
import axios from 'axios'

const Homepage=()=>{
    const [info,setInfo] = useState({firstName:'',lastName:'',mobileNumber:'',adhaar:'',address:''})
    const {firstName,lastName,address,adhaar,mobileNumber}  = info
    const handleChange = event => {
        const { name, value } = event.target;
    
        setInfo({...info, [name]: value });
      };
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (address.length===0){
            return alert('Invalid address')
        }
        if (lastName.length===0){
            return alert('Invalid last name')
        }
        if (firstName.length===0){
            return alert('Invalid First name')
        }
        if (mobileNumber.length!==10){
            return alert('Invalid Mobile number')
        }
        if (adhaar.length!==16){
            return alert('Invalid adhaar number')
        }
        try{
        await axios.post('/info', info)
         }catch (err){
             console.log(err)
         }
        setInfo({firstName:'',lastName:'',mobileNumber:'',adhaar:'',address:''})
        

        
    }


    return(
        <div className="homepage" >
            <h1 >Please enter your details </h1>
            <form onSubmit={handleSubmit} style={{ marginTop:'5%',width:'100%', display:'flex', flexDirection:'column' , alignItems:'center'}} >
                <input type="text" name='firstName'style={{ width:'40%', margin:'5px'}} placeholder='First Name' value={firstName} onChange={handleChange} /> 
                <input type="text" name='lastName'style={{ width:'40%', margin:'5px'}} placeholder='Last Name' value={lastName} onChange={handleChange} /> 
                <input type="text" name='address' style={{ width:'40%', margin:'5px'}} placeholder='Address' value={address} onChange={handleChange} /> 
                <input type='number' name='mobileNumber' style={{ width:'40%', margin:'5px'}} placeholder='Mobile Number' value={mobileNumber} onChange={handleChange} /> 
                <input type="number" name='adhaar' style={{ width:'40%', margin:'5px'}} placeholder='Aadhaar' value={adhaar} onChange={handleChange} /> 
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default Homepage