package com.sit.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "salary_details_tab")
public class SalaryDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "sal_id")
	private int salId;
	@Column
	private Integer yoe;
	@Column
	private Long salary;

	public SalaryDetails() {
		// TODO Auto-generated constructor stub
	}

	public int getSalId() {
		return salId;
	}

	public void setSalId(int salId) {
		this.salId = salId;
	}

	public Integer getYoe() {
		return yoe;
	}

	public void setYoe(Integer yoe) {
		this.yoe = yoe;
	}

	public Long getSalary() {
		return salary;
	}

	public void setSalary(Long salary) {
		this.salary = salary;
	}

	@Override
	public String toString() {
		return "SalaryDetails [salId=" + salId + ", yoe=" + yoe + ", salary=" + salary + "]";
	}

}
