import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

export class EditDesigModal extends Component{

    constructor(props){
        super(props);  
        console.log(props.Designation) 
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'designation',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DesigId:event.target.DesigId.value,
                Designation1:event.target.Designation.value
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
    Edit Designation
</Modal.Title>

</Modal.Header>
<Modal.Body>
    <Row>
        <Col sm={6}>
<Form onSubmit={this.handleSubmit}>

<Form.Group controlId="DesigId">
     <Form.Label>Designation ID</Form.Label>
     <Form.Control type="text" name="DesigId" required
     disabled
     defaultValue={this.props.desigId}
     placeHolder="Designation ID"/>
 </Form.Group>

 <Form.Group controlId="Designation">
     <Form.Label>Designation Name</Form.Label>
     <Form.Control type="text" name="Designation" required
     defaultValue={this.props.desigName}
     placeHolder="Designation"/>
 </Form.Group>

 <Form.Group>
     <Button style={{ marginTop : "25px"}} variant="primary" type="submit">
        Update Designation
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