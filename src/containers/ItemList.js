import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchItems from '../actions/fetchItems';
import ItemPreview from '../components/ItemPreview';
import Nav from './Nav';
import Spiner from '../components/Spiner';

const ItemList = props => {
  const { fetchItems, store } = props;
  useEffect(() => {
    fetchItems(store.user.auth_token);
  }, [fetchItems, store.user.auth_token]);

  const shouldComponentRender = () => {
    if (store.items.pending === true || store.items.products.length < 1) return false;
    return true;
  };

  return (
    <div>
      <Nav text="Items list" />
      <h4 className="is-title is-size-4 has-text-centered welcome">Available Items</h4>
      <div className="wrap-list">
        {shouldComponentRender() === true ? (
          <div className="item-list">
            {store.items.products.map(el => <ItemPreview key={el.id} props={el} />)}
          </div>
        ) : <Spiner /> }
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
    items: PropTypes.shape({
      pending: PropTypes.bool,
      products: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf({}),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchItems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
