package com.traveller.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.traveller.service.BookingService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/booking")
public class BookingController {


	
	@Autowired
	private BookingService bookingService;
	
}
