import React,{Component} from 'react';
import {Table} from 'react-bootstrap'

import {Button,ButtonToolbar} from 'react-bootstrap'
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';


export class Department extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false , editModalShow:false}
    }

refreshList(){
  
    fetch(process.env.REACT_APP_API+'departments')
    .then(response=>response.json())
    .then(data=>{
        this.setState({deps:data});
       
    });
}

deleteDep(depid){
    if(window.confirm('Are you sure?'))
    {
        fetch(process.env.REACT_APP_API+'departments/'+ depid,{
            method:'DELETE',
            header:{ 'Accept': 'application/json',
            'Content-Type': 'application/json'}
        })
    }
}

componentDidMount(){
  
    this.refreshList();
   
}

componentDidUpdate(){
  
    this.refreshList();
  
}

    render(){
        const {deps, depid,depname}=this.state;      
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
               <thead>
                   <tr>
                       <th> Department Id </th>
                       <th> Department Name </th>
                       <th> Options </th> 
                   </tr>                  
               </thead>
               <tbody>
                   {
                       deps.map(dep=>
                        <tr key={dep.DeptId}>
                            <td>{dep.DeptId}</td>
                            <td>{dep.DeptName}</td>
                            <td> 
                        <ButtonToolbar>
                            <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,depid:dep.DeptId,depname:dep.DeptName})}>
                        Edit
                            </Button>

                            <Button className="mr-2" variant="danger" onClick={()=>this.deleteDep(dep.DeptId)}>
                        Delete
                            </Button>

                            <EditDepModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        deptId={depid}
                        deptName={depname}/>     
                            </ButtonToolbar>
                            </td>
                         </tr>   
                        )
                   }
               </tbody>
               </Table>
               <ButtonToolbar>
                   <Button style={{ marginTop : "25px"}}variant='primary'
                   onClick={()=>this.setState({addModalShow:true})}>
                       Add Department
                       </Button>
                 <AddDepModal show={this.state.addModalShow}
                 onHide={addModalClose}/>
               </ButtonToolbar>
            </div>
           
        )
    }
}