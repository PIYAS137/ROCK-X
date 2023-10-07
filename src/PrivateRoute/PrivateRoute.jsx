import PropTypes from 'prop-types'
import { useContext } from "react"
import { AuthContext } from "../Context/Context"
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login' />
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}



export default PrivateRoute
