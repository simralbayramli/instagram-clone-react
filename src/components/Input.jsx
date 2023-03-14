import { useEffect, useState } from "react"

export default function Input({label, type='text',...props}){
    const[show,setShow]=useState(false)
    const[inputType,setType]=useState(type)
    useEffect(()=>{
        if(show){
            setType('text')
        }
        else if(type === 'password'){
            setType('password')
        }
    },[show]
 )
    return(
        <label className="block relative flex bg-zinc-50  border rounded-xs ">
      <input type={inputType}    required={true} className="outline-none w-full  px-2 h-[38px] peer valid:pt-[10px] text-xs "{...props}></input>
      <small className="absolute top-1/2 left-[9px] text-xs text-gray-400 cursor-text transition-all pointer-events-none -translate-y-1/2 peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
{ type ==='password' && props?.value &&(
    <button type="button" onClick={()=>setShow(show=>!show)} className=" h-full flex items-center">
        {show ? 'hide' : 'show'}
    </button>
)}
      </label>
    )
}