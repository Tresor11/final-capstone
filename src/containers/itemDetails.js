import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchSingle from "../actions/fetchSingle";
import addFavorite from "../actions/addfavorite";
import Nav from "../components/Nav";
const ItemDetails = (props) => {
  const { store, fetchSingle, match, addFavorite } = props;
  console.log(store);
  useEffect(() => {
    fetchSingle(store.user.auth_token, match.params.id);
  }, []);
  const { single } = store;
  const handleClick = () => {
    addFavorite(store.user.auth_token, single.details.id);
  };
  return (
    <div>
      <Nav text={single.details.name} />
      <div className="wrap-details">
        <div className="item-details">
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
                ></div>
                <div>
                  <h4>{store.user.details.details.name}</h4>
                  <div>
                    <i class="fas fa-star has-text-warning"></i>
                    <i class="fas fa-star has-text-warning"></i>
                    <i class="fas fa-star has-text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="price">$ {single.details.price}</div>
            </div>
          </div>
          <div className="full-info">
            <div>
              <h4>About this item</h4>
              <p>{single.details.description}</p>
            </div>
            <div>
              <h4>contact</h4>
              <p>{single.details.contact}</p>
            </div>
          </div>
          <button className="button" onClick={handleClick}>
            {" "}
            Add to favorite
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchSingle,
  addFavorite,
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
