import React,{Component} from 'react';
import {Table} from 'react-bootstrap'

import {Button,ButtonToolbar} from 'react-bootstrap'
import {AddDesigModal} from './AddDesigModal';
import {EditDesigModal} from './EditDesigModal';


export class Designation extends Component{
    constructor(props){
        super(props);
        this.state={desigs:[], addModalShow:false , editModalShow:false}
    }

refreshList(){
  
    fetch(process.env.REACT_APP_API+'designation')
    .then(response=>response.json())
    .then(data=>{
        this.setState({desigs:data});
    });
}

deleteDesignation(desigid){
    if(window.confirm('Are you sure?'))
    {
        fetch(process.env.REACT_APP_API+'designation/'+ desigid,{
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
        const {desigs, desigid,designation}=this.state;      
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
               <thead>
                   <tr>
                       <th> Designation Id </th>
                       <th> Designation Name </th>
                       <th> Options </th> 
                   </tr>                  
               </thead>
               <tbody>
                   {
                       desigs.map(des=>
                        <tr key={des.DesigId}>
                            <td>{des.DesigId}</td>
                            <td>{des.Designation}</td>
                            <td> 
                        <ButtonToolbar>
                            <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,desigid:des.DesigId,designation:des.Designation})}>
                        Edit
                            </Button>

                            <Button className="mr-2" variant="danger" onClick={()=>this.deleteDesignation(des.DesigId)}>
                        Delete
                            </Button>

                            <EditDesigModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        desigId={desigid}
                        desigName={designation}/>     
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
                       Add Designation
                       </Button>
                 <AddDesigModal show={this.state.addModalShow}
                 onHide={addModalClose}/>
               </ButtonToolbar>
            </div>
           
        )
    }
}