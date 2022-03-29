import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class AddLeaveClassModal extends Component {

  constructor(props){
      super(props);
      this.hadleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(process.env.REACT_APP_API+'leaveclass',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            LeaveClassId:1,
            LeaveClassName:event.target.LeaveClassName.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })
}

  render(){
    return(
        <div className='container'>
<Modal 
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
> 
<Modal.Header clooseButton>
<Modal.Title id="contained-modal-title-vcenter">
Add Leave type
</Modal.Title>

</Modal.Header>
<Modal.Body>
<Row>
    <Col sm={6}>
<Form onSubmit={this.handleSubmit}>
<Form.Group controlId="LeaveClassName">
 <Form.Label>Leave Class Name</Form.Label>
 <Form.Control type="text" name="LeaveClassName" required
 placeHolder="Leave Class"/>
</Form.Group>

<Form.Group>
 <Button style={{ marginTop : "25px"}} variant="primary" type="submit">
     Add Leave Type
 </Button>
</Form.Group>
</Form>
    </Col>
</Row>
</Modal.Body>
<Modal.Footer>
<Button variant="danger" onClick={this.props.onHide}>
    Close
</Button>
</Modal.Footer>

</Modal>

        </div>
    )
}


}