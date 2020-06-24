import React from "react";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import createItem from "../actions/createItem";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      contact: "",
      description: "",
      image: "",
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
    this.props.createItem(this.state,this.props.state.user.auth_token);
    this.setState({
      name: "",
      price: "",
      contact: "",
      description: "",
      image: "",
    });
  }

  onDrop = (picture) => {
    this.setState({ image: picture[0] });
    console.log(this.state);
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <h4 className="form-control new-book-text">ADD NEW BOOK</h4>
        <form className="form-control" onSubmit={this.handleSubmit}>
          <div class="field">
            <label class="label">Name</label>
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
            <label class="label">Price</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="number"
                required
                className="input"
                placeholder="Price"
                name="price"
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Contact</label>
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                required
                className="input"
                placeholder="contact"
                name="contact"
                onChange={this.handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-profile"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                name="description"
                placeholder="Textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>

          <ImageUploader
            withIcon={true}
            buttonText="Item Image"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
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

const mapStateToProps=(state)=>({state})

const mapDispatchToProps = {
  createItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
