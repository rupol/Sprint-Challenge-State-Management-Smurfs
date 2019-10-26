import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addSmurf } from "../actions/smurfs";

const FormContainer = styled.div`
  padding: 5rem 1%;
  width: 100%;
  margin: 0 auto;
`;

const FormHeader = styled.h2`
  text-shadow: 3px 3px 0 black;
  color: #f29c24;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 6rem;
  border: none;
  outline: none;
  padding: 0 2rem;
  font-size: 2.5rem;
  font-family: "Slackey", cursive;
  background-color: #68b5fb;
  color: #000;
  border-radius: 20px;
  margin: 1rem;
  &::placeholder {
    color: #4e4e4e;
  }
  @media (max-width: 675px) {
    width: 100%;
  }
`;

const AddButton = styled.button`
  height: 6rem;
  width: 6rem;
  font-size: 1.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  background-color: #3c68ae;
  border-radius: 50%;

  &:hover {
    background-color: #f59a24;
  }
`;

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewSmurf({
      name: "",
      age: "",
      height: "",
      id: ""
    });
    props.addSmurf(newSmurf);
  };

  return (
    <FormContainer>
      <FormHeader>Add a Smurf to the Village!</FormHeader>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="formName" hidden>
          Name:
        </label>
        <Input
          type="text"
          id="formName"
          name="name"
          placeholder="Name"
          value={newSmurf.name}
          onChange={handleChanges}
        />
        <label htmlFor="formAge" hidden>
          Age:
        </label>
        <Input
          type="text"
          id="formAge"
          name="age"
          placeholder="Age"
          value={newSmurf.age}
          onChange={handleChanges}
        />
        <label htmlFor="formHeight" hidden>
          Height:
        </label>
        <Input
          type="text"
          id="formHeight"
          name="height"
          placeholder="Height"
          value={newSmurf.height}
          onChange={handleChanges}
        />
        <AddButton type="submit">
          <i className="fas fa-arrow-right fa-lg"></i>
        </AddButton>
      </Form>
    </FormContainer>
  );
};

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

const mapDispatchToProps = {
  addSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmurfForm);
