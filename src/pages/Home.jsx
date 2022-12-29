import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { MoviesTrending } from 'components/MoviesTrending';
const Home = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <MoviesTrending />
      </Suspense>
    </main>
  );
};

export default Home;
