import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchItems from '../actions/fetchItems';
import ItemPreview from '../components/ItemPreview';
import Nav from './Nav';

const ItemList = props => {
  const { fetchItems, store } = props;
  useEffect(() => {
    fetchItems(store.user.auth_token);
  }, [fetchItems, store.user.auth_token]);
  return (
    <div>
      <Nav text="Items list" />
      <h4 className="is-title is-size-4 has-text-centered t-">Available Items</h4>
      <div className="wrap-list">
        <div className="item-list">
          {store.items.products.map(el => <ItemPreview key={el.id} props={el} />)}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchItems,
};

const mapStateToProps = store => ({ store });

ItemList.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.arrayOf({}),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf({}),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.string,
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchItems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
