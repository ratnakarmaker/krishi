
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavMenu from './Components/NavMenu';
import Home from './Components/Home';
import About from './Components/About';
import Growers from './Components/Growers';
import Service from './Components/Service';
import ContactLink from './Components/ContactLink';
import Buyer from './Components/Buyer';
import ScrollComponent from './Components/ScrollComponent';
import Blog from './Components/Blog';




function App() {
  return (
      <Router>
        
      <ScrollComponent/>
        <NavMenu/>

        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/growers' component={Growers} />
        <Route path='/buyers' component={Buyer} />
        <Route path='/service' component={Service} />
        <Route path='/contact' component={ContactLink} />
        {/* <Route path='/blog' component={Blog} /> */}
  
        </Switch> 
        <Footer/>
       
     
      </Router >
  );
}

export default App;
