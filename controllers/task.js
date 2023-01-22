const getAllTasks = (req,res)=>{
    res.send("All the tasks");
}

const createTask = (req,res)=>{
    res.send("creating a task");
}

const getATask = (req,res)=>{
    res.send("get a task");
}

const deleteTask = (req,res)=>{
    res.send("deleting a task");
}

const updateTask = (req,res)=>{
    res.send("updating a task");
}

module.exports ={
    getAllTasks,
    createTask,
    getATask,
    updateTask,
    deleteTask
};