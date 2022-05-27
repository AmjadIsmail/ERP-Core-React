import React,{Component} from 'react';
import { Variables } from '../Variables';

export class TaxSlab extends Component{

    constructor(props){
        super(props);

        this.state={
            taxslabs:[],
            modalTitle:"",
            TaxSlabId:"",
            AmountFrom:0,  
            AmountTo:0,
            FixTaxAmount :0,
            DiffrenceRate : 0 , 

            TaxSlabIdFilter:"",
            AmountFromFilter:"",
            AmountToFilter:"",
            FixTaxAmountFilter :"",
            DiffrenceRateFilter : "",
            taxslabsWithoutFilter:[]
        }
    }
 // Filter Function
    FilterFn(){
        var TaxSlabIdFilter=this.state.TaxSlabIdFilter;
        var AmountFromFilter = this.state.AmountFromFilter;
        var AmountToFilter = this.state.AmountToFilter;
        var FixTaxAmountFilter = this.state.FixTaxAmountFilter;
        var DiffrenceRateFilter = this.state.DiffrenceRateFilter;


        var filterData=this.state.taxslabsWithoutFilter.filter(
            function(el){
                return el.TaxSlabId.toString().toLowerCase().includes(
                    TaxSlabIdFilter.toString().trim().toLowerCase()
                )&&
                el.AmountFrom.toString().toLowerCase().includes(
                    AmountFromFilter.toString().trim().toLowerCase()
                )
                &&
                el.AmountTo.toString().toLowerCase().includes(
                    AmountToFilter.toString().trim().toLowerCase()
                )
                &&
                el.FixTaxAmount.toString().toLowerCase().includes(
                    FixTaxAmountFilter.toString().trim().toLowerCase()
                )
                &&
                el.DiffrenceRate.toString().toLowerCase().includes(
                    DiffrenceRateFilter.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({taxslabs:filterData});
    }

 // sort Filter
   sortResult(prop,asc)
    {
       var sortedData=this.state.taxslabsWithoutFilter.sort
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
      this.setState({taxslabs:sortedData});
    }
    
   changeTaxSlabIdFilter = (e)=>{
       this.state.TaxSlabIdFilter=e.target.value;
       this.FilterFn();
   }

   changeAmountFromFilter = (e)=>{
    this.state.AmountFromFilter=e.target.value;
    this.FilterFn();
    }

changeAmountToFilter = (e)=>{
    this.state.AmountToFilter=e.target.value;
    this.FilterFn();
    }

changeFixTaxAmountFilter = (e)=>{
    this.state.FixTaxAmountFilter=e.target.value;
    this.FilterFn();
    }

    changeDiffrenceRateFilter = (e)=>{
        this.state.DiffrenceRateFilter=e.target.value;
        this.FilterFn();
        }

    refreshList(){
       
        fetch(process.env.REACT_APP_API+'taxslabs')
        .then(response=>response.json())
        .then(data=>{           
            console.log(data);
            this.setState({taxslabs:data,taxslabsWithoutFilter:data})
        })
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeAmountFrom =(e)=>{
        this.setState({AmountFrom:e.target.value});
    }

    changeAmountTo =(e)=>{
        this.setState({AmountTo:e.target.value});
    }
    changeFixTaxAmount =(e)=>{
        this.setState({FixTaxAmount:e.target.value});
    }

    changeDiffrenceRate=(e)=>{
        this.setState({DiffrenceRate:e.target.value});
    }


    addClick(){
        this.setState({
         modalTitle:"Add Tax Slab",
         TaxSlabId:"",
         AmountFrom:0,  
         AmountTo:0,
         FixTaxAmount :0,
         DiffrenceRate : 0  
        })
    }

    
    editClick(dep){
        this.setState({
         modalTitle:"Edit Slab",
         TaxSlabId:dep.TaxSlabId,
         AmountFrom:dep.AmountFrom,  
         AmountTo:dep.AmountTo,
         FixTaxAmount :dep.FixTaxAmount,
         DiffrenceRate :dep.DiffrenceRate  
        })
    }
  /// Pending Task will be complete on monday insha Allah
    createClick(){
        fetch(process.env.REACT_APP_API+'taxslabs',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               // GradeName:this.state.GradeName
                AmountFrom:this.state.AmountFrom,  
                AmountTo:this.state.AmountTo,
                FixTaxAmount :this.state.FixTaxAmount,
                DiffrenceRate :this.state.DiffrenceRate  
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
        fetch(Variables.API_URL+'taxslabs',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TaxSlabId:this.state.TaxSlabId,
                AmountFrom:this.state.AmountFrom,  
                AmountTo:this.state.AmountTo,
                FixTaxAmount :this.state.FixTaxAmount,
                DiffrenceRate :this.state.DiffrenceRate  
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
            fetch(Variables.API_URL+'taxslabs/'+id,{
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
        taxslabs,
        TaxSlabId,
        AmountFrom,
        AmountTo,
        FixTaxAmount,
        DiffrenceRate,
        modalTitle
        } = this.state;
return(
    <div>
    <button type="button"
    className='btn btn-primary m-2 float-end'
    data-bs-toggle="modal"
    data-bs-target='#exampleModal'
    onClick={()=>this.addClick()}>
        Add Tax Slab
    </button>

    <table className='table table-striped'>
    <thead>
        <tr>
            <th>
            <div className='d-flex flex-row'>
            <input className='form-control m2' onChange={this.changeTaxSlabIdFilter} placeholder="filter"/> 
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('TaxslabId',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('TaxslabId',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
                    TaxSlab Id
            </th>
            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeAmountFromFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('AmountFrom',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('AmountFrom',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Amount From
            </th>

            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeAmountToFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('AmountTo',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('AmountTo',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Amount To
            </th>

            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeFixTaxAmountFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FixTaxAmount',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FixTaxAmount',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Fix Tax Amount
            </th>


            <th>
            <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeDiffrenceRateFilter}
            placeholder="Diffrence Rate Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('DiffrenceRate',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('DiffrenceRate',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </div>
            Diffrence Rate
            </th>


            <th>
                    Options
             </th>
        </tr>
    </thead>
    <tbody>
        {taxslabs.map(val=>
            <tr key={val.TaxSlabId}>
                <td>{val.TaxSlabId}</td>
                <td>{val.AmountFrom}</td>
                <td>{val.AmountTo}</td>
                <td>{val.FixTaxAmount}</td>
                <td>{val.DiffrenceRate}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(val)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(val.TaxSlabId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Amount From</span>
                            <input type="text" className="form-control"
                            value={AmountFrom}
                            onChange={this.changeAmountFrom}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Amount To</span>
                            <input type="text" className="form-control"
                            value={AmountTo}
                            onChange={this.changeAmountTo}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Fix Tax Amount</span>
                            <input type="text" className="form-control"
                            value={FixTaxAmount}
                            onChange={this.changeFixTaxAmount}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Diffrence Rate</span>
                            <input type="text" className="form-control"
                            value={DiffrenceRate}
                            onChange={this.changeDiffrenceRate}/>
                        </div>


                            {TaxSlabId==0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.createClick()}
                            >Create</button>
                            :null}

                            {TaxSlabId!=0?
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