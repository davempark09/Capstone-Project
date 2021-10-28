import React, { Component } from 'react';
import ExpensesService from '../services/ExpensesService';

class DeleteExpenses extends Component {
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
        
        this.deleteExpenses = this.deleteExpenses.bind(this);

    };//constructor

    componentDidMount()
    {
        ExpensesService.getExpensesById(this.state.id).then((res) =>{
            let Expenses = res.data;
            this.setState({
                person:Expenses.person,
                category:Expenses.category,
                amount:Expenses.amount,
                date:Expenses.date,
                type:Expenses.type
            });
        });
    }

    deleteExpenses = (e) => {
        e.preventDefault();
        let Expenses={
            id: this.state.id,
            person: this.state.person,
            category: this.state.category,
            amount: Number(this.state.amount),
            date: this.state.date,
            type: this.state.type
        };

        console.log(Expenses);
        ExpensesService.deleteExpenses(this.state.id).then(res => {
            this.props.history.push('/Expenses');
        })
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
                            <h3 className="text-center">Delete Entry</h3>
                            <div className="card-body">
                                <form>  
                                    <div className="form-group">
                                        <label>ID: </label>
                                        <input placeholder="Id" readOnly="true" name="id" className="form-control" value={this.state.id} onChange={this.idHandler} />
                                    </div>   
                                    <div className="form-group">
                                        <label>Person: </label>
                                        <input placeholder="Person" readOnly= "true" name="person" className="form-control" value={this.state.person} onChange={this.personHandler} />
                                    </div>   
                                    <div className="form-group">
                                        <label>Category: </label>
                                        <input placeholder="Category" readOnly="true" name="category" className="form-control" value={this.state.category} onChange={this.categoryHandler} />
                                    </div>   
                                    <div className="form-group">
                                        <label>Amount: </label>
                                        <input placeholder="Amount" readOnly="true" name="amount" className="form-control" value={this.state.amount} onChange={this.amountHandler} />
                                    </div>   
                                    <div className="form-group">
                                        <label>Date: </label>
                                        <input placeholder="Date" readOnly="true" name="date" className="form-control" value={this.state.date} onChange={this.dateHandler} />
                                    </div>   
                                    <div className="form-group">
                                        <label>Type: </label>
                                        <input placeholder="Type" readOnly="true" name="type" className="form-control" value={this.state.type} onChange={this.typeHandler} />
                                    </div>   
                                    <button className="btn btn-success" onClick={this.deleteExpenses}> Delete </button>
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

export default DeleteExpenses;