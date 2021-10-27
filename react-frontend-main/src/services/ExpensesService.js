import axios from 'axios';

const EXPENSES_API_BASE_URL= "http://localhost:8080/api";
class ExpensesService{

    getExpenses(){
        return axios.get(EXPENSES_API_BASE_URL+"/allExpenses");
    }

    createExpenses(Expenses){
        return axios.post(EXPENSES_API_BASE_URL+"/addExpenses",Expenses);
    }

    getExpensesById(id){
        return axios.get(EXPENSES_API_BASE_URL+"/expenses/id/"+id);
    }

    updateExpenses(Expenses,id){
        return axios.put(EXPENSES_API_BASE_URL+"/expenses/id/"+id,Expenses);
    }

    deleteExpenses(id){
        return axios.delete(EXPENSES_API_BASE_URL+"/expenses/id/"+id);
    }

}

export default new ExpensesService();