import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { Designation } from './Designation/Desingation';
import { LeaveClass } from './LeaveClass/LeaveClass';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
Travelup CRM
      </h3>
    </div>
    <Navigation/>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/department' component={Department} exact/>
      <Route path='/designation' component={Designation} exact/>
      <Route path='/leaveclass' component={LeaveClass} exact/>
      <Route path='/employee' component={Employee} exact/>
    </Switch>
    </BrowserRouter>
  
  );
}

export default App;
