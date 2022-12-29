import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/rest_api';
import { NotifyError } from './Notify/Notify';
import { Toaster } from 'react-hot-toast';
import { MoviesList } from './MoviesList';
export const MoviesTrending = () => {
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    getTrending();
    async function getTrending() {
      try {
        const data = await fetchTrendingMovies();
        setTrending(data.results);
      } catch (error) {
        NotifyError(error.message);
      }
    }
  }, []);
  return (
    <>
      <Toaster />
      <MoviesList data={trending} text="Trending movies" path="movies/" />
    </>
  );
};
