import React , {Component} from 'react';
import {Table} from 'react-bootstrap';

import { Button,ButtonToolbar } from 'react-bootstrap';
import {AddLeaveClassModal} from './AddLeaveClassModal';
import {EditLeaveClassModal} from './EditLeaveClassModal';

export class LeaveClass extends Component{
    constructor(props){
        super(props);
        this.state = {lvclasses:[], addModalShow:false, editModalShow:false}       
    }
 
    refreshList(){
     fetch(process.env.REACT_APP_API+'leaveclass')
      .then(response=>response.json())
      .then(data=>{  
          this.setState({lvclasses:data});         
        });
    }
    deleteLeaveClass(lvid){
        if(window.confirm('Are you sure?'))
        {
            fetch(process.env.REACT_APP_API+'leaveclass/'+ lvid,{
                method:'DELETE',
                header:{ 'Accept': 'application/json',
                'Content-Type': 'application/json'}
            }).then(this.refreshList());
            
        }
    }
   componentDidMount(){
       this.refreshList();
   }
   componentDidUpdate(){
    this.refreshList();
   }

  render(){
    
      const{lvclasses,leaveclassId,leaveClass} = this.state;
      let addModalClose=()=>this.setState({addModalShow:false});
      let editModalClose=()=>this.setState(
          {
              editModalShow:false
          },
          this.refreshList()
          );
      return(
        <div>
            <Table className='mt-4' striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Leave Class Id</th>
                        <th> Leave Class Name</th>
                        <th> options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lvclasses.map(lvc =>
                            <tr key={lvc.LeaveClassID}>
                                <td>{lvc.LeaveClassID}</td>
                                <td>{lvc.LeaveClass}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" 
                                        onClick={()=>this.setState({editModalShow:true,leaveclassId:lvc.LeaveClassID,leaveClass:lvc.LeaveClass})}>
                                            Edit
                                        </Button>
                                        <Button className='mr-2' variant="danger" onClick={
                                            ()=>this.deleteLeaveClass(lvc.LeaveClassID)
                                            
                                            }>
                                            Delete
                                        </Button>
                                        <EditLeaveClassModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        leaveclassId={leaveclassId}
                                        leaveclassName={leaveClass}/>  
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
                       Add Leave Class
                       </Button>
                 <AddLeaveClassModal show={this.state.addModalShow}
                 onHide={addModalClose}/>
               </ButtonToolbar>
        </div>
      )
  }


}