import React, { Component } from 'react';
import ExpensesService from '../services/ExpensesService';

class ListExpenses extends Component {
    constructor(props) {
        super(props)
        this.state={
            Expenses:[] 
        }
        this.addExpenses=this.addExpenses.bind(this);
        this.editExpenses=this.editExpenses.bind(this);
        this.deleteExpenses=this.deleteExpenses.bind(this);
        this.viewExpenses=this.viewExpenses.bind(this);
    }
    
    componentDidMount() {
        ExpensesService.getExpenses().then((res) => {
            this.setState({Expenses:res.data});
        });
    }

    addExpenses()
    {
        this.props.history.push('/add-Expenses');
    }

    editExpenses(id)
    {
        this.props.history.push(`/update-Expenses/${id}`);
    
    }

    deleteExpenses(id)
    {
        this.props.history.push(`/delete-Expenses/${id}`);
    }

    viewExpenses(id)
    {
        this.props.history.push(`/view-Expenses/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Entries List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addExpenses}> Add Entry</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Person</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Expenses.map(
                                    Expenses =>
                                    <tr key={Expenses.id}>
                                        <td>{Expenses.id}</td>
                                        <td>{Expenses.person}</td>
                                        <td>{Expenses.category}</td>
                                        <td>{Expenses.amount}</td>
                                        <td>{Expenses.date}</td>
                                        <td>{Expenses.type}</td>
                                        <td>
                                            <button onClick={() =>this.editExpenses(Expenses.id)} className="btn btn-success">Update</button> 
                                            <button onClick={() =>this.deleteExpenses(Expenses.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewExpenses(Expenses.id)} className="btn btn-primary">View</button> 
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListExpenses;