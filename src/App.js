import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Faq from './pages/FAQ/Faq';
import SignUpSignIn from './pages/SignUpSignIn/SignUpSignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} /> 
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUpSignIn} />
        <Route path='/faq' component={Faq} />        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
