package com.sit.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sit.InsuranceDTO;
import com.sit.bean.Employee;

import jakarta.transaction.Transactional;

//SPRING DATA JPA
@Repository
public interface EmployeeDetailsRepo extends JpaRepository<Employee, Integer> {
//-----------------------------------NATIVE QUERIES--------------------------
//  named parameter
//	@Query(value = "select * from employee_details_tab where age = :ageOfEmp and emp_name = :nameOfEmp", nativeQuery = true)
//	public List<Employee> getEmployeesByAge(@Param("nameOfEmp") String name, @Param("ageOfEmp") int age);

	@Query(value = "select * from employee_details_tab where age = ?2 and emp_name=?1 ", nativeQuery = true)
	public List<Employee> getEmployeesByAge(String name, int age);

//	-----------------------------------HQL QUERIES--------------------------

	// method to getall employees
	// SQL> select * from employee_details_tab;
	// HQL> select emp from Employee emp;
	@Query(value = "select emp from Employee emp", nativeQuery = false)
	public List<Employee> getAllEmps();

	// SQL > select contacts from employee_details_tab
	// SQL > select emp.contact from Employee emp
	@Query(value = "select emp.contact from Employee emp", nativeQuery = false)
	public List<Long> getAllContacts();

	// SQL > select emp_name from employee_details_tab
	// SQL > select emp.name from Employee emp
	@Query(value = "select emp.name from Employee emp", nativeQuery = false)
	public List<String> getAllnames();

//	Predefined keywords by JPA

	// select * from employee_details_tab where emp_name = 'John';
	List<Employee> findByName(String name);

	List<Employee> findByAge(Integer age);

//	select * from employee_details_tab where EMAIL like '%@test.com';
	List<Employee> findByEmailContains(String email);

//	@Modifying
	@Transactional
	@Query(value = "update employee_details_tab set contact=:contact where age between :minAge and :maxAge", nativeQuery = true)
	public void updateContacts(@Param("minAge") Integer minAge,@Param("maxAge")  Integer maxAge,@Param("contact")  Integer contact);

	@Query(value = "select emp_id as id,emp_name as name,INSURANCE_AMOUNT as insAmt,INSURANCE_NAME as insName, INSURANCE_STATUS as insStatus "
			+ "from employee_details_tab",nativeQuery = true)
	public List<InsuranceDTO> getInsuranceDetails();
	@Modifying
	@Transactional
	@Query(value = "update employee_details_tab set INSURANCE_STATUS=:status where emp_id=:id",nativeQuery = true)
	public void updateInsuranceById(@Param("id") Integer id,@Param("status") Integer status);
}
