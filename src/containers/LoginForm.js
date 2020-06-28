/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginUser from '../actions/login';
import fetchUser from '../actions/fetchUserDetails';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { store, history } = this.props;
    if (store.user.auth_token !== '') {
      history.push('/items');
    }
  }

  handleSubmit(ev) {
    const { loginUser } = this.props;
    ev.preventDefault();
    loginUser(this.state);
    this.setState({ email: '', password: '' });
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  render() {
    const { store, history, fetchUser } = this.props;
    const { email, password } = this.state;
    if (store.user.auth_token !== '') {
      fetchUser(store.user.auth_token);
      history.push('/items');
    }
    return (
      <div className="wrap">
        <div className="login-form">
          <h4 className="form-control new-book-text is-size-4">LOGIN</h4>
          <form className="form-control" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <p className="control has-icons-left">
                <input
                  type="email"
                  value={email}
                  required
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
                  type="password"
                  value={password}
                  className="input"
                  required
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
                  Login
                </button>
              </p>
            </div>
          </form>
          <h4>or</h4>
          <Link to="/signup" className="button is-outlined has-text-primary">
            Signup
          </Link>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  store: PropTypes.shape({
    user: PropTypes.shape({
      auth_token: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = {
  loginUser,
  fetchUser,
};

const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
