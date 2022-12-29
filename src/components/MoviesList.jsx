import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export const MoviesList = ({ data, text, path }) => {
  const { pathname, search } = useLocation();
  return (
    <>
      {text && <h1>{text}</h1>}
      {data !== null && (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>
              {
                <Link
                  to={`${path}${id}`}
                  state={{ from: `${pathname}${search}` }}
                >
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
  path: PropTypes.string,
};
