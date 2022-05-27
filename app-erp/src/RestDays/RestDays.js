import React,{Component} from 'react';
import {Modal,Dropdown} from 'react-bootstrap'
import { Variables } from '../Variables';
import moment from "moment";
import Calender from '../controls/Calender';
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import DatePicker from "react-datepicker";
import $ from 'jquery'; 

export default class RestDays extends Component{


    constructor(props){
        super(props);
        this.state={
            list:[],
            modalTitle:"",
            LeaveDetailId:"",
            SSN:"",
            EmployeeName:"",          
            ShiftDate:"",
            Department:"",
            Comments:"",          
            date_create: moment().format("DD-MM-YYYY"),            
            NameFilter:"",
            ShiftDateFilter:'',
            DepartmentFilter:'',
            ListWithoutFilter:[],
            marginTopstate:"10px",
            checked:[],
            empList:[]
        }      
    }     



    FilterFn()
    {
       
        var NameFilter = this.state.NameFilter;
        var ShiftDateFilter = this.state.ShiftDateFilter;
        var DepartmentFilter = this.state.DepartmentFilter;        
        var filterData=this.state.ListWithoutFilter.filter(
            function(el){
                return 
                el.EmployeeName.toString().trim().toLowerCase().includes(
                    NameFilter.toString().trim().toLowerCase()
                )
                &&
                el.ShiftDate.toString().trim().toLowerCase().includes(
                    ShiftDateFilter.toString().trim().toLowerCase()
                )
                &&
                el.Department.toString().trim().toLowerCase().includes(
                    DepartmentFilter.toString().trim().toLowerCase()
                )               
            }
        );
        this.setState({list:filterData});
    }

    ChangeName = (e) => {       
        this.state.EmployeeName = e;  
      };

 // sort Filter
   sortResult(prop,asc)
    {
       var sortedData=this.state.ListWithoutFilter.sort
        (function(a,b)
            {
                if(asc){
                    return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
                }
                else{
                    return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
                }
            }
        );
      this.setState({list:sortedData});
    }
    
  

    changeNameFilter = (e)=>{
        this.state.NameFilter=e.target.value;
        this.FilterFn();
    }

    changeShiftDateFilter = (e)=>{
        this.state.ShiftDateFilter=e.target.value;
        this.FilterFn();
    }

    changeDepartmentFilter = (e)=>{
        this.state.DepartmentFilter=e.target.value;
        this.FilterFn();
    }

    changeShiftDate =(value, formattedValue)=>{ 
        var d = moment(value).format('DD-MM-yyyy');
        var array = d.split("-");       
        var fdate = array[1]+"/"+array[0]+ "/" + array[2];  
        var fd = moment(fdate).format('MM/DD/yyyy'); 
        this.setState({ShiftDate: new Date(fd)}); 
    }

  
    handleChange = (value, formattedValue) =>{
            this.setState({
              value: value, 
              formattedValue: formattedValue 
            });
    }

    refreshList(){
       
        fetch(process.env.REACT_APP_API+'restdays')
        .then(response=>response.json())
        .then(data=>{ 
            console.log(data);
            this.setState({list:data,ListWithoutFilter:data})
        })
    }        
 
    getEmployeelist(){       
      fetch(process.env.REACT_APP_API+'employee')
      .then(response=>response.json())
      .then(data =>{         
          var temp = [];
        data.forEach((el)=>{          
            console.log(el.AutoID + " " + el.EmpName + " " + el.LastName)
            temp.push(el.EmpName + " " + el.LastName)           
        })       
        this.setState({empList : temp});       
      })      
    }
    componentDidMount(){       
        this.refreshList();
       this.getEmployeelist();      
    }
    
    addClick(){
        this.setState({
         modalTitle:"Add Rest Day",
         LeaveDetailId:0,
         SSN:"",
         EmployeeName:"" ,
         ShiftDate:new Date() ,
         Department:"",
         marginTopstate:"2"        
        })
        //this.getEmployeelist();
    }

