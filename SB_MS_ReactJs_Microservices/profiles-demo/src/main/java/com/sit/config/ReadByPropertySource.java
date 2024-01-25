package com.sit.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:application.properties")
public class ReadByPropertySource {
	@Value("${my-details.name}")
	private String name;
	@Value("${my-details.email}")
	private String email;
	@Value("${my-details.age}")
	private Integer age;

	public ReadByPropertySource() {
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "ReadByPropertySource [name=" + name + ", email=" + email + ", age=" + age + "]";
	}

}
