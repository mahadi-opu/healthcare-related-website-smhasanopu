import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Auth/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut,
        createUserWithEmailAndPassword
    }
}

export default useFirebase;