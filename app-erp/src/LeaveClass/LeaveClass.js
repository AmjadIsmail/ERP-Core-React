import React , {Component} from 'react';
import {Table} from 'react-bootstrap';

import { Button,ButtonToolbar } from 'react-bootstrap';


export class LeaveClass extends Component{
    constructor(props){
        super(props);
        this.state = {lvclasses:[], addModalShow:false, editModalShow:false}
    }
 
    refreshList(){
     fetch(process.env.REACT_APP_API+'leaveclass')
      .then(response=>response.json())
      .then(data=>{
          //console.log(data)
          this.setState({lvclasses:data});
        });
    }

   componentDidMount(){
       this.refreshList();
   }
   componentDidUpdate(){
       this.refreshList();
   }

  render(){
      const{lvclasses,lvclassid,lvclassname} = this.state;

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
                                        onClick={()=>this.setState({editModalShow:true,lvclassid:lvc.LeaveClassId,lvclassname:lvc.LeaveClass})}>
                                            Edit
                                        </Button>
                                        <Button className='mr-2' variant="danger" onClick={()=>this.deleteLeaveClass(lvc.LeaveClassId)}>
                                            Delete
                                        </Button>

                                    </ButtonToolbar>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </Table>
        </div>
      )
  }


}