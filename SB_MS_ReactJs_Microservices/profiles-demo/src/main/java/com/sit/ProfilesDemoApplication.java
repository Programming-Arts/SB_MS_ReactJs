package com.sit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.sit.config.Configurations;
import com.sit.config.ReadByPropertySource;

@SpringBootApplication
public class ProfilesDemoApplication implements CommandLineRunner {
	@Autowired
	private Configurations configurations1;
	
	@Autowired
	private ReadByPropertySource configurations2;

	public static void main(String[] args) {
		SpringApplication.run(ProfilesDemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(configurations1);
		System.out.println("===============");
		System.out.println(configurations2);

	}
}
