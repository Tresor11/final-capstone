import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemPreview = ({ props }) => {
  const {
    name, price, id, image,
  } = props;
  return (
    <div className="preview column shadow">
      <Link to={`/items/${id}`}>
        <div className="item-img">
          <img className="responsive" src={`${image.url}`} alt="preview" />
        </div>
        <div className="prev-text">
          <div>
            <p>{name}</p>
            <p />
            $
            {' '}
            {price}
          </div>
          <div>
            <i className="fas fa-star has-text-warning" />
            <i className="fas fa-star has-text-warning" />
            <i className="fas fa-star has-text-warning" />
          </div>
        </div>
      </Link>
    </div>
  );
};

ItemPreview.defaultProps = {
  name: '',
  image: {},
  price: 0,
  id: 0,
  props: {},
};

ItemPreview.propTypes = {
  name: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  id: PropTypes.number,
  price: PropTypes.number,
  props: PropTypes.shape({}),
};

export default ItemPreview;
