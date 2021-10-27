import React, { Component } from 'react';
import ExpensesService from '../services/ExpensesService';

class ViewExpenses extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 Expenses:{}

             }
     
        
        
    }//constructor

     componentDidMount()
     {
        ExpensesService.getExpensesById(this.state.id).then((res) =>{
            this.setState({Expenses:res.data})
         });
     }
     
    
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Expenses Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>ID: </label>
                                    <input placeholder={this.state.Expenses.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Person: </label>
                                      <input placeholder={this.state.Expenses.person} readOnly={true} name="person" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Category: </label>
                                      <input placeholder={this.state.Expenses.category} readOnly={true} name="category" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Amount: </label>
                                      <input placeholder={this.state.Expenses.amount} readOnly={true} name="amount" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Date: </label>
                                      <input placeholder={this.state.Expenses.date} readOnly={true} name="date" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                      <label>Type: </label>
                                      <input placeholder={this.state.Expenses.type} readOnly={true} name="type" className="form-control" />
                                   </div> 
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewExpenses;