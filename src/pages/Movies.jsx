import { SearchForm } from 'components/SearchForm/SearchForm';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
const MoviesByQuery = lazy(() => import('components/MoviesByQuery'));
const Movies = () => {
  return (
    <main>
      <Toaster />
      <SearchForm />
      <MoviesByQuery />
    </main>
  );
};

export default Movies;
