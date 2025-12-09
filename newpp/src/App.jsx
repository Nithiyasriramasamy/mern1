import { useState, useEffect } from "react";

export default function App() {
  const [name,setName]=useState("");
  const [sname,getIte]=useState("");

  const handleSave=()=>{
   const user ={
    name:name,
    role:"Student"
   };
   localStorage.setItem("name",JSON.stringify(user));
  getIte(localStorage.getItem("name"));
  }
  useEffect(()=>{
    const item=localStorage.getItem("name");
    if(item){
      const user=JSON.parse(item);
      setName(user.name);
    }
  },[]);
  return (
    <>
      <input type="text" placeholder ="name" 
      value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <p>{localStorage.getItem("name")}</p>
      
    </>
  );
}