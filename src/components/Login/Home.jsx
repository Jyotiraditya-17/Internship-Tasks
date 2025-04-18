import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { auth , db } from "../../firebase/firebase.config";
import { getDoc , doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


function Home() {

  const [username , setUserName] = useState('');

  let navigate = useNavigate();

 /* useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth , async (user) => {

      if(user) {
        await user.reload();
        const refreshedUser = auth.currentUser;
        console.log(refreshedUser);
        setUserName(refreshedUser.displayName || "user" )
      }
      else {
        navigate('/login')
      }

    });

    return () => unsubscribe();

    
  } , [navigate]); */


  return (
    <div className="flex min-h-screen bg-black">

      <div className="w-64 bg-gray-800 text-white flex flex-col items-center py-6">
        <h2 className="text-2xl font-bold mb-6"> Dashboard </h2>

        <ul className="w-full">
          <li className="w-full px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/home')}> Home </li>
          <li className="w-full px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/profile')}> Profile </li>
          <li className="w-full px-4 py-2 hover:bg-gray-700 cursor-pointer"> Setting </li>
          <li className="w-full px-4 py-2 hover:text-red-600 hover:bg-gray-700 cursor-pointer mt-80" onClick={() => navigate('/login')}> Logout </li>
        </ul>
      </div>
        
       <div className="flex-1 p-6">
          <h1 className="font-bold text-2xl text-purple-800 text-center animate-pulse"> Welcome to Dashboard - Jyoti </h1>
       </div>
       
    </div>
  )
}

export default Home
