import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/rest_api';
import { Toaster } from 'react-hot-toast';
import { NotifyError } from './Notify/Notify';

const Review = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getData = async id => {
      try {
        const { results } = await fetchReviews(movieId);
        setData(results);
        window.scrollBy({
          top: 480,
          behavior: 'smooth',
        });
      } catch (error) {
        NotifyError(error.message);
      }
    };
    getData(movieId);
    window.scrollBy({
      top: 480,
      behavior: 'smooth',
    });
  }, [movieId]);
  return (
    <>
      <Toaster />
      {data !== null && data.length !== 0 ? (
        <ul>
          {data.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};
export default Review;
