import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../Firebase";

export const useAuth = () => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setUser(user);
        setLoading(false);
    });

    return unsubscribe;
},[]);
return{user, loading}
};