package com.traveller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
@ComponentScan({ "com.traveller.controller" })
@ComponentScan({ "com.traveller.service" })
@EnableTransactionManagement
@EnableJpaRepositories
public class Traveller {

	public static void main(String[] args) {
		SpringApplication.run(Traveller.class, args);
		
		
	}

}
