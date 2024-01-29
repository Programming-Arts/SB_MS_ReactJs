package com.sit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurNameController {

	@Autowired
	private Configurations configurations;

	@Autowired
	private Environment env;

	@RequestMapping("/getSurname")
	public String getName() {
		String portNumber = env.getProperty("local.server.port");
		return "Xyz " + portNumber;
	}
}
