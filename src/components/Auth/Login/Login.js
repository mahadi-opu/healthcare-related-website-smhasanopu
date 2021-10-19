import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    const { signInUsingGoogle } = useAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            });
        // .finally(() => setIsLoading(false));
    }

    const handleEmailchange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const signInByEmailPassword = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                history.push(redirect_uri);
                console.log(user);
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    return (
        <div>
            {/* login form  */}
            <main className="container my-5">
                <div className="row">
                    <section className="col-md-6 my-5 offset-md-3">

                        <div className="card shadow p-5">
                            <form onSubmit={signInByEmailPassword}>

                                <h3 className="text-center text-uppercase mb-4">Login Please</h3>
                                <h4 className="text-center text-danger">{error}</h4>
                                <hr />

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

                                <input type="submit" value="Login" className="btn btn-block btn-danger rounded-pill mt-3" />

                                <p className="mt-3 text-white">Don't have an Account ? <Link to="/Registration" className="text-white"> Create Here</Link></p>

                            </form>
                            <button onClick={handleGoogleLogin} className="btn btn-danger">Google Login</button> <br />
                            <button onClick={handleResetPassword} className="btn btn-danger">ResetPassword</button>
                        </div>
                    </section>
                </div>
            </main>
            {/* login form  */}

        </div>
    );
};

export default Login;