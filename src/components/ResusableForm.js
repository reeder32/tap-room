import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="name" required />
        <input type="text" name="brand" placeholder="brand" required />
        <input type="text" name="price" placeholder="price" required />
        <input
          type="text"
          name="alcoholContent"
          placeholder="alcohol content"
          required
        />
        <input
          type="number"
          name="remaining"
          placeholder="remaining pints"
          required
        />
        <Button variant="primary" type="submit">
          {props.buttonText}
        </Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
