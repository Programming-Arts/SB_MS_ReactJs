package com.sit.bean;

public class EmployeeEPFInfo {
	private Integer epfId;
	private String epfAccount;
	private Integer empId;
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
