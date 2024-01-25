package com.sit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sit.beans.EmployeeEPFInfo;
import com.sit.service.EpfService;

@RestController
public class EpfController {
	@Autowired
	private EpfService service;

	@GetMapping("/saveEpfDetails/{salary}/{empId}")
	public ResponseEntity<EmployeeEPFInfo> saveEpfDetails(@PathVariable("salary") Long salary,
			@PathVariable("empId") Integer empId) {
		EmployeeEPFInfo savedEpfDetails = service.saveEpfDetails(salary, empId);
		ResponseEntity<EmployeeEPFInfo> responseEntity = new ResponseEntity<EmployeeEPFInfo>(savedEpfDetails,
				HttpStatus.OK);
		return responseEntity;
	}

	@GetMapping("/getEpfDetails")
	public ResponseEntity<List> getAllEpfDetails() {
		List<EmployeeEPFInfo> list = service.getAllEpfDetails();
		return new ResponseEntity<List>(list, HttpStatus.OK);
	}
}
