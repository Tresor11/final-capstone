import React from "react";
import {Link} from 'react-router-dom';
import ImageUploader from 'react-images-upload';

const UserFrom = (props) => {
 const {handleChange,handleSubmit,onDrop,text,values}=props; 
  return (
    <div className="wrap">
      <div className="signup-form">
  <h4 className="form-control new-book-text">{text}</h4>
        <form className="form-control" onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <ImageUploader
            withIcon={true}
            buttonText="Profile picture"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />

          <div class="field">
            <p class="control">
              <button class="button is-success" type="submit">
                {text}
              </button>
            </p>
          </div>
        </form>
        <h4>-Have an account?-</h4>
        <Link to="/" className="button has-text-info">
          Login
        </Link>
      </div>
    </div>
  );
};

export default UserFrom;
