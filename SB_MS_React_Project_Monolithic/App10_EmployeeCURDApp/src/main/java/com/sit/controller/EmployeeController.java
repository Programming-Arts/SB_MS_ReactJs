package com.sit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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

import com.sit.InsuranceDTO;
import com.sit.bean.Employee;
import com.sit.exception.InvalidEmployeeDetailsException;
import com.sit.helper.Validator;
import com.sit.service.MyEmployeeService;

import oracle.security.crypto.util.InvalidInputException;

@CrossOrigin
@RestController // used to handle the req and send resp to client app
public class EmployeeController {

	@Autowired
	private MyEmployeeService service;
	@Autowired
	private Validator empValidator;

	// for saving employee
	@PostMapping("/saveEmp")
	public Employee saveEmployeeDetails(@RequestBody Employee emp) {
		// validate
		empValidator.validateEmployeeDetails(emp);
		Employee saveEmployeeDetails = service.saveEmployeeDetails(emp);
		return saveEmployeeDetails;
	}

//	for getting employeey based on ID
//	http://localhost:9090/getEmp/12
//	@RequestMapping("/getEmp/{empId}")
//	public Employee getEmployeeById(@PathVariable("empId") int id) {
//		Employee employeeById = service.getEmployeeById(id);
//		return employeeById;
//	}
//	http://localhost:9090/getEmp?empID=12
	@RequestMapping("/getEmp")
	public Employee getEmployeeById(@RequestParam("empID") int id) {
		Employee employeeById = service.getEmployeeById(id);
		return employeeById;
	}

	// for delete employee based on ID
	@RequestMapping("/deleteEmp/{id}")
	public void deleteEmployeeById(@PathVariable("id") int id) {
		// get employee details based on id then delete
		service.deleteEmployeeById(id);
	}

	// for getting all employees
	@GetMapping("/getEmpList")
	public List<Employee> getEmployees() {
		List<Employee> employees = service.getEmployees();
		return employees;
	}

	@RequestMapping(value = "/updateEmployee", method = RequestMethod.POST)
	public Employee updateEmployee(@RequestBody Employee objFromClient) {
		Employee savedEmp = service.updateEployee(objFromClient);
		return savedEmp;
	}

	@GetMapping("/getByAge/{age}/{name}")
	public List<Employee> getEmployeesByAge(@PathVariable("age") int age, @PathVariable("name") String name) {
		List<Employee> employees = service.getEmployeesByAge(age, name);
		return employees;
	}

	//
	@GetMapping("/inactiveEmp/{id}/{active}")
	public List<Employee> inactivateEmployee(@PathVariable("id") int empId, @PathVariable("active") Boolean active) {
		return service.inactivateEmployeeById(empId, active);
	}

	@GetMapping("/getQualificationList")
	public ResponseEntity<List> getQualificationList() {
		List<String> qulaificatinList = service.getQulaificatinList();
		ResponseEntity<List> responseEntity = new ResponseEntity<List>(qulaificatinList, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("/getinsuranceList")
	public ResponseEntity<List> getinsuranceList() {
		List<InsuranceDTO> qulaificatinList = service.getInsuranceList();
		ResponseEntity<List> responseEntity = new ResponseEntity<List>(qulaificatinList, HttpStatus.OK);
		return responseEntity;
	}
	
	
	@GetMapping("/updateInsuranceById/{id}/{status}")
	public ResponseEntity<List> updateInsuranceById(@PathVariable("id")Integer id,
			@PathVariable("status") Integer status) {
		 service.updateInsuranceById(id,status);
		ResponseEntity<List> responseEntity = new ResponseEntity<List>(HttpStatus.OK);
		return responseEntity;
	}
	
	
	
}
