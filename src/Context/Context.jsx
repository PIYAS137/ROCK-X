import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/FirebaseConfig"
import PropTypes from 'prop-types'



export const AuthContext = createContext(null)
const FirebaseAuth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider()





const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [logRegSucc,setLogRegSucc]=useState('');
    const [notiSts,setNotiSts]=useState(false)



    const handleLogRegSuccess=(str)=>{
        setLogRegSucc(str);
        setTimeout(()=>{
            setLogRegSucc('')
            setNotiSts(false)
        },2000)
    }





    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass);
    }

    const updateUser=(val,name,photo)=>{
        console.log(name,photo);
        setLoading(true)
        return updateProfile(val,{
            displayName : name,
            photoURL:photo
        })
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
        })
        return () => {
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
        loading,
        handleLogRegSuccess,
        logRegSucc,
        notiSts,
        setNotiSts,
        updateUser
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