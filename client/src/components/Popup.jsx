import { useState } from 'react'
import axios from "axios"
import db_url from '../constants/Constants.js'

// eslint-disable-next-line react/prop-types
function Popup({text,setopen,id,setisUpdated}) {
    
    const [editedvalue,seteditedvalue] = useState(text)

    const handle = () =>{
        axios.put(`${db_url}/update/${id}`,{item:editedvalue})
        .then((res)=>{
          console.log(res.data)
          setopen(prev=>!prev)
          seteditedvalue('')
          setisUpdated(prev=>!prev)
        })
        .catch((err)=> console.log(err))
    }

  return (
    <div className='flex'>
      
      <input type="text" className='border-4 font-semibold p-1 border-green-600' value={editedvalue} onChange={(e)=>seteditedvalue(e.target.value)}/>
      <button className='bg-red-600 rounded p-1 px-2 mx-2 hover:bg-red-300' onClick={handle}>Done</button>
    
    </div>
  )
}

export default Popup
