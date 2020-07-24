package com.traveller.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.traveller.model.User;
import com.traveller.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/users")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	@PostMapping(path="/createUser")
	public ResponseEntity<User>  saveUser(@Valid @RequestBody User user)
	{
	
		User saveUser = userService.saveUser(user);

	
		return new ResponseEntity<User>(saveUser, HttpStatus.CREATED);
	}
	
	@PostMapping(path="/createMultipleUsers")
	public ResponseEntity<List<User>>  saveEats(@Valid @RequestBody List<User> user)
	{
		
		List<User> saveUsers = userService.saveUsers(user);
		
		return new ResponseEntity<List<User>>(saveUsers, HttpStatus.CREATED);
	}
	@GetMapping(path="/retriveUsers")
	public ResponseEntity<List<User>> getEats()
	{
		List<User> userAll = userService.getUser();
		
		return new ResponseEntity<List<User>>(userAll, HttpStatus.OK);
		
	}
}
