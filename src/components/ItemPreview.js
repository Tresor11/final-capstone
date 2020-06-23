import React from 'react';

const ItemPreview=({props})=>{
    const {name,description,image,price}=props
    return(
        <div className="preview column">
            <img src="https://res-3.cloudinary.com/tresor11/image/upload/v1592940283/h50xxxqprr5fqjau9oi0.png" />
            <div className="prev-text">
    <div><p>{name}</p><p></p>$ {price}</div>
                <div>Liked by</div>
            </div>
        </div>
    )
}

export default ItemPreview;