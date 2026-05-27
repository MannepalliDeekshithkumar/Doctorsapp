import React, { useState } from 'react'

function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: '',
    age: '',
    gender: '',
    specialization: ''
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setDoctor(prev => ({
    ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    if (!doctor.name ||!doctor.age ||!doctor.gender ||!doctor.specialization) {
      alert("Please fill all fields")
      return
    }

    console.log("Doctor Data:", doctor)
    alert("Doctor Added Successfully")
    setSubmitted(true)
    
    // Reset form after 2 sec
    setTimeout(() => {
      setDoctor({ name: '', age: '', gender: '', specialization: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add Doctor</h1>
      
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          
          <input 
            type="text" 
            name="name"
            placeholder="Enter doctor name" 
            value={doctor.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input 
            type="number" 
            name="age"
            placeholder="Enter age" 
            value={doctor.age}
            onChange={handleChange}
            style={styles.input}
            min="22"
            max="80"
            required
          />

          <input 
            type="text" 
            name="specialization"
            placeholder="Enter specialization" 
            value={doctor.specialization}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <select 
            name="gender" 
            value={doctor.gender}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>

          <button 
            type="submit" 
            style={submitted? styles.buttonSuccess : styles.button}
            disabled={submitted}
          >
            {submitted? "Added ✓" : "Add Doctor"}
          </button>

        </form>
      </div>
    </div>
  )
}

// Basic inline styles so it looks decent without CSS files
const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px'
  },
  formContainer: {
    backgroundColor: '#f5f5f5',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none'
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  buttonSuccess: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
    fontWeight: 'bold'
  }
}

export default AddDoctor