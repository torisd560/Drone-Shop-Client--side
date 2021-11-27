import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import NotFound from '../src/Pages/NotFound/NotFound'
import Gallery from '../src/Pages/Gallery/Gallery'
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ShopDrones from '../src/Pages/MoreProducts/ShopDrones/ShopDrones'
import Footer from './Pages/Shared/Footer/Footer';
import LoginItem from './Pages/Login/LoginItem';
import ContactItem from './Pages/Contact/ContactItem/ContactItem';
import RegisterItem from './Pages/Login/Register/RegisterItem/RegisterItem';
import PlaceOrderItem from './Pages/PlaceOrders/PlaceOrderItem/PlaceOrderItem';
import AboutItem from './Pages/About/AboutItem/AboutItem';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <AboutItem></AboutItem>
            </Route>
            <Route path='/shopDrones'>
              <ShopDrones></ShopDrones>
            </Route>
            <Route path='/gallery'>
              <Gallery></Gallery>
            </Route>
            <PrivateRoute exact path='/moreProducts/placeOrder/:id'>
              <PlaceOrderItem></PlaceOrderItem>
            </PrivateRoute>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/contact'>
              <ContactItem></ContactItem>
            </Route>
            <Route path='/login'>
              <LoginItem></LoginItem>
            </Route>
            <Route path='/register'>
              <RegisterItem></RegisterItem>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
