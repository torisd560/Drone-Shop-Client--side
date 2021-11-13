import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import initializeFirebase from '../Pages/Firebase/firebase.init'

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [alert, setAlert] = useState(false)
    const auth = getAuth()


    //===================== google sign in========================
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = (history, location) => {

        setIsLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                setUser(user)
                savedUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/'
                history.push(destination)
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))


    }


    //=========================== Register user======================
    const handleRegister = (email, password, name, history) => {

        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.push('/')
                const newUser = { email: email, displayName: name }
                setUser(newUser)

                //============ save user to database============
                savedUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name

                })

                    .then(() => {

                    })
                    .catch((error) => {
                        setError(error.message)
                    });
                setError("")
            })
            .catch((error) => {
                setError(error.message);

            }).finally(() => setIsLoading(false))
    }

    //===================== Login user ===========================
    const handleLogin = (email, password, location, history) => {

        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.push(destination)
                setError("")
            })
            .catch((error => {
                setError(error.message)
            })).finally(() => setIsLoading(false))
    }
    // ================ observe user state   ================
    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [auth])

    //================= Log Out =========================
    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then({


            }).catch((error => setError(error.message)))
            .finally(() => setIsLoading(false))
    }

    // =============== reset password ====================
    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError("")
            })
            .catch((error) => {
                setError(error.message);

            });

    }

    //==================== save user to database ==================
    const savedUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch(`https://fast-plateau-38541.herokuapp.com/Fusers`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    //=================== get admin user  ====================
    useEffect(() => {
        fetch(`https://fast-plateau-38541.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        admin,
        error,
        isLoading,
        alert,
        setAlert,
        handleGoogleLogin,
        handleRegister,
        handleLogin,
        handleLogout,
        handleResetPassword
    }
};

export default useFirebase;