import React from 'react'
import tick from "../assets/tick.png"
// import deleteBtn from "../assets/delete.png"
import notTick from "../assets/not_tick.png"

const TodoItem = (props) => {
    const{text,itemsLength,id,isChecked,deleteList,toggle}=props;
    
  return (<>
    <div className="item-container">
    <div onClick={()=>{toggle(id)}} className="inner-item">
        <img  className='tick' src={isChecked ? tick : notTick} alt="tickImg" />
         <p className={`para ${isChecked ? 'lineThrough color-dim':''}`}>{text}</p>
         </div>
         <div className="trash">
         <i  className="fa-regular fa-2xl fa-trash-can deletebtn" onClick={()=>{deleteList(id)}}></i>
            {/* <img onClick={()=>{deleteList(id)}} className='deletebtn' src={deleteBtn} alt="deleteImg" /> */}
         </div>
        
   </div>
  </>
  )}

export default TodoItem