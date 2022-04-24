import React from 'react';
import google from '../img/google.png';
import facebook from '../img/facebook.png';
import github from '../img/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialMediaLogin = () => {
    const [signInWithGoogle, user, gooLoading, gooError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, faUser, faLoading, faError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        signInWithGoogle();
        if(user){
            navigate('/');
        }
    }
    const handleGithubSignIn = () =>{
        signInWithGithub();

        if(gitUser){
            navigate('/');
        }
    }

    const handleFacebookSignIn = ( ) =>{
        signInWithFacebook();

        if(faUser){
            navigate('/');
        }
    }


    return (
        <div className='container'>

            <div className='row align-items-center justify-content-center'>
                <div className='col-sm-5 bg-danger' style={{ height: 1 }}></div>
                <div className='col-sm-1 text-danger text-center'><h3><small>or</small></h3></div>
                <div className='col-sm-5 bg-danger' style={{ height: 1 }}></div>
            </div>

            <div className='row g-3 text-center'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <button onClick={handleGoogleSignIn} className='btn btn-danger'>
                        <img className='pe-2' src={google} alt="" />
                        Sign in by Google
                    </button>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <button onClick={handleGithubSignIn} className='btn btn-danger'>
                        <img className='pe-2' src={github} alt="" />
                        Sign in by Github
                    </button>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <button onClick={handleFacebookSignIn} className='btn btn-danger'>
                        <img className='pe-2' src={facebook} alt="" />
                        Sign in by Facebook
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SocialMediaLogin;