/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';
import createItem from '../actions/createItem';
import Nav from './Nav';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      contact: '',
      description: '',
      image: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({ image: picture[0] });
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { store, createItem, history } = this.props;
    const callBack = () => {
      this.setState({
        name: '', contact: '', price: '', description: '', image: '',
      });
      history.push('/items');
    };
    createItem(this.state, store.user.auth_token, callBack);
  }

  render() {
    const {
      name, contact, description, price,
    } = this.state;
    return (
      <div>
        <Nav text="New Item" />
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
                    required
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
                    required
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
                    required
                    value={contact}
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
                    value={description}
                    placeholder="Textarea"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <ImageUploader
                withIcon
                buttonText="Item Image"
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />

              <div className="field">
                <p className="control">
                  <button className="button is-success" type="submit">
                    CREATE
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
  createItem,
};

ItemForm.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.shape({}),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf(PropTypes.shape({})),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  createItem: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
