import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext([]);

export const useAuth = () => (useContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    console.log(user)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photo: user.photoURL
                })
            }else{
                setUser(Null);
            }
            setLoading(false)
        })
        return () => unsuscribe()
    },[])
    return <AuthContext.Provider value ={{user}}>
        {loading ? null : children}
        </AuthContext.Provider>
}