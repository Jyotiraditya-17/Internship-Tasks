import { Search } from 'lucide-react'
import React from 'react'

function Main() {
  return (
    <>
      <h2 className='text-center text-4xl font-bold mt-32'> Find your dream job now </h2>
      <h4 className='text-center text-xl mt-2'> 5 lakh+ jobs for you to explore </h4>


    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full mt-8 max-w-5xl mx-auto">

            <div className="flex items-center space-x-2 flex-1">
                <Search className="text-gray-400 w-5 h-5" />
                <input
                type="text"
                placeholder="Enter skills / designations / companies"
                className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                />
            </div>

            <div className="h-6 w-px bg-gray-200 mx-3" />

            <select className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none">
                <option>Select experience</option>
                <option>0-1 years</option>
                <option>1-3 years</option>
                <option>3+ years</option>
            </select>

            <div className="h-6 w-px bg-gray-200 mx-3" />

            <input
                type="text"
                placeholder="Enter location"
                className="bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            />

            <button className="ml-4 bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Search
            </button>
    </div>
    </>
  )
}

export default Main
