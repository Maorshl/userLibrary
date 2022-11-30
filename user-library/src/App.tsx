import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import HomeScreen from "./features/home/HomeScreen";
import { store } from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <HomeScreen />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
