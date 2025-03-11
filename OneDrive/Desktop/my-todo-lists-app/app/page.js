"use client"
import React, {useState} from 'react';

const page = () => {
  const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask,setMainTask] = useState([])

    const submitHandler = (e) =>{
      e.preventDefault()
      // console.log(title)
      // console.log(desc)
      setMainTask([...mainTask, {title,desc}])
      settitle("")
      setdesc("")
      console.log(mainTask);
      
    };

     const deleteHandler = (i)=>{
      let copyTask = [...mainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)
     }

    let renderTask = <h2 className='font-semibold text-2xl text-center'>No task available</h2>

    if(mainTask.length>0){
      renderTask = mainTask.map((t,i)=>{
        return  <li key={i} className='flex items-center justify-center'>
        <div className='flex justify-between mb-5 w-2/3'>
       <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
          <button 
          onClick={()=>{
            deleteHandler(i)
          }
          }
          className='bg-red-500 text-white rounded-xl px-2 py-3 font-bold'>Delete</button>
          </div>
          </li>
        
     })
    }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-center text-5xl font-bold '>Ankit's todo List</h1>
      <div className='flex items-center justify-center py-16'>
      <form className='' onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-2 border-gray-950 m-4 px-3 py-2' placeholder='Enter your task title'
        value = {title}
        onChange = {(e)=>{
          settitle(e.target.value)
        }}
        />
        <input type='text' className='text-2xl border-2 border-gray-950 m-4 px-3 py-2' placeholder='Enter your Description'
        value = {desc}
        onChange = {(e)=>{
          setdesc(e.target.value)
        }}
        />
        <button className='bg-black text-white px-4 py-3 rounded-lg font-bold m-4'>Add Task</button>
      </form>
      </div>

      <hr />
      <div className='p-6 bg-slate-300'>
        <ul>
        {renderTask}
        </ul>
      </div>
    </>
  );
}

export default page;
