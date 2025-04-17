import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Register from "./Register";
import ResetPw from "./ResetPw";
import Profile from "./Profile";

export function Index() {

    return(

        <div>

            <BrowserRouter>

               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/reset" element={<ResetPw />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
               </Routes>
            </BrowserRouter>
        </div>
    )
}