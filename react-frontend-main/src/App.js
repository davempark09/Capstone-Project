import ListExpenses from './components/ListExpenses';
import AddExpenses from './components/AddExpenses';
import UpdateExpenses from './components/UpdateExpenses';
import DeleteExpenses from './components/DeleteExpenses';
import ViewExpenses from './components/ViewExpenses';
import Formpage from './components/Formpage';
import UserLogin from './components/UserLogin';
import Aboutpage from './components/AboutApp';
import RegisterPage from './components/RegisterPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';


function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={Aboutpage}></Route>
                  <Route path="/about-page" exact component={Aboutpage}></Route>
                  <Route path="/expenses" component={ListExpenses}></Route>
                  <Route path="/add-expenses" component={AddExpenses}></Route>
                  <Route path="/update-expenses/:id" component={UpdateExpenses}></Route> 
                  <Route path="/delete-expenses/:id" component={DeleteExpenses}></Route> 
                  <Route path="/view-expenses/:id" component={ViewExpenses}></Route> 
                  <Route path="/contact-form" component={Formpage}></Route> 
                  <Route path="/user-login" component={UserLogin}></Route> 
                  <Route path="/user-register" component={RegisterPage}></Route> 
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
  );
}

export default App;
