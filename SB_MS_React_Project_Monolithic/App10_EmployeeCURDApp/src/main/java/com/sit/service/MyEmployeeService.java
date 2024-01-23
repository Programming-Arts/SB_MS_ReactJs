package com.sit.service;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sit.InsuranceDTO;
import com.sit.bean.Employee;
import com.sit.bean.QualificationDetails;
import com.sit.repo.EmployeeDetailsRepo;
import com.sit.repo.QualificationRepo;

@Service
public class MyEmployeeService {

	@Autowired
	private EmployeeDetailsRepo repo;
	@Autowired
	private QualificationRepo qualificationRepo;

	// for saving employee
	public Employee saveEmployeeDetails(Employee emp) {
		emp.setIsActive(true);
		// details related to EPF
		String epfAccNo = emp.getName() + "00EPF" + emp.getAge();
		emp.setEpfAccNo(epfAccNo);
		emp.setEpfStatus(true);
		Employee savedEmployee = repo.save(emp);
		return savedEmployee;
	}

	// for getting employee based on ID
	public Employee getEmployeeById(int id) {
		Employee empObj = null;
		// findByID will return the records wrapped by optional class/object
		Optional<Employee> optionalObject = repo.findById(id);

		boolean isPresent = optionalObject.isPresent();

		// we can get actual object by calling get() of Optional class
		if (isPresent == true) {
			empObj = optionalObject.get();

		} else {
			empObj = null;
		}
		return empObj;
	}

	// for delete employee based on ID
	public void deleteEmployeeById(int id) {
		repo.deleteById(id);

	}

	// for getting all employees
	public List<Employee> getEmployees() {
		// performance optimization use case
		LinkedList<Employee> activeEmployees = new LinkedList<>();
		List<Employee> empList = repo.findAll();
//		for (Employee emp : empList) {
//			if (emp.getIsActive() == true)
//				activeEmployees.add(emp);
//		}
		return empList;
	}

	public Employee updateEployee(Employee empFromUI) {
		Employee employeeFromDB = null;
		int empId = empFromUI.getId();
		// get employee record from Db based on empId
		Optional<Employee> optionalObj = repo.findById(empId);

		if (optionalObj.isPresent()) {
			employeeFromDB = optionalObj.get();
			String updatedName = empFromUI.getName();
			employeeFromDB.setName(updatedName);
//			employeeFromDB.setIsActive(empFromUI.getIsActive());
			employeeFromDB.setAge(empFromUI.getAge());
			employeeFromDB.setContact(empFromUI.getContact());
			employeeFromDB.setEmail(empFromUI.getEmail());
			employeeFromDB.setQualification(empFromUI.getQualification());
			employeeFromDB.setSalary(empFromUI.getSalary());
			if(empFromUI.getInsuranceStatus()==true)
			employeeFromDB.setInsuranceAmount(10*empFromUI.getSalary());
			else 
				employeeFromDB.setInsuranceAmount(0L);
			employeeFromDB.setInsuranceName(empFromUI.getInsuranceName());
			employeeFromDB.setInsuranceStatus(empFromUI.getInsuranceStatus());
			
			employeeFromDB = repo.save(employeeFromDB);
			
		}
		return employeeFromDB;
	}

	public List<Employee> getEmployeesByAge(int age, String name) {
		List<Employee> emps = repo.getEmployeesByAge(name, age);
		return emps;
	}

	public List<Employee> inactivateEmployeeById(int id, Boolean activeFromUI) {
		// performance optimization use case
		Employee empById = new Employee();

		// get employees from DB
		List<Employee> employeesFromDB = getEmployees();
		// get employee based on id from employee list
		for (Employee emp : employeesFromDB) {
			if (emp.getId() == id) {
				empById = emp;
				break;
			}
		}
		// make it as inactive setIsActie=false
		empById.setIsActive(activeFromUI);
		// save the record

		repo.save(empById);
		// return all active employess
		return getEmployees();
	}

	public List<String> getQulaificatinList() {
		List<String> qualificationList = new LinkedList<>();
		List<QualificationDetails> list = qualificationRepo.findAll();
		for (QualificationDetails qd : list) {
			String name = qd.getQualificationName();
			qualificationList.add(name);
		}
		return qualificationList;
	}
	
	public  List<InsuranceDTO> getInsuranceList() {
		return repo.getInsuranceDetails();
	}
	
	public void updateInsuranceById(Integer id,Integer status) {
		repo.updateInsuranceById(id, status);
	}
}
