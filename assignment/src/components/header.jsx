import React from 'react'
import {Link} from  'react-router-dom'
const Header=()=>{
 return (
     <div className="header" style={{display:'flex',flexDirection:'row'}}>
         <Link style={{textDecoration:"none", color:'black', marginRight:'15px',alignSelf:'flex-end'}} to="/"><h2>Database Webapp</h2></Link> 
         <Link style={{ color:'grey', marginRight:'15px',alignSelf:'flex-end'}} to='/admin'><h3>Admin</h3> </Link>

     </div>
 )
}

export default Header