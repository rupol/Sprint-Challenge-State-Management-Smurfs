import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/smurfs";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="formName" hidden>
          Name:
        </label>
        <input
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
        <input
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
        <input
          type="text"
          id="formHeight"
          name="height"
          placeholder="Height"
          value={newSmurf.height}
          onChange={handleChanges}
        />
        <button type="submit">Save</button>
      </form>
    </div>
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
