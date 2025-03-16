'use client'

import React from 'react'
import { useState } from 'react';

interface questionPros {
    option:string[];
    count?:number;
}


const Question : React.FC<questionPros> =({option,count=0}) => {

    const [isChecked, setIsChecked] = useState(false);
  const [countnum, setCountnum] = useState(0);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);

    if (newChecked) {
      setCountnum(prevCountnum => prevCountnum + 1);
    }else{
        setCountnum(prevCountnum => prevCountnum + -1);

    }
    // No else block, so count remains the same when unchecked.
  };



  return (
    <div>
        {option.map((item)=>(
             <div key={item} className='text-blue-950 flex flex-row flex-wrap gap-5 px-10 font-medium text-lg '>
                <input  type="checkbox" onChange={handleCheckboxChange}  />
                <h4>{item}</h4>
             </div>
        ))}

    </div>
  )
}

export default Question