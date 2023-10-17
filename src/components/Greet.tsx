import { type } from 'os';
import React from 'react';
type Greet={
    name:string
}

const Greet = (props:Greet) => {
    
  return (
    <div>
<h1>
    wellCome
{
        props.name
} 

      
      you have 10 unread message
</h1>
     
    </div>
  )
}

export default Greet