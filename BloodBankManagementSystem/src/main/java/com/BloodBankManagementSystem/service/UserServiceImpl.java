package com.BloodBankManagementSystem.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.BloodBankManagementSystem.dto.LoginDTO;
import com.BloodBankManagementSystem.dto.UserDTO;
import com.BloodBankManagementSystem.model.User;
import com.BloodBankManagementSystem.repository.UserRepository;
import com.BloodBankManagementSystem.response.LoginResponse;

@Service
public class UserServiceImpl implements UserService
{
	@Autowired
    private UserRepository userRepository;
	
	
   public UserServiceImpl(@Autowired UserRepository userRepository)
	{
			this.userRepository = userRepository;
	}
   
    @Autowired
    private PasswordEncoder passwordEncoder;

    
    
	@Override
	public String saveUser(UserDTO userDTO)
	{
	
		 User user = new User(
				 userDTO.getUserId(),
				 userDTO.getName(),
				 userDTO.getMobile(),
				 userDTO.getGender(),
				 userDTO.getAge(),
				 userDTO.getAddress(),
				 userDTO.getEmail(),
	             this.passwordEncoder.encode(userDTO.getPassword()),
	             userDTO.getcPassword()
	        );
		userRepository.save(user);
	   // return user.getUsername();
		return "Registration completed  Succesfully";
		
	}



	@Override
	public LoginResponse loginUser(LoginDTO loginDTO) 
	{
		 String msg = "";
	        User user1 = userRepository.findByEmail(loginDTO.getEmail());
	        if (user1 != null) 
	        {
	            String password = loginDTO.getPassword();
	            String encodedPassword = user1.getPassword();
	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
	            if (isPwdRight) 
	            {
	                Optional<User> user = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
	                if (user.isPresent()) 
	                {
	                    return new LoginResponse("Login Success", true);
	                } 
	                else 
	                {
	                    return new LoginResponse("Login Failed", false);
	                }
	            }
	            else 
	            {
	                return new LoginResponse("password Not Match", false);
	            }
	        }
	        else 
	        {
	            return new LoginResponse("Email not exits", false);
	        }
		
	}



	@Override
	public List<User> getAllUsers() 
	{
		return (List<User>)userRepository.findAll();
	}



	@Override
	public void deleteUser(int userId)
	{
		userRepository.deleteById(userId);
			
	}

	@Override
	public User getUserById(int userId) 
	{
		 return userRepository.findById(userId).orElse(null);
	}

	
	@Override
    public User updateUser(int userId, User updatedUser) 
	{
        User existingUser = userRepository.findById(userId).orElse(null);
        if (existingUser != null) 
        {
            // Update fields as needed
        	existingUser.setUserName(updatedUser.getName());
        	existingUser.setMobile(updatedUser.getMobile());
        	existingUser.setGender(updatedUser.getGender());
        	existingUser.setAge(updatedUser.getAge());
        	existingUser.setAddress(updatedUser.getAddress());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            // Encrypt new password
            existingUser.setcPassword(updatedUser.getcPassword());
            return userRepository.save(existingUser);
        }
        return null; // User not found
    }
	
	

 

}
