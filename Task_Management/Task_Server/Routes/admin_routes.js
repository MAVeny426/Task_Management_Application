import { Router } from "express";
import mongoose from "mongoose";

const adminRoute=Router();

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','in-progress','completed'],
        default:'pending'
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'medium'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Task=mongoose.model('TaskDetails',taskSchema);

adminRoute.post('/addtask',async(req,res)=>
    {
        const {title,description,status,priority}=req.body;
        const taskexist=await Task.findOne({title:title})
            if(taskexist)
                {
                    console.log("Task already exist") 
                }
                else  
                {
                    const newtask = new Task({
                        title:title,
                        description:description,
                        status:status,
                        priority,priority
                    });
                    console.log(newtask)
                await newtask.save();
                res.send({message:"Task added susccessfully Successfully"})
                }
})  

adminRoute.delete('/deletetask',async(req,res)=>
    {
        const newtask=req.params.body;
        
        const value =  await Task.findOne({title:title})
                  if(value)
                  {
                      await Task.findOneAndDelete({title:title});
                      res.send(`Service ${title} has been deleted successfully.`);
                  }
                  else
                  {
                      res.send('Task  not found !');
                  }
})

adminRoute.get('/status',async(req,res)=>{
    
    const getstatus=req.params.body;
    const statusvalue = await Task.find({status:getstatus})
    if(statusvalue)
    {
        res.send(statusvalue);
    }
    else
    {
        res.send('Empty')
    }
})

adminRoute.get('/priority',async(req,res)=>{

    const getpriority=req.params.body;
    const priorityvalue = await Task.find({priority:getpriority})
    if(priorityvalue)
    {
        res.send(priorityvalue);
    }
    else
    {
        res.send('Empty')
    }

})

export {adminRoute}