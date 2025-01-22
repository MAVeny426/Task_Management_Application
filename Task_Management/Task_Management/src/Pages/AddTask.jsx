import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const AddTask = () => {

    const [title,settitle] = useState('');
    const [description,setdescription] = useState('');
    const [status,setstatus] = useState('');
    const [priority,setpriority] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addtask = {
            title,
            description,
            status,
            priority
        };
        const res= await fetch('/api/addtask',{
          method:'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body:JSON.stringify(addtask),
                    credentials:'include',
        })
        if(res.ok){
          const data=await res.json();
          alert('Task Added Successfully')
          navigate('/');
      }else{
          alert('Please check your credentials')
      }
      };
  return (
   <>
    <p>Task Management System</p>
    <form action="" onSubmit={handleSubmit} className='mt-12 ml-12 p-6 '>
        <div className=''>
        <p className='text-3xl text-center'>Add Task</p>
        <label className='text-xl' htmlFor="">Title : </label>
        <input className='text-xl' type="text" id="serviceName"
            value={title}
            onChange={(e) => settitle(e.target.value)} 
            placeholder='Enter the title'/><br></br>

        <label className='text-xl' htmlFor="">Description : </label>
        <input className='text-xl' type="text" 
        id="description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        placeholder='Enter the Description'/><br/>

        <label className='text-xl' htmlFor="">Status : </label>
        <input className='text-xl' type="text" 
        id="status"
        value={status}
        onChange={(e) => setstatus(e.target.value)}
        placeholder='Enter the Status'/><br/>
        <label className='text-xl' htmlFor="">Priority : </label>
        <input className='text-xl' type="text" 
        id="priority"
        value={priority}
        onChange={(e) => setpriority(e.target.value)}
        placeholder='Enter the Priority'/><br/>
        <button className='text-xl'>Submit</button>
        </div>
    </form>
   </>
  )
}

export default AddTask