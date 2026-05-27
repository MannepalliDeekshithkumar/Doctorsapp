import { useEffect } from "react"
import { useState } from "react"
import Doctorcard from "./Doctorcard"


function Home({newdoctor}) {

    let [doctors,setDoctors]=useState([])
    let [search,setSearch]=useState('')
    let [specialization,setSpecialization]=useState('')

     function fetchdata(){
      
     let data = [
                {
                    id: 1,
                    name: "Kanna",
                    age: 23,
                    gender: "Male",
                    specialization: "Muscles",
                    salary: 7000000
                },
                {
                    id: 2,
                    name: "Geethu",
                    age: 23,
                    gender: "female",
                    specialization: "Bones",
                    salary: 4000000
                },
                {
                    id: 3,
                    name: "Anu",
                    age: 25,
                    gender: "Female",
                    specialization: "Heart",
                    salary: 5000000
                }
            ]
         
            setDoctors(data)

     }
    useEffect(()=>{
    fetchdata()
    },[])

    useEffect(()=>{
        if(newdoctor){
            setDoctors((prev)=>[...prev,newdoctor])
        }
        console.log(search,specialization)

    },[newdoctor])

    const filterdata=doctors.filter((val)=>{
        console.log()
        return (val.name.toLowerCase().includes(search)
        &&
        (specialization=="" || specialization==val.specialization)
    )
    })
  return (
   <div>
    <div className='filters'>
    <input type="text" value={search} placeholder='search your doctor'
    onChange={(e)=>setSearch(e.target.value)}  className='textfield'/>

    <select name="" id="" value={specialization}
    onChange={(e)=>setSpecialization(e.target.value)}>
        <option value="Muslces">muscles</option>
        <option value="Heart">heart</option>
        <option value="Bones">bones</option>
    </select>
    </div>
     <div  className='doctorcontainer'>
        {filterdata.length>0?filterdata.map((val)=>(
            <Doctorcard key={val.id} name={val.name} gender={val.gender} specialization={val.specialization}/>
        )): <h2>no doctors found</h2>}
    </div>
   </div>
  )
}

export default Home