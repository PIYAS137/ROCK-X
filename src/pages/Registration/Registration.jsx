import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/Context"

const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
const capitalLetterRegex = /[A-Z]/;



const Registration = () => {

    const location = useLocation()
    const { createUser,setNotiSts, handleLogRegSuccess,updateUser } = useContext(AuthContext)
    const navigate = useNavigate()








    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const [photo,setPhoto]=useState('')
    const [name,setName]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        setErr('')
        
    
        if(pass.length<=6){
            setErr("Your password length should be up to 6 character");
            setTimeout(() => {
                setErr('')
            }, 2000)
            return
        }
        else if(!specialCharRegex.test(pass)){
            setErr("Your password have minimum one Special Character")
            setTimeout(() => {
                setErr('')
            }, 2000)
            return
        }else if(!capitalLetterRegex.test(pass)){
            setErr("Your password have minimum one Capital Character !")
            setTimeout(() => {
                setErr('')
            }, 2000)
            return
        }

        createUser(email, pass)
            .then(res => {
                

                updateUser(res.user,name,photo)
                .then(response=>{
                    console.log(response);
                }).catch(err=>{
                    console.log(err);
                })


                handleLogRegSuccess("Successfully Register User !")
                setNotiSts(true)
                navigate(location?.state ? location.state : '/')
            }).catch(err => {
                setErr(err.message)
                setTimeout(() => {
                    setErr('')
                }, 2000)
                return
            })

            setEmail('')
            setPass('')
            setName('')
            setPhoto('')
    }

    return (
        <div className="hero min-h-screen">

            {err && <div className="max-w-xl z-50 top-20 text-white text-xl absolute bg-red-500 w-full p-5 rounded-xl">
                {err}
            </div>}

            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body bg-base-400">
                    <h1 className="text-2xl text-center font-bold py-4">Registration Here</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input onChange={e => setName(e.target.value)} value={name} autoFocus name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={e => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input onChange={e => setPhoto(e.target.value)} value={photo} type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={e => setPass(e.target.value)} value={pass} type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account ? Go to <Link to='/login'><span className="font-semibold text-blue-500">Log in</span></Link></p>
                </form>
            </div>
        </div>
    )
}

export default Registration