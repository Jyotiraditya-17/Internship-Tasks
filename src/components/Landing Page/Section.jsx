import { Box, Building2, ChartNoAxesColumn, ChevronRight, CircleCheckBig, FileBadge2, Home, IndianRupee, Rocket, SearchCheck, Settings, Users } from 'lucide-react'
import React from 'react'

function Section() {
  return (
    <div className='mx-14 my-14'>
      <div className='flex justify-between'>

            <div className='border-gray-300 shadow-lg w-40 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-purple-100 w-10 h-10 rounded-full flex justify-center items-center'> <Home /> </div>
                    <span className='pt-2'> Remote </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>


            <div className='border-gray-300 shadow-lg w-40 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-yellow-50 w-10 h-10 rounded-full flex justify-center items-center'> <Building2 /> </div>
                    <span className='pt-2'> MNC </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>


            <div className='border-gray-300 shadow-lg w-40 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-yellow-50 w-10 h-10 rounded-full flex justify-center items-center'> <Users /> </div>
                    <span className='pt-2'> HR </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>


            <div className='border-gray-300 shadow-lg w-52 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-purple-50 w-10 h-10 rounded-full flex justify-center items-center'> <IndianRupee /> </div>
                    <span className='pt-2'> Banking &.. </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>


            <div className='border-gray-300 shadow-lg w-44 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-yellow-50 w-10 h-10 rounded-full flex justify-center items-center'> <FileBadge2 /> </div>
                    <span className='pt-2'> Internship </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>


            <div className='border-gray-300 shadow-lg w-52 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-yellow-50 w-10 h-10 rounded-full flex justify-center items-center'> <Box /> </div>
                    <span className='pt-2'> Supply Ch.. </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>        

      </div>


      <div className='flex justify-around mt-7'>

            <div className='border-gray-300 shadow-lg w-44 h-20 rounded-2xl'>
                        <div className='flex justify-between p-4'>
                            <div className='bg-green-50 w-10 h-10 rounded-full flex justify-center items-center'> <SearchCheck /> </div>
                            <span className='pt-2'> Analytics </span>
                            <div className='pt-2'> <ChevronRight /> </div>
                        </div>
            </div>


            <div className='border-gray-300 shadow-lg w-52 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-yellow-50 w-10 h-10 rounded-full flex justify-center items-center'> <CircleCheckBig /> </div>
                    <span className='pt-2'> Project Mg.. </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>


            <div className='border-gray-300 shadow-lg w-48 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-green-50 w-10 h-10 rounded-full flex justify-center items-center'> <Settings /> </div>
                    <span className='pt-2'> Engineering </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>


            <div className='border-gray-300 shadow-lg w-48 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-blue-50 w-10 h-10 rounded-full flex justify-center items-center'> <ChartNoAxesColumn /> </div>
                    <span className='pt-2'> Data Science </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>

            <div className='border-gray-300 shadow-lg w-40 h-20 rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <div className='bg-purple-50 w-10 h-10 rounded-full flex justify-center items-center'> <Rocket /> </div>
                    <span className='pt-2'> Startup </span>
                    <div className='pt-2'> <ChevronRight /> </div>
                </div>
            </div>
      </div>



      <div className='text-center font-bold text-3xl my-10'> Featured companies actively hiring </div>

        <div className='flex flex-wrap justify-center gap-6'>

            {[
                // {
                // name: 'J.P.Morgan',
                // sub: 'JPMorgan Chase Bank',
                // rating: '⭐ 3.9 | 6.4k+ reviews',
                // desc: 'Leader In Financial Services',
                // color: 'bg-gray-200',
                // },
                {
                name: 'Apple',
                sub: 'Apple',
                rating: '⭐ 4.3 | 700 reviews',
                desc: 'Join us. Be you.',
                color: 'bg-gray-200',
                },
                {
                name: 'Capgemini',
                sub: 'Capgemini',
                rating: '⭐ 4.1 | 44k+ reviews',
                desc: 'Global Leader in Technology Services',
                color: 'bg-blue-50',
                },
                {
                name: 'TCS',
                sub: 'Tata Consultancy Services',
                rating: '⭐ 3.7 | 93.2k+ reviews',
                desc: 'Explore exciting opportunities at TCS',
                color: 'bg-white',
                },
                {
                name: 'Airtel',
                sub: 'Airtel',
                rating: '⭐ 3.9 | 14k+ reviews',
                desc: 'Leading Global Telecom Company',
                color: 'bg-red-50',
                },
            ].map((company, idx) => (
                <div key={idx} className='rounded-2xl shadow-md w-full sm:w-64 h-72 flex flex-col justify-between p-4'>

                    <p className='text-center font-bold text-xl p-2'>{company.name}</p>

                    <div className={`rounded-2xl ${company.color} p-3`}>
                        <p className='font-bold text-center pb-1'>{company.sub}</p>
                        <span className='block text-center text-sm'>{company.rating}</span>
                    </div>

                    <p className='text-center text-sm my-3 p-2'>{company.desc}</p>

                    <button className='border-blue-500 text-blue-500 bg-blue-100 rounded-full font-bold py-2 mt-auto'>
                        View Jobs
                    </button>
                </div>
        ))}
        </div>



      <div className='border-gray-100 rounded-2xl shadow-md my-10'>
        <img src='../../public/Section-adv.png' />
      </div>

    </div>
  )
}

export default Section
