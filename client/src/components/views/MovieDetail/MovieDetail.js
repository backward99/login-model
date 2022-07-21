import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';
import Auth from '../../../hoc/auth';

function MovieDetail(props) {
  const { movieId } = useParams();
  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false)



  const setJSON = () => {
    
  }

  const setToggle = () => {
    setActorToggle(!ActorToggle);
  }
  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setMovie(response)
      })
      fetch(endpointCrew)
      .then(response => response.json())
      .then(response => {
        console.log("endpointCrew",response)
        setCasts(response.cast)
      })
  }, [])
  return (
    <div>
      {Movie.backdrop_path && 
      <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      }
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <MovieInfo
          movie={Movie}
        />
        <br />
        <div style={{ display: 'flex', justifyContent: 'Center', margin: '2rem' }}>
        {ActorToggle &&
        <Row gutter={[16,16]}>
        {Casts && Casts.map((cast, index) => (
          <React.Fragment key={index}>
            <GridCards 
            image={cast.profile_path ?
            `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
            charName={cast.name}
            />
          </React.Fragment>       
        ))}
      </Row>            
      }
          <button onClick={setToggle}>
            Toggle Actor View
          </button>
          <button onClick={setJSON}>
            Toggle Actor View
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Auth(MovieDetail, null);
// export default MovieDetail;