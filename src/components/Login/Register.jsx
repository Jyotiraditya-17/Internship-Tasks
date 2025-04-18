import { Lock, Mail, Phone, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import { auth , db} from '../../firebase/firebase.config' 
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc , setDoc} from 'firebase/firestore'

function Register() {

  const [username , setUserName] = useState('');
  const [mobile , setMobile] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState('');
  const [success , setSuccess] = useState('');

  function handleRegister(e) {
    e.preventDefault();


    createUserWithEmailAndPassword(auth , email , password)
    .then( (userCredential) => {
      
      const user = userCredential.user;

      setDoc( doc (db , 'users' , user.uid) , {

        username : username, 
        mobile : mobile,

      })

      .then( () => {
        setSuccess('Registration Successfull')
        setError('');
      })

      .catch((err) => {
        setError( "failed to save user details" + err.message );
        setSuccess('');
      })

    })

    .catch((err) => {
      setError( "Registration failed" + err.message);
      setSuccess('');
    })

  }
  return (
    <>
    <div className='flex justify-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-300 to-purple-100'>
       <form onSubmit={handleRegister} className='w-72 h-fit mt-10 border bg-black text-white border-black rounded-2xl p-4 m-4'>

        <h2 className='text-center font-bold text-purple-400'> Register User </h2>
          <dl>
            <dt className='my-2'> Username </dt>
            <dd className='relative'>
                <User className='absolute left-3 top-3 text-purple-800' size={20} /> 
                <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder='Enter name here..' />
            </dd>

            <dt className='my-2'> Mobile Number </dt>
            <dd className='relative'>
                <Phone className='absolute left-3 top-3 text-purple-800' size={20} />
                <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder='Enter your mobile number..' />
            </dd>

            <dt> Email </dt>
            <dd className='relative'>
                <Mail className='absolute left-3 top-3 text-purple-800' size={20} />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder='Enter your email..' />
            </dd>

            <dt className='my-2'> Password </dt>
            <dd className='relative'>
                <Lock className='absolute left-3 top-3 text-purple-800' size={20} />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder='Enter your password..' />
            </dd>
          </dl>

          <button className='my-3 w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-900'> Register </button>

          {error && <p className='text-red-500'> {error} </p>}
          {success && <p className='text-green-500'> {success} </p>}

          <p className='text-green-700'> Already have an account ? <Link to='/login' className='text-purple-700'> login </Link> </p>
       </form>
    </div>
    </>
  )
}

export default Register
