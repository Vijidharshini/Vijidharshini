package com.BloodBankManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BloodBankManagementSystem.model.Requesting;
import com.BloodBankManagementSystem.repository.RequestingRepository;


@Service
public class RequestingServiceImpl implements RequestingService
{
	@Autowired
	RequestingRepository requestingRepository;

    public RequestingServiceImpl(@Autowired RequestingRepository requestingRepository) 
    {
        this.requestingRepository = requestingRepository;
    }

    
	
	@Override
	public Requesting saveBloodRequest(Requesting request)
	{
		return requestingRepository.save(request);
	}


	@Override
	public List<Requesting> getAllRequests() 
	{
		 return requestingRepository.findAll();
	}



	
	
	
	/*
	@Override
	public void updateStatus(String email)
	{
		requestingRepository.updateStatus(email);
		System.out.println("Updated");
	}
	
	@Override
	public void rejectStatus(String email)
	{
		requestingRepository.rejectStatus(email);
	}
	*/

}
