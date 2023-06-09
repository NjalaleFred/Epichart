import "./App.css";
import { Doctor } from "./Components/Doctor";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/doctor/:id">
            <Doctor />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
