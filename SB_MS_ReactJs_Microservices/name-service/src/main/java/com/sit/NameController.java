package com.sit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NameController {
	@Autowired
	private Environment env;

	@Autowired
	private Configurations configurations;

	@RequestMapping("/getName")
	public String getName() {
		String envDetails=env.getProperty("spring.profiles.active");
		return configurations.getName()+" "+envDetails;
	}
}
