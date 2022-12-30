import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQuery } from 'services/rest_api';
import { NotifyError } from './Notify/Notify';
import { MoviesList } from './MoviesList';
const MoviesByQuery = () => {
  const [renderData, setRenderData] = useState(null);
  const [searchParam] = useSearchParams();

  useEffect(() => {
    const data = searchParam.get('query');
    if (data !== null ?? data !== '') {
      getMovies(data);
    }
    return;
    async function getMovies() {
      try {
        const { results } = await fetchQuery(data);
        if (results.length === 0) {
          NotifyError('There are no movies for this request');
          return;
        }
        setRenderData(results);
      } catch (error) {
        NotifyError(error.message);
      }
    }
  }, [searchParam]);

  return <>{renderData && <MoviesList data={renderData} />}</>;
};

export default MoviesByQuery;
