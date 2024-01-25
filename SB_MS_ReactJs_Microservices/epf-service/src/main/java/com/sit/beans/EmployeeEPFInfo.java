package com.sit.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "emp_epf_details")
public class EmployeeEPFInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer epfId;
	@Column
	private String epfAccount;
	@Column
	private Integer empId;
	@Column
	private Long empAmount;

	public EmployeeEPFInfo() {

	}

	public Integer getEpfId() {
		return epfId;
	}

	public void setEpfId(Integer epfId) {
		this.epfId = epfId;
	}

	public String getEpfAccount() {
		return epfAccount;
	}

	public void setEpfAccount(String epfAccount) {
		this.epfAccount = epfAccount;
	}

	public Integer getEmpId() {
		return empId;
	}

	public void setEmpId(Integer empId) {
		this.empId = empId;
	}

	public Long getEmpAmount() {
		return empAmount;
	}

	public void setEmpAmount(Long empAmount) {
		this.empAmount = empAmount;
	}

	@Override
	public String toString() {
		return "EmployeeEPFInfo [epfId=" + epfId + ", epfAccount=" + epfAccount + ", empId=" + empId + ", empAmount="
				+ empAmount + "]";
	}

}
