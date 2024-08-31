import React, { useEffect, useRef, useState } from 'react'
import todo_icon from "../assets/todo_icon.png"
import TodoItem from './TodoItem'
import emoji from "../assets/white_frowning_face.png"

const Todo = () => {
    const[userData,setUserData]=useState(localStorage.getItem("Todos") ? JSON.parse(localStorage.getItem("Todos")):[])
    const inputRef=useRef()
   console.log(userData)

    // --------{adding-item}------------
    function addTodo(e){
        const inputText = inputRef.current.value.trim();
       
        if(inputText == ''){
            return null;
     }
     if(e.key==="Enter" || e.target.name === "Button"){
        console.log(e.target.name)
        const todoValue = {
            id:Date.now(),
            text:inputText,
            isChecked:false
        }
        setUserData((prev)=>[...prev,todoValue])
        inputRef.current.value = '';
    }
     }
     
        

    // ------deleting-list-----

    function deleteList(id){
        setUserData((prevTodo)=>{
            return prevTodo.filter((todo)=>todo.id !== id)
        })
        
    }

    // -------toggle-----
    function toggle(id){
         setUserData((prev)=>{
            return prev.map((todo)=>{
                 if(todo.id===id){
                     return {...todo,isChecked:!todo.isChecked}
                }
                return todo
              })
         })
    }
    
    useEffect(()=>{
        localStorage.setItem('Todos',JSON.stringify(userData))
    },[userData])
    

  return (
    <div className="todo-container">
        <div className="head-contain">
        <img  className ='todo-icon'src={todo_icon} alt="todo-img" />
        <h2 className='To-Do-List'>To-Do List <span style={{fontSize:'12px',border:"2px solid black",borderRadius:"100px",padding:" 5px 10px",position:"absolute",top:"23px",right:"98px" }}>{userData.length}</span></h2>
        </div>

{/* -------input-section------- */}

       <div className="input-container">
          <input ref={inputRef} onKeyUp={(e)=>addTodo(e)} className="input-box" type="text"
          placeholder='Add your Task . . .'
           />
           <button  name="Button" onClick={(e)=>addTodo(e)} className='btn'>Add +</button>
       </div>

       {/* -------input-section------- */}

        {userData.length?<div className="todo-items">
            {userData.map((item,index)=>{
               return <TodoItem text={item.text} key={index} id={item.id} isChecked={item.isChecked} toggle={toggle} deleteList={deleteList}/>
               
            })}
            
        </div>:<div className='empty-content'><p style={{textAlign:"center" ,marginTop:"60px", fontSize:"20px", fontWeight:'500'}}><img className='emoji' src={emoji} alt="" />Your List is Empty</p></div>}
        
    </div>
  )
}

export default Todo