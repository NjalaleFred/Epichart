import "./App.css";
import { Admin } from "./Components/Admin";
import { Doctor } from "./Components/Doctor";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
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
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
