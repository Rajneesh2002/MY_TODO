import axios from "axios"
import { useState } from "react"
import Popup from "./Popup"
import db_url from '../constants/Constants.js'

// eslint-disable-next-line react/prop-types
function Todo({todo,id,setisUpdated}) {

    const deleteTodo = () => {
       
        axios.delete(`${db_url}/delete/${id}`)
        .then(res=>{
            console.log(res.data)
            setisUpdated(prev=>!prev)
        })
        .catch(err=> console.log(err))
    }

    const [text,settext]=useState("")
    const [open,setopen] = useState(false)

    const editTodo = () => {
      setopen(prev=>!prev)
      settext(todo)
    }

  return (
    <div className='flex items-center justify-center text-xl m-5'>
    <div className='bg-orange-400 w-[40%] flex'>
      <h2 className='font-semibold p-1 w-[60%] mx-2'>{todo}</h2>
    </div>
    <div className='mx-2'>
      <button className='bg-lime-600 rounded p-1 px-2 mx-2 hover:bg-lime-300' onClick={deleteTodo}>Delete todo</button>
      <button className='bg-red-600 rounded p-1 px-2 mx-2 hover:bg-red-300' onClick={editTodo}>Edit todo</button>
    </div>
    {
      open && 
      <Popup 
        text={text}
        setopen={setopen}
        id={id}
        setisUpdated={setisUpdated}
      />
    }
    </div>
  )
}

export default Todo
