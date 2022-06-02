import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import NavBar from './components/views/NavBar/NavBar';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import MovieDetail from './components/views/MovieDetail/MovieDetail';
import JSONUploadPage from './components/views/JSONUploadPage/JSONUploadPage';

function App() {
  return (
    <Router>
      <NavBar />
      {/* 스위치는 옛날 방식 */}
      <Routes>
        {/* 라우트 연결시에 엘리멘트 사용 */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/json/upload" element={<JSONUploadPage/>} />
      </Routes>
    </Router>

  )
}


export default App