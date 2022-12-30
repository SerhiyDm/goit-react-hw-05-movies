import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits, getPosterUrl } from 'services/rest_api';
import { Toaster } from 'react-hot-toast';
import { NotifyError } from './Notify/Notify';

const Cast = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getData = async id => {
      try {
        const { cast } = await fetchCredits(id);
        setData(cast);
        window.scrollBy({
          top: 480,
          behavior: 'smooth',
        });
      } catch (error) {
        NotifyError(error.message);
      }
    };
    getData(movieId);
  }, [movieId]);

  return (
    <>
      <Toaster />
      {data && data.length !== 0 ? (
        <ul>
          {data.map(({ character, name, profile_path, credit_id }) => (
            <li key={credit_id}>
              {profile_path && (
                <img src={getPosterUrl(profile_path, 'w200')} alt="profile" />
              )}
              <div>
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any casts for this movie</p>
      )}
    </>
  );
};

export default Cast;
