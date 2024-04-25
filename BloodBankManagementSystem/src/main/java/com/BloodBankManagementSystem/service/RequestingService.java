package com.BloodBankManagementSystem.service;



import java.util.List;

import com.BloodBankManagementSystem.model.Requesting;


public interface RequestingService 
{

	List<Requesting> getAllRequests();

	Requesting saveBloodRequest(Requesting request);
	
	
	//void updateStatus(String email);

	//void rejectStatus(String email);
}
