import React, { useEffect } from "react";
import { connect } from "react-redux";
import ItemPreview from "../components/ItemPreview";
import fetchUser from "../actions/fetchUserDetails";
import Nav from "./Nav";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";

const UserProfile = (props) => {
  const { store, fetchUser } = props;
  const data = store.user.details;
  console.log();
  useEffect(() => {
    fetchUser(store.user.auth_token);
  }, [fetchUser, store.user.auth_token]);
  if (store.user.details.admin === true) {
  }
  return (
    <div>
      <Nav text={"Profile"} />
      <div className="credential shadow">
        <img src={data.details.image.url} alt="profile" />
        <div>
          <p>Name :</p> <p>{data.details.name}</p>
        </div>
        <div>
          <p>Email :</p> <p>{data.details.email}</p>{" "}
        </div>
        <div>
          <button className="button">
            <Link to="/edit-profile"> Edit </Link>
          </button>
        </div>
      </div>
      <div className="chart shadow">
        <Chart
          width={"100%"}
          height={"auto"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["item", "numer"],
            ["Wish list", data.favorites.length],
            ["Available items", store.items.products.length],
          ]}
          options={{
            title: "My Stats",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>

      <h4 className="is-title is-size-4 has-text-centered mt-4 mb-4">
        My favotites{" "}
        <i class="fas fa-heart has-text-danger" aria-hidden="true"></i>{" "}
      </h4>
      {data.favorites.map((el) => (
        <ItemPreview props={el} />
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  fetchUser,
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
