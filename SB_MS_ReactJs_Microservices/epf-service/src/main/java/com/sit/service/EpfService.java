package com.sit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sit.beans.EmployeeEPFInfo;
import com.sit.exceptions.EpfException;
import com.sit.repo.EpfRepo;

@Service
public class EpfService {
	@Autowired
	private EpfRepo repo;

	// save epf details
	public EmployeeEPFInfo saveEpfDetails(long salary, Integer empId) {
		EmployeeEPFInfo epfDetails = new EmployeeEPFInfo();
		EmployeeEPFInfo savedEpfDetails;
		Long epfAmomunt = salary / 24;
		String epfAccount = empId + "00EPF";
		epfDetails.setEmpAmount(epfAmomunt);
		epfDetails.setEmpId(empId);
		epfDetails.setEpfAccount(epfAccount);
		try {
			savedEpfDetails = repo.save(epfDetails);
		} catch (Exception e) {
			throw new EpfException("Error while saving EPF details of employee");
		}
		return savedEpfDetails;
	}

	public List<EmployeeEPFInfo> getAllEpfDetails() {
		List<EmployeeEPFInfo> list = repo.findAll();
		if (list.isEmpty())
			throw new EpfException("Epf details list is empty.");
		return list;
	}
}
