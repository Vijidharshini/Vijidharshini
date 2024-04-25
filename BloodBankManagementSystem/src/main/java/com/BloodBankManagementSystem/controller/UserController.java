package com.BloodBankManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BloodBankManagementSystem.dto.LoginDTO;
import com.BloodBankManagementSystem.dto.UserDTO;
import com.BloodBankManagementSystem.model.User;
import com.BloodBankManagementSystem.response.LoginResponse;
import com.BloodBankManagementSystem.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("api/users")
public class UserController
{
    @Autowired
    private UserService userService;
    
    /*
    @PostMapping(path ="/add")
    public String saveUser(@RequestBody UserDTO userDTO)
    {
    	
        String id = userService.saveUser(userDTO);
        return id;
     	
    }*/
    
    @PostMapping(path ="/add")
    public String saveUser(@RequestBody UserDTO userDTO) throws Exception
    {
    	
    	 if (userDTO.getPassword().equals(userDTO.getcPassword())) 
    	 {

    	        String id = userService.saveUser(userDTO);
    	        return id;
         }

         return "Password and conform password not match";
    }
    
    
    
    
  
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)throws Exception
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    
   
  
    
    
    @GetMapping("/userlist")
   	public ResponseEntity<List<User>> getAllUsers() throws Exception
   	{
   		List<User> users = userService.getAllUsers();
   		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
   	}
    
    
    @GetMapping("/{userId}")
    public User getUserById(@PathVariable int userId) throws Exception
    {
        return userService.getUserById(userId);
    }
    
    
 
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable int userId) throws Exception
    {
        userService.deleteUser(userId);
        
    }
    
    
    @PutMapping("/update/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable int userId, @RequestBody User updatedUser)throws Exception 
    {
        User updated = userService.updateUser(userId, updatedUser);
        if (updated != null) 
        {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } 
        else 
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // User not found
        }
    }
    
}