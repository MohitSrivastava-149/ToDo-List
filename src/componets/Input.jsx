import React, {useRef} from 'react'
import { FaPlus } from 'react-icons/fa6'

const Input = (props) => {
  const inputBox = useRef();
  return (
    <div className='p-3 flex justify-between'>
      <input type='text' className='p-3 w-[90%] border border-slate-400 rounded-2xl focus:outline-none' placeholder='Enter your task!!' ref={inputBox} />
      <div className='cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-2xl flex justify-center items-center' onClick={() => {
        props.handler(inputBox.current.value)
        inputBox.current.value = "";
      } }> <FaPlus /> </div>
    </div>
  )
}

export default Input