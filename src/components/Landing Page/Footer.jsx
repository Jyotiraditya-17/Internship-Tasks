import { Dna , Facebook, Instagram, Linkedin, X } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='flex justify-between m-10'>

        <div>
            <div className='flex justify-between'>
                <div className='bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center'>
                    <Dna className='text-white text-2xl' />
                </div>
                <span className='font-bold text-blue-500 text-4xl mx-2 pb-2'> naukri </span>
            </div>
            <p className='my-3'> Connect with us  </p>
            <div className='flex justify-between'>
                <Instagram /> <Facebook /> <X /> <Linkedin />
            </div>
        </div>


        <ul className='unstyled-list'>
            <li className='hover:text-blue-400'> About Us </li>
            <li className='hover:text-blue-400'> Carrers </li>
            <li className='hover:text-blue-400'> Employer Home </li>
            <li className='hover:text-blue-400'> Site Map </li>
            <li className='hover:text-blue-400'> Credits </li>
        </ul>


        <ul className='unstyled-list'>
            <li className='hover:text-blue-400'> Help Center </li>
            <li className='hover:text-blue-400'> Summons / Notices </li>
            <li className='hover:text-blue-400'> Grievence </li>
            <li className='hover:text-blue-400'> Report Issue </li>
        </ul>


        <ul className='unstyled-list'>
            <li className='hover:text-blue-400'> Privacy Policy </li>
            <li className='hover:text-blue-400'> Terms & Conditions </li>
            <li className='hover:text-blue-400'> Fraud Alert </li>
            <li className='hover:text-blue-400'> Trust & Safety </li>
        </ul>

        <div className='rounded-2xl shadow-md'>
          <img src='Footer.png' width='300px' />
        </div>

      </div>
    </>
  )
}

export default Footer
