/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import editItem from '../actions/editItem';
import Nav from './Nav';

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.store.single.details.item.name,
      price: this.props.store.single.details.item.price,
      contact: this.props.store.single.details.item.contact,
      description: this.props.store.single.details.item.description,
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
    ev.preventDefault();
    const { store, editItem } = this.props;
    editItem(this.state, store.user.auth_token, 1);
    this.setState({
      name: '',
      price: '',
      contact: '',
      description: '',
      image: '',
    });
  }

  render() {
    console.log(this.props.store);
    const {
      name, description, contact, price,
    } = this.state;
    return (
      <div>
        <Nav text="Edit Item" />
        <div className="wrap">
          <div className="signup-form">
            <h4 className="form-control new-book-text">CREATE ITEM</h4>
            <form className="form-control" onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
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
                    placeholder="Price"
                    name="price"
                    value={price}
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
                    placeholder="contact"
                    name="contact"
                    value={contact}
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
                    value={description}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <p className="control">
                  <button className="button is-success" type="submit">
                    Update
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

const mapStateToProps = store => ({ store });

const mapDispatchToProps = {
  editItem,
};

EditItem.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf(PropTypes.shape({})),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.string,
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
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
  }).isRequired,
  editItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
