package com.BloodBankManagementSystem.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.BloodBankManagementSystem.model.BloodDetails;

@EnableJpaRepositories
@Repository
public interface BloodDetailsRepository extends JpaRepository<BloodDetails, Integer> {

	   //Optional<BloodDetails> findByBloodGroup(String bloodGroup);
	
	   BloodDetails findByBloodGroup(String bloodGroup);

}
