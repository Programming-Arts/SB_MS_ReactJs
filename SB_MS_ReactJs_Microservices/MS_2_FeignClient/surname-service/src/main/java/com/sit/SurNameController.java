package com.sit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurNameController {
	@Autowired
	private Environment env;

	@Autowired
	private Configurations configurations;

	@RequestMapping("/getSurname")
	public String getName() {
		return "Xyz";
	}
}
