import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Context/Context"

const AppNavbar = () => {

    const { user,LogOutUser } = useContext(AuthContext)
    console.log(user);

    const handleClickLogOut=()=>{
        LogOutUser()
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    

    const NavLinks = <>
        <li className="text-lg"><NavLink to='/'>Home</NavLink></li>
        <li className="text-lg"><NavLink to='/contact'>Contact</NavLink></li>
        <li className="text-lg"><NavLink to='/services'>Services</NavLink></li>
    </>

    return (
        <div className="navbar bg-gray-900 rounded-b-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">ROCK<span className="-ml-1 text-red-500">X</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                user ? 
                <button onClick={handleClickLogOut} className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">Log Out</button>
                : 
                <Link to='/login'><button className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold">Login</button></Link> 
                }
                <label tabIndex={0} className="btn ml-2 btn-ghost btn-circle avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://i.pinimg.com/564x/f3/25/82/f325821a1450b7352ba42bb44857eefc.jpg" />
                    </div>
                </label>
            </div>
        </div>
    )
}

export default AppNavbar