package com.BloodBankManagementSystem.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.BloodBankManagementSystem.model.Donor;

@EnableJpaRepositories
@Repository
public interface DonorRepository extends JpaRepository<Donor, Integer>
{
    
	// Donor findByBloodGroup(String bloodGroup);
   
	//Donor findByGender(String gender);
	
	
    

	
		
}
