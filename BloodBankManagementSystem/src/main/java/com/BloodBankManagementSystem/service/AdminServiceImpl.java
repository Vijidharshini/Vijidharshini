package com.BloodBankManagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.BloodBankManagementSystem.dto.AdminDTO;
import com.BloodBankManagementSystem.dto.LoginDTO;
import com.BloodBankManagementSystem.model.Admin;
import com.BloodBankManagementSystem.repository.AdminRepository;
import com.BloodBankManagementSystem.response.LoginResponse;

@Service
public class AdminServiceImpl implements AdminService 
{
	
	@Autowired
    private AdminRepository adminRepository;
	
	
    public AdminServiceImpl(@Autowired AdminRepository adminRepository)
	{
			this.adminRepository = adminRepository;
	}
   
    @Autowired
    private PasswordEncoder passwordEncoder;

    
	@Override
	public String saveAdmin(AdminDTO adminDTO) 
	{
		Admin admin = new Admin(
				 adminDTO.getAdminId(),
				 adminDTO.getName(),
				 adminDTO.getMobile(),
				 adminDTO.getGender(),
				 adminDTO.getAge(),
				 adminDTO.getAddress(),
				 adminDTO.getEmail(),
	             this.passwordEncoder.encode(adminDTO.getPassword()),
	             adminDTO.getcPassword()
	        );
		adminRepository.save(admin);
	    //return admin.getName();
		return "Admin Register Succesfully";
	}

	
	
	@Override
	public LoginResponse loginAdmin(LoginDTO loginDTO) {
		 String msg = "";
	        Admin admin1 = adminRepository.findByEmail(loginDTO.getEmail());
	        if (admin1 != null) 
	        {
	            String password = loginDTO.getPassword();
	            String encodedPassword = admin1.getPassword();
	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
	            if (isPwdRight) 
	            {
	                Optional<Admin> admin = adminRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
	                if (admin.isPresent()) 
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
	public List<Admin> getAllAdmins() {
		
		return (List<Admin>)adminRepository.findAll();
	}



	@Override
	public void deleteAdmin(int adminId) {
		adminRepository.deleteById(adminId);
		
	}



	@Override
	public Admin getAdminById(int adminId) {
		
		return adminRepository.findById(adminId).orElse(null);
	}



	@Override
	public Admin updateAdmin(int adminId, Admin updatedAdmin) 
	{
		 Admin existingAdmin = adminRepository.findById(adminId).orElse(null);
	        if (existingAdmin != null) 
	        {
	            // Update fields as needed
	        	existingAdmin.setUserName(updatedAdmin.getName());
	        	existingAdmin.setMobile(updatedAdmin.getMobile());
	        	existingAdmin.setGender(updatedAdmin.getGender());
	        	existingAdmin.setAge(updatedAdmin.getAge());
	        	existingAdmin.setAddress(updatedAdmin.getAddress());
	        	existingAdmin.setEmail(updatedAdmin.getEmail());
	        	existingAdmin.setPassword(passwordEncoder.encode(updatedAdmin.getPassword()));
	            // Encrypt new password
	            existingAdmin.setcPassword(updatedAdmin.getcPassword());
	            return adminRepository.save(existingAdmin);
	        }
	        return null; // Admin not found
	}
	
	

}
