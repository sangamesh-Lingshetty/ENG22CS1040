import { BrowserRouter as Switch } from 'react-router-dom';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './styles/App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProductsPage} />
      <Route path="/product/:id" component={ProductDetailsPage} />
    </Switch>
  </Router>
);

export default App;
