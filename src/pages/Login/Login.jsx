import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err,setErr]=useState('')



    const handleSubmit=(event)=>{
        event.preventDefault()
    }

    const handleClickGogle=()=>{
        console.log("object");
    }



    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body shadow-xl rounded-2xl">
                    <h1 className="text-2xl text-center font-bold my-4 ">Log In Here</h1>
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
                    <div className="form-control mt-6 space-y-3">
                        <button className="btn btn-primary">Login</button>
                        <button onClick={handleClickGogle} className="btn btn-primary">Login With Google</button>
                    </div>
                    <p>Dont have an account ? Go for <Link to='/registration'><span className="font-semibold text-blue-500">Register</span></Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login