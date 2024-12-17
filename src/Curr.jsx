import React, { useState } from 'react'
import './Select.css'
const Curr = ({curr,name,setname}) => {
    console.log(curr);
    
  return (
    <div className='select'>
      <select  value={name} onChange={(e)=>setname(e.target.value)}>
        {curr.map((indikey)=> 
                <option value={indikey}>{indikey}</option>)
        }
      </select>
    </div>
  )
}

export default Curr
