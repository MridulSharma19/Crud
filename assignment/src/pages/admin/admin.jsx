import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Admin=()=>{
    const [data,setData]=useState()
    const getData=async()=>{
        try{
            const response= await axios.get('/info')
            
            setData(response.data)
        }catch(err){console.log(err)}
    }
    
    useEffect(()=>{
        getData()
    },[])


    return(
        <div className="admin" >
            <table style={{marginTop:"20px" ,marginLeft:'auto',marginRight:'auto',width:'80%'}}>
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>Mobile No.</th>
                    <th>Aadhaar</th>
                </tr>
                </thead>
                <tbody>
                {data?
                data.map(item=>(
                    <tr>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.address}</td>
                        <td>{item.mobileNumber}</td>
                        <td>{item.adhaar}</td>
                    </tr>
                )):null
                }
                </tbody>
            </table>
        </div>
    )
}

export default Admin