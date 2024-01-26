package com.sit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sit.bean.SalaryDetails;
import com.sit.service.SalaryService;

@CrossOrigin
@RestController // used to handle the req and send resp to client app
public class SalaryController {

	@Autowired
	private SalaryService service;

	// for saving employee
	@PostMapping("/saveSalary")
	public ResponseEntity<SalaryDetails> saveSalaryDetails(@RequestBody SalaryDetails emp) {
		SalaryDetails saveEmployeeDetails = service.createSalary(emp);
		ResponseEntity<SalaryDetails> responseEntity = new ResponseEntity<>(saveEmployeeDetails, HttpStatus.OK);
		return responseEntity;
	}

	@GetMapping("/getSalaryByYoe/{id}")
	public ResponseEntity<Integer> getSalaryByYoe(@PathVariable("id") Long exp) {
		Integer employeeById = service.getSalaryByYoe(exp);
		return new ResponseEntity<>(employeeById, HttpStatus.OK);
	}

	// for delete employee based on ID
	@RequestMapping("/deleteSalary/{id}")
	public void deleteSalaryById(@PathVariable("id") int id) {
		// get employee details based on id then delete
		service.deleteById(id);
	}

	// for getting all employees
	@GetMapping("/getSalaryList")
	public List<SalaryDetails> getSalaryList() {
		List<SalaryDetails> salaryList = service.getAllSalaryDetails();
		return salaryList;
	}

	@RequestMapping(value = "/updateSalary", method = RequestMethod.POST)
	public SalaryDetails updateSalary(@RequestBody SalaryDetails objFromClient) {
		SalaryDetails savedSalDetails = service.updateSalary(objFromClient);
		return savedSalDetails;
	}

}
