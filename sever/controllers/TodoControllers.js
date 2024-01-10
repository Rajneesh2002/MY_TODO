import TodoModel from "../models/TodoModel.js";

const getTodos = async (req,res) => {
    const todos = await TodoModel.find();
    res.send(todos)
}

const saveTodos = (req,res) => {

    const {item} = req.body 
    
    TodoModel.create({item})
    .then(data => {
        console.log("Saved Successfully")
        res.send(data)
    })
    .catch((err)=> console.log(err))
}

const updateTodos = async (req,res) => {
    const {item} = req.body
    const {id}= req.params

    await TodoModel.findByIdAndUpdate(id,{item})

    .then(data=>{
        console.log("Updated Successfully!!!")
        res.send(data)
    }
    )
    .catch((err)=>console.log(err))
}

const deleteTodos = async (req,res) =>{
    
    const {id}= req.params
    
    try {

        const todo = await TodoModel.findByIdAndDelete(id)
        if(!todo)
        {
            res.send("Todo not Found")
        }
        console.log("Deleted Successfully!!!")
        res.status(200).send("done")
        
    } catch (error) {
        console.log(error)
    }
    
}


export {
    getTodos,
    saveTodos,
    updateTodos,
    deleteTodos
}