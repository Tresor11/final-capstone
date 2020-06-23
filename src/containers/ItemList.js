import React,{useEffect} from 'react';
import { connect } from "react-redux";
import fetchItems from '../actions/fetchItems';
import ItemPreview from '../components/ItemPreview';

const ItemList=(props)=>{
    const {fetchItems,store} = props
    useEffect(()=>{
        fetchItems(store.user.auth_token)
    },[fetchItems,store.user.auth_token])
    return(
        <div className="columns">
            {store.items.products.map(el=><ItemPreview props={el} />)}
        </div>
        )
}

const mapDispatchToProps = {
    fetchItems,
  };
  
  const mapStateToProps=(store)=>({store})

  export default connect(mapStateToProps,mapDispatchToProps)(ItemList)