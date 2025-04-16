import { useNavigate } from "react-router-dom"


function Home() {

    let navigate = useNavigate();

    function loginClick() {
        navigate('/login')
    }

    function registerClick() {
        navigate('/register')
    }

  return (
    <div>
        
       <div className='flex justify-center my-60'>
          <button onClick={loginClick} className=' w-32 mx-20 bg-green-700 text-white py-2 rounded hover:bg-green-800'> Login </button>
          <button onClick={registerClick} className=' w-32 bg-purple-800 text-white py-2 rounded hover:bg-purple-900'> Sign Up </button>
       </div>
       
    </div>
  )
}

export default Home
