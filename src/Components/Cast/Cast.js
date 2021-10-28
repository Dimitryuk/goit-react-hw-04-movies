
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastById } from '../../Services/MovieFetch';


const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(id).then(setCast);
  }, [id]);

  return (
    <div >
      {cast.map(({ name, profile_path }) => (
        <>
          {profile_path !== null && (
            <div >
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="poster"
                  width="150"
                />
              </p>
              <p> {name} </p>
            </div>
          )}
        </>
      ))}
    </div>
  );
};



export default Cast;