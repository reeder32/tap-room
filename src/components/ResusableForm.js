import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
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
        </Form.Group>
        <Button variant="primary" type="submit">
          {props.buttonText}
        </Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
