import React from "react";
import { Link } from "react-router-dom";

const ItemPreview = ({ props }) => {
  const { name, price, id } = props;
  return (
    <div className="preview column shadow">
      <Link to={`/items/${id}`}>
        <img
          src="https://res-3.cloudinary.com/tresor11/image/upload/v1592940283/h50xxxqprr5fqjau9oi0.png"
          alt="item"
        />
        <div className="prev-text">
          <div>
            <p>{name}</p>
            <p></p>$ {price}
          </div>
          <div><i class="fas fa-star has-text-warning"></i>
          <i class="fas fa-star has-text-warning"></i>
          <i class="fas fa-star has-text-warning"></i></div>
        </div>
      </Link>
    </div>
  );
};

export default ItemPreview;
