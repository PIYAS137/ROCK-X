import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../Firebase/FirebaseConfig"
import PropTypes from 'prop-types'



export const AuthContext = createContext(null)
const FirebaseAuth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider()

const Context = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass);
    }

    const LoginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(FirebaseAuth, email, pass);
    }

    const LogOutUser = () => {
        setLoading(true)
        return signOut(FirebaseAuth)
    }

    useEffect(() => {
        const status = onAuthStateChanged(FirebaseAuth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            console.log(currentUser);
        })
        return ()=>{
            status()
        }
    }, [])


    const LoginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(FirebaseAuth, GoogleProvider)
    }


    const AuthInfo = {
        createUser,
        LoginUser,
        user,
        LoginWithGoogle,
        LogOutUser,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

Context.propTypes = {
    children: PropTypes.node
}




export default Context