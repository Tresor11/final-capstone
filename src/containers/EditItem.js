import React from "react";
import { connect } from "react-redux";
import editItem from "../actions/editItem";

class EditItem extends React.Component {
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
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
    console.log(this.state);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.editItem(this.state, this.props.store.user.auth_token,this.props.store.single.id);
    this.setState({
      name: "",
      price: "",
      contact: "",
      description: "",
      image: "",
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h4 className="form-control new-book-text">EDIT ITEM</h4>
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

          <div class="field">
            <p class="control">
              <button class="button is-success" type="submit">
                Update Item
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {
  editItem
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
