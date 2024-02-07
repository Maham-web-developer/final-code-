import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [passward, setPassward] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios.post('http://localhost:3000/Registor',{name,email,passward})
    // .then(result=>console.log(result))
    // .catch(err=>console.log(err))
    axios.post("http://localhost:3000/Registor",{name,email,passward})
    .then(res =>{
        console.log(result)
    })
    .catch(err => console.log(err))
  }
  return (
   <>
   <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className='bg-white p-4 rounded w-25'>
      <h3 className='me-5'>Signup Form</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Name</strong></label>
          <input type="text" placeholder='Enter Name' auto-complete='off' name='email' 
          className='form-control rounded-0' onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" placeholder='Enter Email' auto-complete='off' name='email' 
          className='form-control rounded-0'  onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Passward</strong></label>
          <input type="passward" placeholder='Enter Passward' auto-complete='off' name='passward'
           className='form-control rounded-0'  onChange={(e)=>setPassward(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-danger w-100 fw-bold rounded-20'>
          Registor
        </button>
        <div className='d-flex mt-3 mx-4'>
        <p>Already Have an Account </p>
        <Link to="/Login" className='mx-5 text-decoration-none text-dark'> Login</Link> 
        </div>
      
        {/* <button className='btn btn-default border w-100 fw-bold bg-light rounded-10 text-decoration-none'>login</button>  */}
      </form>
    </div>
   </div>
   </>
  )
}

export default Signup