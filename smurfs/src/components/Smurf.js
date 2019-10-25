import React from "react";
import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <h3>Age: {props.smurf.age}</h3>
      <h3>Height: {props.smurf.height}</h3>
      <button>X</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

export default connect(mapStateToProps)(Smurf);
