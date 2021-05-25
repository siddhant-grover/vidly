import React, { useState } from 'react';

function Heart(props) {
    const[selected,setSelected]= useState(false)
    return (
        <div>
           { selected?<span style={{cursor:'pointer'}} onClick={()=>{setSelected(false)}}>&#10084;</span> :<span style={{cursor:'pointer'}} onClick={()=>{setSelected(true)}}>&#9829;</span>}
        </div>
    );
}

export default Heart;