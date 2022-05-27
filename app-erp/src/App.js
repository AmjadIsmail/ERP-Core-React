import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
//import {Department} from './Department';
import {Department} from './Departments/Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { Designation } from './Designation/Designationv2';
import { LeaveClass } from './LeaveClass/LeaveClassV2';
import { Grade } from './Grade/Grade';
import { TaxSlab } from './TaxSlabs/TaxSlab';
import { Container, Typography } from '@material-ui/core';
import Gazatte from './Gazatte/Gazattev2';
import "react-datepicker/dist/react-datepicker.css";
import Monthsetup from './MonthSetup/MonthSetup';
import RestDays from './RestDays/RestDays';
function App() {
  return (
    <Container>
      <Typography variant="h2" align="center">
      Travelup PayRoll System
      </Typography>
  <BrowserRouter>
      <div className="container">
      <h3 className="m-3 d-flex justify-content-center">

      </h3>
    </div>
    <Navigation/>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/department' component={Department} exact/>
      <Route path='/designation' component={Designation} exact/>
      <Route path='/leaveclass' component={LeaveClass} exact/>
      <Route path='/grade' component={Grade} exact/>
      <Route path='/taxslab' component={TaxSlab} exact/>
      <Route path='/gazatte' component={Gazatte} exact/>
      <Route path='/monthsetup' component={Monthsetup} exact/>
      <Route path='/employee' component={Employee} exact/>
      <Route path='/restdays' component={RestDays} exact/>
    </Switch>
    </BrowserRouter>
    </Container>
    
  
  );
}

export default App;
