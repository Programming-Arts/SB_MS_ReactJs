package com.sit.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sit.bean.QualificationDetails;

@Repository
public interface QualificationRepo extends JpaRepository<QualificationDetails, Integer>{

}
