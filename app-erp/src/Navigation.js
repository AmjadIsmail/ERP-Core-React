import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem,Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
<Navbar.Toggle aira-controls="basic-navbar-nav"/>
<Navbar.Collapse id="basic-navbar-nav">  
    <Nav>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink> 
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Setup
            </Dropdown.Toggle>
            <Dropdown.Menu>  
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/designation">Designation</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/department">Department</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/leaveclass">Leave types</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/employee">Employee</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/grade">Grade</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/taxslab">TaxSlab</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/gazatte">Gazatte</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/monthsetup">PayRoll MonthName</NavLink></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>     
    </Nav> 
</Navbar.Collapse>
</Navbar>

/**
 <Navbar.Toggle aira-controls="basic-navbar-nav"/>
<Navbar.Collapse id="basic-navbar-nav">  
    <Nav>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            Home
        </NavLink> 
    
        <NavLink className="d-inline p-2 bg-dark text-white" to="/designation">
            Designation                        
        </NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/department">
            Department                        
        </NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/leaveclass">
            Leave types                        
        </NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">
            Employee
        </NavLink>
       
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Setup
            </Dropdown.Toggle>
            <Dropdown.Menu>  
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/designation">Designation</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/department">Department</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/leaveclass">Leave types</NavLink></Dropdown.Item>
                <Dropdown.Item href="#"> <NavLink className="d-inline p-2 text-black" to="/employee">Employee</NavLink></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>     
    </Nav> 
</Navbar.Collapse>
</Navbar>
 * 
 */

        )
    }
}