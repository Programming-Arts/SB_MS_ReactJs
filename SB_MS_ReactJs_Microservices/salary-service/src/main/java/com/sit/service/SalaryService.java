package com.sit.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sit.bean.SalaryDetails;
import com.sit.repo.SalaryDetailsRepo;

@Service
public class SalaryService {

	@Autowired
	private SalaryDetailsRepo repo;

	public SalaryDetails createSalary(SalaryDetails details) {
		SalaryDetails savedSalaryDetails = new SalaryDetails();
		try {
			savedSalaryDetails = repo.save(details);
		} catch (Exception e) {
			System.out.println("error while saving salary details");
		}
		return savedSalaryDetails;
	}

	public SalaryDetails updateSalary(SalaryDetails details) {
		SalaryDetails savedSalaryDetails = new SalaryDetails();
		try {
			int salId = details.getSalId();
			Optional<SalaryDetails> optionalSalaryDetails = repo.findById(salId);
			if (optionalSalaryDetails.isPresent()) {
				savedSalaryDetails = optionalSalaryDetails.get();
				savedSalaryDetails.setSalary(details.getSalary());
				savedSalaryDetails.setYoe(details.getYoe());
				savedSalaryDetails = repo.save(savedSalaryDetails);
			}

		} catch (Exception e) {
			System.out.println("error while updating salary details");
		}
		return savedSalaryDetails;
	}

	public Integer getSalaryByYoe(Long exp) {

		Integer salaryByYoe = 0;
		try {
			salaryByYoe = repo.getSalaryByYoe(exp);
		} catch (Exception e) {
			System.out.println("No salary for specified year of experience");
		}
		return salaryByYoe;
	}

	public void deleteById(int id) {
		repo.deleteById(id);
	}

	public List<SalaryDetails> getAllSalaryDetails() {
		return repo.findAll();
	}
}
