import React,{Component} from 'react';
import {Modal,Dropdown} from 'react-bootstrap'
import { Variables } from '../Variables';
import moment from "moment";
import Calender from '../controls/Calender';
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import DatePicker from "react-datepicker";
import $ from 'jquery'; 

export default class Monthsetup extends Component{


    constructor(props){
        super(props);

        this.state={
            list:[],
            modalTitle:"",
            MonthName:"",
            FromDate:"",
            ToDate:"",
            IsActive:false,           
            date_create: moment().format("DD-MM-YYYY"),
            IdFilter:"",
            NameFilter:"",
            FromDateFilter:'',
            ToDateFilter:'',
            ListWithoutFilter:[],
            marginTopstate:"10px"
        }         
       
    }     

    FilterFn()
    {
        
        var IdFilter=this.state.IdFilter;
        var NameFilter = this.state.NameFilter;
        var FromDateFilter = this.state.FromDateFilter;
        var ToDateFilter = this.state.ToDateFilter;
        var IsActiveFilter = this.state.IsActive.toString();
        var filterData=this.state.ListWithoutFilter.filter(
            function(el){
                return el.AutoID.toString().toLowerCase().includes(
                    IdFilter.toString().trim().toLowerCase()
                )&&
                el.MonthName.toString().toLowerCase().includes(
                    NameFilter.toString().trim().toLowerCase()
                )
                &&
                el.FromDate.toString().toLowerCase().includes(
                    FromDateFilter.toString().trim().toLowerCase()
                )
                &&
                el.ToDate.toString().toLowerCase().includes(
                    ToDateFilter.toString().trim().toLowerCase()
                )
                &&
                el.IsActive.toString().toLowerCase().includes(
                    IsActiveFilter.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({list:filterData});
    }

    IsActiveChange = (e) => {       
        this.state.IsActive = e;  
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
    
   changeIdFilter = (e)=>{
       this.state.IdFilter=e.target.value;
       this.FilterFn();
    }

    changeNameFilter = (e)=>{
        this.state.NameFilter=e.target.value;
        this.FilterFn();
    }

    changeFromDateFilter = (e)=>{
        this.state.FromDateFilter=e.target.value;
        this.FilterFn();
    }

    changeToDateFilter = (e)=>{
        this.state.ToDateFilter=e.target.value;
        this.FilterFn();
    }

    changeIsActiveFilter = (e)=>{
        this.state.IsActive=e.target.value;
        this.FilterFn();
    }

    changeMonthName =(e)=>{
        this.setState({MonthName:e.target.value});
    }

      

    changeFromDate =(value, formattedValue)=>{ 
        var d = moment(value).format('DD-MM-yyyy');
        var array = d.split("-");       
        var fdate = array[1]+"/"+array[0]+ "/" + array[2];  
        var fd = moment(fdate).format('MM/DD/yyyy'); 
        this.setState({FromDate: new Date(fd)}); 
    }

    changeToDate =(value, formattedValue)=>{   
        
        var d = moment(value).format('DD-MM-yyyy');
        var array = d.split("-");       
        var tdate = array[1]+"/"+array[0]+ "/" + array[2];  
        var td = moment(tdate).format('MM/DD/yyyy'); 
        this.setState({ToDate: new Date(td)}); 
    }
 

    changeIsActive =(e)=>{
        this.setState({IsActive:e.target.value});
    }


    handleChange = (value, formattedValue) =>{
            this.setState({
              value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
              formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
            });
    }

    refreshList(){
       
        fetch(process.env.REACT_APP_API+'monthsetup')
        .then(response=>response.json())
        .then(data=>{ 
            console.log(data);
            this.setState({list:data,ListWithoutFilter:data})
        })
    }        

    componentDidMount(){
        this.refreshList();
      
    }
    
    addClick(){
        this.setState({
         modalTitle:"Add Month",
         AutoID:0,
         MonthName:"" ,
         FromDate:new Date() ,
         ToDate:new Date(),
         IsActive:false,
         marginTopstate:"2"
        
        })
    }

    editClick(dep){  
        
        var fromdatearray = dep.FromDate.split("-");
        var Todatearray = dep.ToDate.split("-");
        var fdate = fromdatearray[1]+"/"+fromdatearray[0]+ "/" + fromdatearray[2];
        var tdate = Todatearray[1]+"/"+Todatearray[0]+ "/" + Todatearray[2];
        var fd = moment(fdate).format('MM/DD/yyyy');
        var td = moment(tdate).format('MM/DD/yyyy'); 
        this.setState({
         modalTitle:"Edit Month",
         AutoID:dep.AutoID,
         MonthName:dep.MonthName ,
         FromDate: new Date(fd),  
         ToDate: new Date(td),
         IsActive:dep.IsActive,
         marginTopstate:"10"
        })
        console.log(this.state.AutoID);
    }

    createClick(){
       
       
        fetch(process.env.REACT_APP_API+'monthsetup',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                MonthName:this.state.MonthName,
                FromDate: this.state.FromDate,
                ToDate: this.state.ToDate,
                IsActive: this.state.IsActive
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
   
    updateClick(){
        fetch(process.env.REACT_APP_API+'monthsetup',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                AutoID:this.state.AutoID,
                MonthName:this.state.MonthName ,
                FromDate:  this.state.FromDate,
                ToDate: this.state.ToDate,
                IsActive:this.state.IsActive
            })
        })
        .then(res=>res.json())
        .then((result)=>{
             alert(result);                     
        this.refreshList();  
        },(error)=>{alert('Failed');
        })
            
        }

    deleteClick(id){
        if(window.confirm('Are you sure?'))
        {
            fetch(Variables.API_URL+'monthsetup/'+id,{
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
         AutoID,
         MonthName,
         FromDate,
         ToDate ,
         IsActive,
         date_create ,
         marginTop
        
        } = this.state;
       // const my_date = new Date("05/25/2026");
      // const event_from_date = new Date("05/25/2026");
      // const event_to_date = new Date("05/25/2026");
return(
    <div>
        

    <button type="button"
    className='btn btn-primary m-2 float-end'
    data-bs-toggle="modal"
    data-bs-target='#exampleModal'
    onClick={()=>this.addClick()}>
        Add Month
    </button>

    <table className='table table-striped'>
    <thead>
        <tr>
            <th>
            <div className='d-flex flex-row'>
            <input className='form-control m2' onChange={this.changeIdFilter} placeholder="Filter"/> 
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('AutoID',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('AutoID',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
                    AutoID
            </th>
            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeNameFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('MonthName',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('MonthName',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Month Name
            </th>

            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeFromDateFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FromDate',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FromDate',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            From Date
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
            onClick={()=>this.sortResult('ToDate',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            To Date
            </th>


            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeIsActiveFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('IsActive',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('IsActive',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Is Active
            </th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
        {list.map(de=>
            <tr key={de.AutoID}>
                <td>{de.AutoID}</td>
                <td>{de.MonthName}</td>
                <td>{de.FromDate}</td>
                <td> {de.ToDate}</td>
                <td> {de.IsActive.toString()}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(de)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                     <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>
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
                            <span className="input-group-text">Month Name</span>
                            <input type="text" className="form-control"
                            value={MonthName}
                            onChange={this.changeMonthName}/>
                        </div>

                        
                        <div className="input-group mb-3">
                            <span className="input-group-text">From Date</span>                                       
                            <Calender 
                            date={FromDate} 
                            handleChange={this.changeFromDate} 
                            selected = {FromDate}
                            
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">To Date</span>                        
                            <Calender 
                            date={ToDate} 
                            handleChange={this.changeToDate} 
                            selected = {ToDate}
                            
                            />
                        </div>
                        
                        <div>  
                        <Checkbox
                                icon={<Icon.FiCheck color="#174A41" size={14} />}
                                name="isactive"
                                checked={this.state.IsActive} 
                                onChange={this.IsActiveChange}
                                borderColor="#D7C629"
                                style={{ cursor: "pointer" }}
                                labelStyle={{ marginLeft: 5, userSelect: "none" }}
                                label="Is Active"
                            />

                        </div>
                            {AutoID==0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.createClick()}
                            >Create</button>
                            :null}
                            {AutoID!=0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.updateClick()}
                            style={{marginLeft: '20px' , marginTop:'10px'}} 
                            >Update</button>
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


/**
 * <DatePicker selected={event_start_date} onChange={this.handleStartDate} minDate={new Date()} dateFormat="dd-MM-yyyy" />
 * 
 *  <Calender 
                           // date={FromDate} 
                            handleChange={this.changeFromDate} 
                          //  selected={FromDate}
                             />
 */