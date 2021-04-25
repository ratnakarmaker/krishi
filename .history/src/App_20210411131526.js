import { Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';


function App() {
  
  return (
    <div className="App">
      {/* this is navbar section */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Aarot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about" >About</Nav.Link>
            {/* <Link to="/about">About</Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Router>
        <Switch>
        <Route path="/about">
            <About/>
          </Route>
          <Slider />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
