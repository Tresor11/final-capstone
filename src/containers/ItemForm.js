
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageUploader from 'react-images-upload';
import createUser from '../actions/signup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name:"",
      email: "",
      password:"",
      password_confirmation: "",
      image: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop=this.onDrop.bind(this);
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
    console.log(this.state)
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createUser(this.state);
    this.setState({ name: "", email: "",password:"",password_confirmation:"" });
  }

  onDrop = picture => {
    this.setState({ image: picture[0] })
    console.log(this.state)
}

  render() {
    return (
      <div>
        <h4 className="form-control new-book-text">ADD NEW BOOK</h4>
        <form className="form-control" onSubmit={this.handleSubmit}>


        <div class="field">
          <label class="label">Email</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                required
                className="input"
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-profile"></i>
              </span>
            </p>
          </div>

          <div class="field">
          <label class="label">Email</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="email"
                required
                className="input"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <div class="field">
          <label class="label">Password</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                className="input"
                required
                placeholder="password"
                name="password"
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>


          <div class="field">
          <label class="label">Password confirmation</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                required
                className="input"
                placeholder="password confirmation"
                name="password_confirmation"
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <ImageUploader
                withIcon={true}
                buttonText='Profile picture'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

          <div class="field">
            <p class="control">
              <button class="button is-success" type="submit">
                Login
              </button>
            </p>
          </div>
        </form>
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
