package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Expenses;


@Repository
public interface ExpensesRepository extends JpaRepository<Expenses,Integer>{

	List<Expenses> findByPerson(String person);
//	List<Expenses> findByType(String type);
}
