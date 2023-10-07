import { useState } from "react"
import { Link } from "react-router-dom"

const Registration = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err,setErr]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(email,pass);
    }

  return (
    <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body bg-base-400">
                    <h1 className="text-2xl text-center font-bold py-4">Registration Here</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={e=>setEmail(e.target.value)} value={email}  name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={e=>setPass(e.target.value)} value={pass} type="password" placeholder="password" className="input input-bordered" required />
                        {err ? <p>{err}</p>:''}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Already have an account ? Go to <Link to='/login'><span className="font-semibold text-blue-500">Log in</span></Link></p>
                </form>
            </div>
        </div>
  )
}

export default Registration