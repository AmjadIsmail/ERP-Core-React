import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class EditDepModal extends Component{

    constructor(props){
        super(props);  
        console.log(props) 
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'departments',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DeptId:event.target.DeptId.value,
                DeptName:event.target.DeptName.value
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
    Add Department
</Modal.Title>

</Modal.Header>
<Modal.Body>
    <Row>
        <Col sm={6}>
<Form onSubmit={this.handleSubmit}>

<Form.Group controlId="DeptId">
     <Form.Label>Department ID</Form.Label>
     <Form.Control type="text" name="DeptId" required
     disabled
     defaultValue={this.props.deptId}
     placeHolder="Department ID"/>
 </Form.Group>

 <Form.Group controlId="DeptName">
     <Form.Label>Department Name</Form.Label>
     <Form.Control type="text" name="DeptName" required
     defaultValue={this.props.deptName}
     placeHolder="Department"/>
 </Form.Group>

 <Form.Group>
     <Button style={{ marginTop : "25px"}} variant="primary" type="submit">
        Update Department
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