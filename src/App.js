import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import EditProducts from './components/EditProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <ProductList />
          </Route>
          <Route path='/add'>
            <AddProducts />
          </Route>
          <Route path='/edit/:id'>
            <EditProducts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
