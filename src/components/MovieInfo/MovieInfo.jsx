import { Link } from 'react-router-dom';
import { getPosterUrl } from 'services/rest_api';
import { Wraper, InfoWraper } from './MovieInfo.styled';
// import PropTypes, { arrayOf } from 'prop-types';

const MovieInfo = ({ data }) => {
  const { title, poster_path, overview, genres, vote_average } = data;
  return (
    <>
      {' '}
      <Wraper padding={'15px'} display={'flex'}>
        <img src={getPosterUrl(poster_path, 'w200')} alt="" />
        <InfoWraper>
          <h1>{title}</h1>
          <p>User Score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </InfoWraper>
      </Wraper>
      <Wraper padding={'20px'}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </Wraper>
    </>
  );
};
export default MovieInfo;

// MovieInfo.propTypes = PropTypes.shape({
//   title: PropTypes.string,
//   poster_path: PropTypes.string,
//   overview: PropTypes.string,
//   genres: arrayOf(PropTypes.string),
//   vote_average: PropTypes.number,
// });
