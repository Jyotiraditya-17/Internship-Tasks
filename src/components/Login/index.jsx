import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Register from "./Register";
import ResetPw from "./ResetPw";

export function Index() {

    return(

        <div>

            <BrowserRouter>

               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/reset" element={<ResetPw />} />
               </Routes>
            </BrowserRouter>
        </div>
    )
}