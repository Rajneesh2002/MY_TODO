import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import axios from 'axios'
import db_url from './constants/Constants'
import Footer from './components/Footer'

function App() {

  const [input,setinput]=useState('')
  
  const [todos,settodos] = useState([])

  const [isUpdated,setisUpdated] = useState(false)

  useEffect(() => {
    axios.get(`${db_url}/get`)
    .then(
      (res) => {
        //console.log(res.data)
        settodos(res.data)
      }
      
    )
    .catch((err)=> console.log(err))
  }, [isUpdated])
  
  const saveTodo = () => {
    axios.post(`${db_url}/save`, {item:input})
    .then((res)=>{
      console.log(res.data)
      setisUpdated(prev=>!prev)
      setinput('')
    })
    .catch((err)=> console.log(err))
  }

 
  return (
    <>
      <div className='text-3xl font-medium text-center'>

        <h1 className='p-3 font-bold'>MY FAVOURITE TODO APP</h1>

        <div className='justify-center'>

          <input type="text"
           placeholder='Add your Todo here...'
           value={input} 
           onChange={(e)=>setinput(e.target.value)} 
           className='border-4 m-3 p-1 border-green-600'/>

          <button className='bg-blue-400 rounded p-3 hover:bg-blue-300'
          onClick={saveTodo}
          >ADD TODO</button>

        </div>
      </div>

      <div className='justify-center m-2'>

        {
          todos.map(items=>

            <Todo 
            key={items._id}
            todo={items.item} 
            id={items._id}
            setisUpdated={setisUpdated}
            />
          )
        }
        
      </div>
      <Footer/>
    </>
  )
}

export default App
