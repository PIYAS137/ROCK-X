import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/Context"

const AppNavbar = () => {

    const { user,LogOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClickLogOut=()=>{
        LogOutUser()
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    
    const handleClickLogo=()=>{
        navigate('/')
    }

    

    const NavLinks = <>
        <li className="text-lg"><NavLink to='/'>Home</NavLink></li>
        <li className="text-lg"><NavLink to='/services'>Services</NavLink></li>
        <li className="text-lg"><NavLink to='/about'>About</NavLink></li>
        <li className="text-lg"><NavLink to='/gallery'>Gallery</NavLink></li>
        <li className="text-lg"><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-gray-900 rounded-b-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden px-0 lg:px-3 mr-2 lg:mr-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a onClick={handleClickLogo} className="btn px-0 lg:px-3 btn-ghost normal-case text-2xl">ROCK<span className="-ml-1 text-red-500">X</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                user ? 
                <button onClick={handleClickLogOut} className="bg-red-500 text-white px-4 py-2 text-xs md:text-lg w-full rounded-lg font-semibold">Log Out</button>
                : 
                <Link to='/login'><button className="bg-indigo-500 text-white px-4 py-2 text-xs md:text-lg rounded-lg font-semibold">Login</button></Link> 
                }
                <p className="ml-2 text-red-500 text-xs">{user?.displayName}</p>
                <label tabIndex={0} className="btn ml-2 btn-ghost btn-circle avatar">
                    <div className="w-16 rounded-full bg-white p-[1px]">
                        <img className=" rounded-full" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/tqWTNFt/Default-avatar-icon-vector-of-social-media-user.jpg"} />
                    </div>
                </label>
            </div>
        </div>
    )
}

export default AppNavbar