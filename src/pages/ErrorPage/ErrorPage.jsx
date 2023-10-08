import { useNavigate } from "react-router-dom"



const ErrorPage = () => {

    const navigate = useNavigate()

    const handleClick=()=>{{
        navigate('/')
    }}




  return (
    <div className="bg-red-200 h-screen w-full flex flex-col justify-center items-center space-y-5">
        <h1 className="text-8xl font-bold text-red-600">404</h1>
        <p className="text-xl font-semibold text-red-600">Route / Page Not Found</p>
        <button onClick={handleClick} className="btn btn-primary">Go back to Home</button>
    </div>
  )
}

export default ErrorPage