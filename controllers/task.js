const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req,res)=>{
    const tasks = await Task.find();
    res.status(200).json({tasks});
})

const createTask = asyncWrapper( async (req,res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
})

const getATask = asyncWrapper(async(req,res) =>{
        const {id: taskID} = req.params;
        const task = await Task.findOne({ _id: taskID});
        if(!task){
            return res.status(404).json({ msg: `No task found with ID: ${taskID}`});
        }
        res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async (req,res)=>{
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID});
        if(!task){
            return res.status(404).json({msg : `No task exists with ID: ${taskID}`});
        }
        res.status(200).json({ msg: "Successfully deleted" });
})

const updateTask = asyncWrapper(async (req,res)=>{
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        });
        if(!task){
            return res.status(404).json({msg: `Cannot find task with ID: ${taskID}`});
        }
        res.status(200).json({ task });
})

module.exports ={
    getAllTasks,
    createTask,
    getATask,
    updateTask,
    deleteTask
};