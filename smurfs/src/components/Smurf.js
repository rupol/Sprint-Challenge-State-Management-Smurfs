import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/smurfs";

const Smurf = props => {
  const handleDelete = e => {
    e.preventDefault();
    props.deleteSmurf(e.target.value);
  };

  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <h3>Age: {props.smurf.age}</h3>
      <h3>Height: {props.smurf.height}</h3>
      <button onClick={handleDelete} value={props.smurf.id}>
        X
      </button>
    </div>
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
