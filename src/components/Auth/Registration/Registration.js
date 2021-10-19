import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

const Registration = () => {
    const auth = getAuth();
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const [setIsLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailchange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setpassword(e.target.value);
    }
    // 
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        if (!/(?=.*[a-zA-Z])/.test(password)) {
            setError('should contain at least one lower and one upper case');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                verifyEmail();
                history.push(redirect_uri);
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            {/* login form  */}
            <main className="container my-5">
                <div className="row">
                    <section className="col-md-6 my-5 offset-md-3">
                        <div className="card shadow p-5">
                            <form onSubmit={handleRegistration}>

                                <h3 className="text-center text-uppercase mb-4">Registration Please</h3>

                                <h4 className="text-center text-danger">{error}</h4>
                                <hr />

                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input onBlur={handleNameChange} type="text" placeholder="Full Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input onBlur={handleEmailchange} type="email" placeholder="Email" className="form-control" required />
                                </div>

                                <label htmlFor="Password">Password</label>
                                <div className="input-group mb-3">

                                    <input onBlur={handlePasswordChange} type="password" name="password" id="password" className="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon2" required />
                                    <div className="input-group-append">
                                    </div>
                                </div>

                                <input type="submit" value="Registration" className="btn btn-block btn-danger rounded-pill mt-3" />

                                <p className="mt-3 text-white">Already have an Account ? <Link to="/login" className="text-white"> Create Here</Link></p>

                            </form>
                            <button onClick={handleGoogleLogin} className="btn btn-danger">Google Login</button>
                        </div>
                    </section>
                </div>
            </main>
            {/* login form  */}

        </div>
    );
};

export default Registration;