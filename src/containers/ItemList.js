import React,{useEffect} from 'react';
import { connect } from "react-redux";
import fetchItems from '../actions/fetchItems';
import ItemPreview from '../components/ItemPreview';
import Nav from './Nav'

const ItemList=(props)=>{
    const {fetchItems,store} = props
    useEffect(()=>{
        fetchItems(store.user.auth_token)
    },[fetchItems,store.user.auth_token])
    return(
        <div>
            <Nav text={"Items list"} />
            <h4 className="is-title is-size-4 has-text-centered t-">Available Items</h4>
            <div className="wrap-list">
            <div className="item-list">
            {store.items.products.map(el=><ItemPreview key={el.id} props={el} />)}
        </div>
        </div>
        </div>
        )
}

const mapDispatchToProps = {
    fetchItems,
  };
  
  const mapStateToProps=(store)=>({store})

  export default connect(mapStateToProps,mapDispatchToProps)(ItemList)