import React from "react";
import { connect } from "react-redux";
import {
  updateName,
  updateAge,
  updateFavFoods
} from "./redux/actions/personActions";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h1>Redux Playground</h1>
      <h2>Lets add a form</h2>
      <input
        onChange={e => updateName(e.target.value)}
        name="name"
        placeholder="enter name"
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = { updateName, updateAge, updateFavFoods };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
