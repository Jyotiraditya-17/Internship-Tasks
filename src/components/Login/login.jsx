import React, { useState } from 'react'
import { Lock, Mail, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [user , setUser] = useState('Jyoti');
    const [password , setPassword] = useState('1234');

    let navigate = useNavigate();

    function loginClick() {
        navigate('/home');
    }

  return (
    <>
    <div className='flex justify-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-300 to-purple-100 '>
        <form className='w-72 h-fit bg-black text-white border border-black rounded-2xl p-4 m-4 mt-20'> 
            <h3 className='text-center font-bold text-purple-400'> User Login </h3>
            <dl>
                <dt className='my-2'> Username </dt>
                <dd className='relative'>
                    <User className='absolute left-3 top-3 text-purple-800' size={20} />
                    <input className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' type='text' value={user} placeholder='Enter name here..' />
                </dd>

                <dt className='my-2'> Password </dt>
                <dd className='relative'>
                    <Lock className='absolute left-3 top-3 text-purple-800' size={20} />
                    <input className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' type='password' value={password} placeholder='Enter your passowrd..' />
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
