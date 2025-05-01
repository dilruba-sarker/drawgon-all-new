import React, { use, useState } from 'react';
import { AuthContext } from '../../components/Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const Signup = () => {

  const {createUser ,user,setUser,updateUser}=use(AuthContext)

  const navigate=useNavigate()
const [success,setSuccess]=useState(false)
const [error,setError]=useState('')
const [showPassword,setShowPassword]=useState(false)
  const handleSubmit=e=>{
    setError('')
    setSuccess('')
    e.preventDefault()
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const terms=e.target.terms.checked;
    if(!terms){
      setError('Accept all terms and conditions')
      return
    }
    const regex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const varify=regex.test(password)
    if(!varify){
      setError('You have to set one uppercase ,lowerCase,and special sign')
      return
    }

    console.log(name,photo,email,password,terms)
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      setSuccess(true)
      
      navigate('/')
      updateUser({displayName:name,photoURL:photo})
      .then(setUser({...result.user,displayName:name,photoURL:photo}))
      .catch(err=>{
        setError(err.message)
      })

    })
    .catch(err=>{
      console.log(err.message);
      setError(err.message)
    })

  

  }


    return (
        <div>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          {/* name */}
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="name" />
          {/* poto */}
          <label className="label">Photo Url</label>
          <input type="text" name="photo" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
         
          <input type=
          {showPassword?"text": "password"}
          name="password" className="input" placeholder="Password" />

          <button   type="button" onClick={()=>setShowPassword(!showPassword)} className=' relative right-6'>
            {showPassword?<FaEyeSlash />:<FaRegEye />}
            </button>
            <input type="checkbox" defaultChecked className="checkbox" name='terms' />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign up</button>
          <p>{success&& <span className='text-green-500 text-xl'>Sign up sucessfully Done !</span>}</p>
          <p>{error&& <span className='text-red-500 text-xl'>{error}</span>}</p>
          <p>If Already SignUp <Link to='/login' className="btn btn-accent">Log in</Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;