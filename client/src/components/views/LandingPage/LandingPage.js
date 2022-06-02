import React, {useEffect, useState} from 'react';
import { API_URL,API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Col, Row } from 'antd';
import {Descriptions} from 'antd';
import TestJson from  './TestJson.json';
import Item from 'antd/lib/list/Item';

function LandingPage() {

  
  const resultKeys =  Object.keys(TestJson.data.attributes.last_analysis_results).map(x => x);
  // const TestArray = TestJson.map()
  const resultValue =  Object.values(TestJson.data.attributes.last_analysis_results).map((entrie, idx) => {
    console.log(Object.keys(entrie),entrie,"idx", idx);
    return (
      <div key={idx}>
        <Descriptions title={resultKeys[idx]} bordered>
            <Descriptions.Item label="category">{entrie.category}</Descriptions.Item>
            <Descriptions.Item label="result">{entrie.result}</Descriptions.Item>
            <Descriptions.Item label="method">{entrie.method}</Descriptions.Item>
            <Descriptions.Item label="engine_name">{entrie.engine_name}</Descriptions.Item>
        </Descriptions>
      </div>
    )

    
      
  });

  console.log("resultKeys",resultKeys);

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [PageNum, setPageNum] = useState(0);

  useEffect(()=>{
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetchFuc(endpoint);
  
  },[])

  const fetchFuc = (endpoint) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      setMovies([...Movies, ...response.results]);
      setMainMovieImage(response.results[0]);
      setPageNum(response.page)
    });
  }

  const pageAddBtn = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${PageNum + 1}`;
 
    fetchFuc(endpoint);
  }
  // console.log(MainMovieImage.background_path)
  
  return (

    <div style={{ width: '100%', margin: '0'}}>
      {MainMovieImage && 
      <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
      title={MainMovieImage.original_title}
      text={MainMovieImage.overview}
      />
    }
      <div style={{width: '85%', margin: '1rem auto'}}>
        <h2> 컴퓨터 소프트웨어 전공 </h2> 
        <hr/>
        <Row gutter={[16,16]}>
          {Movies && Movies.map((movie, index) => (
            <React.Fragment key={index}>
              <GridCards 
              landingPage
              image={movie.poster_path ?
              `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
              movieId={movie.id}
              movieName={movie.original_title}
              />
            </React.Fragment>           
          ))}
        </Row>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button onClick={pageAddBtn}> 더 보기 </button>
        
      </div>
      <div>
        <h2> 위에 글씨가 안보여서 넣는거임</h2>
        <h2> 위에 글씨가 안보여서 넣는거임</h2>
      </div>
      <div>
      <Col lg={ 6 } md={8} xs={24}>
        <div style={{ position: 'relative'}}>
            <a href='json/upload'>
              Json파일
            </a>
        </div>
      </Col>
      </div>
      <div>
        {resultValue}
      </div>
     
    </div>
  )
}

export default LandingPage;