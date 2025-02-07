import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import UserLogin from "./Pages/UserLogin"
import UserSignup from "./Pages/UserSignup"
import CaptainSignup from "./Pages/CaptainSignup"
import Captainlogin from "./Pages/Captainlogin"
import Start from "./Pages/Start"
import UserProtectWrapper from "./Pages/UserProtectWrapper"
import UserLogout from "./Pages/UserLogout"
import CaptainHome from "./Pages/CaptainHome"
import CaptainProtectWrapper from "./Pages/CaptainProetctWrapper"
import Riding from "./Pages/Riding"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' element = { <Start/> } />
                <Route path = '/login' element = { <UserLogin/> } />
                <Route path = '/riding' element = { <Riding/> } />

                <Route path = '/signup' element = { <UserSignup/> } />      
                <Route path = '/captain-signup' element = { <CaptainSignup/> } />
                <Route path = '/captain-login' element = { <Captainlogin/> } />
                <Route path = '/home' element = { 
                    <UserProtectWrapper>
                        <Home/>
                    </UserProtectWrapper>
                 } />
                 <Route path = '/user/logout' element = { 
                    <UserProtectWrapper>
                        <UserLogout/>
                    </UserProtectWrapper>
                  } />

                  <Route path="/captain-home"   element = { 
                    <CaptainProtectWrapper>
                        <CaptainHome/>
                    </CaptainProtectWrapper>
                  } />

            </Routes>
        </div>
    )
}

export default App