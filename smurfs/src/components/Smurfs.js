import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfs";

import Smurf from "./Smurf";

const SmurfContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Smurfs = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="container">
      {props.smurfs.length ? (
        <SmurfContainer>
          {props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
        </SmurfContainer>
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
