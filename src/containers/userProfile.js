import React, { useEffect } from "react";
import { connect } from "react-redux";
import ItemPreview from '../components/ItemPreview';
import fetchUser from '../actions/fetchUserDetails';
import Nav from '../components/Nav'
const UserProfile = (props) => {
  const { store, fetchUser } = props;
  const data=store.user.details
  console.log(data);
  useEffect(() => {
    fetchUser(store.user.auth_token);
  }, []);
  if (store.user.details.favorites===undefined){
    return (<h1>Hi i'm your profil</h1>)
  }
  return (
    <div>
    <Nav text={"Profile"} />
    <div className="credential shadow">
      <img src={data.details.image.url}/>
  <div><p>Name :</p> <p>{data.details.name}</p></div>
  <div><p>Email :</p> <p>{data.details.email}</p> </div>
    <div><button className="button">Edit</button></div>
    </div>
    <h4 className="is-title is-size-4 has-text-centered mt-4 mb-4">My favotites <i class="fas fa-heart has-text-danger" aria-hidden="true"></i> </h4>
    {data.favorites.map(el=><ItemPreview props={el} />)}
    </div>
  );
};

const mapDispatchToProps = {
  fetchUser
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
