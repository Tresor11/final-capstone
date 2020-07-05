import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchSingle from '../actions/fetchSingle';
import addFavorite from '../actions/addfavorite';
import Nav from './Nav';
import Spiner from '../components/Spiner';
import { loadingIcon } from '../helper/index';

const ItemDetails = props => {
  const {
    store, fetchSingle, match, addFavorite, history,
  } = props;
  useEffect(() => {
    fetchSingle(store.user.auth_token, match.params.id, 'GET');
  }, [fetchSingle, store.user.auth_token, match.params.id]);
  const { single } = store;
  const handleClick = () => {
    if (single.details.liked === true) {
      addFavorite(store.user.auth_token, single.details.item.id, 'DELETE');
    } else {
      addFavorite(store.user.auth_token, single.details.item.id, 'POST');
    }
  };
  const handleDelete = () => {
    fetchSingle(store.user.auth_token, match.params.id, 'DELETE');
    history.push('/items');
  };

  const shouldComponentRender = () => {
    if (single.details.item.name === undefined) return false;
    return true;
  };

  loadingIcon();

  return (
    <div>
      <Nav text={single.details.item.name} />
      <div className="wrap-details">
        <div className="item-details shadow">
          {shouldComponentRender() === true ? (
            <div className="image">
              <img
                src={`${single.details.item.image.url}`}
                alt="item"
              />
              <div className="basic-info">
                <div className="user-image">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${store.user.details.details.image.url})`,
                    }}
                  />
                  <div>
                    <h4>{store.user.details.details.name}</h4>
                    <div>
                      <i className="fas fa-star has-text-warning" />
                      <i className="fas fa-star has-text-warning" />
                      <i className="fas fa-star has-text-warning" />
                    </div>
                  </div>
                </div>
                <div className="price">
                  $
                  {single.details.item.price}
                </div>
              </div>
            </div>
          ) : <Spiner />}
          <div className="full-info">
            <div>
              <h4>About this item</h4>
              <p>{single.details.item.description}</p>
            </div>
            <div>
              <h4>contact</h4>
              <p>{single.details.item.contact}</p>
            </div>
          </div>
          {store.user.details.details.admin === true ? (
            <div className="admin-action">
              <button className="edit" type="button">
                <Link to={`/items/${single.details.item.id}/edit`}>Edit item</Link>
              </button>

              <button
                className={`remove
            }`}
                onClick={handleDelete}
                type="button"
              >
                Delete item
              </button>
            </div>
          ) : (
            <button
              className={`button ${
                single.details.liked === true ? 'remove' : 'add'
              }`}
              onClick={handleClick}
              type="button"
            >
              {' '}
              {single.details.liked === true
                ? 'remove from favorites'
                : 'add to favorites'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchSingle,
  addFavorite,
};

const mapStateToProps = store => ({ store });

ItemDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  store: PropTypes.shape({
    single: PropTypes.shape({
      pending: PropTypes.bool.isRequired,
      details: PropTypes.shape({
        liked: PropTypes.bool,
        price: PropTypes.number,
        id: PropTypes.number,
        item: PropTypes.shape({
          id: PropTypes.number,
          description: PropTypes.string,
          contact: PropTypes.string,
          price: PropTypes.number,
          name: PropTypes.string,
          image: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
    }),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf(PropTypes.shape({})),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({
            url: PropTypes.string,
          }),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchSingle: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
