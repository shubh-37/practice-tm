const Task = require("../models/Task");

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const getATask = async(req,res) =>{
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({ _id: taskID});
        console.log(task);
        if(!task){
            return res.status(404).json({ msg: `No task found with ID: ${taskID}`});
        }
        res.status(200).json({ task });
    }catch(error){
        res.status(500).json({ msg: error});
    }    
}

const deleteTask = async (req,res)=>{
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID});
        if(!task){
            return res.status(404).json({msg : `No task exists with ID: ${taskID}`});
        }
        res.status(200).json({ msg: "Successfully deleted" });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateTask = async (req,res)=>{
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        });
        if(!task){
            return res.status(404).json({msg: `Cannot find task with ID: ${taskID}`});
        }
        res.status(200).json({ task });   
    } catch (error) {
        res.status(500).json({msg: error});
    }



    
}

module.exports ={
    getAllTasks,
    createTask,
    getATask,
    updateTask,
    deleteTask
};