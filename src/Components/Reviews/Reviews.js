
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewById } from '../../Services/MovieFetch';


export default function Reviews  ()  {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewById(id).then(r => setReviews(r));
  }, [id]);

  return (
    <div >
      {reviews.map(({ author, content }) => (
        <>
          {reviews ? (
            <div >
              <p>
                <b>
                  <u>{author}:</u>
                </b>
                &ensp;{content}
              </p>
            </div>
          ) : (
            <p>'No reviews'</p>
          )}
        </>
      ))}
    </div>
  );
};