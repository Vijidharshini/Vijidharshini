package com.BloodBankManagementSystem.service;

import java.util.List;

import com.BloodBankManagementSystem.dto.AdminDTO;
import com.BloodBankManagementSystem.dto.LoginDTO;
import com.BloodBankManagementSystem.model.Admin;
import com.BloodBankManagementSystem.response.LoginResponse;

public interface AdminService 
{
	 String saveAdmin(AdminDTO adminDTO);
	 LoginResponse loginAdmin(LoginDTO loginDTO);
	 
	
	 List<Admin> getAllAdmins();
	 void deleteAdmin(int adminId);
	 Admin getAdminById(int adminId);
	  
	 Admin updateAdmin(int adminId, Admin updatedAdmin);
	 
}
