import ListExpenses from './components/ListExpenses';
import AddExpenses from './components/AddExpenses';
import UpdateExpenses from './components/UpdateExpenses';
import DeleteExpenses from './components/DeleteExpenses';
import ViewExpenses from './components/ViewExpenses';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={ListExpenses}></Route>
                  <Route path="/expenses" component={ListExpenses}></Route>
                  <Route path="/add-expenses" component={AddExpenses}></Route>
                  <Route path="/update-expenses/:id" component={UpdateExpenses}></Route> 
                  <Route path="/delete-expenses/:id" component={DeleteExpenses}></Route> 
                  <Route path="/view-expenses/:id" component={ViewExpenses}></Route> 
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;
