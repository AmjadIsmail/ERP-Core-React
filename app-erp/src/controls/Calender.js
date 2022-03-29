import React,{Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FormGroup  } from 'react-bootstrap';

export default class Calendar extends Component{

    render()
    {
    return ( 
         <FormGroup>       
        <DatePicker 
        id="datepicker" 
        dateFormat="dd-MM-yyyy"  
        selected= {this.props.selected }     
        onChange={this.props.handleChange} 
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"      
        className="form-control" />        
        </FormGroup>
    )
    }
}

