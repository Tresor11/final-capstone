import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';
import { Link } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';
import { prototype } from 'enzyme-adapter-react-16';
import ItemPreview from '../components/ItemPreview';
import fetchUser from '../actions/fetchUserDetails';
import Nav from './Nav';
import Spiner from '../components/Spiner';

const UserProfile = props => {
  const { store, fetchUser } = props;
  const data = store.user.details;
  useEffect(() => {
    fetchUser(store.user.auth_token);
  }, [fetchUser, store.user.auth_token]);

  const shouldComponentRender = () => {
    if (store.user.pending === true || data.details.image.url === undefined) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return (<Spiner />);
  }

  return (
    <div>
      <Nav text="Profile" />
      <div className="credential shadow">
        <img src={data.details.image.url} alt="profile" />
        <div>
          <p className="tag is-rounded">Name :</p>
          {' '}
          <p>{data.details.name}</p>
        </div>
        <div>
          <p className="tag is-rounded">Email :</p>
          {' '}
          <p>{data.details.email}</p>
          {' '}
        </div>
        <div>
          <button className="button" type="button">
            <Link to="/edit-profile"> Edit </Link>
          </button>
        </div>
      </div>
      <div className="chart shadow">
        <Chart
          width="100%"
          height="auto"
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['item', 'numer'],
            ['Wish list', data.favorites.length],
            ['Available items', store.items.products.length],
          ]}
          options={{
            title: 'My Stats',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>

      <hr />

      <div className="credential shadow">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">Estimated Expense</span>
            <span className="tag is-warning">
              {data.expense}
              $
            </span>
          </div>
        </div>
      </div>

      <h4 className="is-title is-size-4 has-text-centered mt-4 mb-4">
        My favotites
        {' '}
        <i className="fas fa-heart has-text-danger" aria-hidden="true" />
        {' '}
      </h4>
      {data.favorites.map(el => (
        <ItemPreview props={el} key={el.id} />
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  fetchUser,
};

const mapStateToProps = store => ({ store });

UserProfile.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.arrayOf(prototype.shape({})),
    user: PropTypes.shape({
      pending: PropTypes.bool.isRequired,
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf(shape({})),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
