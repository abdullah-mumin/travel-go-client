import './App.css';
import Home from './pages/Home/Home/Home';
import OrderReview from './pages/OrderReview/OrderReview';
import Footer from './Shares/Footer/Footer';
import Header from './Shares/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import { useState } from 'react';
import HomeLoading from './images/loading.gif'

function App() {
  const [loading,setLoading] = useState(true);
  setTimeout(() => setLoading(false), 2000);
    if(loading){ return <img 
      src={HomeLoading} className="home-loading position-absolute top-50 start-50 translate-middle overflow-hidden" alt=""></img>}  
  return (
    <AuthProvider>
      <Router>
        <Switch>
        <Header />
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/orderReview/:id">
            <OrderReview />
          </PrivateRoute>
        </Switch>
        <Switch>
        <Footer />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
