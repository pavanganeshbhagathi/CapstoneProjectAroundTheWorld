package com.traveller.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.traveller.model.User;
import com.traveller.repository.UserRepository;

@Service
public class UserService {

	@Autowired
    private UserRepository userRepository;
	
       @Transactional
	   public User saveUser(User user) {
	       return userRepository.save(user);
	   }
	   
	   @Transactional
	   public List<User> saveUsers(List<User> user) {
	       return userRepository.saveAll(user);
	   }
	   
	   
	   public User getUserById(Long id) {
	        return userRepository.findById(id).orElse(null);
	    }

	   
	   public List<User> getUser() {
	       return userRepository.findAll();
	   }
	   
	  
	   public List<User> getUserNames(String userName)
	   {
	   	return userRepository.findByuserName(userName);
	   }
}
