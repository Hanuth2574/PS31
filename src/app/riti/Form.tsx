"use client"
import React from 'react'
import { useState } from 'react'
function Form() {
  const [First, setFirst] = useState("");
  const [Age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [Goal, setGoal] = useState("");
  const [target_weight, setTarget] = useState("");
  const [Experience, setExperience] = useState("")
  const [form,setForm]=useState(true)
  async function Getoutput() {
    const res = await fetch("https://keen-marten-tops.ngrok-free.app/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Correct headers format
      },
      body: JSON.stringify({
        age: Age,
        sex: sex,
        height: height,
        weight: weight,
        goal:Goal,
        target_weight: target_weight,
        experience: Experience
      })
    });
  
    const data = await res.json(); // Await response and parse JSON
    console.log(data);
    function removeBeforeResponse(text:any) {
      const index = text.indexOf("Response"); // Find the position of the word "Response"
      if (index !== -1) {
        return text.substring(index); // Return the substring starting from "Response"
      }
      return text; // If "Response" is not found, return the original text
    }
    const response=removeBeforeResponse(data["output"]);
    setForm(false);
    setFirst(response)
    
     // Output the response
  }
  
  return (
    <section>
        {form?(
          <div className="flex flex-col gap-4  items-center">
          <div className=' w-80'  >Age</div>
          <input onChange={(e)=>{setAge(e.target.value)}} className='w-80 bg-transparent border border-orange-400 h-6 p-5' placeholder='p1'/>
          
          <div className=' w-80'>sex</div>
          <input onChange={(e)=>{setSex(e.target.value)}} className='w-80 bg-transparent border border-orange-400 h-6 p-5' placeholder='p1'/>
          
          <div className=' w-80'>height</div>
          <input onChange={(e)=>{setHeight(e.target.value)}} className='w-80 bg-transparent border border-orange-400 h-6 p-5' placeholder='p1'/>
          
          <div className=' w-80'>weight</div>
          <input onChange={(e)=>{setWeight(e.target.value)}} className='w-80 bg-transparent border border-orange-400 h-6 p-5' placeholder='p1'/>
          
          <div className=' w-80'>goal</div>
          <input onChange={(e)=>{setGoal(e.target.value)}} className='w-80 bg-transparent border border-orange-400 h-6 p-5' placeholder='p1'/>
          
          <div className=' w-80'>target weight</div>
          <input onChange={(e)=>{setTarget(e.target.value)}} className='w-80 bg-transparent border border-orange-400 h-6 p-5' placeholder='p1'/>
          
          <div className=' w-80'>experinece</div>
          <input onChange={(e)=>{setExperience(e.target.value)}} className='w-80 bg-transparent border border-orange-400 h-6 p-5' placeholder='p1'/>
          <button className='bg-orange-500 p-5 text-center rounded-md mb-5' onClick={()=>{Getoutput()}} >Clicke me</button>
          

      </div>
        ):(
          <div className='w-96 '>
          
            <pre className='font-sans border border-orange-400 p-10 absolute -translate-x-1/2 left-1/2 '>
          {First}
          </pre>
          </div>
        )}
       
    </section>
  )
}

export default Form