import React from "react";
import axios from "axios";
// import { Form, Button } from "react-bootstrap";

class Form extends React.Component {
  state = {
    fields: {
      fullname: "",
      email: "",
      confirmEmail: "",
    },
    fieldErrors: {},
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const fields = this.state.fields;
    const fieldErrors = this.validate(fields);

    // if there is an error
    if (Object.keys(fieldErrors).length) return;

    // otherwise
    let email = {
      name: fields.fullname,
      email: fields.email,
    };

    const response = await axios
      .post(
        "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
        email
      )
      .catch((error) => {
        if (error.response) {
          // console.log(error.response);
          alert("Opps it seems not a valid request, please try a again.");
        }
      });

    if (response) {
      alert("Thank you, you are now in our invite list!");
      this.props.onSuccess(); // redirect to home if successful
    }
  };

  validate = (fields) => {
    let error = {};
    let fullname = fields.fullname.trim();
    let email = fields.email;
    let confirmEmail = fields.confirmEmail;
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fullname.length < 3) {
      error.fullname = "Name should contain at least 3 characters";
    }

    if (!pattern.test(email)) {
      error.email = "Invalid email format";
    }

    if (email !== confirmEmail) {
      error.confirmEmail = "Confirmed Email does not match the email";
    }

    this.setState({ fieldErrors: error });
    return error;
  };

  onChangeHandler = (e) => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  render() {
    return (
      <div className="ui container" style={{ padding: "60px" }}>
        <form className="ui large form success" onSubmit={this.onFormSubmit}>
          <div
            className="ui medium center aligned header"
            style={{ marginBottom: "30px" }}
          >
            Request an invite
          </div>
          <div className="field">
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              onChange={this.onChangeHandler}
              required
            />
            <span style={{ color: "red" }}>
              {this.state.fieldErrors.fullname}
            </span>
          </div>
          <div className="field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.onChangeHandler}
              required
            />
            <span style={{ color: "red" }}>{this.state.fieldErrors.email}</span>
          </div>
          <div className="field">
            <input
              type="text"
              name="confirmEmail"
              placeholder="Confirm Email"
              onChange={this.onChangeHandler}
              required
            />
            <span style={{ color: "red" }}>
              {this.state.fieldErrors.confirmEmail}
            </span>
          </div>
          <button className="ui positive fluid button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
