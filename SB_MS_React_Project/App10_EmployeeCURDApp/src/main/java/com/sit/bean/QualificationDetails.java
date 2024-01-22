package com.sit.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Qualification_Details")
public class QualificationDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int qId;
	@Column
	private String qualificationName;
	@Column
	private Boolean isActive;
	
	
	
	
	public int getqId() {
		return qId;
	}




	public void setqId(int qId) {
		this.qId = qId;
	}




	public String getQualificationName() {
		return qualificationName;
	}




	public void setQualificationName(String qualificationName) {
		this.qualificationName = qualificationName;
	}




	public Boolean getIsActive() {
		return isActive;
	}




	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}




	@Override
	public String toString() {
		return "QualificationDetails [qId=" + qId + ", qualification=" + qualificationName + ", isActive=" + isActive + "]";
	}
	
	
}
