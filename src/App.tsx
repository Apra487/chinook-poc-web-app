
import { 
  BrowserRouter as Router,
  // Redirect,
  Switch,
  Route
} from 'react-router-dom';

import './assets/index.css';

/* pages */
// import Content from './container/content/Content'

/* components */
import Aliases from './components/aliases/Aliases';
import Navbar from './components/navbar/Navbar';

/* api */
// import { getCustomers } from './api/chinook';
import CreatePage from './pages/createPage/CreatePage';


const App = () => {

  return (
    <Router>
      <div className="container">

        <Navbar/>

        <Switch>
          
          <Route path="/create-data">
            <CreatePage />
          </Route>
          
          <Route path="/">
            <Aliases />
          </Route>
          
        </Switch>
      </div>
    </Router>
  )
}

export default App;