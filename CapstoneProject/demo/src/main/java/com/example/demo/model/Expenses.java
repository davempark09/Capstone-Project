package com.example.demo.model;

//import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="expenses")
public class Expenses {
	@Id
	private int id;
	private String person;
    private String category;
    private float amount;
    @JsonFormat(pattern="MM-dd-yyyy")
    private String date;
    private String type;
 
	public Expenses()
    {
    	
    }
    public Expenses(int id, String person, String category, float amount, String date, String type) {
		super();
		this.id = id;
		this.person = person;
		this.category = category;
		this.amount = amount;
		this.date = date;
		this.type = type;
	}
    
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPerson() {
		return person;
	}
	public void setPerson(String person) {
		this.person = person;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
    public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
}
    
