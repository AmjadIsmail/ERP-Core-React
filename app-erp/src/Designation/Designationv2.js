import React,{Component} from 'react';
import { Variables } from '../Variables';
import {Modal} from 'react-bootstrap'
export class Designation extends Component{



    constructor(props){
        super(props);

        this.state={
            desigs:[],
            modalTitle:"",
            Designation:"",
            DesigId:0,

            DesigIdFilter:"",
            DesigNameFilter:"",
            desigsWithoutFilter:[]
           
         
            
        }  
        
    } 
    

 // Filter Function
    FilterFn()
    {
        
        var DesigIdFilter=this.state.DesigIdFilter;
        var DesigNameFilter = this.state.DesigNameFilter;

        var filterData=this.state.desigsWithoutFilter.filter(
            function(el){
                return el.DesigId.toString().toLowerCase().includes(
                    DesigIdFilter.toString().trim().toLowerCase()
                )&&
                el.Designation.toString().toLowerCase().includes(
                    DesigNameFilter.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({desigs:filterData});
    }


 // sort Filter
   sortResult(prop,asc)
    {
       var sortedData=this.state.desigsWithoutFilter.sort
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
      this.setState({desigs:sortedData});
    }
    
   changeDesignationIdFilter = (e)=>{

       this.state.DesigIdFilter=e.target.value;
       this.FilterFn();
   }

   changeDesignationNameFilter = (e)=>{
    this.state.DesigNameFilter=e.target.value;
    this.FilterFn();
    }


    refreshList(){
       
        fetch(process.env.REACT_APP_API+'designation')
        .then(response=>response.json())
        .then(data=>{           
            console.log(data);
            this.setState({desigs:data,desigsWithoutFilter:data})
        })
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeDesignation =(e)=>{
        this.setState({Designation:e.target.value});
    }

    addClick(){
        this.setState({
         modalTitle:"Add Designation",
         DesigId:0,
         Designation:""  
        })
    }

    
    editClick(dep){       
        this.setState({
         modalTitle:"Edit Designation",
         DesigId:dep.DesigId,
         Designation:dep.Designation  
        })
    }

    createClick(){
        fetch(process.env.REACT_APP_API+'designation',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Designation1:this.state.Designation
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
        fetch(Variables.API_URL+'designation',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DesigId:this.state.DesigId,
                Designation1:this.state.Designation
            })
        })
        .then(res=>res.json())
        .then((result)=>{
             alert(result);                     
        this.refreshList(); 
       // debugger;
        var myModal = document.getElementById('exampleModal')
         myModal.hidden();
        },(error)=>{alert('Failed');
        })
            
        }

    deleteClick(id){
        if(window.confirm('Are you sure?'))
        {
            fetch(Variables.API_URL+'designation/'+id,{
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
         desigs,
         modalTitle,
         DesigId,
         Designation
        } = this.state;
return(
    <div>
    <button type="button"
    className='btn btn-primary m-2 float-end'
    data-bs-toggle="modal"
    data-bs-target='#exampleModal'
    onClick={()=>this.addClick()}>
        Add Designation
    </button>

    <table className='table table-striped'>
    <thead>
        <tr>
            <th>
            <div className='d-flex flex-row'>
            <input className='form-control m2' onChange={this.changeDesignationIdFilter} placeholder="Filter"/> 
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('DesigId',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('DesigId',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
                    Designation Id
            </th>
            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeDesignationNameFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('DesigName',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('DesigName',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Designation
            </th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
        {desigs.map(de=>
            <tr key={de.DesigId}>
                <td>{de.DesigId}</td>
                <td>{de.Designation}</td>
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
                onClick={()=>this.deleteClick(de.DesigId)}>
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
                            <span className="input-group-text">DesigNation</span>
                            <input type="text" className="form-control"
                            value={Designation}
                            onChange={this.changeDesignation}/>
                        </div>

                            {DesigId==0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.createClick()}
                            >Create</button>
                            :null}

                            {DesigId!=0?
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