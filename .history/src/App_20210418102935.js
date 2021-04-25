
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
import ScrollComponent from './Components/ScrollComponent ';
import Blog from './Components/Blog';
import OurTeam from './Components/OurTeam';
import SinglePost from './Components/SinglePost/SinglePost';
import SimpleForm from './Components/ChatBot/Chatbot'


function App() {
  return (
    <Router>

      <ScrollComponent />
      <NavMenu />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/growers' component={Growers} />
        <Route path='/buyers' component={Buyer} />
        <Route path='/service' component={Service} />
        <Route path='/team' component={OurTeam} />
        <Route path='/contact' component={ContactLink} />
        <Route path='/blog' component={Blog} />
        <Route path='/singlepost' component={SinglePost} />
        {/* <Route path='./simpleForm' component={SimpleForm} /> */}
      </Switch>
      {/* <ChatBot floatingIcon
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
          },
        ]}
      /> */}


<SimpleForm />
      <Footer />
    </Router >
  );
}

export default App;
