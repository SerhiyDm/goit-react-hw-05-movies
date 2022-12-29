import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';
const MoviesByQuery = lazy(() => import('components/MoviesByQuery'));
const Movies = () => {
  return (
    <main>
      <Toaster />
      <SearchForm />
      <Suspense fallback={<Loader />}>
        <MoviesByQuery />
      </Suspense>
    </main>
  );
};

export default Movies;
