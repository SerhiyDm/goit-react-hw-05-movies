import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export const MoviesList = ({ data, text }) => {
  const location = useLocation();
  return (
    <>
      {text && <h1>{text}</h1>}
      {data !== null && (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>
              {
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              }
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
  text: PropTypes.string,
};
