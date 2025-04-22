import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import { ChevronDown, Dna } from 'lucide-react'
import React, { useState } from 'react'

function Header() {

    

  return (
    <>
     <div className='flex justify-between items-center p-4 bg-white shadow-md fixed top-0 end-0 start-0'>
        <div className='flex justify-between'>
            <div className='bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center'>
                <Dna className='text-white text-2xl' />
            </div>
            <span className='font-bold text-blue-500 text-4xl mx-2 pb-2'> FindJobs </span>
        </div>

        <div>
            <ul className='unstyled-list flex justify-between pe-60 text-gray-500'>
                <li> Jobs </li>
                <li className='mx-10'> Companies </li>
                <li> Services </li>
            </ul>
        </div>

        <div className='flex justify-between items-center'>
          <button className='border border-blue-500 text-blue-500  rounded-full px-4 py-2 mx-2'> Login </button>
          <button className='bg-orange-500 text-white  rounded-3xl px-4 py-2'> Register </button>
          <span className='text-3xl text-gray-100 ms-2 p-2'> | </span>

          <div className="relative group ml-4 cursor-pointer">

              <span className="group-hover:underline group-hover:decoration-orange-500">For employers</span>
              <ChevronDown className="ml-2 text-gray-500 inline-block" size={20} />
              
              
              <div className="absolute top-8 left-0 bg-white shadow-md border-white rounded-md p-2 hidden group-hover:block z-10 min-w-[150px]">
                <p className="text-gray-700 hover:text-blue-500 cursor-pointer">Buy Online</p>
                <p className="text-gray-700 hover:text-blue-500 cursor-pointer mt-1">Naukri Talent Cloud</p>
                <p className="text-gray-700 hover:text-blue-500 cursor-pointer mt-1">Employer Login</p>
              </div>
          </div>


        </div>


     </div>
    </>
  )
}

export default Header
