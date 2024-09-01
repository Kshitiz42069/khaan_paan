

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] overflow-hidden"
      style={{
        backgroundImage: "url(https://i.pinimg.com/564x/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg)",
        backgroundSize: "cover", // Ensures the image covers the entire container
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      backgroundPosition: "center",
      }}>
      <div className="hero bg-base-200 w-1/2 h-[60vh] bg-opacity-70 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white hover:text-black">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login