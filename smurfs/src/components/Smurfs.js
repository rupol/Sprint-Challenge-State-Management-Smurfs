import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfs";

import Smurf from "./Smurf";

const Smurfs = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="container">
      <h1>Ruth's Smurf Village</h1>
      {props.smurfs.length ? (
        <div>
          {props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
        </div>
      ) : (
        <p>Add a smurf to your village!</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isSmurfsLoading: state.isLoading,
    smurfs: state.smurfs,
    smurfsError: state.error
  };
}

const mapDispatchToProps = {
  fetchSmurfs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurfs);
