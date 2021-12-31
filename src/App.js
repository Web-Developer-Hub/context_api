import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Courses from './Components/Courses/Courses';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import BestSeller from './Components/BestSeller/BestSeller';
import ContextAPI from './ContextAPI/ContextAPI';

function App() {

  return (
    <ContextAPI>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/our/courses'>
              <Courses></Courses>
            </Route>

            <Route exact path='/our/courses/bestseller'>
              <BestSeller></BestSeller>
            </Route>

            <Route exact path='/contact/us'>
              <Contact></Contact>
            </Route>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </ContextAPI>
  );
}

export default App;
