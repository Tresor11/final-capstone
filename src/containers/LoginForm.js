import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loginUser from '../actions/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    const {store,history}=this.props
    console.log(store)
    if (store.user.auth_token!==''){
      history.push('/items')
    }
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.loginUser(this.state)
    this.setState({ email: "",password:""});
  }


  render() {
    const {store,history}=this.props
    if (store.user.auth_token!==''){
      history.push('/items')
    }
    return (
      <div>
        <h4 className="form-control new-book-text">ADD NEW BOOK</h4>
        <form className="form-control" onSubmit={this.handleSubmit}>

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

LoginForm.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loginUser,
};

const mapStateToProps=(store)=>({store})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
