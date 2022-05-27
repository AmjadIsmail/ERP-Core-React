import React,{Component} from 'react';
import {Modal,Dropdown} from 'react-bootstrap'
import { Variables } from '../Variables';
import moment from "moment";
import Calender from '../controls/Calender'
import $ from 'jquery'; 
export default class Gazatte extends Component{



    constructor(props){
        super(props);

        this.state={
            gazattes:[],
            modalTitle:"",
            GazatteName:"",
            GazatID:0,
            GtypeID:0,
            GazzateTypeName:"",
            GazatteDate:"",
            date_create: moment().format("DD-MM-YYYY"),
            IdFilter:"",
            NameFilter:"",
            GtypeFilter:'',
            DateFilter:'',
            gazattesWithoutFilter:[],
            gazattetypes:[]
        }         
       
    }     

    FilterFn()
    {
        
        var IdFilter=this.state.IdFilter;
        var NameFilter = this.state.NameFilter;
        var GtypeFilter = this.state.GtypeFilter;
        var DateFilter = this.state.DateFilter;
        var filterData=this.state.gazattesWithoutFilter.filter(
            function(el){
                return el.GazatID.toString().toLowerCase().includes(
                    IdFilter.toString().trim().toLowerCase()
                )&&
                el.GazatteName.toString().toLowerCase().includes(
                    NameFilter.toString().trim().toLowerCase()
                )
                &&
                el.GazzateTypeName.toString().toLowerCase().includes(
                    GtypeFilter.toString().trim().toLowerCase()
                )
                &&
                el.GazatteDate.toString().toLowerCase().includes(
                    DateFilter.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({gazattes:filterData});
    }


 // sort Filter
   sortResult(prop,asc)
    {
       var sortedData=this.state.gazattesWithoutFilter.sort
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
      this.setState({gazattes:sortedData});
    }
    
   changeIdFilter = (e)=>{
       this.state.IdFilter=e.target.value;
       this.FilterFn();
   }

    changeNameFilter = (e)=>{
        this.state.NameFilter=e.target.value;
        this.FilterFn();
        }

    changeDateFilter = (e)=>{
        this.state.DateFilter=e.target.value;
        this.FilterFn();
        }

    changeGTypeFilter = (e)=>{
        this.state.GtypeFilter=e.target.value;
        this.FilterFn();
        }

        changeGazatte =(e)=>{
            this.setState({GazatteName:e.target.value});
        }
    
        changeGtype =(e)=>{     
           
            this.setState({GtypeID:e.target.value});          
            
        }

        changeGazatteDate =(value, formattedValue)=>{  
               debugger;
           var d = moment(value).format('DD-MM-YYYY');         
           var array = d.split("-");       
           var fdate = array[1]+"/"+array[0]+ "/" + array[2];  
          var fd = moment(fdate).format('MM/DD/yyyy'); 
           this.setState({GazatteDate: new Date(fd)}); 
        }

        handleChange = (value, formattedValue) =>{
            this.setState({
              value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
              formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
            });
          }

    refreshList(){
       
        fetch(process.env.REACT_APP_API+'gazatte')
        .then(response=>response.json())
        .then(data=>{ 
            console.log(data);
            this.setState({gazattes:data,gazattesWithoutFilter:data})
        })

        fetch(process.env.REACT_APP_API+'gazatte/GetAllGazatteTypes')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({gazattetypes:data});
        });
        }

    componentDidMount(){
        this.refreshList();
      
    }
    
    addClick(){
        this.setState({
         modalTitle:"Add Gazatte",
         GazatID:0,
         GazatteName:"" ,
         GtypeID:0 ,
         GazatteDate : new Date()
        })
    }

    
    editClick(dep){  
        var array = dep.GazatteDate.split("-"); 
        var fdate = array[1]+"/"+array[0]+ "/" + array[2];
        var fd = moment(fdate).format('MM/DD/yyyy');         
        this.setState({
         modalTitle:"Edit Gazatte",
         GazatID:dep.GazatID,
         GazatteName:dep.GazatteName ,
         GtypeID:dep.GtypeID,
         GazatteDate:new Date(fd),
         GazzateTypeName:dep.GazzateTypeName
        })
        console.log(this.state.GtypeID);
    }

    createClick(){
       
        fetch(process.env.REACT_APP_API+'gazatte',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                GazatteName:this.state.GazatteName,
                GtypeID: this.state.GtypeID,
                GazatteDate: this.state.GazatteDate
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
      
        fetch(process.env.REACT_APP_API+'gazatte',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                GazatID:this.state.GazatID,
                GazatteName:this.state.GazatteName ,
                GazatteDate:  this.state.GazatteDate,
                GtypeID: this.state.GtypeID
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
            fetch(Variables.API_URL+'gazatte/'+id,{
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
         gazattes,
         modalTitle,
         GazatID,
         GazatteName,
         GtypeID,
         gazattetypes ,
         GazatteDate    ,
         date_create      
        } = this.state;

        
return(
    <div>
    <button type="button"
    className='btn btn-primary m-2 float-end'
    data-bs-toggle="modal"
    data-bs-target='#exampleModal'
    onClick={()=>this.addClick()}>
        Add Gazatte
    </button>

    <table className='table table-striped'>
    <thead>
        <tr>
            <th>
            <div className='d-flex flex-row'>
            <input className='form-control m2' onChange={this.changeIdFilter} placeholder="Filter"/> 
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazatID',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazatID',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
                    Gazatte Id
            </th>
            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeNameFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazatteName',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazatteName',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Gazatte Name
            </th>

            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeDateFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazatteDate',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazatteDate',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Gazatte Date
            </th>


            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeGTypeFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazzateTypeName',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('GazzateTypeName',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Gazatte Type
            </th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
        {gazattes.map(de=>
            <tr key={de.GazatID}>
                <td>{de.GazatID}</td>
                <td>{de.GazatteName}</td>
                <td>{de.GazatteDate}</td>
                <td> {de.GazzateTypeName}</td>
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
                onClick={()=>this.deleteClick(de.GazatID)}>
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
                            <span className="input-group-text">Gazatte Name</span>
                            <input type="text" className="form-control"
                            value={GazatteName}
                            onChange={this.changeGazatte}/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="input-group-text">Gazatte Type</span>
                            <select id="ddlgtype" className="form-select" value={GtypeID} onChange={this.changeGtype} >
                            <option key="0">--Select--</option>
                                {gazattetypes.map(dep=>                                
                                 <option key={dep.GTypeId} value={dep.GTypeId}   >
                                    {dep.GazzateTypeName}
                                </option>)}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Gazatte Date</span>                        
                            <Calender date={GazatteDate} handleChange={this.changeGazatteDate}
                            selected = {GazatteDate}
                            />
                        </div>
                            {GazatID==0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.createClick()}
                            >Create</button>
                            :null}
                            {GazatID!=0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.updateClick()}
                            >Update</button>
                            :null}
                            <button type="button" style={{marginLeft: '20px'}}  className="btn btn-primary float-start" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
        </div> 
    </div>

   
</div>

)

}

}


{/**  <input type="text" className="form-control" value={GazatteDate} onChange={this.changeGazatteDate}/>*/}