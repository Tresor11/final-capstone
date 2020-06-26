import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editProfile from '../actions/editProfile';

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
    this.props.editProfile(this.state, this.props.store.user.auth_token);
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="wrap">
        <div className="signup-form">
          <h4 className="form-control new-book-text">CREATE ACCOUNT</h4>
          <form className="form-control" onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label">Name</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  value={this.state.name}
                  type="text"
                  className="input"
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
                  value={this.state.email}
                  className="input"
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
                  className="input"
                  value={this.state.password}
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
    );
  }
}

EditProfile.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({ store });

const mapDispatchToProps = {
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
