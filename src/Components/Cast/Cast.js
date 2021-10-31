import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastById } from '../../Services/MovieFetch';
import s from './Cast.module.css';
import defaultImage from '../../images/1992256.jpg';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(id).then(setCast);
  }, [id]);
  console.log(cast);

  return (
    <div>
      <ul className={s.ImageGallery}>
        {cast.map(({ name, profile_path, cast_id }) => (
          <li key={cast_id} className={s.ImageGalleryItem}>
            <div>
              <img
                className={s.ImageGalleryItem_image}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImage
                }
                alt="poster"
                width="150"
              />

              <p> {name} </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
