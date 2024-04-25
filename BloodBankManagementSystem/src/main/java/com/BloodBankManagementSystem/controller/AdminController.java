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

import com.BloodBankManagementSystem.dto.AdminDTO;
import com.BloodBankManagementSystem.dto.LoginDTO;
import com.BloodBankManagementSystem.model.Admin;
import com.BloodBankManagementSystem.response.LoginResponse;
import com.BloodBankManagementSystem.service.AdminService;



@RestController
@CrossOrigin
@RequestMapping("api/admins")
public class AdminController
{
	
	@Autowired
    private AdminService adminService;
	
	 
    public AdminController(@Autowired AdminService adminService) 
    {
        this.adminService = adminService;
    }
    
    
    @PostMapping(path ="/add")
    public String saveAdmin(@RequestBody AdminDTO adminDTO) throws Exception
    {
    	 if (adminDTO.getPassword().equals(adminDTO.getcPassword())) 
    	 {

    	        String id = adminService.saveAdmin(adminDTO);
    	        return id;
         }

         return "Password and conform password not match";
    		
    }
    
    
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginAdmin(@RequestBody LoginDTO loginDTO)throws Exception
    {
        LoginResponse loginResponse = adminService.loginAdmin(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    
    
    
    
    @GetMapping("/adminlist")
   	public ResponseEntity<List<Admin>> getAllAdmins() throws Exception
   	{
   		List<Admin> admins = adminService.getAllAdmins();
   		return new ResponseEntity<List<Admin>>(admins, HttpStatus.OK);
   	}
    
    
    @GetMapping("/{adminId}")
    public Admin getAdminById(@PathVariable int adminId) throws Exception
    {
        return adminService.getAdminById(adminId);
    }
    
    
    @DeleteMapping("/{adminId}")
    public void deleteAdmin(@PathVariable int adminId) throws Exception
    {
    	adminService.deleteAdmin(adminId);
    	
    }
    
    
    
    @PutMapping("update/{adminId}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable int adminId, @RequestBody Admin updatedAdmin)throws Exception 
    {
        Admin updated = adminService.updateAdmin(adminId, updatedAdmin);
        if (updated != null)
        {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        }
        else 
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // admin not found
        }
    }

}
