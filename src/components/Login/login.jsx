import React, { useState } from 'react'
import { Lock, Mail, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    let navigate = useNavigate();

    function loginClick(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth , email , password)
        .then( (userCredential) => {
            navigate('/home');
        })
        .catch( (err) => {
            console.log(err.message);
            alert('Login failed. Please check your credentials.');
        })
    }

  return (
    <>
    <div className='flex justify-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-300 to-purple-100 '>
        <form onSubmit={loginClick} className='w-72 h-fit bg-black text-white border border-black rounded-2xl p-4 m-4 mt-20'> 
            <h3 className='text-center font-bold text-purple-400'> User Login </h3>
            <dl>
                <dt className='my-2'> Email </dt>
                <dd className='relative'>
                    <Mail className='absolute left-3 top-3 text-purple-800' size={20} />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' type='text'  placeholder='Enter name here..' />
                </dd>

                <dt className='my-2'> Password </dt>
                <dd className='relative'>
                    <Lock className='absolute left-3 top-3 text-purple-800' size={20} />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' type='password' placeholder='Enter your passowrd..' />
                </dd>
            </dl>

            <button onClick={loginClick} className='my-3 w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-900'> Login </button>
            <p className='text-red-500'> Don't have an account? <Link to='/register' className='text-purple-700'> Sign up </Link> </p>
            <p className='text-red-500'> Forgot password? <Link to='/reset' className='text-purple-700'> Reset </Link> </p>
        </form>
    </div>
    </>
  )
}

export default Login
