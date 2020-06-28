import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import { Link } from 'react-router-dom';
import ItemPreview from '../components/ItemPreview';
import fetchUser from '../actions/fetchUserDetails';
import Nav from './Nav';
import Spiner from '../components/Spiner';

const AdminProfile = props => {
  const { store, fetchUser } = props;
  const data = store.user.details;
  useEffect(() => {
    fetchUser(store.user.auth_token);
  }, [fetchUser, store.user.auth_token]);

  const shouldComponentRender = () => {
    if (store.user.pending === true || data.details === {}) return false;
    return true;
  };

  return (
    <div>
      <Nav text="Profile" />
      {shouldComponentRender() === true ? (
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
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">Admin</span>
              <span className="tag is-success">Yes</span>
            </div>
          </div>
          <div>
            <button className="button" type="button">
              {' '}
              <Link to="/edit-profile"> Edit </Link>
            </button>
          </div>
        </div>
      ) : <Spiner />}

      <div className="chart shadow">
        <Chart
          width="100%"
          height="auto"
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['item', 'numer'],
            ['Liked items', data.liked.length],
            // eslint-disable-next-line react/prop-types
            ['Total items', store.items.products.length],
          ]}
          options={{
            title: 'Stats',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
        <hr />
        <div className="credential shadow">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">Estimated revenue</span>
              <span className="tag is-warning">
                {data.income}
                $
              </span>
            </div>
          </div>
          <div>
            <button className="button" type="button">
              {' '}
              <Link to="/newitem"> New Item </Link>
            </button>
          </div>
        </div>
      </div>

      <h4 className="is-title is-size-4 has-text-centered mt-4 mb-4">
        Liked Items
        {' '}
        <i className="fas fa-heart has-text-danger" aria-hidden="true" />
        {' '}
      </h4>
      {data.liked.map(el => (
        <ItemPreview key={el.id} props={el} />
      ))}
    </div>
  );
};

AdminProfile.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        liked: PropTypes.arrayOf(PropTypes.shape({})),
        income: PropTypes.number,
        details: PropTypes.shape({
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchUser,
};

const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);
