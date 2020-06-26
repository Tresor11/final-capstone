import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchSingle from '../actions/fetchSingle';
import addFavorite from '../actions/addfavorite';
import Nav from './Nav';

const ItemDetails = props => {
  const {
    store, fetchSingle, match, addFavorite, history,
  } = props;
  useEffect(() => {
    fetchSingle(store.user.auth_token, match.params.id, 'GET');
  }, [fetchSingle, store.user.auth_token, match.params.id]);
  const { single } = store;
  const handleClick = () => {
    addFavorite(store.user.auth_token, single.details.id);
  };
  const handleDelete = () => {
    fetchSingle(store.user.auth_token, match.params.id, 'DELETE');
    history.push('/items');
  };
  return (
    <div>
      <Nav text={single.details.item.name} />
      <div className="wrap-details">
        <div className="item-details shadow">
          <div className="image">
            <img
              src="https://res-3.cloudinary.com/tresor11/image/upload/v1592940283/h50xxxqprr5fqjau9oi0.png"
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
                {single.details.price}
              </div>
            </div>
          </div>
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
              <button className="edit">
                <Link to={`/items/${single.details.item.id}/edit`}>Edit item</Link>
              </button>

              <button
                className={`remove
            }`}
                onClick={handleDelete}
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
