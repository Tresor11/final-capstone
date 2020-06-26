import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import { Link } from 'react-router-dom';
import ItemPreview from '../components/ItemPreview';
import fetchUser from '../actions/fetchUserDetails';
import Nav from './Nav';

const AdminProfile = props => {
  const { store, fetchUser } = props;
  const data = store.user.details;
  console.log(store);
  useEffect(() => {
    fetchUser(store.user.auth_token);
  }, [fetchUser, store.user.auth_token]);
  return (
    <div>
      <Nav text="Profile" />
      <div className="credential shadow">
        <img src={data.details.image.url} alt="profile" />
        <div>
          <p>Name :</p>
          {' '}
          <p>{data.details.name}</p>
        </div>
        <div>
          <p>Email :</p>
          {' '}
          <p>{data.details.email}</p>
          {' '}
        </div>
        <div>
          <p>Admin :</p>
          {' '}
          <p>Yes</p>
          {' '}
        </div>
        <div>
          <button className="button">
            {' '}
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
            ['Liked items', data.liked.length],
            ['Total items', store.items.products.length],
          ]}
          options={{
            title: 'Stats',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>

      <h4 className="is-title is-size-4 has-text-centered mt-4 mb-4">
        My favotites
        {' '}
        <i className="fas fa-heart has-text-danger" aria-hidden="true" />
        {' '}
      </h4>
      {store.items.products.map(el => (
        <ItemPreview props={el} />
      ))}
    </div>
  );
};

// AdminProfile.propTypes = {
//   pending: PropTypes.bool.isRequired,
//   getCategories: PropTypes.func.isRequired,
// };

const mapDispatchToProps = {
  fetchUser,
};

const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);
