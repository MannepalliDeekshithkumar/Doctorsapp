import React from 'react'

function Doctorcard(props) {
  return (
    <div className='doctorcard'>
        <div>
        <img 
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500" 
          width='100' 
          alt="Doctor"
        />
           +</div>
        <h1>{props.name}</h1>
        <div>{props.specialization}</div>
        <p>{props.gender}</p>

        <button>View More</button>
    </div>
  )
}

export default Doctorcard