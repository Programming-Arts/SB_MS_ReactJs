package com.sit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sit.bean.Employee;
import com.sit.repo.EmployeeDetailsRepo;

@RestController
public class CustomQueriesDemo {

	@Autowired
	private EmployeeDetailsRepo repo;

	@GetMapping("/getEmps")
	public List<Employee> getAllEmployees() {
		return repo.getAllEmps();
	}
	
	@GetMapping("/getAllContacts")
	public List<Long> getAllContacts() {
		return repo.getAllContacts();
	}
	
	@GetMapping("/getAllnames")
	public List<String> getAllnames() {
		return repo.getAllnames();
	}
	
	@GetMapping("/findByName/{name}")
	public List<Employee> findByName(@PathVariable("name") String name) {
		return repo.findByName(name);
	}
	
	@GetMapping("/findByAge/{age}")
	public List<Employee> findByAge(@PathVariable("age") Integer age) {
		return repo.findByAge(age);
	}
	
	@GetMapping("/findByEmail/{mail}")
	public List<Employee> findByEmail(@PathVariable("mail") String mail) {
		return repo.findByEmailContains(mail);
	}
	
	@GetMapping("/updateContacts")
	public void updateContacts(@RequestParam("maxAge") int maxAge,
			@RequestParam("minAge") int minAge,
			@RequestParam("contact") int contact) {
		repo.updateContacts(minAge, maxAge, contact);
	}

}