    editClick(dep){  
        
        var fromdatearray = dep.ShiftDate.split("-");
        var Todatearray = dep.ToDate.split("-");
        var fdate = fromdatearray[1]+"/"+fromdatearray[0]+ "/" + fromdatearray[2];
        var tdate = Todatearray[1]+"/"+Todatearray[0]+ "/" + Todatearray[2];
        var fd = moment(fdate).format('MM/DD/yyyy');       
        this.setState({
         modalTitle:"Edit Rest Day",
         LeaveDetailId:dep.LeaveDetailId,
         EmployeeName:dep.EmployeeName ,
         ShiftDate: new Date(fd),         
         marginTopstate:"10"
        })
        console.log(this.state.LeaveDetailId);
    }

    createClick(){ 
        fetch(process.env.REACT_APP_API+'restdays',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ShiftDate:this.state.ShiftDate,
                SSN: this.state.SSN               
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('failed');            
        })
        
    }
   
    

    deleteClick(id){
        if(window.confirm('Are you sure?'))
        {
            fetch(Variables.API_URL+'restdays/'+id,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then((result)=>{
                alert(result);
                this.refreshList();                
            },(error)=>{ alert('Failed');
        })
        }
    }
   
    render(){
       
        const{
            list,
            modalTitle,
            LeaveDetailId,
            EmployeeName,
            ShiftDate,
            SSN,
            marginTop,
            checked   
           } = this.state;

  const handleCheck = (event) => {     
    var updatedList = this.state.checked;
    if (event.target.checked) {     
     this.setState({
        checked: [...this.state.checked, event.target.value]
      })
    } else {
        this.setState({checked: this.state.checked.filter(function(person) { 
            return person !== event.target.value 
        })});   
    }   
  };

         // Generate string of checked items
  const checkedItems = this.state.checked.length  ? this.state.checked.reduce((total, item) => {  return total + ", " + item; }) : "";
  var isChecked = (item) => this.state.checked.includes(item) ? "checked-item" : "not-checked-item";
  const checkList = this.state.empList; //["Apple", "Banana", "Tea", "Coffee"];
  
/** https://contactmentor.com/checkbox-list-react-js-example/ */
   
      
return(
   
    <div>        

    <button type="button"
    className='btn btn-primary m-2 float-end'
    data-bs-toggle="modal"
    data-bs-target='#exampleModal'
    onClick={()=>this.addClick()}>
        Add Rest Day
    </button>
    <table className='table table-striped'>
    <thead>
        <tr>           
            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeNameFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('EmployeeName',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('EmployeeName',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Employee Name
            </th>
            <th>
            <div className="d-flex flex-row">
            <input className="form-control m-2"
            onChange={this.changeShiftDateFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('ShiftDate',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('ShiftDate',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Shift Date
            </th>
            <th>
            <div className="d-flex flex-row">
            <input className="form-control m-2"
            onChange={this.changeToDateFilter}
            placeholder="Filter"/>
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('ToDate',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('ToDate',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
           Department
            </th>
            <th>
            <div className="d-flex flex-row">        
            </div>
             SSN
            </th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
        {list.map(de=>
            <tr key={de.LeaveDetailId}>
                <td>{de.EmployeeName}</td>
                <td>{de.ShiftDate}</td>
                <td> {de.Department}</td> 
                <td> {de.SSN}</td>  
                <td>                
                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(de.AutoID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
                </td>
            </tr>
            )}
    </tbody>
    </table>

    <div className="modal fade"id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>
                        <button type="button" id="btnclose" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">

                    <div className="input-group mb-3">
                            <span className="input-group-text">From Date</span>                                       
                            <Calender 
                            date={ShiftDate} 
                            handleChange={this.changeShiftDate} 
                            selected = {ShiftDate}                           
                            />
                        </div> 

                        <div className="input-group mb-3">                        
                            <div className="checkList">
                                    <div className="title">Employee List:</div>
                                        <div className="list-container">
                                        {checkList.map((item, index) => (
                                            <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                            </div>
                                        ))}
                                        </div>
                            </div>
                        </div>
                        <div>{`Rest Day For:${checkedItems}`}</div>
                            {LeaveDetailId==0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.createClick()}
                            >Create</button>
                            :null}                            
                            <button type="button" style={{marginLeft: '20px' ,marginTop: `${this.state.marginTopstate}px`}}  className="btn btn-primary float-start" data-bs-dismiss="modal">Close</button>
                    
                            
                     
                   
                    </div>
                </div>
        </div> 
    </div>   
</div>

)

}

}