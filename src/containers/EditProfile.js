/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editProfile from '../actions/editProfile';
import Nav from './Nav';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.store.user.details.details.name,
      email: this.props.store.user.details.details.email,
      password: this.props.store.user.details.details.password,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  handleSubmit(ev) {
    const path = this.props.store.user.details.details.admin === true ? '/admin' : '/profile';
    ev.preventDefault();
    const callBack = () => {
      this.props.history.push(path);
    };
    this.props.editProfile(this.state, this.props.store.user.auth_token, callBack);
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <Nav text="Edit Profile" />
        <div className="wrap">
          <div className="signup-form">
            <h4 className="form-control new-book-text">CREATE ACCOUNT</h4>
            <form className="form-control" onSubmit={this.handleSubmit}>

              <div className="field">
                <label className="label">Name</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    value={name}
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-profile" />
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="email"
                    value={email}
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    value={password}
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success" type="submit">
                    Update Profile
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  editProfile: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  store: PropTypes.shape({
    single: PropTypes.shape({
      details: PropTypes.shape({
        liked: PropTypes.any,
        price: PropTypes.number,
        id: PropTypes.number,
        item: PropTypes.shape({
          id: PropTypes.number,
          description: PropTypes.string,
          contact: PropTypes.string,
          price: PropTypes.number,
          name: PropTypes.string,
        }),
      }),
    }),
    items: PropTypes.shape({}),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf({}),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
          password: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

const mapStateToProps = store => ({ store });

const mapDispatchToProps = {
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
