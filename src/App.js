import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Contact from '../src/Pages/Contact/Contact'
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import Login from '../src/Pages/Login/Login/Login'
import Register from '../src/Pages/Login/Register/Register'
import NotFound from '../src/Pages/NotFound/NotFound'
import Header from './Pages/Shared/Header/Header';
import Products from './Pages/Home/Products/Products';
import PlaceOrders from '../src/Pages/PlaceOrders/PlaceOrders'
import Gallery from '../src/Pages/Gallery/Gallery'
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/shopDrones'>
              <Products></Products>
            </Route>
            <Route path='/gallery'>
              <Gallery></Gallery>
            </Route>
            <PrivateRoute path='/placeOrder'>
              <PlaceOrders></PlaceOrders>
            </PrivateRoute>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
