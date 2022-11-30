import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import HomeScreen from "./features/home/HomeScreen";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
