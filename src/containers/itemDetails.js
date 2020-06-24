import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchSingle from "../actions/fetchSingle";
import addFavorite from '../actions/addfavorite'
const ItemDetails = (props) => {
  const { store, fetchSingle, match,addFavorite } = props;
  useEffect(() => {
    fetchSingle(store.user.auth_token, match.params.id);
  }, []);
  const { single } = store;
  const handleClick=()=>{
      addFavorite(store.user.auth_token,single.details.id)
  }
  return (
    <div className="item-details">
      <div className="image">
        <img
          src="https://res-3.cloudinary.com/tresor11/image/upload/v1592940283/h50xxxqprr5fqjau9oi0.png"
          alt="item"
        />
        <div className="basic-info">
          <div>image</div>
          <div>price</div>
        </div>
      </div>
      <div>
        <div>
          <h4 className="is-title is-size-5">About this item</h4>
          <p>{single.details.description}</p>
        </div>
        <div>
          <h4 className="is-title is-size-5">contact</h4>
          <p>{single.details.contact}</p>
        </div>
      </div>
      <button className='add' onClick={handleClick} > Add to favorite</button>
    </div>
  );
};

const mapDispatchToProps = {
  fetchSingle,
  addFavorite
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
