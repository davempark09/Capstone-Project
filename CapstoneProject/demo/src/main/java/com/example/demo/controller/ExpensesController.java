package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Expenses;
import com.example.demo.repository.ExpensesRepository;


import com.example.demo.exception.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ExpensesController {

@Autowired
	private ExpensesRepository expensesRepo;
    


	//get all students
	
	@GetMapping("/allExpenses")
	public List<Expenses> getAllExpenses()
	{
		
		return expensesRepo.findAll();
	}
	

	@PostMapping("/addExpenses")
    public Expenses newExpenses(@RequestBody Expenses s)
    {
		
		return expensesRepo.save(s);
    }
	
	
	@GetMapping("/expenses/id/{id}")
	public ResponseEntity<Expenses> getExpensesById(@PathVariable int id)
	{
		Expenses s= expensesRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Expense not found"));
		return ResponseEntity.ok(s);                 
	}
	
	@GetMapping("/expenses/person/{person}")
	public List<Expenses> getExpensesByPerson(@PathVariable String person)
	{
		
		List <Expenses> expenses=expensesRepo.findByPerson(person);
		if(expenses.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Person with the name "+ person +" not found"));
		}
		
		return expensesRepo.findByPerson(person);
	}
	
//	@GetMapping("/expenses/type/{type}")
//	public List<Expenses> getExpensesByType(@PathVariable String type)
//	{
//		
//		List <Expenses> expenses=expensesRepo.findByType(type);
//		if(expenses.isEmpty())
//		{
//			System.out.println(new ResourceNotFoundException("Type with the name "+ type +" not found"));
//		}
//		
//		return expensesRepo.findByType(type);
//	}
	
	
	@PutMapping("/expenses/id/{id}")
	public ResponseEntity<Expenses> updateExpenses(@PathVariable int id, @RequestBody Expenses expenses)
	{
		Expenses s= expensesRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Expense not found"));
	    s.setPerson(expenses.getPerson());
	    s.setCategory(expenses.getCategory());
	    s.setAmount(expenses.getAmount());
	    s.setDate(expenses.getDate());
	    s.setType(expenses.getType());
	    Expenses updatedExpenses=expensesRepo.save(s);
	    return ResponseEntity.ok(updatedExpenses);
	}
	

	
	@DeleteMapping("/expenses/id/{id}")
	public String deleteExpenses(@PathVariable int id)
	{
		expensesRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Expense not found"));
	    expensesRepo.deleteById(id);
	    return "The expense with id: "+ id +" is removed from the database.";
	}
	
}
