import React, { useState } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'

const Items = (props) => {
    const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)} className={` w-full border-b p-3 flex justify-between items-center cursor-pointer select-none`}>
        <div>
            <span className='pr-2 text-[14px] text-slate-400'>
                {props.time}
            </span>
            <span className={` ${done === true ? 'line-through' : ''} text-[20px]`}>
              {props.item}
            </span>
        </div>
        <div onClick={ () => props.removeHandler(props.id)}><AiTwotoneDelete className='text-[#e74c3c]'/></div>
    </div>
  )
}

export default Items