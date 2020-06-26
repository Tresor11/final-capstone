import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import createUser from '../actions/signup';

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

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
    console.log(this.state);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      name: '', email: '', password: '', password_confirmation: '',
    });
  }

  onDrop(picture) {
    this.setState({ image: picture[0] });
    console.log(this.state);
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
                  type="text"
                  required
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
                  className="input"
                  type="password"
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
              <label className="label">Password confirmation</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  required
                  className="input"
                  placeholder="password confirmation"
                  name="password_confirmation"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>

            <ImageUploader
              withIcon
              buttonText="Profile picture"
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />

            <div className="field">
              <p className="control">
                <button className="button is-success" type="submit">
                  Signup
                </button>
              </p>
            </div>
          </form>
          <h4>-Have an account?-</h4>
          <Link to="/" className="button has-text-info">Login</Link>
        </div>
      </div>
    );
  }
}

SignupForm.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createUser,
};

export default connect(null, mapDispatchToProps)(SignupForm);
