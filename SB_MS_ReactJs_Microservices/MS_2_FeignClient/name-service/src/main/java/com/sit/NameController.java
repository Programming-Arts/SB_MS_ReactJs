package com.sit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class NameController {
	@Autowired
	private Environment env;

	@Autowired
	private Configurations configurations;

	@Autowired
	private FeignClientProxy feignClient;

	@RequestMapping("/getName")
	public String getName() {

//		calling surname service from name service
//		RestTemplate rt = new RestTemplate();
//		String surname = rt.getForObject("http://localhost:7072/getSurname", String.class);

//		use feign client interface to call surname service
		String surname = feignClient.getSurName();
		return configurations.getName() + "     " + surname;
	}
}
