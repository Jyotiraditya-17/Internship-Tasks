import { ExternalLink, Lock } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResetPw() {
  return (
    <div>
        <div className='flex justify-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-300 to-purple-100'>
            <form className='w-72 h-fit border bg-black text-white border-black rounded-2xl p-4 m-4 mt-20'>
                <h3 className='text-center text-purple-400 font-bold'> Reset Password </h3>
                <dl>

                    <dt className='my-2'> New Password </dt>
                    <dd className='relative'>
                        <Lock className='absolute left-3 top-3 text-purple-800' size={20} />
                        <input type='password' className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder='Enter new password..' />
                    </dd>

                    <dt className='my-3'> Re-enter Password </dt>
                    <dd className='relative'>
                        <Lock className='absolute left-3 top-3 text-purple-800' size={20} />
                        <input type='password' className='block w-full pl-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder='Re-enter new password..' />
                    </dd>

                </dl>

                <button className='my-3 w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-900'> Reset Password </button>
                <p> Go to <Link to='/login' className='text-purple-700'> login </Link> <ExternalLink className='inline text-purple-700'size={13} /> </p>

            </form>
        </div>
    </div>
  )
}

export default ResetPw
