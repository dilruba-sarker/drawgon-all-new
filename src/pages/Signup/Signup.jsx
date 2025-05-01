import React, { use, useState } from 'react';
import { AuthContext } from '../../components/Context/AuthContext';

const Signup = () => {

  const {createUser}=use(AuthContext)
const [success,setSuccess]=useState(false)
const [error,setError]=useState('')
  const handleSubmit=e=>{
    setError(' ')
    setError('')
    e.preventDefault()
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(name,photo,email,password)
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      setSuccess(true)
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
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign up</button>
          <p>{success&& <span className='text-green-500 text-xl'>Sign up sucessfully Done !</span>}</p>
          <p>{error&& <span className='text-red-500 text-xl'>{error}</span>}</p>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;