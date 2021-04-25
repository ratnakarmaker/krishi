
// import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import NavMenu from './Components/NavMenu';
// import Home from './Components/Home';
// import About from './Components/About';
// import Growers from './Components/Growers';
// import Service from './Components/Service';
// import ContactLink from './Components/ContactLink';
// import Buyer from './Components/Buyer';
import ScrollComponent from './Components/ScrollComponent ';
// import Blog from './Components/Blog';
// import OurTeam from './Components/OurTeam';
// import SinglePost from './Components/SinglePost/SinglePost';
// import Dashboard from './Components/Dashboard/Dashboard';
// import SimpleForm from './Components/ChatBot/Chatbot'
// import BuyerRegistration from './Components/BuyerRegistration/BuyerRegistration';


import loadable from "react-loadable"
import { Spinner } from 'react-bootstrap';



const Home=loadable({
  loader: () => import("./Components/Home"),
  loading:()=><div className=""></div>
});



const NavMenu=loadable({
  loader: () => import("./Components/NavMenu"),
  loading:()=><div className="text-center my-5"><Spinner animation="border" variant="danger" /></div>
});

const About=loadable({
  loader: () => import("./Components/About"),
  loading:()=><div></div>
});

const Growers=loadable({
  loader: () => import("./Components/Growers"),
  loading:()=><div></div>
});

const Service=loadable({
  loader: () => import("./Components/Service"),
  loading:()=><div></div>
});

const ContactLink=loadable({
  loader: () => import("./Components/ContactLink"),
  loading:()=><div></div>
});

const Buyer=loadable({
  loader: () => import("./Components/Buyer"),
  loading:()=><div></div>
});

// const ScrollComponent=loadable({
//   loader: () => import("./Components/ScrollComponent"),
//   loading:()=><div></div>
// });

const Blog=loadable({
  loader: () => import("./Components/Blog"),
  loading:()=><div></div>
});

const OurTeam=loadable({
  loader: () => import("./Components/OurTeam"),
  loading:()=><div></div>
});

const SinglePost=loadable({
  loader: () => import("./Components/SinglePost/SinglePost"),
  loading:()=><div></div>
});

const Dashboard=loadable({
  loader: () => import("./Components/Dashboard/Dashboard"),
  loading:()=><div></div>
});

const SimpleForm=loadable({
  loader: () => import("./Components/ChatBot/Chatbot"),
  loading:()=><div></div>
});

const BuyerRegistration=loadable({
  loader: () => import("./Components/BuyerRegistration/BuyerRegistration"),
  loading:()=><div>Loading...</div>
});

const Footer=loadable({
  loader: () => import("./Components/Footer"),
  loading:()=><div></div>
});

function App() {



  return (
   
    <Router>

      <ScrollComponent />

      <Switch>

        <Route path='/dashboard' component={Dashboard} />

        <div>
          <NavMenu />
          <Route path="/" exact component={Home} />
          <Route path="/arrot" exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/growers' component={Growers} />
          <Route path='/buyers' component={Buyer} />
          <Route path='/service' component={Service} />
          <Route path='/team' component={OurTeam} />
          <Route path='/contact' component={ContactLink} />
          <Route path='/blog' component={Blog} />
          <Route path='/singlepost' component={SinglePost} />
          <Route path='/registration' component={BuyerRegistration} />

          <SimpleForm />
          <Footer />
        </div>
      </Switch>
    </Router >
  );
}

export default App;
