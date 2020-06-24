import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ItemPreview from '../components/ItemPreview';
import fetchUser from '../actions/fetchUserDetails'
const AdminProfile = (props) => {
  const { store, fetchUser } = props;
  const data=store.user.details
  useEffect(() => {
    fetchUser(store.user.auth_token);
  }, []);
  if (store.user.details.favorites===undefined){
    return (<h1>Hi i'm your profil <Link to="/newitem">new_item</Link> </h1>)
  }
  console.log(data)
  return (
    <div>
    <h1>Hi i'm the admin profile</h1>
    {data.favorites.map(el=><ItemPreview props={el} />)}
    </div>
  );
};

const mapDispatchToProps = {
  fetchUser
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);
