package com.BloodBankManagementSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BloodBankManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(BloodBankManagementSystemApplication.class, args);
	}

}
