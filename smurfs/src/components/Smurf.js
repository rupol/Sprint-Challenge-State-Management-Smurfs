import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/smurfs";

const SmurfCard = styled.div`
  height: 300px;
  width: 300px;
  background-color: white;
  border-radius: 50%;
  margin: 4rem;
  padding: 4rem 1%;
`;

const ClearButton = styled.button`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  font-size: 1.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  background-color: #e98182;

  &:hover {
    background-color: #ca0910;
  }
`;

const Smurf = props => {
  const handleDelete = e => {
    e.preventDefault();
    props.deleteSmurf(e.target.value);
  };

  return (
    <SmurfCard>
      <h2>{props.smurf.name}</h2>
      <h3>Age: {props.smurf.age}</h3>
      <h3>Height: {props.smurf.height}</h3>
      <ClearButton
        onClick={handleDelete}
        value={props.smurf.id}
        className="fas fa-trash fa-lg"
      ></ClearButton>
    </SmurfCard>
  );
};

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

const mapDispatchToProps = {
  deleteSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurf);
