package com.sit.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee_details_tab")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "emp_id")
	private int id;
	@Column(name = "emp_name")
	private String name;
	@Column(name = "contact")
	private Long contact;
	@Column(name = "age")
	private Integer age;
	@Column(name = "email")
	private String email;
	@Column(name = "is_active")
	private Boolean isActive;
	@Column(name = "sal")
	private Long salary;
	@Column
	private String qualification;
	@Column
	private Integer yoe;
	@Column
	private String insuranceName;
	@Column
	private Boolean insuranceStatus;
	@Column
	private Long insuranceAmount;
	@Column
	private String epfAccNo;
	@Column
	private Boolean epfStatus;

	public Employee() {
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Long getSalary() {
		return salary;
	}

	public void setSalary(Long salary) {
		this.salary = salary;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
		System.out.println("Employee set id");
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
		System.out.println("Employee set name");
	}

	public String getEpfAccNo() {
		return epfAccNo;
	}

	public void setEpfAccNo(String epfAccNo) {
		this.epfAccNo = epfAccNo;
	}

	public Boolean getEpfStatus() {
		return epfStatus;
	}

	public void setEpfStatus(Boolean epfStatus) {
		this.epfStatus = epfStatus;
	}

	public String getInsuranceName() {
		return insuranceName;
	}

	public void setInsuranceName(String insuranceName) {
		this.insuranceName = insuranceName;
	}

	public Boolean getInsuranceStatus() {
		return insuranceStatus;
	}

	public void setInsuranceStatus(Boolean insuranceStatus) {
		this.insuranceStatus = insuranceStatus;
	}

	public Long getInsuranceAmount() {
		return insuranceAmount;
	}

	public void setInsuranceAmount(Long insuranceAmount) {
		this.insuranceAmount = insuranceAmount;
	}

	public Integer getYoe() {
		return yoe;
	}

	public void setYoe(Integer yoe) {
		this.yoe = yoe;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", contact=" + contact + ", age=" + age + ", email=" + email
				+ ", isActive=" + isActive + ", salary=" + salary + ", qualification=" + qualification
				+ ", insuranceName=" + insuranceName + ", insuranceStatus=" + insuranceStatus + ", insuranceAmount="
				+ insuranceAmount + ", epfAccNo=" + epfAccNo + ", epfStatus=" + epfStatus + "]";
	}

}
