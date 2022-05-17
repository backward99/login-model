import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <div>
      <Router>
        <div>
          {/* 스위치는 옛날 방식 */}
          <Routes>
            {/* 라우트 연결시에 엘리멘트 사용 */}
            <Route exact path="/" element ={<LandingPage/>} />
            {/* < />
          </Route> */}
            <Route path="/login" element ={<LoginPage/>} />
              {/* <LoginPage />
            </Route> */}
            <Route path="/register" element ={<RegisterPage/>} />
              {/* <RegisterPage />
            </Route> */}
          </Routes>
        </div>
      </Router>
    </div>
  )
}


export default App