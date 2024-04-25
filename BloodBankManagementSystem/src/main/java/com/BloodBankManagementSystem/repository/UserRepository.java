package com.BloodBankManagementSystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.BloodBankManagementSystem.model.User;


@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User, Integer> 
{
	Optional<User> findOneByEmailAndPassword(String email, String password);
	//User findByUserName(String userName);
     User findByEmail(String email);
	
}
