import MovieInfo from 'components/MovieInfo/MovieInfo';
import { NotifyError } from 'components/Notify/Notify';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/rest_api';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const location = useLocation();
  const backLinkParams = location.state?.from;
  const backRef = useRef(backLinkParams).current;
  useEffect(() => {
    const getData = async id => {
      try {
        const data = await fetchMovie(id);
        setData(data);
      } catch (error) {
        NotifyError(error.message);
      } finally {
      }
    };
    getData(movieId);
  }, [movieId]);

  return (
    <main>
      <Toaster />
      <BackLink to={backRef}>Go Back</BackLink>
      <Suspense fallback={<Loader />}>
        {data && <MovieInfo data={data} />}
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
