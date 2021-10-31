import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewById } from '../../Services/MovieFetch';
import s from './Reviews.module.css';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetchReviewById(id).then(r => setReviews(r));
  }, [id]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <div>
                <p>{author}</p>
                <p>{content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews founded about this movie</p>
      )}
    </div>
  );
}
