import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

  useEffect(()=>{
    axios.get('/api/hello')
    .then(res => console.log(res))
  },[])

  return (
    <div>LandingPage 랜딩 페이지 왜 안보임</div>
  )
}

export default LandingPage