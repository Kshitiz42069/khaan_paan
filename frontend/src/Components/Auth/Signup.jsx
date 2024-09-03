import { useState } from "react";
import UseSignUp from "../hooks/UseSignUp";

const Signup = () => {
  const {loading,signup} = UseSignUp();
  const [inputs,setInputs] = useState({
    fullname:'',
    username:'',
    password:'',
    confirmPassword:''
  })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(inputs);
  }
  return (
    <div className="flex items-center justify-center h-[90vh] overflow-hidden"
      style={{
        backgroundImage: "url(https://i.pinimg.com/564x/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg)",
        backgroundSize: "cover", // Ensures the image covers the entire container
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      backgroundPosition: "center",
      }}>
      <div className="hero bg-base-200 w-[60vw] h-[70vh] bg-opacity-70 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered" value={inputs.fullname} onChange={(e)=>setInputs({...inputs,fullname: e.target.value})} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" value={inputs.username} onChange={(e)=>setInputs({...inputs,username: e.target.value})} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" value={inputs.password} onChange={(e)=>setInputs({...inputs,password: e.target.value})} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="confirm password" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword: e.target.value})} className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white hover:text-black">
                  {loading ? <span className='loading loading-spinner'></span>: "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup