import React, { Component } from 'react';
import ExpensesService from '../services/ExpensesService';

class UpdateExpenses extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 person:'',
                 category:'',
                 amount:'',
                 date:'',
                 type:''
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.personHandler = this.personHandler.bind(this);
        this.categoryHandler = this.categoryHandler.bind(this);
        this.amountHandler = this.amountHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.typeHandler = this.typeHandler.bind(this);
        this.updateExpenses = this.updateExpenses.bind(this);

    }//constructor

     componentDidMount()
     {
        ExpensesService.getExpensesById(this.state.id).then((res) =>{
          let Expenses = res.data;
          this.setState({person:Expenses.person,
                  category:Expenses.category,
                  amount:Expenses.amount,
                  date:Expenses.date,
                  type:Expenses.type
                });
        });
           
     }
     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }

    personHandler=(event) => {
        this.setState({
           person: event.target.value});
    }

    categoryHandler=(event) => {
        this.setState({
             category: event.target.value});
    }
    amountHandler=(event) => {
        this.setState({
             amount: event.target.value});
    }
    dateHandler=(event) => {
        this.setState({
             date: event.target.value});
    }
    typeHandler=(event) => {
        this.setState({
             type: event.target.value});
    }

   updateExpenses = (e) => {
        e.preventDefault();
        let Expenses={
           id: this.state.id,
           person: this.state.person,
           category: this.state.category,
           amount: Number(this.state.amount),
           date: this.state.date,
           type: this.state.type
        };
        
        ExpensesService.updateExpenses(Expenses,this.state.id).then((res) => {
                this.props.history.push('/Expenses');
        });
      
        
    }

    cancel(){
        this.props.history.push('/Expenses');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Expenses</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Person: </label>
                                      <input placeholder="Person" name="person" className="form-control"
                                         value={this.state.person} onChange={this.personHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Category: </label>
                                      <input placeholder="Category" name="category" className="form-control"
                                         value={this.state.category} onChange={this.categoryHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Amount: </label>
                                      <input placeholder="Amount" name="amount" className="form-control"
                                         value={this.state.amount} onChange={this.amountHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Date: </label>
                                      <input placeholder="Date" name="date" className="form-control"
                                         value={this.state.date} onChange={this.dateHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Type: </label>
                                      <input placeholder="Type" name="type" className="form-control"
                                         value={this.state.type} onChange={this.typeHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.updateExpenses}> Update </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default UpdateExpenses;