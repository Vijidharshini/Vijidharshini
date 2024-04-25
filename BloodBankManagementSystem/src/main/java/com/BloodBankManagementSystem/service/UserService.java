package com.BloodBankManagementSystem.service;


import java.util.List;

import com.BloodBankManagementSystem.dto.LoginDTO;
import com.BloodBankManagementSystem.dto.UserDTO;
import com.BloodBankManagementSystem.model.User;
import com.BloodBankManagementSystem.response.LoginResponse;


public interface UserService 
{
	 String saveUser(UserDTO userDTO);
	 LoginResponse loginUser(LoginDTO loginDTO);
	 
	 List<User> getAllUsers();
	 void deleteUser(int userId);
	 User getUserById(int userId);
	 
	 User updateUser(int userId, User updatedUser);
	 
	 
	
	 
	 
	
    

}
