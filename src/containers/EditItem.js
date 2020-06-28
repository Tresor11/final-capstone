/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import editItem from '../actions/editItem';

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      contact: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const createItem = this.props;
    const { store } = this.props;
    createItem(this.state, store.user.auth_token);
    this.setState({
      name: '',
      price: '',
      contact: '',
      description: '',
      image: '',
    });
  }

  render() {
    return (
      <div>
        <h4 className="form-control new-book-text">ADD NEW BOOK</h4>
        <form className="form-control" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                required
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
            <label className="label">Price</label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="number"
                required
                placeholder="Price"
                name="price"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
            </p>
          </div>

          <div className="field">
            <label className="label">Contact</label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                required
                placeholder="contact"
                name="contact"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-profile" />
              </span>
            </p>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                name="description"
                placeholder="Textarea"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success" type="submit">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = {
  editItem,
};

EditItem.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.arrayOf({}),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf({}),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.string,
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
