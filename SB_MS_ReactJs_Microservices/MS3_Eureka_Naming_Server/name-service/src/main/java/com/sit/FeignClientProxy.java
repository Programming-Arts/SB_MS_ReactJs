package com.sit;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(name = "surname-service")
public interface FeignClientProxy {
	@RequestMapping("/getSurname")
	public String getSurName();
}