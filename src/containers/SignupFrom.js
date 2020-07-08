/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import createUser from '../actions/signup';
import fetchUser from '../actions/fetchUserDetails';
import { loadingIcon } from '../helper/index';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      image: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidUpdate() {
    const { store, history, fetchUser } = this.props;
    if (store.user.auth_token !== '') {
      loadingIcon();
      fetchUser(store.user.auth_token);
      history.push('/items');
    }
  }

  onDrop(picture) {
    this.setState({ image: picture[0] });
  }

  handleSubmit(ev) {
    const { createUser } = this.props;
    ev.preventDefault();
    createUser(this.state);
    const { store } = this.props;
    if (store.user.auth_token !== '') {
      this.setState({
        name: '', email: '', password: '', password_confirmation: '',
      });
    }
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  render() {
    const {
      name, email, password, password_confirmation,
    } = this.state;
    return (
      <div className="wrap signup-wrap">
        <div className="signup-form">
          <h4 className="form-control new-book-text">CREATE ACCOUNT</h4>
          <form className="form-control" onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-login" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  required
                  placeholder="password"
                  value={password}
                  name="password"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Password confirmation</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  required
                  placeholder="password confirmation"
                  value={password_confirmation}
                  name="password_confirmation"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>

            <ImageUploader
              withIcon
              buttonText="Profile picture"
              onChange={this.onDrop}
              required
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={500000}
            />

            <div className="field">
              <p className="control">
                <button className="button signup-btn" type="submit">
                  Signup
                </button>
              </p>
            </div>
          </form>
          <h4>Have an account?</h4>
          <Link to="/login" className="button">Login</Link>
        </div>
      </div>
    );
  }
}

SignupForm.defaultProps = {
  history: {},
};

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  store: PropTypes.shape({
    user: PropTypes.shape({
      auth_token: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const mapDispatchToProps = {
  createUser,
  fetchUser,
};

const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
